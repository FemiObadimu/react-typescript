import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
function App() {
  const Sname = {
    first: "Tolu",
    last: "Smith",
  };

  const nameList = [
    {
      id: 1,
      first: "Wale",
      last: "Hampton",
    },
    {
      id: 2,
      first: "Segun",
      last: "William",
    },
    {
      id: 3,
      first: "Eric",
      last: "Omosigbo",
    },
  ];

  return (
    <div className="App">
      <Greet name="Femi" num={10} isLoggedIn={true} />
      <Person name={Sname} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
