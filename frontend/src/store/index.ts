import { EffectTerrorTypes, LevelTerrorTypes, Story, StoryStatus } from "@/interfaces";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export type PanelSettingsStore = {
  levelTerror: LevelTerrorTypes | null;
  setLevelTerror: (level: LevelTerrorTypes) => void;
  effect: EffectTerrorTypes | null;
  setEffect: (effect: EffectTerrorTypes) => void;
  globalSettings: boolean;
  setGlobalSettings: (globalSettings: boolean) => void;
  setResetFilters: () => void;
};

export const panelSettingsStore = create<PanelSettingsStore>((set) => ({
  levelTerror: null,
  setLevelTerror: (level: LevelTerrorTypes) => set({ levelTerror: level }),
  effect: null,
  setEffect: (effect: EffectTerrorTypes) => set({ effect }),
  globalSettings: false,
  setGlobalSettings: (globalSettings: boolean) => set({ globalSettings }),
  setResetFilters: () => set({ levelTerror: null, effect: null }),
}));

export type SpookyStoryStore = {
  currentStory: Story | null;
  onAirStory: boolean;
  setAirStory: (onAirStory: boolean) => void;
  setNewStory: () => void;
  setCurrentStory: (story: Story) => void;
  setRemoveCurrentStory: () => void;
  setSelectStory: (story: Story) => void;
};

const draftStory: Story = {
  image_url: null,
  public_id: null,
  caption: null,
  original_name: null,
  paragraph: null,
  isSelected: false,
  status: StoryStatus.PENDING
}

export const spookyStoryStore = create<SpookyStoryStore>()(
  persist(
    (set) => ({
      currentStory: null,
      onAirStory: false,
      setAirStory: (onAirStory: boolean) => set({ onAirStory }),
      setNewStory: () => {
        const timeline = timelineStoryStore.getState().timeline;
        const globalSettings = panelSettingsStore.getState().globalSettings;

        if (!globalSettings) panelSettingsStore.getState().setResetFilters();

        if (timeline) timeline.push(draftStory);
        else timelineStoryStore.setState({ timeline: [draftStory] });
        spookyStoryStore.getState().setCurrentStory(draftStory);
      },
      setCurrentStory: (story: Story) => {
        const timeline = timelineStoryStore.getState().timeline;
        if (timeline) {
          const editingStory = timeline.find((story) => story.status === StoryStatus.EDITING);
          if (editingStory) {
            const index = timeline.indexOf(editingStory);
            timeline[index] = story;
            set({ currentStory: story });
          } else set({ currentStory: story });
        }
      },
      setRemoveCurrentStory: () => {
        const timeline = timelineStoryStore.getState().timeline;
        if (timeline) {
          const newTimeline = timeline.filter((story) => story.status !== StoryStatus.PENDING);
          timelineStoryStore.setState({ timeline: newTimeline });
          const lastStory = newTimeline[newTimeline.length - 1];
          set({ currentStory: lastStory });
        }
      },
      setSelectStory: (story: Story) => {
        const timeline = timelineStoryStore.getState().timeline;

        if (timeline) {
          timeline.forEach((page) => (page.isSelected = false));
          const selectedStory = timeline.find((page) => page.guid === story.guid);
          if (selectedStory) {
            panelSettingsStore.setState({
              effect: selectedStory?.settings?.effect,
              levelTerror: selectedStory?.settings?.level_terror,
            });

            const index = timeline.indexOf(selectedStory);
            timeline[index] = { ...selectedStory, isSelected: true };
            set({ currentStory: selectedStory });
          }
        }
      },
    }),
    {
      name: 'spooky-story',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export type TimelineStoryStore = {
  timeline: Story[] | null;
  setUpdateTimeline: (story: Story) => void;
};

export const timelineStoryStore = create<TimelineStoryStore>()(
  persist(
    (set, get) => ({
      timeline: null,
      setUpdateTimeline: (story: Story) => {
        const setCurrentStory = spookyStoryStore.getState().setCurrentStory;
        const timeline = get().timeline;
        if (timeline) {
          const pendingStory = timeline.find((story) => story.status === StoryStatus.PENDING);
          if (pendingStory) {
            const index = timeline.indexOf(pendingStory);
            timeline[index] = story;
            set({ timeline });
          } else {
            set({ timeline: [...timeline, story] });
          }
        } else {
          set({ timeline: [story] });
        }
        setCurrentStory(story);
      },
    }),
    {
      name: 'timeline-story',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
