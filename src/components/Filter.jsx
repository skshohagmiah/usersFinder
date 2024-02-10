import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelectedOption = (e) => {
    const search = searchParams.get("search");
    if (search) {
      setSearchParams({ sort: e.target.value, search: search });
    } else {
      setSearchParams({ sort: e.target.value });
    }
  };

  return (
    <div className="flex gap-2 items-center mt-[4rem] justify-end max-w-7xl mx-auto p-2">
      <p className="text-xl font-semibold">Sort By :</p>
      <select
        onChange={handleSelectedOption}
        name="filter"
        id="filter"
        className="p-2 border-2 rounded-md"
      >
        <option selected disabled>
          Choose An Option
        </option>
        <option value="name">Sort By Name</option>
        <option value="email">Sort By Email</option>
        <option value="company">Sort By Company</option>
      </select>
    </div>
  );
};

export default Filter;
