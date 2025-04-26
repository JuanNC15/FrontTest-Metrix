<template>
    <section class="text-white mt-20" id="services">
      <div class="px-4 xl:pl-16">
        <h2 class="text-4xl font-bold mb-4">Nuestros servicios!</h2>
      </div>
      <div
        class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10
               sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          data-aos="fade-up"
          class="group p-8 rounded-xl bg-[#20103c] border border-transparent
                 hover:border-primary hover:bg-[#29164c] shadow-lg hover:shadow-2xl
                 transition-colors transition-shadow duration-300"
        >

          <div
            class="mx-auto h-24 w-24 flex items-center justify-center
                   bg-primary rounded-full
                   group-hover:bg-secondary transition-colors duration-300"
          >
            <img :src="service.icon" alt="service icon" class="h-12 w-12" />
          </div>
  
          <div class="text-center">

            <h3
              class="pt-8 text-lg font-semibold uppercase bg-clip-text text-transparent
                     bg-gradient-to-r from-primary to-secondary lg:text-xl
                     group-hover:text-white transition-colors duration-300"
            >
              {{ service.name }}
            </h3>
  
            <!-- Descripción o botón según el servicio -->
            <div class="pt-4">
              <button
                v-if="service.name === 'Estrategia Digital'"
                class="px-6 py-2 bg-primary text-white rounded-full
                       hover:bg-secondary transition-colors duration-300"
              >
                Agenda tu experiencia
              </button>
              <p
                v-else
                class="text-gray-400 text-sm md:text-base
                       group-hover:text-gray-200 transition-colors duration-300"
              >
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const services = ref([
    {
      icon: 'https://img.icons8.com/ios-filled/100/ffffff/google-code.png',
      name: 'Diseño de Páginas Web',
      description:
        'En Metrix escuchamos, entendemos y analizamos convirtiendo así tu sitio web en una herramienta poderosa de crecimiento de negocios. Desarrollamos máquinas de ventas profesionales enfocadas a resultados.'
    },
    {
      icon: 'https://img.icons8.com/external-vectorslab-glyph-vectorslab/100/fffeee/external-Technical-Writing-mobile-app-development-vectorslab-glyph-vectorslab.png',
      name: 'Diseño y desarrollo de software',
      description:
        'Contamos con una amplia experiencia en el desarrollo de páginas web, en todas sus facetas, para ayudar a nuestros clientes a aprovechar todo su potencial.'
    },
    {
      icon: 'https://img.icons8.com/external-solid-design-circle/100/ffffff/external-Mobile-Development-digital-marketing-solid-design-circle.png',
      name: 'Software Corporativo',
      description:
        'Transforma tus ideas en realidad con las soluciones a medida de Metrix. Nuestro equipo de expertos en desarrollo de software está listo para convertir tus ideas en soluciones innovadoras y personalizadas.'
    },
    {
      icon: 'https://img.icons8.com/ios-filled/100/ffffff/email-open.png',
      name: 'Integración de Sistemas',
      description:
        'Conectando los pilares de su empresa para un rendimiento óptimo. Esta capacidad es clave para optimizar operaciones, mejorar la eficiencia y garantizar la fluidez de la información en toda la organización.'
    },
    {
      icon: 'https://img.icons8.com/ios-filled/100/ffffff/windows10-personalization.png',
      name: 'Estrategia y Consultoria',
      description:
        'Descubre el camino hacia el éxito empresarial con nuestra experiencia en estrategia y consultoría. Nuestros expertos te ayudarán a definir tu rumbo y superar desafíos con resultados sólidos.'
    },
    {
      icon: 'https://img.icons8.com/ios-filled/100/ffffff/web-design.png',
      name: 'Estrategia Digital',
      description: 'Planes y campañas online para potenciar tu presencia en la red.'
    }
  ])
  </script>
  
  <style scoped>
  /* Si quieres ajustar aún más el “full diseño”, aquí puedes añadir reglas CSS adicionales */
  </style>
  