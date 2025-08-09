import { useState, useEffect } from "react";
import step1 from "@assets/guide/step1-1.png";
import step2 from "@assets/guide/step1-2.png";
import step3 from "@assets/guide/step1-3.png";
import step4 from "@assets/guide/step1-4.png";
import step5 from "@assets/guide/step1-5.png";
import left_arrow from '@assets/arrow/left.png';
import right_arrow from '@assets/arrow/right.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

import '../../App.css';

const steps = [
    {
        title: "메뉴 선택",
        description: "나만의 스타일을 완성하는 단계!\n원하지 않는 야채는 빼고 좋아하는 야채는 더하세요.\n오늘의 기분에 맞는 소스를 선택해주세요.",
    },
    {
        title: "빵 선택",
        description: "매장에서 직접 구운 6가지 종류 중\n 고객님이 원하는 빵으로\n 추가비용 없이 선택 가능합니다.",
    },
    {
        title: "추가토핑 선택",
        description: "나만의 메뉴를 더욱 풍성하게 즐기세요.",
    },
    {
        title: "야채&소스 선택",
        description: "나만의 스타일을 완성하는 단계!\n원하지 않는 야채는 빼고 좋아하는 야채는 더하세요.\n오늘의 기분에 맞는 소스를 선택해주세요",
    },
    {
        title: "세트 선택",
        description: "세트로 구매하시면 할인혜택을 받으실 수 있습니다.\n 세트로 더욱 든든하고 알차게 즐기세요.",
    },
];

const images = [
    { alt: "step1", img: step1 },
    { alt: "step2", img: step2 },
    { alt: "step3", img: step3 },
    { alt: "step4", img: step4 },
    { alt: "step5", img: step5 },
];

