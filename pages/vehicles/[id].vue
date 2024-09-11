<template>
    <section
        class="bg-white py-8 flex justify-center items-center px-8"
    >
       <main
        class="max-w-7xl flex w-full gap-8 lg:justify-between flex-col lg:flex-row justify-center"
       >
        <PhotosCarrusel 
            :images="imageUrls"
        />

       <article class="w-fit flex flex-col justify-between">
            <div>
                <BreadCrumb 
                    first-level-text="Combistión"
                    secondt-level-text="Kaiyi KYE5 1.5L MT LUX"
                />
                <h1
                    class="my-5 text-darkGray text-3xl font-bold"
                >
                    {{ brand }} {{  model }}
                </h1>
                <p
                    class="text-base text-darkGray"
                >
                    {{description}}
                </p>
                <div 
                    class="mt-5 flex gap-2"
                >
                    <span 
                    class="text-sm"
                    >
                    Desde
                    </span>
                    <p 
                    class="font-bold text-2xl h-8"
                    >
                        {{ FORMATCURRENCY.format(price) }}
                    </p>
                </div>

                <MDC
                    :value="features" 
                    class="detailMarkdown my-5"
                />
            </div>

            <button class="button w-full"> Ficha tecnica</button>


       </article>
       </main>
    </section>
</template>

<script setup lang="ts">
    import { FORMATCURRENCY } from '~/composables/useCurrency';
    // const {id}= useRoute().params


    const description = 'El KYE5 se presenta como una opción innovadora en el mundo automotriz, enfocada en ofrecer una conducción placentera y segura. Con un diseño vanguardista y una integración tecnológica avanzada, este sedán redefine lo que significa estar al volante. Explora nuevas posibilidades con el KYE5 de Kaiyi.'
   
    const price = 13490000
    const brand = 'Kaiyi'
    const model = 'KYE5 1.5L MT LUX'

    const features = '- Motor de 2.0 litros, potencia 251 HP.\n\n- Transmisión automática de 7 velocidades.\n\n- Cámara 360°, Radio Touch de 12,3″.\n\n- Control Crucero adaptativo.\n\n- SunRoof panorámico.'


    const imageUrls: string[] = [
  "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66d21b077c2e698c391a06f2_1-p-2600.webp",
  "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66d21b9ada5eca066fcebb25_A07--KAIYI-E5-30-Gray-p-500.webp",
  "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66e0491605114bd4a6863a96_AnyConv.com__5%20(1)-p-2600.webp",
  "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66d21dbbd88f93bc3573537d_KAIYI%20%20KYE5%20SUNROOF%202%20-p-500.webp",
  "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66d21e2bc097e3d8ee68a37d_KAIYI%20%20KYE5%20PANTALLA2-p-500.webp",

];


</script>

<style scoped>
.detailMarkdown{
    h1{
        @apply text-3xl
    }
    strong{
        @apply font-bold
    }

}

</style>