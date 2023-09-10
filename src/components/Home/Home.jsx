import Appbar from "../Appbar/Appbar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Appbar />
      <Outlet />
    </div>
  );
}
