/* =========================================================================
   SEUS PROJETOS  —  este é o ÚNICO arquivo que você precisa mexer
   =========================================================================

   Cada projeto fica entre chaves { ... } e é separado do próximo por vírgula.
   Para ADICIONAR um projeto: copie um bloco inteiro (de { até },) e cole no
   começo da lista, depois troque os textos e links.
   Para REMOVER: apague o bloco { ... }, inclusive a vírgula.
   A ordem aqui é a mesma ordem que aparece na página inicial.

   Campos:
     slug      -> "apelido" do projeto que aparece no link (sem espaços nem acentos)
     title     -> nome que aparece na tela
     client    -> cliente
     category  -> categoria
     thumb     -> imagem de capa (a que aparece na grade da home)
     images    -> lista de imagens. Pode deixar vazio: []

   Dica: para um vídeo do Vimeo use  "https://player.vimeo.com/video/NUMERO"
         para um vídeo do YouTube use "https://www.youtube-nocookie.com/embed/CODIGO"
   ========================================================================= */

const PROJECTS = [
  {
    slug: "nestle-neos-grego",
    title: "Nestlé Neos Grego",
    client: "Nestlé",
    category: "Advertising",
    thumb: "assets/thumbs/nestle-neos-grego.jpg",
    videos: [
      "https://player.vimeo.com/video/1155186372"
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fnestle-neos-grego%2Fthumbnail.png?alt=media&token=39067d0d-0af0-41d0-bd24-812136e4487f"
    ]
  },
  {
    slug: "pilao",
    title: "Pilão",
    client: "Pilão",
    category: "Advertising",
    thumb: "assets/thumbs/pilao.jpg",
    videos: [
      "https://player.vimeo.com/video/1160300123",
      "https://player.vimeo.com/video/1160298807"
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fpilao%2Fgallery_0_1769698449464.jpg?alt=media&token=8d556723-4cfa-4b57-a24c-85d881b3bb26",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fpilao%2Fgallery_1_1769698451515.jpg?alt=media&token=9883685b-2450-42c3-a8ab-c48783f4d6f4"
    ]
  },
  {
    slug: "chandelle-batalha-de-escolhas",
    title: "Chandelle - Batalha de Escolhas",
    client: "Chandelle",
    category: "Advertising",
    thumb: "assets/thumbs/chandelle-batalha-de-escolhas.jpg",
    videos: [
      "https://player.vimeo.com/video/1034213758"
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fchandelle-batalha-de-escolhas%2Fgallery_0_1769698456914.jpg?alt=media&token=33b793b9-77a8-4113-aaee-f74723695a5f"
    ]
  },
  {
    slug: "heinz-marz-edition",
    title: "Heinz Marz Edition",
    client: "Heinz",
    category: "Advertising",
    thumb: "assets/thumbs/heinz-marz-edition.jpg",
    videos: [
      "https://player.vimeo.com/video/643537689",
      "https://player.vimeo.com/video/643538934",
      "https://player.vimeo.com/video/643691804",
      "https://player.vimeo.com/video/643692065"
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fheinz-marz-edition%2Fgallery_0_1769698460675.jpg?alt=media&token=7478cc17-fd93-46bf-b529-52b7239477c7",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fheinz-marz-edition%2Fgallery_1_1769698461407.jpg?alt=media&token=c91e4fa0-11ed-4e7a-a7f5-b38efe4cb08e",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fheinz-marz-edition%2Fgallery_2_1769698462205.jpg?alt=media&token=5c446302-25cb-431d-a6aa-09abb1978ae6",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fheinz-marz-edition%2Fgallery_3_1769698462949.jpg?alt=media&token=494d6ba4-8e81-4fea-83bf-e445cbd4ada2",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fheinz-marz-edition%2Fgallery_4_1769698463716.jpg?alt=media&token=90a92b1f-b486-453a-a74e-e157c65cfee2",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fheinz-marz-edition%2Fgallery_5_1769698465492.jpg?alt=media&token=24850fb0-75ae-4de8-8350-a6081f8d3ea9",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fheinz-marz-edition%2Fgallery_6_1769698467296.jpg?alt=media&token=fdc8ca66-f0c0-4c6e-8b8d-2cc7ff21e632"
    ]
  },
  {
    slug: "piraque",
    title: "Piraquê",
    client: "Piraquê",
    category: "Advertising",
    thumb: "assets/thumbs/piraque.jpg",
    videos: [
      "https://player.vimeo.com/video/706807400",
      "https://player.vimeo.com/video/916544179"
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fpiraque%2Fgallery_0_1769698470731.jpg?alt=media&token=225cb42c-6500-4094-84d0-984899d70109",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fpiraque%2Fgallery_1_1769698471509.jpg?alt=media&token=dd2d598a-1a55-43c4-bbb2-c1a86bd483ae"
    ]
  },
  {
    slug: "brahma-jaguariuna",
    title: "Brahma Jaguariúna",
    client: "Brahma",
    category: "Advertising",
    thumb: "assets/thumbs/brahma-jaguariuna.jpg",
    videos: [
      "https://player.vimeo.com/video/983151641"
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fbrahma-jaguariuna%2Fgallery_0_1769698474847.jpg?alt=media&token=7b787acf-9a51-43ed-acf5-5007931e3f89"
    ]
  },
  {
    slug: "sempre-livre",
    title: "Sempre Livre",
    client: "Sempre Livre",
    category: "Advertising",
    thumb: "assets/thumbs/sempre-livre.jpg",
    videos: [
      "https://player.vimeo.com/video/592928794"
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fsempre-livre%2Fgallery_0_1769698478158.jpg?alt=media&token=3a94460e-af05-40a6-99ee-8fc88c61e940",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fsempre-livre%2Fgallery_1_1769698479002.jpg?alt=media&token=737d7dc9-4c20-4f81-875d-15bf132004a1"
    ]
  },
  {
    slug: "carefree",
    title: "Carefree",
    client: "Carefree",
    category: "Advertising",
    thumb: "assets/thumbs/carefree.jpg",
    videos: [
      "https://player.vimeo.com/video/197193406",
      "https://player.vimeo.com/video/197193503",
      "https://player.vimeo.com/video/202020603",
      "https://player.vimeo.com/video/643575651"
    ],
    // vídeos que estão no YouTube do cliente (sem permissão de incorporar):
    // aparecem como miniatura e, ao clicar, abrem no YouTube em nova aba.
    youtube: [
      "https://www.youtube.com/watch?v=R_tYdI2lGkk",
      "https://www.youtube.com/watch?v=fuCeWbR-G-E",
      "https://www.youtube.com/watch?v=vx2PlKorIeo",
      "https://www.youtube.com/watch?v=QBmqQqRBasA"
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fcarefree%2Fgallery_0_1769698482366.jpg?alt=media&token=5b176911-b2a6-46bc-b7b8-ab018c80c8ed",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fcarefree%2Fgallery_1_1769698483185.jpg?alt=media&token=a79c4a9e-b99e-48b2-93d7-c60da36c808e",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fcarefree%2Fgallery_2_1769698483985.jpg?alt=media&token=b82d53e3-8fc5-4529-bd0d-5d9a943b9500",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fcarefree%2Fgallery_3_1769698484765.jpg?alt=media&token=af9a692e-ac06-4b48-ada2-be92e8cdedb2",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fcarefree%2Fgallery_4_1769698485547.jpg?alt=media&token=7a1494c8-6486-48c9-8144-654921886ec0",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fcarefree%2Fgallery_5_1769698487333.jpg?alt=media&token=34572485-b872-4f7f-9878-c3a46af1de52",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fcarefree%2Fgallery_6_1769698489110.jpg?alt=media&token=fdfb9b60-521e-40f4-adf4-7717333b37c5",
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fcarefree%2Fgallery_7_1769698490954.jpg?alt=media&token=7481659e-a679-4fec-9bc4-8bd1e2e99915"
    ]
  },
  {
    slug: "ambev-zerois-do-role",
    title: "Ambev Zeróis do Rolê",
    client: "Ambev",
    category: "Advertising",
    thumb: "assets/thumbs/ambev-zerois-do-role.jpg",
    videos: [
      "https://player.vimeo.com/video/826224777"
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fambev-zerois-do-role%2Fgallery_0_1769698494320.jpg?alt=media&token=a0855f8c-b8e7-4f94-94f7-416099d64563"
    ]
  },
  {
    slug: "natura",
    title: "Natura",
    client: "Natura",
    category: "Advertising",
    thumb: "assets/thumbs/natura.jpg",
    videos: [
      "https://player.vimeo.com/video/566730280"
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fnatura%2Fgallery_0_1769698496652.jpg?alt=media&token=5065a6e8-4575-4e29-bc36-722ea5dfdc71"
    ]
  },
  {
    slug: "olx-recomecos",
    title: "OLX Recomeços",
    client: "OLX",
    category: "Advertising",
    thumb: "assets/thumbs/olx-recomecos.jpg",
    videos: [
      "https://player.vimeo.com/video/716014379"
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Folx-recomecos%2Fgallery_0_1769698498913.jpg?alt=media&token=63958c8b-effa-4954-b3a8-2c4f5816fb8e"
    ]
  },
  {
    slug: "seara-gourmet",
    title: "Seara Gourmet",
    client: "Seara",
    category: "Advertising",
    thumb: "assets/thumbs/seara-gourmet.jpg",
    videos: [
      "https://player.vimeo.com/video/507107231"
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Fseara-gourmet%2Fgallery_0_1769698501186.jpg?alt=media&token=3b11f62f-7869-4a37-8a94-36515fb0318b"
    ]
  },
  {
    slug: "aussie-onlyfrangos",
    title: "Aussie OnlyFrangos",
    client: "Aussie",
    category: "Advertising",
    thumb: "assets/thumbs/aussie-onlyfrangos.jpg",
    videos: [
      "https://player.vimeo.com/video/1014836415"
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/felipesaumastg/o/projects%2Faussie-onlyfrangos%2Fgallery_0_1769698504504.jpg?alt=media&token=0c7eb474-3769-480a-b902-2e53308caf01"
    ]
  }
];
