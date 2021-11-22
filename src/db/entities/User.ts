import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'users' })
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  public id!: number;

  @Column({ length: '50', nullable: false, unique: true })
  public username!: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date = new Date()

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date = new Date()
}
