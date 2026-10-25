# Indie mobile app monetization for a solo developer in Japan (context: "Vibe", AdMob banner + rewarded + one-time Premium IAP)

> Method note for the report writer (as of 2026-10-25): The egress proxy in this session blocked direct page fetches (revenuecat.com, apple.com, itmedia.co.jp all refused), so every figure below comes from **web-search result summaries of the cited pages**, not a full read of the page. Figures that appeared in only one secondary source are flagged. Before publishing any number as definitive, re-check it against the primary page linked.

## 1. What do published distributions say about indie/small app revenue?

### Takeaway
Revenue is extremely concentrated. In RevenueCat's 2026 dataset (115k+ subscription apps), the median app earns about **$72/month one year after launch**. Only **17.3% of new apps reach $1k MRR within two years** and **4.6% reach $10k MRR**, and the top 10% take roughly 95% of all revenue. Japan is a large spending market (3rd-largest consumer app spend in 2024), but I found no reliable, recent distribution of earnings for Japanese solo developers.

### Cited Findings
**RevenueCat State of Subscription Apps 2026 (published ~March 2026; dataset 115,000+ apps, $16B+ revenue, almost entirely mobile B2C)**
- Dataset size: "Benchmarks from 115,000 apps → $16B+ in revenue analyzed". Sources: [RevenueCat on X](https://x.com/RevenueCat/status/2029855914967367813); [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps); [SaaStr summary](https://saastr.com/the-top-10-learnings-from-revenuecats-state-of-subscription-apps-how-115000-mobile-apps-deliver-16b-in-revenue-whats-working-whats-quietly-killing-growth)
- Monthly revenue one year after launch, all categories: **median ≈ $72/mo; top quartile > $429/mo; top 10% > $2,574/mo**. Sources: [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps); secondary restatement in [termsandconditionstemplate.com, "App Revenue 2026: Median $72/Month, Top 10% Earn $2,500+"](https://termsandconditionstemplate.com/app-revenue-statistics-2026)
- Milestones within **two years** of launch, all categories: **17.3% reach $1K MRR, 4.6% reach $10K MRR**. This is down from about 19–20% (≥$1K) and 5% (≥$10K) in the 2025 edition. Category spread: Gaming 20.0% / 8.9%; Business 14.7% / 1.6%. Sources: [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps); [PPC Land, "The app middle class is dying"](https://ppc.land/the-app-middle-class-is-dying-and-revenuecats-data-shows-exactly-how-fast/); [Subscription Insider](https://www.subscriptioninsider.com/blog/revenuecat-data-shows-subscription-app-growth-concentrating-at-the-top-news); [RevenueCat SOSA 2025](https://www.revenuecat.com/state-of-subscription-apps-2025)
- Median time to milestone (all categories, presumably among apps that reach it): **58 days to $1K MRR, 109 days to $10K MRR**. Gaming 32 days to $1K; Business 113 days. — [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps); [arpubrothers summary](https://arpubrothers.com/blog/revenuecat-subscription-app-report-2026/)
- Median first-year realized LTV (RLTV) per paying customer: **$23 global**, $32 North America, $25 Western Europe, $14 India/SE Asia. A Japan figure was not surfaced. — [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps)
- Growth concentration: the median app grew MRR **5.3% YoY**, while top-decile apps grew **306%+**. — [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps); [Subscription Insider](https://www.subscriptioninsider.com/blog/revenuecat-data-shows-subscription-app-growth-concentrating-at-the-top-news)
- The top 10% of apps capture **94.5%** of subscription revenue, up from 92.7% in 2023. This comes from a secondary write-up, not verified on RevenueCat's page. — [Medium, "State of App Monetization 2026"](https://chuvak-pavel.medium.com/state-of-app-monetization-2026-key-trends-from-revenuecat-and-adapty-8bdc23a4bb6f) / [SaaStr](https://saastr.com/the-top-10-learnings-from-revenuecats-state-of-subscription-apps-how-115000-mobile-apps-deliver-16b-in-revenue-whats-working-whats-quietly-killing-growth)
- Supply glut: new subscription-app launches rose to **14,700/month by Jan 2026, from 2,000 in Jan 2022** (7×). Apps launched before 2020 still earn **69%** of subscription revenue; apps launched in 2025 or later earn **3%**. — [DEV Community, "why new apps get 3% of subscription revenue"](https://dev.to/axrisi/app-economy-2026-why-new-apps-get-3-of-subscription-revenue-3cj8); [Data Analysis Journal](https://dataanalysis.substack.com/p/2026-benchmarks-more-apps-less-quality)

**Adapty State of In-App Subscriptions 2026 (16,000 apps, ~$3B revenue)**
- **95% of subscription revenue goes to the top 10% of apps.** — [PPC Land on Adapty 2026](https://ppc.land/95-of-app-subscription-revenue-goes-to-top-10-adaptys-2026-benchmark-report/); [Adapty report page](https://adapty.io/state-of-in-app-subscriptions/)
- Sources disagree on dataset size. Adapty and the press cite $3B across 16,000 apps; an unofficial mirror cites $2.2B. — [Adapty](https://adapty.io/state-of-in-app-subscriptions/); [mirror](https://adapty-state-of-appsubs.vercel.app/)

**Japan market size (Sensor Tower)**
- Japan was the **world's third-largest consumer app spend market, at $16.5B in 2024** (Adjust × Sensor Tower Japan report, July 2025). — [PPC Land](https://ppc.land/japan-mobile-app-market-shows-diversified-growth-with-finance-leading-surge/); [Adjust Japan App Trends 2025](https://www.adjust.com/resources/ebooks/japan-app-trends-2025/)
- Japan mobile game IAP was **~$11B for Aug 2024–Jul 2025 (−2.2% YoY)**, 2nd in Asia after China iOS. Game downloads were **628M (−2.5%)**. — [WN Hub summarizing Sensor Tower](https://wnhub.io/news/analytics/item-48792); [Sensor Tower "Japan Game Market Insights 2025" PDF](https://investgame.net/news/pdf/japan-game-market-insights-2025-report/)

**Japanese / older developer surveys (weak, dated)**
- Developer Economics **2015** survey (global, not Japan-only): **17% of app developers reported no revenue, and 18% reported ≤$100/month**. Japanese restatement: [ITプロマガジン](https://itpropartners.com/blog/1657/)
- An アプリマーケティング研究所 survey of about 100 developers was headlined "13% of app developers earn ≥¥1M/month". It is old (likely ~2018), has a small sample with self-selection, and mixes companies and individuals. — [アプリマーケティング研究所](https://appmarketinglabo.net/developer-survey/)
- (Anecdote, labeled as such) The same outlet reports a solo game developer earning ¥150k/year and a crypto app falling from ¥300k/month to a few thousand yen/month. — [アプリマーケティング研究所](https://appmarketinglabo.net/appdreamer-deadend/)

### Inferences
- For a small utility app, the realistic base case is somewhere between "nothing" and "tens of dollars a month". The RevenueCat median ($72/mo after a year) applies to apps that have already integrated a subscription SDK, which is a more committed population than "all indie apps", so the median for all indie apps is plausibly lower.
- At an assumed ¥150/USD, RevenueCat's median ≈ **¥10,800/month**, the top quartile ≈ ¥64,000/month and the top 10% ≈ ¥386,000/month. These conversions are mine and not from any source.
- New apps compete against a 7× larger launch cohort than in 2022, and against incumbents that hold most revenue. Distribution and marketing are therefore the binding constraint, more than build speed.

### Gaps
- No primary-verified figure for the **share of apps earning $0**. One secondary result mentioned "57.7% of new apps never reach $1,000 in total (cumulative) revenue", but I could not tie it to a specific source, so it is excluded.
- No Japan/APAC breakdown of RevenueCat RLTV or milestone rates surfaced in searches.
- No recent (2023+), statistically sound survey of Japanese solo developers' income. The Knoow claim that "about 70% of individual developers earn under ¥100k/month" had no traceable source and is excluded.
- AppMagic and data.ai publish no indie-specific revenue distributions that I could find.
- RevenueCat measures only subscription apps on its SDK. No comparable distribution exists for ad-only or one-time-purchase apps such as Vibe.

## 2. Store fees: Apple Small Business Program, Google Play 15%, and Japan's スマホソフトウェア競争促進法 (MSCA)

### Takeaway
For a solo developer earning under $1M a year, the **effective fee in Japan is still about 15%** on both stores when using Apple IAP or Google Play Billing. Apple's Japan structure since 18 Dec 2025 is 10% commission plus 5% payment processing. Google's new Japan structure, scheduled for 30 Sep 2026 per July 2026 reports, is 10% service fee plus 5% billing fee. Using alternative payments or link-outs saves only the ~5% processing portion, minus your own payment processor's costs, and Apple says it cannot refund those transactions.

### Cited Findings
**Apple – global Small Business Program (baseline, since 2021)**
- **15% commission** for developers with **≤$1M in post-commission proceeds in the prior calendar year**. All Associated Developer Accounts are aggregated. If a developer exceeds $1M mid-year, the standard rate applies for the rest of that year and the next. Subscriptions are also at 15% in year one. — [PhoneArena](https://www.phonearena.com/news/apple-drops-app-store-fees_id128493); [iPhone in Canada](https://www.iphoneincanada.ca/news/developers-signup-for-lower-app-store-cut/); [TechRadar](https://www.techradar.com/news/apple-reveals-its-plan-to-make-the-app-store-better-for-smbs) (these articles report the 2020 launch terms. I could not verify the current Apple developer page.)

**Apple – Japan under MSCA (announced 17 Dec 2025, with iOS 26.2; law fully effective 18 Dec 2025)**
- App Store commission in Japan: **10%** for Small Business Program members, Video Partner / Mini Apps Partner Program participants, and subscriptions after their first year. **21%** for other digital goods. Using Apple In-App Purchase adds a separate **5% payment processing fee**. Totals are therefore **15% for SBP members** and **26% standard**. — [Apple Newsroom (Dec 2025)](https://www.apple.com/newsroom/2025/12/apple-announces-changes-to-ios-in-japan/); [9to5Mac](https://9to5mac.com/2025/12/17/apple-announces-sweeping-app-store-and-iphone-changes-in-japan/); [MacRumors](https://www.macrumors.com/2025/12/17/japan-app-store-feature-updates/); [Forasoft (26% total)](https://www.forasoft.com/blog/article/how-to-avoid-apple-pay-commission-204); [Business Insider Japan: "max 30% → max 26%"](https://www.businessinsider.jp/article/2512-japan-smartphone-act-apple-google/)
- In-app alternative payment processing: **21%**. Link-out to the web: **15%**. Small-business program participants can drop to **10–15%**. — [ITmedia NEWS 2025-12-18](https://www.itmedia.co.jp/news/article/2512/18/1251218081/); [MLex](https://www.mlex.com/mlex/articles/2423480/apple-revises-ios-rules-in-japan-to-comply-with-new-competition-law)
- Link-out commission is **10%** for program participants and post-first-year subscriptions, otherwise **15%**. It applies to sales made **within 7 days** of the link tap. — [Stora (May 2026)](https://stora.sh/blog/2026-05-21-distribute-ios-app-japan-alternative-marketplaces-notarization-guide)
- Alternative app marketplaces: a **5% Core Technology Commission** on digital-goods sales, including paid apps. — [Xsolla](https://xsolla.com/blog/mobile-software-competition-act-in-japan-and-what-mobile-game-developers-should-know); [Apple Newsroom](https://www.apple.com/newsroom/2025/12/apple-announces-changes-to-ios-in-japan/)
- Apple warns it "will not be able to issue refunds" for purchases made through alternative payments or link-outs. — [PPC Land](https://ppc.land/apple-bends-to-japans-competition-law-with-app-store-and-payment-changes/)
- Criticism: alternative processing plus third-party payment-processor fees can exceed the old 30%. Epic said Fortnite would not return to Japanese iOS in 2025. — [NeonPay](https://www.neonpay.com/blog/japans-mobile-software-competition-act-what-changed-for-mobile-game-developers); [AUTOMATON WEST](https://automaton-media.com/en/news/new-japanese-law-meant-to-ensure-fair-competition-for-mobile-game-developers-neutralized-by-apples-new-japan-specific-fees/); [Daring Fireball](https://daringfireball.net/2025/12/apple_japan_msca_compliance)

**Google Play – Japan, phase 1 (at MSCA effective date, 18 Dec 2025)**
- Google Play Billing stayed at **30% standard / 15% for smaller developers**. Third-party in-app billing (user choice / alternative billing, now open to games too) was **26%**. Newly allowed **external-link purchases: 20% standard, 10% if annual revenue ≤ $1M**. — [ITmedia NEWS 2025-12-18](https://www.itmedia.co.jp/news/article/2512/18/1251218081/); [ITmedia (Google Play changes)](https://www.itmedia.co.jp/news/articles/2512/18/news050.html); [Google Japan blog](https://blog.google/intl/ja-jp/company-news/outreach-initiatives/complying-with-mobile-software-competition-act/); [日経クロステック "最大26%"](https://xtech.nikkei.com/atcl/nxt/column/18/00001/11363/)
- Industry body MCF criticized the 10–20% external-link fee as lacking a clear basis. — [すまほん!!](https://smhn.info/202602-sp-law)

**Google Play – global fee overhaul (announced 24 Jun 2026) and Japan acceleration**
- Google announced lower fees and billing choice worldwide. These took effect **30 Jun 2026 in the US, UK and EEA**, with Japan, Korea and Australia originally scheduled for **31 Dec 2026**. — [MacRumors 2026-06-24](https://www.macrumors.com/2026/06/24/google-play-store-fee-change/); [ITmedia 2026-06-25](https://www.itmedia.co.jp/news/articles/2606/25/news100.html); [Play Console Help: "Understanding Google Play's lower service fees"](https://support.google.com/googleplay/android-developer/answer/16954621?hl=en)
- On **14 Jul 2026** Google said Japan would move forward to **"by 30 Sep 2026"**, citing talks with the JFTC (公正取引委員会) and feedback from domestic developers such as Bandai Namco and MIXI. The new structure splits fees into a **service fee of 10%** (on annual earnings up to $1M and on subscriptions) or **20%** above $1M, plus a **5% billing fee** when using Google Play Billing. Alternative billing and external web purchase are also allowed. The "registered app store" program stays on 31 Dec 2026. — [ITmedia 2026-07-14](https://www.itmedia.co.jp/news/articles/2607/14/news112.html); [Impress Watch](https://www.watch.impress.co.jp/docs/news/2125039.html); [ケータイ Watch](https://k-tai.watch.impress.co.jp/docs/news/2125000.html); [corriente.jp (billing fee 5% in Japan)](https://corriente.jp/google-play-billing-change-jp-260930/); [Game Business](https://www.gamebusiness.jp/article/2026/07/16/27471.html)
- Some program apps (Games Level Up / Apps Experience) can get reduced rates in the 10–20% range. — [BigGo Finance](https://finance.biggo.com/news/4e9b7baa-4acd-40d6-b45d-c86385185836); [MacRumors](https://www.macrumors.com/2026/06/24/google-play-store-fee-change/)
- When using alternative billing or external links, the developer pays only Google's service fee and not Google's billing fee, but still pays its own payment processor. — [RevenueCat JP blog on スマホ新法](https://www.revenuecat.com/jp/blog/engineering/new-smartphone-law); [Repro Journal (6 months after enforcement)](https://repro.io/contents/onayami-external-purchases/)

### Inferences
- For Vibe's one-time Premium unlock, both stores keep roughly **85% of the price** for a sub-$1M developer: Apple 10% + 5%, and Google 10% + 5% after the change (previously 15% flat). This assumes Vibe is enrolled in Apple's SBP. Enrollment is opt-in and must be done in App Store Connect.
- Switching to web or external payments would save at most the ~5% processing portion. For a low-priced one-time unlock, payment-processor fixed fees, the loss of store-managed refunds and the extra legal and support burden (see §5) likely outweigh that saving. The case is stronger only for higher-priced or subscription products.
- The Google Japan timing has changed twice (Dec 2025 phase 1 → planned 31 Dec 2026 → moved to "by 30 Sep 2026"). The writer should state it as "reported to apply from 30 Sep 2026".

### Gaps
- I found no article published after 30 Sep 2026 confirming that Google's new Japan fees actually went live on schedule.
- Apple's current Japan developer-terms page (exact SBP wording, whether the 10% SBP rate applies identically to paid-app downloads, and alternative-payment rates for SBP members) could not be fetched. The ITmedia "10–15%" range for small developers on alternative payments is not broken down.
- Consumption tax (消費税) treatment of App Store and Google Play proceeds for Japanese individual developers was not researched.

## 3. AdMob revenue benchmarks (Japan) and DAU needed for ¥10,000/month

### Takeaway
Japan is a Tier-1 ad market, but **banner eCPMs are well under $1** (Japan banner average **$0.86** in Tenjin Q2 2024 game data). Rewarded video pays roughly **10–20× more per impression** (Japan average about **$6.50–$10.80** across sources). Revenue is DAU × ARPDAU. Under explicit assumptions, a banner-heavy utility app like Vibe needs about **170–2,200 DAU (mid-case ~500 DAU) to earn ¥10,000/month**. The developer's own AdMob country report is better evidence than any public benchmark.

### Cited Findings
- **Banner:** Tenjin Q2 2024 (mobile games, multiple networks) average banner eCPM was **Japan $0.86**, US $1.18, Canada $2. **Interstitial:** Japan **$11.35**. **Rewarded:** US $30.25 and Canada $23.13 (no Japan value in the excerpt). — [GameDevReports on Tenjin Q2 2024](https://gamedevreports.substack.com/p/tenjin-ad-monetization-in-mobile-00b?open=false)
- An Appodeal-based summary lists **Android interstitial: Japan $11.35** (3rd after US $16.15 and Canada $12.65). It notes that Appodeal averages across 100,000+ apps, which pulls averages down. The identical $11.35 suggests one of these two summaries may misattribute its source. — [Playio blog](https://blog.playio.co/mobile-game-ecpm-benchmarks-2026)
- **Rewarded, Japan:** Mistplay lists an average of **$10.80** (iOS and Android blended, undated). A Udonis/Adnimation citation gives **$6.50**. These conflict by about 40%. — [Mistplay](https://business.mistplay.com/resources/mobile-ads-ecpm); [Adnimation](https://www.adnimation.com/mobile-optimization-in-2025-turning-every-tap-into-revenue/) (Adnimation contradicts itself on other numbers, so it has low reliability.)
- RevenueLab 2026 puts Japan in Tier 1 at **0.75–1.00× the US eCPM index**. US ranges: rewarded **$14–22**, interstitial **$9–14**, adaptive banner **$0.40–0.80**. — [RevenueLab](https://www.revenuelab.fyi/blog/admob-ecpm-benchmarks-2026)
- Format ranking across networks (H1 2025) is rewarded > interstitial > splash > native > banner. Region ranking is Europe/N. America > HK/Macau/Taiwan > **Japan & Korea** > Russia > others. — [TopOn H1 2025 report (PDF)](https://mores.toponad.com/reports/TopOn%20Global%20Mobile%20Games%20Monetization%20Report%20_%202025%20H1.pdf)
- Volatility (Bidlogic network data):
  - Q4 2025 vs Q3: Japan iOS interstitial **−34.72%**, banner **−1.75%**, rewarded **−3.56%**. — [Bidlogic Q4 2025](https://bidlogic.io/2026/01/30/what-happened-to-mobile-app-ecpms-in-q4-2025/)
  - Q3 2025: Japanese iOS banners up to **+105.29%**. — [Bidlogic Q3 2025](https://bidlogic.io/2025/10/31/strong-q3-2025-performance-mobile-app-ecpm-on-the-rise/)
  - H1 2025: Japan banners fell more than 20%. — [Bidlogic H1 2025](https://bidlogic.io/2025/07/25/ecpm-growth-in-mobile-apps-q1-q2-2025-analysis-and-insights/)
- iOS rewarded eCPM in Japan is estimated at **1.5–2×+ Android**, but this rests on install-share reasoning, not measured eCPMs. — [MonetizationGuy](https://monetizationguy.com/articles/ios-vs-android-rewarded-video-cpm-gap)
- Revenue scaling identity: **Revenue = DAU × ARPDAU**. Genre example: hypercasual (ad-driven) ARPDAU is **$0.03–0.08**. — [Playio ARPDAU benchmarks](https://blog.playio.co/arpdau-benchmarks-mobile-games)
- AdMob tools: publishers can set per-ad-unit minimum eCPM and per-country floors. — [AdMob Help](https://support.google.com/admob/answer/7311747?hl=en)
- AdMob pays monthly, around the 21st, once the balance exceeds the payment threshold. Balances below the threshold roll over. — [AdMob Help (ja)](https://support.google.com/admob/answer/6168758?hl=ja); [AdMob Help](https://support.google.com/admob/answer/2772140?hl=en-AU)

### Inferences (worked example; the assumptions are mine, not sourced)
Formula: monthly revenue = DAU × 30 × Σ(impressions per DAU per day × eCPM ÷ 1,000). The target is ¥10,000/month at an **assumed ¥150/USD**, which is ≈ $66.7/month ≈ **$2.22/day**.

| Scenario | Banner imps/DAU/day × eCPM | Rewarded imps/DAU/day × eCPM | ARPDAU | DAU for ¥10k/mo | ¥/month per 1,000 DAU |
|---|---|---|---|---|---|
| Low | 3 × $0.30 = $0.0009 | 0.02 × $6.50 = $0.00013 | $0.00103 | **~2,160** | ~¥4,600 |
| Mid | 6 × $0.60 = $0.0036 | 0.10 × $10 = $0.0010 | $0.0046 | **~480** | ~¥20,700 |
| High | 10 × $0.86 = $0.0086 | 0.30 × $15 = $0.0045 | $0.0131 | **~170** | ~¥59,000 |

- The eCPM inputs fall within the cited ranges above. The impressions-per-DAU inputs are pure assumptions: a short utility session yields a few banner refreshes, and only a minority of users opt into a rewarded ad. Fill rate is assumed to be 100%. Real fill below 100% raises the DAU needed.
- DAU is not downloads. A utility app's DAU is usually a small fraction of cumulative installs (no source found for utility DAU/MAU in Japan), so the install base required is many times the DAU above.
- Rewarded impressions are the largest lever per user in the high case, but only if users have a real reason to watch, such as unlocking a pattern temporarily.
- Use Vibe's own AdMob country × format report (eCPM, impressions per user, fill) to replace these assumptions. Public benchmarks are mostly game-app data and vary ±40% between sources.

### Gaps
- No AdMob-official or independent Japan-specific eCPM benchmark for **non-game utility apps** was found. All cited eCPMs are game-heavy or multi-network aggregates.
- The exact AdMob JPY payment threshold could not be confirmed (I recall ¥8,000, but searches did not verify it).
- No benchmark was found for impressions per DAU or DAU/MAU for Japanese utility apps.

## 4. Evidence on subscription vs one-time purchase vs ads (conversion and trial benchmarks)

### Takeaway
The strongest evidence is for subscription paywalls. Hard paywalls convert about **5× better download-to-paid than freemium (10.7% vs 2.1% by day 35, 2026)** with similar year-one retention. Most trials start on day 0, and cheaper or longer trials convert better. One-time ("lifetime") purchases are a common add-on (23% of RevenueCat apps) but have little published conversion data. For a freemium utility with a one-time unlock, about **2% download-to-paid** is the closest proxy benchmark.

### Cited Findings
- **Hard paywall vs freemium, download-to-paid:**
  - 2025 report: **12.11% vs 2.18%** (median).
  - 2026 report: **10.7% vs 2.1% by day 35**.
  - Year-one retention: **27% (hard) vs 28% (freemium)** (2025).
  - Sources: [RevenueCat SOSA 2025](https://www.revenuecat.com/state-of-subscription-apps-2025); [RocketShip HQ summary](https://www.rocketshiphq.com/revenuecat-state-of-subscription-apps-2025-summary/); [Airbridge](https://www.airbridge.io/en/blog/hard-paywall-vs-freemium-2026); [buildmvpfast](https://www.buildmvpfast.com/blog/hard-paywall-vs-free-trial-revenuecat-indie-app-2026)
- Revenue per install at day 60: **$3.09 for hard paywall vs $0.38 for freemium**. This comes from a secondary summary of the 2025 report. — [arpubrothers 2025](https://arpubrothers.com/blog/2025-saas-mobile-apps-trends/)
- **Trial-to-paid (2025 report):** lower-priced apps **47.8% vs 28.4%** for high-priced; longer trials **45.7% vs 26.8%** for shorter; the best apps exceed **60%**. **80–90% of trials start on Day 0.** — [RocketShip HQ](https://www.rocketshiphq.com/revenuecat-state-of-subscription-apps-2025-summary/); [RevenueCat SOSA 2025](https://www.revenuecat.com/state-of-subscription-apps-2025)
- Adapty 2026: **89–94% of trial starts happen on Day 0**. Trial subscribers retain **59.2% at first renewal vs 37%** for direct buyers. — [Adapty 2026 key findings](https://adapty.io/blog/mobile-app-monetization-2026/); [Adapty report](https://adapty.io/state-of-in-app-subscriptions/)
- **Monetization mix (RevenueCat 2026):** **63.5% subscriptions-only; 23.2% add lifetime purchases; 10.7% add consumables; 2.5% use all three.** — [RevenueCat blog: SOSA in 10 minutes](https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026); [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps)
- **Utilities category, renewal rates (RevenueCat 2026):**
  - Annual: median **35%** (lower quartile 21%, upper quartile 52%).
  - Monthly median: **57%**.
  - Weekly median: **49%**.
  - Source: [RevenueCat, renewal rates by category](https://www.revenuecat.com/blog/growth/average-subscription-renewal-rates-by-app-category)
- **Utilities category, LTV (Adapty 2026):** trial subscribers' 12-month LTV is **$68.90**, the highest trial LTV of any category. The average 12-month LTV across all plans is **$46.30**. — [Adapty Utilities benchmarks](https://adapty.io/blog/utilities-app-subscription-benchmarks/)
- **Japan pricing (Adapty 2026):** Japan has the **highest median annual subscription price ($54.59)** among countries. This is from an unofficial mirror of the report, so verify it. Prices vary up to 4× between countries. — [Adapty report mirror](https://adapty-state-of-appsubs.vercel.app/); [Adapty](https://adapty.io/state-of-in-app-subscriptions/)
- **Reactivation (RevenueCat 2026 part 2, May 2026):** annual subscribers who cancel reactivate at about **5%**; monthly subscribers reactivate at about **4× that rate**. — [9to5Mac 2026-05-27](https://9to5mac.com/2026/05/27/new-report-shows-annual-app-subscribers-rarely-return-after-they-cancel/)

### Inferences
- Worked IAP example (assumed price, not Vibe's actual price): a **¥480 Premium** at about 15% total store fee nets about ¥408, so **~25 sales/month ≈ ¥10,000** (before consumption-tax effects). At the ~2.1% freemium download-to-paid proxy, that requires about **1,200 new downloads/month**. The proxy is a subscription benchmark and is only approximately transferable to a one-time unlock.
- Evidence favours testing (a) an upfront paywall or trial on first launch, since most conversions happen on day 0, and (b) a subscription or annual option alongside the lifetime unlock ("hybrid"). For a single-purpose vibration utility, users' willingness to pay for a subscription is unproven. The utility category's annual renewal median of 35% suggests heavy churn.
- Ads and IAP interact: removing ads is the usual Premium value proposition. Higher ad load raises ARPDAU but may hurt retention and ratings. I found no quantitative study of this trade-off for utility apps.

### Gaps
- No published benchmark for **one-time/lifetime purchase conversion rates** in utility apps, and none for Japan specifically.
- No credible study comparing **ads-only vs IAP vs hybrid** revenue per user for utilities.
- RevenueCat's Utilities-specific download-to-paid and trial-to-paid figures (2026) were not surfaced. RevenueCat's in-dashboard Benchmarks feature (12-month, same store and category) is the route to them. — [RevenueCat Benchmarks docs](https://www.revenuecat.com/docs/dashboard-and-metrics/benchmarks)

## 5. Costs and Japanese legal items (Developer Program fees, 特定商取引法, privacy policy, 資金決済法)

### Takeaway
Fixed platform costs are small: Apple is **$99/year (≈ ¥12,980 via web, ¥12,800 via the Apple Developer app, as reported in 2026)**, and Google Play is a **one-time $25**. New Google personal accounts must pass a 12-tester, 14-day closed test. 特商法 display obligations generally apply to anyone selling continuously by mail order (通信販売), individuals included, but I found no official guidance specific to in-app purchases. 資金決済法 concerns only in-app currencies (前払式支払手段), not a one-time Premium unlock.

### Cited Findings
- **Apple Developer Program:** **US$99/year**. The Japanese registration guide (PDF) states **"$99（12,980円税込）"**. A Japanese explainer dated Oct 2026 says enrolment via the Apple Developer app on the Japanese App Store shows **¥12,800**, that Apple publishes no official web JPY price, and that 2026 user reports show ¥12,980. — [issoh.co.jp (2026-10)](https://www.issoh.co.jp/tech/details/7317/); [Uplink registration guide PDF](https://www.uplink-app.com/agency/assets/data/apple_dev_authority.pdf); [Apple enroll page (jp)](https://developer.apple.com/programs/enroll/jp)
- **Google Play Console:** **one-time US$25** registration, which can include photo-ID verification. Personal accounts created after **13 Nov 2023** must run a **closed test with 12 testers for 14 continuous days** before production release. — [Draftbit FAQ](https://draftbit.com/faq/which-developer-accounts-and-fees-do-i-need); [SplitMetrics (Aug 2025)](https://splitmetrics.com/blog/google-play-apple-app-store-fees/)
- **Seller name disclosure:** on the App Store, an individual developer account's seller name is the developer's **legal personal name**. — [App Store Connect Help (jp)](https://developer.apple.com/jp/help/app-store-connect/create-an-app-record/set-your-developer-name/)
- **特定商取引法 (通信販売):**
  - Article 11 requires mail-order advertising to display sale terms and seller information. — [消費者委員会 資料 (2022)](https://www.cao.go.jp/consumer/kabusoshiki/digital/doc/007_220620_siryou1.pdf)
  - **Individuals who sell continuously by mail order are also covered.** Items include name, address, phone, price, payment method, delivery timing and return conditions. — [マネーフォワード クラウド解説](https://biz.moneyforward.com/contract/basic/10999/)
  - An indie-dev legal checklist treats the obligation as arising once an app has paid features. This is a practitioner blog, not an official source. — [devtools.shingoirie.com](https://devtools.shingoirie.com/blog/indie-dev-legal-checklist-before-launch/)
- **資金決済法 (in-app currency):**
  - A 前払式支払手段 must meet all four statutory elements.
  - For the 自家型 (issuer-only) type, if the **unused balance on a base date (31 Mar / 30 Sep) exceeds ¥10M**, the issuer must **file a notification within 2 months**. It must also **deposit (供託) half of the unused balance**. — [四国財務局 PDF](https://lfb.mof.go.jp/shikoku/content/000227846.pdf); [モノリス法律事務所](https://monolith.law/corporate/game-regulation)
  - In 2016, Kanto Local Finance Bureau judged a game's "treasure-chest key" item to be a 前払式支払手段, and no bright-line test exists. — [モノリス法律事務所](https://monolith.law/corporate/game-regulation)
- **EU (if distributing there):** Apple requires a DSA "trader" status declaration. — [SD Times](https://sdtimes.com/mobile/apple-adds-new-requirements-for-apps-distributed-through-the-app-store-in-the-eu/)

### Inferences
- Annual fixed cost for Vibe on both stores is about **¥13,000/year** (Apple) plus ¥0 recurring (Google). At the RevenueCat median (~¥10,800/month, if achieved), platform fees are trivial. For an app earning ¥0–¥1,000/month, the Apple fee alone can wipe out iOS profit.
- A one-time Premium unlock (non-consumable) is not stored value, so it is likely outside 資金決済法. That would change if Vibe added coins, points or consumable credits. This is my reading, not a legal opinion.
- Because the seller is an individual whose legal name is displayed, how to satisfy 特商法 address and phone display (e.g., "disclose on request" wording) is a practical privacy issue to check with official 消費者庁 guidance.

### Gaps
- No official 消費者庁 Q&A was found that states whether an individual selling in-app purchases through Apple or Google (where the platform is merchant of record or handles payment) must post their own 特商法表記, or whether the "開示請求があれば遅滞なく提供" omission option applies.
- **Privacy policy requirement:** I did not retrieve a citation in this session. The App Store Review Guidelines (§5.1.1) and Google Play User Data policy should be cited directly by the writer. AdMob use also implies ATT on iOS and consent (UMP) requirements, which were not researched here.
- Tax items (開業届, 確定申告 for 雑所得 vs 事業所得, consumption-tax invoice rules) are out of scope and were not researched.

## 6. Does ASO / localization measurably affect downloads?

### Takeaway
No rigorous, independent study turned up. The available figures (+26% to +128% downloads per locale, +38%, "up to +80%" conversion) come from ASO vendors and agencies with commercial incentives and no disclosed methodology. The one mechanical, verifiable effect is keyword reach: Apple's cross-localization can expand indexable keyword space on the US storefront.

### Cited Findings
- Vendor claims include localization raising downloads by **26%–128% per locale**, **~38%** versus non-localized apps, and conversion lifts of **up to 80%** in case studies. — [AppFollow 2026 playbook](https://appfollow.io/blog/app-store-optimization-localization); [OneSky](https://www.oneskyapp.com/blog/?p=5051); [The App Launchpad (May 2026)](https://theapplaunchpad.com/blog/app-store-localization/)
- Enabling all secondary locales via Apple's cross-localization raises US-storefront indexable keyword space **from 160 to 1,440 characters**. A new locale costs about **$1,000–$5,000** end-to-end (vendor estimate). — [AppFollow](https://appfollow.io/blog/app-store-optimization-localization)
- Older single-app case study (2016): localized screenshots and pages for FiftyThree's "Paper" improved conversion. — [Smashing Magazine (2016)](https://www.smashingmagazine.com/2016/03/design-app-pages-for-better-conversion-case-study-of-paper-by-fiftythree/)

### Inferences
- Treat localization claims as hypotheses. The defensible approach is to run the stores' built-in experiments (App Store Product Page Optimization, Google Play store listing experiments) on Vibe's own traffic.
- With AI translation, a solo developer can localize cheaply, so the cost side of the vendor estimate is likely overstated for this use case. The benefit side remains unproven.

### Gaps
- No peer-reviewed or platform-published (Apple/Google) data on localization or ASO impact was found.
- No Japan-specific ASO data was found, for example on Japanese-language keyword competition in utility categories.

## 7. Does AI-assisted coding (e.g., Claude Code) speed up indie development?

### Takeaway
The evidence is mixed and task-dependent. METR's 2025 RCT found experienced developers were **19% slower** with early-2025 AI tools on their own mature repos, while believing they were 20% faster. Its Feb 2026 follow-up points toward a speedup but is statistically inconclusive. Earlier lab experiments on greenfield tasks showed large speedups (**55.8% faster**, Copilot 2023). None of these studies measures shipping or earning from a solo mobile app.

### Cited Findings
- **METR RCT (Feb–Jun 2025), published 10 Jul 2025:**
  - Design: **16 experienced OSS developers** (about 5 years and ~1,500 commits on their repos) did **246 real tasks**, each randomized to allow or forbid AI. Tools were mostly Cursor Pro with Claude 3.5/3.7 Sonnet.
  - Result: developers took **19% longer** with AI.
  - Perception gap: they forecast a 24% speedup, and afterwards believed they had been sped up by 20%.
  - Caveats: small sample; 56% had not used Cursor before.
  - Sources: [METR blog](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/); [Simon Willison](https://feeds.simonwillison.net/2025/Jul/12/ai-open-source-productivity/); [The Decoder](https://the-decoder.com/ai-coding-can-make-developers-slower-even-if-they-feel-faster/); [Zvi Mowshowitz](https://thezvi.substack.com/p/on-metrs-ai-coding-rct)
- **METR follow-up (update dated 24 Feb 2026):**
  - Design: **57 developers** (10 returning, 47 new), **143 repos**, **800+ tasks**, starting Aug 2025.
  - Point estimates suggested reduced task time: about 18% for returning developers and about 4% for new developers. **Confidence intervals include zero.**
  - METR called the data "only very weak evidence" for the size of any increase, because of selection effects. Some participants withheld tasks where they expected AI to help most.
  - METR is redesigning around developer-level randomization.
  - Secondary sources disagree on the sign of the returning-developer estimate, so verify on METR's site. — [Ingenire](https://ingenire.com/blog/metr-2026-developer-productivity-study); [devs-group](https://devs-group.ch/en/blog/ai-productivity-studies-2026/); [Andrew Wegner](https://andrewwegner.com/metr-ai-productivity-study-update.html); [Govard](https://govard.tech/blog/ai-developer-productivity-studies/)
- **Peng et al. 2023 (Microsoft Research / GitHub / MIT Sloan), controlled experiment:**
  - Task: implement an HTTP server in JavaScript.
  - Result: the Copilot group finished **55.8% faster (95% CI 21–89%)**.
  - Participants were recruited freelancers (95 via Upwork, per a secondary source). — [arXiv 2302.06590](https://arxiv.org/abs/2302.06590v1); [Microsoft Research](https://www.microsoft.com/en-us/research/publication/the-impact-of-ai-on-developer-productivity-evidence-from-github-copilot); [DX summary](https://getdx.com/research/impact-of-ai-on-developer-productivity-evidence-from-copilot/)
- Commentators note that AI coding tools can introduce errors and security vulnerabilities. — [eWeek](https://eweek.com/news/news-ai-tools-slow-developer-productivity-study)

### Inferences
- Vibe is a small, greenfield-ish app built by its sole author with Claude Code. That setting sits closer to the Peng-style greenfield task, where speedups were found, than to METR's large, mature repos, where slowdowns were found. This is an analogy, not evidence.
- The METR perception gap matters for a solo developer: self-assessed speed is unreliable, so time-tracking actual tasks is the only way to know.
- Even if AI halves build time, §1 shows that revenue is constrained by distribution and the competitive glut (14.7k new subscription apps/month). Faster building alone does not move an app up the revenue distribution.

### Gaps
- No credible study measures AI-assisted coding's effect on **indie app outcomes** (time-to-ship, revenue, number of apps shipped).
- No RCT specific to agentic tools like Claude Code (versus autocomplete or Cursor chat) was found. The Microsoft/Accenture field experiments (a "26% more PRs" figure is often cited) could not be verified in this session.
