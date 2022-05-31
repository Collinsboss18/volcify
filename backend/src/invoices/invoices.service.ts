import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateInvoiceInput } from './dto/input/create-invoice.dto';
import { DeleteInvoiceInput } from './dto/input/delete-invoice.dto';
import { UpdateInvoiceInput } from './dto/input/update-invoice.dto';
import { InvoiceEntity } from '../entity/invoice.entity';
import { GetInvoiceArgs } from './dto/args/get-invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(InvoiceEntity)
    private readonly invoiceRepository: Repository<InvoiceEntity>,
  ) {}

  public createInvoice(
    createInvoiceData: CreateInvoiceInput,
  ): Observable<InvoiceEntity> {
    const invoice: InvoiceEntity = {
      ...createInvoiceData,
      id: uuid(),
      createdAt: new Date(),
      // items: JSON.stringify(createInvoiceData.items),
    };
    return from(this.invoiceRepository.save(invoice));
  }

  public async updateInvoice(
    updateInvoiceData: UpdateInvoiceInput,
  ): Promise<Observable<UpdateResult>> {
    return from(
      this.invoiceRepository.update(updateInvoiceData.id, {
        ...updateInvoiceData,
      }),
    );
  }

  public getAllInvoice(): Observable<InvoiceEntity[]> {
    return from(
      this.invoiceRepository.find(),
    );
    // status:  getInvoice.status
  }

  public getInvoice(getInvoiceData: GetInvoiceArgs): Observable<InvoiceEntity> {
    return from(this.invoiceRepository.findOne({ id: getInvoiceData.id }));
  }

  public deleteInvoice(
    deleteInvoiceData: DeleteInvoiceInput,
  ): Observable<InvoiceEntity> {
    const invoice = this.invoiceRepository.findOneOrFail({
      id: deleteInvoiceData.id,
    });
    this.invoiceRepository.delete(deleteInvoiceData.id);
    return from(invoice);
  }
}
