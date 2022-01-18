import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: 'users'
})

export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'varchar', unique: true, width: 100 })
  username: string;

  @Column({ type: 'varchar', width: 100 })
  password: string;

  @Column({ type: 'varchar', width: 100 })
  name: string;

  @Column({ name: 'last_name', type: 'varchar', width: 100 })
  lastname: string;

  @Column({ type: 'varchar', width: 50 })
  phone: string;

}