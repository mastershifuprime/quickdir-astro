const Search = ({ isHome }: { isHome: boolean }) => {
  return (
    <button
      className="max-w-[548px] w-full mx-auto border-[#cec4c423] border
        rounded-full pl-6 pr-3 py-2  flex items-center justify-between bg-light cursor-pointer"
      aria-label="search"
      data-search-trigger
    >
      <div className="w-full border-none bg-transparent focus:ring-0 p-0 text-left text-text-light text-h6">
        Search
      </div>
      {isHome ? (
        <div className="bg-light rounded-full p-2 block justify-end">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12.2669"
              cy="11.7666"
              r="8.98856"
              className="stroke-dark"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5186 18.4851L22.0426 22"
              className="stroke-dark "
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : (
        <div className="bg-primary rounded-full p-2 block justify-end">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12.2669"
              cy="11.7666"
              r="8.98856"
              className="stroke-dark"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5186 18.4851L22.0426 22"
              className="stroke-dark"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </button>
  );
};

export default Search;
