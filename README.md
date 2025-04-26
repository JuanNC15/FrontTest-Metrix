Página de Landing de Metrix AL

Desarrollo de una landing page sobre Metrix basandose un poco en la informacion de su pagina principal, construida con *Vue 3*(Composition API, `<script setup>`) y *Tailwind CSS*. Incluye un formulario de contacto completamente funcional que valida la entrada, simula el envío de datos a un backend (Retool API) y muestra notificaciones de éxito o error.

---

## 📋 Descripción breve

El objetivo de este proyecto es replicar un diseño realizado en Figma (El cual en esta ocasion en la entrega final hay mucha diferencia al diseño original) y dotarlo de:

- Secciones: Hero, Servicios, Proyectos, Historia, Principios, Sobre mí y Contacto  
- Un *formulario de contacto* con estos campos:
  - Nombre completo (obligatorio)  
  - Correo electrónico (obligatorio, formato válido)  
  - Servicio que le interesa (obligatorio)  
  - País (opcional)  
  - Teléfono (obligatorio, validación por país)  
  - Mensaje (obligatorio, máx. 500 caracteres)  
- Validaciones en tiempo real y mensajes de error  
- Simulación de envío (`POST`) a un endpoint de prueba en Retool  
- Mensaje de éxito o error tras el envío  
- Animaciones al hacer scroll con *AOS*
- Estilos y diseño responsivo con *Tailwind CSS*

---


Configuración

Antes de arrancar la aplicación, crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```dotenv
# Endpoint al que enviará el formulario de contacto
VITE_CONTACT_ENDPOINT=https://retoolapi.dev/moOQKO/data



pasos para instalar dependencias

npm install

Pasos para ejecutar la aplicacion

npm run dev

Abra su navegador en:
http://localhost:5173




Instrucciones de prueba
Como opcion para visualizar la informacion que hay en la API generada poner:

npm run export:submissions

La cual creará un archivo submission.json donde se reflejará un GET




PREGUNTAS DE RAZONAMIENTO:

1. Arquitectura y Diseño:
    La arquitectura del proyecto Vue 3 está organizada de manera modular con la configuración principal (package.json, vite.config.js) y la carpeta public/index.html en la raíz, mientras que dentro de src/ se agrupan los assets (imágenes organizadas en subcarpetas según la sección), los componentes individuales para cada sección de la landing (Navbar, Home, ServicesSection, LatestProjectsSection, AboutSection, ContactSection, Footer y utilitarios como BackToTop o loadingSpinner), App.vue como contenedor global y main.js donde se inicializan Tailwind CSS y AOS para las animaciones al hacer scroll. 
    El formulario de contacto reside en ContactSection.vue y aprovecha la Composition API con <(Script setup)> para definir de forma reactiva el objeto form y el objeto errors, un array declarativo fields que describe dinámicamente cada campo (con sus atributos, tipo y validaciones), una función validate que comprueba la presencia de nombre, el formato de correo con expresión regular, el patrón de teléfono y la longitud máxima del mensaje, y una función onSubmit que simula el envío con fetch al endpoint de Retool manejando las respuestas de éxito o error con mensajes claros. El uso de Tailwind CSS permite aplicar utilidades de estilo inline para lograr un diseño moderno y responsivo sin necesidad de hojas CSS adicionales, y la combinación de un enfoque basado en datos para generar los inputs con v-for y <component> reduce la duplicación de código.

2. Escalabilidad y mejoras:
    Si el formulario llegase a recibir miles de envíos por hora, los uellos de botella estarían en el envío síncrono de cada petición (fetch/axios) que puede saturar la conexión, el backend, en la validación y renderizado de errores en el hilo principal del navegador que podría bloquear la UI. Para mejorar tanto el rendimiento se puede implementar un sistema de “batching” o cola asíncrona que agrupe y limite la tasa de peticiones, y añadiría un indicador de progreso o spinner con reintentos automáticos en caso de fallo para asegurar la entrega de datos sin interrumpir al usuario.

3. Alternativas y Trade-offs:
    Consideré herramientas más populares como VeeValidate combinado con Yup para validaciones avanzadas, Axios para las peticiones HTTP (gracias a su manejo de cancelaciones y interceptores), y frameworks de UI como BootstrapVue o Ant Design Vue para disponer de componentes listos y acelerar el diseño. Estas opciones ofrecen ventajas “out-of-the-box” pero implican un bundle más pesado y una mayor complejidad de configuración, por lo que elegí validaciones manuales, fetch nativo y Tailwind CSS para mantener la aplicación ligera y ajustarme al tiempo.

4. Simulación de Envío de Datos:
    Implementé la simulación de envío usando axios.post() al endpoint de prueba de Retool; en mi método onSubmit llamo a axios.post(URL, form) y en el .then() actualizo un estado con Mensaje enviado con éxito, mientras que en el .catch() muestro “Error al enviar. Por favor, intenta de nuevo.” Para probar distintos escenarios configuré interceptores de Axios y mocks en los tests (Jest/Cypress) que devuelven respuestas 200, 400 o 500, de modo que puedo verificar cómo reacciona la interfaz ante distintos códigos de estado y tiempos de respuesta.







