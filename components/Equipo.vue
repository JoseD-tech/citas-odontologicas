<script setup>
    const el = ref(null)
    const { width, height } = useElementSize(el)
</script>

<template>
    <div ref="el">
        <h3 class="font-bold text-3xl text-gray-700 uppercase text-center">Nuestro Equipo</h3>
        <div>
           <Swiper 
            :slidesPerView="width < 500 ? 1 : 3" 
            :spaceBetween="30" 
            :slidesPerGroup="width < 500 ? 1 : 3"
            :pagination="{clickable: true,}"
            :modules="[SwiperPagination]"
            >
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="px-4 py-6 rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-20">
                <div>
                    <div class="shadow-xl rounded-xl">
                        <img class="rounded-xl" src="https://images.ctfassets.net/s5uo95nf6njh/646bVsndbSoJf5AomEG4pX/17a607f575c18ac484bc568606b6bea2/evan-you-thumbnail.jpg?w=300&fm=jpg" alt="">
                    </div>
                    <div class="rounded-xl bg-white relative -top-20 w-3/4 mx-auto shadow-xl">
                        <div class="text-orange-500 mb-4">
                            <Icon name="mdi:facebook" size="30" class="mr-2"/>
                            <Icon name="mdi:instagram" size="30" class="mr-2"/>
                            <Icon name="mdi:twitter" size="30" class="mr-2"/>
                        </div>
                        <div>
                            <h5 class="font-bold text-xl text-gray-700 mb-2">Evan You</h5>
                            <span class="block border border-orange-500 w-1/2 mx-auto mb-4"></span>
                            <p class="text-gray-700/80">Creator Vue</p>
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