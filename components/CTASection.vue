<template>
    <section class="bg-lightGray py-8 flex justify-center items-center px-8">
        <main class="max-w-7xl flex w-full gap-8 lg:justify-between flex-col lg:flex-row justify-center ">
            <h2 class="text-xl md:text-2xl font-bold flex-1 text-center flex items-center justify-center">
                {{ title }}
            </h2>
            <div class="flex flex-col gap-4 w-full lg:w-2/4 items-center">
                <p class="text-sm text-center">
                    {{ subtitle }}
                </p>
                <NuxtLink 
                    class="button"
                    to="/simula"
                >
                    {{ buttonText }}
                </NuxtLink>
            </div>
        </main>
    </section>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  title: string;
  subtitle?: string; 
  buttonText: string;
}>();
</script>