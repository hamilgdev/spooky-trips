import { Injectable } from '@nestjs/common';
import cloudinary, { UploadApiOptions } from 'cloudinary';
import { envs } from '@/src/config';
import streamifier from 'streamifier';

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
}
