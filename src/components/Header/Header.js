import React from "react";
import s from "./Header.module.css";
import Buttons from "./Buttons";

const Header = (props) => {
  const choiceTitle = (event) => {
    props.setSortProperty(event.target.id);
    props.setSortDirection(-1);
  };

  return (
    <>
      <div className={s.item}>
        <div className={s.name}>
          <p style={{ cursor: "pointer" }} onClick={choiceTitle} id="name">
            Tool name
          </p>
          {props.sortProperty === "name" && (
            <Buttons
              sortDirection={props.sortDirection}
              setSortDirection={props.setSortDirection}
            />
          )}
        </div>
        <div className={s.info}>
          <div className={s.sites}>
            <p style={{ cursor: "pointer" }} onClick={choiceTitle} id="sites">
              Used on
            </p>
            {props.sortProperty === "sites" && (
              <Buttons
                sortDirection={props.sortDirection}
                setSortDirection={props.setSortDirection}
              />
            )}
          </div>
          <div className={s.type}>
            <p style={{ cursor: "pointer" }} onClick={choiceTitle} id="type">
              Type
            </p>
            {props.sortProperty === "type" && (
              <Buttons
                sortDirection={props.sortDirection}
                setSortDirection={props.setSortDirection}
              />
            )}
          </div>
          <div className={s.status}>
            <p style={{ cursor: "pointer" }} onClick={choiceTitle} id="status">
              Status
            </p>
            {props.sortProperty === "status" && (
              <Buttons
                sortDirection={props.sortDirection}
                setSortDirection={props.setSortDirection}
              />
            )}
          </div>
        </div>
      </div>
      <div className={s.border}></div>
    </>
  );
};

export default Header;
