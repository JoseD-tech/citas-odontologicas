<script setup>

const open = ref(false)

const LinkNav = [
    {
        title: 'Inicio',
        to: '/'
    },
    {
        title: 'Nosotros',
        to: ''
    },
    {
        title: 'Servicios',
        to: ''
    },
    {
        title: 'Equipo',
        to: ''
    },
    {
        title: 'Contacto',
        to: ''
    },
]

const menuOpen = () => {
    open.value = !open.value
}

</script>

<template>
    <div class="py-2 px-4 sm:px-20 sm:flex justify-between items-center bg-white fixed top-0 z-10 w-full">
        <NuxtLink to="/" style="border-bottom: none;" class="flex items-center">
            <img src="/logo.png" alt="Logo Empresa" class="h-14">
            <h1 class="ml-2 font-bold font-sans text-xl uppercase text-[#ff6600]">Sinapsys</h1>
        </NuxtLink>

        <div @click="menuOpen()" class="sm:hidden absolute right-5 top-5 cursor-pointer text-[#ff6600]">
            <Icon :name="`${open ? 'mi:close' : 'mi:drag'}`" size="40px"/>
        </div>

        <nav>
            <ul class="bg-white px-4 mt-4 sm:mt-0 sm:px-0 sm:flex sm:flex-row absolute sm:static sm:w-auto w-full top-25 left-0 duration-500 ease-in" :class="[open ? 'left-0 ' : 'left-[-100%]']">
                <li class="sm:mr-8 py-4 sm:py-0 text-white text-lg font-medium"
                    v-for="(nav, key) in LinkNav" :key="key">
                    <NuxtLink :to="nav.to" class="border-b-2 border-transparent text-black/90 font-light font-sans hover:text-[#ff6600] hover:border-[#ff6600] transition-all ease-in-out duration-500">{{ nav.title }}</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>

a.router-link-exact-active {
    color: #ff6600;
    border-bottom: 2px solid #ff6600;
}

</style>
