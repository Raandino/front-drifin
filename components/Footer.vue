<template>
    <footer class="flex w-full bg-[#f7f6f6] items-center px-8 py-8">
        <nav class="flex items-center justify-between w-full">
            <img
                class="w-40 h-auto" 
                :src="logo" 
                alt=""
            >
            <p>© 2024 güil Mobility Ventures</p>
            <NuxtLink to="https://www.facebook.com/people/DriFin/61558801722947/">
                <img :src="fb_logo" alt="Facebook logo">
            </NuxtLink>
        </nav>
    </footer>
</template>

<script setup lang="ts">

const logo = 'https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/667b0abce9e62e6be2749713_DRIFIN_R_D_Ola_1_-_2024__1_-removebg-preview-p-500.png'

const fb_logo = 'https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a4a9512aae0_product%20icon-1.svg'

</script>

<style scoped>

</style>