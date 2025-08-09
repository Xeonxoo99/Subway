import { useState } from "react";

function FollowUs() {
    // 이미지 경로 자동 불러오기 (src/assets 폴더 내의 png 파일만)
    const images = Object.values(
        import.meta.glob('@assets/main/followus/*.png', { eager: true })
    ).map((module) => module.default);

    // 확대 상태 관리
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="w-full pt-40 pb-32 bg-[#f0f0f0] overflow-hidden">
            {/* 타이틀 */}
            <header className="text-center pt-[40px] pb-[80px] max-sm:pb-[60px]">
                <h1 className="text-[80px] text-[#018c3b] font-extrabold max-sm:text-6xl mb-12">Follow Us</h1>
            </header>

            {/* content */}
            <div className="w-full flex justify-center">
                <div className="grid grid-cols-2 max-sm:gap-8 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-20">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`overflow-hidden squre w-[10vw] h-[10vw] cursor-pointer 
                                max-lg:w-[15vw] max-lg:h-[15vw]    max-sm:w-[34.21vw] max-sm:h-[34.21vw]
                                `}
                        >
                            <img
                                key={index}
                                onMouseOver={() => setHoveredIndex(index)}
                                onMouseOut={() => setHoveredIndex(null)}
                                src={img}
                                alt={`Image ${index + 1}`}
                                className={`w-[10vw] h-[9.5vw] transition-transform duration-300 max-lg:w-[15vw] max-lg:h-[15vw] max-sm:w-[34.21vw] max-sm:h-[34.21vw] ${
                                hoveredIndex === index ? 'scale-110' : ''
                            }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FollowUs;
