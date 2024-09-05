<template>
    <div class="h-[3000px]">
        <h1>Catalogo vehiculos</h1>

        <ul>
            <li 
                v-for="(item, index) in vehicles" 
                :key="index"
            >
                <NuxtLink 
                    :to="item.attributes.brand+'-'+item.attributes.model "
                    class=" underline" 
                >
                    {{ item.attributes.brand  }} {{ item.attributes.model }}
                </NuxtLink>
            </li>
        </ul>

        {{ vehicles }}



    </div>
</template>

<script setup lang="ts">

//Fetch Vehicles
const { data: vehicles } = await useFetch('https://strapi-drifin-eh5tr.ondigitalocean.app/api/vehicles/')



</script>

<style scoped>

</style>