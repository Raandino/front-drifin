<template>
    <div class="h-[3000px]">
        <h1>Catalogo vehiculos</h1>

        <ul>
            <li 
                v-for="(item, index) in vehicles" 
                :key="index"
            >
                <NuxtLink 
                  :to="dynamicUrl(item)" 
                  class="underline"
                >
                  {{ item.attributes.brand }}
                  {{ item.attributes.model }} 
                  2024
        </NuxtLink>
            </li>
        </ul>




    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useVehicleUrl } from '~/composables/useVehicleUrl'

interface CarAttributes {
  brand: string;
  model: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  year: string; // Assuming year is a string in the API
}

interface CarData {
  id: number;
  attributes: CarAttributes;
}

interface ApiResponse {
  data: CarData[];
}

// Use the composable
const { generateVehicleUrl } = useVehicleUrl();

// Create a ref to hold the fetched vehicles data
const vehicles = ref<CarData[]>([]);

const dynamicUrl = (item: CarData)=>{
  return generateVehicleUrl(item.attributes.brand, item.attributes.model, '2024')
}

onMounted(async () => {
  try {
    const response = await fetch('https://strapi-drifin-eh5tr.ondigitalocean.app/api/vehicles?populate=*');
    const result: ApiResponse = await response.json();
    vehicles.value = result.data;
  } catch (error) {
    console.error('Failed to fetch vehicles:', error);
  }
});

</script>

<style scoped>

</style>