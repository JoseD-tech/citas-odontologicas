<script setup>
import { useContenido } from '@/store/store'

const cards = ref(useContenido().cardAbout)

</script>

<template>
    <section class="my-20" id="nosotros">
        <div class="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 gap-4">
            <div class="self-center justify-self-center order-2 sm:order-1">
                <img src="@/assets/img/banker-b.png" alt="About">
            </div>
            <div class="self-center justify-self-center">
                <h2 class="text-3xl mb-8 font-bold uppercase text-gray-700">Sobre Nosotros</h2>
                <p class="text-gray-600 font-normal text-lg text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempore sapiente dolores quasi veniam temporibus impedit est ea, esse repellendus possimus nemo quod totam et veritatis eligendi tempora perferendis sit illo! Officia nulla doloribus nobis itaque molestias pariatur beatae illo nihil minus harum, aliquam veniam voluptates optio quo consectetur odio?</p>
            </div>
        </div>

        <div class="mt-10 grid sm:grid-cols-3 gap-5">
            <Card v-for="(card, key) in cards" :key="key" :icon="card.icon" :title="card.title" :text="card.text"></Card>
        </div>
        
    </section>

</template>