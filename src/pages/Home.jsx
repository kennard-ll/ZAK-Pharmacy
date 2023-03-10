import React from "react";
import Header from "../components/Header"
import Button from "../components/Button";
import Footer from "../components/Footer"
import Products from "../components/Products";

const Home = () => {
    return ( 
        <>
        <Header />
        <main>
            <section className="md:container md:max-w-[1400px] md:mx-auto px-2 ">
                <div className="text-center rounded-[30px] bg-[url('./public/img/bg-img.png')] bg-[length:714px_300px] md:bg-cover bg-no-repeat bg-center w-full h-[300px] mb-[35px] md:h-[500px]">
                    <h1 className="text-center text-[#ffff] text-[36px] leading-[39px] py-[24px] font-semibold md:pt-[60px] md:text-[74px] md:leading-[85px]">ZAK Pharmacy ваш<br /> здоровый выбор</h1>
                    <p className="w-[358px] m-auto text-center text-[#ffff] text-[26px] pb-[18px] md:w-full md:text-[50px] md:font-normal">Найти лекарства стало очень просто</p>

                        <Button className="" text="Начать"/>

                </div>      
                <h1 className="mb-[30px] text-center text-[#000000] text-[36px] font-bold md:text-[62px]">Популярные товары</h1>   
            </section>
            <section className="bg-[#7E7E7E1A] w-full h-[400px] mb-[30px]">

            </section>
            <section className="px-2">
                <div className="text-center">
                    <Button text="Подробнее"/>
                </div>
                <div>
                    <h1 className="mb-[30px] text-center text-[#000000] text-[36px] font-bold md:text-[62px] mt-[50px]">Часто покупают</h1>
                    <div className="oftenBuy grid grid-cols-2 mt-[30px] ss:grid-cols-3 max-w-6xl mb-[20px] m-auto md:grid-cols-4 gap-3">
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                    </div>
                    
                </div>
            </section>
        </main>
        <Footer />
        </>
     );
}
 
export default Home;