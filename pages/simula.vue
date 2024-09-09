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

// Create a ref for the iframe
const iframe = ref<HTMLIFrameElement | null>(null);
console.log(iframe)

// Function to handle the message received from the iframe
const handleMessage = (event: MessageEvent) => {
  if (event.data && event.data.type === 'HEIGHT_CHANGED') {

    
    // Add 100px to the received height
    const newHeight = event.data.height + 100;

    // Resize the iframe to the new height
    if (iframe.value) {
      iframe.value.style.height = `${newHeight}px`;
    }
  }
};

// Set up the event listener when the component is mounted
onMounted(() => {
  console.log('Component mounted');

  // Listen for the message event from the iframe
  window.addEventListener('message', handleMessage);

  // Clean up the event listener when the component is unmounted
  return () => {
    window.removeEventListener('message', handleMessage);
  };
});

</script>




<style scoped>

    iframe{
        border:none; 
        height: 100%;
    }

</style>