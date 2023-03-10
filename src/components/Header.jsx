import logoHeader from "../../public/img/logo-header.svg";
import { AiOutlineSearch } from "react-icons/ai"
import rus from "../../public/img/Русский.svg";
import en from "../../public/img/Английский.svg";
import uz from "../../public/img/Узбекский.svg";

const Header = () => {
    return ( 
        <>
            <header className="mb-[50px] mt-3 md:flex md:justify-around md:container md:max-w-[1400px] md:mx-auto  px-2">
                <div className="flex justify-center item-center"><img className="md:w-[180px] w-[130px] flex " src={logoHeader} alt="" /></div>
                
                <form className="md:h-[50px] md:w-[746px] flex justify-between w-full rounded-[15px] bg-[#00AC73] mt-[24px] " action="">
                    <input className="md:h-[50px] rounded-[15px]  w-full pl-4 py-3 mr-1 bg-[#00AC73]  placeholder:text-[#ffff] md:text-[17px] text-[12px]" type="text"  placeholder="Введите название товара или заболевания" />
                    <button className="pr-3">< AiOutlineSearch size={26} color="#fff" /></button>
                </form>
                <div className="md:flex md:w-[315px]  md:justify-between flex justify-between mt-[24px]">
                    <select className="md:h-[50px] w-[86px] bg-[#00AC73] rounded-[15px] border-none">
                        <option className="py-6"  value="0"><img className="w-[24px] py-6" src={rus} alt="" /></option>
                        <option className="py-6"  value="1"><img className="w-[24px] py-6" src={uz} alt="" /></option>
                        <option className="py-6"  value="2"><img className="w-[24px] py-6" src={en} alt="" /></option>
                    </select>
                    <button className="md:h-[50px] w-[196px] bg-[#00AC73] rounded-[15px] py-2 text-[#ffff]"> 
                        Войти/Регистрация
                    </button>
                </div>
                
            </header>
        </>
     );
}
 
export default Header;