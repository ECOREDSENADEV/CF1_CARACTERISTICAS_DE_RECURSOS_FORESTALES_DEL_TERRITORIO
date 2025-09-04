<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Áreas de conservación local
    
    .row.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Las áreas de conservación local son territorios delimitados cuyo objetivo principal es la protección de ecosistemas estratégicos, integrando criterios de sostenibilidad ambiental, relevancia ecológica y participación comunitaria. Estas áreas permiten la conservación de la biodiversidad sin desligarse del desarrollo social y económico de las comunidades que habitan y gestionan dichos territorios. Su reconocimiento y fortalecimiento representan una estrategia clave para conservar la biodiversidad desde lo local, promoviendo modelos de uso sostenible del territorio (Andrade et al., 2011).
    
    .bg-full-width.bg-color-2.mb-3
      .p-4.p-md-5
        separador
        
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Tipos de áreas
        
        p.mb-5 En el marco de proyectos productivos que impliquen el aprovechamiento de recursos forestales, es fundamental identificar si se trata de un territorio incluido en alguna categoría de área de conservación local. Estas áreas pueden tener restricciones específicas o requerir permisos ambientales, con el fin de garantizar la sostenibilidad y evitar impactos negativos. A continuación, se presentan los principales tipos:

        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-10")
              div(titulo="Reservas naturales de la sociedad civil")
                p.ms-5 Áreas designadas voluntariamente por particulares con el objetivo exclusivo de conservar la biodiversidad.
              div(titulo="Parques naturales municipales o regionales")
                p.ms-5 Áreas gestionadas por entidades territoriales, enfocadas en la protección de ecosistemas a escala local o regional.
              div(titulo="Áreas de importancia ambiental en los Planes de Ordenamiento Territorial (POT)")
                p.ms-5 Sectores clasificados como estratégicos por su oferta ambiental, en relación con elementos clave como el agua, el suelo y la biodiversidad.
    
    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Características de las áreas de conservación local
    
    p.mb-5 Las áreas de conservación local presentan atributos que las distinguen de otras formas de protección ambiental a mayor escala. Estas características permiten una mayor adaptabilidad a contextos locales y fomentan el compromiso activo de las comunidades en su gestión.

    .bg-full-width.bg-fondo-1.mb-3
      .p-4.p-md-5
        .bg-full-width.bg-fondo-5
          .px-4.px-md-5.pb-md-3
            .row.justify-content-around.mb-5.align-items-center
              .col-lg-8.mb-3.mb-lg-0.order-2
                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema4/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Enfoque territorial
                    p.text-center Se ubican en contextos locales, con particularidades propias derivadas del entorno social, cultural y ambiental.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema4/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Participación comunitaria
                    p.text-center Las comunidades locales tienen un rol central en la gestión y conservación activa del territorio.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema4/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Escala reducida
                    p.text-center Aunque son de menor tamaño que parques nacionales, tienen gran relevancia ecológica y socioambiental.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema4/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Flexibilidad en el manejo
                    p.text-center Posibilitan el desarrollo de actividades productivas sostenibles, como el ecoturismo o la agroforestería, siempre que no comprometan la integridad ecológica.
              .col-lg-3.order-1.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema4/3.png', alt='')


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
