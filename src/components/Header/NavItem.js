import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavItem = ({ navItem = {} }) => {
  const { pathname } = useRouter();

  const { name, href, subNavItems } = navItem;
  const subHref = subNavItems?.map((item) => item.href);
  const current = pathname === href || subHref?.includes(pathname);

  return (
    <li className={`dropdown${current ? " current" : ""}`}>
      <Link href={href}>
        <a href={href}>{name}</a>
      </Link>
      <ul>
        {subNavItems?.map((subItem) => (
          <li
            className={subItem.subItems?.length ? "dropdown" : ""}
            key={subItem.id}
          >
            <Link href={subItem.href}>
              <a
                href={href}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {subItem.name}
                {subItem.new ? (
                  <div
                    style={{
                      marginLeft: "15px",
                      backgroundColor: "#C11a0c",
                      borderRadius: "20%",
                      color: "white",
                      padding: "5px 10px",
                    }}
                  >
                    NEW
                  </div>
                ) : null}
              </a>
            </Link>
            <ul>
              {subItem.subItems?.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    <a href={href}>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavItem;
