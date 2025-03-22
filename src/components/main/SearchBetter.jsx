// import searchBetter_menu from '@assets/main/search/searchBetter_menu.png'
// import searchBetter_menu2 from '@assets/main/search/searchBetter_menu2.png'
// import searchBetter_menu3 from '@assets/main/search/searchBetter_menu3.png'

// function SearchBetter() {
//     return (
//         <>
//             <div className="w-full h-screen">
//                 <div className='h-1/2 pt-24 relative flex flex-col items-center'>
//                     <span className='text-9xl absolute top-16 -z-10'>SEARCH</span>
//                     <div className='img_wraper relative w-full h-full'>
//                         <div className='absolute left-[50%] translate-[-50%]'>
//                             <img className='w-2xs' src={searchBetter_menu} alt="searchBetter_menu" />
//                         </div>
//                     </div>
//                     <span className='text-9xl absolute -bottom-12'>BETTER</span>
//                 </div>
//                 <div className='flex flex-col items-center '>
//                     <p className='text-center pt-24'>우리는 더 좋은 써브웨이를 위해 <br/> 매일 노력합니다.</p>
//                     <button className="mt-14 w-44 h-16 border-none bg-[#009132] px-6 py-2 text-[#ffffff]">BRAND STORY</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SearchBetter;

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import searchBetter_menu from '@assets/main/search/searchBetter_menu.png';
import searchBetter_menu2 from '@assets/main/search/searchBetter_menu2.png';
import searchBetter_menu3 from '@assets/main/search/searchBetter_menu3.png';
import searchBetter_menu4 from '@assets/main/search/searchBetter_menu4.png';

gsap.registerPlugin(ScrollTrigger);

const images = [searchBetter_menu, searchBetter_menu2, searchBetter_menu3,searchBetter_menu4];

function SearchBetter() {
    const imgWrapperRef = useRef(null);
    const imgRef = useRef(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(imgRef.current, {
                y: 150, // 이미지가 내려가는 거리
                scrollTrigger: {
                    trigger: imgWrapperRef.current,
                    start: 'top 70%',
                    end: 'top 30%',
                    scrub: true,
                },
            });

            ScrollTrigger.create({
                trigger: imgWrapperRef.current,
                start: 'top 70%',
                end: 'top 30%',
                scrub: true,
                onUpdate: (self) => {
                    const imageIndex = Math.min(Math.floor(self.progress * images.length), images.length - 1);
                    setCurrentImage(imageIndex);
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full h-screen">
            <div className='h-1/2 pt-24 relative flex flex-col items-center'>
                <span className='text-9xl absolute top-16 -z-10'>SEARCH</span>
                <div ref={imgWrapperRef} className='img_wraper relative w-full h-full'>
                    <div className='absolute left-[50%] translate-x-[-50%]'>
                        <img ref={imgRef} className='w-2xs' src={images[currentImage]} alt="searchBetter_menu" />
                    </div>
                </div>
                <span className='text-9xl absolute -bottom-12'>BETTER</span>
            </div>
            <div className='flex flex-col items-center '>
                <p className='text-center pt-24'>우리는 더 좋은 써브웨이를 위해 <br/> 매일 노력합니다.</p>
                <button className="mt-14 w-44 h-16 border-none bg-[#009132] px-6 py-2 text-[#ffffff]">BRAND STORY</button>
            </div>
        </div>
    );
}

export default SearchBetter;