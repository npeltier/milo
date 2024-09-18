Web Component Analyzer analyzing 107 files...
# wcms-commerce

Custom web component to provide active instance of commerce service
to consumers, appended to the head section of current document.

## Properties

| Property         | Modifiers | Type      |
|------------------|-----------|-----------|
| `isWcmsCommerce` | readonly  | `boolean` |

# merch-card-collection

## Properties

| Property             | Modifiers | Type                             | Default                                       |
|----------------------|-----------|----------------------------------|-----------------------------------------------|
| `displayResult`      |           | `boolean`                        | false                                         |
| `filter`             |           | `string`                         | "all"                                         |
| `filtersButton`      | readonly  | `TemplateResult<1> \| ""`        |                                               |
| `footer`             | readonly  | `TemplateResult<1> \| undefined` |                                               |
| `hasMore`            |           | `boolean`                        | false                                         |
| `header`             | readonly  | `TemplateResult<1> \| undefined` |                                               |
| `mobileAndTablet`    |           | `MatchMediaController`           | "new MatchMediaController(this, TABLET_DOWN)" |
| `resultCount`        |           |                                  | "undefined"                                   |
| `resultTextSlotName` | readonly  | `string`                         |                                               |
| `searchBar`          | readonly  | `TemplateResult<1> \| ""`        |                                               |
| `showMoreButton`     | readonly  | `TemplateResult<1> \| undefined` |                                               |
| `sortButton`         | readonly  | `TemplateResult<1> \| undefined` |                                               |

## Methods

| Method          | Type                 |
|-----------------|----------------------|
| `openFilters`   | `(e: any): void`     |
| `showMore`      | `(): Promise<void>`  |
| `sortChanged`   | `(event: any): void` |
| `startDeeplink` | `(): void`           |

## Events

| Event                            | Type                           |
|----------------------------------|--------------------------------|
| `merch-card-collection:showmore` | `CustomEvent<any>`             |
| `merch-card-collection:sort`     | `CustomEvent<{ value: any; }>` |

# merch-card

## Properties

| Property                     | Modifiers | Type                                 | Default |
|------------------------------|-----------|--------------------------------------|---------|
| `badge`                      | readonly  | `TemplateResult<1> \| undefined`     |         |
| `badgeElement`               | readonly  | `HTMLElement \| null`                |         |
| `cardImage`                  | readonly  | `TemplateResult<1>`                  |         |
| `checkoutLinks`              | readonly  | `array`                              |         |
| `computedBorderStyle`        | readonly  | `string`                             |         |
| `customerSegment`            |           |                                      |         |
| `defaultSlot`                | readonly  | `TemplateResult<1> \| unique symbol` |         |
| `description`                | readonly  | `string \| undefined`                |         |
| `dynamicPrice`               | readonly  | `Element \| null`                    |         |
| `evergreen`                  | readonly  | `boolean`                            |         |
| `filters`                    |           | `object`                             | {}      |
| `footerSlot`                 | readonly  |                                      |         |
| `headingmMSlot`              | readonly  |                                      |         |
| `marketSegment`              |           |                                      |         |
| `miniCompareFooter`          | readonly  | `TemplateResult<1>`                  |         |
| `offerSelect`                | readonly  | `Element \| null`                    |         |
| `price`                      | readonly  |                                      |         |
| `promoBottom`                | readonly  | `boolean`                            |         |
| `quantitySelect`             | readonly  | `Element \| null`                    |         |
| `secureLabelFooter`          | readonly  | `TemplateResult<1>`                  |         |
| `selected`                   |           | `boolean`                            | false   |
| `startingAt`                 | readonly  | `boolean`                            |         |
| `stockCheckbox`              | readonly  | `TemplateResult<1> \| ""`            |         |
| `storageOptions`             | readonly  | `Element \| null`                    |         |
| `storageSpecificOfferSelect` | readonly  | `Element \| null`                    |         |
| `title`                      | readonly  | `string \| undefined`                |         |
| `titleElement`               | readonly  | `Element \| null`                    |         |
| `types`                      |           | `string`                             | ""      |

