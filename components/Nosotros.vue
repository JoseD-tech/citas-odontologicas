<script setup>
import { useContenido } from '@/store/store'

const cards = ref(useContenido().cardAbout)

</script>

<template>
    <section class="my-20">
        <div class="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 gap-4">
            <div class="self-center justify-self-center order-2 sm:order-1">
                <img src="@/assets/img/about.png" alt="About">
            </div>
            <div class="self-center justify-self-center">
                <h2 class="text-3xl mb-8 font-bold uppercase text-gray-700">Sobre Nosotros</h2>
                <p class="text-gray-600 font-normal text-lg text-justify">En Sinapsys, nuestro objetivo es ayudar a las empresas a tener éxito aprovechando el poder de la tecnología, la personalización y la empatía. Entendemos que cada empresa es única, por lo que adaptamos nuestras soluciones para satisfacer sus necesidades individuales. Nuestro equipo de profesionales experimentados cuenta con una amplia experiencia en el desarrollo y la ejecución de proyectos innovadores que impulsan el éxito.</p>
            </div>
        </div>

        <div class="mt-10 grid sm:grid-cols-3 gap-5">
            <Card v-for="(card, key) in cards" :key="key" :icon="card.icon" :title="card.title" :text="card.text"></Card>
        </div>
        
    </section>

</template>