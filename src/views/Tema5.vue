<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Recursos forestales
    
    p.mb-5 Según la Política Nacional para el control de la deforestación y la gestión sostenible de los bosques, los recursos forestales son definidos como:
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 “Elementos bióticos y abióticos que conforman el bosque y satisfacen una necesidad real o potencial del ser humano. Estos recursos incluyen los componentes genéticos, los organismos o sus partes, las poblaciones y los beneficios derivados del ecosistema; estos se encuentran tanto en los bosques naturales como en las plantaciones forestales, y pueden ser maderables y no maderables” (2020, p. 86).
    
    .bg-full-width.bg-color-2.mb-3
      .p-4.p-md-5
        p.mb-5 Los recursos forestales no solo representan una fuente de bienes y servicios ecosistémicos, sino que también son claves para la conservación de la biodiversidad, la regulación climática y el desarrollo de economías locales.

        separador
        
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.1 Clasificación
        
        p.mb-5 Los recursos forestales se clasifican en dos grandes categorías: maderables y no maderables. Ambas aportan significativamente a diferentes cadenas productivas y sectores económicos.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Recursos no maderables
        
        p.mb-5 Son aquellos obtenidos de los bosques sin necesidad de tala de árboles. Incluyen semillas, hojas, frutos, raíces, resinas, fibras, cortezas y hongos, y se utilizan en sectores como el alimentario, artesanal, cosmético, agrícola, farmacéutico, entre otros. Su aprovechamiento sostenible requiere en muchos casos permiso ambiental previo.

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1.
              span Clasificación productos no maderables del bosque y sus cadenas productivas
            
            .tabla-a.color-secundario.tbl
              table
                thead
                  tr
                    th.bg-color-11 Especie/familia
                    th.bg-color-11 Nombre común
                    th.bg-color-11 Cadena productiva
                tbody.bg-color-white
                  tr
                    td Euterpe precatoria, Plukenetia volubilis
                    td Asaí
                    td Alimentos
                  tr.bg-color-12
                    td Bixa orellana
                    td Achiote
                    td Alimentos
                  tr
                    td Curcuma longa
                    td Cúrcuma
                    td Agroindustria
                  tr.bg-color-12
                    td Bambusa guadua
                    td Bambú
                    td Artesanías - construcción
                  tr
                    td Furcraea spp.
                    td Fique
                    td Agrícola - artesanal
                  tr.bg-color-12
                    td Theobroma cacao
                    td Cacao
                    td Cosméticos - alimentos
    
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema5/2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Productos no maderables del bosque y sus cadenas productivas
              p Se invita a leer el documento Anexo 1. Productos no maderables del bosque y sus cadenas productivas, donde se aborda la clasificación de diversas especies vegetales aprovechadas sin necesidad de tala, con un enfoque en su contribución a cadenas productivas sostenibles.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Recursos maderables
    
    p.mb-5 Son aquellos derivados de árboles con tejido leñoso, utilizados en sectores como la construcción, la fabricación de muebles, pisos, instrumentos musicales, papel, embalajes y más. Para su aprovechamiento, transporte y comercialización es obligatorio el uso del Salvoconducto Único Nacional.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Principales usos de las especies maderables
        
        .tabla-a.color-secundario.tbl.mb-5
          table
            caption Nota.  Ministerio de Ambiente y Desarrollo Sostenible et al. (2020).
            thead
              tr
                th.bg-color-11 Nombre común
                th.bg-color-11 Nombre científico
                th.bg-color-11 Usos potenciales
            tbody.bg-color-white
              tr
                td Cedro
                td Cedrela odorata L.
                td Muebles, chapas, carpintería
              tr.bg-color-12
                td Roble
                td Tabebuia rosea
                td Molduras, decoración
              tr
                td Caimo
                td Pouteria caimito
                td Carpintería
              tr.bg-color-12
                td Abarco
                td Cariniana pyriformis
                td Chapas, pisos, parquet

    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema5/2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Principales usos de las especies maderables
              p Se invita a leer el documento Anexo 2. Principales usos de las especies maderables, donde se aborda la utilidad de distintas especies forestales en múltiples sectores productivos.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo2.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
      
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Características de los recursos forestales
    
    p.mb-5 Los recursos forestales presentan características específicas según su tipo. A continuación, se sintetiza sus principales rasgos:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-11
            figure
              img(src='@/assets/curso/tema5/3.png', alt='Texto descriptivo 1')
        h2 No maderables
        ul.lista-ul--color.mb-0
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-13
            p.mb-0 No requieren tala
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-13
            p.mb-0 Materia prima para múltiples productos
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-13
            p.mb-0 Apoyo a economías locales
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-13
            p.mb-0 Incluyen semillas, frutos, resinas, hojas, etc.
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-13
            p.mb-0 Su aprovechamiento comercial requiere permisos ambientales
    
      .col-md.tarjeta.bg-color-7.p-5
        .row.justify-content-center.mb-4
          .col-11
            figure
              img(src='@/assets/curso/tema5/4.png', alt='Texto descriptivo 2')
        h2 Maderables
        ul.lista-ul--color.mb-0
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-13
            p.mb-0 Requieren salvoconducto para su movilización
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-13
            p.mb-0 Tejido leñoso
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-13
            p.mb-0 Usos industriales variados: muebles, papel, construcción, etc.
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-13
            p.mb-0 Riesgo de deforestación si no se controla su extracción

    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema5/2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Normativa
              p Se invita a leer el documento Anexo 3. Normativa, donde se aborda el marco legal vigente relacionado con la gestión de recursos forestales en Colombia, tanto maderables como no maderables. 
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo3.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Estructura del bosque
    
    p La estructura del bosque se refiere a la forma en que se organizan los componentes bióticos dentro del ecosistema forestal. Esta estructura está determinada por características como la diversidad de especies, la disposición espacial de los individuos y la estratificación vertical de la vegetación. Evaluar la estructura del bosque permite comprender su estado de conservación, su dinámica ecológica y su capacidad para ofrecer servicios ecosistémicos. Según Aguirre (2016), los elementos que componen la estructura de un bosque son:

    .bg-full-width.bg-color-2.mb-3
      .p-4.p-md-5
        .row.mb-5
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema5/5.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-8.w-100
                .p-4.text-center
                  p Estructura del bosque
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema5/6.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-8.w-100
                .p-4.text-center
                  p Estructura de especies (diversidad)
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema5/7.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-8.w-100
                .p-4.text-center
                  p Estructura espacial (horizontal)
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema5/8.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-8.w-100
                .p-4.text-center
                  p Estructura dimensional (vertical)

        p.mb-5 Para analizar estas estructuras se utilizan índices forestales, que permiten identificar condiciones en un momento determinado y observar su evolución. Algunas variables clave son: diámetro (DAP), densidad, área basal, volumen, edad, altura media, entre otras.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Estructura de especies
        
        p.mb-5 La estructura de especies, también llamada diversidad de especies se refiere a la riqueza biológica en una zona determinada. Esta es una de las técnicas más utilizadas para el análisis estructural de los ecosistemas forestales, debido a sus ventajas (Aguirre, 2016):

        .row.justify-content-center
          .col-lg-10
            .bg-color-9(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-xl-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema5/9.png', alt='')
                .col-xl
                  .p-4
                    h5 Ventajas del análisis de riqueza de especies
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-13
                        p.mb-0 Permite conocer aspectos clave de la biodiversidad presente en un área.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-13
                        p.mb-0 En algunos grupos, dependiendo del contexto, las especies pueden identificarse con menor complejidad y cuantificarse fácilmente.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-13
                        p.mb-0 Suele haber información secundaria disponible (por ejemplo, en estudios de caracterización de flora realizados para proyectos o licencias).
    
    p.mb-5 Se distinguen dos enfoques en la definición de diversidad de especies:
    
    .row.justify-content-center.mb-5.d-flex.align-items-stretch
      .col-lg-3.d-flex.flex-column.mb-3.mb-lg-0
        div.bg-color-6.p-4
          h5.mb-0 Riqueza de especies
        div.bg-color-7.p-4.flex-grow-1
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.fas.fa-circle-check.bg-color-13
              p.mb-0 Número de especies por unidad de espacio o área.

      .col-lg-3.d-flex.flex-column.mb-3.mb-lg-0
        div.bg-color-6.p-4
          h5.mb-0 Abundancia relativa
        div.bg-color-7.p-4.flex-grow-1
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.fas.fa-circle-check.bg-color-13
              p.mb-0 Número de individuos por especie y su proporción respecto al total.

    
    p.mb-5 Entre más dominante sea una sola especie en un área, menor será la diversidad ecológica del ecosistema.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Estructura horizontal
    
    p.mb-5 La estructura horizontal está relacionada con la disposición espacial de los árboles sobre el suelo. Está influida por factores como el tipo de suelo, las condiciones climáticas y la dinámica del bosque. Se define como la cobertura del estrato leñoso sobre el terreno (Aguirre, 2016, p. 10). Según Acosta et al. (2006), esta estructura puede ser evaluada mediante tres índices principales:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-4.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema5/10.png", alt="Imagen decorativa")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Densidad o abundancia
              p Número de individuos por unidad de área. Representa el grado de ocupación del espacio, lo cual puede reflejarse en densidades bajas, normales o altas. Es un indicador clave para el sector maderero.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema5/11.png", alt="Imagen decorativa")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Dominancia
              p Se refiere al grado en que ciertas especies influyen sobre otras, expresado como la suma de las proyecciones horizontales (fuste, copa, raíces) de los individuos. Se calcula con base en el diámetro a la altura del pecho (DAP) y se relaciona con el área basal.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema5/12.png", alt="Imagen decorativa")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Frecuencia
              p Describe la distribución espacial de las especies. Se obtiene mediante el análisis de la presencia o ausencia de especies en subparcelas iguales, derivadas de las parcelas de inventario.
    
    .bg-full-width.bg-color-2.mb-3
      .p-4.p-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Estructura vertical
        
        p.mb-5 La estructura vertical se refiere a la disposición estratificada de los componentes vegetales en el bosque, teniendo en cuenta su forma de vida y su posición dentro de los estratos de la comunidad vegetal (Aguirre, 2016, p. 12). Esta estructura es clave para:

        .row.justify-content-center
          .col-lg-10
            .bg-color-9(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-xl-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema5/13.png', alt='')
                .col-xl
                  .p-4
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fas.fa-circle-check.bg-color-13
                        p.mb-0 Entender la composición funcional del ecosistema.
                      li.mb-3.d-flex
                        i.fas.fa-circle-check.bg-color-13
                        p.mb-0 Identificar la existencia de estratos superiores, medios e inferiores.
                      li.mb-3.d-flex
                        i.fas.fa-circle-check.bg-color-13
                        p.mb-0 Analizar las condiciones microclimáticas (como la entrada de luz y la retención de humedad) que afectan a los organismos según su posición en el dosel forestal.


</template>

<script>
export default {
  name: 'Tema5',
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
