import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSanityContent } from "../utils/sanity";

const Side = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getStaticProps().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <>
      <div className="py-6">
        <div className="text-xl text-primary pb-4">About the author</div>
        <div className=" text-base text-secondary pb-3">
          Shiwen Han is currently a full time student at OSU. She is working
          hard to become a good engineer.
        </div>
      </div>
      <div className="">
        <div className="text-xl text-primary pb-4">Categories</div>
        <div className=" text-base text-secondary pb-3">
          {categories.map((category) => {
            return (
              <div>
                <Link to={"/categories/" + category.title}>
                  {"> " + category.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Side;

async function getStaticProps() {
  const data = await getSanityContent({
    query: `
      query AllCategory {
        allCategory{
          title
        }
      }
    `,
  });

  const categories = data.allCategory.map((category) => ({
    title: category.title,
  }));
  return categories;
}
