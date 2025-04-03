import menuList from '../../assets/guide/menulist.png'
import call from '../../assets/guide/call.png'
import pickUp from '../../assets/guide/pickup.png'
import { useEffect, useState } from 'react';


function GroupOrderGuide() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);

    }, []);

    return (
        <>
            {windowWidth >= 768 ? (
                <div className="w-full h-[120vh] pt-20">
                    <h1 className="text-5xl font-bold text-center py-38 text-[#008e3c]">단체주문 이용방법</h1>
                    <div className='w-3/5 mx-auto flex flex-col gap-6'>
                        {/* 아이콘 영역 */}
                        <div className="flex justify-between w-6/7 mx-auto">
                            <img className='ml-2 w-10 h-10' src={menuList} alt="menuList" />
                            <img className='w-10 h-10' src={call} alt="call" />
                            <img className='mr-2 w-10 h-10' src={pickUp} alt="pickUp" />
                        </div>
                        {/* 숫자 영역 */}
                        <div className='relative flex justify-between w-6/7 mx-auto'>
                            <div className="border-2 border-[#008e3c] bg-[#ffffff] rounded-full w-14 h-14 text-3xl flex items-center justify-center">1</div>
                            <div className="border-2 border-[#008e3c] bg-[#ffffff] rounded-full w-14 h-14 text-3xl flex items-center justify-center">2</div>
                            <div className="border-2 border-[#008e3c] bg-[#ffffff] rounded-full w-14 h-14 text-3xl flex items-center justify-center">3</div>
                            <div className='w-full mx-auto absolute top-[50%] -z-10 border-t-2 border-[#008e3c]' />
                        </div>
                        {/* 타이틀 영역 */}
                        <div className='flex justify-between mt-7 w-8/9 mx-auto'>
                            <div className='text-3xl text-[#008e3c] font-bold'><h2>메뉴 선택</h2></div>
                            <div className='text-3xl text-[#008e3c] font-bold'><h2>매장 문의</h2></div>
                            <div className='text-3xl text-[#008e3c] font-bold'><h2>매장 픽업</h2></div>
                        </div>
                        {/* 설명 영역 */}
                        <div className='flex text-center justify-between'>
                            <div className='w-1/4 text-gray-500'><p>샌드위치 10개 이상 주문 시 또는 원하는 단체 메뉴를 선택하세요</p></div>
                            <div className='w-1/4 text-gray-500'><p>단체주문은 가까운 매장 또는 써브웨이 고객 센터(02-797-5036)로 문의·주문해 주세요. ※ 최소 1일 전 문의하시기 바랍니다.</p></div>
                            <div className='w-1/4 text-gray-500'><p>주문 약속 날짜, 시간에 매장에서 픽업하세요</p></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full h-[120vh] pt-20 overflow-hidden">
                    <h1 className="text-5xl font-bold text-center py-38 text-[#008e3c]">단체주문 이용방법</h1>
                    <div className='w-full mx-auto flex gap-6 ml-10'>
                        {/* 숫자 영역 */}
                        <div className='relative flex flex-col justify-between w-1/10 gap-24'>
                            <div className="border-2 border-[#008e3c] bg-[#ffffff] rounded-full w-14 h-14 text-3xl flex items-center justify-center">1</div>
                            <div className="border-2 border-[#008e3c] bg-[#ffffff] rounded-full w-14 h-14 text-3xl flex items-center justify-center">2</div>
                            <div className="border-2 border-[#008e3c] bg-[#ffffff] rounded-full w-14 h-14 text-3xl flex items-center justify-center">3</div>
                            <div className='h-full absolute top-[0%] left-[40%] -z-10 border-l-2 border-[#008e3c]' />
                        </div>
                        {/* 아이콘 영역 */}
                        <div className="flex flex-col justify-between w-full gap-4">
                            <img className='ml-2 w-12 h-14' src={menuList} alt="menuList" />
                            <div className='text-3xl text-[#008e3c] font-bold'><h2>메뉴 선택</h2></div>
                            <div className='w-full text-gray-500'><p>샌드위치 10개 이상 주문 시 또는 원하는 단체 메뉴를 선택하세요</p></div>
                            <img className='w-14 h-14' src={call} alt="call" />
                            <div className='text-3xl text-[#008e3c] font-bold'><h2>매장 문의</h2></div>
                            <div className='w-full text-gray-500'><p>단체주문은 가까운 매장 또는 써브웨이 고객 센터(02-797-5036)로 <br/> 문의·주문해 주세요. ※ 최소 1일 전 문의하시기 바랍니다.</p></div>
                            <img className='mr-2 w-14 h-14' src={pickUp} alt="pickUp" />
                            <div className='text-3xl text-[#008e3c] font-bold'><h2>매장 픽업</h2></div>
                            <div className='w-full text-gray-500'><p>주문 약속 날짜, 시간에 매장에서 픽업하세요</p></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default GroupOrderGuide