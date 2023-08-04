<script setup>
import axios from 'axios';


const form = reactive({
    email: '',
    password: ''
})



const login = async () => {
    await axios.post()
    console.log(form);
}

</script>

<template>
    <section class="min-h-screen flex items-stretch text-white ">
        <div class="lg:flex w-1/2 hidden bg-white bg-no-repeat bg-cover items-center">
            <div class="w-full px-24 z-10">
                <img src="../../public/logo-total.png" alt="">
            </div>
        </div>
        <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
            style="background: linear-gradient(to bottom, #bce6f5, #39C1FC);">
            <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
                style="background-image: url('../../public/logo-total.png');">
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div class="w-full py-6 z-20">

                <p class="text-gray-100 text-2xl uppercase">
                    Iniciar Sesion
                </p>
                <form action="" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                    <div class="pb-2 pt-4">
                        <input type="email" name="email" v-model="form.email" placeholder="Email"
                            class="block w-full p-4 text-lg rounded-sm bg-white text-black">
                    </div>
                    <div class="pb-2 pt-4">
                        <input class="block w-full p-4 text-lg rounded-sm bg-white text-black" type="password"
                            name="password" v-model="form.password" placeholder="Password">
                    </div>
                    <div class="text-right hover:underline text-white">
                        <a href="#">Olvido Su Contraseña</a>
                    </div>
                    <div class="my-4 px-4 pb-2 pt-4">
                        <button @click.prevent="login()"
                            class="uppercase block w-full p-4 text-lg text-[#39C1FC] hover:shadow-sm  hover:shadow-white rounded-full bg-white focus:outline-none transition-all ease-in-out duration-300">Iniciar</button>
                    </div>
                    <hr>
                    <div class="px-4 pb-2 pt-4">
                        <NuxtLink to="/auth/register"
                            class="uppercase block w-full border border-white p-4 text-lg text-white hover:shadow-md  hover:shadow-white rounded-full bg-transparent focus:outline-none transition-all ease-in-out duration-300 cursor-pointer">
                            Registrarse</NuxtLink>
                    </div>

                </form>
            </div>
        </div>
    </section>
</template>