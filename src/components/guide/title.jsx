import bgImg from '../.././assets/guide/bg.png'

function Title (){
    return (
        <>
            <section className="w-full relative">
                <img src={bgImg} alt="배경 이미지" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ffffff] text-center flex flex-col gap-4">
                    <h4 className='text-2xl'>How to use</h4>
                    <h1 className='text-6xl font-extrabold'>이용 방법</h1>
                </div>
            </section>
        </>
    )
}

export default Title;