type Persons = {
  name: {
    first: string;
    last: string;
  };
};
const Person = (props: Persons) => {
  return (
    <div>
      <h2>
        {props.name.first} {props.name.last}
      </h2>
    </div>
  );
};

export default Person;
