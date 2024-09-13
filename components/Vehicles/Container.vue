<template>
  <div class="flex gap-5 flex-wrap justify-around">
    <VehiclesCard
        v-for="(item,index) in filteredVehicles" 
        :key="index" 
        :vehicle="item.fields"
      />
  </div>
</template>

<script setup lang="ts">
import type { ApiResponse }  from '~/Types/VehiclesTypes';

const props = defineProps<{
  fuel:string,
  vehicles: ApiResponse;
}>();

const filteredVehicles = computed(() => {
  return ( props.vehicles.filter(vehicle=>vehicle.fields.fuel == props.fuel)
  );
});

</script>

