import React, { Component } from 'react'
import carTypes from '../Data/arrayFeatures.json';
import carWheels from '../Data/wheels.json';

import CarInfo from '../Car/CarItem/CarInfo';
import CarOption from '../Car/CarItem/CarOption';
import CarWheels from '../Car/CarItem/CarWheels';
import CarRender from '../Car/CarItem/CarRender';

import './car.css';
export default class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
                "id": 1,
                "title": "Crystal Black",
                "type": "Pearl",
                "img": "./images/icons/icon-black.jpg",
                "srcImg": "images-black/images-black-1/",
                "color": "Black",
                "price": "19,550",
                "engineType": "In-Line 4-Cylinder",
                "displacement": "1996 cc",
                "horsepower": "158 @ 6500 rpm",
                "torque": "138 lb-ft @ 4200 rpm",
                "redline": "6700 rpm",
                "wheels": [
                  {
                  "idWheel": 1,
                  "srcImg": "images-steel/images-steel-1/"
                  },
                  {
                  "idWheel": 2,
                  "srcImg": "images-steel/images-steel-2/"
                  },
                  {
                  "idWheel": 3,
                  "srcImg": "images-steel/images-steel-3/"
                  }
                ]
        }
        this.wheelID = 0;
        this.loadding = true;
    }
    componentDidMount() {
      setTimeout(() => {
        this.loadding = false;
        this.forceUpdate();
      }, 3000);
    }
    componentDidUpdate() {
      this.loadding = true;
    }
    Carselector = (event) =>{
      const carColor = event.target.closest('.carColor');
      const carWheel = event.target.closest('.wheels')
      if(carColor){
        const colorId = carColor.dataset.id;
        const carType = carTypes.find((car)=>{
          return colorId == car.id;
        });
        this.setState({
          ...this.state = carType,
        });
        setTimeout(() => {
          this.loadding = false;
          this.forceUpdate();
        }, 3000);
        
      };
      if(carWheel){
        const wheelId = carWheel.dataset.id;
        this.wheelID = wheelId-1;
        this.forceUpdate();
        setTimeout(() => {
          this.loadding = false;
          this.forceUpdate();
        }, 3000);
      };
    };
    render() {
        const car = this.state;
        return (
            <div className="row m-auto">
                <div className="col-8 car360View">
                  <div className="screenViewBack">
                    <div className={"loadding position-absolute " + (!this.loadding? "d-none":"")}>
                      <img src="./images/icons/honda_loading.gif" alt="" />
                    </div>
                    <CarRender cartype = {car.id} carwheel = {car.wheels[this.wheelID].idWheel}/>
                  </div>
                <div className="carInfo">
                  <CarInfo car = {car}/>
                </div>
                </div>
                <div className="col-4">
                  <ul className="list-group" onClick={this.Carselector}>
                      <li style={{cursor:"pointer"}} onClick={handleCarExterior} className="list-group-item active mt-3">
                        Exterior Color
                      </li>
                    <div class="collapse exteriorColor border" id="">
                      <ul className="list-group">
                        {carTypes.map((carType, index)=>{
                        return <CarOption carType = {carType} active = {car.id}/>
                        })}
                      </ul>
                    </div>
                    <li style={{cursor:"pointer"}} onClick={handleCarWheel} className="list-group-item active mt-3">
                        Wheels
                    </li>
                    <div class="collapse carWheelType border" id="">
                      <ul className="list-group">
                        {carWheels.map((carWheel, index)=>{
                          return <CarWheels wheel = {carWheel} active={this.wheelID + 1}/>
                        })}
                      </ul>
                    </div>
                  </ul>
                </div>
            </div>
        )
    }
}

function handleCarExterior() {
  const collapseComponent = document.querySelector('.exteriorColor');
  collapseComponent.classList.toggle('show');
}

function handleCarWheel() {
  const collapseComponent = document.querySelector('.carWheelType');
  collapseComponent.classList.toggle('show');
}
