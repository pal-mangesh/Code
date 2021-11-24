import Button from "../Button/Button";
import {IBloglist} from "../../pages/Homepage";

const Header = (props: any) => {
  const enterData = () => {
    const enteredTitle = prompt("Enter Title");
    if(!enteredTitle||enteredTitle.length<=0){
        return;
    }

    const enterDescription = prompt("Enter Description");
    if(!enterDescription||enterDescription.length<=0){
        return;
    }



    const newBlog:IBloglist={
        id:90,
        title:enteredTitle,
        Description:enterDescription

    }

    props.onAddNewBlog(newBlog);
    

  };
  return (
    <>
      <div>
        <h2>Blog App</h2>
        <Button buttontitle="Create a New Blog" onClick={enterData} />
        
      </div>
    </>
  );
};

export default Header;
