/**
 * AQUOMAR — Multilingual support
 * Languages: ES (Español), CA (Català), EN (English), FR (Français)
 */

const AQUOMAR_TRANSLATIONS = {

  /* ─────────── NAVBAR ─────────── */
  'nav.sectores':     { es:'Sectores',       ca:'Sectors',        en:'Sectors',          fr:'Secteurs'       },
  'nav.productos':    { es:'Productos',      ca:'Productes',      en:'Products',         fr:'Produits'       },
  'nav.como':         { es:'Cómo Funciona',  ca:'Com Funciona',   en:'How It Works',     fr:'Comment ça marche' },
  'nav.beneficios':   { es:'Beneficios',     ca:'Beneficis',      en:'Benefits',         fr:'Avantages'      },
  'nav.testimonios':  { es:'Testimonios',    ca:'Testimonis',     en:'Testimonials',     fr:'Témoignages'    },
  'nav.faq':          { es:'FAQ',            ca:'FAQ',            en:'FAQ',              fr:'FAQ'            },
  'nav.cta':          { es:'Solicitar Info', ca:"Sol·licitar Info", en:'Request Info',   fr:'Demander Info'  },
  'nav.volver':       { es:'Volver',         ca:'Tornar',         en:'Back',             fr:'Retour'         },

  /* ─────────── HERO ─────────── */
  'hero.badge':       { es:'Agua Pura Certificada', ca:'Aigua Pura Certificada', en:'Certified Pure Water', fr:'Eau Pure Certifiée' },
  'hero.h1':          {
    es:'El agua que<br/>mereces,<br/><span class="gradient-text">máxima pureza,<br/>calidad superior.</span>',
    ca:"L'aigua que<br/>mereixes,<br/><span class=\"gradient-text\">màxima puresa,<br/>qualitat superior.</span>",
    en:'The water you<br/>deserve,<br/><span class="gradient-text">maximum purity,<br/>superior quality.</span>',
    fr:"L'eau que<br/>vous méritez,<br/><span class=\"gradient-text\">pureté maximale,<br/>qualité supérieure.</span>"
  },
  'hero.desc':        {
    es:'<strong class="text-white">Sistemas de purificación avanzados</strong> para hogares y empresas. Agua 100% pura, sin cal, sin bacterias, sin compromiso.',
    ca:'<strong class="text-white">Sistemes de purificació avançats</strong> per a llars i empreses. Aigua 100% pura, sense cal, sense bacteris, sense compromisos.',
    en:'<strong class="text-white">Advanced purification systems</strong> for homes and businesses. 100% pure water — no limescale, no bacteria, no compromise.',
    fr:'<strong class="text-white">Systèmes de purification avancés</strong> pour particuliers et entreprises. Eau 100% pure, sans calcaire, sans bactéries, sans compromis.'
  },
  'hero.btn.primary': { es:'Ver Sistemas',       ca:'Veure Sistemes',  en:'View Systems',      fr:'Voir les systèmes'  },
  'hero.btn.second':  { es:'Cómo Funciona',      ca:'Com Funciona',    en:'How It Works',      fr:'Comment ça marche'  },

  /* Hero form */
  'hero.form.badge':  { es:'Consulta gratuita',  ca:'Consulta gratuïta', en:'Free consultation', fr:'Consultation gratuite' },
  'hero.form.title':  {
    es:'Solicita tu presupuesto<br/>sin compromiso',
    ca:'Sol·licita el teu pressupost<br/>sense compromís',
    en:'Request your quote<br/>with no obligation',
    fr:'Demandez votre devis<br/>sans engagement'
  },
  'hero.ph.nombre':   { es:'Nombre',            ca:'Nom',             en:'First name',        fr:'Prénom'             },
  'hero.ph.telefono': { es:'Teléfono',          ca:'Telèfon',         en:'Phone',             fr:'Téléphone'          },
  'hero.ph.email':    { es:'Correo electrónico', ca:'Correu electrònic', en:'Email address',   fr:'Adresse e-mail'     },
  'hero.sector.ph':   { es:'¿Cuál es tu sector?', ca:'Quin és el teu sector?', en:'Your sector?', fr:'Votre secteur ?' },
  'hero.opt.hogar':   { es:'🏠 Hogar',          ca:'🏠 Llar',         en:'🏠 Home',           fr:'🏠 Domicile'        },
  'hero.opt.rest':    { es:'🍽 Restauración',   ca:'🍽 Restauració',  en:'🍽 Food service',   fr:'🍽 Restauration'    },
  'hero.opt.gimn':    { es:'🏋️ Gimnasio',       ca:'🏋️ Gimnàs',       en:'🏋️ Gym',            fr:'🏋️ Salle de sport'  },
  'hero.opt.clin':    { es:'🏥 Clínica',        ca:'🏥 Clínica',      en:'🏥 Clinic',         fr:'🏥 Clinique'        },
  'hero.opt.pisc':    { es:'🏊 Piscina / Parque acuático', ca:'🏊 Piscina / Parc aquàtic', en:'🏊 Pool / Water park', fr:'🏊 Piscine / Parc aquatique' },
  'hero.opt.emp':     { es:'🏢 Otra empresa',   ca:'🏢 Altra empresa', en:'🏢 Other business', fr:'🏢 Autre entreprise' },
  'hero.submit':      { es:'Enviar solicitud gratuita', ca:"Enviar sol·licitud gratuïta", en:'Send free request', fr:'Envoyer la demande gratuite' },
  'hero.disclaimer':  { es:'Sin compromiso · Respuesta en 1h · 100% confidencial', ca:'Sense compromís · Resposta en 1h · 100% confidencial', en:'No obligation · Reply within 1h · 100% confidential', fr:'Sans engagement · Réponse en 1h · 100% confidentiel' },

  /* ─────────── SECTORES ─────────── */
  'sec.tag':          { es:'Soluciones por sector', ca:'Solucions per sector', en:'Solutions by sector', fr:'Solutions par secteur' },
  'sec.h2':           { es:'¿Cuál es tu sector?', ca:'Quin és el teu sector?', en:'What is your sector?', fr:'Quel est votre secteur ?' },
  'sec.desc':         {
    es:'Equipos y soluciones de tratamiento de agua adaptados a cada necesidad, desde el hogar hasta grandes instalaciones comerciales.',
    ca:'Equips i solucions de tractament d\'aigua adaptats a cada necessitat, des de la llar fins a grans instal·lacions comercials.',
    en:'Water treatment equipment and solutions tailored to every need, from homes to large commercial installations.',
    fr:'Équipements et solutions de traitement de l\'eau adaptés à chaque besoin, du domicile aux grandes installations commerciales.'
  },
  'sec.hog.title':    { es:'Hogares',           ca:'Llars',           en:'Homes',             fr:'Particuliers'       },
  'sec.hog.sub':      { es:'Agua pura para toda tu familia', ca:'Aigua pura per a tota la teva família', en:'Pure water for your whole family', fr:'Eau pure pour toute votre famille' },
  'sec.hog.p1':       { es:'Ozono para agua',   ca:'Ozó per a l\'aigua', en:'Water ozone',     fr:'Ozone pour l\'eau'  },
  'sec.hog.p1d':      { es:'Desinfección sin químicos', ca:'Desinfecció sense químics', en:'Chemical-free disinfection', fr:'Désinfection sans produits chimiques' },
  'sec.hog.p2':       { es:'Purificadores de agua', ca:'Purificadors d\'aigua', en:'Water purifiers', fr:'Purificateurs d\'eau' },
  'sec.hog.p2d':      { es:'Osmosis inversa 5 etapas', ca:'Osmosi inversa 5 etapes', en:'5-stage reverse osmosis', fr:'Osmose inverse 5 étapes' },
  'sec.hog.p3':       { es:'Descalcificadores domésticos', ca:'Descalcificadors domèstics', en:'Home water softeners', fr:'Adoucisseurs domestiques' },
  'sec.hog.p3d':      { es:'Sin cal en toda la vivienda', ca:'Sense calc a tota la vivenda', en:'Limescale-free home', fr:'Sans calcaire dans toute la maison' },
  'sec.hog.cta':      { es:'Solicitar información →', ca:'Sol·licitar informació →', en:'Request information →', fr:'Demander des informations →' },
  'sec.rest.title':   { es:'Restauración',      ca:'Restauració',     en:'Food Service',      fr:'Restauration'       },
  'sec.rest.sub':     { es:'Calidad e higiene en tu negocio', ca:'Qualitat i higiene al teu negoci', en:'Quality and hygiene for your business', fr:'Qualité et hygiène pour votre établissement' },
  'sec.rest.p1':      { es:'Ozono profesional', ca:'Ozó professional', en:'Professional ozone', fr:'Ozone professionnel' },
  'sec.rest.p1d':     { es:'Higienización frutas, verduras y superficies', ca:'Higienització fruites, verdures i superfícies', en:'Sanitising fruit, veg & surfaces', fr:'Hygiénisation fruits, légumes et surfaces' },
  'sec.rest.p2':      { es:'Purificadores de agua', ca:'Purificadors d\'aigua', en:'Water purifiers', fr:'Purificateurs d\'eau' },
  'sec.rest.p2d':     { es:'Agua perfecta para cocina y barra', ca:'Aigua perfecta per a cuina i barra', en:'Perfect water for kitchen and bar', fr:'Eau parfaite pour la cuisine et le bar' },
  'sec.rest.p3':      { es:'Descalcificadores',  ca:'Descalcificadors', en:'Water softeners',  fr:'Adoucisseurs'       },
  'sec.rest.p3d':     { es:'Prolonga la vida de la maquinaria', ca:'Allarga la vida de la maquinària', en:'Extends equipment lifespan', fr:'Prolonge la durée de vie du matériel' },
  'sec.rest.cta':     { es:'Solicitar información →', ca:'Sol·licitar informació →', en:'Request information →', fr:'Demander des informations →' },
  'sec.emp.title':    { es:'Empresas',           ca:'Empreses',        en:'Businesses',        fr:'Entreprises'        },
  'sec.emp.sub':      { es:'Soluciones industriales y comerciales a medida', ca:'Solucions industrials i comercials a mida', en:'Custom industrial and commercial solutions', fr:'Solutions industrielles et commerciales sur mesure' },
  'sec.gimn.name':    { es:'Gimnasios',          ca:'Gimnasos',        en:'Gyms',              fr:'Salles de sport'    },
  'sec.gimn.desc':    { es:'Ozono · Purificadores · Descalcificadores', ca:'Ozó · Purificadors · Descalcificadors', en:'Ozone · Purifiers · Softeners', fr:'Ozone · Purificateurs · Adoucisseurs' },
  'sec.clin.name':    { es:'Clínicas',           ca:'Clíniques',       en:'Clinics',           fr:'Cliniques'          },
  'sec.clin.desc':    { es:'Ozono · Purificadores · Descalcificadores', ca:'Ozó · Purificadors · Descalcificadors', en:'Ozone · Purifiers · Softeners', fr:'Ozone · Purificateurs · Adoucisseurs' },
  'sec.pisc.name':    { es:'Piscinas comunitarias', ca:'Piscines comunitàries', en:'Community pools', fr:'Piscines communes' },
  'sec.pisc.desc':    { es:'Filtros de piscina · Robots limpiadores', ca:'Filtres de piscina · Robots netejadors', en:'Pool filters · Cleaning robots', fr:'Filtres de piscine · Robots nettoyeurs' },
  'sec.parq.name':    { es:'Parques acuáticos',  ca:'Parcs aquàtics',  en:'Water parks',       fr:'Parcs aquatiques'   },
  'sec.parq.desc':    { es:'Filtros industriales · Robots limpiadores', ca:'Filtres industrials · Robots netejadors', en:'Industrial filters · Cleaning robots', fr:'Filtres industriels · Robots nettoyeurs' },
  'sec.ver':          { es:'Ver solución',       ca:'Veure solució',   en:'View solution',     fr:'Voir la solution'   },
  'sec.emp.cta':      { es:'Consultoría empresarial gratuita →', ca:'Consultoria empresarial gratuïta →', en:'Free business consultation →', fr:'Consultation entreprise gratuite →' },

  /* ─────────── TRUST BAR ─────────── */
  'trust.tag':        { es:'Certificados y homologaciones', ca:'Certificats i homologacions', en:'Certifications & standards', fr:'Certifications et homologations' },
  'trust.potable':    { es:'Agua Potable Certificada', ca:'Aigua Potable Certificada', en:'Certified Drinking Water', fr:'Eau Potable Certifiée' },
  'trust.rating':     { es:'4.9/5 Valoración Media', ca:'4.9/5 Valoració Mitjana', en:'4.9/5 Average Rating', fr:'4.9/5 Note Moyenne' },

  /* ─────────── PRODUCTOS ─────────── */
  'prod.tag':         { es:'Soluciones de agua',  ca:'Solucions d\'aigua', en:'Water solutions', fr:'Solutions eau'    },
  'prod.h2':          { es:'Todo lo que necesitas para agua<br/>pura y de alta calidad', ca:'Tot el que necessites per a aigua<br/>pura i d\'alta qualitat', en:'Everything you need for<br/>pure, high-quality water', fr:'Tout ce dont vous avez besoin<br/>pour une eau pure et de qualité' },
  'prod.desc':        { es:'Dos tecnologías complementarias para garantizar el agua más pura posible en tu hogar o negocio.', ca:'Dues tecnologies complementàries per garantir l\'aigua més pura possible a la teva llar o negoci.', en:'Two complementary technologies to guarantee the purest possible water at home or at work.', fr:'Deux technologies complémentaires pour garantir l\'eau la plus pure possible dans votre foyer ou entreprise.' },
  'prod.badge.top':   { es:'MÁS VENDIDO',         ca:'MÉS VENUT',      en:'BEST SELLER',       fr:'BEST-SELLER'        },
  'prod.badge.noq':   { es:'SIN QUÍMICOS',         ca:'SENSE QUÍMICS',  en:'CHEMICAL-FREE',     fr:'SANS PRODUITS CHIM.'},
  'prod.os.title':    { es:'Osmosis Inversa Doméstica', ca:'Osmosi Inversa Domèstica', en:'Domestic Reverse Osmosis', fr:'Osmose Inverse Domestique' },
  'prod.os.desc':     { es:'Elimina el 99.9% de contaminantes: cal, metales pesados, cloro y bacterias. 5 etapas de filtración.', ca:'Elimina el 99,9% dels contaminants: calc, metalls pesants, clor i bacteris. 5 etapes de filtració.', en:'Removes 99.9% of contaminants: limescale, heavy metals, chlorine and bacteria. 5 filtration stages.', fr:'Élimine 99,9% des contaminants : calcaire, métaux lourds, chlore et bactéries. 5 étapes de filtration.' },
  'prod.os.f1':       { es:'Membrana 0.0001 micras', ca:'Membrana 0,0001 micres', en:'0.0001 micron membrane', fr:'Membrane 0,0001 micron' },
  'prod.os.f2':       { es:'Instalación bajo fregadero', ca:'Instal·lació sota l\'aigüera', en:'Under-sink installation', fr:'Installation sous évier' },
  'prod.os.f3':       { es:'Garantía 2 años incluida', ca:'Garantia 2 anys inclosa', en:'2-year warranty included', fr:'Garantie 2 ans incluse' },
  'prod.os.precio':   { es:'Solicitar presupuesto',  ca:'Sol·licitar pressupost', en:'Request a quote', fr:'Demander un devis' },
  'prod.vermas':      { es:'Ver más detalles',       ca:'Veure més detalls',   en:'View more details', fr:'Voir plus de détails' },
  'prod.oz.title':    { es:'Purificación por Ozono', ca:'Purificació per Ozó', en:'Ozone Purification', fr:'Purification par Ozone' },
  'prod.oz.desc':     { es:'3.000 veces más eficaz que el cloro. Elimina virus y bacterias sin dejar residuos químicos.', ca:'3.000 vegades més eficaç que el clor. Elimina virus i bacteris sense deixar residus químics.', en:'3,000× more effective than chlorine. Eliminates viruses and bacteria without chemical residues.', fr:'3 000 fois plus efficace que le chlore. Élimine virus et bactéries sans résidus chimiques.' },
  'prod.oz.f1':       { es:'Desinfección sin cloro', ca:'Desinfecció sense clor', en:'Chlorine-free disinfection', fr:'Désinfection sans chlore' },
  'prod.oz.f2':       { es:'Agua, aire y superficies', ca:'Aigua, aire i superfícies', en:'Water, air and surfaces', fr:'Eau, air et surfaces' },
  'prod.oz.f3':       { es:'Sistema compacto y silencioso', ca:'Sistema compacte i silenciós', en:'Compact and silent system', fr:'Système compact et silencieux' },
  'prod.oz.ver':      { es:'Ver producto',           ca:'Veure producte',      en:'View product',      fr:'Voir le produit'    },

  /* ─────────── CÓMO FUNCIONA ─────────── */
  'como.tag':         { es:'Tecnología',         ca:'Tecnologia',      en:'Technology',        fr:'Technologie'        },
  'como.h2':          { es:'Cómo funciona<br/>tu sistema de agua', ca:'Com funciona<br/>el teu sistema d\'aigua', en:'How your<br/>water system works', fr:'Comment fonctionne<br/>votre système d\'eau' },
  'como.os.h3':       { es:'Osmosis Inversa — 5 etapas de filtración', ca:'Osmosi Inversa — 5 etapes de filtració', en:'Reverse Osmosis — 5 filtration stages', fr:'Osmose Inverse — 5 étapes de filtration' },
  'como.s1.title':    { es:'Prefiltro Sedimentos', ca:'Prefiltro Sediments', en:'Sediment pre-filter', fr:'Pré-filtre à sédiments' },
  'como.s1.desc':     { es:'Retiene partículas visibles: arena, óxido, tierra y partículas >5 micras.', ca:'Reté partícules visibles: sorra, òxid, terra i partícules >5 micres.', en:'Traps visible particles: sand, rust, dirt and particles >5 microns.', fr:'Retient les particules visibles : sable, rouille, terre et particules >5 microns.' },
  'como.s2.title':    { es:'Carbón Activado',    ca:'Carbó Activat',    en:'Activated Carbon',  fr:'Charbon Actif'      },
  'como.s2.desc':     { es:'Elimina cloro, sabores y olores desagradables del agua.', ca:'Elimina el clor, sabors i olors desagradables de l\'aigua.', en:'Removes chlorine, unpleasant tastes and odours from the water.', fr:'Élimine le chlore, les mauvais goûts et odeurs de l\'eau.' },
  'como.s3.title':    { es:'Carbón de Bloque',   ca:'Carbó de Bloc',    en:'Block Carbon',      fr:'Charbon en bloc'    },
  'como.s3.desc':     { es:'Filtración de compuestos orgánicos volátiles y cloraminas.', ca:'Filtració de compostos orgànics volàtils i cloramines.', en:'Filters volatile organic compounds and chloramines.', fr:'Filtration des composés organiques volatils et chloramines.' },
  'como.s4.title':    { es:'Membrana OI',        ca:'Membrana OI',      en:'RO Membrane',       fr:'Membrane OI'        },
  'como.s4.desc':     { es:'El núcleo del sistema: elimina 99.9% de TDS, metales pesados y bacterias.', ca:'El nucli del sistema: elimina el 99,9% de TDS, metalls pesants i bacteris.', en:'The heart of the system: removes 99.9% of TDS, heavy metals and bacteria.', fr:'Le cœur du système : élimine 99,9% des TDS, métaux lourds et bactéries.' },
  'como.s5.title':    { es:'Post-Carbono',       ca:'Post-Carbó',       en:'Post-Carbon',       fr:'Post-Carbone'       },
  'como.s5.desc':     { es:'Pulido final para lograr el sabor y la frescura perfectos.', ca:'Poliment final per aconseguir el gust i la frescor perfectes.', en:'Final polish for perfect taste and freshness.', fr:'Finition pour un goût et une fraîcheur parfaits.' },
  'como.oz.h3':       { es:'Ozono — Cómo actúa', ca:"Ozó — Com actua",  en:'Ozone — How it works', fr:'Ozone — Comment ça fonctionne' },
  'como.oz.s1.t':     { es:'Generación de O₃',   ca:'Generació d\'O₃',  en:'O₃ generation',    fr:'Génération d\'O₃'   },
  'como.oz.s1.d':     { es:'El generador produce ozono a partir del oxígeno del aire mediante descarga corona.', ca:'El generador produeix ozó a partir de l\'oxigen de l\'aire mitjançant descàrrega corona.', en:'The generator produces ozone from atmospheric oxygen via corona discharge.', fr:'Le générateur produit de l\'ozone à partir de l\'oxygène de l\'air par décharge couronne.' },
  'como.oz.s2.t':     { es:'Contacto con el agua', ca:'Contacte amb l\'aigua', en:'Contact with water', fr:'Contact avec l\'eau' },
  'como.oz.s2.d':     { es:'El ozono se inyecta en el agua y destruye la membrana celular de bacterias, virus y hongos.', ca:"L'ozó s'injecta a l'aigua i destrueix la membrana cel·lular de bacteris, virus i fongs.", en:'Ozone is injected into the water and destroys the cell membrane of bacteria, viruses and fungi.', fr:"L'ozone est injecté dans l'eau et détruit la membrane cellulaire des bactéries, virus et champignons." },
  'como.oz.s3.t':     { es:'Vuelta a O₂',         ca:'Tornada a O₂',     en:'Back to O₂',        fr:'Retour à O₂'        },
  'como.oz.s3.d':     { es:'El ozono sobrante se convierte en oxígeno puro. Sin residuos químicos, sin subproductos.', ca:"L'ozó sobrant es converteix en oxigen pur. Sense residus químics, sense subproductes.", en:'Residual ozone converts back to pure oxygen. No chemical residues, no by-products.', fr:"L'ozone résiduel se transforme en oxygène pur. Aucun résidu chimique, aucun sous-produit." },

  /* ─────────── PROCESO / CÓMO FUNCIONA ─────────── */
  'proc.tag':         { es:'Proceso',              ca:'Procés',              en:'Process',               fr:'Processus'              },
  'proc.h2':          { es:'¿Cómo purifica el agua?', ca:"Com purifica l'aigua?", en:'How does it purify water?', fr:"Comment purifie-t-il l'eau ?" },
  'proc.desc':        { es:'Tecnología probada con resultados visibles desde el primer día.', ca:'Tecnologia provada amb resultats visibles des del primer dia.', en:'Proven technology with visible results from day one.', fr:'Technologie éprouvée avec des résultats visibles dès le premier jour.' },
  'proc.oi.title':    { es:'Osmosis Inversa — 5 Etapas', ca:'Osmosi Inversa — 5 Etapes', en:'Reverse Osmosis — 5 Stages', fr:'Osmose Inverse — 5 Étapes' },
  'proc.oi.s1':       { es:'Prefiltro Sedimentos',  ca:'Prefiltro Sediments',  en:'Sediment Pre-filter',   fr:'Pré-filtre Sédiments'   },
  'proc.oi.s1d':      { es:'Retiene arena, óxido, tierra y partículas >5 micras.', ca:'Reté sorra, òxid, terra i partícules >5 micres.', en:'Retains sand, rust, dirt and particles >5 microns.', fr:'Retient sable, rouille, terre et particules >5 microns.' },
  'proc.oi.s2':       { es:'Carbón Activado',       ca:'Carbó Activat',        en:'Activated Carbon',      fr:'Charbon Actif'          },
  'proc.oi.s2d':      { es:'Elimina cloro, sabores y olores desagradables del agua.', ca:'Elimina clor, sabors i olors desagradables de l\'aigua.', en:'Removes chlorine, unpleasant tastes and odours.', fr:'Élimine le chlore, les goûts et odeurs désagréables.' },
  'proc.oi.s3':       { es:'Carbón de Bloque',      ca:'Carbó de Bloc',        en:'Block Carbon',          fr:'Charbon en Bloc'        },
  'proc.oi.s3d':      { es:'Filtración de compuestos orgánicos volátiles y cloraminas.', ca:'Filtració de compostos orgànics volàtils i cloramines.', en:'Filters volatile organic compounds and chloramines.', fr:'Filtre les composés organiques volatils et les chloramines.' },
  'proc.oi.s4':       { es:'Membrana OI',           ca:'Membrana OI',          en:'RO Membrane',           fr:'Membrane OI'            },
  'proc.oi.s4d':      { es:'El núcleo: elimina 99.9% de TDS, metales pesados y bacterias.', ca:'El nucli: elimina el 99,9% de TDS, metalls pesants i bacteris.', en:'The core: removes 99.9% of TDS, heavy metals and bacteria.', fr:'Le noyau : élimine 99,9% des TDS, métaux lourds et bactéries.' },
  'proc.oi.s5':       { es:'Post-Carbono',          ca:'Post-Carboni',         en:'Post-Carbon',           fr:'Post-Carbone'           },
  'proc.oi.s5d':      { es:'Pulido final para el sabor y la frescura perfectos.', ca:'Polit final per al sabor i la frescor perfectes.', en:'Final polish for perfect taste and freshness.', fr:'Polissage final pour un goût et une fraîcheur parfaits.' },
  'proc.oz.title':    { es:'Ozono — Cómo actúa',   ca:'Ozó — Com actua',      en:'Ozone — How it works',  fr:'Ozone — Comment ça agit' },
  'proc.oz.s1':       { es:'Generación de O₃',     ca:'Generació d\'O₃',      en:'O₃ Generation',         fr:'Génération d\'O₃'       },
  'proc.oz.s1d':      { es:'El generador produce ozono a partir del oxígeno del aire mediante descarga corona.', ca:'El generador produeix ozó a partir de l\'oxigen de l\'aire mitjançant descàrrega corona.', en:'The generator produces ozone from air oxygen via corona discharge.', fr:'Le générateur produit de l\'ozone à partir de l\'oxygène de l\'air par décharge couronne.' },
  'proc.oz.s2':       { es:'Contacto con el agua', ca:'Contacte amb l\'aigua', en:'Water contact',         fr:'Contact avec l\'eau'    },
  'proc.oz.s2d':      { es:'El ozono se inyecta en el agua y destruye bacterias, virus y hongos al instante.', ca:'L\'ozó s\'injecta a l\'aigua i destrueix bacteris, virus i fongs a l\'instant.', en:'Ozone is injected into the water and instantly destroys bacteria, viruses and fungi.', fr:'L\'ozone est injecté dans l\'eau et détruit instantanément bactéries, virus et champignons.' },
  'proc.oz.s3':       { es:'Vuelta a O₂',          ca:'Retorn a O₂',          en:'Back to O₂',            fr:'Retour à O₂'            },
  'proc.oz.s3d':      { es:'El ozono sobrante se convierte en oxígeno puro. Sin residuos, sin química.', ca:'L\'ozó sobrant es converteix en oxigen pur. Sense residus, sense química.', en:'Leftover ozone converts to pure oxygen. No residues, no chemicals.', fr:'L\'ozone résiduel se convertit en oxygène pur. Sans résidus, sans produits chimiques.' },

  /* ─────────── BENEFICIOS ─────────── */
  'ben.tag':          { es:'Beneficios',         ca:'Beneficis',       en:'Benefits',          fr:'Avantages'          },
  'ben.h2':           { es:'¿Por qué elegir<br/>AQUOMAR?', ca:"Per què triar<br/>AQUOMAR?", en:'Why choose<br/>AQUOMAR?', fr:'Pourquoi choisir<br/>AQUOMAR ?' },
  'ben.desc':         { es:'No es solo agua filtrada. Es salud, ahorro y tranquilidad para tu familia cada día.', ca:'No és sols aigua filtrada. És salut, estalvi i tranquil·litat per a la teva família cada dia.', en:'It\'s not just filtered water. It\'s health, savings and peace of mind for your family every day.', fr:"Ce n'est pas seulement de l'eau filtrée. C'est la santé, les économies et la tranquillité d'esprit au quotidien." },
  'ben.b1.t':         { es:'Ahorro real',        ca:'Estalvi real',    en:'Real savings',      fr:'Économies réelles'  },
  'ben.b1.d':         { es:'Deja de gastar en agua embotellada. Recupera la inversión en menos de 12 meses.', ca:'Deixa de gastar en aigua embotellada. Recuperes la inversió en menys de 12 mesos.', en:'Stop spending on bottled water. Recoup your investment in under 12 months.', fr:"Arrêtez d'acheter de l'eau en bouteille. Rentabilisé en moins de 12 mois." },
  'ben.b2.t':         { es:'Salud protegida',    ca:'Salut protegida', en:'Protected health',  fr:'Santé protégée'     },
  'ben.b2.d':         { es:'Elimina cloro, metales pesados y microorganismos perjudiciales para tu salud.', ca:'Elimina el clor, metalls pesants i microorganismes perjudicials per a la teva salut.', en:'Eliminates chlorine, heavy metals and harmful micro-organisms for better health.', fr:'Élimine le chlore, les métaux lourds et les micro-organismes nuisibles pour votre santé.' },
  'ben.b3.t':         { es:'Sostenibilidad',     ca:'Sostenibilitat',  en:'Sustainability',    fr:'Durabilité'         },
  'ben.b3.d':         { es:'Reduce el uso de plástico de un solo uso. Un hogar más sostenible para el planeta.', ca:"Redueix l'ús de plàstic d'un sol ús. Una llar més sostenible per al planeta.", en:'Reduce single-use plastic. A more sustainable home for the planet.', fr:"Réduisez le plastique à usage unique. Un foyer plus durable pour la planète." },
  'ben.b4.t':         { es:'Mantenimiento fácil', ca:'Manteniment fàcil', en:'Easy maintenance', fr:'Entretien facile'   },
  'ben.b4.d':         { es:'Filtros de larga duración con alertas automáticas. Nosotros nos encargamos de todo.', ca:'Filtres de llarga durada amb alertes automàtiques. Nosaltres ens encarreguem de tot.', en:'Long-life filters with automatic alerts. We take care of everything.', fr:'Filtres longue durée avec alertes automatiques. Nous nous occupons de tout.' },
  'tabla.title':      { es:'Agua del grifo vs. AQUOMAR', ca:'Aigua de l\'aixeta vs. AQUOMAR', en:'Tap water vs. AQUOMAR', fr:'Eau du robinet vs. AQUOMAR' },
  'tabla.h.param':    { es:'Parámetro',          ca:'Paràmetre',       en:'Parameter',         fr:'Paramètre'          },
  'tabla.h.grifo':    { es:'Grifo',              ca:'Aixeta',          en:'Tap',               fr:'Robinet'            },
  'tabla.r1.p':       { es:'Cal (TDS)',           ca:'Calc (TDS)',      en:'Limescale (TDS)',   fr:'Calcaire (TDS)'     },
  'tabla.r1.a':       { es:'Alto',               ca:'Alt',             en:'High',              fr:'Élevé'              },
  'tabla.r1.b':       { es:'99% menos',          ca:'99% menys',       en:'99% less',          fr:'99% moins'          },
  'tabla.r2.p':       { es:'Cloro',              ca:'Clor',            en:'Chlorine',          fr:'Chlore'             },
  'tabla.r2.a':       { es:'Presente',           ca:'Present',         en:'Present',           fr:'Présent'            },
  'tabla.r2.b':       { es:'Eliminado',          ca:'Eliminat',        en:'Eliminated',        fr:'Éliminé'            },
  'tabla.r3.p':       { es:'Bacterias',          ca:'Bacteris',        en:'Bacteria',          fr:'Bactéries'          },
  'tabla.r3.a':       { es:'Variable',           ca:'Variable',        en:'Variable',          fr:'Variable'           },
  'tabla.r4.p':       { es:'Metales',            ca:'Metalls',         en:'Metals',            fr:'Métaux'             },
  'tabla.r4.a':       { es:'Detectados',         ca:'Detectats',       en:'Detected',          fr:'Détectés'           },
  'tabla.r4.b':       { es:'No detectados',      ca:'No detectats',    en:'Not detected',      fr:'Non détectés'       },
  'tabla.r5.p':       { es:'Sabor',              ca:'Sabor',           en:'Taste',             fr:'Goût'               },
  'tabla.r5.a':       { es:'A cloro',            ca:'A clor',          en:'Chlorinated',       fr:'Chloré'             },
  'tabla.r5.b':       { es:'Puro',               ca:'Pur',             en:'Pure',              fr:'Pur'                },
  'tabla.r6.p':       { es:'Coste/año',          ca:'Cost/any',        en:'Cost/year',         fr:'Coût/an'            },
  'tabla.r6.a':       { es:'Alto coste',         ca:'Alt cost',        en:'High cost',         fr:'Coût élevé'         },
  'tabla.r6.b':       { es:'Mínimo',             ca:'Mínim',           en:'Minimal',           fr:'Minimal'            },

  /* ─────────── TESTIMONIOS ─────────── */
  'test.tag':         { es:'Testimonios',         ca:'Testimonis',      en:'Testimonials',      fr:'Témoignages'        },
  'test.h2':          { es:'Lo que dicen nuestros clientes', ca:'El que diuen els nostres clients', en:'What our clients say', fr:'Ce que disent nos clients' },
  'test.rating':      { es:'4.9 / 5 basado en +350 reseñas verificadas', ca:'4.9 / 5 basat en +350 ressenyes verificades', en:'4.9 / 5 based on 350+ verified reviews', fr:'4,9 / 5 basé sur +350 avis vérifiés' },
  'test.1.text':      { es:'"Llevábamos años gastando 50€ al mes en agua embotellada. Desde que instalamos la osmosis inversa, el agua del grifo sabe increíble y hemos eliminado toda la cal de los electrodomésticos."', ca:'"Feia anys que gastàvem 50€ al mes en aigua embotellada. Des que vam instal·lar l\'osmosi inversa, l\'aigua de l\'aixeta sap increïble i hem eliminat tota la calc dels electrodomèstics."', en:'"We\'d been spending €50 a month on bottled water for years. Since we installed the reverse osmosis system, the tap water tastes incredible and we\'ve eliminated all the limescale from our appliances."', fr:'"Nous dépensions 50€ par mois en eau en bouteille depuis des années. Depuis que nous avons installé l\'osmose inverse, l\'eau du robinet est incroyable et nous avons éliminé tout le calcaire de nos appareils."' },
  'test.1.loc':       { es:'Madrid · Osmosis Inversa Pro', ca:'Madrid · Osmosi Inversa Pro', en:'Madrid · Reverse Osmosis Pro', fr:'Madrid · Osmose Inverse Pro' },
  'test.2.text':      { es:'"Instalamos el sistema de ozono en nuestro restaurante para higienizar frutas y verduras. Los controles sanitarios han mejorado notablemente y el equipo de cocina está encantado."', ca:'"Vam instal·lar el sistema d\'ozó al nostre restaurant per higienitzar fruites i verdures. Els controls sanitaris han millorat notablement i l\'equip de cuina està encantat."', en:'"We installed the ozone system in our restaurant to sanitise fruit and vegetables. Health inspections have improved markedly and the kitchen team is delighted."', fr:'"Nous avons installé le système ozone dans notre restaurant pour hygiéniser fruits et légumes. Les contrôles sanitaires se sont nettement améliorés et l\'équipe de cuisine est ravie."' },
  'test.2.loc':       { es:'Barcelona · Sistema Ozono Pro', ca:'Barcelona · Sistema Ozó Pro', en:'Barcelona · Ozone Pro System', fr:'Barcelone · Système Ozone Pro' },
  'test.3.text':      { es:'"Contratamos el pack completo para nuestra clínica dental. La calidad del agua ha mejorado radicalmente y el mantenimiento de los equipos se ha reducido considerablemente."', ca:'"Vam contractar el paquet complet per a la nostra clínica dental. La qualitat de l\'aigua ha millorat radicalment i el manteniment dels equips s\'ha reduït considerablement."', en:'"We took the complete package for our dental clinic. Water quality has improved dramatically and equipment maintenance costs have been significantly reduced."', fr:'"Nous avons souscrit le pack complet pour notre cabinet dentaire. La qualité de l\'eau s\'est radicalement améliorée et la maintenance des équipements a été considérablement réduite."' },
  'test.3.loc':       { es:'Valencia · Pack Completo',    ca:'València · Paquet Complet', en:'Valencia · Complete Package', fr:'Valence · Pack Complet' },

  /* ─────────── FAQ ─────────── */
  'faq.tag':          { es:'Preguntas frecuentes', ca:'Preguntes freqüents', en:'Frequently asked questions', fr:'Questions fréquentes' },
  'faq.h2':          { es:'¿Tienes dudas?',       ca:'Tens dubtes?',    en:'Got questions?',    fr:'Des questions ?'    },
  'faq.q1':          { es:'¿Cuánto tarda la instalación?', ca:'Quant tarda la instal·lació?', en:'How long does installation take?', fr:'Combien de temps dure l\'installation ?' },
  'faq.a1':          { es:'La instalación bajo fregadero de la osmosis inversa tarda entre 1.5 y 2 horas. El sistema de ozono se instala en 30-45 minutos. Nuestros técnicos certificados se encargan de todo sin obras.', ca:'La instal·lació sota l\'aigüera de l\'osmosi inversa tarda entre 1,5 i 2 hores. El sistema d\'ozó s\'instal·la en 30-45 minuts. Els nostres tècnics certificats s\'encarreguen de tot sense obres.', en:'Under-sink reverse osmosis installation takes 1.5 to 2 hours. The ozone system is installed in 30–45 minutes. Our certified technicians handle everything without any building work.', fr:"L'installation sous évier de l'osmose inverse prend 1h30 à 2h. Le système ozone s'installe en 30-45 minutes. Nos techniciens certifiés s'occupent de tout, sans travaux." },
  'faq.q2':          { es:'¿Cada cuánto hay que cambiar los filtros?', ca:'Cada quant cal canviar els filtres?', en:'How often do filters need replacing?', fr:'À quelle fréquence faut-il changer les filtres ?' },
  'faq.a2':          { es:'Los prefiltros se cambian cada 6-12 meses según el uso. La membrana dura 2-3 años. Ofrecemos un plan de mantenimiento anual con todos los materiales incluidos.', ca:'Els prefiltres es canvien cada 6-12 mesos segons l\'ús. La membrana dura 2-3 anys. Oferim un pla de manteniment anual amb tots els materials inclosos.', en:'Pre-filters are replaced every 6–12 months depending on usage. The membrane lasts 2–3 years. We offer an annual maintenance plan with all materials included.', fr:"Les pré-filtres se changent tous les 6-12 mois selon l'utilisation. La membrane dure 2-3 ans. Nous proposons un plan de maintenance annuel avec tous les matériaux inclus." },
  'faq.q3':          { es:'¿El ozono es seguro para consumo humano?', ca:'L\'ozó és segur per al consum humà?', en:'Is ozone safe for human consumption?', fr:"L'ozone est-il sûr pour la consommation humaine ?" },
  'faq.a3':          { es:'Sí, completamente. El ozono se descompone en oxígeno puro en minutos sin dejar residuos. La OMS lo reconoce como uno de los métodos de desinfección más seguros y efectivos del agua potable.', ca:"Sí, completament. L'ozó es descompon en oxigen pur en minuts sense deixar residus. L'OMS el reconeix com un dels mètodes de desinfecció més segurs i efectius de l'aigua potable.", en:"Yes, completely. Ozone breaks down into pure oxygen within minutes without leaving any residues. The WHO recognises it as one of the safest and most effective methods of drinking water disinfection.", fr:"Oui, tout à fait. L'ozone se décompose en oxygène pur en quelques minutes sans laisser de résidus. L'OMS le reconnaît comme l'une des méthodes de désinfection de l'eau potable les plus sûres et efficaces." },
  'faq.q4':          { es:'¿Ofrecéis garantía?', ca:'Oferiu garantia?', en:'Do you offer a warranty?', fr:'Proposez-vous une garantie ?' },
  'faq.a4':          { es:'Todos nuestros equipos incluyen 2 años de garantía de fábrica. El servicio técnico está disponible en 24 horas laborables en toda España peninsular.', ca:'Tots els nostres equips inclouen 2 anys de garantia de fàbrica. El servei tècnic està disponible en 24 hores laborables a tota la Espanya peninsular.', en:'All our equipment includes a 2-year manufacturer warranty. Technical support is available within 24 working hours across mainland Spain.', fr:"Tous nos équipements incluent 2 ans de garantie fabricant. Le service technique est disponible en 24 heures ouvrables dans toute l'Espagne continentale." },
  'faq.q5':          { es:'¿Sirve para agua de pozo?', ca:'Serveix per a aigua de pou?', en:'Does it work with well water?', fr:"Fonctionne-t-il avec l'eau de puits ?" },
  'faq.a5':          { es:'Sí, disponemos de soluciones específicas para agua de pozo o con alta dureza. Te recomendamos solicitar un análisis gratuito del agua para determinar el sistema más adecuado.', ca:"Sí, disposem de solucions específiques per a aigua de pou o amb alta duresa. Et recomanem sol·licitar una anàlisi gratuïta de l'aigua per determinar el sistema més adequat.", en:"Yes, we have specific solutions for well water or high-hardness water. We recommend requesting a free water analysis to determine the most suitable system.", fr:"Oui, nous disposons de solutions spécifiques pour l'eau de puits ou à forte dureté. Nous recommandons de demander une analyse d'eau gratuite pour déterminer le système le plus adapté." },
  'faq.q6':          { es:'¿Necesito hacer obras en mi cocina?', ca:'Necessito fer obres a la meva cuina?', en:'Do I need to do any work in my kitchen?', fr:'Dois-je faire des travaux dans ma cuisine ?' },
  'faq.a6':          { es:'No, ninguna. La instalación es totalmente limpia y se realiza bajo el fregadero aprovechando las conexiones existentes. En menos de 2 horas tendrás tu sistema funcionando sin marcas en paredes ni muebles.', ca:'No, cap. La instal·lació és totalment neta i es fa sota la pica aprofitant les connexions existents. En menys de 2 hores tindràs el teu sistema funcionant sense marques a parets ni mobles.', en:'No, none at all. The installation is completely clean and is performed under the sink using existing connections. In less than 2 hours your system will be up and running with no marks on walls or furniture.', fr:'Non, aucun. L\'installation est totalement propre et se réalise sous l\'évier en utilisant les connexions existantes. En moins de 2 heures votre système sera opérationnel sans marques sur les murs ni les meubles.' },

  /* ─────────── CONTACTO ─────────── */
  'cont.tag':         { es:'Contacto',            ca:'Contacte',        en:'Contact',           fr:'Contact'            },
  'cont.h2':          { es:'Solicita tu<br/>presupuesto gratuito', ca:"Sol·licita el teu<br/>pressupost gratuït", en:'Request your<br/>free quote', fr:'Demandez votre<br/>devis gratuit' },
  'cont.desc':        { es:'Sin compromiso. Te contactamos en menos de 24h con la solución ideal para tu hogar o negocio.', ca:'Sense compromís. Et contactem en menys de 24h amb la solució ideal per a la teva llar o negoci.', en:'No obligation. We contact you within 24h with the ideal solution for your home or business.', fr:'Sans engagement. Nous vous contactons sous 24h avec la solution idéale pour votre domicile ou entreprise.' },
  'cont.lbl.tel':     { es:'Teléfono',            ca:'Telèfon',         en:'Phone',             fr:'Téléphone'          },
  'cont.lbl.email':   { es:'Email',               ca:'Correu',          en:'Email',             fr:'E-mail'             },
  'cont.lbl.cob':     { es:'Cobertura',           ca:'Cobertura',       en:'Coverage',          fr:'Couverture'         },
  'cont.cob.val':     { es:'España peninsular',   ca:'Espanya peninsular', en:'Mainland Spain', fr:'Espagne continentale' },
  'cont.lbl.nombre':  { es:'Nombre *',            ca:'Nom *',           en:'First name *',      fr:'Prénom *'           },
  'cont.ph.nombre':   { es:'Tu nombre',           ca:'El teu nom',      en:'Your first name',   fr:'Votre prénom'       },
  'cont.lbl.apell':   { es:'Apellidos *',         ca:'Cognoms *',       en:'Last name *',       fr:'Nom *'              },
  'cont.ph.apell':    { es:'Tus apellidos',       ca:'Els teus cognoms', en:'Your last name',   fr:'Votre nom'          },
  'cont.lbl.email2':  { es:'Email *',             ca:'Correu *',        en:'Email *',           fr:'E-mail *'           },
  'cont.lbl.tel2':    { es:'Teléfono',            ca:'Telèfon',         en:'Phone',             fr:'Téléphone'          },
  'cont.lbl.sector':  { es:'Sector / Sistema de interés', ca:'Sector / Sistema d\'interès', en:'Sector / System of interest', fr:'Secteur / Système souhaité' },
  'cont.sel.ph':      { es:'Selecciona una opción', ca:'Selecciona una opció', en:'Select an option', fr:'Sélectionnez une option' },
  'cont.sel.1':       { es:'🏠 Hogar — Purificador / Ozono / Descalcificador', ca:'🏠 Llar — Purificador / Ozó / Descalcificador', en:'🏠 Home — Purifier / Ozone / Softener', fr:'🏠 Domicile — Purificateur / Ozone / Adoucisseur' },
  'cont.sel.2':       { es:'🍽 Restauración — Ozono / Purificador / Descalcificador', ca:'🍽 Restauració — Ozó / Purificador / Descalcificador', en:'🍽 Food service — Ozone / Purifier / Softener', fr:'🍽 Restauration — Ozone / Purificateur / Adoucisseur' },
  'cont.sel.3':       { es:'🏋️ Gimnasio',          ca:'🏋️ Gimnàs',        en:'🏋️ Gym',            fr:'🏋️ Salle de sport'  },
  'cont.sel.4':       { es:'🏥 Clínica',           ca:'🏥 Clínica',       en:'🏥 Clinic',         fr:'🏥 Clinique'        },
  'cont.sel.5':       { es:'🏊 Piscina / Parque acuático', ca:'🏊 Piscina / Parc aquàtic', en:'🏊 Pool / Water park', fr:'🏊 Piscine / Parc aquatique' },
  'cont.sel.6':       { es:'🏢 Otra empresa',      ca:'🏢 Altra empresa',  en:'🏢 Other business', fr:'🏢 Autre entreprise' },
  'cont.sel.7':       { es:'❓ No lo sé todavía',  ca:'❓ Encara no ho sé', en:"❓ Not sure yet",  fr:'❓ Pas encore décidé' },
  'cont.lbl.msg':     { es:'Mensaje',             ca:'Missatge',        en:'Message',           fr:'Message'            },
  'cont.ph.msg':      { es:'Cuéntanos tu situación...', ca:'Explica\'ns la teva situació...', en:'Tell us about your situation...', fr:'Décrivez votre situation...' },
  'cont.submit':      { es:'Enviar Solicitud Gratuita', ca:"Enviar Sol·licitud Gratuïta", en:'Send Free Request', fr:'Envoyer la demande gratuite' },
  'cont.disc':        { es:'Sin compromiso · Respuesta en 1h · Datos protegidos', ca:'Sense compromís · Resposta en 1h · Dades protegides', en:'No obligation · Reply within 1h · Data protected', fr:'Sans engagement · Réponse en 1h · Données protégées' },

  'trust.zonas':      { es:'<strong class="text-navy font-semibold">Servicio en toda Catalunya</strong> — Barcelona, Girona, Tarragona y Lleida', ca:'<strong class="text-navy font-semibold">Servei a tota Catalunya</strong> — Barcelona, Girona, Tarragona i Lleida', en:'<strong class="text-navy font-semibold">Service across Catalonia</strong> — Barcelona, Girona, Tarragona and Lleida', fr:'<strong class="text-navy font-semibold">Service dans toute la Catalogne</strong> — Barcelone, Gérone, Tarragone et Lleida' },

  /* ─────────── FOOTER ─────────── */
  'footer.zonas':     { es:'Servicio e instalación a domicilio en toda Catalunya · Barcelona · Girona · Tarragona · Lleida · Sabadell · Terrassa · Mataró · Reus · Figueres', ca:'Servei i instal·lació a domicili a tota Catalunya · Barcelona · Girona · Tarragona · Lleida · Sabadell · Terrassa · Mataró · Reus · Figueres', en:'Home service and installation across Catalonia · Barcelona · Girona · Tarragona · Lleida · Sabadell · Terrassa · Mataró · Reus · Figueres', fr:'Service et installation à domicile dans toute la Catalogne · Barcelone · Gérone · Tarragone · Lleida · Sabadell · Terrassa · Mataró · Reus · Figueres' },
  'foot.desc':        { es:'Especialistas en purificación de agua por osmosis inversa y ozono desde 2010.', ca:'Especialistes en purificació d\'aigua per osmosi inversa i ozó des de 2010.', en:'Specialists in water purification by reverse osmosis and ozone since 2010.', fr:'Spécialistes en purification d\'eau par osmose inverse et ozone depuis 2010.' },
  'foot.col1':        { es:'Productos',           ca:'Productes',       en:'Products',          fr:'Produits'           },
  'foot.col2':        { es:'Empresa',             ca:'Empresa',         en:'Company',           fr:'Entreprise'         },
  'foot.col3':        { es:'Soporte',             ca:'Suport',          en:'Support',           fr:'Assistance'         },
  'foot.rights':      { es:'© 2026 AQUOMAR. Todos los derechos reservados.', ca:'© 2026 AQUOMAR. Tots els drets reservats.', en:'© 2026 AQUOMAR. All rights reserved.', fr:'© 2026 AQUOMAR. Tous droits réservés.' },
  'foot.tagline':     { es:'Hecho con agua pura en España 💧', ca:'Fet amb aigua pura a Espanya 💧', en:'Made with pure water in Spain 💧', fr:'Fait avec de l\'eau pure en Espagne 💧' },

  /* ─────────── OZONO PAGE ─────────── */
  'oz.label':         { es:'Sistema de Purificación', ca:'Sistema de Purificació', en:'Purification System', fr:'Système de Purification' },
  'oz.desc':          { es:'La tecnología de desinfección más avanzada del mercado. 3.000 veces más eficaz que el cloro. Sin residuos. Sin compromisos.', ca:'La tecnologia de desinfecció més avançada del mercat. 3.000 vegades més eficaç que el clor. Sense residus. Sense compromisos.', en:'The most advanced disinfection technology on the market. 3,000× more effective than chlorine. No residues. No compromise.', fr:'La technologie de désinfection la plus avancée du marché. 3 000 fois plus efficace que le chlore. Sans résidus. Sans compromis.' },
  'oz.cta1':          { es:'Ver especificaciones',  ca:'Veure especificacions', en:'View specifications', fr:'Voir les spécifications' },
  'oz.cta2':          { es:'Solicitar información', ca:"Sol·licitar informació", en:'Request information', fr:'Demander des informations' },
  'oz.specs.tag':     { es:'Especificaciones técnicas', ca:'Especificacions tècniques', en:'Technical specifications', fr:'Spécifications techniques' },
  'oz.specs.h2':      { es:'Ingeniería de precisión', ca:'Enginyeria de precisió', en:'Precision engineering', fr:'Ingénierie de précision' },
  'oz.specs.desc':    { es:'Cada componente diseñado para el máximo rendimiento y durabilidad.', ca:'Cada component dissenyat per al màxim rendiment i durabilitat.', en:'Every component designed for maximum performance and durability.', fr:'Chaque composant conçu pour des performances et une durabilité maximales.' },
  'oz.how.tag':       { es:'Tecnología',           ca:'Tecnologia',      en:'Technology',        fr:'Technologie'        },
  'oz.how.h2':        { es:'Desinfección sin química', ca:'Desinfecció sense química', en:'Chemistry-free disinfection', fr:'Désinfection sans chimie' },
  'oz.how.desc':      { es:'El ozono es el tercer agente oxidante más potente del planeta. Actúa en segundos y se convierte en oxígeno puro.', ca:"L'ozó és el tercer agent oxidant més potent del planeta. Actua en segons i es converteix en oxigen pur.", en:'Ozone is the third most powerful oxidising agent on the planet. It acts within seconds and converts back to pure oxygen.', fr:"L'ozone est le troisième agent oxydant le plus puissant de la planète. Il agit en quelques secondes et se transforme en oxygène pur." },
  'oz.how.s1.t':      { es:'Generación',          ca:'Generació',       en:'Generation',        fr:'Génération'         },
  'oz.how.s1.d':      { es:'El equipo convierte oxígeno del aire en ozono (O₃) mediante tecnología de descarga eléctrica corona.', ca:"L'equip converteix oxigen de l'aire en ozó (O₃) mitjançant tecnologia de descàrrega elèctrica corona.", en:'The unit converts atmospheric oxygen into ozone (O₃) using electrical corona discharge technology.', fr:"L'unité convertit l'oxygène de l'air en ozone (O₃) grâce à la technologie de décharge électrique couronne." },
  'oz.how.s2.t':      { es:'Inyección',           ca:'Injecció',        en:'Injection',         fr:'Injection'          },
  'oz.how.s2.d':      { es:'El ozono se disuelve en el agua mediante un sistema venturi de alta eficiencia, garantizando una distribución uniforme.', ca:"L'ozó es dissol a l'aigua mitjançant un sistema venturi d'alta eficiència, garantint una distribució uniforme.", en:'Ozone is dissolved in the water via a high-efficiency venturi system, ensuring uniform distribution.', fr:"L'ozone est dissous dans l'eau via un système venturi haute efficacité, garantissant une distribution uniforme." },
  'oz.how.s3.t':      { es:'Desinfección total',  ca:'Desinfecció total', en:'Total disinfection', fr:'Désinfection totale' },
  'oz.how.s3.d':      { es:'El O₃ destruye la membrana celular de patógenos en milisegundos y se convierte en O₂ sin residuos.', ca:"L'O₃ destrueix la membrana cel·lular de patògens en mil·lisegons i es converteix en O₂ sense residus.", en:'O₃ destroys pathogen cell membranes in milliseconds and converts back to O₂ with no residues.', fr:"L'O₃ détruit la membrane cellulaire des agents pathogènes en millisecondes et se transforme en O₂ sans résidus." },
  'oz.vent.tag':      { es:'Ventajas del ozono',  ca:'Avantatges de l\'ozó', en:'Ozone advantages', fr:'Avantages de l\'ozone' },
  'oz.vent.h2':       { es:'Por qué el ozono es<br/>el futuro del agua', ca:"Per què l'ozó és<br/>el futur de l'aigua", en:'Why ozone is the<br/>future of water', fr:"Pourquoi l'ozone est<br/>l'avenir de l'eau" },
  'oz.v1.t':          { es:'3.000× más eficaz que el cloro', ca:'3.000× més eficaç que el clor', en:'3,000× more effective than chlorine', fr:'3 000× plus efficace que le chlore' },
  'oz.v1.d':          { es:'Destruye bacterias, virus, hongos y esporas que el cloro no puede eliminar.', ca:'Destrueix bacteris, virus, fongs i espores que el clor no pot eliminar.', en:'Destroys bacteria, viruses, fungi and spores that chlorine cannot eliminate.', fr:'Détruit les bactéries, virus, champignons et spores que le chlore ne peut pas éliminer.' },
  'oz.v2.t':          { es:'Cero residuos químicos', ca:'Zero residus químics', en:'Zero chemical residues', fr:'Zéro résidu chimique' },
  'oz.v2.d':          { es:'El ozono sobrante se descompone de forma natural en oxígeno puro en 15-30 minutos.', ca:"L'ozó sobrant es descompon de forma natural en oxigen pur en 15-30 minuts.", en:'Residual ozone naturally breaks down into pure oxygen within 15–30 minutes.', fr:"L'ozone résiduel se décompose naturellement en oxygène pur en 15-30 minutes." },
  'oz.v3.t':          { es:'Desinfecta agua, aire y superficies', ca:'Desinfecta aigua, aire i superfícies', en:'Sanitises water, air and surfaces', fr:'Désinfecte eau, air et surfaces' },
  'oz.v3.d':          { es:'Un único equipo protege tu hogar o negocio en tres medios distintos simultáneamente.', ca:'Un únic equip protegeix la teva llar o negoci en tres medis diferents simultàniament.', en:'A single unit protects your home or business across three different media simultaneously.', fr:"Un seul équipement protège votre domicile ou entreprise sur trois milieux différents simultanément." },
  'oz.v4.t':          { es:'Ecológico 100%',       ca:'Ecològic 100%',   en:'100% ecological',   fr:'100% écologique'    },
  'oz.v4.d':          { es:'Reduce el uso de cloro y productos químicos. Una solución respetuosa con el medioambiente.', ca:"Redueix l'ús de clor i productes químics. Una solució respectuosa amb el medi ambient.", en:'Reduces chlorine and chemical use. An environment-friendly solution.', fr:"Réduit l'utilisation de chlore et de produits chimiques. Une solution respectueuse de l'environnement." },
  'oz.v5.t':          { es:'Tecnología certificada', ca:'Tecnologia certificada', en:'Certified technology', fr:'Technologie certifiée' },
  'oz.v5.d':          { es:'Certificado CE, aprobado por la OMS y reconocido por las autoridades sanitarias europeas.', ca:'Certificat CE, aprovat per l\'OMS i reconegut per les autoritats sanitàries europees.', en:'CE certified, WHO-approved and recognised by European health authorities.', fr:'Certifié CE, approuvé par l\'OMS et reconnu par les autorités sanitaires européennes.' },
  'oz.v6.t':          { es:'Instalación en 30 minutos', ca:'Instal·lació en 30 minuts', en:'Installation in 30 minutes', fr:'Installation en 30 minutes' },
  'oz.v6.d':          { es:'Sin obras, sin fontanería compleja. Nuestros técnicos configuran el equipo en tu domicilio.', ca:'Sense obres, sense fontaneria complexa. Els nostres tècnics configuren l\'equip al teu domicili.', en:'No building work, no complex plumbing. Our technicians set up the unit at your premises.', fr:'Sans travaux, sans plomberie complexe. Nos techniciens configurent l\'équipement chez vous.' },
  'oz.cont.tag':      { es:'Contacto',             ca:'Contacte',        en:'Contact',           fr:'Contact'            },
  'oz.cont.h2':       { es:'¿Interesado en el sistema de ozono?', ca:'Interessat en el sistema d\'ozó?', en:'Interested in the ozone system?', fr:'Intéressé par le système ozone ?' },
  'oz.cont.desc':     { es:'Nuestros especialistas te asesoran sin compromiso. Solicita una demostración gratuita.', ca:'Els nostres especialistes t\'assessoren sense compromís. Sol·licita una demostració gratuïta.', en:'Our specialists advise you with no obligation. Request a free demonstration.', fr:'Nos spécialistes vous conseillent sans engagement. Demandez une démonstration gratuite.' },
  'oz.cont.submit':   { es:'Solicitar demostración', ca:'Sol·licitar demostració', en:'Request demonstration', fr:'Demander une démonstration' },

};

/* ═══════════════════════════════════════
   LANGUAGE ENGINE
═══════════════════════════════════════ */
(function () {
  const SUPPORTED = ['es', 'ca', 'en', 'fr'];
  const STORAGE_KEY = 'aquomar_lang';

  /* Detect language: localStorage → browser → default es */
  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const browser = (navigator.language || 'es').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : 'es';
  }

  /* Get translation with fallback chain */
  function t(key, lang) {
    const entry = AQUOMAR_TRANSLATIONS[key];
    if (!entry) return '';
    return entry[lang] || entry['es'] || '';
  }

  /* Apply translations to the DOM */
  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);

    /* innerHTML translations */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key, lang);
      if (val) el.innerHTML = val;
    });

    /* Placeholder translations */
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      const val = t(key, lang);
      if (val) el.placeholder = val;
    });

    /* Update lang-switcher active state */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('lang-btn-active', active);
      btn.classList.toggle('text-white', active);
      btn.classList.toggle('text-white/50', !active);
    });
  }

  /* Public switch function */
  window.setLang = function (lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  };

  /* Auto-init when DOM is ready */
  function init() {
    const lang = detectLang();
    applyLang(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
