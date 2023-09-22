import React from "react";
import './Spinner.css'
const Spinner = ()=>{


    return(
    <div className="flex flex-col items-center space-y-2">

        {/* round cirlce */}
        <div class="custom-loader"></div>
        <p  className="text-slate-100 text-lg font-semibold">Loading.....</p>

    </div>
        
        );
}

export default Spinner;