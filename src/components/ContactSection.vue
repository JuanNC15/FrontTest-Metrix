<template>
    <section id="contact" class="relative mt-20 text-white">
      <div class="max-w-screen-xl mx-auto px-4 xl:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left -->
        <div data-aos="zoom-in-up" class="flex flex-col">
          <h2 class="text-4xl font-bold mb-4">¡CONTÁCTANOS!</h2>
          <p class="text-[#8167B7] mb-8">
            Feel free to reach out for collaborations, questions, or just to say hi! I’ll try my best to get back to you.
          </p>
          <img src="/src/assets/Team.png" alt="Team" class="w-full rounded-lg shadow-lg mb-8" />
        </div>
  
        <!-- Form -->
        <div class="relative" data-aos="zoom-in-up">
          <div
            class="absolute inset-0 bg-[#20103C] opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl"
          ></div>
          <form
            @submit.prevent="onSubmit"
            class="relative bg-[#20103C]/80 backdrop-filter backdrop-blur-sm rounded-2xl p-8 space-y-6 z-10"
          >
            <!-- Nombre completo -->
            <div>
              <label for="name" class="block text-sm mb-2">Nombre completo</label>
              <input
                v-model="form.name"
                id="name"
                type="text"
                class="w-full p-3 bg-white rounded-lg text-black placeholder-[#8167B7]"
                placeholder="Tu nombre completo"
              />
              <p v-if="errors.name" class="text-yellow-400 text-sm mt-1">{{ errors.name }}</p>
            </div>
  
            <!-- Correo electrónico -->
            <div>
              <label for="email" class="block text-sm mb-2">Correo electrónico </label>
              <input
                v-model="form.email"
                id="email"
                type="email"
                class="w-full p-3 bg-white rounded-lg text-black placeholder-[#8167B7]"
                placeholder="tu@correo.com"
              />
              <p v-if="errors.email" class="text-yellow-400 text-sm mt-1">{{ errors.email }}</p>
            </div>
  
            <!-- Servicio -->
            <div>
              <label for="service" class="block text-sm mb-2">Servicio que le interesa</label>
              <select
                v-model="form.service"
                id="service"
                class="w-full p-3 bg-white rounded-lg text-black"
              >
                <option>Desarrollo web</option>
                <option>App móvil</option>
                <option>Software corporativo</option>
                <option>Integración de sistemas</option>
                <option>Estrategia y consultoría</option>
                <option>Otros (dejar en la descripción)</option>
              </select>
            </div>
  
            <!-- País -->
            <div>
              <label for="country" class="block text-sm mb-2">País</label>
              <input
                v-model="form.country"
                id="country"
                type="text"
                class="w-full p-3 bg-white rounded-lg text-black placeholder-[#8167B7]"
                placeholder="Tu país (opcional)"
              />
            </div>
  
            <!-- Teléfono -->
            <div>
              <label for="phone" class="block text-sm mb-2">Teléfono</label>
              <input
                v-model="form.phone"
                id="phone"
                type="tel"
                class="w-full p-3 bg-white rounded-lg text-black placeholder-[#8167B7]"
                placeholder="+57 300 123 4567"
              />
              <p v-if="errors.phone" class="text-yellow-400 text-sm mt-1">{{ errors.phone }}</p>
            </div>
  
            <!-- Mensaje -->
            <div>
              <label for="message" class="block text-sm mb-2">Mensaje</label>
              <textarea
                v-model="form.message"
                id="message"
                rows="4"
                maxlength="500"
                class="w-full p-3 bg-white rounded-lg text-black placeholder-[#8167B7]"
                placeholder="Escribe tu mensaje..."
              ></textarea>
              <p class="text-xs text-gray-500 mt-1">{{ form.message.length }} / 500</p>
              <p v-if="errors.message" class="text-yellow-400 text-sm mt-1">{{ errors.message }}</p>
            </div>
  
            <!-- Submit & Feedback -->
            <div class="flex flex-col items-start">
              <button
                type="submit"
                class="px-6 py-3 bg-[#E0A524] text-white font-semibold rounded-full hover:opacity-90 transition"
              >
                Enviar mensaje
              </button>
              <p v-if="status" :class="statusClass" class="mt-4 text-sm">{{ status }}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  
  // form state
  const form = reactive({
    name: '',
    email: '',
    service: 'Desarrollo web',
    country: '',
    phone: '',
    message: ''
  })
  
  // validation errors
  const errors = reactive({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  // submission status
  const status = ref('')
  const statusClass = ref('')
  
  // simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  function validate() {
    errors.name = form.name ? '' : 'El nombre completo es obligatorio.'
    errors.email = !form.email
      ? 'El correo electrónico es obligatorio.'
      : !emailRegex.test(form.email)
        ? 'Formato de correo inválido.'
        : ''
    errors.phone = form.phone ? '' : 'El teléfono es obligatorio.'
    errors.message = !form.message
      ? 'El mensaje es obligatorio.'
      : form.message.length > 500
        ? 'El mensaje no puede exceder 500 caracteres.'
        : ''
    return !errors.name && !errors.email && !errors.phone && !errors.message
  }
  
  async function onSubmit() {
    status.value = ''
    statusClass.value = ''
    if (!validate()) return
  
    try {
      const res = await fetch('https://retoolapi.dev/rmm3TD/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Network response was not ok')
      status.value = '¡Mensaje enviado con éxito!'
      statusClass.value = 'text-yellow-400'
      Object.keys(form).forEach(key => {
        form[key] = key === 'service' ? 'Desarrollo web' : ''
      })
    } catch {
      status.value = 'Error al enviar. Por favor, intenta de nuevo.'
      statusClass.value = 'text-red-400'
    }
  }
  </script>
  
  <style scoped>
  label:after {
    content: '*';
    color: #E0A524;
    margin-left: 0.25rem;
  }
  
  /* Oculta el asterisco en el label de País */
  label[for="country"]::after {
    content: '';
    margin: 0;
  }
  </style>
  