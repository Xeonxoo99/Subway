import { Outlet, useLocation } from 'react-router-dom'
import '../../App.css'
import Header from '../../components/Header'
import Video from '../../components/main/Video'
import Promotion from '../../components/main/Promotion'
import BestItem from '../../components/main/BestItem'
import SearchBetter from '../../components/main/SearchBetter'
import Offer from '../../components/main/Offer'
import Store from '../../components/main/Store'
import FollowUs from '../../components/main/FollowUs'
import Footer from '../../components/Footer'

function Layout() {
    const location = useLocation();

    // '/guide' 경로일 때만 `Guide` 페이지가 표시되므로 다른 컴포넌트는 숨김
    const isGuidePage = location.pathname === '/guide';

    return (
        <>
            <Header />
            {/* Guide 페이지가 아니면 기본 레이아웃 렌더링 */}
            {!isGuidePage && (
                <>
                    <Video />
                    <Promotion />
                    <BestItem />
                    <SearchBetter />
                    <Offer />
                    <Store />
                    <FollowUs />
                </>
            )}

            {/* Guide 페이지일 때는 'Guide'만 렌더링 */}
            <Outlet />

            <Footer />
        </>
    );
}


export default Layout;
