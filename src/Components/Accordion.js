import React from "react";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

function Accordion({ title, info }) {
  const [isShow, setIsShow] = useState(false);

  const clickHandler = () => {
    setIsShow(!isShow);
  };
  return (
    <article className=" border-b-2 border-lightGrey mb-3 ">
      <header className=" flex  items-center justify-between mb-2 ">
        <h3
          onClick={clickHandler}
          className="cursor-pointer hover:text-softRed  text-veryDarkSaturated  text-xl active:text-veryDarkSaturated    "
        >
          {" "}
          {title}{" "}
        </h3>
        <button
          onClick={clickHandler}
          className=" text-[25px]  mr-7 text-xl text-softRed "
        >
          {isShow ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </header>
      <footer>
        {isShow && (
          <p className=" text-darkGray mb-3 font-kumb font-[400] leading-7 text-[15px] ">
            {" "}
            {info}{" "}
          </p>
        )}
      </footer>
    </article>
  );
}

export default Accordion;
