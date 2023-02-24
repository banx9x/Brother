import Layout from "@/components/layout";
// import "@/styles/globals.css";
import "antd/dist/reset.css";

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
