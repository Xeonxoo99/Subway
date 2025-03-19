import { useState, useEffect, useRef } from 'react';
import logo from '@assets/main/subway_logo.svg';
import { Link } from 'react-router-dom';
import '.././App.css';

function Header() {
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(false);
    const navTimeout = useRef(null);
    const subMenuTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 200);
            setVisible(currentScrollY <= prevScrollY || currentScrollY <= 200);
            setPrevScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollY]);

    const handleMouseEnter = (menuId) => {
        clearTimeout(navTimeout.current);
        clearTimeout(subMenuTimeout.current);
        setHoveredMenu(menuId);
        setIsNavVisible(true);
        subMenuTimeout.current = setTimeout(() => setIsSubMenuVisible(true), 100);
    };

    const handleNavMouseLeave = () => {
        // 메뉴 영역에서 나갔을 때만 동작
        if (!isSubMenuVisible) {
            clearTimeout(navTimeout.current);
            clearTimeout(subMenuTimeout.current);
            setIsSubMenuVisible(false);
            navTimeout.current = setTimeout(() => setIsNavVisible(false), 200);
        }
    };

    const handleSubMenuMouseEnter = () => {
        // 서브 메뉴에 마우스를 올렸을 때, 서브 메뉴가 사라지지 않도록 방지
        clearTimeout(navTimeout.current);
        clearTimeout(subMenuTimeout.current);
        setIsSubMenuVisible(true);
    };

    const handleSubMenuMouseLeave = () => {
        // 서브 메뉴에서 나갔을 때만 동작
        setIsSubMenuVisible(false);
        navTimeout.current = setTimeout(() => setIsNavVisible(false), 200);
    };

    const menuItems = [
        { id: 'menu', text: '메뉴소개', link: '/' },
        { id: 'guide', text: '이용방법', link: '/guide' },
        { id: 'news', text: '새소식', link: '#news' },
        { id: 'subway', text: '써브웨이', link: '#subway' },
        { id: 'franchise', text: '가맹점', link: '#franchise' },
        { id: 'order', text: '온라인 주문', link: '#order', highlight: true },
    ];

    const subMenus = {
        menu: ['샌드위치', '랩 ﹒ 기타', '샐러드', '아침메뉴', '스마일 썹', '단체메뉴'],
        guide: ['써브웨이 이용방법', '단체메뉴 이용방법', '신선한 재료 소개', 'APP 이용방법'],
        news: ['이벤트 ﹒ 프로모션', '뉴스 ﹒ 공지사항', '광고영상'],
        subway: ['써브웨이 역사', '써브웨이 약속', '샌드위치 아티스트 지원'],
        franchise: ['써브웨이 프랜차이즈', '가맹관련 FAQ', '가맹신청 ﹒ 문의', '지사안내', '사업설명회'],
        order: ['FAST﹒SUB', 'HOME﹒SUB', '단체주문'],
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            {/* Global nav */}
            <div
                className={`transition-all duration-500 ${
                    isScrolled || isNavVisible ? 'bg-[#fffff0] text-[#000000]' : 'bg-transparent text-white'
                } ${isNavVisible ? 'max-h-96' : 'max-h-32'} overflow-hidden`}
                onMouseLeave={handleNavMouseLeave}
            >
                <div className="w-4/6 flex justify-between mx-auto items-center py-6">
                    <a href="/" className="w-3xs">
                        <img
                            src={logo}
                            alt="Subway Logo"
                            className="w-fit cursor-pointer"
                            onMouseEnter={() => setIsNavVisible(true)}
                            onMouseLeave={handleNavMouseLeave}
                        />
                    </a>
                    <nav>
                        <ul className="w-xl flex justify-around items-center space-x-6 font-semibold text-lg">
                            {menuItems.map((menu) => (
                                <li
                                    key={menu.id}
                                    onMouseEnter={() => handleMouseEnter(menu.id)}
                                    onMouseLeave={handleNavMouseLeave}
                                    className={`relative cursor-pointer transition-opacity duration-300 ${menu.highlight ? 'text-[#1ec156]' : ''}`}
                                >
                                    <Link to={menu.link}>{menu.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Submenu */}
            <div
                className={`w-full bg-[#fffff0]  text-[#000000] shadow-md transition-all duration-300 overflow-hidden ${
                    isSubMenuVisible ? 'max-h-96 border-t border-gray-100' : 'max-h-0'
                }`}
                onMouseEnter={handleSubMenuMouseEnter}
                onMouseLeave={handleSubMenuMouseLeave}
            >
                <div className="w-3/5 mx-auto flex flex-col items-center gap-4 py-6 text-lg font-semibold list-none">
                    {subMenus[hoveredMenu]?.map((item, index) => (
                        <li key={index} className="relative cursor-pointer opacity-60 hover:opacity-100 underline-effect">
                            {item}
                        </li>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
