import React, { useState } from 'react';
import { motion } from 'framer-motion';
import eggslice from '@assets/main/promotion/eggslice_menu.png';
import greenS from '@assets/main/promotion/greenS.png';
import subPick from '@assets/main/promotion/subPick.png';
import soupL from '@assets/main/promotion/soupL.png';
import soupR from '@assets/main/promotion/soupR.png';
import freshNgood from '@assets/main/promotion/fresh&good.png';
import gient_sub from '@assets/main/promotion/gient_sub.png';
import cookie from '@assets/main/promotion/cookie.png';
import morning from '@assets/main/promotion/morning.png';
import bacon_cheesy from '@assets/main/promotion/bacon_cheesy.png';
import party_platter from '@assets/main/promotion/party_platter.png';
import abocado from '@assets/main/promotion/abocado.png';
import sauce from '@assets/main/promotion/sauce.png';
import cookies_long from '@assets/main/promotion/cookies_long.png';
import sub from '@assets/main/promotion/sub.png';
import cha from '@assets/main/promotion/cha.png';

function Promotion() {
    const promotions = [
        {
            id: 1,
            title: '맛도 영양도 사로잡은 \n 에그 슬라이스 출시 !',
            image: eggslice,
            date: '2025.03.01 ~ ',
            description: '에그 슬라이스 출시! \n 신선함과 담백함을 그대로 담아 맛도 영양도 사로잡은 에그 슬라이스',
        },
        {
            id: 2,
            title: '신선함으로 가득 채운\n New 그린 샐러드 !',
            image: greenS,
            date: '2025.03.01 ~ ',
            description: 'New 그린 샐러드 \n 다채로운 신선함으로 가득 채운 New 그린 샐러드 시리즈!',
        },
        {
            id: 3,
            title: '‘썹픽’ 한마디로 \n 쉽고 빠르게 주문 끝!',
            image: subPick,
            date: '2025.03.01 ~ ',
            description: 'SUBPICK 써브웨이 \n 추천 조합을 ‘썹픽’ 한마디로 쉽고 빠르게 주문 끝!',
        },
        {
            id: 4,
            title: '써브웨이 오늘의 수프를\n 원하는 사이즈로!',
            image: [soupL, soupR],
            date: '2025.02.01 ~ 2025.04.30',
            description: '오늘의 수프를 원하는 사이즈로! \n 샌드위치랑 함께 먹으면 든든하고 맛있썹!',
        },
        {
            id: 5,
            title: 'Eat Fresh Feel Good \n 신선함이 가득, 즐거움이 가득',
            image: freshNgood,
            date: '2025.01.01 ~ 2025.03.31',
            description: 'Eat Fresh Feel Good 신선함이 가득, 즐거움이 가득',
        },
        {
            id: 6,
            title: '보는재미, 먹는재미! \n 특별한 날은 자이언트',
            image: gient_sub,
            date: '2024.12.01 ~ 2025.02.28',
            description: '보는재미, 먹는재미! \n 써브로 더욱 특별하게 자이언트 메뉴로 !',
        },
        {
            id: 7,
            title: '민트의 상쾌함 ! \n 초코의 달콤함 !',
            image: cookie,
            date: '2024.10.01 ~ 2024.12.31',
            description: '한정 수량으로 소진 시까지 판매됩니다. \n 제품 사진은 이미지 컷입니다.',
        },
        {
            id: 8,
            title: '아침에는 간단하게 \n 써브웨이 아침 메뉴로 !',
            image: morning,
            date: '2024.08.01 ~ 2024.10.31',
            description: '아침에 간단하고 든든하게 챙길 수 있는 \n 햄&에그 썹메뉴 출시 !',
        },
        {
            id: 9,
            title: '베이컨과 치즈로 \n 엄청난 풍미의 웨지감자를 !',
            image: bacon_cheesy,
            date: '2024.06.01 ~ 2024.08.31',
            description: '베이컨과 치즈로 엄청난 풍미의 \n 웨지감자를 느껴보세요 !',
        },
        {
            id: 10,
            title: '여러가지 메뉴를 한 번에 ! \n Subway Party Platter !',
            image: party_platter,
            date: '2024.04.01 ~ 2024.06.30',
            description: '여러가지 메뉴를 한 번에 ! \n Subway Party Platter !',
        },
        {
            id: 11,
            title: '신선하고 맛있는 아보카도를 \n 원하는 만큼 추가 !',
            image: abocado,
            date: '2023.11.01 ~ 2023.12.31',
            description: '당일에 공수한 신선한 아보카도를 \n 원하는 만큼 추가해서 먹어봐요 !',
        },
        {
            id: 12,
            title: '내가 만든 서브웨이만의 \n 특별한 소스를 마음껏 즐기자 !',
            image: sauce,
            date: '2023.10.01 ~ 2023.12.31',
            description: '내가 만든 특제소스를 마음껏 추가 할 수 있어요! \n (본 이벤트는 사전종료 될 수 있습니다.)',
        },
        {
            id: 13,
            title: '30cm 쿠키 출시 ! \n 여러가지 토핑까지 추가 !',
            image: cookies_long,
            date: '2023.09.01 ~ 2023.11.30',
            description: '30cm 쿠키만의 맛을 즐겨보세요 !',
        },
        {
            id: 14,
            title: '이 달의 썹프라이즈! \n 놀라운 가격으로 메뉴를 즐기자 !',
            image: sub,
            date: '2023.08.01 ~ 2023.10.31',
            description: '맛도 가격도 놀라운 썹!프라이즈 메뉴 \n 지금 바로 확인해보세요 !',
        },
        {
            id: 15,
            title: '서브웨이에서 차은우 메뉴 먹GO ! \n 차은우 포토카드도 갖GO !',
            image: cha,
            date: '2023.07.01 ~ 2023.09.30',
            description: '차은우 메뉴를 먹고 SNS에 인증하면 \n 차은우 포토카드가?!',
        },
    ];
    // 현재 페이지 상태 관리
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; // 페이지당 아이템 수

    // 현재 페이지의 프로모션 아이템을 잘라내기
    const currentItems = promotions.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    // 문자열 내 줄바꿈 문자를 <br /> 태그로 변환해주는 함수
    const convertNewlinesToBreaks = (text) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <div className="w-full h-screen flex flex-col items-center">
            {/* 프로모션 헤더 */}
            <div className="text-center pt-[40px] pb-[80px]">
                <h1 className="text-[80px] text-[#018c3b] font-extrabold">Promotion</h1>
                <h3 className="text-[20px]">서브웨이의 다양한 혜택과 이벤트를 만나보세요</h3>
            </div>

            {/* 프로모션 아이템 목록 */}
            <div className="w-full h-3/6 pl-[10px] pr-[10px] gap-9 flex flex-wrap justify-center">
                {currentItems.map((promotion, index) => {
                    const isEven = index % 2 === 0; // 아이템 인덱스에 따라 배경색 변경
                    return (
                        <motion.div
                            key={promotion.id}
                            className="menu w-1/6 flex flex-col grow cursor-pointer	"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            {/* 프로모션 이미지와 제목 */}
                            <div
                                className={`w-full h-[260px] pt-8 rounded-t-full flex flex-col items-center`}
                                style={{ backgroundColor: isEven ? '#ffcc32' : '#018c3b' }}
                            >
                                {Array.isArray(promotion.image) ? (
                                    <div className="flex flex-row justify-center w-2/6 h-4/6 pt-7">
                                        <img className="w-full h-3/4" src={promotion.image[0]} alt="soupL" />
                                        <img className="w-full h-3/4" src={promotion.image[1]} alt="soupR" />
                                    </div>
                                ) : (
                                    <div className='w-3/6 h-4/6 flex flex-col justify-center'>
                                        <img className="w-full" src={promotion.image} alt={promotion.title} />
                                    </div>
                                )}
                                {/* 프로모션 제목 */}
                                <p className={`text-m text-center ${isEven ? 'text-[#000000]' : 'text-white'}`}>
                                    {convertNewlinesToBreaks(promotion.title)}
                                </p>
                            </div>
                            {/* 프로모션 날짜와 설명 */}
                            <div className="w-full mt-4">
                                <p className="text-[#018c3b] font-bold">{promotion.date}</p>
                                <hr className="border-t-2 border-[#018c3b] my-2 w-full" />
                                <p className="text-sm text-[#000000]">
                                    {convertNewlinesToBreaks(promotion.description)}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* 페이지네이션 버튼 */}
            <div className="flex gap-12 pt-[50px]">
                {[...Array(3)].map((_, pageIndex) => (
                    <a key={pageIndex} onClick={() => setCurrentPage(pageIndex)}>
                        <button
                            className={`w-[20px] h-[20px] bg-[#018c3b] rounded-full ${currentPage === pageIndex ? '' : 'opacity-25'}`}
                        ></button>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Promotion;


{/* 라이브러리를 사용하지 않아, 애니메이션 효과가 없는 코드 */}
// import React, { useState } from 'react';
// import eggslice from '@assets/main/promotion/eggslice_menu.png';
// import greenS from '@assets/main/promotion/greenS.png';
// import subPick from '@assets/main/promotion/subPick.png';
// import soupL from '@assets/main/promotion/soupL.png';
// import soupR from '@assets/main/promotion/soupR.png';
// import freshNgood from '@assets/main/promotion/fresh&good.png';
// import gient_sub from '@assets/main/promotion/gient_sub.png';
// import cookie from '@assets/main/promotion/cookie.png';
// import morning from '@assets/main/promotion/morning.png';
// import bacon_cheesy from '@assets/main/promotion/bacon_cheesy.png';
// import party_platter from '@assets/main/promotion/party_platter.png';
// import abocado from '@assets/main/promotion/abocado.png';
// import sauce from '@assets/main/promotion/sauce.png';
// import cookies_long from '@assets/main/promotion/cookies_long.png';
// import sub from '@assets/main/promotion/sub.png';
// import cha from '@assets/main/promotion/cha.png';

// function Promotion() {
//     const promotions = [
//         {
//             id: 1,
//             title: '맛도 영양도 사로잡은 \n 에그 슬라이스 출시 !',
//             image: eggslice,
//             date: '2025.03.01 ~ ',
//             description: '에그 슬라이스 출시! \n 신선함과 담백함을 그대로 담아 맛도 영양도 사로잡은 에그 슬라이스',
//         },
//         {
//             id: 2,
//             title: '신선함으로 가득 채운\n New 그린 샐러드 !',
//             image: greenS,
//             date: '2025.03.01 ~ ',
//             description: 'New 그린 샐러드 \n 다채로운 신선함으로 가득 채운 New 그린 샐러드 시리즈!',
//         },
//         {
//             id: 3,
//             title: '‘썹픽’ 한마디로 \n 쉽고 빠르게 주문 끝!',
//             image: subPick,
//             date: '2025.03.01 ~ ',
//             description: 'SUBPICK 써브웨이 \n 추천 조합을 ‘썹픽’ 한마디로 쉽고 빠르게 주문 끝!',
//         },
//         {
//             id: 4,
//             title: '써브웨이 오늘의 수프를\n 원하는 사이즈로!',
//             image: [soupL, soupR],
//             date: '2025.02.01 ~ 2025.04.30',
//             description: '오늘의 수프를 원하는 사이즈로! \n 샌드위치랑 함께 먹으면 든든하고 맛있썹!',
//         },
//         {
//             id: 5,
//             title: 'Eat Fresh Feel Good \n 신선함이 가득, 즐거움이 가득',
//             image: freshNgood,
//             date: '2025.01.01 ~ 2025.03.31',
//             description: 'Eat Fresh Feel Good 신선함이 가득, 즐거움이 가득',
//         },
//         {
//             id: 6,
//             title: '보는재미, 먹는재미! \n 특별한 날은 자이언트',
//             image: gient_sub,
//             date: '2024.12.01 ~ 2025.02.28',
//             description: '보는재미, 먹는재미! \n 써브로 더욱 특별하게 자이언트 메뉴로 !',
//         },
//         {
//             id: 7,
//             title: '민트의 상쾌함 ! \n 초코의 달콤함 !',
//             image: cookie,
//             date: '2024.10.01 ~ 2024.12.31',
//             description: '한정 수량으로 소진 시까지 판매됩니다. \n 제품 사진은 이미지 컷입니다.',
//         },
//         {
//             id: 8,
//             title: '아침에는 간단하게 \n 써브웨이 아침 메뉴로 !',
//             image: morning,
//             date: '2024.08.01 ~ 2024.10.31',
//             description: '아침에 간단하고 든든하게 챙길 수 있는 \n 햄&에그 썹메뉴 출시 !',
//         },
//         {
//             id: 9,
//             title: '베이컨과 치즈로 \n 엄청난 풍미의 웨지감자를 !',
//             image: bacon_cheesy,
//             date: '2024.06.01 ~ 2024.08.31',
//             description: '베이컨과 치즈로 엄청난 풍미의 \n 웨지감자를 느껴보세요 !',
//         },
//         {
//             id: 10,
//             title: '여러가지 메뉴를 한 번에 ! \n Subway Party Platter !',
//             image: party_platter,
//             date: '2024.04.01 ~ 2024.06.30',
//             description: '여러가지 메뉴를 한 번에 ! \n Subway Party Platter !',
//         },
//         {
//             id: 11,
//             title: '신선하고 맛있는 아보카도를 \n 원하는 만큼 추가 !',
//             image: abocado,
//             date: '2023.11.01 ~ 2023.12.31',
//             description: '당일에 공수한 신선한 아보카도를 \n 원하는 만큼 추가해서 먹어봐요 !',
//         },
//         {
//             id: 12,
//             title: '내가 만든 서브웨이만의 \n 특별한 소스를 마음껏 즐기자 !',
//             image: sauce,
//             date: '2023.10.01 ~ 2023.12.31',
//             description: '내가 만든 특제소스를 마음껏 추가 할 수 있어요! \n (본 이벤트는 사전종료 될 수 있습니다.)',
//         },
//         {
//             id: 13,
//             title: '30cm 쿠키 출시 ! \n 여러가지 토핑까지 추가 !',
//             image: cookies_long,
//             date: '2023.09.01 ~ 2023.11.30',
//             description: '30cm 쿠키만의 맛을 즐겨보세요 !',
//         },
//         {
//             id: 14,
//             title: '이 달의 썹프라이즈! \n 놀라운 가격으로 메뉴를 즐기자 !',
//             image: sub,
//             date: '2023.08.01 ~ 2023.10.31',
//             description: '맛도 가격도 놀라운 썹!프라이즈 메뉴 \n 지금 바로 확인해보세요 !',
//         },
//         {
//             id: 15,
//             title: '서브웨이에서 차은우 메뉴 먹GO ! \n 차은우 포토카드도 갖GO !',
//             image: cha,
//             date: '2023.07.01 ~ 2023.09.30',
//             description: '차은우 메뉴를 먹고 SNS에 인증하면 \n 차은우 포토카드가?!',
//         },
//     ];
    

//     const [currentPage, setCurrentPage] = useState(0); // 현재 페이지를 추적
//     const itemsPerPage = 5;

//     // 현재 페이지에 해당하는 아이템만 가져오는 로직
//     const currentItems = promotions.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

//     // 텍스트에서 \n을 <br />로 변환하는 함수
//     const convertNewlinesToBreaks = (text) => {
//         return text.split('\n').map((line, index) => (
//             <React.Fragment key={index}>
//                 {line}
//                 <br />
//             </React.Fragment>
//         ));
//     };

//     return (
//         <div className="w-full h-screen flex flex-col items-center">
//             {/* 제목 섹션 */}
//             <div className="text-center pt-[40px] pb-[80px]">
//                 <h1 className="text-[80px] text-[#018c3b] font-extrabold">Promotion</h1>
//                 <h3 className="text-[20px]">서브웨이의 다양한 혜택과 이벤트를 만나보세요</h3>
//             </div>

//             {/* 콘텐츠 섹션 */}
//             <div className="w-full h-3/6 pl-[10px] pr-[10px] gap-9 flex flex-wrap justify-center">
//                 {currentItems.map((promotion, index) => {
//                     const isEven = index % 2 === 0;
//                     return (
//                         <div key={promotion.id} className="menu w-[260px] flex flex-col grow">
//                             <div
//                                 className={w-full h-[260px] pt-8 rounded-t-full flex flex-col items-center}
//                                 style={{
//                                     backgroundColor: isEven ? '#ffcc32' : '#018c3b',
//                                 }}
//                             >
//                                 {Array.isArray(promotion.image) ? (
//                                     <div className="flex flex-row justify-center w-2/6 h-4/6 pt-7">
//                                         <img className="w-full h-3/4" src={promotion.image[0]} alt="soupL" />
//                                         <img className="w-full h-3/4" src={promotion.image[1]} alt="soupR" />
//                                     </div>
//                                 ) : (
//                                     <div className='w-3/6 h-4/6 flex flex-col justify-center'>
//                                         <img className="w-full" src={promotion.image} alt={promotion.title} />
//                                     </div>
//                                 )}
//                                 <p
//                                     className={text-m text-center ${isEven ? 'text-[#000000]' : 'text-white'}}
//                                 >
//                                     {convertNewlinesToBreaks(promotion.title)}
//                                 </p>
//                             </div>

//                             {/* 설명 */}
//                             <div className="w-full mt-4">
//                                 <p className="text-[#018c3b] font-bold">{promotion.date}</p>
//                                 <hr className="border-t-2 border-[#018c3b] my-2 w-full" />
//                                 <p className="text-sm text-[#000000]">
//                                     {convertNewlinesToBreaks(promotion.description)}
//                                 </p>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>

//             {/* 페이지네이션 */}
//             <div className="flex gap-12 pt-[50px]">
//                 {[...Array(3)].map((_, pageIndex) => (
//                     <a key={pageIndex} onClick={() => setCurrentPage(pageIndex)}>
//                         <div
//                             className={w-[20px] h-[20px] bg-[#018c3b] rounded-full ${
//                                 currentPage === pageIndex ? '' : 'opacity-25'
//                             }}
//                         ></div>
//                     </a>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Promotion;