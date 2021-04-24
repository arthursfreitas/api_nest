import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;
}
export default Client;
