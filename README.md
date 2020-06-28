# COMREX

Built with [Vue](https://vuejs.org). Vue is used to manage some states, which include;

- Change location of user from [join](join.html) to [dashboard](dashboard.html)

- Toggle between *Register* and *Login* in [join](join.html)

- Toggle between *Investment* and *Trading*

## Javascript Structure

- All *Javascript* functions are held in the **_script.js** files.

- Vue is activated on pages with the **app** id placed on the *section* element, with an exception to the homepage, since no JavaScript logic is needed.

### Logging In

- The form at [join](join.html) is submitted through Vue, via the ``submit`` method. **However this should be removed by removing ``@click.prevent=""`` from the form tag.**

- ``reg`` is used to toggle between the *login* or *reg* states. When ``false``, *login* is shown, and vice-versa.

### Dashboard

**Please Note: The user wallet balance should be displayed inside of the ``span.--clickable`` in the header. Vue takes the innerHTML of this span and uses it as a dependency for other displays.**

- The Investment/Trade is toggled by ``mode``.

- Rate of barter trade:

- - 1 Apple = 40 Rice = 120 Chaff = 100 Charcoal = 70 Starch

- - 1 Rice = 1/40 Apples = 50 Chaff = 30 Charcoal = 15 Starch

- - 1 Chaff = 1/120 Apples = 1/50 Rice = 10 Charcoal = 3 Starch

- - 1 Charcoal = 1/100 Apples = 1/30 Rice = 1/10 Chaff = 1/2 Starch

- - 1 Starch = 1/70 Apple = 1/15 Rice = 1/3 Chaff = 2 Charcoal

- In the [Dashboard](dashboard.html), a modal is added via Vue as a component. This component takes the ``innerHTML`` of the ``span`` with ``ref="account"`` shows it to the user. From this modal, the user can add funds to his/her trading account. Irrespective of either *Trading* or *Investing*.

## Deals

All deals, investment and saved list returns are rendered at the [deals](deals.html) page.

- It is also toggled by the ``mode`` variable, managed by Vue Js. Factors to note:

- [1] *Deals* is toggled when ``mode`` is equal to ``trading``

- [2] *Investments* is toggled when ``mode`` is equal to ``investments``

- [3] *SavedLists* is toggled when ``mode`` is equal to ``list``

### Deals Card

All *deals* card has the following properties;

- **Title**: This is the title of the deal. It contains the quantity of the product alongside the product's name.

- **Chart/No-chart**: This shows the type of deal. Deals are either outgoing, no chart is shown, or incoming, the chart is shown.

- **Amount**: This is the amount reached by both buyer and seller of the product.

- **Dealer**: This contains the second party in the deal.

- **Description**: This holds any other agreement held by both parties. Also this might contain any info both parties want to share about the deal.

- **Closed(Yes/No/Pending)**: This holds the current status of the deal. A deal is either Closed, Not Closed, or Pending. *For Closed deals, it has a class of ``ticket__description--good``, and for Not Closed deals it holds ``ticket__descripton--bad``. However, for Pending deals, the class it holds is ``ticket__description--pending``*.

### Modal

The Deals Modal would contain ever info about a particular deal. Important notes:

- The ``modal__deal-type`` h6 contains the deal type and could either be *You'Re Buying* or *You'Re selling*, which signifies wether the user is buying or selling in the particular deal.

- - For **Investments** this would be empty.

- The ``modal__btn`` button when clicked should either pull the user out of the deal or closes it. Also note that, when a deal is already closed it has an accompanying class ``modal__btn--bad`` which is used to pull the user out of the deal. *There are always two buttons in the modal. Both has to be thesame type(i.e the same class).*

- - For **Investments** this would contain either "Remove Investment" or "Add Investment", with ``modal__btn--bad`` or ``modal__btn`` respectively.

- _Note:_ modal is *Resuable*. Content is loaded via *Ajax* and displayed.
