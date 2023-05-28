import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSanityContent } from "../utils/sanity";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Side from "../component/Side";

function Category() {
  const { category } = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getStaticProps(category).then((blogs) => {
      setBlogs(blogs);
    });
  }, [category]);

  return (
    <div className="content flex flex-col justify-between min-h-screen bg-site">
      <div>
        <Header />
        <div className="container px-12 md:px-24 lg:px-48 py-12 mx-auto grid grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="col-span-2">
            {blogs.map((blog) => {
              return (
                <Link to={"/" + blog.slug}>
                  <div className="text-secondary hover:text-primary">
                    {blog.releaseDate} | {blog.title}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="hidden xl:block bg-back p-6">
            <Side />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Category;

async function getStaticProps(category) {
  const data = await getSanityContent({
    query: `
      query AllBlogsInCategory {
        allBlog(where: {categories: {title: {eq: "${category}"}}}) {
          title
          slug {
            current
          }
          releaseDate
        }
      }
    `,
  });

  const blogs = data.allBlog.map((blog) => ({
    title: blog.title,
    slug: blog.slug.current,
    releaseDate: blog.releaseDate,
  }));
  return blogs;
}
