<template>
    <section 
        class="py-10 px-8 flex justify-center bg-white"
    >
       <main class="w-full max-w-7xl flex flex-col gap-5 justify-between lg:flex-row">
            <div class="flex flex-col justify-center">
                <h2 
                    class="text-xl md:text-2xl font-bold text-center mb-4"
                >
                {{ title }}
                </h2>
                <p
                    class="text-sm text-center"
                >
                    {{ subtitle }}
                </p>
                <NuxtLink 
                    class="button mt-3"
                    to="/simula"
                >
                    {{ buttonText }}
                </NuxtLink>
            </div>
            <div class="lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-3 flex flex-col  w-full items-center" >
                <article 
                    v-for="(card, index) in cards" 
                    :key="index"
                    class="bg-lightGray p-5 rounded-2xl max-w-72 lg:max-w-full 
                    h-full"
                >
                    <img
                        :src="card.imgUrl" 
                        alt="Decoration Image"
                        class=" h-12 w-12"
                    >
                    <h3 class="font-bold">{{ card.title }}</h3>
                    <p>{{ card.subtitle }}</p>
                </article>
            </div>
       </main>
    </section>
</template>

<script setup lang="ts">
type Card = {
    imgUrl: string,
    title: string,
    subtitle: string,
}

type Cards = Card[];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  title: string;
  subtitle?: string;
  buttonText: string;
  cards: Cards;
}>();

</script>

<style scoped>

</style>