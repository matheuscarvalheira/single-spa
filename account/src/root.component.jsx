import { useEffect } from "react";

export default function Root(props) {
  useEffect(() => {
    const handleClick = () => {
      console.log("Evento disparado pelo navbar");
    };
    document.addEventListener("onNavClick", handleClick);
    return () => {
      document.removeEventListener("onNavClick", handleClick);
    };
  }, []);
  return <section>{props.name} is mounted! - Hello world</section>;
}
