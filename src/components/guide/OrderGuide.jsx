import { useState, useEffect } from "react";
import cheese from '../../assets/guide/cheese.png'
import sauce from '../../assets/guide/sauce.png'
import vegetable from '../../assets/guide/vegetable.png'
import tip_bottom from '../../assets/guide/tip_bottom.png';
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
                desc: '달콤하게 즐기고 싶다면\n스윗어니언+마요네즈!\n스테이크의 맛을 즐기고 싶다면 \n 후추만 톡톡!'
            },
            {
                desc: '토마토, 오이를 빼면 \n 고기의 풍미를 즐길 수 있습니다.'
            }
        ]
    },
    {
        name: "로스트 치킨",
        want: "건강한 한 끼를 원하신다면?",
        desc: "담백하게 구운 닭가슴살과 신선한 야채의 조화\n기름기가 적어 부담 없이 가볍고 든든한 한 끼!\n다양한 소스를 추가해 나만의 건강한 샌드위치를 즐겨보세요.",
        img: 'src/assets/guide/roasted.png',
        more: [
            { desc: "허니 머스타드를 추가하면 \n 달콤한 감칠맛이 UP!" },
            { desc: "할라피뇨와 사우스웨스트 소스를 더하면 \n 매콤한 맛을 즐길 수 있습니다." },
            { desc: "양상추와 오이를 추가하면 \n 더욱 신선한 한 입을 경험할 수 있어요." }
        ]
    },
    {
        name: "써브웨이 클럽",
        want: "든든한 한 끼를 원하신다면?",
        desc: "칠면조, 햄, 로스트 비프가 어우러진 클래식한 조합\n깔끔하고 담백한 맛으로 언제 어디서나 부담 없이 즐길 수 있어요.\n취향에 맞게 토핑과 소스를 더해 나만의 클럽 샌드위치를 만들어보세요.",
        img: 'src/assets/guide/subwayclub.png',
        more: [
            { desc: "랜치 소스를 추가하면 \n 더욱 부드러운 맛을 느낄 수 있습니다." },
            { desc: "스파이시하고 싶다면 \n 사우스웨스트 소스를 추천!" },
            { desc: "양파와 피망을 더하면 \n 아삭한 식감이 살아납니다." }
        ]
    }
]

