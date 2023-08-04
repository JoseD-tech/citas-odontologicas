<script setup>
const props = defineProps({
    icon: String,
    title: String,
    text: String,
})

const icon = ref(props.icon)
const title = ref(props.title)
const text = ref(props.text)
</script>

<template>
    <div>
        <div class="flex items-center justify-center mx-auto rounded-full bg-[#3fade4] text-white w-20 h-20">
            <Icon :name="icon" size="50px"/>
        </div>
        <div class="mt-4 text-center">
            <h3 class="text-2xl mb-2 uppercase font-bold text-gray-700">{{ title }}</h3>
            <p class="text-gray-600 font-normal">{{ text }}</p>
        </div>
    </div>
</template>