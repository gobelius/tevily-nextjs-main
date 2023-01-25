import bg from "@/images/backgrounds/page-header-bg.jpg";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const PageHeader = ({ title = "", page = "", outerPage = "" }) => {
  return (
    <section className="page-header">
      <div className="page-header__top">
        <div
          className="page-header-bg"
          style={{ backgroundImage: ` url(${bg.src})` }}
        ></div>
        <div className="page-header-bg-overly"></div>
        <Container>
          <div className="page-header__top-inner">
            <h2>{title || page}</h2>
          </div>
        </Container>
      </div>
      <div className="page-header__bottom">
        <Container>
          <div className="page-header__bottom-inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>{" "}
              <li>
                <span>.</span>
              </li>{" "}
              {outerPage && (
                <>
                  <li>{outerPage}</li>{" "}
                  <li>
                    <span>.</span>
                  </li>{" "}
                </>
              )}
              <li className="active">{page || title}</li>
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PageHeader;
