import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { slideInLeft } from "react-animations";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SlideInLeft = styled.div`
	animation: 1s ${keyframes`${slideInLeft}`};
`;

export type Type = {
	setDisplayEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

function EditInvoice({ setDisplayEdit }: Type) {
	return (
		<div className="absolute h-full w-full overflow-y-auto" style={{ background: "rgb(31 33 58 / 70%)" }}>
			<SlideInLeft>
				<div className="h-full w-full max-w-2xl bg-purple-dark px-5 md:px-12 py-8 text-gray-100 overflow-y-auto">
					<h2 className="text-2xl md:text-3xl py-8">
						Edit <span className="text-gray-300">#</span>XM9141
					</h2>
					<div className="pb-10">
						<p className="text-purple-light pb-4">Bill Form</p>
						<div className="text-gray-100 flex flex-col pb-5">
							<label htmlFor={"address"} className="text-sm pb-2">
								Street Address
							</label>
							<input placeholder="19 Union Terrace" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
						</div>
						<div className="grid grid-cols-3 gap-4">
							<div className="text-gray-100 flex flex-col">
								<label className="text-sm pb-2">City</label>
								<input placeholder="London" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
							</div>
							<div className="text-gray-100 flex flex-col">
								<label className="text-sm pb-2">Post Code</label>
								<input placeholder="EI 3ez" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
							</div>
							<div className="text-gray-100 flex flex-col">
								<label className="text-sm pb-2">Country</label>
								<input placeholder="United Kingdom" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
							</div>
						</div>
					</div>
					<div className="pb-10">
						<p className="text-purple-light pb-4">Bill to</p>
						<div className="text-gray-100 flex flex-col pb-4">
							<label className="text-sm pb-2">Client Name</label>
							<input type="text" placeholder="Alex Grim" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
						</div>
						<div className="text-gray-100 flex flex-col pb-4">
							<label className="text-sm pb-2">Client Email</label>
							<input type="text" placeholder="example@mail.com" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
						</div>
						<div className="text-gray-100 flex flex-col pb-4">
							<label className="text-sm pb-2">Street Address</label>
							<input type="text" placeholder="84 way" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
						</div>
						<div className="grid grid-cols-3 gap-4 pb-5">
							<div className="text-gray-100 flex flex-col">
								<label className="text-sm pb-2">City</label>
								<input type="text" placeholder="London" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
							</div>
							<div className="text-gray-100 flex flex-col">
								<label className="text-sm pb-2">Post Code</label>
								<input type="text" placeholder="EI 3ez" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
							</div>
							<div className="text-gray-100 flex flex-col">
								<label className="text-sm pb-2">Country</label>
								<input type="text" placeholder="United Kingdom" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4 pb-5">
							<div className="text-gray-100 flex flex-col">
								<label className="text-sm pb-2">Invoice Date</label>
								<input type="date" placeholder="21 Aug 2022" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
							</div>
							<div className="text-gray-100 flex flex-col">
								<label className="text-sm pb-2">Payment Terms</label>
								<select className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3 h-full">
									<option>Net 30 Days</option>
								</select>
							</div>
						</div>
						<div className="text-gray-100 flex flex-col mb-9">
							<label className="text-sm pb-2">Project Description</label>
							<textarea placeholder="Graphic Design" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" rows={0}></textarea>
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
							<div className="grid grid-cols-9 gap-1 sm:gap-3 pb-4">
								<div className="text-gray-100 flex flex-col pb-4 col-span-4">
									<input type="text" placeholder="Banner Design" className="rounded-md focus:outline-none bg-purple-mid text px-4 py-3" />
								</div>
								<div className="text-gray-100 flex flex-col pb-4 col-span-1">
									<input type="text" placeholder="1" className="rounded-md focus:outline-none bg-purple-mid text px-2 py-3" />
								</div>
								<div className="text-gray-100 flex flex-col pb-4 col-span-2">
									<input type="text" placeholder="156.00" className="rounded-md focus:outline-none bg-purple-mid text px-2 py-3" />
								</div>
								<div className="text-gray-100 flex pb-4 col-span-2 items-center justify-between">
									<span>156.01</span>
									<button>
										<FontAwesomeIcon icon={faTrash} />
									</button>
								</div>
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2">
								<div></div>
								<div className="flex items-center justify-end">
									<button onClick={() => setDisplayEdit(false)} className="rounded-full w-full focus:outline-none bg-purple-mid text px-4 py-3 font-medium mr-3">
										Cancel
									</button>
									<button className="rounded-full w-full focus:outline-none bg-purple-light text px-4 py-3 font-medium">Save Changes</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</SlideInLeft>
		</div>
	);
}

export default EditInvoice;
