import React from "react";
import commaNo from "comma-number";

function TableItem({ item, id }: { item: any; id: number }) {
	return (
		<tr>
			<td className="p-2 whitespace-nowrap">
				<div className="flex items-center">
					<div className="font-medium text-gray-500">{id}</div>
				</div>
			</td>
			<td className="p-2 whitespace-nowrap">
				<div className="text-left text-base md:text-lg capitalize">{item.name}</div>
			</td>
			<td className="p-2 whitespace-nowrap">
				<div className="text-left text-base md:text-lg font-medium">{commaNo(item.quantity)}</div>
			</td>
			<td className="p-2 whitespace-nowrap">
				<div className="font-medium text-base md:text-lg text-center">${commaNo(item.price)}</div>
			</td>
			<td className="p-2 whitespace-nowrap">
				<div className="font-medium text-base md:text-lg text-center">${commaNo(item.price * item.quantity)}</div>
			</td>
		</tr>
	);
}

export default TableItem;
