import { errorHandler } from "@/handlers";
import { useCallback, useState } from "react";
import { NotificationManager } from "@/lib/notifications";
import { postUploadFile } from "@/services";
import { HttpStatusCode } from "axios";
import { spookyStoryStore, timelineStoryStore } from "@/store";
import { Story, StoryStatus } from "@/interfaces";
import { useRouter } from "next/navigation";

const rawStory: Story = {
  image_url: 'http://res.cloudinary.com/prod-hamilgdev/image/upload/v1729090578/upload-unsigned-images/spooky/nojojakrnzczbp22m3xb.webp',
  public_id: 'upload-unsigned-images/spooky/nojojakrnzczbp22m3xb',
  caption: 'A family of multiple generations walking together on a beach, with mountains visible in the background and the ocean reflecting the sky.',
  original_name: 'vacationing',
  status: StoryStatus.EDITING
}

export function useUploadFile() {
  const router = useRouter();

  const { setUpdateTimeline } = timelineStoryStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadFile = useCallback(async (file: File) => {
    if (file) {
      setIsLoading(true);
      try {
        if (file) {
          setUpdateTimeline(rawStory);
          router.push(`/spooky-studio/new-story`);
          // const response = await postUploadFile(file);
          // if (response.status === HttpStatusCode.Created) {
          //   const { image } = response.data;
          //   const publicId = image.public_id.split('/').at(-1);
          //   const currentStory: Story = {
          //     public_id: publicId || '',
          //     caption: image.captioning.data.caption,
          //     original_name: image.original_filename,
          //     image_url: image.url,
          //     status: StoryStatus.EDITING,
          //   }
          //   setCurrentStory(currentStory);
          //   setUpdateTimeline(currentStory);
          //   NotificationManager({
          //     type: 'success',
          //     message: 'Imagen subida con éxito!',
          //   });
          // }
        }
      } catch (error) {
        errorHandler(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [router, setUpdateTimeline]);

  return { isLoading, handleUploadFile };
}