import { gql } from "@apollo/client";

export const GetAllInvoice = gql`
	query {
		getAllInvoice {
			id
			to_name
			to_email
			to_address
			to_city
			to_postCode
			to_country
			from_address
			from_city
			from_postCode
            from_email
			from_country
			terms
			date
			description
			items
			status
		}
	}
`;

export const GetInvoiceById = gql`
	query ($id: String!) {
		getInvoice(getInvoice: { id: $id }) {
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
