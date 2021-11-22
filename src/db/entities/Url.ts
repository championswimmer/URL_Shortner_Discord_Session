import { BaseEntity, Column, CreateDateColumn, Entity, getConnection, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import User from './User'

@Entity({ name: 'urls' })
export default class Url extends BaseEntity {
  @PrimaryColumn({ type: 'bigint' })
  public id!: number;

  @Column({ name: 'long_url', length: 1024, nullable: false })
  public longUrl!: string

  @Column({ name: 'short_code', length: 9, nullable: false })
  public shortCode!: string

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date = new Date()

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date = new Date()

  @ManyToOne(type => User)
  public owner!: User
}

export const getUrlRepository = () => getConnection().getRepository<Url>(Url)
