
import { GenerateStoryParams, GenerateStoryResponse } from "@/interfaces";
import spookyApi from "@/services/api/spooky-api";
import { AxiosResponse } from "axios";

export async function generateStory(params: GenerateStoryParams): Promise<AxiosResponse<GenerateStoryResponse>> {
  const url = '/spooky/generate-story';
  return await spookyApi.post(url, params);
}