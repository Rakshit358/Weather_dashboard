export default function OptionComponent(props) {
  return (
    <div className="shadow-lg bg-gray-300 rounded-lg text-slate-800 p-2 font-semibold hover:bg-black hover:text-white">
      {props.title}
    </div>
  );
}
