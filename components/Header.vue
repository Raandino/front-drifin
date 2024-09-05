<template>
    <header class="px-8 bg-white h-20 flex items-center fixed w-full shadow-lg">
        <nav class="flex w-full justify-between items-center">
            <img 
                :src="logo" 
                alt=""
                class=" w-28 h-fit"
            >
            <ul class="flex gap-4">
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
            <button class="button">
                <NuxtLink to="/simula">
                    Simula tu credito 
                </NuxtLink> 
            </button>

        </nav>
    </header>
</template>

<script setup lang="ts">

const logo = 'https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/6686e0809fc7157f5c5238bc_Logo%20drifin-01%201-p-500.png'

</script>

<style scoped>

</style>