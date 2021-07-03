type ButtonProps = {
    text?: String;
  }
  
  export function ButtonTest(props: ButtonProps) {
    return (
      <button>{props.text || "Default"}</button>
    )
  }