import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import '../../App.css';

// 클래식
import chicken_slice from '@assets/main/bestItem/chicken_slice.png';
import Italian_bmt from '@assets/main/bestItem/Italian_bmt.png';
import egg_mayo from '@assets/main/bestItem/egg_mayo.png';
import Ham from '@assets/main/bestItem/Ham.png';

// 프레쉬&라이트
import mushroom from '@assets/main/bestItem/mushroom.png';
import veggie from '@assets/main/bestItem/veggie.png';
import turkey from '@assets/main/bestItem/turkey.png';
import bacon_avocado from '@assets/main/bestItem/bacon_avocado.png';

// 클래식, 프레쉬&라이트
import egg_slice from '@assets/main/bestItem/egg_slice.png';
import Rotisserie_Barbecue_Chicken from '@assets/main/bestItem/Rotisserie_Barbecue_Chicken.png';

//프리미엄
import chicken_teriyaki from '@assets/main/bestItem/chicken_teriyaki.png';
import steak from '@assets/main/bestItem/steak.png';
import spicy_italian from '@assets/main/bestItem/spicy_italian.png';
import shrimp from '@assets/main/bestItem/shrimp.png';
import spicy_shrimp from '@assets/main/bestItem/spicy_shrimp.png';
import pulled_pork from '@assets/main/bestItem/pulled_pork.png';

// 아침메뉴
import hashbrown from '@assets/main/bestItem/hashbrown.png';
import ham_egg_cheese from '@assets/main/bestItem/ham_egg_cheese.png';
import ham_egg_cheese_wrap from '@assets/main/bestItem/ham_egg_cheese_wrap.png';
import west_egg_cheese from '@assets/main/bestItem/pulled_pork.png';
import chicken_bacon_mini_wrap from '@assets/main/bestItem/chicken_bacon_mini_wrap.png';

// 화살표
import left from '@assets/arrow/left.png'
import right from '@assets/arrow/right.png'

