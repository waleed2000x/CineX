import Appbar from "../Appbar/Appbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div>
      <Appbar />
      <Outlet />
      <Footer />
    </div>
  );
}
