import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import StateContext from "../context/StateContext";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <StateContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </Provider>
  );
}

export default MyApp;