function BestItem() {
    const [activeBtn, setActiveBtn] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const items = [
        // 클래식
        { id: 1, miniId: 1, title: '에그 슬라이스', mini_title: 'Egg Slice', img: egg_slice },
        { id: 2, miniId: 2, title: '치킨 슬라이스', mini_title: 'Chicken Slice', img: chicken_slice },
        { id: 3, miniId: 3, title: '로티세리 바비큐 치킨', mini_title: 'Rotisserie Barbecue Chicken', img: Rotisserie_Barbecue_Chicken },
        { id: 4, miniId: 4, title: '이탈리안 비엠티', mini_title: 'Egg Slice', img: Italian_bmt },
        { id: 5, miniId: 5, title: '에그 마요', mini_title: 'Egg Mayo', img: egg_mayo },
        { id: 6, miniId: 6, title: '햄', mini_title: 'Ham', img: Ham },

        // 프레쉬 & 라이트
        { id: 7, miniId: 7, title: '머쉬룸', mini_title: 'Mushroom', img: mushroom },
        { id: 8, miniId: 8, title: '베지', mini_title: 'Veggie Delite', img: veggie },
        { id: 9, miniId: 9, title: '터키', mini_title: 'Turkey', img: turkey },
        { id: 10, miniId: 10, title: '터키 베이컨 아보카도', mini_title: 'Turkey Bacon Avocado', img: bacon_avocado },
        { id: 11, miniId: 11, title: '에그 슬라이스', mini_title: 'Egg Slice', img: egg_slice },
        { id: 12, miniId: 12, title: '로티세리 바비큐 치킨', mini_title: 'Rotisserie Barbecue Chicken', img: Rotisserie_Barbecue_Chicken },

        // 프리미엄
        { id: 13, miniId: 13, title: '치킨 데리야끼', mini_title: 'Chicken Teriyaki', img: chicken_teriyaki },
        { id: 14, miniId: 14, title: '스테이크 & 치즈', mini_title: 'Steak & Cheese', img: steak },
        { id: 15, miniId: 15, title: '스파이시 이탈리안', mini_title: 'Spicy Italian', img: spicy_italian },
        { id: 16, miniId: 16, title: '풀드포크 바비큐', mini_title: 'Pulled Pork Barbecue', img: pulled_pork },
        { id: 17, miniId: 17, title: '쉬림프', mini_title: 'Shrimp', img: shrimp },
        { id: 18, miniId: 18, title: '스파이시 쉬림프', mini_title: 'Spicy Shrimp', img: spicy_shrimp },

        // 아침메뉴
        { id: 19, miniId: 19, title: '치킨 데리야끼', mini_title: 'Chicken Teriyaki', img: hashbrown },
        { id: 20, miniId: 20, title: '스테이크 & 치즈', mini_title: 'Steak & Cheese', img: ham_egg_cheese },
        { id: 21, miniId: 21, title: '스파이시 이탈리안', mini_title: 'Spicy Italian', img: ham_egg_cheese_wrap },
        { id: 22, miniId: 22, title: '풀드포크 바비큐', mini_title: 'Pulled Pork Barbecue', img: west_egg_cheese },
        { id: 23, miniId: 23, title: '쉬림프', mini_title: 'Shrimp', img: chicken_bacon_mini_wrap },
        { id: 24, miniId: 24, title: '스파이시 쉬림프', mini_title: 'Spicy Shrimp', img: spicy_shrimp },
    ];

    const btn = ['클래식', '프레쉬 & 라이트', '프리미엄', '아침메뉴'];
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

    const miniItems = items.map((item) => ({
        ...item,
        key: `${item.id}-${item.miniId}-${item.title}`,  // id, miniId, title을 조합한 고유한 key 설정
    }));

    const itemsPerPage = 6;
    const startIndex = activeBtn * itemsPerPage;
    const visibleItems = miniItems.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className="w-full overflow-hidden pt-40 pb-32 max-sm:pt-10" style={{ backgroundColor: 'rgba(255, 214, 71, 0.5)' }}>
            {/* 제목 섹션 */}
            <div className="text-center pb-12">
                <h1 className="text-[80px] text-[#018c3b] font-extrabold max-sm:text-6xl">Best Item</h1>
                <h3 className="text-[20px]">서브웨이의 인기제품을 소개합니다</h3>
            </div>

            <div className="w-3/5 mx-auto max-xl:w-full">
                {/* 버튼 섹션 */}
                <div className="w-fit mx-auto grid grid-cols-4 gap-4 max-xl:grid-cols-2">
                    {btn.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveBtn(index)}
                            className={`w-40 border-2 border-[#009132] rounded-full  py-2.5 mx-2 max-xl:rounded-xl
                                ${activeBtn === index ? 'bg-[#018c3b] text-[#fce07f]' : 'text-[#018c3b]'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {windowWidth >= 1024 ? (
                    <div className="best-item-content grid grid-cols-3 gap-10 justify-items-center py-20">
                        {visibleItems.map((item) => (
                            <div key={item.key} className="flex flex-col text-center cursor-pointer mb-6">
                                <motion.img
                                    src={item.img}
                                    alt={item.mini_title}
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (visibleItems.indexOf(item) + 1) * 0.2, duration: 1 }}
                                />
                                <p>{item.mini_title}</p>
                                <h2>{item.title}</h2>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="w-full h-full mx-auto pt-30">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={1.5}
                            centeredSlides={true}
                            initialSlide={0}
                            onSwiper={(swiper) => setSwiperInstance(swiper)}
                        >
                            {visibleItems.map((miniItem) => (
                                <SwiperSlide key={miniItem.key} className="w-[465px] h-[205px] flex flex-col text-center cursor-pointer">
                                    <img
                                        src={miniItem.img}
                                        alt={miniItem.mini_title}
                                        className="w-4/5 h-[205px] mb-12 mx-auto max-sm:w-full"
                                    />
                                    <p className="text-[12px] text-[#987703]">{miniItem.mini_title}</p>
                                    <h2 className="text-[22px] text-[#018c3b] font-semibold">{miniItem.title}</h2>
                                </SwiperSlide>
                            ))}
                            <div className='flex justify-around'>
                                <button
                                    onClick={() => swiperInstance?.slidePrev()}
                                    className="w-16 h-16 px-4 py-4 bg-[#018c3b] text-[#fce07f] rounded-full flex justify-center"
                                >
                                    <img src={left} alt={left} />
                                </button>
                                <button
                                    onClick={() => swiperInstance?.slideNext()}
                                    className="w-16 h-16 px-4 py-4 bg-[#018c3b] text-[#fce07f] rounded-full flex justify-center"
                                >
                                    <img src={right} alt={right} />
                                </button>
                            </div>
                        </Swiper>
                    </div>
                )}
            </div>
        </section>
    );
}

export default BestItem;
