<template>
  <div class="flex gap-5 flex-wrap justify-around">
    <VehiclesCard
        v-for="(item,index) in vehicles" 
        :key="index" 
        :vehicle="item"
      />
  </div>
</template>

<script setup lang="ts">
import type { Car } from '~/Types/VehiclesTypes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  vehicles: Car[];
}>();
</script>

