import React     from "react"
import PropTypes from "prop-types"

const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

export default function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(item => <li key={item.charAt(0)}>{item}</li>); // change code here
  return (
    <React.Fragment>
      <h3>Popular Front End JavaScript Frameworks</h3>
      <ul>
        {renderFrameworks}
      </ul>
    </React.Fragment>
  );
};
