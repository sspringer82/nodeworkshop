import { Module } from '@nestjs/common';
import { AddressController } from './address/address.controller';
import { AddressService } from './address/address.service';

@Module({
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
