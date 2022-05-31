import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import commaNo from "comma-number";
import moment from "moment";
import { Link } from "react-router-dom";
import Default from "../ListButton/Default";
import Success from "../ListButton/Success";
import Warning from "../ListButton/Warning";

export type DisplayType = {
	item: { status: string; id: string; date: string; items: any[]; to_name: string };
};

function WindowDisplay({ item: { status, date, id, items, to_name } }: DisplayType) {
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
	const getTotal = () => {
		let result = 0;
		items.map((e) => (result += e.price * e.quantity));
		return result;
	};
	return (
		<div className="w-full py-4 px-5 rounded-lg bg-purple-mid text-white grid grid-cols-5 mb-5">
			<div className="grid place-items-center">
				<p>
					<span className="text-gray-300">#</span>
					<span className="font-bold font-mono text-gray-100">RT{id.split("-")[id.split("-").length - 1]}</span>
				</p>
			</div>
			<div className="grid place-items-center">
				<p>Due {moment(date).format("LL")}</p>
			</div>
			<div className="grid place-items-center">
				<p>{to_name}</p>
			</div>
			<div className="grid place-items-center">
				<p className="text-2xl font-normal">
					$<span>{commaNo(getTotal())}</span>
				</p>
			</div>
			<div className="flex items-center">
				<div className="flex items-center">
					{displayStatus()}
					<div>
						<Link to={`/${id}`}>
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
