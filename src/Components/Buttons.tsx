import { useState } from "react";

interface Props {
  onClick: (n: string) => void;
  categories: string[];
}

const Buttons = ({ onClick, categories }: Props) => {
  const [clickedId, setClickedId] = useState(0);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    i: number
  ) => {
    setClickedId(i);
    const { target } = event;
    if (target) onClick((target as HTMLButtonElement).name);
  };

  return (
    <div className="">
      {categories.map((category, i) => (
        <button
          key={i}
          name={category}
          className={
            clickedId === i
              ? "btn btn-primary rounded-pill mx-2 px-3"
              : "btn btn-outline-primary rounded-pill mx-2 px-3"
          }
          onClick={(event) => {
            handleClick(event, i);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
