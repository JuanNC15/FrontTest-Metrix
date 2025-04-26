<template id="about">
    <div>
        <!-- Historia -->
        <section id="about" class="py-16 bg-gray-100" data-aos="fade-up">
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

</script>

<style scoped>
/* Define primary/secondary in your Tailwind config */
</style>