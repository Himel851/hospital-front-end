// import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../component/navbar/Header";
import { AuthProvider } from "../../context/auth";

export default function App({ Component, pageProps, router }) {
  const hideHeaderRoutes = ['/', '/sign-up'];
  const showHeader = !hideHeaderRoutes.includes(router.pathname);
  return (
    <>
      <AuthProvider>
        {showHeader && <Header />}
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
