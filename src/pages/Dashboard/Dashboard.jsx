import Cooling from "../Cooling/Cooling";
import Exhaust from "../Exhaust/Exhaust";
import Fuel from "../Fuel/Fuel";
import Rpm from "../Rpm/Rpm";
import Servo from "../Servo/Servo";
import Button from "../Button/Button ";
import './Dashboard.css'
import Yanmar65 from "./Yanmar65.png";

export default function Dashboard(){
    return(
        <div className="dashboard-container">
            <div className="page">
            <div className="yanmar">
                <img src={Yanmar65} width={350} height={350} alt="Yanmar65.png" />

            <div className="gauge-container">
                <div className="gauge1">
                <Servo />
                 <Rpm />
                 </div>
                 <div className="gauge2">
                 <Exhaust />
                 <Cooling />
                 <Fuel />
                 </div>
            </div>

             <div className="button">
             <Button variant="contained" disableElevation size="large" color="error"></Button>
             {/* <Button variant="contained" disableElevation size="large" color="success"></Button> */}
             </div>

             {/* <div className="chartjs">  
              <Streamchart />
              <Streamchart />
              </div>

              <div className="chartjs2">  
              <Streamchart />
              <Streamchart />
              </div>

              */}  
             </div>     
             </div>
        </div>

        // <div className="container">
        //     <div className="row">
        //         <div className="col-6 cooling">
        //             <p>Cooling</p>
        //             <Cooling />
        //         </div>
        //         <div className="col-6 exhaust">
        //            <p>Exhaust</p>
        //            <Exhaust /> 
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-6 fuel">
        //             <p>Fuel</p>
        //             <Fuel />
        //         </div>
        //         <div className="col-6 rpm">
        //         <p>Rpm</p>
        //             <Rpm />
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-6 servo">
        //             <p>Servo</p>
        //             <Servo />
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-6 servo">
        //             <p>Button</p>
        //             <Button />
        //         </div>
        //     </div>


        // </div>
    )
}