function StepsToUse() {
    const [num, setNum] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);
        };

        window.addEventListener("resize", handleResize);
        // 초기 로딩 시 한번 실행
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextStep = () => {
        if (num < steps.length - 1) {
            setNum(num + 1);
            swiperInstance?.slideNext(); // 한 칸씩 이동
        }
    };

    const prevStep = () => {
        if (num > 0) {
            setNum(num - 1);
            swiperInstance?.slidePrev(); // 한 칸씩 이동
        }
    };

    // Swiper 슬라이드 변경 시 num 상태 동기화
    const handleSlideChange = (swiper) => {
        setNum(swiper.activeIndex);
        console.log("Swiper 부모 너비:", swiper.el.parentElement.offsetWidth);
    };


    return (
        <section className="usage_guide w-full pt-22 pb-[10vw] max-md:pb-[39.87vw
        ] max-sm:pb-[59.87vw] overflow-hidden">
            <h1 className="text-5xl font-bold text-center mb-22 text-[#008e3c] max-md:text-left ml-10">써브웨이 <br className="md:hidden"/> 이용방법</h1>
            <div className="w-full h-2/3">
                <div className="w-full h-full flex justify-center items-center ml-80 relative max-2xl:ml-10 max-md:flex-col max-md:items-start">
                    {/* 왼쪽 STEP 설명 */}
                    <div className="w-1/3 h-full text-left flex flex-col gap-4 max-md:w-1/2">
                        <p className="text-[#008e3c] font-semibold">STEP {num + 1}</p>
                        <h2 className="text-3xl font-bold">{steps[num].title}</h2>
                        <hr className="w-28 my-10"/>
                        <p className="mt-2 h-2/3  text-gray-700 whitespace-pre-line max-md:h-[20vw] max-sm:h-[30vw]">{steps[num].description}</p>
                        <div className="mt-6 flex gap-4">
                            <button
                                onClick={prevStep}
                                className="w-24 h-24 border-0 rounded-full bg-[#008e3c] text-[#ffffff] text-3xl disabled:opacity-50 max-md:w-12 max-md:h-12"
                                disabled={num === 0}
                            >
                                <img src={left_arrow} alt="left_arrow" className='mx-auto max-md:w-1/3 h-1/2' />
                            </button>
                            <button
                                onClick={nextStep}
                                className="w-24 h-24 border-0 rounded-full bg-[#008e3c] text-[#ffffff] text-3xl disabled:opacity-50 max-md:w-12 max-md:h-12"
                                disabled={num === steps.length - 1}
                            >
                                <img src={right_arrow} alt="right_arrow" className='mx-auto max-md:w-1/3 h-1/2' />
                            </button>
                        </div>
                    </div>

                    {windowWidth >= 768 ? (
                        <>
                            {/* 오른쪽 이미지 슬라이드(768이상) */}
                            <div className="w-full flex items-center overflow-hidden relative mr-40 max-2xl:mr-0">
                                <div className="absolute bg-[#f3c716] opacity-30 w-96 h-96 rounded-full z-0 transform -translate-x-[150px] translate-y-[-60%] top-[50%] left-60"></div>
                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={-100}
                                    slidesPerView={2}
                                    centeredSlides={true}
                                    initialSlide={0}
                                    onSwiper={setSwiperInstance}
                                    onSlideChange={handleSlideChange}
                                    className="w-full h-[25vw] max-2xl:h-[30vw] max-xl:h-[40vw] max-lg:h-[50vw]"
                                >
                                    {images.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={image.img}
                                                alt={image.alt}
                                                className={`w-[30vw] transition-all duration-300 -ml-70 max-2xl:-ml-40 max-xl:-ml-40 mt-10 max-2xl:w-[30vw] max-2xl:h-[30vw] max-xl:w-[30vw] max-xl:h-[30vw] max-lg:w-[40vw] max-lg:h-[40vw] ${index === num ? 'z-10' :
                                                        index === num + 1 ? 'opacity-70 scale-60' :
                                                            index < num ? 'opacity-0' : 'opacity-100 scale-100'
                                                    }`}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* 오른쪽 이미지 슬라이드 (768미만) */}
                            <div className="w-full h-3/4 flex items-end ml-18">
                                <div className="absolute bg-[#f3c716] opacity-30 w-96 h-96 rounded-full z-0 transform -translate-x-[58.33vw] translate-y-[-20vw] top-[70%] left-[100vw]"></div>
                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={-100}
                                    slidesPerView={1}
                                    centeredSlides={true}
                                    initialSlide={0}
                                    onSwiper={setSwiperInstance}
                                    onSlideChange={handleSlideChange}
                                    className="w-full h-[60vw]"
                                >
                                    {images.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={image.img}
                                                alt={image.alt}
                                                className={`w-[60vw] h-[50vw] transition-all duration-300 -ml-70 max-md:ml-[20vw] max-sm:ml-0 max-sm:mt-12 max-sm:w-[75vw] ${index === num ? 'z-10' :
                                                        index === num + 1 ? 'opacity-70 scale-60' :
                                                            index < num ? 'opacity-0' : 'opacity-100 scale-100'
                                                    }`}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default StepsToUse;


{/* 슬라이드 효과 없음 */ }
// import { useState } from "react";

// const steps = [
//     {
//         title: "주문하기",
//         description: "나만의 스타일을 완성하는 단계!\n원하지 않는 야채는 빼고좋아하는 야채는 더하세요.\n오늘의 기분에 맞는 소스를 선택해주세요.",
//         image1: "src/assets/guide/step1-1.png",
//         image2: "src/assets/guide/step1-2.png",
//     },
//     {
//         title: "빵 선택",
//         description: "매장에서 직접 구운 6가지 종류 중\n 고객님이 원하는 빵으로\n 추가비용 없이 선택 가능합니다.",
//         image1: "src/assets/guide/step1-2.png",
//         image2: "src/assets/guide/step1-3.png",
//     },
//     {
//         title: "추가토핑 선택",
//         description: "나만의 메뉴를 더욱 풍성하게 즐기세요.",
//         image1: "src/assets/guide/step1-3.png",
//         image2: "src/assets/guide/step1-4.png",
//     },
//     {
//         title: "야채&소스 선택",
//         description: "나만의 스타일을 완성하는 단계!\n원하지 않는 야채는 빼고 좋아하는 야채는 더하세요.\n오늘의 기분에 맞는 소스를 선택해주세요",
//         image1: "src/assets/guide/step1-4.png",
//         image2: "src/assets/guide/step1-5.png",
//     },
//     {
//         title: "세트 선택",
//         description: "세트로 구매하시면 할인혜택을 받으실 수 있습니다.\n 세트로 더욱 든든하고 알차게 즐기세요.",
//         image1: "src/assets/guide/step1-5.png",
//     },
// ];

// function StepsToUse() {
//     const [num, setNum] = useState(0); // 현재 STEP 인덱스

//     const nextStep = () => {
//         if (num < steps.length - 1) setNum(num + 1);
//     };

//     const prevStep = () => {
//         if (num > 0) setNum(num - 1);
//     };

//     const changeImage = () => {

//     }

//     return (
//         <section className="usage_guide w-full h-screen pt-22">
//             <h1 className="text-5xl font-bold text-center mb-22 text-[#008e3c]">써브웨이 이용방법</h1>
//             <div className="w-3/5 h-2/3 mx-auto">
//                 <div className="w-full h-full flex justify-center items-center gap-20">
//                     {/* 왼쪽 STEP 설명 */}
//                     <div className="w-1/3 h-full text-left flex flex-col gap-4">
//                         <p className="text-[#008e3c] font-semibold">STEP {num + 1}</p>
//                         <h2 className="text-3xl font-bold">{steps[num].title}</h2>
//                         <hr className="w-28 my-10"/>
//                         <p className="mt-2 h-2/3 text-gray-700 whitespace-pre-line">{steps[num].description}</p>
//                         <div className="mt-6 flex gap-4">
//                             <button onClick={prevStep} className="w-16 h-16 border-0 rounded-full bg-[#008e3c] text-[#ffffff] text-3xl" disabled={num === 0}>〈</button>
//                             <button onClick={nextStep} className="w-16 h-16 border-0 rounded-full bg-[#008e3c] text-[#ffffff] text-3xl" disabled={num === steps.length - 1}>〉</button>
//                         </div>
//                     </div>

//                     {/* 오른쪽 이미지 */}
//                     <div className="w-2/3 flex items-center gap-6 relative">
//                         <div className="bg-[#f3c716] opacity-30 w-80 h-80 border-0 rounded-full"></div>
//                         <img src={steps[num].image1} alt="step 이미지" className="w-96 z-10 absolute -left-14" />
//                         <img src={steps[num].image2} alt="step 추가 이미지" className="w-72 absolute -right-20" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default StepsToUse;


{/* 슬라이드 효과 / 원하는대로 구현되지는 않음 */ }
// import { useState, useEffect } from "react";
// import step1 from "@assets/guide/step1-1.png"
// import step2 from "@assets/guide/step1-2.png"
// import step3 from "@assets/guide/step1-3.png"
// import step4 from "@assets/guide/step1-4.png"
// import step5 from "@assets/guide/step1-5.png"

// const steps = [
//     {
//         title: "주문하기",
//         description: "나만의 스타일을 완성하는 단계!\n원하지 않는 야채는 빼고 좋아하는 야채는 더하세요.\n오늘의 기분에 맞는 소스를 선택해주세요.",
//     },
//     {
//         title: "빵 선택",
//         description: "매장에서 직접 구운 6가지 종류 중\n 고객님이 원하는 빵으로\n 추가비용 없이 선택 가능합니다.",
//     },
//     {
//         title: "추가토핑 선택",
//         description: "나만의 메뉴를 더욱 풍성하게 즐기세요.",
//     },
//     {
//         title: "야채&소스 선택",
//         description: "나만의 스타일을 완성하는 단계!\n원하지 않는 야채는 빼고 좋아하는 야채는 더하세요.\n오늘의 기분에 맞는 소스를 선택해주세요",
//     },
//     {
//         title: "세트 선택",
//         description: "세트로 구매하시면 할인혜택을 받으실 수 있습니다.\n 세트로 더욱 든든하고 알차게 즐기세요.",
//     },
// ];

// const images = [
//     {
//         alt: "step1",
//         img: step1
//     },
//     {
//         alt: "step2",
//         img: step2
//     },
//     {
//         alt: "step3",
//         img: step3
//     },
//     {
//         alt: "step4",
//         img: step4
//     },
//     {
//         alt: "step5",
//         img: step5
//     },
// ]

// function StepsToUse() {
//     const [num, setNum] = useState(0); // 현재 STEP 인덱스

//     const nextStep = () => {
//         if (num < steps.length - 1) setNum(num + 1);
//     };

//     const prevStep = () => {
//         if (num > 0) setNum(num - 1);
//     };

//     return (
//         <section className="usage_guide w-full h-screen pt-22">
//             <h1 className="text-5xl font-bold text-center mb-22 text-[#008e3c]">써브웨이 이용방법</h1>
//             <div className="w-4/6 h-2/3 mx-auto">
//                 <div className="w-full h-full flex justify-center items-center gap-20">
//                     {/* 왼쪽 STEP 설명 */}
//                     <div className="w-1/3 h-full text-left flex flex-col gap-4">
//                         <p className="text-[#008e3c] font-semibold">STEP {num + 1}</p>
//                         <h2 className="text-3xl font-bold">{steps[num].title}</h2>
//                         <hr className="w-28 my-10" />
//                         <p className="mt-2 h-2/3 text-gray-700 whitespace-pre-line">{steps[num].description}</p>
//                         <div className="mt-6 flex gap-4">
//                             <button onClick={prevStep} className="w-16 h-16 border-0 rounded-full bg-[#008e3c] text-[#ffffff] text-3xl" disabled={num === 0}>〈</button>
//                             <button onClick={nextStep} className="w-16 h-16 border-0 rounded-full bg-[#008e3c] text-[#ffffff] text-3xl" disabled={num === steps.length - 1}>〉</button>
//                         </div>
//                     </div>

//                     {/* 오른쪽 이미지 슬라이드 */}
//                     <div className="absolute bg-[#f3c716] opacity-30 w-80 h-80 rounded-full left-4/7 transform -translate-x-1/2"></div>
//                     <div className="w-3/5 h-3/4 flex items-center overflow-hidden">
//                         <div className="flex w-[3000px] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${num * 600}px)`}}>
//                         {images.map((image, index) => (
//                                 <div key={index} className="w-[800px] h-full flex justify-between items-center">
//                                     {/* 왼쪽 이미지 */}
//                                     {/* <div className="relative w-full h-full"> */}
//                                         <img src={image.img} alt={image.alt} className="w-3/5 pl-5 scale-110 z-10 transition-opacity duration-500"
//                                         style={{
//                                             opacity: index === num || index === num + 1 ? 1 : 0, // 현재 step과 그 다음 step에만 opacity 1
//                                         }} />
//                                     {/* </div> */}

//                                     {/* 오른쪽 이미지 */}
//                                     <div className="relative w-full h-full">
//                                     {images[index + 1] && (
//                                         <img src={images[index + 1].img} alt={images[index + 1].alt} className="w-4/5 transition-opacity duration-500"
//                                         style={{
//                                             opacity: index === num || index === num + 1 ? 1 : 0, // 현재 step과 그 다음 step에만 opacity 1
//                                         }}
//                                         />
//                                     )}
//                                     </div>
//                                 </div>
//                             ))}

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default StepsToUse;


{/* 슬라이드 효과 원하는대로 구현해보기 */ }
// import { useState } from "react";
// import step1 from "@assets/guide/step1-1.png"
// import step2 from "@assets/guide/step1-2.png"
// import step3 from "@assets/guide/step1-3.png"
// import step4 from "@assets/guide/step1-4.png"
// import step5 from "@assets/guide/step1-5.png"

// import left_arrow from '@assets/arrow/left.png'
// import right_arrow from '@assets/arrow/right.png'

// const steps = [
//     {
//         title: "주문하기",
//         description: "나만의 스타일을 완성하는 단계!\n원하지 않는 야채는 빼고 좋아하는 야채는 더하세요.\n오늘의 기분에 맞는 소스를 선택해주세요.",
//     },
//     {
//         title: "빵 선택",
//         description: "매장에서 직접 구운 6가지 종류 중\n 고객님이 원하는 빵으로\n 추가비용 없이 선택 가능합니다.",
//     },
//     {
//         title: "추가토핑 선택",
//         description: "나만의 메뉴를 더욱 풍성하게 즐기세요.",
//     },
//     {
//         title: "야채&소스 선택",
//         description: "나만의 스타일을 완성하는 단계!\n원하지 않는 야채는 빼고 좋아하는 야채는 더하세요.\n오늘의 기분에 맞는 소스를 선택해주세요",
//     },
//     {
//         title: "세트 선택",
//         description: "세트로 구매하시면 할인혜택을 받으실 수 있습니다.\n 세트로 더욱 든든하고 알차게 즐기세요.",
//     },
// ];

// const images = [
//     {
//         alt: "step1",
//         img: step1
//     },
//     {
//         alt: "step2",
//         img: step2
//     },
//     {
//         alt: "step3",
//         img: step3
//     },
//     {
//         alt: "step4",
//         img: step4
//     },
//     {
//         alt: "step5",
//         img: step5
//     },
// ]

// function StepsToUse() {
//     const [num, setNum] = useState(0); // 현재 STEP 인덱스

//     const nextStep = () => {
//         if (num < steps.length - 1) setNum(num + 1);
//     };

//     const prevStep = () => {
//         if (num > 0) setNum(num - 1);
//     };

//     return (
//         <section className="usage_guide w-full h-screen pt-22 overflow-hidden">
//             <h1 className="text-5xl font-bold text-center mb-22 text-[#008e3c]">써브웨이 이용방법</h1>
//             <div className="w-full h-2/3 mx-auto">
//                 <div className="w-full h-full flex justify-center items-center ml-80">
//                     {/* 왼쪽 STEP 설명 */}
//                     <div className="w-1/3 h-full text-left flex flex-col gap-4">
//                         <p className="text-[#008e3c] font-semibold">STEP {num + 1}</p>
//                         <h2 className="text-3xl font-bold">{steps[num].title}</h2>
//                         <hr className="w-28 my-10" />
//                         <p className="mt-2 h-2/3 text-gray-700 whitespace-pre-line">{steps[num].description}</p>
//                         <div className="mt-6 flex gap-4">
//                             <button onClick={prevStep} className="w-24 h-24 border-0 rounded-full bg-[#008e3c] text-[#ffffff] text-3xl" disabled={num === 0}><img src={left_arrow} alt="left_arrow" className='mx-auto' /></button>
//                             <button onClick={nextStep} className="w-24 h-24 border-0 rounded-full bg-[#008e3c] text-[#ffffff] text-3xl" disabled={num === steps.length - 1}><img src={right_arrow} alt="right_arrow" className='mx-auto' /></button>
//                         </div>
//                     </div>

//                     {/* 오른쪽 이미지 슬라이드 */}
//                     <div className="absolute bg-[#f3c716] opacity-30 w-92 h-92 rounded-full left-240 transform -translate-x-1/2"></div>
//                     <div className="w-full h-3/4 flex items-center overflow-hidden">
//                         <div className="flex pl-7 w-[4000px] transition-transform duration-500 ease-in-out"
//                             style={{ transform: `translateX(-${num * 600}px)` }}>
//                             {images.map((image, index) => (
//                                 <div key={index} className="w-[600px] flex items-center justify-center">
//                                     <img
//                                         src={image.img}
//                                         alt={image.alt}
//                                         className={`transition-all duration-500 ${index === num ? "scale-100" : "scale-70 opacity-70"}`}
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default StepsToUse;