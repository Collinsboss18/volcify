import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Default from "../ListButton/Default";
import Success from "../ListButton/Success";
import Warning from "../ListButton/Warning";

export type DisplayType = {
	item: { status: string };
};

function WindowDisplay({ item: { status } }: DisplayType) {
	const displayStatus = () => {
		switch (status) {
			case "pending":
				return <Warning text="pending" />;
			case "paid":
				return <Success text="paid" />;
			case "draft":
				return <Default text="draft" />;
			default:
				break;
		}
	};
	return (
		<div className="w-full py-4 px-5 rounded-lg bg-purple-mid text-white grid grid-cols-5 mb-5">
			<div className="grid place-items-center">
				<p>
					<span className="text-gray-300">#</span>
					<span className="font-bold font-mono text-gray-100">RT3080</span>
				</p>
			</div>
			<div className="grid place-items-center">
				<p>Due 19 Aug 2021</p>
			</div>
			<div className="grid place-items-center">
				<p>Alex Grim</p>
			</div>
			<div className="grid place-items-center">
				<p className="text-2xl font-normal">
					$<span>1,800.90</span>
				</p>
			</div>
			<div className="flex items-center">
				<div className="flex items-center">
					{displayStatus()}
					<div>
						<Link to={"/id"}>
							<button className="h-full">
								<FontAwesomeIcon icon={faChevronRight} className={"text-purple-light pr-4 cursor-pointer"} />
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WindowDisplay;
