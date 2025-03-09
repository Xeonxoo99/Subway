import egg_slice from '@assets/main/egg_slice.png'
import chicken_slice from '@assets/main/chicken_slice.png'
import Rotisserie_Barbecue_Chicken from '@assets/main/Rotisserie_Barbecue_Chicken.png'
import Italian_bmt from '@assets/main/Italian_bmt.png'
import egg_mayo from '@assets/main/egg_mayo.png'
import Ham from '@assets/main/Ham.png'

function BestItem() {
    return (
        <>
            <div className="w-full h-screen bg-[#fcdc6a]">
                {/* 제목 섹션 */}
                <div className="text-center pt-[40px] pb-[80px]">
                    <h1 className="text-[80px] text-[#018c3b] font-extrabold">Best Item</h1>
                    <h3 className="text-[20px]">서브웨이의 인기제품을 소개합니다</h3>
                </div>

                {/* 버튼 섹션 */}
                <div className="flex justify-center gap-10">
                    <button className="w-44 border-2 border-[#009132] rounded-full px-6 py-2 bg-[#018c3b] text-[#fcdc6a]">클래식</button>
                    <button className="w-44 border-2 border-[#009132] rounded-full px-6 py-2 text-[#018c3b]">프레쉬 & 라이트</button>
                    <button className="w-44 border-2 border-[#009132] rounded-full px-6 py-2 text-[#018c3b]">프리미엄</button>
                    <button className="w-44 border-2 border-[#009132] rounded-full px-6 py-2 text-[#018c3b]">아침메뉴</button>
                </div>

                {/* 메뉴 섹션 1 */}
                <div className='best-item-content flex justify-center gap-10 mt-12'>
                    <div className='flex flex-col text-center'>
                        <img src={egg_slice} alt="egg_slice" />
                        <p>Egg Slice</p>
                        <h2>에그 슬라이스</h2>
                    </div>
                    <div className='flex flex-col text-center'>
                        <img src={chicken_slice} alt="chicken_slice" />
                        <p>Chicken Slice</p>
                        <h2>치킨 슬라이스</h2>
                    </div>
                    <div className='flex flex-col text-center'>
                        <img src={Rotisserie_Barbecue_Chicken} alt="Rotisserie_Barbecue_Chicken" />
                        <p>Rotisserie Barbecue Chicken</p>
                        <h2>로티세리 바비큐 치킨</h2>
                    </div>
                </div>
                {/* 메뉴 섹션 2 */}
                <div className='best-item-content flex justify-center gap-10 mt-12'>
                    <div className='flex flex-col text-center'>
                        <img src={Italian_bmt} alt="Italian_bmt" />
                        <p>Italian B.M.T™️ SUBPICK</p>
                        <h2>에그 슬라이스</h2>
                    </div>
                    <div className='flex flex-col text-center'>
                        <img src={egg_mayo} alt="egg_mayo" />
                        <p>Egg Mayo</p>
                        <h2>치킨 슬라이스</h2>
                    </div>
                    <div className='flex flex-col text-center'>
                        <img src={Ham} alt="Ham" />
                        <p>Ham</p>
                        <h2>햄</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestItem