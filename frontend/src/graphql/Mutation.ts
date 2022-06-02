import { gql } from "@apollo/client";

export const CreateInvoiceMutation = gql`
	mutation ($to_name: String!, $to_email: String!, $from_email: String!, $to_address: String!, $to_city: String!, $to_postCode: String!, $to_country: String!, $from_address: String!, $from_city: String!, $from_postCode: String!, $from_country: String!, $terms: String!, $date: String!, $description: String!, $items: String!, $status: String!) {
		createInvoice(createInvoiceData: { to_name: $to_name, from_email: $from_email, to_email: $to_email, to_address: $to_address, to_city: $to_city, to_postCode: $to_postCode, to_country: $to_country, from_address: $from_address, from_city: $from_city, from_postCode: $from_postCode, from_country: $from_country, terms: $terms, date: $date, description: $description, items: $items, status: $status }) {
			id
			to_name
			to_email
			to_address
			to_city
			to_postCode
			to_country
			from_address
			from_city
			from_email
			from_postCode
			from_country
			terms
			date
			description
			items
			status
		}
	}
`;

export const DeleteInvoiceMutation = gql`
	mutation ($id: String!) {
		deleteInvoice(deleteInvoiceData: { id: $id }) {
			id
			to_name
			to_email
			to_address
			to_city
			to_postCode
			to_country
			from_address
			from_city
			from_email
			from_postCode
			from_country
			terms
			date
			description
			items
			status
		}
	}
`;
