import { sidebar } from "@/data/newsDetailsPage";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const { posts, categories, tags } = sidebar;

const Sidebar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };

  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__search">
        <h3 className="sidebar__title clr-white">Search</h3>
        <form onSubmit={handleSubmit} className="sidebar__search-form">
          <input type="search" name="search" placeholder="Search" />
          <button type="submit">
            <i className="icon-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Recent News</h3>
        <ul className="sidebar__post-list list-unstyled">
          {posts.map(({ id, title, image, comments }) => (
            <li key={id}>
              <div className="sidebar__post-image">
                <Image
                  src={require(`@/images/blog/${image}`).default.src}
                  alt=""
                />
              </div>
              <div className="sidebar__post-content">
                <h3>
                  <a href="#" className="sidebar__post-content_meta">
                    <i className="far fa-comments"></i>
                    {comments} Comments
                  </a>
                  <Link href="/news-details">{title}</Link>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__single sidebar__category">
        <h3 className="sidebar__title">All Categories</h3>
        <ul className="sidebar__category-list list-unstyled">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__single sidebar__tags">
        <h3 className="sidebar__title">Tags</h3>
        <div className="sidebar__tags-list">
          {tags.map((tag, index) => (
            <a key={index} href="#">
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
