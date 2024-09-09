<template>
    <div class="h-[3000px]">
        <InfoSection 
            title="La elección inteligente para conductores exigentes"
            subtitle="Descubre por qué somos la mejor opción para conductores de apps y taxis."
            button-text="Simula tu Crédito"
            :cards="CARDS"
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

</script>

<style scoped>

</style>