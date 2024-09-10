<template>
    <div class="">
        <HeroSection 
            title="# Mejora tus ingresos con el **auto perfecto para ti**" 
            subtitle="Tenemos precios y tasas diseñadas para maximizar tus ingresos"
            button-text="Simula tu Crédito"    
            img-url="https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfc903206180ed375e67e_KYX3%20NEGRO.webp"
            partners-text="Pensado para conductores de:"
            :partners-imgs="[
                'https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66304753db4a5cb9df08da6f_cabify-p-500.png',
                'https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/6630475390f97e6d3ba33f73_uber-p-500.png',
                'https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66304753db4a5cb9df08daac_didi.png'
                ]"
        />
        <InfoSection 
            title="La elección inteligente para conductores exigentes"
            subtitle="Descubre por qué somos la mejor opción para conductores de apps y taxis."
            button-text="Simula tu Crédito"
            :cards="CARDS"
        />

        <CatalogSection 
            title="Gasolina"
            :vehicles="VEHICLES"
        />

       <CTASection 
        title="Ahorra en cada kilómetro. ¡Haz el cambio a un vehículo eléctrico!"
        subtitle="Deja atrás los altos costos de combustible"
        button-text="Simula tu Crédito"
       />
    </div>
</template>

<script setup lang="ts">
const CARDS = [
    { 
        imgUrl: 'https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66304bfc580c07147cceda53_100-percent-p-500.png',
        title: 'Cumple con la ley de Uber',
        subtitle: 'Elige el auto correcto para tu negocio'
    },
    { 
        imgUrl: 'https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66304bfc5ce3d054b3c15079_dollar-p-500.png',
        title: 'Cuotas semanales claras y convenientes',
        subtitle: 'Gestiona tus finanzas sin sorpresas ni complicaciones'
    },
     { 
        imgUrl: 'https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66304bfc4ef70da3b7d772fd_money-bag-p-500.png',
        title: 'Acceso a tarifas Comfort',
        subtitle: 'Mejora tus tarifas por viajes con los modelos '
    },
    { 
        imgUrl: 'https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66304bfc9cd98233fad49cbb_contract-p-500.png',
        title: 'Transparencia total en cada acuerdo para tu confianza',
        subtitle: 'Sin letra chica en nuestros contratos'
    }
]

const VEHICLES = [
    {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfc903206180ed375e67e_KYX3%20NEGRO.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
    },
    {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfb32b35bbb1a86fd4fe0_color%20gris%20(2)-p-2000.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
  },
  {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfc903206180ed375e67e_KYX3%20NEGRO.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
    },
    {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfb32b35bbb1a86fd4fe0_color%20gris%20(2)-p-2000.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
  },
  {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfc903206180ed375e67e_KYX3%20NEGRO.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
    },
    {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfb32b35bbb1a86fd4fe0_color%20gris%20(2)-p-2000.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
  },
  {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfc903206180ed375e67e_KYX3%20NEGRO.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
    },
    {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfb32b35bbb1a86fd4fe0_color%20gris%20(2)-p-2000.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
  },
  {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfc903206180ed375e67e_KYX3%20NEGRO.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
    },
    {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfb32b35bbb1a86fd4fe0_color%20gris%20(2)-p-2000.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
  },
  {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfc903206180ed375e67e_KYX3%20NEGRO.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
    },
    {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfb32b35bbb1a86fd4fe0_color%20gris%20(2)-p-2000.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
  },
  {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfc903206180ed375e67e_KYX3%20NEGRO.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
    },
    {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfb32b35bbb1a86fd4fe0_color%20gris%20(2)-p-2000.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
  },
  {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfc903206180ed375e67e_KYX3%20NEGRO.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
    },
    {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfb32b35bbb1a86fd4fe0_color%20gris%20(2)-p-2000.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
  },
  {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfc903206180ed375e67e_KYX3%20NEGRO.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
    },
    {
        "Fuel Type": "Gasolina",
        "Marca": "Jetour",
        "Price": 27990000,
        "Active": true,
        "Modelo": "T2 2.0T GDI AWD 7DCT LIMITED",
        "Image URL": "https://cdn.prod.website-files.com/66303de5f07ba23fd3946c07/66cdfb32b35bbb1a86fd4fe0_color%20gris%20(2)-p-2000.webp",
        "Slug": "JETOUR-T2-2.0T-GDI-AWD-7DCT-LIMITED"
  },
]

</script>

<style scoped>

</style> 