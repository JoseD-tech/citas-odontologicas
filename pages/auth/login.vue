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
                        <input type="email" name="email" id="email" placeholder="Email"
                            class="block w-full p-4 text-lg rounded-sm bg-white text-black">
                    </div>
                    <div class="pb-2 pt-4">
                        <input class="block w-full p-4 text-lg rounded-sm bg-white text-black" type="password" name="password"
                            id="password" placeholder="Password">
                    </div>
                <div class="text-right hover:underline text-white">
                    <a href="#">Olvido Su Contraseña</a>
                </div>
                <div class="px-4 pb-2 pt-4">
                    <button
                        class="uppercase block w-full p-4 text-lg text-[#39C1FC] hover:shadow-sm  hover:shadow-white rounded-full bg-white focus:outline-none">Iniciar</button>
                </div>

            </form>
        </div>
    </div>
</section>
</template>