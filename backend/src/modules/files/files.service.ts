import { BadRequestException, Injectable } from '@nestjs/common';
import { CloudinaryDrivenService } from '@/src/services/cloudinary/cloudinary-driven.service';
import { formatTransformedImageHandler } from '@/src/handlers';

@Injectable()
export class FilesService {
  constructor(
    private readonly cloudinaryDrivenService: CloudinaryDrivenService,
  ) {}

  async uploadFile(file: Express.Multer.File) {
    try {
      const uploadedFile = await this.cloudinaryDrivenService.uploadFile(file);
      const { public_id, original_filename, secure_url, info } = uploadedFile;
      const transformedImage =
        await this.cloudinaryDrivenService.generativeFill(public_id);

      return {
        image: {
          guid: public_id.split('/').at(-1) || '',
          public_id,
          original_filename,
          secure_url,
          captioning: info.detection.captioning,
          transformed: formatTransformedImageHandler(transformedImage),
        },
      };
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Failed to upload file');
    }
  }
}
