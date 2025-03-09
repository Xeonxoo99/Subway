import { useState } from "react";

const steps = [
    {
        title: "주문하기",
        description: "나만의 스타일을 완성하는 단계!\n원하지 않는 야채는 빼고좋아하는 야채는 더하세요.\n오늘의 기분에 맞는 소스를 선택해주세요.",
        image1: "src/assets/guide/step1-1.png",
        image2: "src/assets/guide/step1-2.png",
    },
    {
        title: "빵 선택 (샐러드 선택 시 제외)",
        description: "매장에서 직접 구운 6가지 종류 중\n 고객님이 원하는 빵으로\n 추가비용 없이 선택 가능합니다.",
        image1: "src/assets/guide/step1-1.png",
        image2: "src/assets/guide/step1-2.png",
    },
    {
        title: "추가토핑 선택",
        description: "나만의 메뉴를 더욱 풍성하게 즐기세요.",
        image1: "src/assets/guide/step1-1.png",
        image2: "src/assets/guide/step1-2.png",
    },
    {
        title: "야채&소스 선택",
        description: "나만의 스타일을 완성하는 단계!\n원하지 않는 야채는 빼고 좋아하는 야채는 더하세요.\n오늘의 기분에 맞는 소스를 선택해주세요",
        image1: "src/assets/guide/step1-1.png",
        image2: "src/assets/guide/step1-2.png",
    },
    {
        title: "세트 선택",
        description: "세트로 구매하시면 할인혜택을 받으실 수 있습니다.\n 세트로 더욱 든든하고 알차게 즐기세요.",
        image1: "src/assets/guide/step1-1.png",
        image2: "src/assets/guide/step1-2.png",
    },
];

function StepsToUse() {
    const [num, setNum] = useState(0); // 현재 STEP 인덱스

    const nextStep = () => {
        if (num < steps.length - 1) setNum(num + 1);
    };

    const prevStep = () => {
        if (num > 0) setNum(num - 1);
    };

    return (
        <section className="usage_guide w-full h-screen pt-22">
            <h1 className="text-5xl font-bold text-center mb-22 text-[#008e3c]">써브웨이 이용방법</h1>
            <div className="w-3/5 mx-auto">
                <div className="flex justify-center items-center gap-20">
                    {/* 왼쪽 STEP 설명 */}
                    <div className="w-1/3 text-left flex flex-col gap-4">
                        <p className="text-[#008e3c] font-semibold">STEP {num + 1}</p>
                        <h2 className="text-3xl font-bold">{steps[num].title}</h2>
                        <hr className="w-28 my-10"/>
                        <p className="mt-2 text-gray-700 whitespace-pre-line">{steps[num].description}</p>
                        <div className="mt-6 flex gap-4">
                            <button onClick={prevStep} className="w-16 h-16 border-0 rounded-full bg-[#008e3c] text-[#ffffff] text-3xl" disabled={num === 0}>〈</button>
                            <button onClick={nextStep} className="w-16 h-16 border-0 rounded-full bg-[#008e3c] text-[#ffffff] text-3xl" disabled={num === steps.length - 1}>〉</button>
                        </div>
                    </div>

                    {/* 오른쪽 이미지 */}
                    <div className="w-2/3 flex items-center gap-6 relative">
                        <div className="bg-[#f3c716] opacity-30 w-80 h-80 border-0 rounded-full"></div>
                        <img src={steps[num].image1} alt="step 이미지" className="w-96 z-10 absolute -left-14" />
                        <img src={steps[num].image2} alt="step 추가 이미지" className="w-72 absolute -right-20" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StepsToUse;
