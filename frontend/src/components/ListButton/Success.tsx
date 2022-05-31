import React from "react";

export type ButtonType = {
	text: string;
};

function Success({ text }: ButtonType) {
	return (
		<button className="flex cursor-default items-center justify-center py-2 px-3 rounded-md mr-6 w-full" style={{ minWidth: "100px", backgroundColor: "#202c3f" }}>
			<div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
			<span className="capitalize">{text}</span>
		</button>
	);
}

export default Success;
