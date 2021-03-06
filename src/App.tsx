import { lazy, Suspense, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

// custom components
import NavBar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Menu from './components/layout/menu';
import BasicModal from './components/layout/modal';
import Notification from './components/layout/Notification';
import LoadingCircular from './components/layout/progress';
import Search from './components/pages/Search';

const Home = lazy(() => import('./components/pages/Home'));
const Cart = lazy(() => import('./components/pages/Cart'));
const NotFound = lazy(() => import('./404'));

// global state
import { productsActions } from './store/products';

function App(): JSX.Element {
    const dispatch = useDispatch();
    const { getProducts } = productsActions;

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <Suspense fallback={<LoadingCircular />}>
            {createPortal(<BasicModal />, document.getElementById('modal-wrapper')! as HTMLDivElement)}
            {createPortal(<Menu />, document.getElementById('menu-wrapper')! as HTMLDivElement)}
            {createPortal(<Notification />, document.getElementById('notification-wrapper')! as HTMLDivElement)}
            <NavBar />
            <div style={{ minHeight: '85vh' }}>
                <Routes>
                    <Route path='/' element={<Navigate to='/home' replace={true} />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </Suspense>
    );
}

export default App;
