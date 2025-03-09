import logo from '@assets/main/subway_logo.svg'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY && currentScrollY > 200) {
                // 아래로 스크롤하면 숨김
                setVisible(false);
            } else {
                // 위로 스크롤하면 보이게
                setVisible(true);
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollY]);
    
    return (
        <header
            className={`fixed top-0 left-0 w-full z-9999 bg-transparent transition-transform duration-500 ${
                visible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="w-4/6 flex justify-between mx-auto items-center py-6">
                <a href="/" className="w-3xs">
                    <img src={logo} alt="Subway Logo" className="w-fit" />
                </a>
                <nav>
                    <ul className="w-xl flex justify-around items-center space-x-6 all:font-semibold text-lg text-[#ffffff]">
                        <Link to="/"><a href="#menu">메뉴소개</a></Link>
                        <Link to="/guide"><li>이용방법</li></Link>
                        <li><a href="#news">새소식</a></li>
                        <li><a href="#subway">써브웨이</a></li>
                        <li><a href="#franchise">가맹점</a></li>
                        <li><a className='text-[#1ec156]' href="#order">온라인 주문</a></li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Header;