import Title from '../../components/guide/title'
import StepsToUse from '../../components/guide/StepsToUse'
import OrderGuide from '../../components/guide/OrderGuide'
import GroupOrderGuide from '../../components/guide/GroupOrderGuide' // 이미지 불러오기

function Guide (){
    return(
        <>
            <Title></Title>
            <StepsToUse></StepsToUse>
            <OrderGuide></OrderGuide>
            <GroupOrderGuide></GroupOrderGuide>
        </>
    )
}

export default Guide;