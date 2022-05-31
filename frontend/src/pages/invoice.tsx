import * as qs from "query-string";
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Table from "../components/Invoice/Table";
import Layout from "../components/Layouts/Layout";
import { GetInvoiceById } from "../graphql/Query";

const initialState = {
	date: "",
	description: "",
	from_email: "",
	from_address: "",
	from_city: "",
	from_country: "",
	from_postCode: "",
	id: "",
	items: "",
	terms: "",
	to_address: "",
	to_city: "",
	to_country: "",
	to_email: "",
	to_name: "",
	to_postCode: "",
};

function Invoice() {
	const [invoice, setInvoice] = useState(initialState);
	const [items, setItems] = useState([]);
	const { loading, error, data } = useQuery(GetInvoiceById, {
		variables: { id: window.location.pathname.split("/")[1] },
	});

	useEffect(() => {
		if (!loading) {
			setInvoice(data?.getInvoice);
			setItems(JSON.parse(data?.getInvoice.items));
		}
	}, [data]);

	return (
		<Layout>
			<div className="relative overflow-y-auto h-full">
				<div className="max-w-7xl mx-auto pt-16 px-5">
					<div className="w-full bg-purple-mid flex flex-col sm:flex-row justify-between px-4 md:px-8 py-5 rounded-md mb-8">
						<h2 className="text-xl md:text-2xl text-gray-50 mb-3">
							<span className="text-gray-400">#</span>
							{invoice?.id.split("-")[invoice?.id.split("-").length - 1]}
						</h2>
						<div className="flex text-gray-50 max-w-sm w-full items-center justify-center">
							<button className="rounded-full focus:outline-none bg-purple-dark hover:bg-slate-100 hover:text-purple-mid duration-150 text px-3 sm:px-5 py-2 sm:py-3 font-medium mr-3">Edit</button>
							<button className="rounded-full focus:outline-none bg-red-500 hover:bg-slate-100 hover:text-red-500 duration-150 text px-2 sm:px-5 py-2 sm:py-3 font-medium mr-3">Delete</button>
							<button className="rounded-full block w-full focus:outline-none bg-purple-light hover:bg-slate-100 hover:text-purple-light duration-150 text px-2 sm:px-3 py-2 sm:py-3 font-medium">Save Changes</button>
						</div>
					</div>
					<div className="w-full md:px-8 py-10 text-gray-300 bg-purple-mid rounded-md">
						<div className="mb-8 px-4">
							<div className="flex justify-between items-center">
								<span className="font-semibold font-mono">Street Address</span>
								<span>{invoice?.to_address}</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="font-semibold font-mono">City</span>
								<span>{invoice?.to_city}</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="font-semibold font-mono">Post Code</span>
								<span>{invoice?.to_postCode}</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="font-semibold font-mono">Country</span>
								<span>{invoice?.to_country}</span>
							</div>
						</div>
						<div className="max-w-3xl mx-auto mb-8 px-4">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div className="flex md:flex-col justify-between">
									<p className="mb-1 font-mono pr-5 font-semibold">From</p>
									<h4 className="text-base md:text-lg">{invoice?.from_email}</h4>
								</div>
								<div className="flex md:flex-col justify-between">
									<p className="mb-1 font-mono pr-5 font-semibold">Payment Terms</p>
									<h4 className="text-base md:text-lg">{invoice?.terms}</h4>
								</div>
								<div className="flex md:flex-col justify-between">
									<p className="mb-1 font-mono pr-5 font-semibold">Send to</p>
									<h4 className="text-base md:text-lg">{invoice?.to_email}</h4>
								</div>
							</div>
						</div>
						<div className="w-full px-4 md:px-8 rounded-md mb-8 py-8" style={{ background: "rgb(255 255 255 / 5%)" }}>
							<Table items={items} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Invoice;
