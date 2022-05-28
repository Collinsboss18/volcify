import React from "react";
import TableItem from "./TableItem";

function Table() {
	return (
		<div className="overflow-x-auto">
			<table className="table-auto w-full">
				<thead className="text-xs font-semibold uppercase text-gray-400">
					<tr>
						<th className="p-2 whitespace-nowrap">
							<div className="font-semibold text-left">S/N</div>
						</th>
						<th className="p-2 whitespace-nowrap">
							<div className="font-semibold text-left">Name</div>
						</th>
						<th className="p-2 whitespace-nowrap">
							<div className="font-semibold text-left">Quantity</div>
						</th>
						<th className="p-2 whitespace-nowrap">
							<div className="font-semibold text-center">Price</div>
						</th>
						<th className="p-2 whitespace-nowrap">
							<div className="font-semibold text-center">Total</div>
						</th>
					</tr>
				</thead>
				<tbody className="text-sm">
					<TableItem/>
				</tbody>
			</table>
		</div>
	);
}

export default Table;
