import facebook from '@assets/main/footer/facebook.png'
import insta from '@assets/main/footer/instagram.png'

function Footer() {
    return (
        <footer className="relative flex flex-col footer-content w-full h-[550px] bg-[#000000] text-[#ffffff]">
            <div className="w-3/5 mx-auto max-2xl:w-4/5">
                {/* 약관 */}
                <nav className="py-8">
                    <ul className="flex gap-14 max-md:justify-between ">
                        <li >이용약관</li>
                        <li className="font-semibold ">개인정보 처리방침</li>
                        <li>써브카드</li>
                        <li>점주관리자</li>
                    </ul>
                </nav>
            </div>

            <hr className="opacity-60" />

            <div className="w-3/5 mx-auto my-auto flex max-2xl:w-4/5 max-md:mt-10">
                <div>
                    {/* 회사 정보 */}
                    <section className="flex flex-wrap items-center gap-4 pb-2 font-light text-lg">
                        <address className="not-italic !text-white !opacity-60">서울시 서초구 강남대로 35 프린스빌딩 15층</address>
                        <span className='opacity-60'> | </span>
                        <span className='opacity-60'>대표 : INSOO CHO(인수조)</span>
                        <span className='opacity-60'> | </span>
                        <span className='opacity-60'>전화 : 02-797-5036</span>
                        <span className='opacity-60'> | </span>
                        <span className='opacity-60'>사업자등록번호 : 101-84-04143</span>
                    </section>

                    <p className="text-lg max-md:mt-6">
                        SUBWAY® is a Registered Trademark of Subway IP LLC.<br className='lg:hidden'/> © 2021 Subway IP LLC. All Rights Reserved.
                    </p>
                </div>
                <div className='flex gap-8 absolute right-50 max-2xl:right-20 max-xl:bottom-10 max-lg:bottom-10'>
                    <img className='w-16 h-16 max-sm:w-10 max-sm:h-10' src={insta} alt="insta" />
                    <img className='w-16 h-16 max-sm:w-10 max-sm:h-10' src={facebook} alt="facebook" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
