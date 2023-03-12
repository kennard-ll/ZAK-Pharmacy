import React from "react";
import Header from "../components/Header"
import Button from "../components/Button";
import Footer from "../components/Footer"
import Products from "../components/Products";
import aboutusImg from "../../public/img/aboutus-img.png"
import appImg from "../../public/img/app-img.png"

const Home = () => {
    return ( 
        <>
        <Header />
        <main>
            <section className="md:container md:max-w-[1400px] md:mx-auto px-2 ">
                <div className="text-center rounded-[30px] bg-[url('./public/img/bg-img.png')] bg-[length:714px_300px] md:bg-cover bg-no-repeat bg-center w-full h-[300px] mb-[35px] md:h-[500px]">
                    <h1 className="text-center text-[#ffff] text-[32px] leading-[39px] py-[24px] font-semibold md:pt-[60px] md:text-[74px] md:leading-[85px]">ZAK Pharmacy ваш<br /> здоровый выбор</h1>
                    <p className="w-[358px] m-auto text-center text-[#ffff] text-[26px] pb-[18px] md:w-full md:text-[50px] md:font-normal">Найти лекарства стало очень просто</p>

                        <Button className="" text="Начать"/>

                </div>      
                <h1 className="mb-[30px] text-center text-[#000000] text-[32px] font-bold md:text-[62px]">Популярные товары</h1>   
            </section>
            <section className="bg-[#7E7E7E1A] w-full h-[500px] mb-[30px]">

            </section>
            <section className="md:container md:max-w-[1400px] md:mx-auto px-2 ">
                <div className="text-center">
                    <Button text="Подробнее"/>
                </div>
                <div>
                    <h1 className="mb-[30px] text-center text-[#000000] text-[32px] font-bold md:text-[62px] mt-[50px]">Часто покупают</h1>
                    <div className="oftenBuy grid grid-cols-2 mt-[30px] ss:grid-cols-4 mb-[20px] md:grid-cols-4 gap-3 md:gap-[3rem]">
                        <Products title="Клексан шприц 4000 анти-Ха МЕ/0.4мл №10"/>
                        <Products title="Клексан шприц 4000 анти-Ха МЕ/0.4мл №10"/>
                        <Products title="Клексан шприц 4000 анти-Ха МЕ/0.4мл №10"/>
                        <Products title="Клексан шприц 4000 анти-Ха МЕ/0.4мл №10"/>
                        <Products title="Клексан шприц 4000 анти-Ха МЕ/0.4мл №10"/>
                        <Products title="Клексан шприц 4000 анти-Ха МЕ/0.4мл №10"/>
                        <Products title="Клексан шприц 4000 анти-Ха МЕ/0.4мл №10"/>
                        <Products title="Клексан шприц 4000 анти-Ха МЕ/0.4мл №10"/>
                    </div>
                    <div className="text-center">
                        <Button text="Подробнее"/>
                    </div>
                </div>
            </section>
            <section className="md:container md:max-w-[1400px] md:mx-auto px-2 ">
                <h1 className="mb-[30px] text-center text-[#000000] text-[32px] font-bold md:text-[62px] mt-[50px]">О нас</h1>
                <div className="md:flex md:justify-around">
                    <div>
                        <img src={aboutusImg} alt="" />
                    </div>
                    <div className="mt-[30px]">
                        <h1 className=" text-[23px] text-start leading-6 font-semibold sm:w-[380px]  xs:w-[420px] md:text-[30px] sm:text-[22px] md:w-[605px]" >Наши товары делают жизнь комфортной и безопасной. Высокий уровень сервиса и понимания к каждому покупателю.</h1>
                        <div className="md:w-[667px]">
                            <p className="text-[16px] font-normal mt-[20px] mb-[10px] sm:text-[16px] md:text-[30px]" >01. Большой ассортимент</p>
                            <span className="text-[#7E7E7E] text-[14px] sm:text-[16px] md:text-[20px]" >Для ванной комнаты с различным покрытием</span>
                            <p className="text-[16px] font-normal mt-[20px] mb-[10px] sm:text-[16px] md:text-[30px]" >02. Доступные цены</p>
                            <span className="text-[#7E7E7E] text-[14px] sm:text-[16px] md:text-[20px]" >Сантехника под любой запрос</span>
                            <p className="text-[16px] font-normal  mt-[20px] mb-[10px] sm:text-[16px] md:text-[30px]" >03. Высокий уровень сервиса</p>
                            <span className="text-[#7E7E7E] text-[14px] sm:text-[16px] md:text-[20px]" >Решаем неудовлетворенные потребности покупателей, ценим клиентов как деловых партнеров</span>
                            <p className="text-[16px] font-normal mt-[20px] mb-[10px] sm:text-[16px] md:text-[30px]" >04. Круглосуточная доставка</p>
                            <span className="text-[#7E7E7E] text-[14px] sm:w-[400px] sm:text-[16px] md:text-[20px]" >Предоставляем круглосуточную доставку  по всему Узбекистану </span>  
                        </div>                    
                    </div>
                </div>
                <div className="mt-[50px] sm:items-center  bg-[#00504D] rounded-[30px] sm:flex sm:justify-between">
                    <h1 className="text-2xl text-center py-6 font-bold text-[#ffffff] sm:text-4xl">Пользуйтесь нашим приложением для большего удобства</h1>
                    <div className="flex justify-center item-center"><img src={appImg} alt="" /></div>
                </div>
            </section>
        </main>
        <Footer />
        </>
     );
}
 
export default Home;