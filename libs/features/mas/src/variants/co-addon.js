import { VariantLayout } from './variant-layout.js';
import { html, css } from 'lit';
import { CSS } from './co-addon.css.js';

export const CO_ADDON_MAPPING = {
    badge: {
      color: 'rgb(0, 101, 62)',
      backgroundColor: 'transparent',
    },
    title: { tag: 'h3', slot: 'heading-xs' },
    prices: { tag: 'p', slot: 'footer' },
    ctas: { slot: 'footer', size: 'M' },
    description: { tag: 'div', slot: 'body-s' },
    mnemonics: { size: 's' },
    size: ['wide'],
};

export class COAddon extends VariantLayout {
    getGlobalCSS() {
        return CSS;
    }

    /* c8 ignore next 3 */
    get aemFragmentMapping() {
        return CO_ADDON_MAPPING;
    }

    renderLayout() {
        return html` <div class="content">
                <div class="top-section">
                    <slot name="icons"></slot>
                    <slot name="heading-xs"></slot>
                    ${this.badge}
                </div>
                <slot name="body-s"></slot>
                <div class="footer">              
                  <slot name="footer">
                  </slot>
                </div>
            </div>
            <slot></slot>`;
    }

    static variantStyle = css`
        :host([variant='co-addon']) {
            --consonant-merch-card-background-color: #fff;
            --consonant-merch-card-body-s-color: rgb(34, 34, 34);
            --merch-color-inline-price-strikethrough: var(--spectrum-gray-600);
            --mod-img-height: 29px;
            border-color: #e6e6e6;
            box-sizing: border-box;
            min-width: 620px;
            max-width: 620px;
            width: 100%;
            max-height: 204px;
            height: 204px;
            border-radius: 4px;
            display: flex;
            flex-flow: wrap;
        }

        :host([variant='co-addon']) * {
            overflow: hidden;
        }

        :host([variant='co-addon']) ::slotted([slot='body-s']) {
            font-size: var(--consonant-merch-card-body-xs-font-size);
            line-height: var(--consonant-merch-card-body-xxs-line-height);
            min-width: 154px;
            max-width: 171px;
            height: 55px;
            overflow: hidden;
        }

        :host([variant='co-addon'][size='wide']) ::slotted([slot='body-s']) {
            max-width: 600px;
            display: flex;
            flex-direction: column;
        }

        :host([variant='co-addon'][size='wide']) {
            width: 600px;
            max-width: 600px;
        }

        :host([variant='co-addon']) .content {
            display: flex;
            gap: var(--consonant-merch-spacing-xxs);
            padding-top: 16px;
            padding-inline-start: 26px;
            padding-inline-end: 26px;
            height: 180px;
            box-sizing: border-box;
            min-height: 123px;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            flex: 1 0 0;
        }

        :host([variant='co-addon'])
            ::slotted([slot='body-s'])
            ::slotted(a:not(.con-button)) {
            font-size: var(--consonant-merch-card-body-xxs-font-size);
            font-style: normal;
            font-weight: 400;
            line-height: var(--consonant-merch-card-body-xxs-line-height);
            text-decoration-line: underline;
            color: var(--spectrum-gray-800, var(--merch-color-grey-80));
        }

        :host([variant='co-addon']) div[class$='-badge'] {
            font-size: calc(1em - 2px);
            font-weight: 900;
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            box-sizing: border-box;
            position: static;
            border-radius: 4px;            
            line-height: 18px;
            padding: 2px 6px 2px 6px;
        }

        :host([variant="co-addon"]) .footer {
          display: flex;
          justify-content: space-between;
          flex-direction: row-reverse;
          flex-grow: 0;
          margin-top: 6px;
          width: 100%;
          align-items: center;
        }


        :host([variant='co-addon']) ::slotted([slot='footer']) {
            margin-top: 16px;
        }

        :host([variant='co-addon']) ::slotted([slot='footer']) button {
            font-size: 14px;
        }

        :host([variant='co-addon']) .top-section {
            align-items: center;
            gap: 8px;
        }
    `;
}
