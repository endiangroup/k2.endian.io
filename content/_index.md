+++
title  = "Home"
+++
{{% section id="why" title="1. Why a new currency?" %}}

K2 is a human-centric, decentralised, open source, non-profit cryptocurrency protocol that allows a transferable token to maintain value parity with an existing, publicly traded asset. 

The first instance will be a cryptocurrency pegged to the Euro, provisionally named E2. E2’s global user base will be afforded instant, near zero-cost transactions without the interference of unreliable third parties like banks, and will effectively extend the economic strength of the eurozone to the entire world. 

Economic stability is a major determinant of positive health and social outcomes for developing nations[^1]. The current global growth of stability is often unsustainable in developing nations, with violent political instability frequently undermining currency values[^2]. A globally available, stable currency would be a cornerstone to global social improvement[^3]. Existing decentralized cryptocurrencies do not offer stability[^4].

With a Euro-centric global currency, those already in the eurozone will continue to lead the economic growth of the world, now at significantly lower cost. Instant, direct capital flows to and from emerging economies, growing since 2017[^5], would mutually enrich all participating parties.

Smart contracts and public, well-documented developer interfaces will allow anyone to build sophisticated products and collaborative services which benefit from a stable currency as a first-class component.

K2’s free and open source mobile and web reference applications will lift the barrier to entry into cryptocurrency for ordinary people. Although details of the complex inner workings will be freely available, understanding them will not be necessary in order to use or acquire the currency.

Other attempts at value-pegging have treated their currencies as for-profit businesses, offered privileges to investors, locked their users into particular networks, or resorted to centralised fiat currency reserves. 
K2 is the only attempt to create an open source, non-profit protocol that exclusively benefits, and is directly owned by, its users.

[^1]: See [Health and the economy: A vital relationship](http://oecdobserver.org/news/archivestory.php/aid/1241/Health_and_the_economy:_A_vital_relationship_.html) (Frenk, 2004), [The Macroeconomic Determinants of Health](https://www.annualreviews.org/doi/full/10.1146/annurev.publhealth.23.100901.140540) (Subramanian, Belli and Kawachi, 2002) and [Health Impact Assessment](https://www.who.int/hia/en/) (WHO, 2019)

[^2]: See [Political Instability and Growth: Case of the Developing Countries](http://www.macrothink.org/journal/index.php/ijssr/article/view/3973) (Jaouadi, Arfaoui and Ziedi, 2013)

[^3]: The relationship between stable currency and social improvement has been understood for decades (Saeed, 1986), (Johnson, Compton and Giedeman, 2009).

[^4]: See [Economic Aspects of Bitcoin and Other Decentralized Public-Ledger Currency Platforms](https://papers.ssrn.com/sol3/Delivery.cfm/SSRN_ID2438085_code249436.pdf?abstractid=2424516&mirid=1) (Evans, 2014)

[^5]: See [World Economic Situation and Prospects 2018](https://www.un.org/development/desa/dpad/publication/world-economic-situation-and-prospects-2018/) (United Nations, 2018)

{{% /section %}}

{{% section id="theory" title="2. Theory and implementation" %}}

We assert that a cryptocurrency can be autonomously stable relative to a centralised asset, that its network can be economically self-sustaining, and that the network can be constructed without the need for profit-seeking investors.

More details are found in the [summary of position](https://miro.com/app/board/o9J_kxtlEJ4=/) document.

K2 follows an initial pilot project that was in active development for three years. That attempt was a for-profit stablecoin network focused on the US dollar that launched a main net and garnered significant international interest before it fell prey to its investors and US securities regulations. The authors of this proposal led the software engineering, behavioural economics and complexity theory departments of that organisation. 

The project source code, which advanced the state of blockchain engineering in several ways, is available under an open source license on GitHub.

The previous model was untenable because it sought to make its investors a profit. We are seeking funding to re-engineer this legacy system into a truly open source project, including a non-profit managing K2 Foundation. This will entail the continued development of a new economic model, some software engineering to adapt the changes, and the human-centralisation of the mobile and web applications.

The K2  system maintains the value of the token against its peg by autonomously both managing the token supply and holding a fiat reserve in a non-profit Foundation. The currency may be traded freely, and will hold its value in the market, but users may buy and sell from the Foundation at parity rates plus a very small fixed transaction fee.

The number of tokens that exist at any given time is a function of the demand for the token, measured by the market price of the token against its peg. When the market price of the token exceeds the peg value, more tokens are minted to saturate the market; when the market price of the token is less than the peg value, tokens are destroyed to increase scarcity.

The software system consists of the following broad components:

- Token-issuing core. Produces, dispenses, manages and destroys tokens to maintain parity according to the market value of the currency. We intend to adapt this to a purely smart-contractual system.

- Price oracle, which establishes the market price of the currency. This is an automated application run by moderately technical users, and is the equivalent of mining in other systems.

- End-user mobile and web applications. This is where ordinary people interact with the currency in a simple and intuitive way. The focus is on ease of use, intuitiveness and wallet disaster recovery.

- Extensive documentation and promotional material. In order to facilitate maximum adoption and utility, we will provide web-based material that explains how everything in the system works. 

All the solutions are fairly well understood, and have had significant development time. The current challenge is redesigning the economic, behavioural economic and game theoretic models in a way that is appropriately and continuously testable.

[^6]: See [World Economic Situation and Prospects 2018](https://www.un.org/development/desa/dpad/publication/world-economic-situation-and-prospects-2018/) (United Nations, 2018)

{{% /section %}}
  
