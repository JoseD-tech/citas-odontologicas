<script setup>

const open = ref(false)

const LinkNav = [
    {
        title: 'Inicio',
        to: '/'
    },
    {
        title: 'Sobre Nosotros',
        to: '#nosotros'
    },
    {
        title: 'Horario de Atencion',
        to: '#atencion'
    },
    {
        title: 'Odontologos',
        to: '#odontologos'
    },
    {
        title: 'Contáctanos',
        to: '#contacto'
    },
]

const menuOpen = () => {
    open.value = !open.value
}

</script>

<template>
    <div class="py-4 px-4 sm:px-20 sm:flex justify-between items-center bg-white fixed top-0 z-10 w-full">
        <NuxtLink to="/" style="border-bottom: none;" class="flex items-center">
            <img src="/logo.png" alt="Logo Empresa" class="h-14">
            <h1 class="ml-2 font-bold font-sans text-xl uppercase text-[#3fade4]">ODONTOARIAS</h1>
        </NuxtLink>

        <div @click="menuOpen()" class="sm:hidden absolute right-5 top-5 cursor-pointer text-[#3fade4]">
            <Icon :name="`${open ? 'mi:close' : 'mi:drag'}`" size="40px"/>
        </div>

        <nav>
            <ul class="bg-white px-4 mt-4 sm:mt-0 sm:px-0 sm:flex sm:flex-row absolute sm:static sm:w-auto w-full top-25 left-0 duration-500 ease-in" :class="[open ? 'left-0 ' : 'left-[-100%]']">
                <li class="sm:mr-8 py-4 sm:py-0 text-white text-xl font-medium"
                    v-for="(nav, key) in LinkNav" :key="key">
                    <NuxtLink :to="nav.to" class="border-b-2 border-transparent text-black/90 font-light font-sans hover:text-[#3fade4] hover:border-[#3fade4] transition-all ease-in-out duration-500">{{ nav.title }}</NuxtLink>
                </li>
                <li class="sm:mr-8 py-4 sm:py-0 text-white text-xl font-medium">
                    <NuxtLink to="/auth/login" class="border-b-2 border-transparent text-black/90 font-light font-sans hover:text-[#3fade4] hover:border-[#3fade4] transition-all ease-in-out duration-500">Ingresar</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>



</style>
