import { EffectTerror, LevelTerror, Story, StoryStatus } from "@/interfaces";
import { create } from "zustand";

export type PanelSettingsStore = {
  levelTerror: LevelTerror | null;
  setLevelTerror: (level: LevelTerror) => void;
  effect: EffectTerror | null;
  setEffect: (effect: EffectTerror) => void;
  globalSettings: boolean;
  setGlobalSettings: (globalSettings: boolean) => void;
  setResetFilters: () => void;
};

export const panelSettingsStore = create<PanelSettingsStore>((set) => ({
  levelTerror: null,
  setLevelTerror: (level: LevelTerror) => set({ levelTerror: level }),
  effect: null,
  setEffect: (effect: EffectTerror) => set({ effect }),
  globalSettings: false,
  setGlobalSettings: (globalSettings: boolean) => set({ globalSettings }),
  setResetFilters: () => set({ levelTerror: null, effect: null }),
}));

export type SpookyStoryStore = {
  currentStory: Story | null;
  setNewStory: () => void;
  setCurrentStory: (story: Story) => void;
  setRemoveCurrentStory: () => void;
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

export const spookyStoryStore = create<SpookyStoryStore>((set) => ({
  currentStory: null,
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
      }
      else set({ currentStory: story });
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
  }
}));

export type TimelineStoryStore = {
  timeline: Story[] | null;
  setUpdateTimeline: (story: Story) => void;
};

export const timelineStoryStore = create<TimelineStoryStore>((set, get) => ({
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
      }
      else set({ timeline: [...timeline, story] });
    }
    else set({ timeline: [story] });
    setCurrentStory(story);
  },
}));