## Methods

| Method                               | Type                                            | Description                                      |
|--------------------------------------|-------------------------------------------------|--------------------------------------------------|
| `adjustMiniCompareBodySlots`         | `(): Promise<void>`                             |                                                  |
| `adjustMiniCompareFooterRows`        | `(): void`                                      |                                                  |
| `adjustTitleWidth`                   | `(): Promise<void>`                             |                                                  |
| `appendInvisibleSpacesToFooterLinks` | `(): void`                                      |                                                  |
| `getContainer`                       | `(): Element \| null`                           |                                                  |
| `handleQuantitySelection`            | `(event: any): void`                            |                                                  |
| `handleStorageChange`                | `(): void`                                      |                                                  |
| `includes`                           | `(text: any): boolean`                          |                                                  |
| `merchCardReady`                     | `(): void`                                      |                                                  |
| `removeEmptyRows`                    | `(): void`                                      |                                                  |
| `renderCatalog`                      | `(): TemplateResult<1>`                         |                                                  |
| `renderCcdAction`                    | `(): TemplateResult<1>`                         |                                                  |
| `renderImage`                        | `(): TemplateResult<1>`                         |                                                  |
| `renderInlineHeading`                | `(): TemplateResult<1>`                         |                                                  |
| `renderMiniCompareChart`             | `(): TemplateResult<1>`                         |                                                  |
| `renderPlans`                        | `(): TemplateResult<1>`                         |                                                  |
| `renderProduct`                      | `(): TemplateResult<1>`                         |                                                  |
| `renderSegment`                      | `(): TemplateResult<1>`                         |                                                  |
| `renderSpecialOffer`                 | `(): TemplateResult<1>`                         |                                                  |
| `renderTwp`                          | `(): TemplateResult<1>`                         |                                                  |
| `selectMerchOffer`                   | `(offer: any): void`                            |                                                  |
| `toggleActionMenu`                   | `(e: any): void`                                |                                                  |
| `toggleStockOffer`                   | `({ target }: { target: any; }): Promise<void>` |                                                  |
| `updateFilters`                      | `(singleApp: *): void`                          | If the card is the single app, set the order for all filters to 2.<br />If not, increment the order for all filters after the second card by 1.<br /><br />**singleApp**: undefined |
| `updateMiniCompareElementMinHeight`  | `(el: any, name: any): void`                    |                                                  |

## Events

| Event                           | Type                                        |
|---------------------------------|---------------------------------------------|
| `merch-card:action-menu-toggle` | `CustomEvent<{ card: any; type: string; }>` |
| `merch-card:ready`              | `CustomEvent<any>`                          |
| `merch-storage:change`          | `CustomEvent<{ offerSelect: any; }>`        |

# merch-datasource

Custom element representing a MerchDataSource.

## Attributes

| Attribute |
|-----------|
| `source`  |

## Properties

| Property | Attribute | Type            | Default | Description   |
|----------|-----------|-----------------|---------|---------------|
| `cache`  |           | `FragmentCache` | "cache" |               |
| `path`   | `path`    | `string`        |         | fragment path |

## Methods

| Method      | Type                |
|-------------|---------------------|
| `fetchData` | `(): Promise<void>` |
| `refresh`   | `(): void`          |

# merch-icon

## Properties

| Property | Type     | Default |
|----------|----------|---------|
| `alt`    | `string` | ""      |
| `size`   | `string` | "m"     |

# merch-mnemonic-list

# merch-offer-select

## Properties

| Property                | Modifiers | Type              | Default |
|-------------------------|-----------|-------------------|---------|
| `customerSegment`       | readonly  |                   |         |
| `defaults`              |           | `object`          | {}      |
| `isMobile`              | readonly  | `boolean`         |         |
| `marketSegment`         | readonly  |                   |         |
| `merchCard`             | readonly  | `Element \| null` |         |
| `miniCompareMobileCard` | readonly  | `boolean`         |         |
| `price`                 | readonly  | `Element \| null` |         |
| `variant`               |           | `string`          | "plans" |

