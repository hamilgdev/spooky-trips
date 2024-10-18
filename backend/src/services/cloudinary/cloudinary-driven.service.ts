import { Injectable } from '@nestjs/common';
import cloudinary, {
  ConfigAndUrlOptions,
  ImageTransformationAndTagsOptions,
  UploadApiOptions,
} from 'cloudinary';
import { envs } from '@/src/config';
import streamifier from 'streamifier';
import { GenerateSpookyStoryDto } from '@/src/modules/spooky/dto';
import { USE_CASES } from '@/src/constant/use-cases';

@Injectable()
export class CloudinaryDrivenService {
  constructor() {
    cloudinary.v2.config({
      cloud_name: envs.CLOUDINARY_CLOUD_NAME,
      api_key: envs.CLOUDINARY_API_KEY,
      api_secret: envs.CLOUDINARY_API_SECRET,
    });
  }

  /**
   * Method to upload a file to Cloudinary using disk storage
   */
  async uploadFile(
    file: Express.Multer.File,
  ): Promise<cloudinary.UploadApiResponse> {
    const options: UploadApiOptions = {
      folder: 'upload-unsigned-images/spooky',
      detection: 'captioning',
    };
    return cloudinary.v2.uploader.upload(`./uploads/${file.filename}`, options);
  }

  /**
   * Method to upload an image to Cloudinary using a buffer
   */
  async uploadImage(
    file: Express.Multer.File,
  ): Promise<cloudinary.UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );
      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }

  async generativeSpookyBackground(
    prompt: GenerateSpookyStoryDto,
  ): Promise<any> {
    const { effect, public_image_id } = prompt;
    const { spookyStory } = USE_CASES;
    const customEffect = spookyStory.effects.find((e) => e.key === effect);

    const parsedPromptToUrl = encodeURIComponent(customEffect.prompt);

    const options: ImageTransformationAndTagsOptions | ConfigAndUrlOptions = {
      transformation: [
        { effect: `gen_background_replace:prompt_an${parsedPromptToUrl}` },
        {
          background: 'gen_fill',
          height: 1920,
          aspect_ratio: '9:16',
          crop: 'pad',
        },
      ],
    };

    return cloudinary.v2.image(public_image_id, options);
  }

  async generativeFill(public_image_id: string): Promise<any> {
    const options: ImageTransformationAndTagsOptions | ConfigAndUrlOptions = {
      background: 'gen_fill',
      height: 1920,
      aspect_ratio: '9:16',
      crop: 'pad',
    };

    return cloudinary.v2.image(public_image_id, options);
  }
}
