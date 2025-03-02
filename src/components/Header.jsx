import logo from '@assets/subway_logo.svg'

function Header() {
    const header = document.querySelector('header');
    return (
        <header className="fixed top-0 left-0 w-full z-9999 bg-transparent hidden">
            <div className="w-4/6 flex justify-between mx-auto items-center py-6">
                <a href="/" className="w-3xs">
                    <img src={logo} alt="Subway Logo" className="w-fit" />
                </a>
                <nav>
                    <ul className="w-xl flex justify-around items-center space-x-6 all:font-semibold text-lg text-[#ffffff]">
                        <li><a href="#menu">메뉴소개</a></li>
                        <li><a href="#how-to">이용방법</a></li>
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