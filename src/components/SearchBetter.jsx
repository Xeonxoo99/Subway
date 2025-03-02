import searchBetter_menu from '@assets/searchBetter_menu.png'


function SearchBetter() {
    return (
        <>
            <div className="w-full h-screen">
                <div className='h-1/2 pt-24 relative flex flex-col items-center'>
                    <span className='text-9xl absolute top-16 -z-10'>SEARCH</span>
                    <img className='w-2xs absolute top-32' src={searchBetter_menu} alt="searchBetter_menu" />
                    <span className='text-9xl absolute -bottom-4'>BETTER</span>
                </div>
                <div className='flex flex-col items-center '>
                    <p className='text-center pt-14'>우리는 더 좋은 써브웨이를 위해 <br/> 매일 노력합니다.</p>
                    <button className="mt-14 w-44 h-16 border-none bg-[#009132] px-6 py-2 text-[#ffffff]">BRAND STORY</button>
                </div>
            </div>
        </>
    )
}

export default SearchBetter;