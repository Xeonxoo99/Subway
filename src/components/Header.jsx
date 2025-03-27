import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/main/subway_logo.svg';
import { Menu, X } from 'lucide-react';
import '.././App.css';

function Header() {
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeMenu, setActiveMenu] = useState(null);
    const [submenuHeight, setSubmenuHeight] = useState({});
    const navTimeout = useRef(null);
    const subMenuTimeout = useRef(null);

    const submenuRefs = useRef({}); // 각 서브메뉴의 Ref 저장

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 200);
            setVisible(currentScrollY <= prevScrollY || currentScrollY <= 200);
            setPrevScrollY(currentScrollY);
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth <= 1024) {
                setIsSubMenuVisible(false);  // 1024px 이하일 때 서브 메뉴 숨김
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [prevScrollY]);

    const handleMouseEnter = (menuId) => {
        if (windowWidth > 1024) { // 1024px 이상일 때만 실행
            clearTimeout(navTimeout.current);
            clearTimeout(subMenuTimeout.current);
            setHoveredMenu(menuId);
            setIsNavVisible(true);
            subMenuTimeout.current = setTimeout(() => setIsSubMenuVisible(true), 100);
        }
    };

    const handleNavMouseLeave = () => {
        if (!isSubMenuVisible) {
            clearTimeout(navTimeout.current);
            clearTimeout(subMenuTimeout.current);
            setIsSubMenuVisible(false);
            navTimeout.current = setTimeout(() => setIsNavVisible(false), 200);
        }
    };

    const handleSubMenuMouseEnter = () => {
        clearTimeout(navTimeout.current);
        clearTimeout(subMenuTimeout.current);
        setIsSubMenuVisible(true);
    };

    const handleSubMenuMouseLeave = () => {
        setIsSubMenuVisible(false);
        navTimeout.current = setTimeout(() => setIsNavVisible(false), 200);
    };

    const handleMenuClick = (menuId) => {
        setActiveMenu((prevActiveMenu) => {
            const newActiveMenu = prevActiveMenu === menuId ? null : menuId;
            
            setSubmenuHeight(() => {
                const newHeightState = Object.keys(subMenus).reduce((acc, key) => {
                    acc[key] = key === newActiveMenu ? (submenuRefs.current[key]?.scrollHeight + "px") : "0px";
                    return acc;
                }, {});  // prev는 더 이상 사용되지 않음.
    
                return newHeightState;
            });
    
            return newActiveMenu;
        });
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
        <>
            <header
                className={`fixed top-0 left-0 w-full z-60 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div
                    className={`transition-all duration-500 ${isScrolled || isNavVisible ? 'bg-[#ffffff] text-[#000000]' : 'bg-transparent text-white'
                        } ${isNavVisible ? 'max-h-96' : 'max-h-32'} overflow-hidden`}
                    onMouseLeave={handleNavMouseLeave}
                >
                    <div className="w-4/6 flex justify-between mx-auto items-center py-6">
                        <a href="/" className="w-3xs">
                            <img
                                src={logo}
                                alt="Subway Logo"
                                className="w-fit cursor-pointer"
                            />
                        </a>
                        {/* 글로벌 네비게이션 */}
                        <nav className="hidden lg:flex">
                            <ul className="w-xl flex justify-around items-center space-x-6 font-semibold text-[clamp(1rem,1vw,1.3rem)]">
                                {menuItems.map((menu) => (
                                    <li
                                        key={menu.id}
                                        onMouseEnter={() => handleMouseEnter(menu.id)}
                                        onMouseLeave={handleNavMouseLeave}
                                        className={`relative cursor-pointer transition-opacity duration-500 ${menu.highlight ? 'text-[#1ec156]' : ''}`}
                                    >
                                        <Link to={menu.link}>{menu.text}</Link>

                                        {hoveredMenu === menu.id && (
                                            <ul
                                                className=" absolute hidden group-hover:block bg-white shadow-md mt-2 space-y-2 p-4"
                                                onMouseEnter={handleSubMenuMouseEnter}
                                                onMouseLeave={handleSubMenuMouseLeave}
                                            >
                                                {subMenus[menu.id].map((subMenu, idx) => (
                                                    <li key={idx}><Link to={`/${subMenu}`}>{subMenu}</Link></li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {/* 토글 버튼 */}
                        <button
                            className="lg:hidden text-2xl relative z-60"
                            onClick={() => setIsNavVisible((prevState) => !prevState)}  // 상태 반전 방식
                        >
                            {isNavVisible ? (
                                <X size={32} className="text-[#000000] z-60" />
                            ) : (
                                <Menu size={32} className={`${isScrolled ? 'text-[#000000]' : ''}`} />
                            )}
                        </button>
                    </div>
                </div>
                {/* 서브 메뉴 */}
                {windowWidth > 1024 && (
                    <div
                        className={`w-full bg-[#fcfcfc] text-[#000000] shadow-md transition-all duration-300 overflow-hidden ${isSubMenuVisible ? 'max-h-96 border-t border-gray-200' : 'max-h-0'
                            }`}
                        onMouseEnter={handleSubMenuMouseEnter}
                        onMouseLeave={handleSubMenuMouseLeave}
                    >
                        <div className="w-3/5 mx-auto flex items-center justify-center gap-6 py-6 text-[clamp(0.875rem,1vw,1.1rem)] font-semibold list-none">
                            {subMenus[hoveredMenu]?.map((item, index) => (
                                <li key={index} className={`relative cursor-pointer opacity-60 ${index !== 0 ? 'li_items' : ''} hover:opacity-100 underline-effect`}>
                                    {item}
                                </li>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {/* 1024px 이하 일 때 아이콘 클릭 시 나타나는 메뉴 */}
            <div className={`fixed top-0 right-0 z-50 h-full bg-[#ffffff] text-[#000000] shadow-lg transition-all duration-300 overflow-hidden lg:hidden 
    ${isNavVisible ? 'w-full' : 'w-0'}`}
                onMouseEnter={handleSubMenuMouseEnter}
                onMouseLeave={handleSubMenuMouseLeave}
            >
                <ul className="flex flex-col items-start p-6 space-y-4 font-semibold text-lg pt-28">
                    {menuItems.map((menu) => (
                        <li key={menu.id} className="w-full">
                            <button
                                className="flex justify-between items-center w-full text-left py-2 px-4 hover:text-[#1ec156]"
                                onClick={() => handleMenuClick(menu.id)} 
                            >
                                {menu.text}
                                <span>{activeMenu === menu.id ? '▲' : '▼'}</span>
                            </button>

                            {/* 서브 메뉴 */}
                            {subMenus[menu.id] && (
                                <ul
                                    ref={(el) => (submenuRefs.current[menu.id] = el)} // ref 추가
                                    className="ml-6 mt-2 space-y-2 text-sm rounded-md p-2 transition-all duration-300 overflow-hidden"
                                    style={{
                                        maxHeight: submenuHeight[menu.id] || "0px",
                                        opacity: activeMenu === menu.id ? 1 : 0, // 부드러운 효과 추가
                                    }}
                                >
                                    {subMenus[menu.id].map((subMenu, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={`/${subMenu}`}
                                                className="block py-1 px-3"
                                                onClick={() => {
                                                    setIsNavVisible(false);
                                                    setActiveMenu(null);
                                                    setSubmenuHeight({});
                                                }}
                                            >
                                                {subMenu}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Header;









// 반응형 X
// import { useState, useEffect, useRef } from 'react';
// import logo from '@assets/main/subway_logo.svg';
// import { Link } from 'react-router-dom';
// import '.././App.css';

// function Header() {
//     const [prevScrollY, setPrevScrollY] = useState(0);
//     const [visible, setVisible] = useState(true);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [hoveredMenu, setHoveredMenu] = useState(null);
//     const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
//     const [isNavVisible, setIsNavVisible] = useState(false);
//     const navTimeout = useRef(null);
//     const subMenuTimeout = useRef(null);

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;
//             setIsScrolled(currentScrollY > 200);
//             setVisible(currentScrollY <= prevScrollY || currentScrollY <= 200);
//             setPrevScrollY(currentScrollY);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [prevScrollY]);

//     const handleMouseEnter = (menuId) => {
//         clearTimeout(navTimeout.current);
//         clearTimeout(subMenuTimeout.current);
//         setHoveredMenu(menuId);
//         setIsNavVisible(true);
//         subMenuTimeout.current = setTimeout(() => setIsSubMenuVisible(true), 100);
//     };

//     const handleNavMouseLeave = () => {
//         if (!isSubMenuVisible) {
//             clearTimeout(navTimeout.current);
//             clearTimeout(subMenuTimeout.current);
//             setIsSubMenuVisible(false);
//             navTimeout.current = setTimeout(() => setIsNavVisible(false), 200);
//         }
//     };

//     const handleSubMenuMouseEnter = () => {
//         clearTimeout(navTimeout.current);
//         clearTimeout(subMenuTimeout.current);
//         setIsSubMenuVisible(true);
//     };

//     const handleSubMenuMouseLeave = () => {
//         setIsSubMenuVisible(false);
//         navTimeout.current = setTimeout(() => setIsNavVisible(false), 200);
//     };

//     const menuItems = [
//         { id: 'menu', text: '메뉴소개', link: '/' },
//         { id: 'guide', text: '이용방법', link: '/guide' },
//         { id: 'news', text: '새소식', link: '#news' },
//         { id: 'subway', text: '써브웨이', link: '#subway' },
//         { id: 'franchise', text: '가맹점', link: '#franchise' },
//         { id: 'order', text: '온라인 주문', link: '#order', highlight: true },
//     ];

//     const subMenus = {
//         menu: ['샌드위치', '랩 ﹒ 기타', '샐러드', '아침메뉴', '스마일 썹', '단체메뉴'],
//         guide: ['써브웨이 이용방법', '단체메뉴 이용방법', '신선한 재료 소개', 'APP 이용방법'],
//         news: ['이벤트 ﹒ 프로모션', '뉴스 ﹒ 공지사항', '광고영상'],
//         subway: ['써브웨이 역사', '써브웨이 약속', '샌드위치 아티스트 지원'],
//         franchise: ['써브웨이 프랜차이즈', '가맹관련 FAQ', '가맹신청 ﹒ 문의', '지사안내', '사업설명회'],
//         order: ['FAST﹒SUB', 'HOME﹒SUB', '단체주문'],
//     };

//     return (
//         <header
//             className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
//         >
//             {/* Global nav */}
//             <div
//                 className={`transition-all duration-500 ${isScrolled || isNavVisible ? 'bg-[#fbf050] text-[#000000]' : 'bg-transparent text-white'
//                     } ${isNavVisible ? 'max-h-96' : 'max-h-32'} overflow-hidden`}
//                 onMouseLeave={handleNavMouseLeave}
//             >
//                 <div className="w-4/6 flex justify-between mx-auto items-center py-6">
//                     <a href="/" className="w-3xs">
//                         <img
//                             src={logo}
//                             alt="Subway Logo"
//                             className="w-fit cursor-pointer"
//                             onMouseEnter={() => setIsNavVisible(true)}
//                             onMouseLeave={handleNavMouseLeave}
//                         />
//                     </a>
//                     <nav>
//                         <ul className="w-xl flex justify-around items-center space-x-6 font-semibold text-[clamp(1rem,1vw,1.3rem)]">
//                             {menuItems.map((menu) => (
//                                 <li
//                                     key={menu.id}
//                                     onMouseEnter={() => handleMouseEnter(menu.id)}
//                                     onMouseLeave={handleNavMouseLeave}
//                                     className={`relative cursor-pointer transition-opacity duration-500 ${menu.highlight ? 'text-[#1ec156]' : ''}`}
//                                 >
//                                     <Link to={menu.link}>{menu.text}</Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </nav>
//                 </div>
//             </div>

//             {/* Submenu */}
//             <div
//                 className={`w-full bg-[#fbf050] text-[#000000] shadow-md transition-all duration-300 overflow-hidden ${isSubMenuVisible ? 'max-h-96 border-t border-amber-300' : 'max-h-0'
//                     }`}
//                 onMouseEnter={handleSubMenuMouseEnter}
//                 onMouseLeave={handleSubMenuMouseLeave}
//             >
//                 <div className="w-3/5 mx-auto flex items-center justify-center gap-6 py-6 text-[clamp(0.875rem,1vw,1.1rem)] font-semibold list-none">
//                     {subMenus[hoveredMenu]?.map((item, index) => (
//                         <li key={index} className={`relative cursor-pointer opacity-60 ${index !== 0 ? 'li_items' : ''} hover:opacity-100 underline-effect`}>
//                             {item}
//                         </li>
//                     ))}
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;
