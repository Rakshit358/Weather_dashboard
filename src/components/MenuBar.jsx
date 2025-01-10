import { Route, Routes, Link } from "react-router-dom";
import OptionComponent from "./OptionComponent";

export default function MenuBar() {
  return (
    <div className="m-2 pl-8 pt-2 pb-2 pr-4">
      <div className="flex gap-4">
        <Link to="/">
          <OptionComponent title="Air Quality" />
        </Link>
        <Link to="/hourly">
          <OptionComponent title="Sun Information" />
        </Link>
        <Link to="/weekly">
          <OptionComponent title="Next Five Days" />
        </Link>
      </div>
    </div>
  );
}
