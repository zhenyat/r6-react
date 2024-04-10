import React     from "react"

const Vegetables = () => {
  return(
    <React.Fragment>
      <h3>Vegetables:</h3>
      <ul>
        <li>Brussel Sprouts</li>
        <li>Broccoli</li>
        <li>Squash</li>
        <li>Potato</li>
      </ul>
    </React.Fragment>
  );
};

const NonCitrus = () => {
  return(
    <React.Fragment>
      <h4>NonCitrus:</h4>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </React.Fragment>
  );
};

const Citrus = () => {
  return(
    <React.Fragment>
      <h4>Citrus:</h4>
      <ul>
        <li>Lemon</li>
        <li>Lime</li>
        <li>Orange</li>
        <li>Grapefruit</li>
      </ul>
    </React.Fragment>
  );
};

class Fruits extends React.Component {
  constructor(props) {
      super(props);
    }
  
  render () {
    return (
      <React.Fragment>
        <h3>Fruits</h3>
        <NonCitrus />
        <Citrus />
      </React.Fragment>
    );
  }
};

export default class ComposedComponents extends React.Component {
 constructor(props) {
    super(props);
  }
 
  render () {
    return (
      <React.Fragment>
        <h2>Types of Food (Composed Components)</h2>
        <Fruits />
        <Vegetables />
      </React.Fragment>
    );
  }
};
