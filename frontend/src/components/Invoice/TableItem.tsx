import React from "react";

function TableItem() {
	return (
		<tr>
			<td className="p-2 whitespace-nowrap">
				<div className="flex items-center">
					<div className="font-medium text-gray-500">1</div>
				</div>
			</td>
			<td className="p-2 whitespace-nowrap">
				<div className="text-left text-base md:text-lg capitalize">Alex Shatov</div>
			</td>
			<td className="p-2 whitespace-nowrap">
				<div className="text-left text-base md:text-lg font-medium">6</div>
			</td>
			<td className="p-2 whitespace-nowrap">
				<div className="font-medium text-base md:text-lg text-center">$200</div>
			</td>
			<td className="p-2 whitespace-nowrap">
				<div className="font-medium text-base md:text-lg text-center">$200</div>
			</td>
		</tr>
	);
}

export default TableItem;
