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
 * year          year of production
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
];
