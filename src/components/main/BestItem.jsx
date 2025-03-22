import { useState } from 'react'
import { motion } from 'framer-motion';

// 클래식
import chicken_slice from '@assets/main/bestItem/chicken_slice.png'
import Italian_bmt from '@assets/main/bestItem/Italian_bmt.png'
import egg_mayo from '@assets/main/bestItem/egg_mayo.png'
import Ham from '@assets/main/bestItem/Ham.png'

// 프레쉬&라이트
import mushroom from '@assets/main/bestItem/mushroom.png'
import veggie from '@assets/main/bestItem/veggie.png'
import turkey from '@assets/main/bestItem/turkey.png'
import bacon_avocado from '@assets/main/bestItem/bacon_avocado.png'

// 클래식, 프레쉬&라이트
import egg_slice from '@assets/main/bestItem/egg_slice.png'
import Rotisserie_Barbecue_Chicken from '@assets/main/bestItem/Rotisserie_Barbecue_Chicken.png'

//프리미엄
import chicken_teriyaki from '@assets/main/bestItem/chicken_teriyaki.png'
import steak from '@assets/main/bestItem/steak.png'
import spicy_italian from '@assets/main/bestItem/spicy_italian.png'
import shrimp from '@assets/main/bestItem/shrimp.png'
import spicy_shrimp from '@assets/main/bestItem/spicy_shrimp.png'
import pulled_pork from '@assets/main/bestItem/pulled_pork.png'

// 아침메뉴
import hashbrown from '@assets/main/bestItem/hashbrown.png'
import ham_egg_cheese from '@assets/main/bestItem/ham_egg_cheese.png'
import ham_egg_cheese_wrap from '@assets/main/bestItem/ham_egg_cheese_wrap.png'
import west_egg_cheese from '@assets/main/bestItem/pulled_pork.png'
import chicken_bacon_mini_wrap from '@assets/main/bestItem/chicken_bacon_mini_wrap.png'




function BestItem() {
    const [activeBtn, setActiveBtn] = useState(0)

    const items = [
        // 클래식
        { id: 1, title: '에그 슬라이스', mini_title: 'Egg Slice', img: egg_slice },
        { id: 2, title: '치킨 슬라이스', mini_title: 'Chicken Slice', img: chicken_slice },
        { id: 3, title: '로티세리 바비큐 치킨', mini_title: 'Rotisserie Barbecue Chicken', img: Rotisserie_Barbecue_Chicken },
        { id: 4, title: '이탈리안 비엠티', mini_title: 'Egg Slice', img: Italian_bmt },
        { id: 5, title: '에그 마요', mini_title: 'Egg Mayo', img: egg_mayo },
        { id: 6, title: '햄', mini_title: 'Ham', img: Ham },

        // 프레쉬 & 라이트
        { id: 7, title: '머쉬룸', mini_title: 'Mushroom', img: mushroom },
        { id: 8, title: '베지', mini_title: 'Veggie Delite', img: veggie },
        { id: 9, title: '터키', mini_title: 'Turkey', img: turkey },
        { id: 10, title: '터키 베이컨 아보카도', mini_title: 'Turkey Bacon Avocado', img: bacon_avocado },
        { id: 11, title: '에그 슬라이스', mini_title: 'Egg Slice', img: egg_slice },
        { id: 12, title: '로티세리 바비큐 치킨', mini_title: 'Rotisserie Barbecue Chicken', img: Rotisserie_Barbecue_Chicken },

        // 프리미엄
        { id: 13, title: '치킨 데리야끼', mini_title: 'Chicken Teriyaki', img: chicken_teriyaki },
        { id: 14, title: '스테이크 & 치즈', mini_title: 'Steak & Cheese', img: steak },
        { id: 15, title: '스파이시 이탈리안', mini_title: 'Spicy Italian', img: spicy_italian },
        { id: 16, title: '풀드포크 바비큐', mini_title: 'Pulled Pork Barbecue', img: pulled_pork },
        { id: 17, title: '쉬림프', mini_title: 'Shrimp', img: shrimp },
        { id: 18, title: '스파이시 쉬림프', mini_title: 'Spicy Shrimp', img: spicy_shrimp },

        // 아침메뉴
        { id: 19, title: '치킨 데리야끼', mini_title: 'Chicken Teriyaki', img: hashbrown },
        { id: 20, title: '스테이크 & 치즈', mini_title: 'Steak & Cheese', img: ham_egg_cheese },
        { id: 21, title: '스파이시 이탈리안', mini_title: 'Spicy Italian', img: ham_egg_cheese_wrap },
        { id: 22, title: '풀드포크 바비큐', mini_title: 'Pulled Pork Barbecue', img: west_egg_cheese },
        { id: 23, title: '쉬림프', mini_title: 'Shrimp', img: chicken_bacon_mini_wrap },
        { id: 24, title: '스파이시 쉬림프', mini_title: 'Spicy Shrimp', img: spicy_shrimp },
    ]

    const btn = ['클래식', '프레쉬 & 라이트', '프리미엄', '아침메뉴']

    // 한 페이지에 보여줄 아이템 수
    const itemsPerPage = 6;
    const startIndex = activeBtn * itemsPerPage;
    const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <div className="w-full h-screen" style={{ backgroundColor: 'rgba(255, 214, 71, 0.5)' }}>
                {/* 제목 섹션 */}
                <div className="text-center pt-8 pb-12">
                    <h1 className="text-[80px] text-[#018c3b] font-extrabold">Best Item</h1>
                    <h3 className="text-[20px]">서브웨이의 인기제품을 소개합니다</h3>
                </div>

                <div className='w-3/5 mx-auto'>
                    {/* 버튼 섹션 */}
                    <div className="flex justify-center gap-10">
                        {btn.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveBtn(index)}
                                className={`w-44 border-2 border-[#009132] rounded-full px-6 py-2 
                                    ${activeBtn === index ? 'bg-[#018c3b] text-[#fce07f]' : 'text-[#018c3b]'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* 메뉴 섹션 */}
                    <div className='best-item-content grid grid-cols-3 gap-8 justify-items-center py-16'>
                        {visibleItems.map((item) => (
                            <div key={item.id} className='flex flex-col text-center cursor-pointer'>
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
                </div>
            </div>
        </>
    )
}

export default BestItem
