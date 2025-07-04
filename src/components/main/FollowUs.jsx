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
                <h1 className="text-[80px] text-[#018c3b] font-extrabold max-sm:text-6xl">Follow Us</h1>
            </header>

            {/* content */}
            <div className="w-full flex justify-center">
                <div className="grid grid-cols-6 gap-30 max-lg:grid-cols-5 max-lg:grid-rows-7 max-md:grid-cols-4 max-md:grid-rows-8 max-sm:grid-cols-2 max-sm:grid-rows-4">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            onMouseOver={() => setHoveredIndex(index)}
                            onMouseOut={() => setHoveredIndex(null)}
                            className={`squre w-[170px] h-[170px]   cursor-pointer transition-transform duration-300
                                max-lg:w-[110px] max-lg:h-[110px] max-sm:w-[130px] max-sm:h-[130px]
                                ${
                                hoveredIndex === index ? 'scale-110' : ''
                            }`}
                        >
                            <img
                                src={img}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FollowUs;
