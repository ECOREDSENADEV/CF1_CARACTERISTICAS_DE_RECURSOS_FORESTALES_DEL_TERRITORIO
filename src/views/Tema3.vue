<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Usos tradicionales de los recursos forestales
    
    .row.mb-5.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Los recursos forestales, tanto maderables como no maderables, ofrecen un amplio potencial de uso para comunidades rurales y urbanas. Los usos tradicionales han dado lugar a múltiples alternativas productivas, que benefician diversos sectores económicos como el alimentario, farmacéutico, cosmético, artesanal, constructivo, entre otros. A continuación, se presentan los principales usos actuales de los productos forestales por sector:
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-4.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema3/2.png", alt="Imagen decorativa")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Textil
              p Fibras como yute, cáñamo, sisal y cortezas se utilizan para elaborar tejidos artesanales y cuerdas.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema3/3.png", alt="Imagen decorativa")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Seguridad alimentaria
              p Provisión directa de alimentos forestales y aportes a la agricultura.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema3/4.png", alt="Imagen decorativa")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Construcción
              p Uso de madera como material estructural, en acabados y decoración arquitectónica.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema3/5.png", alt="Imagen decorativa")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Artesanías
              p Uso creciente de recursos forestales en productos artesanales, con presencia en mercados nacionales e internacionales.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema3/6.png", alt="Imagen decorativa")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Alimentos
              p Recursos no maderables como achiote, asái, cúrcuma, quinua, borojó se utilizan como materia prima en la agroindustria alimentaria.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema3/7.png", alt="Imagen decorativa")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Farmacéutico
              p Producción de medicinas naturales (pomadas funcionales, extractos) y fármacos de uso médico relevante.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema3/8.png", alt="Imagen decorativa")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Salud y cosméticos
              p Los recursos no maderables sirven como ingredientes activos para productos de belleza y cosmetología.

</template>

<script>
export default {
  name: 'Tema3',
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
