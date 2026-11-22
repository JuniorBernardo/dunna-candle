// Imagens locais em public/images. BASE_URL cobre o subcaminho do GitHub Pages.
const BASE = import.meta.env.BASE_URL
const p = (file) => `${BASE}images/products/${file}.webp`
const t = (file) => `${BASE}images/theme/${file}.webp`

export const STORE = {
  name: 'Dunna Candle',
  coupon: 'PRIMEIRADUNNA',
  whatsapp: '5511934042476',
  whatsappLabel: '(11) 93404-2476',
  instagram: 'dunna.candle',
  logo: `${BASE}images/logo.webp`,
}

export const BANNERS = {
  hero: t('2-slide-1790792198740-3480454687-7273172702b0d44c3570d2284552721f1790792328'),
  b1: t('2-slide-1794763820247-4970811050-c21da901f2ffe28691ae5d02648481941794763841'),
  b2: t('2-slide-1790898273639-1903155795-d88736755fb149acb39e36b2e4b2a01a1790898401'),
  b3: t('2-slide-1790898436689-1350539704-468f68e643997e9f5b9cbb7fd140ae061790898564'),
}

export const CATEGORIES = [
  { slug: 'vela-gold', name: 'Vela Gold', image: t('2-slide-1773190625918-501007816-a77cc990fd6d1df274187d6b166a85301773190634') },
  { slug: 'home-spray', name: 'Home Spray', image: t('2-slide-1794762565816-3460074845-87b3aad4764624d8b20e9c7626eb4f161794762587') },
  { slug: 'wax-melts', name: 'Wax Melts', image: t('2-slide-1794762668320-8118222280-48e72b2310d0ac5afe72506e18d335c01794762689') },
  { slug: 'difusor-aromatico', name: 'Difusor Aromático', image: t('2-slide-1772588416391-6886985536-a0bb1eab997d4e4a680a90d510ef4b021772588417') },
  { slug: 'vela-bless', name: 'Vela Bless', image: t('2-slide-1790902542743-4459619243-a955a407ebc72f7ac22947cd07929b041790902670') },
  { slug: 'acessorios', name: 'Acessórios', image: t('2-slide-1772656763120-2761281929-2442375935198b5244c59affeb272a361772656765') },
]

