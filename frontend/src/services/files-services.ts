import { FileUploadResponse } from "@/interfaces";
import { AxiosResponse } from "axios";
import spookyApi from "@/services/api/spooky-api";

export async function postUploadFile(file: File): Promise<AxiosResponse<FileUploadResponse>> {
  const url = '/images/upload';
  const formData = new FormData();
  formData.append('image', file);
  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  return await spookyApi.post(url, formData, { headers });
}