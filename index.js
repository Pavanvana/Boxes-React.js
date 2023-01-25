const Box = (props) => {
  //  Write your code here.
  const { styles, boxName, text } = props;
  return (
    <div className={styles}>
      <p className={boxName}>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box boxName="box-name" styles="small-box" text="Small" />
      <Box boxName="box-name" styles="medium-box" text="Medium" />
      <Box boxName="box-name" styles="large-box" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
