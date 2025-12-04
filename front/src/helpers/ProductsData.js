const products = [
  {
    id: 1,
    name: "Shadow Seal – Waterproof Shadow Converter",
    slug: "shadow-seal-waterproof-shadow-converter",
    description:
      'El "Shadow Seal" es un convertidor líquido de maquillaje que hace que las sombras en polvo sean resistentes al agua, intensifica su pigmento y las transforma en una fórmula cremosa. Se puede usar mezclando un poco de sombra con el líquido para crear un delineador líquido o una sombra en crema, o aplicando el líquido primero en el párpado para usarlo como base para que el maquillaje sea más duradero y dramático. También puede hacer que la base de maquillaje sea resistente al agua y al sudor.',
    category: "Diluidores, Ojos",
    price: 35.0,
    gallery: [
      {
        image:
          "https://res.cloudinary.com/dajizrpyk/image/upload/v1764544762/SHADOW-SEAL_tc6kks.webp",
      },
    ],
  },
  {
    id: 2,
    name: "Banana Bright Powder - Polvo Translúcido",
    slug: "banana-bright-powder-polvo-translucido",
    description:
      'El polvo banana powder brightening es un polvo translúcido de tono amarillo claro que se usa para fijar el maquillaje, matificar el brillo y aportar luminosidad. Su fórmula ayuda a corregir el enrojecimiento y neutralizar ojeras azules, y es ideal para técnicas como el "baking" o para sellar el corrector debajo de los ojos.',
    category: "Rostro",
    price: 30.0,
    gallery: [
      {
        image:
          "https://res.cloudinary.com/dajizrpyk/image/upload/v1764544762/f3d51d_c56ee0352fff4555b0d1de83e76e7c82_mv2_wabmdt.avif",
      },
    ],
  },
  {
    id: 3,
    name: "Ácido Hialurónico - Serum Hidratante Facial",
    slug: "acido-hialuronico-serum-hidratante-facial",
    category: "Rostro",
    description:
      "El ácido hialurónico es una sustancia natural producida por el cuerpo que se encuentra principalmente en la piel, las articulaciones y los ojos, y su función principal es retener agua para mantener los tejidos hidratados, elásticos y firmes. Por su capacidad de retener hasta mil veces su peso en agua, se utiliza comúnmente en productos cosméticos para hidratar y rellenar la piel, así como en tratamientos médicos estéticos y para tratar problemas articulares.",
    price: 35.0,
    gallery: [
      {
        image:
          "https://res.cloudinary.com/dajizrpyk/image/upload/v1764544762/Acido-Hialuronico_ajqkq1.webp",
      },
    ],
  },
  {
    id: 4,
    name: "Vitamina C - Serum Antioxidante Facial",
    slug: "vitamina-c-serum-antioxidante-facial",
    description:
      "Un sérum de vitamina C es un producto de cuidado de la piel con textura de líquido o gel que contiene vitamina C, un potente antioxidante, para mejorar la luminosidad, unificar el tono, reducir manchas y arrugas, y proteger contra el daño ambiental como la contaminación y los rayos UV. También estimula la producción de colágeno para mejorar la firmeza y elasticidad de la piel.",
    category: "Rostro",
    price: 35.0,
    gallery: [
      {
        image:
          "https://http2.mlstatic.com/D_NQ_NP_605881-MLU71614783857_092023-O.webp",
      },
    ],
  },
  {
    id: 5,
    name: "Super Natural Liquid Foundation - Base Líquida",
    slug: "super-natural-liquid-foundation-base-liquida",
    description:
      'La base líquida "Super Natural" es una fórmula líquida que ofrece cobertura natural, disimula imperfecciones y proporciona un acabado uniforme, a menudo con beneficios adicionales como hidratación, protección solar (SPF) y fórmulas de larga duración. Las descripciones varían según la marca, pero en general, estas bases se caracterizan por ser ligeras y fáciles de aplicar para lograr una apariencia impecable y natural.',
    category: "Rostro, Base",
    price: 28.0,
    gallery: [
      {
        image:
          "https://sistahsistah.com/cdn/shop/products/LF12951_open-with-swatch_1024x_24793646-e8fa-4a98-8600-21cd9e02dd9c_1024x1024@2x.jpg?v=1646781870",
        colorName: "Vanilla",
      },
      {
        image:
          "https://sistahsistah.com/cdn/shop/products/LF12952_open-with-swatch_1024x_558225f8-d216-4634-870b-108feb6687ca_1024x1024@2x.jpg?v=1646781855",
        colorName: "Bisque",
      },
      {
        image:
          "https://sistahsistah.com/cdn/shop/products/LF12954_open-with-swatch_1024x_e7e013ce-901f-4c7f-9eaf-018a0ba36a92_1024x1024@2x.jpg?v=1646781932",
        colorName: "Toast",
      },
      {
        image:
          "https://sistahsistah.com/cdn/shop/products/LF12953_open-with-swatch_1024x_bdd61217-7963-4134-b85b-b19f399c7fb4_1024x1024@2x.jpg?v=1646781958",
        colorName: "Warm",
      },
      {
        image:
          "https://http2.mlstatic.com/D_NQ_NP_782051-MLC54889009502_042023-O-base-super-natural-liquid-foundation-espresso-kleancolor-30m.webp",
        colorName: "Espresso",
      },
    ],
  },
  {
    id: 6,
    name: "Featherlight Powder Foundation - Base en Polvo",
    slug: "featherlight-powder-foundation-base-en-polvo",
    description:
      "La Featherlight Powder Foundation de Kleancolor es una base de maquillaje en polvo compacta de acabado mate, con una sensación ligera y sedosa, que unifica el tono de la piel. Se puede usar sola para unificar o sobre una base líquida para fijar el maquillaje y controlar el brillo, y ofrece una cobertura total.",
    category: "Rostro, Base",
    price: 40.0,
    gallery: [
      {
        image:
          "https://http2.mlstatic.com/D_NQ_NP_895661-MLU74860987509_032024-O.webp",
        colorName: "Soft Tan",
      },
      {
        image:
          "https://res.cloudinary.com/dajizrpyk/image/upload/v1764544763/featherlight-powder-foundation_vzrmuu.jpg",
        colorName: "Beige",
      },
    ],
  },
  {
    id: 7,
    name: "3D Highlighter - Paleta de Iluminadores",
    slug: "3d-highlighter-paleta-de-iluminadores",
    description:
      "Un iluminador 3D es un producto de maquillaje diseñado para realzar la luminosidad del rostro creando un efecto de volumen y profundidad, lo que le da a la piel una apariencia más radiante y tridimensional. Suele tener una fórmula cremosa y en polvo para ser aplicada en capas, logrando un brillo que va desde sutil hasta intenso. ",
    category: "Rostro, Iluminadores",
    price: 35.0,
    image:
      "https://res.cloudinary.com/dajizrpyk/image/upload/v1764544762/iluminador-3D_rdcvoq.jpg",
    gallery: [
      {
        image:
          "https://http2.mlstatic.com/D_NQ_NP_2X_772305-MLM26800157042_022018-F-kleancolor-3d-highlighter-palette-4-paletas-iluminadores.webp",
        colorName: "Peach Gleam",
      },
      {
        image:
          "https://http2.mlstatic.com/D_NQ_NP_2X_855258-MLM26800124782_022018-F-kleancolor-3d-highlighter-palette-4-paletas-iluminadores.webp",
        colorName: "Sunset Gleam",
      },
      {
        image:
          "https://http2.mlstatic.com/D_NQ_NP_611022-MLM26800128767_022018-O-kleancolor-3d-highlighter-palette-4-paletas-iluminadores.webp",
        colorName: "Rosy Gleam",
      },
      {
        image:
          "https://http2.mlstatic.com/D_NQ_NP_2X_849828-MLM26800144129_022018-F-kleancolor-3d-highlighter-palette-4-paletas-iluminadores.webp",
        colorName: "Bronzy Gleam",
      },
    ],
  },
  {
    id: 8,
    name: " Nude Eyeshadow Palette - Paleta de Sombras",
    slug: "nude-eyeshadow-palette-paleta-de-sombras",
    description:
      'Una paleta de sombras "nude" es un conjunto de sombras de ojos en tonos neutros y naturales, como beiges, marrones, rosados y grises, diseñadas para crear looks versátiles, desde muy sutiles hasta más definidos. Estas paletas suelen incluir una variedad de acabados, como mate, satinado y metálico, con fórmulas pigmentadas que son fáciles de difuminar para crear una amplia gama de combinaciones.',
    category: "Sombras, Ojos",
    price: 45.0,
    image:
      "https://res.cloudinary.com/dajizrpyk/image/upload/v1764544762/natural-shadow_tlp8db.jpg",
    gallery: [
      {
        image:
          "https://res.cloudinary.com/dajizrpyk/image/upload/v1764544762/natural-shadow_tlp8db.jpg",
        colorName: "Nude Palette",
      },
      {
        image:
          "https://res.cloudinary.com/dajizrpyk/image/upload/v1764544764/sunset-shadow_ofleoa.jpg",
        colorName: "Sunset Palette",
      },
    ],
  },
];

export default products;
