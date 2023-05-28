import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSanityContent } from "../utils/sanity";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "../katex.min.css";

const Blog = ({ slug }) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    getStaticProps(slug).then((blog) => {
      setBlog(blog);
    });
  }, []);

  return (
    <div className="pt-24 pb-10">
      <div className="pb-4 text-4xl text-primary">{blog.title}</div>
      <div className="pb-8 text-base text-secondary">
        {blog.releaseDate} |{" "}
        <Link to={"/categories/" + blog.categories}>{blog.categories}</Link>
      </div>
      <div className="prose prose-mine prose-img:rounded-xl pb-8 text-base">
        <ReactMarkdown
          children={blog.content}
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
        />
      </div>
    </div>
  );
};

export default Blog;

async function getStaticProps(slug) {
  const data = await getSanityContent({
    query: `
      query BlogWithSlug {
        allBlog(where: {slug: {current: {eq: "${slug}"}}}) {
          title
          releaseDate
          content
          categories {
            title
          }
        }
      }
    `,
  });
  let blog = data.allBlog[0];
  return {
    title: blog.title,
    releaseDate: blog.releaseDate,
    content: blog.content,
    categories: blog.categories.title,
  };
}
