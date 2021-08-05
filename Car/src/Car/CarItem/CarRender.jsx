import React, { Component } from 'react'
import ThreeSixty from 'react-360-view';
export default class CarRender extends Component {
    
    render() {
        const carType = this.props.cartype;
        const wheelType = this.props.carwheel;
        return (
            <div className="car">
                <div data-type = "1" className={"carColor " + (carType == 1? "d-block":"d-none")}>
                    <div data-wheel = "1" className={"wheel " + (wheelType == 1? "d-block":"d-none")}>
                        <ThreeSixty amount={8} imagePath="./images/images-black/images-black-1/" fileName="civic-{index}.jpg" />
                    </div>
                    <div data-wheel = "2" className={"wheel " + (wheelType == 2? "d-block":"d-none")}>
                        <ThreeSixty amount={8} imagePath="./images/images-black/images-black-2/" fileName="civic-{index}.jpg" />
                    </div>
                    <div data-wheel = "3" className={"wheel " + (wheelType == 3? "d-block":"d-none")}>
                        <ThreeSixty amount={8} imagePath="./images/images-black/images-black-3/" fileName="civic-{index}.jpg" />
                    </div>
                </div>
                <div data-type = "2" className={"carColor " + (carType == 2? "d-block":"d-none")}>
                    <div data-wheel = "1" className={"wheel " + (wheelType == 1? "d-block":"d-none")}>
                        <ThreeSixty amount={8} imagePath="./images/images-steel/images-steel-1/" fileName="civic-{index}.jpg" />
                    </div>
                    <div data-wheel = "2" className={"wheel " + (wheelType == 2? "d-block":"d-none")}>
                        <ThreeSixty amount={8} imagePath="./images/images-steel/images-steel-2/" fileName="civic-{index}.jpg" />
                    </div>
                    <div data-wheel = "3" className={"wheel " + (wheelType == 3? "d-block":"d-none")}>
                        <ThreeSixty amount={8} imagePath="./images/images-steel/images-steel-3/" fileName="civic-{index}.jpg" />
                    </div>
                </div>
                <div data-type = "3" className={"carColor " + (carType == 3? "d-block":"d-none")}>
                    <div data-wheel = "1" className={"wheel " + (wheelType == 1? "d-block":"d-none")}>
                        <ThreeSixty amount={8} imagePath="./images/images-silver/images-silver-1/" fileName="civic-{index}.jpg" />
                    </div>
                    <div data-wheel = "2" className={"wheel " + (wheelType == 2? "d-block":"d-none")}>
                        <ThreeSixty amount={8} imagePath="./images/images-silver/images-silver-2/" fileName="civic-{index}.jpg" />
                    </div>
                    <div data-wheel = "3" className={"wheel " + (wheelType == 3? "d-block":"d-none")}>
                        <ThreeSixty amount={8} imagePath="./images/images-silver/images-silver-3/" fileName="civic-{index}.jpg" />
                    </div>
                </div>
                <div data-type = "4" className={"carColor " + (carType == 4? "d-block":"d-none")}>
                    <div data-wheel = "1" className={"wheel " + (wheelType == 1? "d-block":"d-none")}>
                        <ThreeSixty amount={8} imagePath="./images/images-red/images-red-1/" fileName="civic-{index}.jpg" />
                    </div>
                    <div data-wheel = "2" className={"wheel " + (wheelType == 2? "d-block":"d-none")}>
                        <ThreeSixty amount={8} imagePath="./images/images-red/images-red-2/" fileName="civic-{index}.jpg" />
                    </div>
                    <div data-wheel = "3" className={"wheel " + (wheelType == 3? "d-block":"d-none")}>
                        <ThreeSixty amount={8} imagePath="./images/images-red/images-red-3/" fileName="civic-{index}.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}
