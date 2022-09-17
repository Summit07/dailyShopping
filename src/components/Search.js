import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import  {useGlobalContext} from './Contex'

const Search = () => {
  // const {query,searchPost} = useGlobalContext();

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]   ">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search by Mobile Number"
          />
        </div>
      </form>
    </>
  );
};

export default Search;
