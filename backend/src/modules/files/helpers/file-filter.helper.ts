import { BadRequestException } from '@nestjs/common';

export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: (error: Error | null, acceptFile: boolean | undefined) => void,
) => {
  if (!file) return cb(new BadRequestException('No image provided'), false);

  if (!file.mimetype.match(/\/(jpg|jpeg|png|webp)$/))
    return cb(new BadRequestException('Only images files are allowed!'), false);
  cb(null, true);
};
