const Discription = (props: any) => {
  return (
    <>
      {props.blog ? (
        <>
          <h1>{props.blog.title}</h1>
          {props.blog.Description}
        </>
      ) : (
        "No Blog Selected"
      )}
    </>
  );
};

export default Discription;
