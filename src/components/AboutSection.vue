<template>
    <!-- Nuestra Historia & Principios & About -->
    <div>
        <!-- Historia -->
        <section id="history" class="py-16 bg-gray-100" data-aos="fade-up">
            <div class="max-w-screen-lg mx-auto px-4 text-center mb-12" data-aos="fade-down">
                <h2 class="text-4xl font-bold text-purple-700">Nuestra Historia</h2>
            </div>
            <div class="max-w-screen-lg mx-auto px-4 md:flex md:justify-between gap-8">
                <p class="md:w-1/3 text-gray-700">
                    Nace a la raíz de la necesidad de crear soluciones tecnológicas e innovar en el mercado con
                    tendencia disruptivas automatizando procesos, mejorando la productividad y calidad en los servicios
                    a través de métricas que permiten la mejor toma de decisiones.


                </p>
                <div class="relative md:w-1/3 mx-auto w-full max-w-sm">
                    <img :src="historyImg" alt="" class="rounded-3xl w-full h-64 object-cover shadow-lg" />
                    <div
                        class="absolute -top-4 right-0 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-4xl md:text-5xl px-6 py-2 rounded-l-xl shadow-xl">
                        {{ history.year }}
                    </div>
                </div>
                <div class="md:w-1/3 text-gray-700">
                    <h3 class="text-xl font-semibold text-purple-700 mb-2">{{ history.title }}</h3>
                    <p>{{ history.subtitle }}</p>
                </div>
            </div>
        </section>

        <!-- Principios -->
        <section id="principios" class="bg-gray-100 py-16" data-aos="fade-up">
            <div class="max-w-screen-lg mx-auto px-4 text-center mb-12" data-aos="fade-down">
                <h2 class="text-4xl font-bold text-purple-700">Nuestros Principios</h2>
            </div>
            <div class="max-w-screen-lg mx-auto px-4 md:grid md:grid-cols-2 gap-12 mb-16">
                <div class="space-y-4" data-aos="fade-right">
                    <h3 class="text-2xl font-semibold text-purple-700">Misión</h3>
                    <p class="text-gray-700">Crear e innovar soluciones tecnológicas a la medida de nuestros clientes,
                        con tendencia de crecimiento y sostenibilidad.</p>
                    <img :src="missionIcon" alt="" class="h-20 mx-auto" />
                </div>
                <div class="space-y-4" data-aos="fade-left">
                    <h3 class="text-2xl font-semibold text-purple-700">Visión</h3>
                    <p class="text-gray-700">En el año 2027 será una empresa líder en la creación e innovación de
                        soluciones tecnológicas que superan las expectativas de nuestros clientes.</p>
                    <img :src="visionIcon" alt="" class="h-20 mx-auto" />
                </div>
            </div>
            <div class="max-w-screen-lg mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div v-for="(p, i) in principles" :key="i"
                    class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up">
                    <img :src="p.icon" :alt="p.name" class="h-16 mx-auto mb-4" />
                    <h4 class="text-lg font-semibold text-gray-800 text-center">{{ p.name }}</h4>
                </div>
            </div>
        </section>

        <!-- About / Education -->
        <section id="about" class="relative text-white mt-18 bg-[#111a3e] py-16" data-aos="fade-up">
            <div class="absolute inset-x-0 top-0 h-64 bg-gradient-to-br from-primary via-secondary blur-2xl opacity-20">
            </div>
            <div class="max-w-screen-lg mx-auto px-4 xl:px-16 md:grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div data-aos="flip-right" class="space-y-8">
                    <h2 class="text-4xl font-bold mb-8">My Education</h2>
                    <div v-for="e in education" :key="e.id"
                        class="flex items-center bg-[#111a3e] rounded-xl shadow-lg border border-[#1f1641] p-4">
                        <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png" alt=""
                            class="w-12 h-12 mr-4" />
                        <div>
                            <h3
                                class="text-xl font-semibold uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                {{ e.School }}</h3>
                            <p>{{ e.program }} – {{ e.year }}</p>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-right" class="space-y-8">
                    <h2 class="text-4xl font-bold mb-4">More <span
                            class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">About</span>
                        Me</h2>
                    <p class="text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit…</p>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="p-3 bg-[#111a3e] rounded-xl shadow-lg border border-[#1f1641] text-center">
                            <h3 class="text-3xl font-bold">+200</h3>
                            <p class="text-gray-300">Happy Client</p>
                        </div>
                        <div class="p-3 bg-[#111a3e] rounded-xl shadow-lg border border-[#1f1641] text-center">
                            <h3 class="text-3xl font-bold">+300</h3>
                            <p class="text-gray-300">Projects</p>
                        </div>
                        <div class="p-3 bg-[#111a3e] rounded-xl shadow-lg border border-[#1f1641] text-center">
                            <h3 class="text-3xl font-bold">+7</h3>
                            <p class="text-gray-300">Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import historyImg from '/src/assets/About/History.png'
import missionIcon from '/src/assets/About/MisionIcon.png'
import visionIcon from '/src/assets/About/VisionIcon.png'
import teamworkIcon from '/src/assets/About/Pr1.png'
import innovationIcon from '/src/assets/About/Pr2.png'
import creativityIcon from '/src/assets/About/Pr3.png'
import disruptiveIcon from '/src/assets/About/Pr4.png'

AOS.init({ duration: 800, once: true })

const history = ref({
    year: '2020',
    title: 'NACE METRIX',
    subtitle: 'Se funda en 2020 y se registra en Cámara y Comercio de Neiva.'
})

const principles = ref([
    { name: 'Trabajo en Equipo', icon: teamworkIcon },
    { name: 'Innovación sin Límites', icon: innovationIcon },
    { name: 'Creatividad', icon: creativityIcon },
    { name: 'Estrategias Disruptivas', icon: disruptiveIcon }
])

const education = ref([
    { id: 1, School: 'school 1', program: 'Software Engineer', year: '2022' },
    { id: 2, School: 'school 2', program: 'Software Engineer', year: '2020' }
])
</script>

<style scoped>
/* Define primary/secondary in your Tailwind config */
</style>