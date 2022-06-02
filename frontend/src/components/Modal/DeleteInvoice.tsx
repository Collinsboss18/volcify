import React from "react";
import { useNavigate } from "react-router-dom";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import { toast } from "react-toastify";
import { DeleteInvoiceMutation } from "../../graphql/Mutation";
import { useMutation } from "@apollo/client";

export type Type = {
	id: string;
	invoiceId: string;
	setDeleteModel: React.Dispatch<React.SetStateAction<boolean>>;
};

const FadeIn = styled.div`
	animation: 1s ${keyframes`${fadeIn}`};
`;

function DeleteInvoice({ id, setDeleteModel, invoiceId }: Type) {
	const [deleteInvoice, { error }] = useMutation(DeleteInvoiceMutation, {
		variables: { id: invoiceId },
	});
	const navigate = useNavigate();

	const removeInvoice = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		try {
			setDeleteModel(false);
			await deleteInvoice({
				variables: { id: invoiceId },
			});
			if (!error) {
				toast.success("Successfully Deleted!", {
					position: toast.POSITION.TOP_RIGHT,
				});
			} else {
				toast.warning("An error occur! Try later", {
					position: toast.POSITION.TOP_RIGHT,
				});
			}
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="absolute h-full w-full overflow-y-auto grid place-items-center" style={{ background: "rgb(31 33 58 / 60%)" }}>
			<FadeIn style={{ zIndex: 20 }}>
				<div className="h-min w-full max-w-2xl bg-purple-dark px-4 md:px-8 py-8 text-gray-100 overflow-y-auto">
					<h2 className="text-xl md:text-3xl py-4">
						Delete <span className="text-gray-500">#</span>
						{id.split("-")[id.split("-").length - 1]}
					</h2>
					<div className="text-gray-50 max-w-sm w-full">
						<button onClick={() => setDeleteModel(false)} className="rounded-full focus:outline-none bg-purple-dark hover:bg-slate-100 hover:text-purple-mid duration-150 text px-3 sm:px-5 py-2 sm:py-3 font-medium mr-3">
							Cancel
						</button>
						<button onClick={removeInvoice} className="rounded-full focus:outline-none bg-red-500 hover:bg-slate-100 hover:text-red-500 duration-150 text px-2 sm:px-5 py-2 sm:py-3 font-medium mr-3">
							Delete
						</button>
					</div>
				</div>
			</FadeIn>
			<div onClick={() => setDeleteModel(false)} className="flex-1 h-full w-full cursor-pointer absolute" style={{ background: "rgb(31 33 58 /0%)", zIndex: 1 }}></div>
		</div>
	);
}

export default DeleteInvoice;
