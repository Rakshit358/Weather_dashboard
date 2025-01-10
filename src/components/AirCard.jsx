import poorSvg from "../assets/poor.svg"; // Import the SVG
import dangerousSvg from "../assets/dangerous.svg"; // Import the SVG
import goodSvg from "../assets/good.svg"; // Import the SVG

export default function AirCard(props) {
  const getSVG = (status) => {
    if (status === "Poor") {
      return poorSvg;
    } else if (status === "Dangerous" || status === "Very Poor") {
      return dangerousSvg;
    } else {
      return goodSvg;
    }
  };

  const today = new Date().toLocaleDateString(); // Get today's date

  return (
    <div className="bg-gray-300 rounded-lg p-4 mr-2 mb-4 flex gap-2 justify-between items-center">
      <div>
        <h1 className="text-sm text-slate-600">{today}</h1>
        <h1 className="font-semibold">{props.title}</h1>
      </div>
      <div className="flex gap-4 items-center">
        <img src={getSVG(props.status)} className="h-10 w-10 " />
        <div>
          <h1 className="text-slate-800">{props.info} μg/m3</h1>
          <h1 className="font-semibold">{props.status}</h1>
        </div>
      </div>
    </div>
  );
}
