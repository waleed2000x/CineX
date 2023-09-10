import Appbar from "../Appbar/Appbar";
import { Outlet } from "react-router-dom";
import Genres from "../Genres/Genres";

export default function Home() {
  return (
    <div>
      <Genres />
      <Appbar />
      <Outlet />
    </div>
  );
}
