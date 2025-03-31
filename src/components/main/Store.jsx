import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import '../../App.css';

import anyang from '@assets/main/store/anyang.png'
import anyang_plaza from '@assets/main/store/plaza.png'
import anyang_bumgye from '@assets/main/store/anyang_bumgye.png'
import anyang_pch from '@assets/main/store/anyang_pch.png'

import left from '@assets/arrow/left.png'
import right from '@assets/arrow/right.png'


function Store() {
    const store = [
        {
            id: 1,
            img: anyang,
            store: '안양평촌학원가점',
            address: '경기 안양시 동안구 평촌대로 119',
            phone: '031-3850-5027',
            time: '매일 8:00 - 22:00'
        },
        {
            id: 2,
            img: anyang_plaza,
            store: 'AK플라자금정점',
            address: '경기 군포시 엘에스로 143',
            phone: '0507-1330-5476',
            time: '매일 7:00 - 21:50'
        },
        {
            id: 3,
            img: anyang_bumgye,
            store: '안양범계점',
            address: '경기 안양시 동안구 시민대로 167',
            phone: '031-440-8490',
            time: '매일 8:00 - 22:30'
        },
        {
            id: 4,
            img: anyang_pch,
            store: '안양평촌역점',
            address: '경기 안양시 동안구 관평로170번길',
            phone: '0507-1390-8490',
            time: '매일 8:00 - 22:00'
        },
    ]

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [swiperInstance, setSwiperInstance] = useState(null);

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
        <section className="relative w-full h-screen flex flex-col items-center overflow-hidden">
            {/* 타이틀 영역 */}
            <header className="text-center pt-[40px] pb-[80px]">
                <h1 className="text-[80px] text-[#018c3b] font-extrabold max-sm:text-6xl max-sm:pb-[30px]">Store</h1>
                <h3 className="text-[20px]">주변에 가까운 서브웨이 매장을 확인해 보세요!</h3>
            </header>

            {windowWidth >= 1450 ? (
                <>
                    {/* 매장 리스트 영역 */}
                    <article className="w-full">
                        <div className="w-11/12 h-full mx-auto flex gap-14">
                            {
                                store.map((store) => (
                                    <article key={store.id} className="w-1/4 h-5/6 bg-[#fce07f] cursor-pointer">
                                        <img className="w-full h-1/2 object-cover" src={store.img} alt={store.store} />
                                        <div className="flex flex-col pl-3 pt-10 pb-18 gap-3">
                                            <h4 className="text-xl text-[#018c3b] font-semibold">{store.store}</h4>
                                            <div className="flex flex-row">
                                                <p className="w-[80px] text-sm">주소</p>
                                                <p className="text-sm">{store.address}</p>
                                            </div>
                                            <div className="flex flex-row">
                                                <p className="w-[80px] text-sm">전화번호</p>
                                                <p className="text-sm">{store.phone}</p>
                                            </div>
                                            <div className="flex flex-row">
                                                <p className="w-[80px] text-sm">운영시간</p>
                                                <p className="text-sm">{store.time}</p>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    </article>
                    {/* 버튼 영역 */}
                    <footer className="">
                        <button className="btn-section">전체 매장보기</button>
                    </footer>
                </>
            ) : (
                <>
                    {/* 버튼 */}
                    <article className="w-full h-3/5">
                        <div className="max-xl:w-[1200px] max-lg:[900px] max-md:w-[600px] max-sm:w-[300px] h-5/6 mx-auto flex">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={14}
                                centeredSlides={true}
                                initialSlide={0}
                                onSwiper={(swiper) => setSwiperInstance(swiper)}
                                breakpoints={{
                                    1280: { slidesPerView: 4 },
                                    1024: { slidesPerView: 3 },
                                    768: { slidesPerView: 2 },
                                    0: { slidesPerView: 1 }, 
                                }}
                            >
                                {
                                    store.map((store) => (
                                        <SwiperSlide key={store.id} className="!w-[300px] h-full duration-300 bg-[#fce07f] cursor-pointer hover:outline-[5px] outline-[#018c3b]">
                                            <img className="w-full h-1/2 object-cover" src={store.img} alt={store.store} />
                                            <div className="flex flex-col pl-3 pt-10 pb-20 gap-3">
                                                <h4 className="text-xl text-[#018c3b] font-semibold">{store.store}</h4>
                                                <div className="flex flex-row">
                                                    <p className="w-[80px] text-sm">주소</p>
                                                    <p className="text-sm">{store.address}</p>
                                                </div>
                                                <div className="flex flex-row">
                                                    <p className="w-[80px] text-sm">전화번호</p>
                                                    <p className="text-sm">{store.phone}</p>
                                                </div>
                                                <div className="flex flex-row">
                                                    <p className="w-[80px] text-sm">운영시간</p>
                                                    <p className="text-sm">{store.time}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </article>
                    <div className='flex justify-around '>
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className="absolute bottom-[9%] left-[20%] w-16 h-16 px-4 py-4 bg-[#018c3b] text-[#fce07f] rounded-full flex justify-center max-sm:top-[50%] max-sm:left-[4%]"
                        >
                            <img src={left} alt={left} />
                        </button>
                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className="absolute bottom-[9%] right-[20%] w-16 h-16 px-4 py-4 bg-[#018c3b] text-[#fce07f] rounded-full flex justify-center max-sm:top-[50%] max-sm:right-[4%]"
                        >
                            <img src={right} alt={right} />
                        </button>
                    </div>
                    {/* 버튼 영역 */}
                    <footer className="pb-20">
                        <button className="btn-section">전체 매장보기</button>
                    </footer>
                </>
            )}


        </section>
    )
}

export default Store;


// import anyang from '@assets/main/store/anyang.png'
// import anyang_plaza from '@assets/main/store/plaza.png'
// import anyang_bumgye from '@assets/main/store/anyang_bumgye.png'
// import anyang_pch from '@assets/main/store/anyang_pch.png'

// import '../../App.css'

// function Store() {
//     return (
//         <section className="w-full h-screen flex flex-col items-center">
//             {/* 타이틀 영역 */}
//             <header className="text-center pt-[40px] pb-[80px]">
//                 <h1 className="text-[80px] text-[#018c3b] font-extrabold">Store</h1>
//                 <h3 className="text-[20px]">주변에 가까운 서브웨이 매장을 확인해 보세요!</h3>
//             </header>

//             {/* 매장 리스트 영역 */}
//             <article className="w-full">
//                 <div className="w-11/12 mx-auto flex gap-14">
//                     <article className="store-card">
//                         <img className="w-full h-[200px] object-cover" src={anyang} alt="안양 평촌학원가점" />
//                         <div className="store-details">
//                             <h4 className="text-xl text-[#018c3b] font-semibold">안양평촌학원가점</h4>
//                             <div className="flex flex-row">
//                                 <p className="store-label">주소</p>
//                                 <p className="store-value">경기 안양시 동안구 평촌대로 119</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">전화번호</p>
//                                 <p className="store-value">031-385-5027</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">운영시간</p>
//                                 <p className="store-value">매일 8:00 - 22:00</p>
//                             </div>
//                         </div>
//                     </article>

//                     <article className="store-card">
//                         <img className="w-full h-[200px] object-cover" src={anyang_plaza} alt="AK플라자금정점" />
//                         <div className="store-details">
//                             <h4 className="text-xl text-[#018c3b] font-semibold">AK플라자금정점</h4>
//                             <div className="flex flex-row">
//                                 <p className="store-label">주소</p>
//                                 <p className="store-value">경기 군포시 엘에스로 143</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">전화번호</p>
//                                 <p className="store-value">0507-1330-5476</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">운영시간</p>
//                                 <p className="store-value">매일 7:00 - 21:50</p>
//                             </div>
//                         </div>
//                     </article>

//                     <article className="store-card">
//                         <img className="w-full h-[200px] object-cover" src={anyang_bumgye} alt="안양범계점" />
//                         <div className="store-details">
//                             <h4 className="text-xl text-[#018c3b] font-semibold">안양범계점</h4>
//                             <div className="flex flex-row">
//                                 <p className="store-label">주소</p>
//                                 <p className="store-value">경기 안양시 동안구 시민대로 167</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">전화번호</p>
//                                 <p className="store-value">031-440-8490</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">운영시간</p>
//                                 <p className="store-value">매일 8:00 - 22:30</p>
//                             </div>
//                         </div>
//                     </article>

//                     <article className="store-card">
//                         <img className="w-full h-[200px] object-cover" src={anyang_pch} alt="안양평촌역점" />
//                         <div className="store-details">
//                             <h4 className="text-xl text-[#018c3b] font-semibold">안양평촌역점</h4>
//                             <div className="flex flex-row">
//                                 <p className="store-label">주소</p>
//                                 <p className="store-value">경기 안양시 동안구 관평로170번길</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">전화번호</p>
//                                 <p className="store-value">0507-1390-8490</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">운영시간</p>
//                                 <p className="store-value">매일 8:00 - 22:00</p>
//                             </div>
//                         </div>
//                     </article>


//                 </div>
//             </article>

//             {/* 버튼 영역 */}
//             <footer className="mt-14">
//                 <button className="btn-section">전체 매장보기</button>
//             </footer>
//         </section>
//     )
// }

// export default Store;