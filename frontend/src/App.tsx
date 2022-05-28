import { Routes, Route, BrowserRouter } from "react-router-dom";
import { APP_ROUTE } from "./routes/app.routes";
import Home from "./pages";
import Invoice from "./pages/invoice";
import "./styles/index.generated.css";
import "./styles/index.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={APP_ROUTE.HOME} element={<Home />} />
				<Route path={APP_ROUTE.SINGLE_INVOICE} element={<Invoice />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
