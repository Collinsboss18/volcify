import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { APP_ROUTE } from "./routes/app.routes";
import Home from "./pages";
import Invoice from "./pages/invoice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./styles/index.generated.css";
import "./styles/index.css";

const errorLink = onError(({ graphqlErrors, networkError }: any) => {
	if (graphqlErrors) {
		graphqlErrors.map(({ message, location }: { message: string; location: string }) => {
			console.log(message);
		});
	}
});
const link = from([errorLink, new HttpLink({ uri: "https://volcify.herokuapp.com/graphql" })]);
const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
});

function App() {
	return (
		<ApolloProvider client={client}>
			<ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
			<BrowserRouter>
				<Routes>
					<Route path={APP_ROUTE.HOME} element={<Home />} />
					<Route path={APP_ROUTE.SINGLE_INVOICE} element={<Invoice />} />
				</Routes>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