function OrderGuide() {
    const [selectedMenu, setSelectedMenu] = useState(menu[0]); // 기본 선택된 메뉴
    // const [desc, setDesc] = useState(selectedMenu.more[0])
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleMenuClick = (menuItem) => {
        setSelectedMenu(menuItem); // 버튼 클릭 시 메뉴 변경
    };

    const handleSelectChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        handleMenuClick(menu[selectedIndex]);
    };

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
            {windowWidth >= 1024 ? (
                <section className="w-full h-[180vh] bg-[#ececec] relative">
                    <h1 className="text-5xl font-bold text-center py-28 text-[#008e3c]">주문 TIP</h1>
                    <div className="w-3/5 mx-auto max-2xl:w-4/5 max-xl:w-5/6">
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
                            <div className="flex mb-14 w-full h-80">
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
                                <div className="flex w-full h-auto absolute gap-10 -top-12 left-70 max-lg:left-40">
                                    <div className="flex flex-col items-center w-1/4">
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
                                    <div className="flex flex-col items-center w-1/4">
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
                                    <div className="flex flex-col items-center w-1/4">
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
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-120px]">
                        <img src={tip_bottom} alt="tip bottom" />
                        <div className="flex flex-col relative lg:absolute right-6 bottom-6 w-2/5 h-3/4 bg-[#ffffff] border-0 rounded-2xl p-4 gap-6 max-2xl:w-3/5 max-2xl:gap-1">
                            <h4 className="text-m flex flex-row gap-2 text-[#008e3c] font-bold "><div className="border-2 border-[#008e3c] rounded-full w-6 h-6 text-center text-sm">?</div>더 많은 레시피가 궁금하신가요?</h4>
                            <p className="text-sm text-gray-400">지금 바로 서브웨이 유튜브를 검색해보세요 ! <br /> 다양한 주문 TIP이 가득합니다. </p>
                            <button className="bg-[#008e3c] py-2 border-0 rounded-xl text-[#ffffff] hover:bg-[#006a25] transition-all duration-200">서브웨이 유튜브 바로가기 〉</button>
                        </div>
                    </div>
                </section>
            ) : (
                <>
                    <section className="w-full  bg-[#ececec] relative">
                        <h1 className="text-5xl font-bold text-center py-28 text-[#008e3c]">주문 TIP</h1>
                        <div className="w-3/5 mx-auto max-2xl:w-4/5 max-xl:w-5/6">
                            {/* 버튼 영역 */}
                            <select
                                className="w-full mx-auto h-16 bg-[#f3c716] flex rounded-3xl mb-20 text-center text-2xl text-[#ffffff] px-6 appearance-none bg-[url('@assets/arrow/bottom.png')] bg-no-repeat bg-[length:40px_20px] bg-[position:calc(100%-20px)_center] max-sm:bg-[length:30px_15px]"
                                onChange={handleSelectChange}
                                value={selectedMenu.name} // 현재 선택된 메뉴를 반영
                            >
                                {menu.map((item, index) => (
                                    <option
                                        key={index}
                                        value={item.name}
                                        className="text-left bg-[#f3c716] text-[#008e3c] text-xl py-2 px-4 hover:bg-[#e0b514]"
                                    >
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* 선택된 버튼에 해당하는 설명 */}
                        <div className="flex flex-col mx-auto justify-center">
                            {/* 기본 설명 */}
                            <div className="mb-10 w-2/3 max-sm:w-[82vw] h-80 mx-auto flex justify-center">
                                <div className="text-center max-sm:text-left">
                                    <h2 className="text-3xl mb-6">{selectedMenu.want}</h2>
                                    <h2 className="text-3xl font-bold text-[#008e3c] mb-10">{selectedMenu.name}</h2>
                                    <p className="mt-2 text-gray-700 whitespace-pre-line">{selectedMenu.desc}</p>
                                    <div className="w-full mt-4 mx-auto">
                                        <img src={selectedMenu.img} alt="메뉴 이미지" />
                                    </div>
                                </div>
                            </div>
                            {/* 추가 팁 */}
                            <div className="mt-40 ml-10 flex flex-col relative max-lg:ml-4 max-lg:mt-64 max-sm:mt-40">
                                <div className="flex flex-col text-[#008e3c]">
                                    <p>더 맛있게 즐기는</p>
                                    <h2 className="text-5xl font-bold">TIP</h2>
                                </div>
                                <div className="flex flex-col w-full h-auto gap-10 top-40 left-20 max-lg:left-40">
                                    {[{ img: cheese, label: "CHEESE", desc: selectedMenu.more[0].desc },
                                    { img: sauce, label: "sauce", desc: selectedMenu.more[1].desc },
                                    { img: vegetable, label: "vegetable", desc: selectedMenu.more[2].desc },
                                    ].map((item, index) => (
                                        <div key={index} className="mt-10 flex items-center w-full">
                                            {/* 이미지 */}
                                            <div className="w-30 h-30 max-sm:w-[30vw] max-sm:h-[30vw] border-0 rounded-full bg-[#008e3c] flex flex-col items-center justify-center gap-4">
                                                <img src={item.img} alt={item.label.toLowerCase()} className="w-1/2" />
                                                <p className="text-lg text-[#f9edc2]">{item.label}</p>
                                            </div>

                                            {/* 선 */}
                                            <div className="w-30 border-t-1 border-[#000000] opacity-30 max-sm:w-12"></div>

                                            {/* 원 */}
                                            <div className="w-6 h-6 border border-gray-400 rounded-full bg-white flex items-center justify-center">
                                                <div className="w-2/3 h-2/3 border border-gray-400 rounded-full bg-[#008e3c]"></div>
                                            </div>

                                            {/* 설명 */}
                                            <p className="text-left text-sm ml-4">
                                                {item.desc.split("\n").map((line, lineIndex) => (
                                                    <span key={lineIndex}>
                                                        {line}
                                                        <br />
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-full relative h-[300px] mt-60 md:mt-40">
                            <img src={tip_bottom} alt="tip bottom" className="max-lg:h-[40vw] max-md:h-[40vw] max-sm:h-[60vw]" />
                            <div className="flex flex-col absolute right-6 bottom-6 w-2/5 h-3/4 bg-[#ffffff] border-0 rounded-2xl p-4 gap-3 max-2xl:w-3/5 max-2xl:gap-1 max-lg:right-[20%] max-lg:gap-6 max-lg:h-3/4 top-[10vh] max-md:gap-3 max-md:h-4/5 max-sm:gap-8 max-sm:w-[70vw] max-sm:h-[20vh] max-sm:right-16 max-sm:top-[5vh]">
                                <h4 className="text-m flex flex-row gap-2 text-[#008e3c] font-bold "><div className="border-2 border-[#008e3c] rounded-full w-6 h-6 text-center text-sm">?</div>더 많은 레시피가 궁금하신가요?</h4>
                                <p className="text-sm text-gray-400">지금 바로 서브웨이 유튜브를 검색해보세요 ! <br /> 다양한 주문 TIP이 가득합니다. </p>
                                <button className="bg-[#008e3c] py-2 border-0 rounded-xl text-[#ffffff] ">서브웨이 유튜브 바로가기 〉</button>
                            </div>
                        </div>
                    </section>
                </>
            )}

        </>
    )
}

export default OrderGuide