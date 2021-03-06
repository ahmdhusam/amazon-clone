// MUI components
import { styled } from '@mui/material/styles';

// swiper package
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Image = styled('img')(() => ({
    objectFit: 'cover',
    width: '100%',
    height: '100%'
}));

function dummyArr() {
    return Array.from(new Array(6));
}

export default function Landing() {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 10 * 1000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}>
                {dummyArr().map((_, index: number) => (
                    <SwiperSlide key={index}>
                        <Image src={`/imgs/slider-images/${index + 1}.jpg`} alt={'img' + (index + 1)} loading='lazy' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
