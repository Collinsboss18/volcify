import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import { CreateInvoiceInput } from './dto/input/create-invoice.dto';
import { DeleteInvoiceInput } from './dto/input/delete-invoice.dto';
import { UpdateInvoiceInput } from './dto/input/update-invoice.dto';
import { InvoiceService } from './invoices.service';
import { InvoiceEntity } from '../entity/invoice.entity';
import { GetInvoiceArgs } from './dto/args/get-invoice.dto';

@Resolver(() => InvoiceEntity)
export class InvoiceResolver {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Query(() => InvoiceEntity)
  getInvoice(
    @Args('getInvoice') getInvoiceData: GetInvoiceArgs,
  ): Observable<InvoiceEntity> {
    return this.invoiceService.getInvoice(getInvoiceData);
  }

  @Query(() => [InvoiceEntity])
  getAllInvoice(): Observable<InvoiceEntity[]> {
    return this.invoiceService.getAllInvoice();
  }

  @Mutation(() => InvoiceEntity)
  createInvoice(
    @Args('createInvoiceData') createInvoiceData: CreateInvoiceInput,
  ): Observable<InvoiceEntity> {
    return this.invoiceService.createInvoice(createInvoiceData);
  }

  @Mutation(() => InvoiceEntity)
  updateInvoice(
    @Args('updateUserData') updateUserData: UpdateInvoiceInput,
  ): Promise<Observable<UpdateResult>> {
    return this.invoiceService.updateInvoice(updateUserData);
  }

  @Mutation(() => InvoiceEntity)
  deleteInvoice(
    @Args('deleteInvoiceData') deleteInvoiceData: DeleteInvoiceInput,
  ): Observable<InvoiceEntity> {
    return this.invoiceService.deleteInvoice(deleteInvoiceData);
  }
}
