<template>
    <NuxtLink 
      class="w-80 p-5 duration-300 vehicle-card rounded-lg"
       :to="dynamicUrl(vehicle)"
    >
        <img 
          :src="vehicle['Image URL']"
          alt=""
          class=" w-"
        >
        <h3 class="font-bold text-xl " >
          {{ vehicle.Marca }}
          {{ vehicle.Modelo }}
        </h3>
        <div class=" mt-5 flex gap-2 flex-col">
          <span class="text-sm">Desde</span>
          <p class="font-bold text-2xl">{{ FORMATCURRENCY.format(vehicle.Price) }}</p>
        </div>
        <NuxtLink 
          class="button mt-4"
          :to="dynamicUrl(vehicle)"
        >
          Ver Mas
        </NuxtLink>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { Car } from '~/Types/VehiclesTypes';
import { useVehicleUrl } from '~/composables/useVehicleUrl'
import { FORMATCURRENCY } from '~/composables/useCurrency';

// Use the composable
const { generateVehicleUrl } = useVehicleUrl();

const dynamicUrl = (item: Car)=>{
  return generateVehicleUrl(item.Marca, item.Modelo, '2024')
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  vehicle: Car;
}>();
</script>

<style scoped>

.vehicle-card:hover{

  background: #ffffff;
  box-shadow:  -20px 20px 60px #d9d9d9,
             20px -20px 60px #ffffff;
}

</style>