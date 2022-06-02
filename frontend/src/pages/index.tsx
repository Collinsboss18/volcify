import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Layout from "../components/Layouts/Layout";
import LayoutCrumb from "../components/Layouts/LayoutCrumb";
import MobileDisplay from "../components/List/MobileDisplay";
import WindowDisplay from "../components/List/WindowDisplay";
import { GetAllInvoice } from "../graphql/Query";
import CreateInvoice from "../components/Modal/CreateInvoice";

function Index() {
	const { loading, data } = useQuery(GetAllInvoice);
	const [invoices, setInvoices] = useState([]);
	const [createModal, setCreateModal] = useState(false);

	useEffect(() => {
		if (!loading) {
			setInvoices(
				data.getAllInvoice.map((e: any) => {
					return { ...e, items: JSON.parse(e.items) };
				})
			);
		}
	}, [data]);

	return (
		<Layout>
			<div className="relative overflow-y-auto h-full">
				{createModal && <CreateInvoice setCreateModal={setCreateModal} setInvoices={setInvoices} />}
				<div className="max-w-7xl mx-auto pt-16">
					<LayoutCrumb page="Invoices" total={7} setCreateModal={setCreateModal} />
					<div className="px-5">
						{loading ? (
							<p>Loading...</p>
						) : (
							<>
								<div className="hidden md:block">
									{invoices.map((item, i) => (
										<WindowDisplay item={item} key={i} />
									))}
								</div>
								<div className="block md:hidden">
									{invoices.map((item, i) => (
										<MobileDisplay item={item} key={i} />
									))}
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Index;
