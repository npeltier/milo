export const CSS = `


merch-card[variant="co-addon"] [slot="heading-xs"] {
  font-size: 16px;
}

merch-card[variant="co-addon"] [slot='body-s'] a.spectrum-Link {
  font-size: var(--consonant-merch-card-body-xxs-font-size);
  font-style: normal;
  font-weight: 400;
  line-height: var(--consonant-merch-card-body-xxs-line-height);
}


merch-card[variant="co-addon"] [slot="footer"] .price {
  line-height: 18px;
}

merch-card[variant="co-addon"] [slot="footer"] .price-currency-symbol {
  font-size: 14px;
  vertical-align: top;
}

merch-card[variant="co-addon"] p[slot="footer"] .price-integer,
merch-card[variant="co-addon"] p[slot="footer"] .price-decimals-delimiter,
merch-card[variant="co-addon"] p[slot="footer"] .price-decimals {
  font-size: 25px;
  font-weight: 400;
  vertical-align: bottom;
}
`;
