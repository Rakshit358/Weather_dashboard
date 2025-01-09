import CompleteInfoGrid from "./components/CompleteInfoGrid";
import TopBar from "./components/TopBar";

export default function App() {
  return (
    <div>
      <TopBar />
      <div className="text-3xl p-6 ml-4">Weather Today</div>
      <CompleteInfoGrid />
    </div>
  );
}
