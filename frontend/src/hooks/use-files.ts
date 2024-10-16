import { errorHandler } from "@/handlers";
import { useCallback, useState } from "react";
import { NotificationManager } from "@/lib/notifications";
import { postUploadFile } from "@/services";
import { HttpStatusCode } from "axios";
// import { userInformationStore } from "@/store";

export function useUploadFile() {
  const [isLoading, setIsLoading] = useState(false);
  // const { setUserInformation } = userInformationStore();

  const handleUploadFile = useCallback(async (file: File) => {
    if (file) {
      setIsLoading(true);
      try {
        if (file) {
          const response = await postUploadFile(file);
          if (response.status === HttpStatusCode.Created) {
            const { image } = response.data;
            console.log({ image });

            // setUserInformation(user_information);
            NotificationManager({
              type: 'success',
              message: 'Imagen subida con éxito!',
            });
          }
        }
      } catch (error) {
        errorHandler(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  return { isLoading, handleUploadFile };
}