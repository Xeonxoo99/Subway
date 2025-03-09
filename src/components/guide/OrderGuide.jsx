import { useState } from "react";
import cheese from '../../assets/guide/cheese.png'
import sauce from '../../assets/guide/sauce.png'
import vegetable from '../../assets/guide/vegetable.png'
import tip_bottom from '../../assets/guide/tip_bottom.png'

const menu = [
    {
        name: '스테이크 & 치즈',
        want: '완벽한 한 끼를 원하신다면?',
        desc: '고급스러운 스테이크와 고소하고 진한 치즈의 콜라보 \n신선한 야채와 함께 푸짐하고 완벽한 한끼가 완성됩니다!\n다양한 토핑을 추가해 나만의 한끼 메뉴를 즐겨보세요.',
        img: 'src/assets/guide/stake.png',
        more: [
            {
                desc: '더블치즈로 치즈와 쇠고기의\n 완벽한 조화!'
            },
            {
                desc: '달콤하게 즐기고 싶다면\n스윗어니언+마요네즈!\n스테이크의 맛을 즐기고 싶다면 후추만 톡톡!'
            },
            {
                desc: '토마토, 오이를 빼면 고기의 풍미를 즐길 수 있습니다.'
            }
        ]
    },
    {
        name: "로스트 치킨",
        want: "건강한 한 끼를 원하신다면?",
        desc: "담백하게 구운 닭가슴살과 신선한 야채의 조화\n기름기가 적어 부담 없이 가볍고 든든한 한 끼!\n다양한 소스를 추가해 나만의 건강한 샌드위치를 즐겨보세요.",
        img: 'src/assets/guide/roasted.png',
        more: [
            { desc: "허니 머스타드를 추가하면 달콤한 감칠맛이 UP!" },
            { desc: "할라피뇨와 사우스웨스트 소스를 더하면 매콤한 맛을 즐길 수 있습니다." },
            { desc: "양상추와 오이를 추가하면 더욱 신선한 한 입을 경험할 수 있어요." }
        ]
    },
    {
        name: "써브웨이 클럽",
        want: "든든한 한 끼를 원하신다면?",
        desc: "칠면조, 햄, 로스트 비프가 어우러진 클래식한 조합\n깔끔하고 담백한 맛으로 언제 어디서나 부담 없이 즐길 수 있어요.\n취향에 맞게 토핑과 소스를 더해 나만의 클럽 샌드위치를 만들어보세요.",
        img: 'src/assets/guide/subwayclub.png',
        more: [
            { desc: "랜치 소스를 추가하면 더욱 부드러운 맛을 느낄 수 있습니다." },
            { desc: "스파이시하고 싶다면 사우스웨스트 소스를 추천!" },
            { desc: "양파와 피망을 더하면 아삭한 식감이 살아납니다." }
        ]
    }
]

