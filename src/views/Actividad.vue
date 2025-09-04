<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Características de los recursos forestales',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> comprender y aplicar los aspectos prácticos relacionados con la gestión de los recursos forestales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es un ecosistema forestal?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un conjunto de árboles plantados por el hombre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un grupo de organismos vivos que interactúan entre sí y con su entorno.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una reserva forestal artificial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un parque natural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál de los siguientes NO es un elemento biótico?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Animales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Árboles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hongos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suelo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Los recursos forestales son:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elementos bióticos y abióticos que conforman el bosque y satisfacen una necesidad real o potencial del ser humano.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Elementos bióticos que conforman el bosque y satisfacen una necesidad del ser humano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Recursos inagotables que pueden ser explotados sin limitaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recursos que solo se encuentran en zonas rurales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué función ecológica se asocia con la provisión de refugio y reproducción para plantas y animales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Función de regulación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Función de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Función de hábitat.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Función social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'El ciclo en el que las plantas absorben CO₂ y lo convierten en materia orgánica corresponde a:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ciclo del fósforo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ciclo del nitrógeno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ciclo del agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ciclo del carbono.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué relación interespecífica implica beneficio para una especie y perjuicio para otra?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Parasitismo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Comensalismo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mutualismo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Competencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué documento técnico es obligatorio para áreas forestales productoras?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Plan de ordenación territorial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Plan de ordenación forestal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Inventario de biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Licencia ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál de los siguientes es un recurso forestal no maderable?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cedro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Roble.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Guadua.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Caoba.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'Las áreas de conservación local se caracterizan por',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No permitir ninguna actividad humana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tener participación comunitaria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ser de gran extensión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser exclusivamente urbanas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué estructura del bosque se relaciona con la distribución de especies en el suelo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estratificada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'De especies.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vertical.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Horizontal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
