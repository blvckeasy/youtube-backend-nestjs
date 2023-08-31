import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  username: string;

  @Column()
  socket_id: string;

  @Column()
  password: string;

  @CreateDateColumn({ default: "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}