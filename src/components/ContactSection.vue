<template>
    <section id="contact" class="relative mt-20 text-white">
        <div class="max-w-screen-xl mx-auto px-4 xl:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">

            <div data-aos="zoom-in-up" class="flex flex-col">
                <h2 class="text-4xl font-bold mb-4">¡CONTÁCTANOS!</h2>
                <p class="text-[#8167B7] mb-8">
                    Desarrollamos soluciones innovadoras y ágiles para impulsar el crecimiento de tu empresa.
                    Transforma tu empresa y saca provecho a lo mejor de la tecnología con Metrix
                </p>
                <img src="/src/assets/Team.png" alt="Team" class="w-full rounded-lg shadow-lg mb-8" />
            </div>


            <div class="relative" data-aos="zoom-in-up">
                <div class="absolute inset-0 bg-[#20103C] opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl" />
                <form @submit.prevent="onSubmit"
                    class="relative bg-[#20103C]/80 backdrop-filter backdrop-blur-sm rounded-2xl p-8 space-y-6 z-10">
                    <div v-for="f in fields" :key="f.id">
                        <label :for="f.id" class="block text-sm mb-2">
                            {{ f.label }}<span v-if="f.required">*</span>
                        </label>
                        <component :is="f.type === 'textarea' ? 'textarea' : f.type === 'select' ? 'select' : 'input'"
                            v-model="form[f.model]" :id="f.id" v-bind="f.attrs" :class="inputClass"
                            :placeholder="f.placeholder">
                            <option v-for="opt in f.options || []" :key="opt">{{ opt }}</option>
                        </component>
                        <p v-if="errors[f.model]" class="text-yellow-400 text-sm mt-1">
                            {{ errors[f.model] }}
                        </p>
                        <p v-if="f.counter" class="text-xs text-gray-500 mt-1">
                            {{ form.message.length }} / 500
                        </p>
                    </div>

                    <button type="submit"
                        class="px-6 py-3 bg-[#E0A524] text-white font-semibold rounded-full hover:opacity-90 transition">
                        Enviar mensaje
                    </button>
                    <p v-if="status" :class="statusClass" class="mt-4 text-sm">{{ status }}</p>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
    name: '', email: '', service: 'Desarrollo web',
    country: '', phone: '', message: ''
})
const errors = reactive({ name: '', email: '', phone: '', message: '' })
const status = ref(''), statusClass = ref('')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePatterns = {
    Colombia: /^\+57\d{10}$/,
    USA: /^\+1\d{10}$/
}

const inputClass = 'w-full p-3 bg-white rounded-lg text-black placeholder-[#8167B7]'

const fields = [
    { id: 'name', model: 'name', label: 'Nombre completo', type: 'text', required: true, placeholder: 'Tu nombre completo' },
    { id: 'email', model: 'email', label: 'Correo electrónico', type: 'email', required: true, placeholder: 'tu@correo.com' },
    {
        id: 'service', model: 'service', label: 'Servicio que le interesa', type: 'select', options: [
            'Desarrollo web', 'App móvil', 'Software corporativo',
            'Integración de sistemas', 'Estrategia y consultoría',
            'Otros (dejar en la descripción)'
        ]
    },
    { id: 'country', model: 'country', label: 'País', type: 'text', placeholder: 'Tu país (opcional)' },
    { id: 'phone', model: 'phone', label: 'Teléfono', type: 'tel', required: true, placeholder: '+57 300 123 4567' },
    {
        id: 'message', model: 'message', label: 'Mensaje', type: 'textarea', required: true, maxlength: 500,
        counter: true, placeholder: 'Escribe tu mensaje...', attrs: { rows: 4, maxlength: 500 }
    }
]

function validate() {
    errors.name = form.name
        ? '' : 'El nombre completo es obligatorio.'
    errors.email = !form.email
        ? 'El correo electrónico es obligatorio.'
        : !emailRegex.test(form.email)
            ? 'Formato de correo inválido.' : ''
    errors.phone = !form.phone
        ? 'El teléfono es obligatorio.'
        : form.country && phonePatterns[form.country] && !phonePatterns[form.country].test(form.phone)
            ? `Teléfono inválido para ${form.country}.` : ''
    errors.message = !form.message
        ? 'El mensaje es obligatorio.'
        : form.message.length > 500
            ? 'El mensaje no puede exceder 500 caracteres.' : ''
    return !Object.values(errors).some(x => x)
}

async function onSubmit() {
    status.value = ''; statusClass.value = ''
    if (!validate()) return

    try {
        const res = await fetch('https://retoolapi.dev/rmm3TD/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        })
        if (!res.ok) throw new Error()
        status.value = '¡Mensaje enviado con éxito!'
        statusClass.value = 'text-yellow-400'
        Object.keys(form).forEach(k => form[k] = k === 'service' ? 'Desarrollo web' : '')
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