<script setup>
import { useContenido } from '@/store/store'

const servicios = ref(useContenido().Servicios)
const servicio = ref(servicios._rawValue[0])


const servicioData = (id) => {
    servicio.value = servicios._rawValue[id]
}

</script>


<template>
    <section class="my-20">
        <h2 class="text-3xl font-bold text-gray-700 text-center mb-6 sm:hidden">Nuestros servicios</h2>
        <div class="grid sm:grid-cols-2 gap-4">
            <div class="bg-gray-500/10 grid grid-rows-[repeat(8, minmax(0, 1fr))]">
                <button class="w-full grid grid-cols-4 gap-x-4 col-span-4" v-for="(servicio, key) in servicios" :key="key" @click="servicioData(key)">
                    <img :src="`/servicios-icon/${servicio.icon}.png`" :alt="servicio.title" class="self-center justify-self-center col-start-1 col-end-2 h-24">
                    <span class="col-start-2 col-end-5 self-center" style="justify-self:left;">{{ servicio.title }}</span>
                </button>
            </div>
            <div class="self-center justify-self-center py-4">
                <h3 class="text-3xl font-bold text-gray-700 mb-2 capitalize">{{ servicio.title }}</h3>
                <p class="text-base font-light text-orange-500 mb-6">{{ servicio.span }}</p>
                <p class="font-normal text-lg text-gray-600/80 text-justify">{{ servicio.text }}</p>
                <img src="@/assets/img/services.png" alt="Servicios" class="mx-auto">
            </div>
        </div>
    </section>
</template>