## Methods

| Method                           | Type                                             | Description                                      |
|----------------------------------|--------------------------------------------------|--------------------------------------------------|
| `findAppropriateOffer`           | `(selectedValue: any): Element \| null`          |                                                  |
| `getSlottedElement`              | `(slotName: any, container: any): any`           |                                                  |
| `handleFocusin`                  | `(event: any): void`                             |                                                  |
| `handleOfferSelectReady`         | `(): Promise<void>`                              |                                                  |
| `handleOfferSelection`           | `(e: any): void`                                 |                                                  |
| `handleOfferSelectionByQuantity` | `(event: any): void`                             |                                                  |
| `saveContainerDefaultValues`     | `(): { description: Node \| undefined; badgeText: any; }` | Returns the default values for the price, cta, and description slots.<br />These are the values coming from the container itself, not from the merch-offer elements.<br />E.g. initial merch-card description text. There is no default price or cta in the container. |
| `selectOffer`                    | `(newOffer: any): void`                          |                                                  |
| `updateBadgeText`                | `(container: any): void`                         | If badge text is empty string - delete the badge.<br />If badge text is present - set the badge.<br />If badge text is null or undefined - set default badge. |
| `updateContainer`                | `(): void`                                       | Will update price, cta, and other slots/properties in parent container (e.g. merch-card or twp modal) |
| `updateSlot`                     | `(slotName: any, container: any): void`          |                                                  |

## Events

| Event                      | Type                |
|----------------------------|---------------------|
| `merch-offer-select:ready` | `CustomEvent<any>`  |
| `merch-offer:selected`     | `CustomEvent<this>` |

# merch-offer

## Properties

| Property               | Modifiers | Type                  | Default |
|------------------------|-----------|-----------------------|---------|
| `asRadioOption`        | readonly  | `TemplateResult<1>`   |         |
| `asSubscriptionOption` | readonly  | `TemplateResult<1>`   |         |
| `cta`                  | readonly  | `Element \| null`     |         |
| `customerSegment`      | readonly  |                       |         |
| `marketSegment`        | readonly  |                       |         |
| `price`                | readonly  | `Element \| null`     |         |
| `prices`               | readonly  | `NodeListOf<Element>` |         |
| `selected`             |           | `boolean`             | false   |
| `type`                 |           | `string`              | "radio" |

## Methods

| Method           | Type                               |
|------------------|------------------------------------|
| `getOptionValue` | `(slotName: any): Element \| null` |
| `initOffer`      | `(): Promise<void>`                |

## Events

| Event               | Type               |
|---------------------|--------------------|
| `merch-offer:ready` | `CustomEvent<any>` |

# merch-quantity-select

## Properties

| Property               | Attribute       | Modifiers | Type                | Default     |
|------------------------|-----------------|-----------|---------------------|-------------|
| `boundKeydownListener` |                 |           |                     |             |
| `closed`               | `closed`        |           | `boolean`           | true        |
| `defaultValue`         | `default-value` |           | `number`            | "undefined" |
| `handleClickOutside`   |                 |           |                     |             |
| `highlightedIndex`     |                 |           | `number`            | 0           |
| `max`                  | `max`           |           | `number`            | 0           |
| `maxInput`             | `max-input`     |           | `number`            | "undefined" |
| `min`                  | `min`           |           | `number`            | 0           |
| `offerSelect`          |                 | readonly  | `Element \| null`   |             |
| `options`              |                 |           | `never[]`           | []          |
| `popover`              |                 | readonly  | `TemplateResult<1>` |             |
| `selected`             | `selected`      |           | `number`            |             |
| `selectedValue`        |                 |           | `number`            | 0           |
| `step`                 | `step`          |           | `number`            | 0           |
| `title`                | `title`         |           | `string`            | ""          |
| `toggleMenu`           |                 |           |                     |             |

## Methods

