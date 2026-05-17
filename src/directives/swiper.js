// src/directives/swiper.js
import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
    mounted(el, binding) {
        // el – это элемент с v-swiper (общий контейнер)
        const swiperEl = el.querySelector('.swiper');
        if (!swiperEl) {
            console.warn('Swiper: элемент с классом .swiper не найден');
            return;
        }

        const swiper = new Swiper(swiperEl, {
            modules: [Pagination, Navigation],
            direction: binding.value?.direction || 'horizontal',
            loop: binding.value?.loop || false,
            pagination: {
                el: el.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: el.querySelector('.swiper-button-next'),
                prevEl: el.querySelector('.swiper-button-prev'),
            },
        });
        console.log('Слайдер создан:', swiper);
    }
};