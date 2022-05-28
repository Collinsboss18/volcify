import { Link } from "react-router-dom";
import Default from "../ListButton/Default";
import Success from "../ListButton/Success";
import Warning from "../ListButton/Warning";

export type DisplayType = {
	item: { status: string };
};

function MobileDisplay({ item: { status } }: DisplayType) {
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
		<Link to={"/id"}>
			<div className="w-full py-4 px-5 rounded-lg bg-purple-mid text-white flex justify-between mb-5">
				<div>
					<p className="text-lg pb-3">
						<span className="text-gray-300">#</span>
						<span className="font-bold font-mono text-gray-100">RT3080</span>
					</p>
					<p>Due 19 Aug 2021</p>
					<p className="text-xl font-normal">
						$<span>1,800.90</span>
					</p>
				</div>
				<div className="flex flex-col justify-between">
					<p>Alex Grim</p>
					<div className="flex items-center">{displayStatus()}</div>
					<div />
				</div>
			</div>
		</Link>
	);
}

export default MobileDisplay;
