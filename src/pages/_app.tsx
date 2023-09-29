import 'src/styles/globals.css'

export default function App(props: { Component: any, pageProps: any }) {
    const { Component, pageProps } = props;

    return <Component {...pageProps} />;
}