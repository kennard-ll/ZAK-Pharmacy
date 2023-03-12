import React from "react";
import logoFooter from "../../public/img/logo-footer.svg"
import facebookIcon from "../../public/img/Facebook-icon.svg"
import instagramIcon from "../../public/img/Instagram-icon.svg"
import telegramIcon from "../../public/img/Telegram-icon.svg"

const Footer = () => {
    return ( 
        <>
            <footer className=" px-2 bg-[#00AC73] mt-[50px] h-auto w-full" >
                <div className="md:container md:max-w-[1400px] md:mx-auto "> 
                    <div className="md:flex md:justify-around py-6 sm:py-[100px]">
                        <div className="md:w-[187px]"> 
                            <div className="flex justify-center item-center"><img src={logoFooter} alt="" /></div>
                            <h1 className="text-start text-[#FFFFFF] text-[20px] mt-[16px] tracking-[-0.5px] leading=[30px] md:text-[14px]">Серви поддерживает вас и помогает найти лекарства по выгодным ценам и с удобной круглосуточной доставкой почти в любую точку страны. Будьте здоровы с нами!</h1>
                        </div>
                        <div className="flex justify-between mt-6 md:mt-[auto] md:w-[670px]">
                            <div className="text-[#ffffff]">
                                <h3 className="text-[26px] font-bold pb-[20px]">О компании</h3>
                                <p className="text-[17px] leading-10 tracking-[-0.15px]"><a href="#">Контакты</a></p>
                                <p className="text-[17px] leading-10 tracking-[-0.15px]"><a href="#">Доставка</a></p>
                                <p className="text-[17px] leading-10 tracking-[-0.15px]"><a href="#">Пользовательское соглашение</a></p>
                                <p className="text-[17px] leading-10 tracking-[-0.15px]"><a href="#">Стать партнёром</a></p>
                                <p className="text-[17px] leading-10 tracking-[-0.15px]"><a href="#">Стать курьером</a></p>
                            </div>
                            <div className="text-[#ffffff] w-[247px] md:w-[324px]">
                                <h3 className="text-[26px] font-bold pb-[20px]">Помощь</h3>
                                <p className="text-[17px]  tracking-[-0.15px] mb-[14px]"><a href="#">Часто задаваемые вопросы</a></p>
                                <p className="text-[17px]  tracking-[-0.15px] mb-[14px]"><a href="#">Как заказать</a></p>
                                <p className="text-[17px]  tracking-[-0.15px] mb-[14px]"><a href="#">Обратная связь</a></p>
                                <p className="text-[17px]  tracking-[-0.15px] mb-[14px]"><a href="#">Правила для оформления отзывов и комментариев</a></p>
                                <p className="text-[17px]  tracking-[-0.15px] mb-[14px]"><a href="#">Стать курьером</a></p>
                            </div>
                        </div>
                        <dir className="flex justify-center items-end">
                            <div className="text-[#ffffff] w-[201px] text-center">
                                <h6 className="text-[16px] font-medium">Мы в социальных сетях</h6>
                                <div className="flex justify-between mt-[16px] mb-[30px]">
                                    <img src={facebookIcon} alt="" />
                                    <img src={instagramIcon} alt="" />
                                    <img src={telegramIcon} alt="" />
                                </div>
                                <h5 className="text-[18px] font-semibold">+998 71 200-00-00</h5>
                            </div>                            
                        </dir>
                    </div>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;