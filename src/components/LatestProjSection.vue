<template>
    <section class="mt-20 text-white" id="projects">
      <div class="max-w-screen-xl mx-auto px-4 xl:px-16">
        <h2 class="mb-6 text-4xl font-bold">PROYECTOS</h2>
        <div
          class="grid gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
          data-aos="fade-right"
        >
          <div
            v-for="project in projects"
            :key="project.title"
            class="flex flex-col w-full bg-white rounded-xl shadow-lg overflow-hidden
                   transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div
              class="h-52 md:h-[24rem] bg-center bg-cover"
              :style="{ backgroundImage: `url(${project.img})` }"
            />
            <div class="flex flex-col flex-1 p-6 bg-[#111a3e] text-white">
              <h3 class="lg:text-xl text-lg font-semibold uppercase">
                {{ project.title }}
              </h3>
              <p class="mt-4 flex-1 text-[#ADB7BE]">
                {{ project.description }}
              </p>
              <button
                class="self-start mt-8 inline-flex items-center px-6 py-3 rounded-lg
                       bg-gradient-to-r from-indigo-900 to-indigo-700
                       hover:from-indigo-800 hover:to-indigo-600 transition-colors"
              >
                Leer Más
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const projects = ref([
    {
      img: '/src/assets/Projects/Lawyer.png',
      title: 'LAWYER',
      description:
        'Software de gestión de procesos judiciales es una poderosa herramienta diseñada para facilitar la creación, organización y gestión eficiente de cada actuación en el ámbito legal. Permite a los profesionales del derecho y los equipos jurídicos llevar un registro detallado de casos legales, audiencias, documentos legales y fechas clave de manera sistemática.'
    },
    {
      img: '/src/assets/Projects/Cashin.png',
      title: 'CASHING',
      description:
        'Software de gestión de cobranza de cartera es una herramienta diseñada para ayudar a las empresas a administrar de manera efectiva y eficiente el proceso de recuperación de cartera.'
    },
    {
      img: '/src/assets/Projects/Data.png',
      title: 'DATA',
      description:
        'Software de gestión política es una herramienta integral diseñada para ayudar a candidatos y partidos políticos en la planificación y ejecución efectiva de campañas electorales. Esta solución permite la recopilación y análisis de datos, permitiendo además llevar un seguimiento exhaustivo de todas las actividades vinculadas con la campaña política.'
    }
  ])
  </script>
  