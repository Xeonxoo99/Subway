function FollowUs() {
    // 이미지 경로 자동 불러오기 (src/assets 폴더 내의 png 파일만)
    const images = Object.values(
        import.meta.glob('@assets/main/followus/*.png', { eager: true })
    ).map((module) => module.default);

    return (
        <div className="w-full h-screen bg-[#f0f0f0]">
            {/* 타이틀 */}
            <header className="text-center pt-[40px] pb-[80px]">
                <h1 className="text-[80px] text-[#018c3b] font-extrabold">Follow Us</h1>
            </header>

            {/* content */}
            <div className="flex justify-center">
                <div className="grid grid-cols-6 gap-16">
                    {images.map((img, index) => (
                        <div key={index} className="w-[130px] h-[130px] bg-white shadow-md">
                            <img
                                src={img}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FollowUs;
