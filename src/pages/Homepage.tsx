import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Discription from "../components/Discription/Discription";
import BlogList from "../components/BlogList/BlogList";
import "./Homepage.css";
import { Children } from "react";

export interface IBloglist {
  id: number;
  title: string;
  Description: string;
}

const DUMMY_BLOGS: IBloglist[] = [
  {
    id: 0,
    title: "corona virus",
    Description:
      "Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. ",
  },
  {
    id: 1,
    title: "News",
    Description:
      "COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. ",
  },
  {
    id: 2,
    title: "Car Insurance",
    Description:
      "infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. ",
  },
  {
    id: 3,
    title: "New vs old PC",
    Description:
      "people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. ",
  },
];

const Homepage = () => {
  const [Blogs, setBlogs] = useState(DUMMY_BLOGS);
  const [currentBlog, setCurrentBlog] = useState<IBloglist>();

  const addNewBlogHandler = (blog: IBloglist) => {
    setBlogs([blog, ...Blogs]);
  };

  const setCurrentBlogHandler = (blog: IBloglist) => {
    setCurrentBlog(blog);
  };

  const   setDeleteCurrentBlogHandler = (blog: IBloglist) => {
    const updatedBlogs = Blogs.filter((i) => blog.id !== i.id);
    setBlogs([...updatedBlogs]);
  };

  return (
    <>
      <div className="flex-header">
        <Header onAddNewBlog={addNewBlogHandler}>{Children}</Header>
      </div>

      <div className="row">
        <div className="column1">
          <Discription blog={currentBlog} />
        </div>

        <div className="column2">
          <h1>NEW BLOGS</h1>

          {Blogs.map((i) => (
            <BlogList
              onSetCurrentBlog={setCurrentBlogHandler}
              onDeleteCurrentBlog={setDeleteCurrentBlogHandler}
              blog={i}
            />
          ))}
        </div>
      </div>

      <div className="flex-footer">
        <Footer nm={Blogs} />
      </div>
    </>
  );
};

export default Homepage;
