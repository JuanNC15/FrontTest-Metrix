<template>
    <section class="relative w-full" data-aos="zoom-in-up">
        <!-- Fondos difuminados -->
        <div class="absolute top-0 inset-x-0 h-64 flex items-start">
            <div class="h-24 w-2/3 bg-gradient-to-br from-[#F3E26A] blur-2xl opacity-40"></div>
            <div class="h-20 w-3/5 bg-gradient-to-r from-[#F3E26A] opacity-40 blur-2xl"></div>
        </div>

        <!-- Contenedor principal -->
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div
                class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">

                <div class="lg:py-6">
                    <div class="text-center lg:text-left">

                        <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl
                       flex items-center gap-4 whitespace-nowrap justify-center lg:justify-start">
                            <span>Somos</span>
                            <img src="/src/assets/logo.png" alt="Logo" class="h-20 w-auto relative -top-2" />
                        </h1>
                    </div>

                    <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">
                        Empresa colombiana con más de 3 años de experiencia en el desarrollo de
                        soluciones de software para call y contact center.
                        <br />
                        Nuestros productos y servicios están diseñados para ayudar a las empresas
                        a mejorar la eficiencia, la productividad y la satisfacción de sus clientes.
                    </p>

                    <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                        <button
                            class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center bg-primary text-white overflow-hidden">
                            <span
                                class="absolute inset-0 rounded-full group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent"></span>
                            <span class="relative flex items-center justify-center">Contáctanos!!</span>
                        </button>

                        <button
                            class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center text-primary overflow-hidden">
                            <span
                                class="absolute inset-0 rounded-full group-hover:scale-105 origin-center transition-all ease-in-out bg-transparent border-2 border-primary"></span>
                            <span class="relative flex items-center justify-center">Sobre nosotros</span>
                        </button>
                    </div>
                </div>

                <!-- Columna derecha: Imagen del desarrollador -->
                <div class="lg:h-full md:flex">
                    <div
                        class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative">
                        <div
                            class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#] to-primary blur-2xl">
                        </div>
                        <div
                            class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-10 sm:right-16 rounded-full shadow-lg border border-primary">
                            <img src="/src/assets/Desarrollador.jpg" alt="Desarrollador" width="500" height="auto"
                                loading="lazy" class="w-full h-full rounded-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
    duration: 800,
    once: true
})
</script>