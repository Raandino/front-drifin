<template>
     <main class="rounded-lg w-full max-w-lg xl:max-w-2xl  m-auto">
        <Swiper
            :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            }"
            :space-between="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="w-full rounded-lg"
        >
            <swiper-slide
                v-for="(image, index) in images "
                :key="index"
                class="h-full"
            >
                <img
                    :src="image"
                    class="h-full w-full object-cover  aspect-square"
                >
                
            </swiper-slide>
        </Swiper>

        <Swiper
                :space-between="16"
                :slides-per-view="4"
                :free-mode="true"
                :watch-slides-progress="true"
                :modules="modules"
                class=" mt-4 cursor-pointer  rounded-lg"
                @swiper="setThumbsSwiper"
        >
            <swiper-slide
                v-for="(image, index) in images "
                :key="index"

                class="flex rounded-lg overflow-hidden  !h-20"
            >
                <img
                    :src="image"
                    class="hover:scale-105 h-full w-full duration-300 active:scale-110 object-cover"
                >
                
            </swiper-slide>
        </Swiper>
    </main>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  images: string[];
}>();



    const modules =[FreeMode, Navigation, Thumbs]


    const thumbsSwiper = ref(null);


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setThumbsSwiper = (swiper: any) => {
        thumbsSwiper.value = swiper;
    };




</script>

<style scoped>
.photo-thumbnail:hover{

background: #ffffff;
box-shadow:  -20px 20px 60px #d9d9d9,
           20px -20px 60px #ffffff;
}
</style>