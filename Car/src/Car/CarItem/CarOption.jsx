import React, { Component } from "react";

export default class CarOption extends Component {
  render() {
    const {title, img, type, id} = this.props.carType;
    return (
        <li data-id={id} key={id} style={{cursor:"pointer"}} className={"row carColor py-3 m-2 align-items-center border " + (this.props.active == id? "bg-secondary": "")}>
            <img className="col-3" src={img} alt="" />
            <div className="col-9 text-left">
                <h4>{title}</h4>
                <p>{type}</p>
            </div>
        </li>
    );
  }
}
