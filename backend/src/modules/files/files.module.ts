import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { CloudinaryDrivenService } from '@/src/services/cloudinary/cloudinary-driven.service';

@Module({
  controllers: [FilesController],
  providers: [FilesService, CloudinaryDrivenService],
})
export class FilesModule { }
