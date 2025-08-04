import bgImg from '../.././assets/guide/bg.png'

function Title (){
    return (
        <>
            <div className="w-full h-[30vw] overflow-hidden relative max-md:h-[50vw] max-sm:h-[70vw]">
                <img src={bgImg} alt="배경 이미지" className='w-full h-full object-cover' />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ffffff] text-center flex flex-col gap-4">
                    <h4 className='text-2xl'>How to use</h4>
                    <h1 className='text-6xl font-extrabold max-sm:text-4xl'>이용 방법</h1>
                </div>
            </div>
        </>
    )
}

export default Title;