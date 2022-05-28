import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export type LayoutTypes = {
	children: JSX.Element | JSX.Element[];
};
function Layout({ children }: LayoutTypes) {
	return (
		<>
			<div className="w-screen h-screen block md:flex bg-purple-dark">
				<div className="md:h-full flex flex-row md:flex-col w-full md:w-32 bg-purple-mid rounded-tr-2xl overflow-hidden justify-between">
					<Link to="/">
						<div className="bg-purple-light grid place-items-center rounded-br-2xl cursor-pointer h-full">
							<FontAwesomeIcon icon={faChartPie} className={"py-3 px-5 md:py-8 text-white text-3xl md:text-5xl"} />
						</div>
					</Link>
					<div className="flex md:block">
						<div className="grid place-items-center border-gray-300 border-r md:border-b md:border-r-0 hover:bg-purple-light duration-150 cursor-pointer">
							<FontAwesomeIcon icon={faLightbulb} className={"py-3 px-5 md:py-8 text-white text-3xl md:text-5xl"} />
						</div>
						<div>
							<div className="grid place-items-center py-3 px-5 md:py-8">
								<img src="/images/avatar.jpg" alt="avatar" className="rounded-full h-10 md:h-14 w-10 md:w-14" />
							</div>
						</div>
					</div>
				</div>
				<div className="flex-grow w-full h-full bg-purple-dark overflow-y-auto">{children}</div>
			</div>
		</>
	);
}

export default Layout;
