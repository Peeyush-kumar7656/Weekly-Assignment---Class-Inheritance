import React,{Component} from 'react';
import Shape from'../src/shape';
import Circle from './circle';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Circle />
        <Shape />
      </div>
    );
  }
}
export default App;