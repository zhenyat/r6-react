import React from "react"

const List= (props) => {
  return <p>{props.tasks}</p>;
//return <p>{props.tasks.join(', ')}</p>; // error: Cannot read property 'join' of undefined
                                          // Workout: usr `join` in ToDo component
};

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <h3>To Do Lists</h3>
        
        <h4>Today</h4>
        <List tasks={["Walk dog", "Workout"].join(', ')}/>
        
        <h4>Tomorrow</h4>
        <List tasks={["Write report", "Visit dentist", "Meet friends"].join(', ')}/>
      </React.Fragment>
    );
  }
};
