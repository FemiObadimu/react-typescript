type NameProps = {
  name: string;
  num: number;
  isLoggedIn: boolean;
};
const Greet = (props: NameProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Hello ${props.name}, you have ${props.num} unread messages`
          : "Not Logged in"}
      </h2>
    </div>
  );
};

export default Greet;
