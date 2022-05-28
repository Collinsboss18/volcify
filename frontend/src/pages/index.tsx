import Layout from "../components/Layouts/Layout";
import LayoutCrumb from "../components/Layouts/LayoutCrumb";
import MobileDisplay from "../components/List/MobileDisplay";
import WindowDisplay from "../components/List/WindowDisplay";

const items = [{ status: "paid" }, { status: "paid" }, { status: "pending" }, { status: "draft" }];

function index() {
	return (
		<Layout>
			<div className="relative overflow-y-auto h-full">
				<div className="max-w-7xl mx-auto pt-16">
					<LayoutCrumb page="Invoices" total={7} />
					<div className="px-5">
						<div className="hidden md:block">
							{items.map((item, i) => (
								<WindowDisplay item={item} key={i} />
							))}
						</div>
						<div className="block md:hidden">
							{items.map((item, i) => (
								<MobileDisplay item={item} key={i} />
							))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default index;
