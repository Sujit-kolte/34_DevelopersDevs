import React, { ReactNode } from "react";

const Button = (props) => {
  return (
    <button
      //   onClick={onclick}
      aria-label="get started button"
      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
    >
      {props.children}
    </button>
  );
};

export default Button;
