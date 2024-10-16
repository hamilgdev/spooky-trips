import { BadRequestException, Injectable } from '@nestjs/common';
import { CloudinaryDrivenService } from '@/src/services/cloudinary/cloudinary-driven.service';

@Injectable()
export class FilesService {
  constructor(
    private readonly cloudinaryDrivenService: CloudinaryDrivenService,
  ) {}

  async uploadFile(file: Express.Multer.File) {
    try {
      const uploadedFile = await this.cloudinaryDrivenService.uploadFile(file);
      const { public_id, original_filename, url, info } = uploadedFile;
      return {
        image: {
          url,
          public_id,
          original_filename,
          captioning: info.detection.captioning,
        },
      };
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Failed to upload file');
    }
  }
}
