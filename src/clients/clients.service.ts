import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getCustomRepository, Repository } from 'typeorm';
import Client from './client.entity';
import CreateClientDto from './dtos/create-client.dto';
import { ClientRepository } from './repository/client.repository';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async createNewClient(createClientDto: CreateClientDto): Promise<Client> {
    const customRepository = getCustomRepository(ClientRepository);
    const clientFinded = await customRepository.findClientByEmail(
      createClientDto.email,
    );
    console.log(clientFinded);
    if (clientFinded) {
      throw new BadRequestException(`Cliente já cadastrado!`);
    }
    return await this.clientRepository.save(createClientDto);
  }

  async findClientById(id: string): Promise<Client> {
    const clientFinded = await this.clientRepository.findOne(id);
    return clientFinded;
  }
}
