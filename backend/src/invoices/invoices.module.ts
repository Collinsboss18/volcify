import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceResolver } from './invoices.resolver';
import { InvoiceService } from './invoices.service';
import { InvoiceEntity } from '../entity/invoice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceEntity])],
  providers: [InvoiceResolver ,InvoiceService],
})
export class InvoiceModule {}
