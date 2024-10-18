import { errorHandler } from "@/handlers";
import { useCallback, useState } from "react";
import { postUploadFile } from "@/services";
import { HttpStatusCode } from "axios";
import { spookyStoryStore, timelineStoryStore } from "@/store";
import { Story, StoryStatus } from "@/interfaces";
import { useRouter } from "next/navigation";

export function useUploadFile() {
  const router = useRouter();

  const { setUpdateTimeline } = timelineStoryStore();
  const { setAirStory } = spookyStoryStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadFile = useCallback(async (file: File) => {
    if (file) {
      setIsLoading(true);
      setAirStory(true);
      try {
        if (file) {
          const response = await postUploadFile(file);
          if (response.status === HttpStatusCode.Created) {
            const { image } = response.data;
            const currentStory: Story = {
              guid: image.guid,
              public_id: image.public_id,
              caption: image.captioning.data.caption,
              original_name: image.original_filename,
              image_url: image.secure_url,
              tranformed_image: image.transformed,
              isSelected: true,
              status: StoryStatus.EDITING,
            }
            setUpdateTimeline(currentStory);
            router.push(`/spooky-studio/new-story`);
          }
        }
      } catch (error) {
        errorHandler(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [setUpdateTimeline, router, setAirStory]);

  return { isLoading, handleUploadFile };
}