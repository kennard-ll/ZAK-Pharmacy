import React from "react";
import Header from "../components/Header"
import CreditCard from "../components/CreditCard"
import Footer from "../components/Footer"
import avatar from "../../public/img/avatar.png"
import { ThemeProvider } from "@material-tailwind/react";
import { Accordion } from "@material-tailwind/react";



const Profile = () => {
    return ( 
        <>
        <Header />
        <main>
            <section className="md:container md:max-w-[1400px] md:mx-auto px-2">
                <h1 className="text-center text-[#000000] text-[36px] font-bold  md:text-[62px]">Профиль</h1>
                <div className="mt-[30px] shadow-3xl rounded-[15px] px-8"> 
                    <div className="md:flex">
                        <div className="flex justify-center item-center pt-[24px] pb-[5px]"><img src={avatar} alt="" /></div>
                        <div className="md:ml-[25px] md:mt-[35px]" >
                            <h1 className="md:text-start text-center text-[#000000] text-[26px] font-medium pb-[5px]">Максим Максимов</h1>
                            <h1 className="md:text-start text-center text-[#000000] text-[26px] font-medium pb-[5px]">+998 90 900 90 90</h1>
                            <h1 className="md:text-start text-center text-[#000000] text-[26px] font-medium leading-[31px]">Ташкент, Проспект Халклар Дустлиги, 1</h1>
                        </div>
                    </div>
                    <div className="md:flex mb-[50px] pb-[24px]">
                        <CreditCard />
                        <CreditCard />
                    </div>
                </div>
            </section>
            <section className="px-2">
                <h1 className="text-center text-[#000000] text-[36px] font-bold  md:text-[62px]">История заказов</h1>
                <div className="mt-[30px] shadow-3xl rounded-[15px]">
                 <Accordion></Accordion>
                </div>
            </section>
        </main>

        
        <Footer />
        </>
     );
}
 
export default Profile;