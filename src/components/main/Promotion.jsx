import eggslice from '@assets/main/eggslice_menu.png'
import greenS from '@assets/main/greenS.png'
import subPick from '@assets/main/subPick.png'
import soupL from '@assets/main/soupL.png'
import soupR from '@assets/main/soupR.png'
import freshNgood from '@assets/main/fresh&good.png'

function Promotion() {
    return (
        <>
            <div className="w-full h-screen flex flex-col items-center">
                {/* 제목 섹션 */}
                <div className="text-center pt-[40px] pb-[80px]">
                    <h1 className="text-[80px] text-[#018c3b] font-extrabold">Promotion</h1>
                    <h3 className="text-[20px]">서브웨이의 다양한 혜택과 이벤트를 만나보세요</h3>
                </div>

                {/* 콘텐츠 섹션 */}
                <div className="w-full pl-[10px] pr-[10px] gap-9 flex flex-wrap justify-center">

                    <div className="menu w-[260px] flex flex-col grow">
                        <div className="w-full h-[260px] pt-8 bg-[#ffcc32] rounded-t-full flex flex-col items-center justify-evenly">
                            <img className='w-3/6' src={eggslice} alt="eggslice" />
                            <p className="text-lg text-center">맛도 영양도 사로잡은 <br /> 에그 슬라이스 출시 !</p>
                        </div>

                        {/* 설명 */}
                        <div className="w-full mt-4">
                            <p className="text-[#018c3b] ">2024.04.15 ~ 2024.06.23</p>
                            <hr className="border-t-2 border-[#018c3b] my-2 w-full" />
                            <p className="text-sm">
                                에그 슬라이스 출시! 신선함과 담백함을 그대로 <br /> 담아 맛도 영양도 사로잡은 에그 슬라이스</p>
                        </div>
                    </div>

                    <div className="menu w-[260px] flex flex-col grow">
                        <div className="w-full h-[260px] pt-8 bg-[#018c3b] rounded-t-full flex flex-col items-center justify-evenly">
                            <img className='w-3/6' src={greenS} alt="greenS" />
                            <p className="text-lg text-center text-white">신선함으로 가득 채운 <br/>New 그린 샐러드 !</p>
                        </div>

                        {/* 설명 */}
                        <div className="w-full mt-4">
                            <p className="text-[#018c3b] ">2024.03.04 ~</p>
                            <hr className="border-t-2 border-[#018c3b] my-2 w-full" />
                            <p className="text-sm">New 그린 샐러드 <br/> 다채로운  신선함으로 가득 채운 New 그린 샐러드 시리즈!</p>
                        </div>
                    </div>

                    <div className="menu w-[260px] flex flex-col grow">
                        <div className="w-full h-[260px] pt-8 bg-[#ffcc32] rounded-t-full flex flex-col items-center justify-evenly">
                            <img className='w-3/6' src={subPick} alt="subPick" />
                            <p className="text-lg text-center">‘썹픽’ 한마디로 <br/> 쉽고 빠르게 주문 끝!</p>
                        </div>

                        {/* 설명 */}
                        <div className="w-full mt-4">
                            <p className="text-[#018c3b] ">2024.02.05 ~</p>
                            <hr className="border-t-2 border-[#018c3b] my-2 w-full" />
                            <p className="text-sm">SUBPICK<br/>써브웨이 추천 조합을 ‘썹픽’ 한마디로 쉽고 빠르게 주문 끝!</p>
                        </div>
                    </div>

                    <div className="menu w-[260px] flex flex-col grow">
                        <div className="w-full h-[260px] pt-8 bg-[#018c3b] rounded-t-full flex flex-col items-center justify-evenly">
                            <div className='flex flex-row justify-center'>
                                <img className='w-2/6' src={soupL} alt="soupL" />
                                <img className='w-2/6' src={soupR} alt="soupR" />
                            </div>
                            <p className="text-lg text-center text-white">써브웨이 오늘의 수프를 <br/> 원하는 사이즈로!</p>
                        </div>

                        {/* 설명 */}
                        <div className="w-full mt-4">
                            <p className="text-[#018c3b] ">2024.01.02 ~</p>
                            <hr className="border-t-2 border-[#018c3b] my-2 w-full" />
                            <p className="text-sm"> 써브웨이 오늘의 수프 <br/> 오늘의 수프를 원하는 사이즈로! <br/> 샌드위치랑 함께 먹으면 든든하고 맛있썹! <br/></p>
                        </div>
                    </div>

                    <div className="menu w-[260px] flex flex-col grow">
                        <div className="w-full h-[260px] pt-8 bg-[#ffcc32] rounded-t-full flex flex-col items-center justify-evenly">
                            <img className='w-3/6' src={freshNgood} alt="freshNgood" />
                            <p className="text-lg text-center">Eat Fresh Feel Good <br/> 신선함이 가득 ,즐거움이 가득</p>
                        </div>

                        {/* 설명 */}
                        <div className="w-full mt-4">
                            <p className="text-[#018c3b] ">2023.11.01 ~</p>
                            <hr className="border-t-2 border-[#018c3b] my-2 w-full" />
                            <p className="text-sm"> Eat Fresh Feel Good <br/> 신선함이 가득 ,즐거움이 가득</p>
                        </div>
                    </div>

                </div>

                <div className='flex gap-12 pt-[50px]'>
                    <a><div className='w-[20px] h-[20px] bg-[#018c3b] rounded-full'></div></a>
                    <a><div className='w-[20px] h-[20px] bg-[#018c3b] rounded-full opacity-25'></div></a>
                    <a><div className='w-[20px] h-[20px] bg-[#018c3b] rounded-full opacity-25'></div></a>
                </div>
            </div>
        </>
    )
}

export default Promotion;
