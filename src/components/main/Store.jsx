// import anyang from '@assets/main/store/anyang.png'
// import anyang_plaza from '@assets/main/store/plaza.png'
// import anyang_bumgye from '@assets/main/store/anyang_bumgye.png'
// import anyang_pch from '@assets/main/store/anyang_pch.png'

// import '../../App.css'

// function Store() {
//     return (
//         <section className="w-full h-screen flex flex-col items-center">
//             {/* 타이틀 영역 */}
//             <header className="text-center pt-[40px] pb-[80px]">
//                 <h1 className="text-[80px] text-[#018c3b] font-extrabold">Store</h1>
//                 <h3 className="text-[20px]">주변에 가까운 서브웨이 매장을 확인해 보세요!</h3>
//             </header>

//             {/* 매장 리스트 영역 */}
//             <article className="w-full">
//                 <div className="w-11/12 mx-auto flex gap-14">
//                     <article className="store-card">
//                         <img className="w-full h-[200px] object-cover" src={anyang} alt="안양 평촌학원가점" />
//                         <div className="store-details">
//                             <h4 className="text-xl text-[#018c3b] font-semibold">안양평촌학원가점</h4>
//                             <div className="flex flex-row">
//                                 <p className="store-label">주소</p>
//                                 <p className="store-value">경기 안양시 동안구 평촌대로 119</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">전화번호</p>
//                                 <p className="store-value">031-385-5027</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">운영시간</p>
//                                 <p className="store-value">매일 8:00 - 22:00</p>
//                             </div>
//                         </div>
//                     </article>

//                     <article className="store-card">
//                         <img className="w-full h-[200px] object-cover" src={anyang_plaza} alt="AK플라자금정점" />
//                         <div className="store-details">
//                             <h4 className="text-xl text-[#018c3b] font-semibold">AK플라자금정점</h4>
//                             <div className="flex flex-row">
//                                 <p className="store-label">주소</p>
//                                 <p className="store-value">경기 군포시 엘에스로 143</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">전화번호</p>
//                                 <p className="store-value">0507-1330-5476</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">운영시간</p>
//                                 <p className="store-value">매일 7:00 - 21:50</p>
//                             </div>
//                         </div>
//                     </article>

//                     <article className="store-card">
//                         <img className="w-full h-[200px] object-cover" src={anyang_bumgye} alt="안양범계점" />
//                         <div className="store-details">
//                             <h4 className="text-xl text-[#018c3b] font-semibold">안양범계점</h4>
//                             <div className="flex flex-row">
//                                 <p className="store-label">주소</p>
//                                 <p className="store-value">경기 안양시 동안구 시민대로 167</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">전화번호</p>
//                                 <p className="store-value">031-440-8490</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">운영시간</p>
//                                 <p className="store-value">매일 8:00 - 22:30</p>
//                             </div>
//                         </div>
//                     </article>

//                     <article className="store-card">
//                         <img className="w-full h-[200px] object-cover" src={anyang_pch} alt="안양평촌역점" />
//                         <div className="store-details">
//                             <h4 className="text-xl text-[#018c3b] font-semibold">안양평촌역점</h4>
//                             <div className="flex flex-row">
//                                 <p className="store-label">주소</p>
//                                 <p className="store-value">경기 안양시 동안구 관평로170번길</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">전화번호</p>
//                                 <p className="store-value">0507-1390-8490</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="store-label">운영시간</p>
//                                 <p className="store-value">매일 8:00 - 22:00</p>
//                             </div>
//                         </div>
//                     </article>


//                 </div>
//             </article>

//             {/* 버튼 영역 */}
//             <footer className="mt-14">
//                 <button className="btn-section">전체 매장보기</button>
//             </footer>
//         </section>
//     )
// }

// export default Store;

import anyang from '@assets/main/store/anyang.png'
import anyang_plaza from '@assets/main/store/plaza.png'
import anyang_bumgye from '@assets/main/store/anyang_bumgye.png'
import anyang_pch from '@assets/main/store/anyang_pch.png'

import '../../App.css'

function Store() {

    const store = [
        {
            img: anyang,
            store: '안양평촌학원가점',
            address: '경기 안양시 동안구 평촌대로 119',
            phone: '031-3850-5027',
            time: '매일 8:00 - 22:00'
        },
        {
            img: anyang_plaza,
            store: 'AK플라자금정점',
            address: '경기 군포시 엘에스로 143',
            phone: '0507-1330-5476',
            time: '매일 7:00 - 21:50'
        },
        {
            img: anyang_bumgye,
            store: '안양범계점',
            address: '경기 안양시 동안구 시민대로 167',
            phone: '031-440-8490',
            time: '매일 8:00 - 22:30'
        },
        {
            img: anyang_pch,
            store: '안양평촌역점',
            address: '경기 안양시 동안구 관평로170번길',
            phone: '0507-1390-8490',
            time: '매일 8:00 - 22:00'
        },
    ]

    return (
        <section className="w-full h-screen flex flex-col items-center">
            {/* 타이틀 영역 */}
            <header className="text-center pt-[40px] pb-[80px]">
                <h1 className="text-[80px] text-[#018c3b] font-extrabold">Store</h1>
                <h3 className="text-[20px]">주변에 가까운 서브웨이 매장을 확인해 보세요!</h3>
            </header>

            {/* 매장 리스트 영역 */}

            <article className="w-full">
                <div className="w-11/12 h-full mx-auto flex gap-14">
                    {
                        store.map((store) => (
                            <article key={store} className="w-1/4 h-5/6 bg-[#fce07f] cursor-pointer">
                                <img className="w-full h-1/2 object-cover" src={store.img} alt={store.store} />
                                <div className="store-details flex flex-col">
                                    <h4 className="text-xl text-[#018c3b] font-semibold">{store.store}</h4>
                                    <div className="flex flex-row">
                                        <p className="store-label">주소</p>
                                        <p className="store-value">{store.address}</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <p className="store-label">전화번호</p>
                                        <p className="store-value">{store.phone}</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <p className="store-label">운영시간</p>
                                        <p className="store-value">{store.time}</p>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </article>
            {/* 버튼 영역 */}
            <footer className="">
                <button className="btn-section">전체 매장보기</button>
            </footer>
        </section>
    )
}

export default Store;
