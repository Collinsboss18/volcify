export type ActionType = {
	type: string;
	payload?: any;
};

export type itemProps = {
	name: string;
	quantity: number;
	price: number;
	total: number;
};

export interface invoiceProps {
	invoices: invoiceType[];
	loading: boolean;
	error: string;
}

export type invoiceType = {
	from: {
		Address: string;
		City: string;
		PostCode: string;
		Country: string;
	};
	name: string;
	email: string;
	address: string;
	city: string;
	postCode: string;
	country: string;
	createdAt: string;
	terms: string;
	description: string;
	items: itemProps[];
};
