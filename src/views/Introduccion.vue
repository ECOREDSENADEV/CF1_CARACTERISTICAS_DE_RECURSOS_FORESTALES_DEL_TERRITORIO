<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 El componente formativo <b>Características de recursos forestales del territorio</b>, ofrece una visión integral sobre la importancia ecológica, económica y social de los ecosistemas forestales, así como de los recursos que los conforman. Su propósito es fortalecer las competencias para identificar, clasificar y valorar estos recursos en el marco de la normativa ambiental vigente en Colombia, contribuyendo a su gestión sostenible y al aprovechamiento responsable por parte de las comunidades.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/2.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 A lo largo del componente, se abordan aspectos clave como la estructura y funciones de los ecosistemas forestales, los ciclos biogeoquímicos, las interacciones biológicas, y el ordenamiento forestal. También se profundiza en los usos maderables y no maderables, las áreas de conservación local y la normativa que regula el manejo de los recursos, resaltando la relación entre la conservación de la biodiversidad y el bienestar humano.
    
    
    .row.align-items-center
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 Este material está diseñado para que el aprendiz comprenda el papel estratégico que desempeñan los bosques en la regulación climática, la provisión de bienes y servicios, y la protección de hábitats, desarrollando una visión crítica y propositiva que le permita plantear acciones para su conservación y manejo sostenible, en coherencia con las realidades territoriales y los retos ambientales actuales.

</template>

<script>
export default {
  name: 'Introduccion',
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
