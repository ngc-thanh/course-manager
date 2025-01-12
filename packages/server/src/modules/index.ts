import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExampleModule } from './example';
import { configService } from '../config/config.service';
import { CourseModule } from './course';
import { VideoModule } from './video';
import { SubtitlesModule } from './subtitles/subtitles.module';
import { CommentsModule } from './comments/comments.module';
import { SubLinesModule } from './sub-lines/sub-lines.module';
import { CommentReactionsModule } from './comment-reactions/comment-reactions.module';
import { AuthModule } from './auth';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ExampleModule,
    CourseModule,
    VideoModule,
    SubtitlesModule,
    CommentsModule,
    SubLinesModule,
    CommentReactionsModule,
    AuthModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
