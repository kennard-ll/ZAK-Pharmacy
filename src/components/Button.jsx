import React from "react";
const Button = (props) => {
    return ( 
        <>
            <button className="text-[white] w-[196px] h-[56px] md:py-4 py-3 rounded-[15px] bg-[#00AC73] px-[15px] text-[16px] xs:text-[13px] ss:text-[16px] sm:text-[18px] md:text-[22px] md:h-[80px]">{props.text}</button>
        </>
     );
}
 
export default Button;