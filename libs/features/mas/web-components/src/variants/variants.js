import { Catalog } from './catalog.js';
import { CCDAction } from './ccd-action.js';
import { Image } from './image.js';
import { InlineHeading } from './inline-heading.js';
import { MiniCompareChart } from './mini-compare-chart.js';
import { Plans } from './plans.js';
import { Product } from './product.js';
import { Segment } from './segment.js';
import { SpecialOffer } from './special-offer.js';
import { TWP } from './twp.js';

const getVariantLayout = (card) => {
  switch (card.variant) {
    case 'catalog':
      return new Catalog(card);
    case 'ccd-action':
      return new CCDAction(card);
    case 'image':
      return new Image(card);
    case 'inline-heading':
      return new InlineHeading(card);
    case 'mini-compare-chart': 
      return new MiniCompareChart(card);
    case 'plans':
      return new Plans(card);
    case 'product':
      return new Product(card);
    case 'segment': 
      return new Segment(card);
    case 'special-offers': 
      return new SpecialOffer(card);
    case 'twp':
      return new TWP(card);
    default:
      return new Product(card);
  }
};

const getVariantStyles = () => {
  const styles = [];
  styles.push(Catalog.variantStyle);
  styles.push(CCDAction.variantStyle);
  styles.push(MiniCompareChart.variantStyle);
  styles.push(Plans.variantStyle);
  styles.push(Segment.variantStyle);
  styles.push(SpecialOffer.variantStyle);
  styles.push(TWP.variantStyle);
  return styles;
}

const getVariantGlobalCss = () => {
  return `
    ${Catalog.getGlobalCSS()}${CCDAction.getGlobalCSS()}${Image.getGlobalCSS()}
    ${InlineHeading.getGlobalCSS()}${MiniCompareChart.getGlobalCSS()}
    ${Plans.getGlobalCSS()}${Product.getGlobalCSS()}${Segment.getGlobalCSS()}
    ${SpecialOffer.getGlobalCSS()}${TWP.getGlobalCSS()}
  `;
}

export { getVariantLayout, getVariantStyles, getVariantGlobalCss };
