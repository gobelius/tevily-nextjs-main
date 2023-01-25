import Link from "next/link";
import React, { useState } from "react";

const SubNavItem = ({ subItem = {} }) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpand((preExpand) => !preExpand);
  };

  const { href, subItems, name } = subItem;

  return (
    <li>
      <Link href={href}>
        <a className={expand && subItems?.length ? " expanded" : ""}>
          {name}
          {subItems?.length && (
            <button
              onClick={handleExpand}
              aria-label="dropdown toggler"
              className={expand ? "expanded" : ""}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          )}
        </a>
      </Link>
      <ul
        style={{
          display: expand ? "block" : "none",
        }}
      >
        {subItems?.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SubNavItem;
