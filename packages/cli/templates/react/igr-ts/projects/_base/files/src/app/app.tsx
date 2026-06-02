import { Outlet } from "react-router-dom";

export default function App() {

  return (
    <div className="outer-wrapper">
      <Outlet />
    </div>
  );
}
