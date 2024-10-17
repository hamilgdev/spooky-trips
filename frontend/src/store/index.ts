import { EffectTerror, LevelTerror, Story } from "@/interfaces";
import { create } from "zustand";

export type Store = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const uiStore = create<Store>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
}));


export type PanelSettingsStore = {
  levelTerror: LevelTerror | null;
  setLevelTerror: (level: LevelTerror) => void;
  effect: EffectTerror | null;
  setEffect: (effect: EffectTerror) => void;
  globalSettings: boolean;
  setGlobalSettings: (globalSettings: boolean) => void;
};

export const panelSettingsStore = create<PanelSettingsStore>((set) => ({
  levelTerror: null,
  setLevelTerror: (level: LevelTerror) => set({ levelTerror: level }),
  effect: null,
  setEffect: (effect: EffectTerror) => set({ effect }),
  globalSettings: false,
  setGlobalSettings: (globalSettings: boolean) => set({ globalSettings })
}));


export type SpookyStoryStore = {
  currentStory: Story | null;
  setCurrentStoryStory: (story: Story) => void;
};

export const spookyStoryStore = create<SpookyStoryStore>((set) => ({
  currentStory: null,
  setCurrentStoryStory: (story: Story) => set({ currentStory: story })
}));

export type TimelineStoryStore = {
  timeline: Story[] | null;
  setTimeline: (timeline: Story[]) => void;
};

export const timelineStoryStore = create<TimelineStoryStore>((set) => ({
  timeline: null,
  setTimeline: (timeline: Story[]) => set({ timeline })
}));
