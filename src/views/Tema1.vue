<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Ecosistemas forestales

    .bg-full-width.bg-color-2.mb-3
      .p-4.p-md-5
        .row.align-items-center
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-1.p-4(data-aos="fade-left")
              p.mb-0 Un ecosistema forestal está conformado por un conjunto de organismos vivos: como plantas, animales, hongos y microorganismos, que interactúan entre sí y con su entorno, formando lo que se conoce como biocenosis. La energía que impulsa el funcionamiento de estos ecosistemas proviene principalmente del Sol, en forma de energía térmica y luminosa. Esta energía es esencial para los ciclos de materia y energía, especialmente a través del proceso de fotosíntesis (Kebbe, 2022).
        
        separador
        
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Componentes de los ecosistemas forestales
        
        p.mb-5 Un ecosistema forestal se estructura a partir de la interacción entre <b>elementos bióticos y abióticos</b>, los cuales, en conjunto, ofrecen diversos servicios a su entorno. La siguiente tabla resume sus principales características:

        .tarjeta--container.row
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-11
                figure
                  img(src='@/assets/curso/tema1/2.png', alt='Texto descriptivo 1')
            h2 Elementos bióticos
            p Incluyen todos los seres vivos presentes en el ecosistema: vegetación (coberturas vegetales), fauna, microorganismos y seres humanos.
        
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-11
                figure
                  img(src='@/assets/curso/tema1/3.png', alt='Texto descriptivo 2')
            h2 Elementos abióticos
            p Comprenden los componentes físicos y químicos del ambiente, como el agua, el suelo, el clima y el paisaje. Estos elementos proporcionan soporte físico, energía para la fotosíntesis y nutrientes minerales, determinando las condiciones ambientales y el tipo de vegetación que puede desarrollarse.
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Funciones ecológicas
    
    p.mb-5 A continuación, se presenta un  video que describe las principales funciones ecológicas de los ecosistemas forestales, destacando su papel en la regulación ambiental, la conservación de la biodiversidad y el sustento de procesos clave para la vida.

     figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Ciclos biogeoquímicos
    
    .row.align-items-center.mb-5.justify-content-center
      .col-md-6.col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Los ciclos biogeoquímicos son procesos esenciales que garantizan el equilibrio y la sostenibilidad de los ecosistemas. Aseguran la disponibilidad continua de elementos vitales para la vida y previenen el agotamiento de los recursos naturales. Son fundamentales para la supervivencia y el desarrollo de la vida en el planeta (Fundación Aquae, 2023). A continuación, se describen los principales ciclos presentes en los ecosistemas forestales:
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-4.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-4.order-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 1.
                span Ciclo del carbono 
              figure
                img(src="@/assets/curso/tema1/5.png", alt="Esquema del ciclo del carbono que presenta  la emisión de CO₂ por combustión, respiración de animales y descomponedores; la absorción del CO₂ por plantas verdes; el paso del carbono a través de la alimentación, los desechos y la descomposición tras la muerte. ")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Ciclo del carbono
              p Los bosques actúan como guardianes del carbono, acumulándolo en árboles, raíces, hojarasca, madera muerta y suelos. A través de la fotosíntesis, las plantas absorben dióxido de carbono (CO₂) y lo convierten en materia orgánica. El CO₂ retorna a la atmósfera mediante la respiración y descomposición. Este ciclo se ve alterado por las emisiones de CO₂ generadas por combustibles fósiles, afectando especialmente regiones como las polares, tropicales, áridas, humedales y manglares.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-4.order-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 2.
                span Ciclo del nitrógeno 
              figure
                img(src="@/assets/curso/tema1/6.svg", alt="Esquema del ciclo del nitrógeno que incluye la fijación del N₂ atmosférico por rayos y bacterias, la asimilación por plantas, la absorción en animales, la descomposición, los procesos de amonificación y nitrificación, y la desnitrificación que devuelve el nitrógeno a la atmósfera.")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Ciclo del nitrógeno
              p El nitrógeno atmosférico (N₂) es transformado por bacterias del suelo para ser aprovechado por las plantas. Luego pasa a consumidores, vuelve al suelo tras la descomposición y finalmente regresa a la atmósfera. Este ciclo es perturbado por fertilizantes químicos, ganadería intensiva, deforestación y quema de combustibles fósiles.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-4.order-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 3.
                span Ciclo del fósforo 
              figure
                img(src="@/assets/curso/tema1/7.png", alt="Esquema del ciclo del fósforo que representa la meteorización de rocas fosfatadas, el transporte del fósforo en solución hacia cuerpos de agua, la absorción por plantas, el paso a animales, la descomposición por bacterias y hongos, y la sedimentación en ambientes acuáticos. ")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Ciclo del fósforo
              p El fósforo proviene de rocas y suelos, es absorbido por las plantas y transferido a los consumidores. Tras la muerte de los organismos, retorna al suelo por descomposición y eventualmente se sedimenta para volver a las rocas. A diferencia del nitrógeno y el carbono, no tiene fase gaseosa.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-4.order-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 4.
                span Ciclo hidrológico 
              figure
                img(src="@/assets/curso/tema1/8.svg", alt="Esquema del ciclo del agua que muestra procesos como evaporación, transpiración, condensación, precipitación y recolección del agua en ríos y cuerpos acuáticos.")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Ciclo hidrológico
              p Este ciclo comprende la evaporación, transpiración, condensación, precipitación e infiltración del agua, permitiendo su circulación continua en el planeta. Es crucial para los ecosistemas forestales por los siguientes motivos:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Regula la temperatura de la biosfera.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Permite la absorción de agua por las raíces para la fotosíntesis.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Previene la saturación de fuentes hídricas y erosión.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Garantiza la oferta hídrica para acueductos rurales y urbanos.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Favorece la conservación de ecosistemas clave para la producción y reserva de agua.

    .bg-full-width.bg-color-2.mb-3
      .p-4.p-md-5
        separador
        
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.4 Interacciones
        
        p.mb-5 Los organismos dentro de un ecosistema establecen múltiples relaciones con el fin de sobrevivir y reproducirse. Estas interacciones se clasifican en dos categorías principales (Universidad Nacional Autónoma de México, 2017):

        .row.justify-content-center.mb-5.d-flex.align-items-stretch
          .col-lg-3.d-flex.flex-column.mb-3.mb-lg-0
            div.bg-color-6.p-4
              h5.mb-0 Interacciones intraespecíficas
            div.bg-color-7.p-4.flex-grow-1
              ul.lista-ul--color.mb-0
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-13
                  p.mb-0 Se dan entre individuos de una <b>misma especie</b>.

          .col-lg-3.d-flex.flex-column.mb-3.mb-lg-0
            div.bg-color-6.p-4
              h5.mb-0 Interacciones interespecíficas
            div.bg-color-7.p-4.flex-grow-1
              ul.lista-ul--color.mb-0
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-13
                  p.mb-0 Se dan entre individuos de <b>diferentes especies</b>.


        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Interacciones intraespecíficas

        p Son relaciones que ocurren entre organismos de la misma especie y pueden implicar cooperación o competencia, según el contexto.     

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-11
            figure
              img(src='@/assets/curso/tema1/9.png', alt='Texto descriptivo 1')
        h2 Cooperación
        p Individuos de una misma especie se agrupan para obtener alimentos o aumentar sus probabilidades de supervivencia.
    
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-11
            figure
              img(src='@/assets/curso/tema1/10.png', alt='Texto descriptivo 2')
        h2 Competencia por espacio
        p Varios organismos de la misma especie compiten por territorio o espacio disponible en su hábitat.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Interacciones interespecíficas

    p.mb-5 Ocurren entre organismos de diferentes especies y pueden generar beneficios, perjuicios o neutralidad, dependiendo del tipo de relación.

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-8.tarjeta.p-4.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/11.png" alt="" style="width: 360px")
          h4.text-center Parasitismo
          p.mb-0.text-center Un organismo (parásito) vive dentro o sobre otro (hospedero), obteniendo un beneficio mientras perjudica al otro.
    
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-8.tarjeta.p-4.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/12.png" alt="" style="width: 360px")
          h4.text-center Comensalismo
          p.mb-0.text-center Un organismo se beneficia de otro sin causarle daño ni beneficio directo.
    
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-8.tarjeta.p-4.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/13.png" alt="" style="width: 360px")
          h4.text-center Mutualismo
          p.mb-0.text-center Dos especies cooperan y ambas obtienen beneficios, facilitando su supervivencia o reproducción.
    
          

        
      
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
