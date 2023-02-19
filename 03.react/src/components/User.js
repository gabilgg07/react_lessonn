const User = ({ name }) => {
  return (
    <div className="container mt-5">
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header d-flex justify-content-center">
              Welcome {name}!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
