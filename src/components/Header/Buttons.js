import React from "react";
import s from "./Header.module.css";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";

const Buttons = (props) => {
  return (
    <div className={s.buttons}>
      <BsCaretUpFill
        onClick={() => {
          props.setSortDirection(1);
        }}
        style={{ color: props.sortDirection === -1 && "grey" }}
      />
      <BsCaretDownFill
        onClick={() => {
          props.setSortDirection(-1);
        }}
        style={{ color: props.sortDirection === 1 && "grey" }}
      />
    </div>
  );
};

export default Buttons;
