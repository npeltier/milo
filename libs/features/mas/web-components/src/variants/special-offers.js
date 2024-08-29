import { html } from 'lit';

const renderSpecialOffer = (card) => {
    return html`${card.cardImage}
        <div class="body">
            <slot name="detail-m"></slot>
            <slot name="heading-xs"></slot>
            <slot name="body-xs"></slot>
        </div>
        ${card.evergreen
            ? html`
                  <div
                      class="detail-bg-container"
                      style="background: ${card['detailBg']}"
                  >
                      <slot name="detail-bg"></slot>
                  </div>
              `
            : html`
                  <hr />
                  ${card.secureLabelFooter}
              `}`;
}

export { renderSpecialOffer };
