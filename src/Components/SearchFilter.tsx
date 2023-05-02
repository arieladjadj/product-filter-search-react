import React from "react";

interface Props {
  doSomthing: (text: string) => void;
}

const SearchFilter = ({ doSomthing }: Props) => {
  return (
    <div>
      <input
        onChange={(event) => doSomthing(event.target.value.toLocaleLowerCase())}
        className="pe-3 py-1"
        placeholder="Search product here..."
      ></input>
      <button className="mx-3 btn btn-primary">Search</button>
    </div>
  );
};

export default SearchFilter;
