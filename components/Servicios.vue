<script setup>
import { useContenido } from '@/store/store'

const servicios = ref(useContenido().Servicios)
const servicio = ref(servicios._rawValue[0])


const servicioData = (id) => {
    servicio.value = servicios._rawValue[id]
}

</script>


<template>
    <div class="my-20">
        <section id="atencion"
            class="my-20 flex flex-col w-full h-[600px] bg-cover bg-fixed bg-center flex justify-center items-center bg-img">
            <h1 class="text-white text-5xl font-semibold mt-20 mb-10 w-1/2 text-center">
                Sonrisas que inspiran confianza, cuidando tu salud bucal con pasión y experiencia
            </h1>
        </section>
        <div class="container mx-auto px-4">
            <div class="items-center flex flex-wrap">
                <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img alt="..." class="max-w-full rounded-lg shadow-lg"
                        src="https://images.pexels.com/photos/3845745/pexels-photo-3845745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div class="md:pr-12">
                        <div
                            class="text-[#3fade4] p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-[#3fade4]/80">
                            <Icon name="mi:clock" size="50" class="text-white" />
                        </div>
                        <h3 class="text-3xl font-semibold">Horario de atención </h3>
                        <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                            Estamos comprometidos con brindar el mejor cuidado dental a nuestros pacientes y adaptarnos a sus necesidades. Nuestro horario de atención está diseñado para ofrecerles la máxima conveniencia y flexibilidad.
                        </p>
                        <ul class="list-none mt-6">
                            <li class="py-2">
                                <div class="flex items-center">
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#3fade4] bg-[#3fade4]/60 mr-3">
                                            <Icon name="mi:calendar" size="30" class="text-white" />
                                        </span>
                                    </div>
                                    <div>
                                        <h4 class="text-blueGray-500">
                                            Lunes a viernes 9:00 a.m - 7:30 p.m
                                        </h4>
                                    </div>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="flex items-center">
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#3fade4] bg-[#3fade4]/60 mr-3">
                                            <Icon name="mi:calendar" size="30" class="text-white" />
                                        </span>
                                    </div>
                                    <div>
                                        <h4 class="text-blueGray-500">
                                            Sábado 9:00 a.m - 7:00 p.m
                                        </h4>
                                    </div>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="flex items-center">
                                    <div>
                                        <span
                                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#3fade4] bg-[#3fade4]/60 mr-3">
                                            <Icon name="mi:calendar" size="30" class="text-white" />
                                        </span>
                                    </div>
                                    <div>
                                        <h4 class="text-blueGray-500">Domingo 10:00 a.m - 2:00 p.m</h4>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.bg-img {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../assets/img/cta-bg.jpg");
}
</style>