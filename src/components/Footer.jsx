import facebook from '@assets/main/footer/facebook.png'
import insta from '@assets/main/footer/instagram.png'

function Footer() {
    return (
        <footer className="relative flex flex-col footer-content w-full h-[300px] bg-[#000000] text-[#ffffff]">
            <div className="w-3/5 mx-auto">
                {/* 약관 */}
                <nav className="py-6">
                    <ul className="flex gap-14">
                        <li>이용약관</li>
                        <li className="font-semibold">개인정보 처리방침</li>
                        <li>써브카드</li>
                        <li>점주관리자</li>
                    </ul>
                </nav>
            </div>

            <hr className="opacity-60" />

            <div className="w-3/5 mx-auto my-auto flex">
                <div>
                    {/* 회사 정보 */}
                    <section className="flex flex-wrap items-center gap-4 pb-2 opacity-60 text-sm">
                        <address className="not-italic">서울시 서초구 강남대로 35 프린스빌딩 15층</address>
                        <span> | </span>
                        <span>대표 : INSOO CHO(인수조)</span>
                        <span> | </span>
                        <span>전화 : 02-797-5036</span>
                        <span> | </span>
                        <span>사업자등록번호 : 101-84-04143</span>
                    </section>

                    <p className="opacity-60 text-sm">
                        SUBWAY® is a Registered Trademark of Subway IP LLC. © 2021 Subway IP LLC. All Rights Reserved.
                    </p>
                </div>
                <div className='flex gap-1.5 absolute right-50'>
                    <img className='w-12 h-12' src={insta} alt="insta" />
                    <img className='w-12 h-12' src={facebook} alt="facebook" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
