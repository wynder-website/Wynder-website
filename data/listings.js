/**
 * Wynder — inventory data
 * ------------------------------------------------------------------
 * One entry per watch. Add a new listing by copying an object below
 * and filling in your own values — browse.html reads this file and
 * builds the grid, filters and sort automatically, and product.html
 * reads it to render a full detail page for any listing that doesn't
 * have its own hand-written page. You never need to touch the HTML
 * to add, remove or edit a watch.
 *
 * FIELD NOTES
 * ------------------------------------------------------------------
 * id            unique slug, used in the URL: product.html?id=...
 *                must be unique across every listing
 * brand/model   display name
 * meta          short display line under the model name on cards
 * price         display price, e.g. '£11,450'
 * priceValue    the same price as a plain number, e.g. 11450 — used
 *                for sorting and the min/max price filter. Keep this
 *                in sync with `price` whenever you change one.
 * img           path under images/, or null to use a generic icon
 * icon          which placeholder icon to use when img is null:
 *                0,1,2,3 (see browse.html / product.html icon sets)
 * link          set this to a real .html file to use a hand-written
 *                page instead of the generic product.html template
 *                (see the two Daytona listings below as the example).
 *                Leave unset/null to use the generic template.
 * condition     'Unworn' | 'Excellent' | 'Very good' | 'Good'
 * papers        'Full set' | 'Box only' | 'Papers only' | 'Watch only'
 * caseDiameter  case size in mm, as a number (used by the size filter)
 * ref           manufacturer reference number
 * materials     case/bracelet material, e.g. 'Stainless steel'
 * movement      'Automatic' | 'Manual' | 'Quartz'
 * year          year of production (a number). For coins sold across several
 *                years you can use a range as text, e.g. '2014–2026'.
 * category      'watch' (default if left out), 'gold' or 'silver'. Each has its
 *                own tab on the homepage and Browse page.
 * description   optional sentence or two shown on the product page
 * imageNote     optional small caption under the photo, e.g.
 *                'Image for illustration. Coin supplied may vary.'
 *
 * GOLD AND SILVER LISTINGS (coins / bars)
 * ------------------------------------------------------------------
 * Use the same fields, but put the mint/producer in `brand` and the
 * coin name in `model`. Gold pages show: mint, weight, purity, year
 * and condition (the last three only if you fill them in). The watch-only
 * fields (papers, caseDiameter, ref, materials, movement) can be left out.
 * Copy this block into the array to add a coin:
 *
 *   {
 *     id: 'royal-mint-britannia-1oz-2025',
 *     category: 'gold',   // or 'silver'
 *     brand: 'The Royal Mint', model: '1 oz Gold Britannia',
 *     meta: '1 oz &middot; 999.9 fine',
 *     price: '£0,000', priceValue: 0,
 *     img: 'images/royal-mint-britannia-1oz-2025-01.webp', icon: 0,
 *     weight: '1 oz', purity: '999.9', year: 2025, condition: 'New'
 *   },
 *
 * IMAGE NAMING CONVENTION
 * ------------------------------------------------------------------
 * File location:  images/
 * File name:       {brand}-{model}-{reference}-{sequence}.webp
 *                   all lowercase, hyphens only, no spaces
 * Example:         images/rolex-daytona-126505-01.webp
 * Same reference, different watch (dial colour, gem-set, etc.) —
 * add a variant tag before the sequence number, e.g.
 *   images/rolex-daytona-126505-black-diamond-01.webp
 *
 * PRODUCT PAGES
 * ------------------------------------------------------------------
 * Every listing now gets a real page automatically via
 * product.html?id=<id>. If a watch has genuine Wynder photography
 * and deserves bespoke written content (like the two Daytonas),
 * write a dedicated .html page instead and set `link` to it.
 */

