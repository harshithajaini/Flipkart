import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout(){
  return(
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh',  color: "white" }}>
      <Header />
      <div style={{ flex: 1 , background: "white"}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
