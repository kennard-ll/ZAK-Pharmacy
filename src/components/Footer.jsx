import React from "react";
import logoFooter from "../../public/img/logo-footer.svg"

const Footer = () => {
    return ( 
        <>
            <footer className="px-2 bg-[#00AC73] pb-[24px]" >
                <div className=""> 
                <div className="flex justify-center item-center mt-[26px]"><img src={logoFooter} alt="" /></div>
                    <h1 className="text-start text-[#FFFFFF] text-[21px] mt-[16px] ">Серви поддерживает вас и помогает найти лекарства по выгодным ценам и с удобной круглосуточной доставкой почти в любую точку страны. Будьте здоровы с нами!</h1>
                </div>
                <div className="flex justify-around">
                    <div >
                        <h3>О компании</h3>
                        <p><a href="#">Часто задаваемые вопросы</a></p>
                        <p><a href="#">Как заказать</a></p>
                        <p><a href="#">Обратная связь</a></p>
                        <p><a href="#">Правила для оформления отзывов и комментариев</a></p>
                        <p><a href="#">Стать курьером</a></p>
                    </div>
                    <div>
                        <h3>Помощь</h3>
                        <p><a href="#">Контакты</a></p>
                        <p><a href="#">Доставка</a></p>
                        <p><a href="#">Пользовательское соглашение</a></p>
                        <p><a href="#">Стать партнёром</a></p>
                        <p><a href="#">Стать курьером</a></p>
                    </div>
                </div>
                <div></div>
            </footer>
        </>
     );
}
 
export default Footer;