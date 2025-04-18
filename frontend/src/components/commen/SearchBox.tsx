type SearchBoxProps = {
  placeholder?: string;
//   onSearch: () => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder = "Search...." }) => {
  return (
    <div className="md:mt-5 mt-3 w-full max-w-2xl">
      <div className="relative flex items-center w-full">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full px-6 py-3 pr-14 rounded-[29px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
        />
        <button
        //   onClick={onSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-violet-500 text-white p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path d="M11.854 7.854a.5.5 0 0 0 0-.708L8.707 4.707a.5.5 0 0 0-.707.707L10.293 7H4.5a.5.5 0 0 0 0 1h5.793l-2.293 2.293a.5.5 0 1 0 .707.707l3.147-3.147z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
