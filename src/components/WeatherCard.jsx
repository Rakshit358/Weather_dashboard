function WeatherCard(props) {
  return (
    <div>
      <div className="grid grid-cols-12 bg-gray-100 rounded-lg p-4 gap-4 shadow-lg">
        <div className="col-span-2 place-items-center p-4">{props.icon}</div>
        <div className="col-span-10 place-items-start p-2">
          <div className="text-gray-600 text-md pb-2">{props.title}</div>
          <div className="text-2xl font-medium">{props.info}</div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