| Method                 | Type                  |
|------------------------|-----------------------|
| `closePopover`         | `(): void`            |
| `generateOptionsArray` | `(): number[]`        |
| `handleClickOutside`   | `(event: any): void`  |
| `handleInput`          | `(): void`            |
| `handleKeydown`        | `(e: any): void`      |
| `handleKeyup`          | `(): void`            |
| `handleMenuOption`     | `(option: any): void` |
| `handleMouseEnter`     | `(index: any): void`  |
| `sendEvent`            | `(): void`            |
| `toggleMenu`           | `(): void`            |

## Events

| Event                            | Type                               |
|----------------------------------|------------------------------------|
| `merch-quantity-selector:change` | `CustomEvent<{ option: number; }>` |

# merch-search

## Properties

| Property               | Modifiers | Type             |
|------------------------|-----------|------------------|
| `handleInput`          |           | `object`         |
| `handleInputDebounced` |           | `object`         |
| `search`               | readonly  | `Search \| null` |

## Methods

| Method              | Type                 | Description                                  |
|---------------------|----------------------|----------------------------------------------|
| `handleInputSubmit` | `(event: any): void` |                                              |
| `setStateFromURL`   | `(): void`           | set the state of the search based on the URL |
| `startDeeplink`     | `(): void`           |                                              |

## Events

| Event                 | Type                                            |
|-----------------------|-------------------------------------------------|
| `merch-search:change` | `CustomEvent<{ type: string; value: string; }>` |

# merch-secure-transaction

## Properties

| Property      | Type      | Default |
|---------------|-----------|---------|
| `labelText`   | `string`  | ""      |
| `showIcon`    | `boolean` | true    |
| `tooltipText` | `string`  | ""      |

# merch-stock

## Properties

| Property  | Modifiers | Type      | Default |
|-----------|-----------|-----------|---------|
| `checked` |           | `boolean` | false   |
| `osi`     | readonly  |           |         |

## Methods

| Method         | Type                 |
|----------------|----------------------|
| `handleChange` | `(event: any): void` |

## Events

| Event                | Type                                            |
|----------------------|-------------------------------------------------|
| `merch-stock:change` | `CustomEvent<{ checked: any; planType: any; }>` |

# merch-subscription-panel

## Properties

| Property            | Modifiers | Type                             | Default    | Description                                      |
|---------------------|-----------|----------------------------------|------------|--------------------------------------------------|
| `checkoutLink`      | readonly  | `TemplateResult<1> \| undefined` |            |                                                  |
| `continueText`      |           | `string`                         | "Continue" |                                                  |
| `listLayout`        | readonly  | `TemplateResult<1>`              |            | Renders subscription layout when connected to a card and has prices. |
| `offerSelect`       | readonly  | `Element \| null`                |            |                                                  |
| `quantitySelect`    | readonly  | `Element \| null`                |            |                                                  |
| `ready`             |           | `boolean`                        | false      |                                                  |
| `secureTransaction` | readonly  | `Element \| null`                |            |                                                  |
| `stock`             | readonly  | `Element \| null`                |            |                                                  |
| `waitLayout`        | readonly  | `TemplateResult<1>`              |            | Renders loading spinner when disconnected from a card or waits for prices to resolve. |

## Methods

| Method                       | Type                 | Description                                      |
|------------------------------|----------------------|--------------------------------------------------|
| `checkOfferSelectReady`      | `(): Promise<void>`  | if merch-offer-select was already ready before the this is connected to DOM |
| `handleContinue`             | `(): void`           |                                                  |
| `handleOfferSelect`          | `(event: any): void` |                                                  |
| `handleOfferSelectReady`     | `(): void`           |                                                  |
| `handleQuantitySelectChange` | `(event: any): void` |                                                  |
| `handleSlotChange`           | `(): void`           |                                                  |
| `handleStockChange`          | `(): void`           |                                                  |
| `initOfferSelect`            | `(): Promise<void>`  |                                                  |
| `initQuantitySelect`         | `(): void`           |                                                  |
| `initStock`                  | `(): void`           |                                                  |

# merch-twp-d2p

