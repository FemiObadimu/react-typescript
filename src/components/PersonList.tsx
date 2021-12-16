type PersonListName = {
  names: {
    id: number;
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListName) => {
  return (
    <div>
      {props.names.map((prop) => {
        return (
          <div key={prop.id}>
            {prop.first} {prop.last}
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