const WYNDER_LISTINGS = [
  {
    id: 'patek-philippe-aquanaut-5968g',
    brand: 'Patek Philippe', model: 'Aquanaut Chronograph 5968G-010',
    meta: 'Khaki dial &middot; New full set',
    price: '£119,500', priceValue: 119500,
    img: 'images/patek-philippe-aquanaut-5968g-01.webp', icon: 0,
    condition: 'Unworn', papers: 'Full set', caseDiameter: 40,
    ref: '5968G-010', materials: 'White gold', movement: 'Automatic', year: 2025
  },
  {
    id: 'patek-philippe-nautilus-5711-1300a',
    brand: 'Patek Philippe', model: 'Nautilus 5711/1300A-001',
    meta: 'Olive green dial, diamond bezel &middot; Full set',
    price: '£178,000', priceValue: 178000,
    img: 'images/patek-philippe-nautilus-5711-01.webp', icon: 3,
    condition: 'Excellent', papers: 'Full set', caseDiameter: 40,
    ref: '5711/1300A-001', materials: 'Stainless steel', movement: 'Automatic', year: 2021
  },
  {
    id: 'rolex-daydate-128238',
    brand: 'Rolex', model: 'Day-Date 128238',
    meta: 'Green dial &middot; New full set',
    price: '£32,000', priceValue: 32000,
    img: 'images/rolex-daydate-128238-01.webp', icon: 0,
    condition: 'Unworn', papers: 'Full set', caseDiameter: 36,
    ref: '128238', materials: 'Yellow gold', movement: 'Automatic', year: 2024
  },
  {
    id: 'rolex-skydweller-336239',
    brand: 'Rolex', model: 'Sky-Dweller 336239',
    meta: 'White dial &middot; New full set',
    price: '£25,750', priceValue: 25750,
    img: 'images/rolex-skydweller-336239-01.webp', icon: 0,
    condition: 'Unworn', papers: 'Full set', caseDiameter: 41,
    ref: '336239', materials: 'White gold', movement: 'Automatic', year: 2023
  },
  {
    id: 'rolex-deepsea-136660',
    brand: 'Rolex', model: 'Deepsea Sea-Dweller 136660',
    meta: 'Blue dial &middot; New full set',
    price: '£12,450', priceValue: 12450,
    img: 'images/rolex-deepsea-136660-01.webp', icon: 0,
    condition: 'Unworn', papers: 'Full set', caseDiameter: 44,
    ref: '136660', materials: 'Stainless steel', movement: 'Automatic', year: 2024
  },
  {
    id: 'rolex-daydate-128235',
    brand: 'Rolex', model: 'Day-Date 128235',
    meta: 'Blue dial &middot; New full set',
    price: '£37,500', priceValue: 37500,
    img: 'images/rolex-daydate-128235-01.webp', icon: 0,
    condition: 'Unworn', papers: 'Full set', caseDiameter: 36,
    ref: '128235', materials: 'Rose gold', movement: 'Automatic', year: 2024
  },
  {
    id: 'rolex-skydweller-336934',
    brand: 'Rolex', model: 'Sky-Dweller',
    meta: 'Blue dial &middot; New full set',
    price: '£15,950', priceValue: 15950,
    img: 'images/rolex-skydweller-336934-01.webp', icon: 0,
    condition: 'Unworn', papers: 'Full set', caseDiameter: 42,
    ref: '336934', materials: 'Stainless steel', movement: 'Automatic', year: 2025
  },
  {
    id: 'rolex-daytona-126505',
    brand: 'Rolex', model: 'Daytona 126505',
    meta: 'Chocolate dial &middot; New full set',
    price: '£47,500', priceValue: 47500,
    img: 'images/rolex-daytona-126505-01.webp', icon: 0,
    link: 'product-daytona-126505.html',
    condition: 'Unworn', papers: 'Full set', caseDiameter: 40,
    ref: '126505', materials: 'Rose gold', movement: 'Automatic', year: 2026
  },
  {
    id: 'rolex-daytona-126505-black-diamond',
    brand: 'Rolex', model: 'Daytona 126505',
    meta: 'Black diamond dial &middot; New full set',
    price: '£45,000', priceValue: 45000,
    img: 'images/rolex-daytona-126505-black-diamond-01.webp', icon: 0,
    link: 'product-daytona-126505-black-diamond.html',
    condition: 'Unworn', papers: 'Full set', caseDiameter: 40,
    ref: '126505', materials: 'Rose gold', movement: 'Automatic', year: 2026
  },
  {
    id: 'royal-mint-tudor-beast-dragon-1oz-2024',
    category: 'gold',
    brand: 'The Royal Mint', model: '1 oz Gold Tudor Beast Dragon',
    meta: '1 oz &middot; 999.9 fine &middot; Pre-owned',
    price: 'From £3,400', priceValue: 3400,
    img: 'images/royal-mint-tudor-beast-dragon-1oz-2024-01.webp', icon: 0,
    weight: '1 oz', purity: '999.9', year: 2024, condition: 'Pre-owned',
    description: 'Part of the Royal Mint\'s Tudor Beasts series, inspired by the ten Royal Beasts that guarded the moat bridge at Hampton Court Palace. The Dragon stands for bravery: the reverse shows it holding a shield bearing the Beaufort badge, and the obverse carries the portrait of King Charles III. This is a pre-owned coin dated 2024.',
    imageNote: 'Image for illustration. Coin supplied may vary.'
  },
  {
    id: 'royal-mint-britannia-1oz',
    category: 'gold',
    brand: 'The Royal Mint', model: '1 oz Gold Britannia',
    meta: '1 oz &middot; 999.9 fine &middot; Pre-owned',
    price: 'From £3,400', priceValue: 3400,
    img: 'images/royal-mint-britannia-1oz-01.webp', icon: 0,
    weight: '1 oz', purity: '999.9', year: '2014–2026', condition: 'Pre-owned',
    description: 'The Gold Britannia is the Royal Mint\'s annual 1 oz bullion coin, containing one troy ounce of fine gold. The obverse carries the portrait of either King Charles III or Queen Elizabeth II, depending on the year, and the reverse shows the iconic Britannia design. These are pre-owned coins dated between 2014 and 2026.',
    imageNote: 'Image for illustration. Coin supplied may vary.'
  },
  {
    id: 'royal-mint-queens-beast-lion-of-england-1oz-2016',
    category: 'gold',
    brand: 'The Royal Mint', model: '1 oz Gold Queen’s Beast Lion of England',
    meta: '1 oz &middot; 999.9 fine &middot; Pre-owned',
    price: 'From £3,400', priceValue: 3400,
    img: 'images/royal-mint-queens-beast-lion-of-england-1oz-2016-01.webp', icon: 0,
    weight: '1 oz', purity: '999.9', year: 2016, condition: 'Pre-owned',
    description: 'The first of ten designs in the Royal Mint’s Queen’s Beasts bullion range. Each coin holds one troy ounce of 999.9 fine (24ct) gold and carries a £100 face value. The range celebrates the reign of Queen Elizabeth II, who became Britain’s longest-reigning monarch in 2015, and features the ten heraldic beasts that stood guard at her coronation; the original casts are now held in the Canadian Museum of History. This is a pre-owned coin dated 2016.',
    imageNote: 'Image for illustration. Coin supplied may vary.'
  },
  {
    id: 'royal-mint-lion-and-the-eagle-silver-1oz-2026',
    category: 'silver',
    brand: 'The Royal Mint', model: '1 oz Silver Lion and The Eagle',
    meta: '1 oz &middot; 2026',
    price: 'From £60', priceValue: 60,
    img: 'images/royal-mint-lion-and-the-eagle-silver-1oz-01.webp', icon: 0,
    weight: '1 oz', year: 2026,
    description: 'A coin celebrating the shared values and long-standing relationship between the United Kingdom and the United States. The reverse pairs the British Lion, standing for courage and strength, with the American Eagle, standing for freedom. The obverse carries the portrait of King Charles III. This coin is dated 2026.',
    imageNote: 'Image for illustration. Coin supplied may vary.'
  },
  {
    id: 'royal-mint-beowulf-and-the-dragon-silver-1oz-2025',
    category: 'silver',
    brand: 'The Royal Mint', model: '1 oz Silver Beowulf and The Dragon',
    meta: '1 oz &middot; 999 fine &middot; Pre-owned',
    price: 'From £65', priceValue: 65,
    img: 'images/royal-mint-beowulf-and-the-dragon-silver-1oz-01.webp', icon: 0,
    weight: '1 oz', purity: '999', year: 2025, condition: 'Pre-owned',
    description: 'The last coin in the Beowulf series, completing the Royal Mint’s Myths and Legends collection. Beowulf is a brave Scandinavian prince who later becomes a heroic king, and his story is told in three parts: Beowulf against Grendel, against Grendel’s mother, and against the dragon. The reverse shows his legendary battle with the dragon, and the obverse carries the portrait of King Charles III. This is a pre-owned coin dated 2025.',
    imageNote: 'Image for illustration. Coin supplied may vary.'
  },
  {
    id: 'perth-mint-james-bond-007-silver-1oz-2020',
    category: 'silver',
    brand: 'Perth Mint', model: '1 oz Silver James Bond 007, Tuvalu',
    meta: '1 oz &middot; 999.9 fine &middot; Pre-owned',
    price: 'From £125', priceValue: 125,
    img: 'images/perth-mint-james-bond-007-silver-1oz-2020-01.webp', icon: 0,
    weight: '1 oz', purity: '999.9', year: 2020, condition: 'Pre-owned',
    description: 'Issued by the Australian Perth Mint on behalf of Tuvalu, a small nation in the Pacific Ocean, this coin celebrates James Bond, one of the longest-running film franchises, which has entertained audiences around the world since 1962. The reverse pairs the Bond 007 gun logo with the signature gun barrel that opens each film. The obverse carries the portrait of the late Queen Elizabeth II, with the inscription QUEEN ELIZABETH II 1 oz 9999 Ag 2020 TUVALU 1 DOLLAR. This is a pre-owned coin dated 2020.',
    imageNote: 'Image for illustration. Coin supplied may vary.'
  },
  {
    id: 'royal-mint-robin-hood-silver-1oz-2021',
    category: 'silver',
    brand: 'The Royal Mint', model: '1 oz Silver Robin Hood',
    meta: '1 oz &middot; 999 fine &middot; Pre-owned',
    price: 'From £85', priceValue: 85,
    img: 'images/royal-mint-robin-hood-silver-1oz-2021-01.webp', icon: 0,
    weight: '1 oz', purity: '999', year: 2021, condition: 'Pre-owned',
    description: 'The first coin in the Royal Mint’s Myths and Legends series of silver and gold coins, which explores figures from British folklore. Robin Hood is one of the most famous fictional outlaws: according to legend, a heroic rebel who took from the rich to give to the poor. Jody Clark’s design shows Robin Hood with his bow drawn and aimed, and the obverse carries the portrait of Queen Elizabeth II. This is a pre-owned coin dated 2021.',
    imageNote: 'Image for illustration. Coin supplied may vary.'
  },
  {
    id: 'royal-mint-little-john-silver-1oz-2022',
    category: 'silver',
    brand: 'The Royal Mint', model: '1 oz Silver Little John',
    meta: '1 oz &middot; 999 fine &middot; Pre-owned',
    price: 'From £90', priceValue: 90,
    img: 'images/royal-mint-little-john-silver-1oz-2022-01.webp', icon: 0,
    weight: '1 oz', purity: '999', year: 2022, condition: 'Pre-owned',
    description: 'The third coin in the Royal Mint’s Myths and Legends series, which explores figures from British folklore. Little John is Robin Hood’s trusted companion. The reverse shows him ready for action against the scenery of Sherwood Forest, and the obverse carries the modern portrait of Queen Elizabeth II, designed by Jody Clark. This is a pre-owned coin dated 2022.',
    imageNote: 'Image for illustration. Coin supplied may vary.'
  },
  {
    id: 'royal-mint-queens-beast-lion-of-england-silver-2oz-2016',
    category: 'silver',
    brand: 'The Royal Mint', model: '2 oz Silver Queen’s Beast Lion of England',
    meta: '2 oz &middot; 999.9 fine &middot; Pre-owned',
    price: 'From £205', priceValue: 205,
    img: 'images/royal-mint-queens-beast-lion-of-england-silver-2oz-2016-01.webp', icon: 0,
    weight: '2 oz', purity: '999.9', year: 2016, condition: 'Pre-owned',
    description: 'The first of ten designs in the Royal Mint’s Queen’s Beasts bullion range. The range recognises Queen Elizabeth II, who passed Queen Victoria as Britain’s longest-reigning monarch on 9 September 2015, and features the ten heraldic beasts that stood guard at her coronation; the original casts are now held in the Canadian Museum of History. This is a pre-owned coin dated 2016.',
    imageNote: 'Image for illustration. Coin supplied may vary.'
  },
  {
    id: 'royal-mint-queens-beast-griffin-of-edward-silver-2oz-2017',
    category: 'silver',
    brand: 'The Royal Mint', model: '2 oz Silver Queen’s Beast Griffin of Edward III',
    meta: '2 oz &middot; 999.9 fine &middot; Pre-owned',
    price: 'From £235', priceValue: 235,
    img: 'images/royal-mint-queens-beast-griffin-of-edward-silver-2oz-2017-01.webp', icon: 0,
    weight: '2 oz', purity: '999.9', year: 2017, condition: 'Pre-owned',
    description: 'The second of ten designs in the Royal Mint’s Queen’s Beasts bullion range, which recognises Queen Elizabeth II passing Queen Victoria as Britain’s longest-reigning monarch on 9 September 2015. The range features the ten heraldic beasts that stood guard at her coronation; the original casts are now held in the Canadian Museum of History. The griffin, a mythical beast, was believed to signify courage, strength, guardianship and vigilance, among other qualities, and this coin features the badge of the House of Windsor. This is a pre-owned coin dated 2017.',
    imageNote: 'Image for illustration. Coin supplied may vary.'
  },
];
