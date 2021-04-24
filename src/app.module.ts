import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
import config from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
