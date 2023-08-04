<script setup>
useHead({
  title: 'Sinapsys',
  meta: [
    { name: 'description', content: 'Fundacion Tecnologica Sinapsys' },
    { charset: 'utf-8'}
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
  ],
  htmlAttrs: {
    lang: 'es'
  }
})
</script>

<template>
  <NuxtLayout />
</template>

<style>

html {
  scroll-behavior: smooth;
}

html::-webkit-scrollbar {
  width: 5px;
  height: 10px;
  background-color: transparent;
}

html::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #3fade4;
}

body {
  background-color: #fbfbfb;
}


</style>