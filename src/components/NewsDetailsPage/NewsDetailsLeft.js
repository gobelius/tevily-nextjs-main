import newsDetailsPage from "@/data/newsDetailsPage";
import Link from "next/link";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";
import AuthorOne from "./AuthorOne";
import CommentForm from "./CommentForm";
import CommentOne from "./CommentOne";

const {
  image,
  date,
  author,
  totalComments,
  title,
  texts,
  tags,
  socials,
  authorData,
  comments,
} = newsDetailsPage;

const NewsDetailsLeft = () => {
  return (
    <div className="news-details__left">
      <div className="news-details__img">
        <Image src={image.src} alt="" />
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
      <div className="news-details__content">
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
                {totalComments} Comments
              </a>
            </Link>
          </li>
        </ul>
        <h3 className="news-details__title">{title}</h3>
        {texts.map((text, index) => (
          <p key={index} className={`news-details__text-${index + 1}`}>
            {text}
          </p>
        ))}
      </div>
      <div className="news-details__bottom">
        <p className="news-details__tags">
          <span>Tags:</span>
          {tags.map((tag, i) => (
            <a key={i} href="#">
              {tag}
            </a>
          ))}
        </p>
        <div className="news-details__social-list">
          {socials.map(({ id, icon, href }) => (
            <a href={href} key={id}>
              <i className={icon}></i>
            </a>
          ))}
        </div>
      </div>
      <AuthorOne author={authorData} />
      <CommentOne comments={comments} />
      <CommentForm />
    </div>
  );
};

export default NewsDetailsLeft;
