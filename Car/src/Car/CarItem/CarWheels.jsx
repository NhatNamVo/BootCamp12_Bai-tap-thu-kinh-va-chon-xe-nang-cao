import React, { Component } from "react";

export default class CarWheels extends Component {
  render() {
    const {title, img, idWheel} = this.props.wheel;
    return (
          <li data-id={idWheel} style={{cursor:"pointer"}} key={idWheel} className={"row wheels py-3 m-2 align-items-center border " + (this.props.active == idWheel? "bg-secondary": "")}>
              <img className="col-4" src={img} alt="" />
              <p className="col-8 text-left">{title}</p>
          </li>
    );
  }
}
