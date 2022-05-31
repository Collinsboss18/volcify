import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { slideInLeft } from "react-animations";
import styled, { keyframes } from "styled-components";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { CreateInvoiceMutation } from "../../graphql/Mutation";

const initialState: { to_name: string; to_email: string; to_address: string; to_city: string; to_postCode: string; to_country: string; from_email: string; from_address: string; from_city: string; from_postCode: string; from_country: string; terms: string; date: string; description: string; items: any[]; status: string } = {
	to_name: "",
	to_email: "",
	to_address: "",
	to_city: "",
	to_postCode: "",
	to_country: "",
	from_email: "",
	from_address: "",
	from_city: "",
	from_postCode: "",
	from_country: "",
	terms: "",
	date: "",
	description: "",
	items: [],
	status: "",
};
const SlideInLeft = styled.div`
	animation: 1s ${keyframes`${slideInLeft}`};
`;

export type Type = {
	setCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function CreateInvoice({ setCreateModal }: Type) {
	const [createInvoice, { error }] = useMutation(CreateInvoiceMutation);
	const [invoice, setInvoice] = useState(initialState);

	const addInvoice = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createInvoice({
			variables: {
				...invoice,
				items: JSON.stringify(invoice.items),
				status: "pending",
			},
		});
		setCreateModal(false);
		if (!error) {
			toast.success("Successfully Created Invoice!", {
				position: toast.POSITION.TOP_RIGHT,
			});
		} else {
			toast.warning("An error occur! Try later", {
				position: toast.POSITION.TOP_RIGHT,
			});
		}
	};

	const onChange = (name: string, value: string) => {
		setInvoice({ ...invoice, [name]: value });
	};

	const onItemChange = (id: number, name: string, value: string) => {
		const items = invoice.items;
		const data = items.map((obj: any) => (obj?.id === id ? { ...obj, [name]: value } : obj));
		setInvoice({ ...invoice, items: data });
	};

	const addItem = () => {
		setInvoice({ ...invoice, items: [...invoice.items, { id: uuid(), name: "", quantity: 0, price: 0 }] });
	};

	const deleteItem = (id: number) => {
		const data = invoice.items.filter((e) => e.id !== id);
		setInvoice({ ...invoice, items: data });
	};

	return (
		<div className="absolute h-full w-full overflow-y-auto flex" style={{ background: "rgb(31 33 58 / 60%)" }}>
			<SlideInLeft>
				<div className="h-full w-full max-w-2xl bg-purple-dark px-5 md:px-12 py-8 text-gray-100 overflow-y-auto">
					<h2 className="text-2xl md:text-3xl py-8">
						Create Invoice
						{/* <span className="text-gray-300">#</span>XM9141 */}
					</h2>
					<form onSubmit={addInvoice}>
						<div className="pb-10">
							<p className="text-purple-light pb-4">Bill Form</p>
							<div className="text-gray-100 flex flex-col pb-5">
								<label htmlFor={"from_address"} className="text-sm pb-2">
									Street Address
								</label>
								<input name="from_address" onChange={(e) => onChange(e.target.name, e.target.value)} placeholder="19 Union Terrace" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
							</div>
							<div className="grid grid-cols-3 gap-4">
								<div className="text-gray-100 flex flex-col">
									<label className="text-sm pb-2">City</label>
									<input name="from_city" onChange={(e) => onChange(e.target.name, e.target.value)} placeholder="London" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
								</div>
								<div className="text-gray-100 flex flex-col">
									<label className="text-sm pb-2">Post Code</label>
									<input name="from_postCode" onChange={(e) => onChange(e.target.name, e.target.value)} placeholder="EI 3ez" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
								</div>
								<div className="text-gray-100 flex flex-col">
									<label className="text-sm pb-2">Country</label>
									<input name="from_country" onChange={(e) => onChange(e.target.name, e.target.value)} placeholder="United Kingdom" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
								</div>
							</div>
							<div className="text-gray-100 flex flex-col pb-5">
								<label htmlFor={"address"} className="text-sm pb-2">
									Email
								</label>
								<input name="from_email" onChange={(e) => onChange(e.target.name, e.target.value)} placeholder="19 Union Terrace" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
							</div>
						</div>
						<div className="pb-10">
							<p className="text-purple-light pb-4">Bill to</p>
							<div className="text-gray-100 flex flex-col pb-4">
								<label className="text-sm pb-2">Client Name</label>
								<input name="to_name" onChange={(e) => onChange(e.target.name, e.target.value)} type="text" placeholder="Alex Grim" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
							</div>
							<div className="text-gray-100 flex flex-col pb-4">
								<label className="text-sm pb-2">Client Email</label>
								<input name="to_email" onChange={(e) => onChange(e.target.name, e.target.value)} type="text" placeholder="example@mail.com" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
							</div>
							<div className="text-gray-100 flex flex-col pb-4">
								<label className="text-sm pb-2">Street Address</label>
								<input name="to_address" onChange={(e) => onChange(e.target.name, e.target.value)} type="text" placeholder="84 way" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
							</div>
							<div className="grid grid-cols-3 gap-4 pb-5">
								<div className="text-gray-100 flex flex-col">
									<label className="text-sm pb-2">City</label>
									<input name="to_city" onChange={(e) => onChange(e.target.name, e.target.value)} type="text" placeholder="London" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
								</div>
								<div className="text-gray-100 flex flex-col">
									<label className="text-sm pb-2">Post Code</label>
									<input name="to_postCode" onChange={(e) => onChange(e.target.name, e.target.value)} type="text" placeholder="EI 3ez" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
								</div>
								<div className="text-gray-100 flex flex-col">
									<label className="text-sm pb-2">Country</label>
									<input name="to_country" onChange={(e) => onChange(e.target.name, e.target.value)} type="text" placeholder="United Kingdom" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
								</div>
							</div>
							<div className="grid grid-cols-2 gap-4 pb-5">
								<div className="text-gray-100 flex flex-col">
									<label className="text-sm pb-2">Invoice Date</label>
									<input name="date" onChange={(e) => onChange(e.target.name, e.target.value)} type="date" placeholder="21 Aug 2022" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
								</div>
								<div className="text-gray-100 flex flex-col">
									<label className="text-sm pb-2">Payment Terms</label>
									<select name="terms" onChange={(e) => onChange(e.target.name, e.target.value)} className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3 h-full">
										<option>Terms</option>
										<option value={"net 30 days"}>Net 30 Days</option>
									</select>
								</div>
							</div>
							<div className="text-gray-100 flex flex-col mb-9">
								<label className="text-sm pb-2">Project Description</label>
								<textarea name="description" onChange={(e) => onChange(e.target.name, e.target.value)} placeholder="Graphic Design" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" rows={0}></textarea>
							</div>
							<div className="pb-10">
								<p className="text-purple-light pb-5 text-lg font-semibold">Item List</p>
								<div className="grid grid-cols-9 gap-3 pb-3">
									<div className="text-gray-100 flex flex-col col-span-4">
										<p className="text-sm pb-2">Item Name</p>
									</div>
									<div className="text-gray-100 flex flex-col col-span-1">
										<p className="text-sm pb-2">Qty</p>
									</div>
									<div className="text-gray-100 flex flex-col col-span-2">
										<p className="text-sm pb-2">Price</p>
									</div>
									<div className="text-gray-100 flex flex-col col-span-2">
										<p className="text-sm pb-2">Total</p>
									</div>
								</div>
								{invoice.items.map((e, i) => (
									<div key={i} className="grid grid-cols-9 gap-1 sm:gap-3 pb-4">
										<div className="text-gray-100 flex flex-col pb-4 col-span-4">
											<input onChange={(evt) => onItemChange(e.id, evt.target.name, evt.target.value)} value={e.name} name="name" type="text" placeholder="Banner Design" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
										</div>
										<div className="text-gray-100 flex flex-col pb-4 col-span-1">
											<input onChange={(evt) => onItemChange(e.id, evt.target.name, evt.target.value)} value={e.quantity} name="quantity" type="text" placeholder="1" className="rounded-md focus:outline-none bg-purple-mid text px-2 py-3" />
										</div>
										<div className="text-gray-100 flex flex-col pb-4 col-span-2">
											<input onChange={(evt) => onItemChange(e.id, evt.target.name, evt.target.value)} value={e.price} name="price" type="text" placeholder="156.00" className="rounded-md focus:outline-none bg-purple-mid text px-2 py-3" />
										</div>
										<div className="text-gray-100 flex pb-4 col-span-2 items-center justify-between">
											<span>{invoice.items[i].quantity * invoice.items[i].price}</span>
											<button
												type="button"
												onClick={() => {
													console.log(e);
													deleteItem(e.id);
												}}
											>
												<FontAwesomeIcon icon={faTrash} />
											</button>
										</div>
									</div>
								))}
								<button type="button" onClick={addItem} className="rounded-full mb-10 mt-5 w-full focus:outline-none bg-purple-mid text px-4 py-3 font-medium mr-3">
									+ Add New Item
								</button>
								<div className="grid grid-cols-1 sm:grid-cols-2">
									<div></div>
									<div className="flex items-center justify-end">
										<button type="button" onClick={() => setCreateModal(false)} className="rounded-full w-full focus:outline-none bg-purple-mid text px-4 py-3 font-medium mr-3">
											Cancel
										</button>
										<button type="submit" className="rounded-full w-full focus:outline-none bg-purple-light text px-4 py-3 font-medium">
											Save Changes
										</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</SlideInLeft>
			<div onClick={() => setCreateModal(false)} className="flex-1 h-full w-full cursor-pointer" style={{ background: "rgb(31 33 58 / 0%)" }}></div>
		</div>
	);
}

export default CreateInvoice;
