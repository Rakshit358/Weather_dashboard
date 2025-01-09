export default function CurrentLocation(props) {
  return (
    <div className="border border-black rounded-lg p-4 bg-gray-100 m-6">
      <div className="p-4">{props.icon}</div>
      <div className="text-4xl font-semibold p-2">{props.temperature}</div>
      <div className="text-base p-2">{props.desc}</div>
      <div className="border-b border-black m-3"></div>
      <div className="text-base p-2">{props.location}</div>
      <div className="text-base p-2">{props.date}</div>
    </div>
  );
}
