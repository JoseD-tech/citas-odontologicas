<script setup>

// Configuracion Slider de Dentistas
const el = ref(null)
const { width, height } = useElementSize(el)

//peticion de la API del landing
const { data } = await useFetch('https://endpointsco-production.up.railway.app/api/landingPage')

// Variables para guardar datos de los dentistas
const dentistas = data.value.Dentists

</script>

<template >
    <div ref="el" id="odontologos">
        <h3 class="font-bold text-3xl text-gray-700 uppercase text-center">Nuestros Odontologos</h3>
        <div>
            <Swiper :slidesPerView="width < 500 ? 1 : 3" :spaceBetween="30" :slidesPerGroup="width < 500 ? 1 : 3"
                :pagination="{ clickable: true, }" :modules="[SwiperPagination]">

                <swiper-slide class="my-20" v-for="dentista in dentistas" :key="dentista"> 
                    <div
                        class="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-md shadow-[#3fade4]  md:max-w-sm rounded-xl">
                        <div class="pb-6">
                            <div class="flex flex-wrap justify-center">
                                <div class="flex justify-center w-full">
                                    <div class="relative">
                                        <img :src="dentista.UrlPicture"
                                            class="dark:shadow-xl border-[#3fade4] rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]" />
                                    </div>
                                </div>
                            </div>
                            <div class="mt-24 text-center">
                                <h3 class="mb-1 text-2xl font-bold leading-normal text-black">
                                    {{ dentista.FullName }}</h3>
                                <div class="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                                    <div class="text-sm font-bold tracking-wide text-[#3fade4] font-mono">
                                        Dentista</div>
                                </div>

                            </div>
                            <div class="pt-6 mx-6 mt-6 text-center border-t border-[#3fade4] ">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full px-6">
                                        <p class="mb-4 font-light leading-relaxed">
                                           {{dentista.ProfesionalDescription}}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </swiper-slide>

            </Swiper>
        </div>

    </div>
</template>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>