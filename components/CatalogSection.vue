<template>
    <section class="bg-white py-8 flex justify-center items-center px-8">
        <main class="max-w-7xl flex w-full gap-8 lg:justify-between flex-col justify-center ">
            <h2 class="text-xl md:text-2xl font-bold flex-1 flex items-center justify-start">
                {{ title }}
            </h2>
            <VehiclesContainer
                :fuel="fuel"
                :vehicles="vehicles"
            />
        </main>
    </section>
</template>

<script setup lang="ts">
import type { ApiResponse }  from '~/Types/VehiclesTypes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  title: string;
  fuel: 'electric' | 'gasoline' | 'hybrid'| 'diesel';
  vehicles: ApiResponse;
}>();
</script>