<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Ordenamiento forestal en territorios
    
    p.mb-5 El ordenamiento forestal es un instrumento fundamental para garantizar el manejo sostenible y el aprovechamiento adecuado de los recursos forestales, asegurando a su vez la conservación de los bosques. Según los Lineamientos y Guía para la Ordenación Forestal en Colombia (Ministerio de Ambiente y Desarrollo Sostenible, 2020, p. 32), este proceso debe regirse por los siguientes principios:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-4.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema2/1.png", alt="Imagen decorativa")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Recurso estratégico nacional
              p Los bosques, como soporte de la diversidad biológica, étnica y de la oferta ambiental, son estratégicos para la Nación. Su conocimiento y manejo son responsabilidad del Estado, con el apoyo de la sociedad civil.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema2/2.png", alt="Imagen decorativa")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Uso sostenible
              p El manejo forestal debe enmarcarse en los principios de sostenibilidad, tal como lo establece la Constitución Política de Colombia.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema2/3.png", alt="Imagen decorativa")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Corresponsabilidad
              p El desarrollo sostenible de los bosques es tarea conjunta del Estado, la comunidad y el sector privado, quienes deben optimizar los beneficios sociales, económicos y ambientales que estos ofrecen.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema2/4.png", alt="Imagen decorativa")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Aprovechamiento como estrategia de conservación
              p El uso sostenible de la flora silvestre y los bosques se concibe como una vía de conservación. El Estado debe fomentar un ambiente adecuado para las inversiones ambientales y el fortalecimiento del sector forestal.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema2/5.png", alt="Imagen decorativa")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Enfoque social
              p En zonas boscosas habitadas, se debe apoyar el bienestar de las comunidades locales, conservando sus valores tradicionales y respetando sus derechos dentro del marco del bien común.
    
    .bg-full-width.bg-color-2.mb-3
      .p-4.p-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Consideraciones para la ordenación forestal
        
        p.mb-5 Las autoridades ambientales, mediante los planes de ordenación forestal, deben evaluar el estado de los recursos del territorio y las condiciones de oferta para autorizar su aprovechamiento, tanto de recursos maderables como no maderables. Estas consideraciones incluyen:

        .row.justify-content-center
          .col-lg-10
            .bg-color-9.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-xl-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/6.png', alt='')
                .col-xl
                  .p-4
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-13
                        p.mb-0 Las áreas forestales productoras deben contar con un <b>Plan de ordenación forestal</b> elaborado por la autoridad ambiental competente.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-13
                        p.mb-0 Las unidades de ordenación forestal deben conservar la homogeneidad en cuanto a condiciones florísticas, estructurales, silviculturales y de oferta ambiental, integrando además las condiciones socioculturales de las comunidades locales que habitan estos ecosistemas.
          

</template>

<script>
export default {
  name: 'Tema2',
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
