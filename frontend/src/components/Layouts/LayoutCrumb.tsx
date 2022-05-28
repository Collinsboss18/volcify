import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export type LayoutCrumbTypes = {
	page: string;
	total: number;
};

function LayoutCrumb({ page, total }: LayoutCrumbTypes) {
	return (
		<div className="flex justify-between pb-8 px-5">
			<div className="flex flex-col justify-between">
				<h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">{page}</h1>
				<p className="text-gray-200 text-sm sm:text-base">There are {total} total invoices</p>
			</div>
			<div className="flex place-items-center">
				<div className="pr-4">
					<select id="filter" className="hidden md:block text-white pr-1 bg-purple-dark focus:outline-none cursor-pointer">
						<option value="volvo">
							<div className="flex">
								<span className="">Filter by status</span>
								<FontAwesomeIcon icon={faChevronDown} className={"text-purple-light pr-4"} />
							</div>
						</option>
						<option value="saab">Saab</option>
					</select>
					<select id="filter" className="block md:hidden text-white pr-1 bg-purple-dark focus:outline-none cursor-pointer">
						<option value="volvo">
							<div className="flex">
								<span className="">Filter</span>
								<FontAwesomeIcon icon={faChevronDown} className={"text-purple-light pr-4"} />
							</div>
						</option>
						<option value="saab">Saab</option>
					</select>
				</div>
				<button className="bg-purple-light hover:bg-white duration-150 rounded-full flex place-items-center px-1 py-0 md:py-2 text-white hover:text-purple-light">
					<div className="h-7 md:h-10 w-7 md:w-10 rounded-full bg-white text-purple-light grid place-items-center">
						<FontAwesomeIcon icon={faPlus} className={"text-2xl"} />
					</div>
					<div className="px-3 grid place-items-center h-10 font-normal sm:font-semibold">
						<p className="hidden md:inline-block">New Invoice</p>
						<p className="inline-block md:hidden">New</p>
					</div>
				</button>
			</div>
		</div>
	);
}

export default LayoutCrumb;
