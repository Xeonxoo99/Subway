import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../routes/layout/Layout';
import Guide from '../routes/pages/Guide';

const router = createBrowserRouter([
    {
        path: '/', // 기본 경로
        element: <Layout />, // Layout 컴포넌트 렌더링
        children: [
            {
                path: 'guide', // /guide 경로
                element: <Guide />, // Guide 컴포넌트 렌더링
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
