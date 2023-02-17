// argument hissede birbasa destructure etmek:
const List = ({ ul }) => {
  //   Destructure, yuxarida daha qisa usulu.
  //   const { ul } = props;

  const listItems = ul.map((li) => <li key={li.toString()}>{li}</li>);
  return (
    <div className="r_container r_mt-1">
      <ul className="r_ul">{listItems}</ul>
    </div>
  );
};

export default List;
