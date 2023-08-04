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

                <p class="font-bold text-center text-2xl mb-5 uppercase">
                    Crear Una Cuenta
                </p>

                <div class="bg-white shadow w-full rounded-lg text-left">
                    <div class="px-5 py-7">

                        <FormKit type="text" placeholder="Ingresa Tus Nombres" label="Nombres"
                            label-class="font-semibold text-md text-gray-700 pb-1 block"
                            input-class="border rounded-lg px-3 py-2 mt-1 mb-5 text-md w-full text-black" />

                        <FormKit type="text" placeholder="Ingresa Tus Apellidos" label="Apellidos"
                            label-class="font-semibold text-md text-gray-700 pb-1 block"
                            input-class="border rounded-lg px-3 py-2 mt-1 mb-5 text-md w-full text-black" />

                        <FormKit type="number" placeholder="Ingresa Tu Número de Cédula" label="Número de Cédula"
                            label-class="font-semibold text-md text-gray-700 pb-1 block"
                            input-class="border rounded-lg px-3 py-2 mt-1 mb-5 text-md w-full text-black" />

                        <FormKit type="text" placeholder="Ingresa Tu Correo" label="Correo"
                            label-class="font-semibold text-md text-gray-700 pb-1 block"
                            input-class="border rounded-lg px-3 py-2 mt-1 mb-5 text-md w-full text-black" />

                        <FormKit type="number" placeholder="Ingresa Tu Número de Teléfono" label="Número de Teléfono"
                            label-class="font-semibold text-md text-gray-700 pb-1 block"
                            input-class="border rounded-lg px-3 py-2 mt-1 mb-5 text-md w-full text-black" />

                        <FormKit type="text" placeholder="Ingresa Tu Dirección" label="Dirección"
                            label-class="font-semibold text-md text-gray-700 pb-1 block"
                            input-class="border rounded-lg px-3 py-2 mt-1 mb-5 text-md w-full text-black" />

                        <FormKit type="number" placeholder="Ingresa Tu Contraseña" label="Contraseña"
                            label-class="font-semibold text-md text-gray-700 pb-1 block"
                            input-class="border rounded-lg px-3 py-2 mt-1 mb-5 text-md w-full text-black" />

                        <FormKit type="number" placeholder="Vuelve A Ingresar Tu Contraseña" label="Confirma Tu Contraseña"
                            label-class="font-semibold text-md text-gray-700 pb-1 block"
                            input-class="border rounded-lg px-3 py-2 mt-1 mb-5 text-md w-full text-black" />

                        <div class="text-right hover:underline text-[#39C1FC]">
                            <a href="#">Olvido Su Contraseña</a>
                        </div>
                    </div>

                    <div class="px-4 mb-2">
                        <button
                            class="uppercase block w-full p-4 text-lg text-white hover:shadow-sm  hover:shadow-[#39C1FC] border hover:border-[#39C1FC] hover:bg-white hover:text-[#39C1FC] rounded-full bg-[#39C1FC] focus:outline-none transition-all ease-in-out duration-300">Crear Cuenta</button>
                    </div>

                    <hr>
                    <div class="px-4 pb-2 pt-4">
                        <NuxtLink to="/auth/login"
                            class="text-center uppercase block w-full p-4 text-lg text-[#39C1FC] hover:shadow-sm  hover:shadow-[#39C1FC] border border-[#39C1FC] hover:border-[#39C1FC] hover:bg-white hover:text-[#39C1FC] rounded-full bg-white focus:outline-none transition-all ease-in-out duration-300">
                            Ya Tienes Cuenta. Click Aqui</NuxtLink>
                    </div>

                </div>

            </div>

        </div>
    </section>
</template>