## Properties

| Property                       | Modifiers | Type                             | Default                 | Description                                |
|--------------------------------|-----------|----------------------------------|-------------------------|--------------------------------------------|
| `backButton`                   | readonly  | `TemplateResult<1>`              |                         |                                            |
| `businessTab`                  | readonly  | `TemplateResult<1>`              |                         |                                            |
| `businessText`                 |           | `string`                         | "Business"              |                                            |
| `cardToBePreselected`          | readonly  | `Element \| undefined`           |                         |                                            |
| `cardToSelect`                 | readonly  |                                  |                         |                                            |
| `cards`                        | readonly  | `NodeListOf<Element>`            |                         | All the getters for DOM elements           |
| `cceCards`                     | readonly  | `NodeListOf<Element>`            |                         |                                            |
| `cciCards`                     | readonly  | `NodeListOf<Element>`            |                         |                                            |
| `cctCards`                     | readonly  | `NodeListOf<Element>`            |                         |                                            |
| `continueButton`               | readonly  | `TemplateResult<1>`              |                         |                                            |
| `continueText`                 |           | `string`                         | "Continue"              |                                            |
| `desktopLayout`                | readonly  | `TemplateResult<1>`              |                         |                                            |
| `educationTab`                 | readonly  | `TemplateResult<1>`              |                         |                                            |
| `educationText`                |           | `string`                         | "Students and teachers" |                                            |
| `firstCardInSelectedTab`       | readonly  | `Element \| undefined`           |                         |                                            |
| `handleWhatsIncludedClick`     |           |                                  |                         |                                            |
| `individualsTab`               | readonly  | `TemplateResult<1>`              |                         |                                            |
| `individualsText`              |           | `string`                         | "Individuals"           |                                            |
| `log`                          | readonly  | `Commerce.Log.Instance`          |                         |                                            |
| `mobileLayout`                 | readonly  | `TemplateResult<1>`              |                         |                                            |
| `mobileStepTwo`                | readonly  | `TemplateResult<1>`              |                         |                                            |
| `preselectedCardId`            | readonly  |                                  |                         |                                            |
| `ready`                        |           | `boolean`                        | false                   |                                            |
| `selectedCard`                 | readonly  |                                  |                         |                                            |
| `selectedTab`                  |           | `string`                         | "this.preselectedTab()" |                                            |
| `selectedTabPanel`             | readonly  | `Element \| null`                |                         |                                            |
| `showSubscriptionPanelInStep1` | readonly  | `boolean`                        |                         |                                            |
| `singleCardFooter`             | readonly  | `TemplateResult<1> \| undefined` |                         | the footer is displayed only in the step 1 |
| `step`                         |           | `number`                         | 1                       |                                            |
| `stepTwoCardIconsAndTitle`     | readonly  | `TemplateResult<1> \| undefined` |                         |                                            |
| `subscriptionPanel`            | readonly  | `Element \| null`                |                         |                                            |
| `tabElement`                   | readonly  | `Tabs \| null`                   |                         |                                            |
| `tabs`                         | readonly  | `TemplateResult<1>`              |                         |                                            |
| `whatsIncluded`                | readonly  | `Element \| null`                |                         |                                            |
| `whatsIncludedLink`            | readonly  | `Element \| null`                |                         |                                            |

## Methods

| Method                     | Type                                             |
|----------------------------|--------------------------------------------------|
| `handleBack`               | `(): void`                                       |
| `handleContinue`           | `(): void`                                       |
| `handleOfferSelected`      | `(event: any): void`                             |
| `handleQuantityChange`     | `(event: any): void`                             |
| `handleStorageChange`      | `(event: any): void`                             |
| `handleWhatsIncludedClick` | `(event: any): void`                             |
| `merchTwpReady`            | `(): void`                                       |
| `preselectedTab`           | `(): "business" \| "individuals" \| "education"` |
| `processCards`             | `(): Promise<void>`                              |
| `selectCard`               | `(card: any, force?: boolean): void`             |
| `selectSingleCard`         | `(card: any): void`                              |
| `setOfferSelectOnPanel`    | `(offerSelect: any): void`                       |
| `tabChanged`               | `(event: any): Promise<void>`                    |
| `unSelectSingleCard`       | `(): void`                                       |

