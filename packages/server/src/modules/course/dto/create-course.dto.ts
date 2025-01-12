import { Video } from '../../video/model';
import { IsNotEmpty, IsString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
export class CourseCreationDTO {
  @ApiProperty({ default: 'this is title' })
  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({ default: 'this is description' })
  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({ default: 'this is thumbnail url' })
  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  readonly thumbnailUrl: string;

  @IsArray()
  readonly videos?: Video[];
}