// Assinaturas aromáticas. A do Champagne Rosé é a da loja; as demais são textos de exemplo — revise antes de publicar.
export const FRAGRANCES = {
  'champagne-rose': {
    name: 'Champagne Rosé',
    tone: '#e9c9c0',
    description:
      'Uma fragrância vibrante e sofisticada, o Champagne Rosé começa com uma abertura cítrica e deliciosamente frutada. No coração, o morango suculento se mistura à delicadeza da nectarina e ao toque marcante da groselha preta. Ao final, a doçura romântica da baunilha traz um toque festivo e irresistível, como um brinde especial em forma de aroma.',
    notes: {
      cabeca: 'Champagne, Tangerina, Framboesa, Maçã, Cassis',
      corpo: 'Nectarina, Groselha Preta, Morango',
      fundo: 'Açúcar, Baunilha, Ameixeira, Musk',
    },
  },
  'cha-branco': {
    name: 'Chá Branco',
    tone: '#e7e4d6',
    description: 'Leve, limpo e acolhedor. Um aroma sereno que traz a sensação de casa arrumada e tarde tranquila.',
    notes: { cabeca: 'Bergamota, Limão', corpo: 'Chá Branco, Jasmim', fundo: 'Almíscar, Madeiras Claras' },
  },
  'frutas-tropicais': {
    name: 'Frutas Tropicais',
    tone: '#f1d3a6',
    description: 'Alegre e ensolarado, como um fim de tarde no verão. Frutas suculentas que enchem o ambiente de energia.',
    notes: { cabeca: 'Maracujá, Abacaxi', corpo: 'Manga, Pêssego', fundo: 'Coco, Baunilha' },
  },
  'cereja-e-avela': {
    name: 'Cereja e Avelã',
    tone: '#d9b0a3',
    description: 'Gourmand e envolvente. A doçura da cereja encontra o calor tostado da avelã num abraço aconchegante.',
    notes: { cabeca: 'Cereja, Amêndoa', corpo: 'Avelã Tostada', fundo: 'Baunilha, Caramelo' },
  },
  'lavanda-imperial': {
    name: 'Lavanda Imperial',
    tone: '#d3cde3',
    description: 'Clássica e relaxante. A lavanda em sua versão mais nobre, ideal para desacelerar no fim do dia.',
    notes: { cabeca: 'Lavanda, Bergamota', corpo: 'Gerânio, Alecrim', fundo: 'Âmbar, Musk' },
  },
  'bamboo-oriental': {
    name: 'Bamboo Oriental',
    tone: '#cfd8c3',
    description: 'Fresco e equilibrado. Notas verdes que trazem a calma de um jardim zen para dentro de casa.',
    notes: { cabeca: 'Bambu, Folhas Verdes', corpo: 'Lírio, Chá Verde', fundo: 'Cedro, Sândalo' },
  },
  'white-jasmin': {
    name: 'White Jasmin',
    tone: '#efe9de',
    description: 'Floral delicado e luminoso. O jasmim branco perfuma o ambiente com elegância e leveza.',
    notes: { cabeca: 'Pera, Neroli', corpo: 'Jasmim Branco, Flor de Laranjeira', fundo: 'Musk Branco' },
  },
  'fig-flowers': {
    name: 'Fig Flowers',
    tone: '#d8cdb8',
    description: 'Verde, cremoso e sofisticado. O frescor do figo com um fundo floral marcante.',
    notes: { cabeca: 'Folha de Figo', corpo: 'Figo, Flores Brancas', fundo: 'Madeiras, Leite' },
  },
  'flor-de-cerejeira': {
    name: 'Flor de Cerejeira',
    tone: '#f0d3d8',
    description: 'Romântica e suave, inspirada na primavera japonesa. Floral rosado que deixa o ambiente delicado.',
    notes: { cabeca: 'Pera, Bergamota', corpo: 'Flor de Cerejeira, Rosa', fundo: 'Musk, Baunilha' },
  },
}

const GOLD_SPEC = ['180g | 35 horas de queima', 'Cera de coco 100% vegetal', 'Essência premium', 'Incluso saquinho presenteável']
const SPRAY_SPEC = ['Perfuma tecidos e ambientes', 'Essência premium', 'Borrife a 30 cm de distância']
const MELT_SPEC = ['Cera de coco 100% vegetal', 'Use com difusor rechaud ou elétrico', 'Essência premium']

const vela = (slug, fragrance, images) => ({
  slug,
  name: `Vela Gold - ${FRAGRANCES[fragrance].name}`,
  category: 'vela-gold',
  price: 69.9,
  fragrance,
  images,
  specs: GOLD_SPEC,
})
const spray = (slug, fragrance, images) => ({
  slug,
  name: `Home Spray - ${FRAGRANCES[fragrance].name}`,
  category: 'home-spray',
  price: 59.9,
  fragrance,
  images,
  specs: SPRAY_SPEC,
})
const melt = (slug, fragrance, images) => ({
  slug,
  name: `Wax Melts - ${FRAGRANCES[fragrance].name}`,
  category: 'wax-melts',
  price: 24.9,
  fragrance,
  images,
  specs: MELT_SPEC,
})

const MELT_BACK = '0e1e9118-9fdf-4d19-9319-ccb631aea628'

