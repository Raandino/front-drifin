<template>
    <section
        class="bg-white py-8 flex justify-center items-start px-8 "
    >
       <main
        class="max-w-7xl flex w-full gap-8 lg:justify-between flex-col lg:flex-row justify-center"
       >


        <!-- <div class="h-[768px] w-[672px] animate-pulse bg-slate-300 rounded-sm"/> -->
    
        <PhotosCarrusel 
            :images="imagesForSlider"
        />

       <article class="w-fit flex flex-col justify-between">
            <div>
                <BreadCrumb 
                    first-level-text="Vehiculos"
                    secondt-level-text="Kaiyi KYE5 1.5L MT LUX"
                />
                <h1
                    class="my-5 text-darkGray text-3xl font-bold"
                >
                    {{ vehicle?.fields.brand }} {{  vehicle?.fields.model }}
                </h1>
                <p
                    class="text-base text-darkGray"
                >
                    {{vehicle?.fields.description}}
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
                        {{ FORMATCURRENCY.format(vehicle?.fields.price || 0) }}
                    </p>
                </div>

                <MDC
                    :value="vehicle?.fields.features" 
                    class="detailMarkdown my-5"
                />
            </div>

            <a
                v-if="vehicle?.fields.technical_sheet"
                class="button w-full"
                :href="vehicle?.fields.technical_sheet"
                target="_blank"
            > 
                Ficha tecnica
            </a>


       </article>
       </main>
    </section>
</template>

<script setup lang="ts">
    import { FORMATCURRENCY } from '~/composables/useCurrency';
    import type { Vehicle } from '~/Types/VehiclesTypes';
    
    const route = useRoute();

    console.log(route.params.slug)

    const vehicle = ref<Vehicle>()
    const imagesForSlider = ref<string[]>([])
    // const isDataLoaded = ref(false)
    
    onMounted(async() => {
        try {
            const response = await fetch(`https://backend-bff-drifin-a5dgg.ondigitalocean.app/vehicles/findBySlug?slug=${route.params.slug}`);
            const result: Vehicle = await response.json();
            vehicle.value = result

           result.fields.slide.forEach((i)=>{
            imagesForSlider.value.push(i.url)
           })
            //console.log(result);
        } catch (error) {
            //redirect to 404 page
            console.error('Failed to fetch vehicles:', error);
        }

    });



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