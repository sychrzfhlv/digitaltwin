import Cooling from "./Cooling/Cooling";
import Exhaust from "./Exhaust/Exhaust";
import Fuel from "./Fuel/Fuel";
import Rpm from "./Rpm/Rpm";

export default function All(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Cooling />
                </div>
                <div className="col-6">
                   <Exhaust /> 
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <Fuel />
                </div>
                <div className="col-6">
                    <Rpm />
                </div>
            </div>

        </div>
    )
}