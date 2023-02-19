import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/index.scss";

// import UserList from "./components/UserList";
// import User from "./components/User";
// import Guest from "./components/Guest";
import Login from "./components/Login";

function App() {
  const isLogged = true;

  return (
    // <>
    //   <UserList />
    // </>
    // <div>{isLogged ? <User name="Qabil" /> : <Guest />}</div>
    // <div>{isLogged ? <User name="Qabil" /> : <Guest />}</div>
    <div className="container mt-5">
      <div className="ui cards">
        <div className="card">
          <div className="content">{isLogged && <Login name="Qabil" />}</div>
          <div className="content">{isLogged && <Login />}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
