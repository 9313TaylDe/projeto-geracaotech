const Category = (props) => {
  return (
    <div className="card_categorys">
      <div>
        <img src={props.img} alt="" />
      </div>
      <div>{props.title}</div>
    </div>
  );
};

export default Category;
