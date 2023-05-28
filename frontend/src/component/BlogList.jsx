import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSanityContent } from "../utils/sanity";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getStaticProps().then((blogs) => {
      setBlogs(blogs);
    });
  }, []);

  return (
    <>
      {blogs.map((blog) => {
        return (
          <div className="pt-24 pb-10 border-b border-primary" key={blog.slug}>
            <div className="pb-4 text-4xl text-primary">{blog.title}</div>
            <div className=" pb-8 text-base text-secondary">
              {blog.releaseDate}
            </div>
            <div className="pb-8 text-base text-primary">
              {blog.description}
            </div>
            <Link to={"/" + blog.slug}>
              <button className="px-8 py-2 border border-secondary text-secondary hover:text-primary">
                READ MORE
              </button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default BlogList;

async function getStaticProps() {
  const data = await getSanityContent({
    query: `
      query AllBolgs {
        allBlog (sort: {releaseDate: DESC}){
          title
          slug {
            current
          }
          description
          releaseDate
        }
      }
    `,
  });

  const blogs = data.allBlog.map((blog) => ({
    title: blog.title,
    slug: blog.slug.current,
    releaseDate: blog.releaseDate,
    description: blog.description,
  }));
  return blogs;
}
