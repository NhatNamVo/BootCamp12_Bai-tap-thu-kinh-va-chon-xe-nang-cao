import React, { Component } from "react";

export default class CarInfo extends Component {
  render() {
    const {
      color,
      price,
      engineType,
      displacement,
      horsepower,
      torque,
      redline,
    } = this.props.car;
    return (
      <div>
        <ul className="list-group border">
          <li className="list-group-item active">Exterior Color</li>
          <ul className="list-group mx-2 border mt-2">
            <li className="list-group-item bg-secondary">See more LX Feature</li>
            <ul className="list-group">
              <li className="row wheels py-3 m-2 justify-content-around align-items-center border">
                <h5>Color</h5>
                <h6 className="text-left">{color}</h6>
              </li>
              <li className="row wheels py-3 m-2 justify-content-around align-items-center border">
                <h5>Price</h5>
                <h6 className="text-left">{price}</h6>
              </li>
              <li className="row wheels py-3 m-2 justify-content-around align-items-center border">
                <h5>Engine Type</h5>
                <h6 className="text-left">{engineType}</h6>
              </li>
              <li className="row wheels py-3 m-2 justify-content-around align-items-center border">
                <h5>Displacement</h5>
                <h6 className="text-left">{displacement}</h6>
              </li>
              <li className="row wheels py-3 m-2 justify-content-around align-items-center border">
                <h5>Horsepower (SAE net)</h5>
                <h6 className="text-left">{horsepower}</h6>
              </li>
              <li className="row wheels py-3 m-2 justify-content-around align-items-center border">
                <h5>Torque (SAE net)</h5>
                <h6 className="text-left">{horsepower}</h6>
              </li>
              <li className="row wheels py-3 m-2 justify-content-around align-items-center border">
                <h5>Redline</h5>
                <h6 className="text-left">{redline}</h6>
              </li>
            </ul>
          </ul>
        </ul>
      </div>
    );
  }
}
