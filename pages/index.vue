<template>
    <div>
        <header class="h-screen flex items-center justify-center flex-col">
            <div class="grid sm:grid-cols-2 gap-4 justify-center content-center px-10">
                <div class="self-center justify-self-center">
                    <div>
                        <h2 class="text-4xl font-bold text-gray-700 mb-8">WE ARE READY TO <br> BOOST YOUR BUSINESS!</h2>
                        <p class="mb-8 font-normal text-lg text-gray-600">We are truly a cost-effective partner which
                            delivers high-quality products for amazingly reasonable prices.</p>
                        <button
                            class="rounded-md bg-orange-500 py-2 px-4 text-white font-bold hover:shadow-md hover:bg-white hover:text-orange-500 border hover:border-orange-500/50 hover:shadow-orange-500/50 transition-all duration-300 ease-in-out">Our
                            Services</button>
                    </div>
                </div>
                <div class="hidden sm:block self-center justify-self-center">
                    <img src="@/assets/img/desing1.png" alt="Imagen" class="h-50 mx-auto">
                </div>
            </div>

            <div class="absolute bottom-0 left-0 right-0 h-28"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                    style="height: 100%; width: 100%;">
                    <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style="stroke: none; fill: #ff6600;"></path>
                </svg>
            </div>
        </header>
        
        <main class="w-11/12 mx-auto">
            <Nosotros />
            <Servicios />
            <Equipo />
            <Contacto />
        </main>

        <footer class="mt-10 py-4 px-10">
            <div class="grid sm:grid-cols-4 gap-4">
                <div class="col-span-2">
                    <p>No se enfrentará a un menú telefónico ridículamente largo cuando nos llame. Su correo electrónico no irá a la bandeja de entrada de AREA 51, para que nunca más lo vean ni lo escuchen. En EYSS, brindamos el mismo servicio excepcional que queremos experimentar nosotros mismos.</p>
                </div>
                <div>
                    <h5 class="text-lg font-bold text-gray-700 mb-4">Contactos</h5>
                    <p class="mb-4">
                        <Icon name="flag:ve-4x3" size="20" class="mr-2"/>
                        0414-5454545
                    </p>
                    <p>correo@gmail.com</p>
                </div>
                <div>
                    <h5 class="text-lg font-bold text-gray-700 mb-4">Siguenos</h5>
                    <ul class="flex text-orange-500">
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <Icon name="mdi:twitter" size="30" class="mr-2"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p class="text-center mt-10">&copy; Sinapsys. Todos los derechos reservados.</p>
        </footer>

    </div>
</template>
