import React from "react"

const Selections = (props) => {
  return(
    <React.Fragment>
      <strong>A {props.attire[2]} day. </strong>
      I'm going to wear a {props.shirts[1]}, {props.pants[4]} and {props.shoes[1]}
    </React.Fragment>   
  );
};

export default class OutfitSelector extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <React.Fragment>
        <h3>What to Wear?</h3>
        <h4>Today is:</h4>
        <Selections
          attire={['casual', 'formal', 'super-casual']}
          shirts={['t-shirt', 'sweatshirt', 'collared shirt']}
          pants= {['slacks', 'blue jeans', 'khakis', 'shorts', 'pijama pants']}
          shoes= {['dress shoes', 'slippers', 'sneakers']}
        />
        <h4>Tomorrow is:</h4>
        <Selections
          attire={['formal', 'super-casual', 'casual']}
          shirts={['collared shirt', 't-shirt', 'sweatshirt']}
          pants= {['slacks', 'khakis', 'shorts', 'pijama pants', 'blue jeans']}
          shoes= {['dress shoes', 'sneakers', 'slippers']}
        />
      </React.Fragment>      
    );
  }
};
