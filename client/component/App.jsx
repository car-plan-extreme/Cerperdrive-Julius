import React from "react";
import mockData from '../../mockData/CarList1.js'
import Cars from './Cars.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: mockData
    }
  }
  render() {
    return (
      <div>
        <b>Cerperdrive</b>
        <Cars cars={this.state.cars}/>
      </div>
    )
  }
}

export default App;