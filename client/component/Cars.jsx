import React from 'react';
import App from './App.jsx';

class Cars extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="carPanels">
      {this.props.cars.map(car => 
        <Car car={car}/>
      )}
      {/* <p>{JSON.stringify(this.props.cars)}</p> */}
      </div>
    )
  }


}

class Car extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {name, brand, make, year, image} = this.props.car;
    return (
      <div className="carEntry">
          <img className="carImage"src={image}></img>
        <div className="carInfo">
          <p>{name}</p>
          <p>Brand: {brand}</p>
          <p>Make: {make}</p>
          <p>Year: {year}</p>
        </div>
      </div>

    )
  }
}


export default Cars;