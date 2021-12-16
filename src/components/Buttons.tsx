import React from "react";

type ButtonProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Buttons = (props: ButtonProps) => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.handleChange} />
      <button onClick={(event) => props.handleClick(event, 1)}>
        Click Here
      </button>
    </div>
  );
};

export default Buttons;
