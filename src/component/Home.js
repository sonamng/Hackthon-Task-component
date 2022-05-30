import React from "react";
import Bathroom from "./Bathroom";
import Room from "./Room";

function Home(){
    return(
        <div className="box">
            <h1>MY HOME</h1>
         <Bathroom/>
         <Room/>
        </div>

    )
}
export default Home;