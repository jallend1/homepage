import { useEffect } from 'react'
import CodeBlock from "./CodeBlock";
import Contact from "./Contact";
import coffee from "../assets/images/jason-1.jpg";

const Main = () => {
  // Preloads image
  useEffect(() => new Image().src = coffee, []);

  return (
    <div className="container">
      <div className="left">
        <div className="image">
          <img src={coffee} alt="Jason Allen drinking some coffee in Iceland" />
          <div className="greeting">
            <h2>Hello, there.</h2>
            <h1>I'm Jason.</h1>
          </div>
        </div>
      </div>
      <div className="right">
        <CodeBlock />
        <Contact />
      </div>
    </div>
  );
};

export default Main;
