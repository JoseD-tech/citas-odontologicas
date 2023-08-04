<template>
    <div>
        <NavBar />
        <header class="h-screen flex items-center justify-center flex-col">
            <div class="grid sm:grid-cols-2 gap-4 justify-center content-center px-10">
                <div class="self-center justify-self-center">
                    <div>
                        <h2 class="text-5xl font-bold text-gray-700 mb-8">Cuida De Tus Dientes Somos Expertos En Sonrisas
                        </h2>
                        <p class="mb-8 font-normal text-xl text-gray-600 capitalize">Somos un equipo de Odontológos buscamos
                            mejorar tu salud oral.</p>
                        <button
                            class="rounded-md bg-[#3fade4] py-2 px-14 text-white font-bold hover:shadow-md hover:bg-white hover:text-[#3fade4] border hover:border-[#3fade4] hover:shadow-[#3fade4] transition-all duration-300 ease-in-out">Ingresar</button>
                    </div>
                </div>
                <div class="hidden sm:block self-center justify-self-center">
                    <img src="@/assets/img/logo.png" alt="Imagen" class="h-96 mx-auto">
                </div>
            </div>

            <div class="absolute bottom-0 left-0 right-0 h-28"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                    style="height: 100%; width: 100%;">
                    <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style="stroke: none; fill: #3fade4;"></path>
                </svg>
            </div>
        </header>

        <main>
            <Nosotros class="w-11/12 mx-auto" />
            <Servicios />
            <Equipo class="w-11/12 mx-auto" />
            <Contacto class="w-11/12 mx-auto" />
        </main>

        <footer class="relative bg-blueGray-200 pt-8 pb-6">

            <div class="container mx-auto px-4">

                <hr class="my-6 border-blueGray-300" />
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © {{ date }} Lesly Herrera.
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>
