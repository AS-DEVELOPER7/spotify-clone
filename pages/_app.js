import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import StateContext from "../context/StateContext";
import Layout from "../components/Layout";
import { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Provider store={store}>
      <StateContext>
        {loading ? (
          <div className="bg-black flex items-center justify-center w-[100vw] h-[100vh]">
            <FaSpotify className="text-green-500 h-[8em] w-[8em]" />
          </div>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </StateContext>
    </Provider>
  );
}

export default MyApp;
