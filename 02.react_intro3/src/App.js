// import logo from './logo.svg';
import "./App.css";
import Title from "./components/Title";
import H2 from "./components/H2";
import H3 from "./components/H3";
import List from "./components/List";
import Cart from "./components/Cart";
import BottomSpace from "./components/BottomSpace";
import ExampleForm from "./components/ExampleForm";
import TitleCBC from "./components/TitleCBC";
import ListItem from "./components/ListItem";
// default export
// function App() {
//   return <div>App</div>; // JSX-di -> React.createElement("div", null, "App"); - dir.
// }

const cities = ["Baki", "Sumqayit", "Gence", "Seki"];
const clrs = ["Red", "Blue", "Green", "Yellow"];
const nums = ["487678", "54365", "87686", "16547"];
const country = ["USA", "England", "Azerbaijan", "Turkey"];
const person = {
  pName: {
    type: "text",
    iName: "firstname",
    id: "firstname",
  },
  surname: {
    type: "text",
    // iName: "lastname",
    id: "lastname",
  },
  age: {
    type: "number",
    iName: "age",
    id: "age",
  },
};

const description = "CBC - acilisi Class Based Component-dir.";

function App() {
  return (
    <div>
      <Title content="React Begin" />
      <H2 content="List Components Example" />
      <H3 content="City Names" />
      <List ul={cities} />
      <H3 content="Colors" />
      <List ul={clrs} />
      <H3 content="Numbers" />
      <List ul={nums} />
      <Title content="Cart Component" />
      <div className="r_container r_mt-2">
        <div className="r_cart">
          <Cart />
        </div>
      </div>
      <div className="r_container r_mt-2">
        <div className="r_cart">
          <Cart amount={355} />
        </div>
      </div>
      <Title content="React">
        <span>/ Redux</span>
      </Title>
      <ExampleForm person={person} />
      <TitleCBC title="Title CBC" desc={description} icon="+" />
      <div className="r_container r_mt-4">
        <ul className="r_ul">
          {country.map((item, index) => (
            <ListItem key={index} city={item} />
          ))}
        </ul>
      </div>
      <BottomSpace />
    </div>
  );
}

export default App;

// named export
// export function App2() {
//   return <h1>App2</h1>;
// }
