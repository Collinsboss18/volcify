import { Link } from "react-router-dom";
import moment from "moment";
import commaNo from "comma-number";
import Default from "../ListButton/Default";
import Success from "../ListButton/Success";
import Warning from "../ListButton/Warning";

export type DisplayType = {
	item: { status: string; id: string; date: string; items: any[]; to_name: string };
};

function MobileDisplay({ item: { status, date, id, items, to_name } }: DisplayType) {
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
		<Link to={`/${id}`}>
			<div className="w-full py-4 px-5 rounded-lg bg-purple-mid text-white flex justify-between mb-5">
				<div>
					<p className="text-lg pb-3">
						<span className="text-gray-300">#</span>
						<span className="font-bold font-mono text-gray-100">RT{id.split("-")[id.split("-").length - 1]}</span>
					</p>
					<p>Due {moment(date).format("LL")}</p>
					<p className="text-xl font-normal">
						$<span>{commaNo(getTotal())}</span>
					</p>
				</div>
				<div className="flex flex-col justify-between">
					<p>{to_name}</p>
					<div className="flex items-center">{displayStatus()}</div>
					<div />
				</div>
			</div>
		</Link>
	);
}

export default MobileDisplay;
