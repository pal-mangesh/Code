import BlogItem from "../BlogItem/BlogItem";
import Button from "../Button/Button";

const BlogList = (props: any) => {
  const showBlog = () => {
    props.onSetCurrentBlog(props.blog);
  };

  const deleteBlog=()=>{
  props.onDeleteCurrentBlog(props.blog);
  };
  return (
    <>
      <BlogItem list1={props.blog} />
      <Button buttontitle="Read" onClick={showBlog} />
      <Button buttontitle="Delete" onClick={deleteBlog} />
    </>
  );
};

export default BlogList;
