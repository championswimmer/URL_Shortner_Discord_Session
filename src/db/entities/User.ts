import { BaseEntity, Column, CreateDateColumn, Entity, getConnection, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

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

  /**
   * FIXME: This is temporary column used to populate with GUIDs,
   *        which we'll temporary use as auth tokens.
   *        Eventually we should move to using Google login oauths,
   *        at which point this column will be removed.
   */
   @Column({ generated: 'uuid' })
   public token!: string
}

export const getUserRepository = () => getConnection().getRepository<User>(User)
