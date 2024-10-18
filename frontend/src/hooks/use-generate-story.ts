import { errorHandler } from "@/handlers";
import { GenerateStoryParams, StoryStatus } from "@/interfaces";
import { generateStory } from "@/services/spooky-services";
import { panelSettingsStore, spookyStoryStore } from "@/store";
import { HttpStatusCode } from "axios";
import { useCallback } from "react";

export function useGenerateStory() {
  const { currentStory, setCurrentStory, setAirStory } = spookyStoryStore();

  const { levelTerror, effect } = panelSettingsStore();

  const handleGenerateStory = useCallback(async () => {
    if (!currentStory || !currentStory.caption || !currentStory.public_id || !levelTerror || !effect) return;

    try {
      setAirStory(true);

      const params: GenerateStoryParams = {
        effect,
        level_terror: levelTerror,
        image_caption: currentStory.caption,
        public_image_id: currentStory.public_id,
      }
      const response = await generateStory(params);
      if (response.status === HttpStatusCode.Created) {
        const { spooky_story, transformed_image_url } = response.data;
        setCurrentStory({
          ...currentStory,
          paragraph: spooky_story,
          tranformed_image: transformed_image_url,
          settings: {
            effect,
            level_terror: levelTerror,
          },
          status: StoryStatus.CREATED,
        });
      }
    } catch (error) {
      errorHandler(error);
    }
  }, [currentStory, effect, levelTerror, setCurrentStory, setAirStory]);

  return { handleGenerateStory };
}