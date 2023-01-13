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
                <p class="text-gray-600 font-normal text-lg">We are a young global company that’s still full of
                    experience. With a young and dynamic team of developers, designers, marketers and project managers,
                    EYSS’s top management has more than 15 years of experience in developing solutions for industries
                    like construction, education, training, manufacturing and recycling, just to mention a few. Today,
                    EYSS is one of the most successful companies in the UK, Australia and Venezuela with customers all
                    over the world.</p>
            </div>
        </div>

        <div class="mt-10 grid sm:grid-cols-3 gap-5">
            <Card v-for="(card, key) in cards" :key="key" :icon="card.icon" :title="card.title" :text="card.text"></Card>
        </div>
        
    </section>

</template>