export default function SearchBar() {
  return (
    <div>
      <div className="w-96 flex text-black border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
        <input
          type="search"
          id="default-search"
          className="w-full bg-gray-3000 text-black border-none outline-none"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          className="bg-gray-300 text-black-400 font-bold py-2 px-4 rounded-2xl inline-flex items-center"
        >
          Search
        </button>
      </div>
    </div>
  );
}
