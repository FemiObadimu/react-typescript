import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Buttons from "./components/Buttons";
import Container from "./components/Container";
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
      <Status status="Loading" />
      <Heading>Passing Text In From Component Head</Heading>
      <Buttons
        value=""
        handleChange={(event) => console.log(event)}
        handleClick={(event, id) => console.log("Button Clicked", event, id)}
      />

      <Container styles={{ border: "1px solid solid", padding: "2rem" }} />
    </div>
  );
}

export default App;
