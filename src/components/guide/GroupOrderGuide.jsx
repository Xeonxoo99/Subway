import menuList from '../../assets/guide/menulist.png';
import call from '../../assets/guide/call.png';
import pickUp from '../../assets/guide/pickup.png';

// 데이터는 한 곳에서 관리하는 것이 효율적입니다.
const guideSteps = [
  {
    number: 1,
    icon: menuList,
    alt: '메뉴 리스트 아이콘',
    title: '메뉴 선택',
    description: '샌드위치 10개 이상 주문 시 또는 원하는 단체 메뉴를 선택하세요',
  },
  {
    number: 2,
    icon: call,
    alt: '전화 아이콘',
    title: '매장 문의',
    description: '단체주문은 가까운 매장 또는 고객 센터(02-797-5036)로 문의·주문해 주세요. ※ 최소 1일 전 문의',
  },
  {
    number: 3,
    icon: pickUp,
    alt: '픽업 아이콘',
    title: '매장 픽업',
    description: '주문 약속 날짜, 시간에 매장에서 픽업하세요',
  },
];

function GroupOrderGuide() {
  return (
    <div className="w-full bg-white pt-60 pb-52 px-4 max-md:pt-40 max-sm:pt-[80vw]">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#008e3c] mb-16 md:mb-24">
        단체주문 이용방법
      </h1>

      {/* ## 데스크톱용 레이아웃 (768px 이상에서만 보임) ## */}
      <div className="hidden md:block w-full max-w-4xl mx-auto">
        <div className='flex flex-col gap-6'>
          
          {/* --- 아이콘 영역 --- */}
          <div className="flex justify-between w-[85%] mx-auto px-4">
            {guideSteps.map(step => (
              <img key={step.number} className='w-10 h-10' src={step.icon} alt={step.alt} />
            ))}
          </div>

          {/* --- 숫자 및 가로선 영역 --- */}
          <div className='relative flex justify-between w-[85%] mx-auto'>
            {guideSteps.map(step => (
              <div key={step.number} className="z-10 border-2 border-[#008e3c] bg-white rounded-full w-14 h-14 text-3xl flex items-center justify-center">
                {step.number}
              </div>
            ))}
            {/* 가로선 */}
            <div className='w-full mx-auto absolute top-1/2 -translate-y-1/2 -z-0 border-t-2 border-[#008e3c]' />
          </div>

          {/* --- 타이틀 영역 --- */}
          <div className='flex justify-between mt-7 w-[95%] mx-auto px-8'>
            {guideSteps.map(step => (
              <div key={step.number} className='text-3xl text-[#008e3c] font-bold'><h2>{step.title}</h2></div>
            ))}
          </div>

          {/* --- 설명 영역 --- */}
          <div className='flex text-center justify-between mt-4 gap-8'>
            {guideSteps.map(step => (
              <div key={step.number} className='w-1/3 text-gray-500 break-keep'><p>{step.description}</p></div>
            ))}
          </div>

        </div>
      </div>

      {/* ## 모바일용 레이아웃 (768px 미만에서만 보임) ## */}
      <div className="block md:hidden relative w-full max-w-5xl mx-auto">
        {/* 세로선 */}
        <div className="absolute top-0 left-7 w-0.5 h-[55vh] bg-[#008e3c] -z-0" />
        
        <div className="flex flex-col h-[70vh] gap-24">
          {guideSteps.map((step) => (
            <div key={step.number} className="flex items-start  gap-6">
              {/* 숫자 영역 */}
              <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#008e3c] bg-white text-3xl shrink-0">
                {step.number}
              </div>
              
              {/* 아이콘 + 텍스트 콘텐츠 영역 */}
              <div className="flex flex-col items-start gap-2 pt-1">
                <img className="w-10 h-10 mb-2" src={step.icon} alt={step.alt} />
                <h2 className="text-2xl text-[#008e3c] font-bold">{step.title}</h2>
                <p className="text-gray-600 break-keep">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GroupOrderGuide;