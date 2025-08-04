import subway from '@assets/main/offer/subway.png'
import offer_menu from '@assets/main/offer/offer_menu.png'
import { useState, useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

function Offer() {
    // 1. 각 숫자를 위한 별도의 state를 만듭니다.
    const [num1, setNum1] = useState(0); // 전세계 매장수
    const [num2, setNum2] = useState(0); // 진출 국가 수

    // 2. 각 숫자가 표시될 h1 태그를 위한 별도의 ref를 만듭니다.
    const countUpRef1 = useRef(null);
    const countUpRef2 = useRef(null);

    const finalNumber1 = 37525;
    const finalNumber2 = 104;

    useEffect(() => {
        // 3. 각 숫자에 대한 CountUp 인스턴스를 생성합니다.
        const countUp1 = new CountUp(countUpRef1.current, finalNumber1, {
            duration: 2,
            useEasing: true,
            useGrouping: true,
            separator: ',',
        });

        const countUp2 = new CountUp(countUpRef2.current, finalNumber2, {
            duration: 2,
            useEasing: true,
            useGrouping: true, // 104는 쉼표가 필요 없지만 일관성을 위해 유지
            separator: ',',
        });

        const handleScroll = () => {
            // 하나의 요소(예: countUpRef1)가 보이면 두 애니메이션을 모두 시작합니다.
            if (countUpRef1.current && countUpRef1.current.getBoundingClientRect().top < window.innerHeight) {
                // 4. 두 애니메이션을 모두 시작하고, 완료 콜백에서 각자의 state를 업데이트합니다.
                countUp1.start(() => setNum1(finalNumber1));
                countUp2.start(() => setNum2(finalNumber2));
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 페이지 로드 시 이미 보이는 경우를 위해 즉시 실행

        // 10초마다 매장수만 증가시킵니다.
        const timer = setInterval(() => {
            setNum1(prevNum => prevNum + 1);
        }, 10000);

        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
                <section className="relative w-full bg-[#008e3c] max-md:pt-14">
                    {/* 모집 소개 */}
                    <div className="w-4/5 flex flex-row justify-center pt-24 pr-12 relative max-2xl:w-full max-2xl:pr-0 max-xl:w-full max-xl:pr-0 max-sm:pt-[30px] pb-[170px] max-sm:w-full">
                        {/* 텍스트 */}
                        <div className='flex flex-col w-1/3 h-4/5 bg-[#fce07f] z-10 pt-4 pl-7 pb-14 max-2xl:w-2/5 max-xl:w-2/3 max-xl:bg-transparent max-xl:p-0 max-sm:w-4/5'>
                            <div>
                                <h1 className='text-5xl font-semibold py-14 max-xl:text-center max-sm:text-[#fce07f] leading-tight max-sm:text-4xl'>서브웨이를 함께 <br /> 이끌 준비 되셨나요?</h1>
                            </div>

                            {/* 중간선 */}
                            <hr className='w-24 max-xl:w-full'/>

                            {/* 소개 */}
                            <div className='py-14 text-xl max-xl:text-center'>
                                <p> 미국 프랜차이즈 1위!<br />
                                    써브웨이는 매장수 및 분포지역 기준,<br />
                                    Quick Service Restaurant(QSR) 부분<br />
                                    No.1 프랜차이즈입니다. </p>
                            </div>
                            {/* 매장수 */}
                            <div className='flex flex-row gap-14 max-xl:justify-around max-md:justify-between max-sm:gap-2'>
                                <div className='flex flex-col max-xl:text-center max-xl:pl-20 max-md:pl-0'>
                                    <h1 className='text-xl '>전세계</h1>
                                    <div className='flex flex-row gap-0.5'>
                                        <h1 ref={countUpRef2} className='text-6xl max-sm:text-5xl w-[90px]'>{num2.toLocaleString()}</h1>
                                        <p className='w-full ml-6 text-xl leading-22 max-sm:leading-18 max-sm:w-[40px] max-sm:ml-0'>개국</p>
                                    </div>
                                </div>
                                <div className='mr-6 max-xl:text-center max-sm:ml-5'>
                                    <h1 className='text-xl '>매장수</h1>
                                    <div className='flex flex-row gap-0.5'>
                                        <h1 ref={countUpRef1} className='text-6xl max-sm:text-5xl'>{num1.toLocaleString()}</h1>
                                        <p className='text-xl leading-22 max-sm:leading-18 w-[20px]'>개</p>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-6 pb-3 flex max-xl:w-full max-xl:justify-center'>
                                <button className='w-3/5 border-none bg-[#009132] px-6 py-4 text-[#ffffff] max-xl:bg-[#fce07f] max-xl:py-4 text-3xl max-xl:font-semibold max-xl:text-[#000000] max-md:mx-auto max-md:w-[450px] '>가맹문의 바로가기</button>
                            </div>
                        </div>
                    </div>
                    {/* 이미지 */}
                    <div className="absolute top-[40%] left-[63%] -translate-x-1/2 -translate-y-1/2 z-20 max-2xl:left-[68%] max-xl:hidden">
                        <img className="w-2/3" src={offer_menu} alt="offer_menu" />
                    </div>
                    {/* 배경에 텍스트 */}
                    <img className='absolute -bottom-2 max-xl:hidden' src={subway} alt="subway" />
                </section>
        </>
    )
}

export default Offer;

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