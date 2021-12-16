type StatusProps = {
  status: "Loading" | "Success" | "Error";
};

const Status = (props: StatusProps) => {
  let msg;
  if (props.status === "Loading") {
    msg = "Loading";
  } else if (props.status === "Success") {
    msg = "Success";
  } else if (props.status === "Error") {
    msg = "Error";
  }
  return (
    <div>
      <h2>{msg}</h2>
    </div>
  );
};

export default Status;
