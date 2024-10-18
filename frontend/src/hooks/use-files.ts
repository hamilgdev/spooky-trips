import { errorHandler } from "@/handlers";
import { useCallback, useState } from "react";
import { NotificationManager } from "@/lib/notifications";
import { postUploadFile } from "@/services";
import { HttpStatusCode } from "axios";
import { timelineStoryStore } from "@/store";
import { Story, StoryStatus } from "@/interfaces";
import { useRouter } from "next/navigation";

export function useUploadFile() {
  const router = useRouter();

  const { setUpdateTimeline } = timelineStoryStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadFile = useCallback(async (file: File) => {
    if (file) {
      setIsLoading(true);
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
              isSelected: false,
              status: StoryStatus.EDITING,
            }
            setUpdateTimeline(currentStory);
            NotificationManager({
              type: 'success',
              message: 'Imagen subida con éxito!',
            });
            router.push(`/spooky-studio/new-story`);
          }
        }
      } catch (error) {
        errorHandler(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [setUpdateTimeline, router]);

  return { isLoading, handleUploadFile };
}