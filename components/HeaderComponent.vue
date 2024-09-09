<template>
    <header class="px-8 bg-white py-5 lg:py-0 lg:h-20 flex items-center fixed w-full shadow-lg justify-center flex-col">
        <nav class="flex w-full justify-between items-center max-w-7xl">
            <img 
                :src="logo" 
                alt=""
                class=" w-28 h-fit"
            >
            <ul class="hidden lg:flex gap-4">
                <li>
                    <NuxtLink  to="/">
                        Inicio
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/vehicles">
                        Catalogo
                    </NuxtLink>
                </li>
            </ul>
            <button 
                data-collapse-toggle="navbar-default" 
                type="button" 
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-darkGray rounded-lg lg:hidden hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary duration-300 active:scale-105"  aria-controls="navbar-default" aria-expanded="false"
                :class="{'bg-secondary': navBarOpen}"
                @click="handleClick()"
            >
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <button class="button hidden lg:block">
                <NuxtLink to="/simula">
                    Simula tu credito 
                </NuxtLink> 
            </button>
        </nav>
        <ul 
            class="lg:hidden flex flex-col w-full gap-2 h-0  duration-300 overflow-hidden [&>*]:delay-75 [&>*]:opacity-0 [&>*]:duration-300"
            :class="{' !h-36 !py-5 overflow-visible [&>*]:opacity-100': navBarOpen }"
        >
                <li>
                    <NuxtLink  to="/">
                        Inicio
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/vehicles">
                        Catalogo
                    </NuxtLink>
                </li>
                <li>

                        <NuxtLink class="button lg:hidden w-full" to="/simula">
                            Simula tu credito 
                        </NuxtLink> 
                </li>
        </ul>
        
    </header>
</template>

<script setup lang="ts">

const logo = 'https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/6686e0809fc7157f5c5238bc_Logo%20drifin-01%201-p-500.png'

const navBarOpen = ref(false)

const handleClick = ()=>{
    console.log(navBarOpen.value)
    navBarOpen.value =  !navBarOpen.value
}

</script>

<style scoped>

</style>