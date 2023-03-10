import React from "react";

const CreditCard = ({item}) => {
	return(
        <>
        <div className="md:w-[343px] pt-[24px] md:mr-[20px] ">
            <div className="w-full bg-[#00AC73] p-6 rounded-3xl" >
            <h3 className="text-[26px] text-white mb-4 font-semibold leading-[29px]" >Maksim<br /> Maksimov</h3>
            <span className="text-lg text-white" >Основная карта</span>
            <div className="w-full flex justify-between items-center mt-6">
                <span>8600 55** **** 6600</span>
                <h3>{item}</h3>
            </div>
            </div>
        </div>
        </>
        
    )

     
};


export default CreditCard