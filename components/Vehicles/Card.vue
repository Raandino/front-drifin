<template>
  <NuxtLink 
    class="w-80 p-5 duration-300 vehicle-card rounded-lg flex flex-col justify-between"
    :to="`/vehicles/${vehicle.slug}`"

  >
      <img 
        :src="vehicle.image_url"
        alt=""
        class="mb-2 h-44"
        :class="{'animate-pulse bg-slate-300 rounded-sm': !dataIsValid}"
      >
      <h3 
        class="font-bold text-xl  " 
        :class="{'animate-pulse bg-slate-300 rounded-sm h-7': !dataIsValid}"
      >
        {{ dataIsValid ? vehicle.brand + ' ' + vehicle.model : '' }}
      </h3>
      <div 
        class="mt-5 flex gap-2 flex-col"
      >
        <span 
          class="text-sm w-1/3 h-5"
          :class="{'animate-pulse bg-slate-300 rounded-sm': !dataIsValid}"
        >
          {{ dataIsValid ? 'Desde' : '' }}
        </span>
        <p 
          class="font-bold text-2xl h-8"
          :class="{'animate-pulse bg-slate-300 rounded-sm': !dataIsValid}"
        >
          {{ dataIsValid ? FORMATCURRENCY.format(vehicle.price) : '' }}
        </p>
      </div>
      <NuxtLink 
        class="button mt-4 h-[52px]"
        :to="`/vehicles/${vehicle.slug}`"
        :class="{'animate-pulse bg-slate-300 rounded-sm hover:bg-slate-300': !dataIsValid}"
      >
        {{ dataIsValid ? 'Ver Mas' : '' }}
      </NuxtLink>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { VehicleFields }  from '~/Types/VehiclesTypes';
import { FORMATCURRENCY } from '~/composables/useCurrency';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  vehicle: VehicleFields;
}>();




const dataIsValid = computed(() => {
  return (
    !!props.vehicle.brand &&
    !!props.vehicle.model &&
    !!props.vehicle.price &&
    !!props.vehicle.image_url
  );
});





</script>

<style scoped>

.vehicle-card:hover{

  background: #ffffff;
  box-shadow:  -20px 20px 60px #d9d9d9,
             20px -20px 60px #ffffff;
}

</style>