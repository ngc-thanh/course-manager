import { Entity, Column, OneToMany } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import { BaseEntity } from 'src/modules/base/base.entity';
import { CommentReaction } from 'src/modules/comment-reactions/entities/comment-reaction.entity';
@Entity('comment')
export class Comment extends BaseEntity {
  @OneToMany(() => CommentReaction, (commentReaction) => commentReaction.comment)
  commentReactions: CommentReaction[];

  @Column({ nullable: false })
  @IsString()
  @IsNotEmpty()
  content: string;
}
