import React from "react";
import s from "./ItemFeed.module.css";
import { BsLockFill } from "react-icons/bs";

const type = {
  tag_manager: "Tag manager",
  dmp_crm: "DMP / CRM",
  analytics: "Analytics",
  heatmap: "Heatmap",
  email: "Email",
};

const status = {
  blocked: <BsLockFill />,
  enable: <div className={s.enable}>on</div>,
  disable: <div className={s.disable}>off</div>,
};

const ItemFeed = (props) => {
  return (
    <>
      <div className={s.item}>
        <div className={s.name}>{props.name}</div>
        <div className={s.info}>
          <div className={s.sites}>{`${props.sites} ${
            !!props.sites ? (props.sites > 1 ? "sites" : "site") : ""
          }`}</div>
          <div className={s.type}>{type[props.type]}</div>
          <div className={s.status}>{status[props.status]}</div>
        </div>
      </div>
      {!props.last && <div className={s.border}></div>}
    </>
  );
};

export default ItemFeed;
