import React, { useState, useMemo } from "react";
import ItemFeed from "./ItemFeed/ItemFeed";
import Header from "./Header/Header";
import s from "./Feed.module.css";

const allItems = [
  {
    id: 1,
    name: "ExpsaertSender",
    sites: 0,
    type: "email",
    status: "blocked",
  },
  {
    id: 2,
    name: "Tag Commander",
    sites: 0,
    type: "tag_manager",
    status: "blocked",
  },
  {
    id: 3,
    name: "Ysance",
    sites: 0,
    type: "dmp_crm",
    status: "blocked",
  },
  {
    id: 4,
    name: "AT Internet",
    sites: 1,
    type: "analytics",
    status: "enable",
  },
  {
    id: 5,
    name: "Content Square",
    sites: 3,
    type: "analytics",
    status: "enable",
  },
  {
    id: 6,
    name: "Google Tag Manager",
    sites: 2,
    type: "tag_manager",
    status: "enable",
  },
  {
    id: 7,
    name: "Heatmap",
    sites: 1,
    type: "heatmap",
    status: "enable",
  },
  {
    id: 8,
    name: "Tealium",
    sites: 0,
    type: "dmp_crm",
    status: "disable",
  },
  {
    id: 9,
    name: "Emarsys",
    sites: 0,
    type: "email",
    status: "disable",
  },
];

const Feed = () => {
  const [sortProperty, setSortProperty] = useState("name");
  const [sortDirection, setSortDirection] = useState(-1);
  const [filter, setFilter] = useState("");

  const items = useMemo(() => {
    return allItems
      .filter((item) => item.name.startsWith(filter))
      .sort((a, b) => {
        if (a[sortProperty] < b[sortProperty]) {
          return sortDirection;
        }
        if (a[sortProperty] > b[sortProperty]) {
          return sortDirection * -1;
        }
        return 0;
      });
  }, [allItems, sortProperty, sortDirection, filter]);

  const handleChange = (e) => setFilter(e.currentTarget.value);

  const createListinfo = (arr) => {
    return arr.map((item, index, arr) => {
      const last = index + 1 === arr.length && true;
      return (
        <ItemFeed
          key={item.id}
          id={item.id}
          name={item.name}
          sites={item.sites}
          type={item.type}
          status={item.status}
          last={last}
        />
      );
    });
  };

  return (
    <>
      <input className={s.input} onChange={handleChange} value={filter} />
      <div className={s.feed}>
        <Header
          sortProperty={sortProperty}
          setSortProperty={setSortProperty}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
        />
        <div>{createListinfo(items)}</div>
      </div>
    </>
  );
};

export default Feed;
