// import subway from '@assets/main/offer/subway.png'
// import offer_menu from '@assets/main/offer/offer_menu.png'

// function Offer() {
//     return (
//         <>
//             <div className="relative w-full h-screen bg-[#008e3c]">
//                 {/* 모집 소개 */}
//                 <div className='w-4/5 flex flex-row justify-center pt-24 pr-12'>
//                     {/* 텍스트 */}
//                     <div className='flex flex-col w-fit h-4/5 bg-[#fce07f] z-10 pt-7 pl-7 pr-16 pb-7'>
//                         <div>
//                             <h1 className='text-3xl font-semibold py-10'>서브웨이를 함께 <br /> 이끌 준비 되셨나요?</h1>
//                         </div>

//                         {/* 중간선 */}
//                         <hr className='w-32' />

//                         {/* 소개 */}
//                         <div className='py-10'>
//                             <p> 미국 프랜차이즈 1위!<br />
//                                 써브웨이는 매장수 및 분포지역 기준,<br />
//                                 Quick Service Restaurant(QSR) 부분<br />
//                                 No.1 프랜차이즈입니다. </p>
//                         </div>
//                         {/* 매장수 */}
//                         <div className='flex flex-row gap-10'>
//                             <div>
//                                 <h1>전세계</h1>
//                                 <div className='flex flex-row'>
//                                     <h1 className='text-6xl'>104</h1>
//                                     <p className='leading-22'>개국</p>
//                                 </div>
//                             </div>
//                             <div>
//                                 <h1>매장수</h1>
//                                 <div className='flex flex-row'>
//                                     <h1 className='text-6xl'>37,525</h1>
//                                     <p className='leading-22'>개</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='pt-6 pb-3'>
//                             <button className='w-3/5 border-none bg-[#009132] px-6 py-2 text-[#ffffff]'> 가맹 문의 바로가기 </button>
//                         </div>
//                     </div>
//                     {/* 이미지 */}
//                     <div className='absolute top-36 right-0 z-20'>
//                         <img className='w-2/3' src={offer_menu} alt="offer_menu" />
//                     </div>
//                 </div>
//                 {/* 배경에 텍스트 */}
//                 <img className='absolute -bottom-2' src={subway} alt="subway" />
//             </div>
//         </>
//     )
// }

// export default Offer;

{/*
    - 숫자가 올라갈 때 롤링하는 애니메이션 효과 넣기?
    
    1. numbers라는 배열에 0~9 넣기
    2. 각 자릿수에 0~9까지의 수를 넣고 현재 숫자를 제외하곤 모두 숨김처리 (아래와 같이)
    3. 숫자가 변경되면 위치 값을 변경하기 (translateY)
    4. 끝에서부터 0이 되면 앞에 수를 하나 올리기?

                    0
                    10
                    21 0
                    32 10
                    43 210
                    54,321 < 현재 보이는 수
                    65 432
                    76 543
                    87 654
                    98 765
                     9 876
                       987
                        98
                         9

        아 이건 지피티한테 물어봐도 이해를 하기 어려울 것 같아 포기,,
        나중에 넣자!
*/}



import subway from '@assets/main/offer/subway.png'
import offer_menu from '@assets/main/offer/offer_menu.png'
import { useState,useEffect } from 'react';

function Offer() {
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    const [num, setNum] = useState(37525)


    useEffect(() => {
        let timer = setInterval(() => {
            // setNum(count + 1);
            setNum(num => num + 1);
        }, 10000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="relative w-full h-screen bg-[#008e3c]">
                {/* 모집 소개 */}
                <div className='w-4/5 flex flex-row justify-center pt-24 pr-12'>
                    {/* 텍스트 */}
                    <div className='flex flex-col w-3/7 h-4/5 bg-[#fce07f] z-10 pt-7 pl-7 pr-16 pb-7'>
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
                                <div className='flex flex-row gap-0.5'>
                                    <h1 className='text-6xl'>104</h1>
                                    <p className='leading-22'>개국</p>
                                </div>
                            </div>
                            <div>
                                <h1>매장수</h1>
                                <div className='flex flex-row gap-0.5'>
                                    <h1 className='text-6xl w-46'>{num.toLocaleString()}</h1>
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