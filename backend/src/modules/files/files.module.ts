import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { CloudinaryDrivenService } from '@/src/modules/services/cloudinary/cloudinary-driven.service';

@Module({
  controllers: [FilesController],
  providers: [FilesService, CloudinaryDrivenService],
})
export class FilesModule {}
