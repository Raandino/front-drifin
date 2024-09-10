<template>
    <section class="py-10 px-8 flex justify-center  bg-lightGray">
        <main class="max-w-7xl w-full flex flex-col gap-14">
            <div class="flex justify-between gap-5 flex-col items-center lg:flex-row ">
                <article class=" ">
                    <MDC :value="title" class="headerMarkdown"/>
                    <p class=" mt-6 mb-2">{{ subtitle }}</p>
                    <NuxtLink 
                        class="button w-fit"
                        to="/simula"
                    >
                        {{ buttonText }}
                    </NuxtLink>
                </article>
                <img 
                    :src="imgUrl" 
                    alt="Decoration Image for Header "
                    class="w-[400px] md:w-[600px] xl:w-[800px] drop-shadow-cars"
                    >
            </div>
        </main>
    </section>
    <section class="w-full  px-8 flex flex-col items-center gap-5   bg-lightGray pb-10 rounded-b-full">
        <main class="max-w-7xl w-full justify-center">
            <h3 class="text-xl text-center">
                {{ partnersText }}
            </h3>
            <div class="flex justify-around w-full mt-6">
                <img 
                    v-for="(item,index) in partnersImgs" 
                    :key="index"
                    :src="item"
                    alt="Partner Logo"
                    class="w-16 md:w-24"
                >
            </div>
        </main>           
    </section>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  title: string;
  subtitle: string;
  buttonText:string;
  imgUrl:string;
  partnersText: string;
  partnersImgs: string[]
}>();

</script>

<style scss>

.headerMarkdown{
    h1{
        @apply text-3xl
    }
    strong{
        @apply font-bold
    }
}


</style>
