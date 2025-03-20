import subway from '@assets/main/offer/subway.png'
import offer_menu from '@assets/main/offer/offer_menu.png'

function Offer() {
    return (
        <>
            <div className="relative w-full h-screen bg-[#008e3c]">
                {/* 모집 소개 */}
                <div className='w-4/5 flex flex-row justify-center pt-24 pr-12'>
                    {/* 텍스트 */}
                    <div className='flex flex-col w-fit h-4/5 bg-[#fce07f] z-10 pt-7 pl-7 pr-16 pb-7'>
                        <div>
                            <h1 className='text-3xl font-semibold py-10'>서브웨이를 함께 <br /> 이끌 준비 되셨나요?</h1>
                        </div>

                        {/* 중간선 */}
                        <hr className='w-32' />

                        {/* 소개 */}
                        <div className='py-10'>
                            <p> 미국 프랜차이즈 1위!<br />
                                써브웨이는 매장수 및 분포지역 기준,<br />
                                Quick Service Restaurant(QSR) 부분<br />
                                No.1 프랜차이즈입니다. </p>
                        </div>
                        {/* 매장수 */}
                        <div className='flex flex-row gap-10'>
                            <div>
                                <h1>전세계</h1>
                                <div className='flex flex-row'>
                                    <h1 className='text-6xl'>104</h1>
                                    <p className='leading-22'>개국</p>
                                </div>
                            </div>
                            <div>
                                <h1>매장수</h1>
                                <div className='flex flex-row'>
                                    <h1 className='text-6xl'>37,525</h1>
                                    <p className='leading-22'>개</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-6 pb-3'>
                            <button className='w-3/5 border-none bg-[#009132] px-6 py-2 text-[#ffffff]'> 가맹 문의 바로가기 </button>
                        </div>
                    </div>
                    {/* 이미지 */}
                    <div className='absolute top-36 right-0 z-20'>
                        <img className='w-2/3' src={offer_menu} alt="offer_menu" />
                    </div>
                </div>
                {/* 배경에 텍스트 */}
                <img className='absolute -bottom-2' src={subway} alt="subway" />
            </div>
        </>
    )
}

export default Offer;