import { EntityRepository, Repository } from 'typeorm';
import Client from '../client.entity';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  async findClientByEmail(email: string): Promise<Client> {
    const clientFinded = this.findOne({ where: { email } });
    return clientFinded;
  }
}
