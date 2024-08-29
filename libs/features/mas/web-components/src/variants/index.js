import { renderSpecialOffer } from './special-offers';
const MINI_COMPARE_CHART = 'mini-compare-chart';

const renderVariant = (card) => {
    if (!card.isConnected || card.style.display === 'none') return;
    switch (card.variant) {
        case 'special-offers': 
            return renderSpecialOffer(card);
        case 'segment':
            return card.renderSegment();
        case 'plans':
            return card.renderPlans();
        case 'catalog':
            return card.renderCatalog();
        case 'image':
            return card.renderImage();
        case 'product':
            return card.renderProduct();
        case 'inline-heading':
            return card.renderInlineHeading();
        case MINI_COMPARE_CHART:
            return card.renderMiniCompareChart();
        case 'ccd-action':
            return card.renderCcdAction();
        case 'twp':
            return card.renderTwp();
        default:
            // this line should never hit, to check.
            return card.renderProduct();
    }
};

export { renderVariant };
