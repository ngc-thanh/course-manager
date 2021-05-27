import { Module } from '@nestjs/common';
import { VideoService } from './service';
import { VideoController } from './controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from './model';

@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule {}