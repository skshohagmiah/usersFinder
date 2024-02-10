import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    const sort = searchParams.get("sort");
    if (sort) {
      setSearchParams({ sort: sort, search: searchTerm });
    } else {
      setSearchParams({ search: searchTerm });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full lg:w-96 flex gap-2 rounded-full border-2 items-center overflow-hidden p-2"
    >
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        className=" w-full outline-none"
        type="text"
        placeholder="Search Users"
      />
      <button type="submit">
        <CiSearch className="w-6 h-6" />
      </button>
    </form>
  );
};

export default Searchbar;
