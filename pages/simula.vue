<template>
    <div>
        <iframe 

            src="https://drifin-dev.web.app/"
            frameborder="0"
             width="100%" 
              ref="iframe"
            ></iframe>

    </div>
</template>

<script setup lang="ts">


onMounted(()=>{
    console.log('Hola')
    const content = document.querySelector('#root')
    console.log(content)
})

</script>




<style scoped>

    iframe{
        border:none; 
        min-height: 100vh;
    }

</style>