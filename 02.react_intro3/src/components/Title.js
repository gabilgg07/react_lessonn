const Title = ({ content, children }) => {
  return (
    <div className="r_container r_mt-4">
      <h1 className="r_title">
        {content} {children}
      </h1>
    </div>
  );
};

export default Title;
