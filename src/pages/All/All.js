import Cooling from "../Cooling/Cooling";
import Exhaust from "../Exhaust/Exhaust";
import Fuel from "../Fuel/Fuel";
import Rpm from "../Rpm/Rpm";
import Servo from "../Servo/Servo";
import './All.css'

export default function All(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-6 cooling">
                    <p>Cooling</p>
                    <Cooling />
                </div>
                <div className="col-6 exhaust">
                   <p>Exhaust</p>
                   <Exhaust /> 
                </div>
            </div>
            <div className="row">
                <div className="col-6 fuel">
                    <p>Fuel</p>
                    <Fuel />
                </div>
                <div className="col-6 rpm">
                <p>Rpm</p>
                    <Rpm />
                </div>
            </div>
            <div className="row">
                <div className="col-6 servo">
                    <p>Servo</p>
                    <Servo />
                </div>
            </div>



        </div>
    )
}