export const PRODUCTS = [
  vela('vela-gold-champagne-rose', 'champagne-rose', [
    p('whatsapp-image-2026-03-10-at-21-12-45-3-6bc92fa34786b5e53b17731899287016'),
    p('whatsapp-image-2026-03-10-at-21-12-46-f8f36705bc132da2db17731899287139'),
  ]),
  vela('vela-gold-cha-branco', 'cha-branco', [
    p('82d7b273-95c6-488c-b21e-2ece1f11b551-ac7d08a4eb648b549017818334481023'),
    p('ab46b63a-a799-4fce-bfe9-9c3981d19131-c1095479c87569b39517818334487891'),
  ]),
  vela('vela-gold-frutas-tropicais', 'frutas-tropicais', [
    p('whatsapp-image-2026-03-10-at-21-12-45-6a653303fdf4d0e7c117731898093284'),
    p('whatsapp-image-2026-03-10-at-21-12-45-2-207e79076f0a28755017731898093425'),
  ]),
  vela('vela-gold-cereja-e-avela', 'cereja-e-avela', [
    p('bf62bda5-d30d-45a3-b126-d47095a44c5c-c2bccd9b17ced630df17818333025371'),
    p('21f5c53f-6127-4e45-83a6-cb1c37e74b14-3a0da371d4fafa8f6017818333025247'),
  ]),
  vela('vela-gold-lavanda-imperial', 'lavanda-imperial', [
    p('whatsapp-image-2026-03-10-at-21-12-47-a75a35b41e956b187317731881329804'),
    p('whatsapp-image-2026-03-10-at-21-12-46-2-925ce8fb27e31419e617731881329732'),
  ]),
  vela('vela-gold-bamboo-oriental', 'bamboo-oriental', [
    p('whatsapp-image-2026-03-10-at-21-12-44-1-8ed523880e42840e1e17731897261867'),
    p('whatsapp-image-2026-03-10-at-21-12-44-2-a5dd6d82031b9dc5cd17731897261777'),
  ]),
  vela('vela-gold-white-jasmin', 'white-jasmin', [
    p('jasmin-034231ac905bf8503e17731895702400'),
    p('whatsapp-image-2026-03-10-at-21-12-43-50259f1489bbe05bb817731893126498'),
  ]),

  spray('home-spray-cha-branco', 'cha-branco', [p('67dea2eb-adcd-4a46-8a55-44f56e100657-2d8dc586823b9d7a1117818309826745')]),
  spray('home-spray-white-jasmin', 'white-jasmin', [p('ec5089ae-e83e-4214-847e-aaf94a4ab6d8-8ee5a8dde85300690f17818322639069')]),
  spray('home-spray-frutas-tropicais', 'frutas-tropicais', [p('25a0e35e-20a8-4f95-a6a3-c3b52adf46f4-114c1783ccb08823cb17818323665831')]),
  spray('home-spray-cereja-e-avela', 'cereja-e-avela', [p('a351c52b-8fa2-4f4f-ae67-37c2fd0da6f9-a0ea5efc6e1698445917818310144011')]),
  spray('home-spray-lavanda-imperial', 'lavanda-imperial', [p('d95d4251-ef43-4c18-a5de-819dce2ffacc-9e7f8251c29217d03117818310854037')]),
  spray('home-spray-bamboo-oriental', 'bamboo-oriental', [p('e5803654-b605-43c2-81b4-526751e74e58-7921453a2622f89e9e17818310635152')]),
  spray('home-spray-champagne-rose', 'champagne-rose', [p('b7935abc-1337-4dee-98c7-545ef3e20586-fae1b8165431ee829b17818313039030')]),

  melt('wax-melts-white-jasmin', 'white-jasmin', [
    p('e482350a-ad59-42df-ae6b-121b5f1cc0c0-d7ff3b271c70acad4017818287197286'),
    p(`${MELT_BACK}-87f53ea1b2bc6e1ae317821627118369`),
  ]),
  melt('wax-melts-fig-flowers', 'fig-flowers', [
    p('852e25e7-c3ce-4a24-9be9-1a0cc282b57f-844336e5c5aa9b84ea17818319288779'),
    p(`${MELT_BACK}-12910fc2fd8931b94417821626547048`),
  ]),
  melt('wax-melts-cereja-e-avela', 'cereja-e-avela', [
    p('9cc5ab47-e891-47b8-a410-26eba2138c95-4cc90f0f587bb49e0817818287366534'),
    p(`${MELT_BACK}-7604084d7dcd738abc17821627236165`),
  ]),
  melt('wax-melts-champagne-rose', 'champagne-rose', [
    p('99cb20a0-84df-4df9-9baf-e5306c5e81aa-7ef61a0d2e6612542917818286565952'),
    p(`${MELT_BACK}-9e7f7605376c64868517821626956069`),
  ]),
  melt('wax-melts-frutas-tropicais', 'frutas-tropicais', [
    p('172473a7-a1c9-4474-841a-6332ec5edd5a-745f414144ee6758af17818318388820'),
    p(`${MELT_BACK}-699c40f561cab09b8d17821626682256`),
  ]),
  melt('wax-melts-flor-de-cerejeira', 'flor-de-cerejeira', [
    p('0f1d75cc-5c88-4a80-8835-0f35650bc110-238db61588901b13f017818319971152'),
    p(`${MELT_BACK}-36a8308f04e13336c517821626434688`),
  ]),
  melt('wax-melts-cha-branco', 'cha-branco', [
    p('13ed889c-8a14-4486-bc19-02a705baf00c-0ba850cfaf017ec3fb17818286401919'),
    p(`${MELT_BACK}-1b6e2f1fe1aa8d657c17821626844417`),
  ]),
  melt('wax-melts-lavanda-imperial', 'lavanda-imperial', [
    p('ab0df0c8-3969-4536-a291-5755ac804e01-783aaab0c157fb65f417818287505164'),
    p(`${MELT_BACK}-03c93d1872abf04c7217821627382889`),
  ]),
  melt('wax-melts-bamboo-oriental', 'bamboo-oriental', [
    p('e723932e-4b16-4f00-9e3f-a40088a9665f-8c0f7e4f884877fa4917818287700049'),
    p(`${MELT_BACK}-470053c586358a0e6217821627556140`),
  ]),

  {
    slug: 'difusor-aromatico-eletrico',
    name: 'Difusor Aromático Elétrico',
    category: 'difusor-aromatico',
    price: 49.9,
    images: [
      p('4896b884-2496-4d12-93dc-fdf8584c058f-55aff4a1a44f372b6d17712075400723'),
      p('c866ddad-29d7-4078-9e43-1de6cc989b44-b1b1963ac6e11e709917712075398274'),
    ],
    description: 'Derrete seus wax melts sem chama, com segurança e praticidade. É só ligar na tomada e deixar o perfume tomar conta do ambiente.',
    specs: ['Sem chama', 'Ideal para wax melts Dunna'],
  },
  {
    slug: 'difusor-aromatico-rechaud',
    name: 'Difusor Aromático Rechaud',
    category: 'difusor-aromatico',
    price: 54.9,
    images: [
      p('img_9507-4a34d09025f91d3f9217712084627455'),
      p('img_9506-b20ce65351cf2725c517712084628687'),
    ],
    description: 'O clássico difusor com vela rechaud. A chama suave aquece o wax melt e espalha o aroma aos poucos.',
    specs: ['Use com velas rechaud', 'Ideal para wax melts Dunna'],
  },
  {
    slug: 'kit-5-velas-para-difusor',
    name: 'Kit 5 Velas Para Difusor',
    category: 'acessorios',
    price: 9.9,
    soldOut: true,
    images: [p('velas-rechaud-3a0c5213f6e22c6c3817821502158150')],
    description: 'Kit com 5 velas rechaud para usar no seu difusor aromático.',
    specs: ['5 unidades', 'Compatível com o Difusor Rechaud'],
  },
]

export const formatBRL = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
export const getProduct = (slug) => PRODUCTS.find((x) => x.slug === slug)
export const byCategory = (slug) => PRODUCTS.filter((x) => x.category === slug)
export const getCategory = (slug) => CATEGORIES.find((c) => c.slug === slug)