function OrderGuide() {
    const [selectedMenu, setSelectedMenu] = useState(menu[0]); // 기본 선택된 메뉴
    const [desc, setDesc] = useState(selectedMenu.more[0])

    const handleMenuClick = (menuItem) => {
        setSelectedMenu(menuItem); // 버튼 클릭 시 메뉴 변경
    };


    return (
        <>
            <section className="w-full h-[180vh] bg-[#ececec] relative">
                <h1 className="text-5xl font-bold text-center py-28 text-[#008e3c]">주문 TIP</h1>
                <div className="w-3/5 mx-auto">
                    {/* 버튼 영역 */}
                    <div className="w-full h-20 bg-[#ffffff] rounded-full flex justify-between mb-36">
                        {menu.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleMenuClick(item)}
                                className={`w-1/3 h-4/5 text-2xl my-auto rounded-full 
            ${selectedMenu.name === item.name ? 'bg-[#f3c716] text-[#ffffff]' : 'text-[#008e3c]'} 
            ${index === 0 ? 'ml-2.5' : ''} 
            ${index === menu.length - 1 ? 'mr-2.5' : ''}`}
                            >
                                {item.name}
                            </button>
                        ))}

                    </div>
                    {/* 선택된 버튼에 해당하는 설명 */}
                    <div className="flex flex-col">
                        {/* 기본 설명 */}
                        <div className="flex mb-10 w-full h-80">
                            <div className="text-left w-1/2">
                                <h2 className="text-3xl mb-6">{selectedMenu.want}</h2>
                                <h2 className="text-3xl font-bold text-[#008e3c] mb-10">{selectedMenu.name}</h2>
                                <p className="mt-2 text-gray-700 whitespace-pre-line">{selectedMenu.desc}</p>
                            </div>
                            <div className="w-1/2">
                                <img className="" src={selectedMenu.img} alt="메뉴 이미지" />
                            </div>
                        </div>
                        {/* 추가 팁 */}
                        <div className="mt-10 flex relative">
                            <div className="flex flex-col">
                                <p>더 맛있게 즐기는</p>
                                <h2 className="text-5xl font-bold">TIP</h2>
                            </div>
                            <div className="flex h-auto gap-14 absolute -top-12 left-64">
                                <div className="flex flex-col items-center w-1/3">
                                    {/* 이미지 */}
                                    <div className="w-40 h-40 border-0 rounded-full bg-[#008e3c] flex flex-col items-center justify-center gap-4">
                                        <img src={cheese} alt="cheese" className="w-1/2" />
                                        <p className="text-lg text-[#f9edc2]">CHEESE</p>
                                    </div>

                                    {/* 선 */}
                                    <div className="h-30 border-l-1 border-[#000000] opacity-30"></div>

                                    {/* 원 */}
                                    <div className="w-6 h-6 border border-gray-400 rounded-full bg-white flex items-center justify-center mb-5">
                                        <div className="w-2/3 h-2/3 border border-gray-400 rounded-full bg-[#008e3c]"></div>
                                    </div>

                                    {/* 설명 */}
                                    <p className="text-center text-sm">
                                        {selectedMenu.more[0].desc.split("\n").map((line, index) => (
                                            <span key={index}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center w-1/3">
                                    {/* 이미지 */}
                                    <div className="w-40 h-40 border-0 rounded-full bg-[#008e3c] flex flex-col items-center justify-center gap-4">
                                        <img src={sauce} alt="sauce" className="w-1/2" />
                                        <p className="text-lg text-[#f9edc2]">sauce</p>
                                    </div>

                                    {/* 선 */}
                                    <div className="h-30 border-l-1 border-[#000000] opacity-30"></div>

                                    {/* 원 */}
                                    <div className="w-6 h-6 border border-gray-400 rounded-full bg-white flex items-center justify-center mb-5">
                                        <div className="w-2/3 h-2/3 border border-gray-400 rounded-full bg-[#008e3c]"></div>
                                    </div>

                                    {/* 설명 */}
                                    <p className="text-center text-sm">
                                        {selectedMenu.more[1].desc.split("\n").map((line, index) => (
                                            <span key={index}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center w-1/3">
                                    {/* 이미지 */}
                                    <div className="w-40 h-40 border-0 rounded-full bg-[#008e3c] flex flex-col items-center justify-center gap-2">
                                        <img src={vegetable} alt="vegetable" className="w-1/2" />
                                        <p className="text-lg text-[#f9edc2]">vegetable</p>
                                    </div>

                                    {/* 선 */}
                                    <div className="h-30 border-l-1 border-[#000000] opacity-30"></div>

                                    {/* 원 */}
                                    <div className="w-6 h-6 border border-gray-400 rounded-full bg-white flex items-center justify-center mb-5">
                                        <div className="w-2/3 h-2/3 border border-gray-400 rounded-full bg-[#008e3c]"></div>
                                    </div>

                                    {/* 설명 */}
                                    <div>
                                        <p className="text-center text-sm">
                                            {selectedMenu.more[2].desc.split("\n").map((line, index) => (
                                                <span key={index}>
                                                    {line}
                                                    <br />
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-100px]">
                    <img src={tip_bottom} alt="tip bottom" />
                    <div className="flex flex-col absolute right-6 bottom-6 w-2/5 h-3/4 bg-[#ffffff] border-0 rounded-2xl p-4 gap-3">
                        <h4 className="text-m flex flex-row gap-2 text-[#008e3c] font-bold "><div className="border-2 border-[#008e3c] rounded-full w-6 h-6 text-center text-sm">?</div>더 많은 레시피가 궁금하신가요?</h4>
                        <p className="text-sm text-gray-400">지금 바로 서브웨이 유튜브를 검색해보세요 ! <br/> 다양한 주문 TIP이 가득합니다. </p>
                        <button className="bg-[#008e3c] py-2 border-0 rounded-xl text-[#ffffff]">서브웨이 유튜브 바로가기 〉</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderGuide