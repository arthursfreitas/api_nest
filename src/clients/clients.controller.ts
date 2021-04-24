import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import Client from './client.entity';
import { ClientsService } from './clients.service';
import CreateClientDto from './dtos/create-client.dto';

@Controller('api/v1/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createNewClient(
    @Body() createClientDto: CreateClientDto,
  ): Promise<Client> {
    return await this.clientsService.createNewClient(createClientDto);
  }

  @Get('/:id')
  async findClientById(@Param() id: string): Promise<Client> {
    return await this.clientsService.findClientById(id);
  }
}
