import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

@ObjectType()
@Entity()
export class InvoiceEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ default: '' })
  to_name: string;

  @Field()
  @Column({ default: '' })
  to_email: string;

  @Field()
  @Column({ default: '' })
  to_address: string;

  @Field()
  @Column({ default: '' })
  to_city: string;

  @Field()
  @Column({ default: '' })
  to_postCode: string;

  @Field()
  @Column({ default: '' })
  to_country: string;

  @Field()
  @Column({ default: '' })
  from_address: string;

  @Field()
  @Column({ default: '' })
  from_city: string;

  @Field()
  @Column({ default: '' })
  from_postCode: string;

  @Field()
  @Column({ default: '' })
  from_country: string;

  @Field()
  @Column({ default: '' })
  from_email: string;

  @Field()
  @Column({ default: '' })
  terms: string;

  @Field()
  @Column({ default: '' })
  status: string;

  @Field()
  @Column({ default: '' })
  date: string;

  @Field()
  @Column({ default: '' })
  description: string;

  @Field()
  @Column({ default: '' })
  items: string;

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