# merch-whats-included

## Properties

| Property     | Modifiers | Type                  | Default |
|--------------|-----------|-----------------------|---------|
| `isMobile`   | readonly  | `boolean`             |         |
| `mobileRows` |           | `number`              |         |
| `rows`       | readonly  | `NodeListOf<Element>` |         |
| `showAll`    |           | `boolean`             | false   |

## Methods

| Method           | Type       |
|------------------|------------|
| `hideSeeMoreEls` | `(): void` |
| `toggle`         | `(): void` |

## Events

| Event                    | Type               |
|--------------------------|--------------------|
| `hide-see-more-elements` | `CustomEvent<any>` |

# plans-modal

## Properties

| Property        | Modifiers | Type                             | Default                                          |
|-----------------|-----------|----------------------------------|--------------------------------------------------|
| `includesLimit` |           | `number`                         | 5                                                |
| `mobileDevice`  |           | `MatchMediaController`           | "new MatchMediaController(this, MOBILE_LANDSCAPE)" |
| `seeMoreButton` | readonly  | `TemplateResult<1> \| undefined` |                                                  |
| `seeMoreText`   |           | `string`                         | " + See more"                                    |

## Methods

| Method         | Type                |
|----------------|---------------------|
| `openModal`    | `(): Promise<void>` |
| `prepareSlots` | `(): void`          |
| `seeMore`      | `(): void`          |

# merch-sidenav-checkbox-group

## Methods

| Method             | Type               | Description                                      |
|--------------------|--------------------|--------------------------------------------------|
| `selectionChanged` | `(event: *): void` | leaf level item change handler<br /><br />**event**: undefined |
| `setStateFromURL`  | `(): void`         | set the state of the sidenav based on the URL    |

# merch-sidenav-list

## Properties

| Property               | Type     |
|------------------------|----------|
| `handleClickDebounced` | `object` |

## Methods

| Method             | Type                                             | Description                                      |
|--------------------|--------------------------------------------------|--------------------------------------------------|
| `handleClick`      | `({ target: item }: any): void`                  | click handler to manage first level items state of sidenav<br /><br />**param**: undefined |
| `selectElement`    | `(element: any, selected?: boolean): void`       |                                                  |
| `selectionChanged` | `({ target: { value, parentNode } }: any): void` | leaf level item selection handler<br /><br />**event**: undefined |
| `setStateFromURL`  | `(): void`                                       | set the state of the sidenav based on the URL    |

## Events

| Event                  | Type                                             |
|------------------------|--------------------------------------------------|
| `merch-sidenav:select` | `CustomEvent<{ type: string; value: any; elt: any; }>` |

# merch-sidenav

## Properties

| Property          | Modifiers | Type                             | Default                                          |
|-------------------|-----------|----------------------------------|--------------------------------------------------|
| `asAside`         | readonly  | `TemplateResult<1>`              |                                                  |
| `asDialog`        | readonly  | `TemplateResult<1> \| undefined` |                                                  |
| `dialog`          | readonly  | `DialogBase \| null`             |                                                  |
| `filters`         | readonly  | `Element \| null`                |                                                  |
| `mobileAndTablet` |           | `MatchMediaController`           | "new MatchMediaController(this, TABLET_DOWN)"    |
| `mobileDevice`    |           | `MatchMediaController`           | "new MatchMediaController(this, SPECTRUM_MOBILE_LANDSCAPE)" |
| `modal`           |           | `boolean`                        | false                                            |
| `search`          | readonly  | `Element \| null`                |                                                  |

## Methods

| Method       | Type                                   |
|--------------|----------------------------------------|
| `closeModal` | `(e: any): void`                       |
| `openModal`  | `(): void`                             |
| `showModal`  | `({ target }: { target: any; }): void` |

