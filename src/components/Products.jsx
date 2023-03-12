import React from "react";
import Rectangle from "../../public/img/Rectangle.png"
const Products = (props) => {
    return ( 
        <>
            <div className="goods w-[176px] rounded-[15px] h-[238px] bg-[white] shadow-3xl  px-3 mx-1 md:w-[306px] md:h-[400px] md:rounded-[30px]">
                <div className="flex justify-center item-center"><img className="w-[160px] " src={Rectangle} alt="" /></div>
                <p className="text-[#7E7E7E]  mt-[15px] mb-[20px] text-[12px] md:text-[20px]">{props.title}</p>
                <h3 className="text-[#00AC73] font-bold text-[16px]" >{props.price}</h3>
            </div>
        </>
     );
}
 
export default Products;