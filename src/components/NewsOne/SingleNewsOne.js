import Link from "next/link";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";

const SingleNewsOne = ({ news = {}, newsTwo = false }) => {
  const { image, title, author, comments, date } = news;

  return (
    <div
      className={
        newsTwo ? "news-one__single animated fadeInUp" : "news-one__single"
      }
      style={{ userSelect: newsTwo ? "none" : "unset" }}
    >
      <div className="news-one__img">
        <Image src={require(`@/images/blog/${image}`).default.src} alt="" />
        <Link href="/news-details">
          <a>
            <span className="news-one__plus"></span>
          </a>
        </Link>
        <div className="news-one__date">
          <p>
            {date.split(" ").map((t, i) => (
              <Fragment key={i}>
                <span>{t}</span>
                <br />
              </Fragment>
            ))}
          </p>
        </div>
      </div>
      <div className="news-one__content">
        <ul className="list-unstyled news-one__meta">
          <li>
            <Link href="/news-details">
              <a>
                <i className="far fa-user-circle"></i>
                {author}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/news-details">
              <a>
                <i className="far fa-comments"></i>
                {comments} Comments
              </a>
            </Link>
          </li>
        </ul>
        <h3 className="news-one__title">
          <Link href="/news-details">{title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default SingleNewsOne;
