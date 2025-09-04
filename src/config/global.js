export default {
  global: {
    Name: 'Características de recursos forestales del territorio',
    Description:
      'Este componente formativo describe las características de los recursos forestales del territorio, considerando aspectos normativos, ecosistemas forestales, ordenamiento, usos tradicionales y demás elementos que permitan definir estrategias de aprovechamiento sostenible.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ecosistemas forestales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Componentes de los ecosistemas forestales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Funciones ecológicas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ciclos biogeoquímicos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Interacciones',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ordenamiento forestal en territorios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Usos tradicionales de los recursos forestales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Áreas de conservación local',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de áreas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Características de las áreas de conservación local',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Recursos forestales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Clasificación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Características de los recursos forestales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Estructura del bosque',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Recursos forestales',
      referencia:
        'Departamento Nacional de Planeación. (2020). Política nacional para el control de la deforestación y la gestión sostenible de los bosques. ',
      tipo: 'Política Nacional',
      link:
        'https://www.minambiente.gov.co/documento-entidad/politica-nacional-para-el-control-de-la-deforestacion-y-la-gestion-sostenible-de-los-bosques/',
    },
  ],
  glosario: [
    {
      termino: 'Ciclos biogeoquímicos',
      significado:
        'procesos naturales mediante los cuales se reciclan elementos esenciales como carbono, nitrógeno, fósforo y agua en los ecosistemas.',
    },
    {
      termino: 'Corresponsabilidad',
      significado:
        'principio según el cual el manejo de los bosques es responsabilidad conjunta del Estado, comunidad y sector privado.',
    },
    {
      termino: 'Ecosistema forestal',
      significado:
        'sistema conformado por organismos vivos que interactúan entre sí y con su entorno físico, formando una unidad funcional que proporciona servicios ecosistémicos esenciales.',
    },
    {
      termino: 'Elementos abióticos',
      significado:
        'factores físicos y químicos del entorno como agua, suelo, clima y paisaje, que condicionan el desarrollo del ecosistema.',
    },
    {
      termino: 'Elementos bióticos',
      significado:
        'componentes vivos del ecosistema como vegetación, fauna, microorganismos y seres humanos.',
    },
    {
      termino: 'Funciones ecológicas',
      significado:
        'procesos naturales que permiten la regulación del clima, conservación de suelos, disponibilidad de agua y nutrientes, entre otros.',
    },
    {
      termino: 'Interacciones interespecíficas',
      significado:
        'relaciones entre individuos de diferentes especies, como el parasitismo, comensalismo y mutualismo.',
    },
    {
      termino: 'Interacciones intraespecíficas',
      significado:
        'relaciones entre individuos de la misma especie que pueden implicar cooperación o competencia.',
    },
    {
      termino: 'Ordenamiento forestal',
      significado:
        'instrumento de planificación para el uso sostenible de los bosques, basado en criterios técnicos, sociales, ambientales y normativos.',
    },
    {
      termino: 'Recursos forestales',
      significado:
        'elementos bióticos y abióticos que conforman el bosque y satisfacen una necesidad real o potencial del ser humano. Incluyen componentes genéticos, organismos o sus partes, poblaciones y beneficios derivados del ecosistema. Se encuentran tanto en bosques naturales como en plantaciones forestales, y pueden ser maderables y no maderables.',
    },
    {
      termino: 'Recursos maderables',
      significado:
        'productos derivados de árboles con tejido leñoso, utilizados en sectores como construcción, muebles, papel, embalajes, entre otros. Su aprovechamiento requiere salvoconducto.',
    },
    {
      termino: 'Recursos no maderables',
      significado:
        'elementos obtenidos del bosque sin necesidad de tala, como semillas, hojas, frutos, resinas, fibras, raíces y hongos. Su uso abarca sectores como el alimentario, cosmético, artesanal y farmacéutico, y su aprovechamiento comercial requiere permiso ambiental.',
    },
    {
      termino: 'Uso sostenible',
      significado:
        'forma de aprovechamiento que garantiza la permanencia y funcionalidad del recurso forestal sin comprometer su integridad ecológica.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acosta, V., Araujo, P., y Iturre, M. (2006). Caracteres estructurales de las masas. ',
      link:
        'https://fcf.unse.edu.ar/archivos/series-didacticas/SD-22-Caracteres-estructurales-ACOSTA.pdf',
    },
    {
      referencia:
        'Aguirre, N. (s.f.). Estructura y dinámica del ecosistema forestal. ',
      link:
        'https://nikolayaguirre.com/wp-content/uploads/2013/04/4-estructura-y-dinamica-de-bosques.pdf',
    },
    {
      referencia:
        'Camacho, V. y Ruiz, A. (2012). Marco conceptual y clasificación de los servicios ecosistémicos.',
      link:
        ' https://revistabiociencias.uan.edu.mx/index.php/biociencias/article/view/19',
    },
    {
      referencia:
        'Cortes, D. M., y Pineda, R. (2020). Análisis prospectivo para incentivar el ahorro y uso eficiente del agua en el Tecnoparque Agroecológico Yamboro [Tesis de maestría, Universidad de Manizales]. Repositorio institucional Universidad de Manizales.',
      link:
        ' https://ridum.umanizales.edu.co/search?spc.page=1&query=An%C3%A1lisis%20prospectivo%20para%20incentivar%20el%20ahorro%20y%20uso%20eficiente%20del%20agua%20en%20el%20Tecnoparque%20Agroecol%C3%B3gico%20Yamboro.',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2020). Política nacional para el control de la deforestación y la gestión sostenible de los bosques. /',
      link:
        'https://www.minambiente.gov.co/documento-entidad/politica-nacional-para-el-control-de-la-deforestacion-y-la-gestion-sostenible-de-los-bosques',
    },
    {
      referencia:
        'Fedemaderas. (2025). Deforestación en Colombia registró un aumento en el 2024. ',
      link:
        'https://fedemaderas.org.co/deforestacion-en-colombia-registro-un-aumento-en-el-2024/',
    },
    {
      referencia:
        'Fundación Aquae. (2023). Ciclos biogeoquímicos, la esencia del reciclaje natural. ',
      link:
        'https://www.fundacionaquae.org/ciclos-biogeoquimicos-reciclaje-natural/#:~:text=El%20carbono%20se%20encuentra%20en%20la%20atm%C3%B3sfera,la%20respiraci%C3%B3n%20y%20la%20descomposici%C3%B3n%20de%20organismos',
    },
    {
      referencia: 'Kebbe. (2022). La importancia del ecosistema forestal.',
      link:
        'https://kebbe.iefc.net/wp-content/uploads/2022/03/KEBBE-B1_Secondario_2-La-importancia-del-ecosistema-forestal_ES.pdf',
    },
    {
      referencia:
        'López, R. y Murcia G. (2020). Productos forestales no maderables -PFNM-  en Colombia consideraciones para su desarrollo. ',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/03/Productos-Forestales-No-Maderables-PFNM-en-Colombia_v.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible, Organización de las Naciones Unidas para la Alimentación y la Agricultura, Unión Europea. (2020).  Caracterización de las 30 especies forestales maderables más movilizadas en Colombia provenientes del bosque natural. ',
      link:
        'https://archivo.minambiente.gov.co/images/BosquesBiodiversidadyServiciosEcosistemicos/pdf/Gobernanza_forestal_2/Cata%CC%81logo_de_maderas_de_Colombia.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2020). Lineamientos y Guía para la Ordenación Forestal en Colombia. ',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/03/Lineamientos-y-guia-para-la-ordenacion-forestal-en-Colombia.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2022). Resolución 110 de 2022. Por la cual se establecen las actividades, requisitos y procedimiento para la sustracción de área de las reservas forestales nacionales y regionales para el desarrollo de actividades consideradas de utilidad pública e interés social y se dictan otras disposiciones. ',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/02/Resolucion-110-de-2022.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2024). La deforestación baja en 2023 y en 2024 enfrenta amenazas. ',
      link:
        'https://www.minambiente.gov.co/la-deforestacion-baja-en-2023-y-en-2024-enfrenta-amenazas/',
    },
    {
      referencia:
        'Monroy, L., y Lizarazo, L. (2010). Identificación de hongos fitopatógenos asociados al roble (Quercus humboldtii Bonpl.), en los municipios de Encino (Santander), Arcabuco y Tipacoque (Boyacá). Colombia Forestal, 13(2), 347-356. ',
      link:
        'https://revistas.udistrital.edu.co/index.php/colfor/article/view/3270/0',
    },
    {
      referencia:
        'Organización de las Naciones Unidas ONU. (2015). La Asamblea General adopta la Agenda 2030 para el Desarrollo Sostenible. ',
      link:
        'https://www.un.org/sustainabledevelopment/es/2015/09/la-asamblea-general-adopta-la-agenda-2030-para-el-desarrollo-sostenible/',
    },
    {
      referencia:
        'SUIN Juriscol. (2022). Ley 2206 de 2022. Por medio del cual se incentiva el uso productivo de la guadua y el bambú y su sostenibilidad ambiental en el territorio Nacional. ',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30044204',
    },
    {
      referencia:
        'Universidad Nacional Autónoma de México. (2017). Relaciones interespecíficas e intraespecíficas. ',
      link:
        'https://e1.portalacademico.cch.unam.mx/alumno/biologia2/unidad2/relacionesComunidad/interespecificas',
    },
    {
      referencia:
        'World Resources Institute. (2025). La pérdida de bosques globales rompe récords en 2024 impulsada por incendios masivos. ',
      link:
        'https://es.wri.org/noticias/la-perdida-de-bosques-globales-rompe-records-en-2024-impulsada-por-incendios-masivos',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
