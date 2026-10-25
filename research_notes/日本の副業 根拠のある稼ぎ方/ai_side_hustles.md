# AI-based side hustles (AIで副業) for an individual in Japan: what earns, what platforms restrict, which scams to avoid

> **How these notes were made (read first):** Research date 2026-10-25. In this session WebFetch failed on every URL (DNS errors), and direct curl was refused by the egress proxy (403), including kokusen.go.jp, support.google.com and kdp.amazon.com. Every finding below therefore comes from **search-engine result summaries/snippets** of the cited pages. I could not read the full pages. The session's web-search budget ran out before I could check several items (listed under Gaps). Figures should be spot-checked against the primary URL before publication. Each item is labeled where possible as **[Primary/official]**, **[Peer-reviewed]**, **[Working paper]**, **[Company/platform research]**, **[Marketing claim]** or **[Secondary/press]**.

---

## 1. What does the income evidence actually show? (surveys and academic studies on generative AI and freelance/side income)

### Takeaway
The best causal evidence (peer-reviewed, Upwork data) shows that generative AI **reduced** demand and earnings for freelancers whose tasks AI can replace: writing, basic coding, image creation. The money is moving to complex, domain-expert work that uses AI, not to low-skill "AI does it for you" output. In Japan, surveys show high AI adoption among freelancers but few people earning more because of it. For AI-written books, the evidence shows a flood of low-quality titles with little usage per title.

### Cited Findings

**Academic / causal studies (global, mostly Upwork data)**
- **Hui, Reshef & Zhou**, "The Short-Term Effects of Generative Artificial Intelligence on Employment: Evidence from an Online Labor Market". Working paper 2023; listed as published in *Organization Science* (2024) on the WashU profile — [WashU profile](https://profiles.wustl.edu/en/publications/the-short-term-effects-of-generative-artificial-intelligence-on-e/); [CESifo WP 10601](https://www.cesifo.org/DocDL/cesifo1_wp10601.pdf) **[Peer-reviewed / working paper]**
  - After ChatGPT's release, writing-related freelancers on Upwork saw **monthly jobs fall 2%** and **monthly earnings fall 5.2%**. The sample was **92,547 freelance writers** — [WashU Olin news, Aug 2023](https://olin.washu.edu/about/news-and-media/news/2023/08/study-ai-tools-cause-a-decline-in-freelance-work-and-incomeat-least-in-the-short-run.php); [TheWrap](https://www.thewrap.com/study-finds-chatgpt-drives-down-freelance-work-pay/)
  - The authors also estimated that freelancers were **1.2% less likely to get any work in a given month** and took **4.7% fewer jobs**, and they called this "economically meaningful". Similar declines followed the image generators (DALL-E 2, Midjourney) for image-related freelancers — [WashU Olin news](https://olin.washu.edu/about/news-and-media/news/2023/08/study-ai-tools-cause-a-decline-in-freelance-work-and-incomeat-least-in-the-short-run.php); [COBS Insights](https://cobsinsights.org/2023/10/24/ai-tools-cause-a-decline-in-freelancer-work-and-income-at-least-in-the-short-run/)
  - **Top freelancers were not protected.** The 2023 news release said higher-quality freelancers (by past jobs, hourly rate and "top-rated" badges) saw *larger* drops. Summaries of the published version describe only "suggestive evidence" that top freelancers were hit disproportionately — [WashU Olin news](https://olin.washu.edu/about/news-and-media/news/2023/08/study-ai-tools-cause-a-decline-in-freelance-work-and-incomeat-least-in-the-short-run.php); softened wording per [SUFE academic newsletter summary](https://academicnewsletter.sufe.edu.cn/info/373903). (The strength of this claim differs between versions.)
  - Short-run only. The authors say the technology "reduces overall demand for knowledge workers of all types" — [WashU Olin news](https://olin.washu.edu/about/news-and-media/news/2023/08/study-ai-tools-cause-a-decline-in-freelance-work-and-incomeat-least-in-the-short-run.php). Secondary review: [Brookings, "Is generative AI a job killer? Evidence from the freelance market"](https://www.brookings.edu/articles/is-generative-ai-a-job-killer-evidence-from-the-freelance-market/)
- **Demirci, Hannane & Zhu**, "Who Is AI Replacing? The Impact of Generative AI on Online Freelancing Platforms", *Management Science* 71(10), 2025 (online 2025-01-24) — [INFORMS](https://pubsonline.informs.org/doi/suppl/10.1287/mnsc.2024.05420); [DIW listing](https://www.diw.de/de/diw_01.c.906828.de/publikationen/externe_referierte_aufsaetze/2025_0010/who_is_ai_replacing__the_impact_of_generative_ai_on_online_freelancing_platforms.html); [Imperial Spiral](https://spiral.imperial.ac.uk/entities/publication/88113a91-b994-4717-8526-dadac657f1cb) **[Peer-reviewed]**
  - Within 8 months of ChatGPT's launch, job posts for **automation-prone writing and coding jobs fell 21%** relative to manual-intensive jobs.
  - Image-generating AI led to a **17% decrease in job posts related to image creation**.
  - The remaining automation-prone jobs were **more complex and paid more**, but competition among freelancers increased.
  - An earlier seminar version reported a **14%** decrease for a broader category set. Use the 21%/17% figures from the published abstract — [UCLouvain seminar](https://uclouvain.be/en/core/events/led-seminar-7); press coverage: [Fast Company](https://www.fastcompany.com/91146246/is-ai-killing-freelance-jobs)
- **Reimers & Waldfogel**, "AI and the Quantity and Quality of Creative Products", NBER Working Paper **w34777** (2026, revised May 2026). This is the key evidence for **AI-written Kindle books** — [NBER PDF](https://www.nber.org/system/files/working_papers/w34777/w34777.pdf); [NBER Digest May 2026](https://www.nber.org/digest/202605/how-large-language-models-are-reshaping-book-market) **[Working paper, not peer-reviewed]**
  - The spread of LLMs from 2022 to 2025 **tripled new book releases** on Amazon.
  - Detected AI use (AI detection on more than 50,000 randomly selected titles) was **~0% through 2022, 30% in 2023, 45% in 2024, and more than 60% in 2025**.
  - Titles from the AI-influx period have **lower average quality**, and **AI books get substantially less usage per title**. Authors who entered after the LLM influx produce "predominantly low-quality work".
  - The **top 1,000** monthly releases per category improved in quality, but the **top 100** did not. Waldfogel said there "don't seem to be breakout hits" from AI output — [NPR transcript](https://www.npr.org/transcripts/nx-s1-5869549); commentary: [Conversable Economist](https://conversableeconomist.com/2026/05/19/how-is-ai-affecting-the-quantity-and-quality-of-new-books/)

**Platform-produced research (Upwork; the platform has a commercial interest in AI-freelancing narratives)**
- **Upwork Future Workforce Index 2025** (Apr 23, 2025; survey of 3,000 US skilled knowledge workers): 28% freelance; freelancers earned a collective **$1.5T in 2024**; median full-time freelancer income **$85,000**; skilled "moonlighters" earned about **$40,000** on top of their wages — [Upwork FWI 2025](https://www.upwork.com/research/future-workforce-index-2025); [Upwork IR](https://investors.upwork.com/news-releases/news-release-details/upwork-study-finds-1-4-us-skilled-knowledge-workers-now-work) **[Company research]**
- **Upwork In-Demand Skills (Jan 2025**, platform data Jan 1–Oct 31, 2024): freelancers in "generative AI modeling" earn up to **22% more per hour** than traditional AI/ML roles — [Upwork IR](https://investors.upwork.com/news-releases/news-release-details/upwork-unveils-2025s-most-demand-skills) **[Company research]**
- **Upwork Future Workforce Index 2026** (survey of 2,400 US skilled workers, Mar–Apr 2026, plus marketplace data) — [Upwork FWI 2026](https://www.upwork.com/research/research-future-workforce-index-2026); [Upwork press release](https://www.upwork.com/press/releases/upworks-future-workforce-index-2026-how-ai-is-redefining-the-value-of-work-as-skilled-freelancing-accelerates) **[Company research]**
  - Freelancers doing AI work earn **34% more per hour** than those not using AI.
  - **"Generative AI and creative production" contract starts rose 90% YoY, but per-contract earnings fell 13%.** "AI-augmented professional services" grew 72%, with earnings up 22%. Freelancers doing more complex work with AI saw earnings rise 45%. The report says lower-complexity "AI execution tasks" are growing while their earnings decline.
  - Conflict: one aggregator summary cited a **28%** earnings fall for "AI-based execution tasks". The 13% figure comes from Upwork's own materials, and the 28% figure is unverified — [StockTitan summary](https://www.stocktitan.net/news/UPWK/upwork-s-future-workforce-index-2026-how-ai-is-redefining-the-value-ylt73dgjz2ey.html)

**Japan surveys**
- **ランサーズ「フリーランス法に関する実態調査2025」**: **76.1%** of freelancers use generative AI at work, but only **34.6%** of client companies allow AI use. The 2024 survey had AI use **under 30%**, and a 2023 Lancers survey had about **40%** "using it at work". The surveys disagree enough that trend comparisons are unreliable — [Lancers PR 2025](https://www.lancers.co.jp/news/pr/24421/); [Lancers 2024 実態調査](https://www.lancers.co.jp/news/pr/24055/); [Lancers 2023 生成AI活用調査 (PR TIMES)](https://prtimes.jp/main/html/rd/p/000000192.000010407.html) **[Company research]**. I found **no income-change figure** in the Lancers releases.
- **日本フリーランスリーグ (FLJ)「生成AIと日本のクリエイターの未来」**: **24,991 respondents**, fielded 2025-09-30 to 10-31 and released 2026-01-20. Respondents were 54.2% illustrators and 15.0% manga artists. Asked how generative AI affected income or sales, **about 12% said it decreased, about 2% said it increased, and about 40% said it was roughly unchanged**. About **90%** called generative AI a serious threat to their livelihood. FLJ itself calls the economic loss "limited so far". The data are self-reported — [ITmedia AI+](https://www.itmedia.co.jp/aiplus/article/2601/20/1260120111/); [Advance News](https://www.advance-news.co.jp/news/2026/01/post-5043.html); [Yahoo!ニュース/弁護士JP](https://news.yahoo.co.jp/articles/a6cc779dd9daa3b53cebab7e84f152f82906746b) **[Advocacy-group survey]**
- **株式会社LiKG** (n=200 freelancers using AI): more than 60% cut work time, but only **16.13% reported higher monthly income** and **75.81% reported no change** — [PR TIMES](https://prtimes.jp/main/html/rd/p/000000015.000132885.html) **[Company survey with a small, non-random sample]**

### Inferences
- **Evidence ranking by method (for the report writer):**
  - **AI-assisted freelance writing, coding and image work.** Causal studies show falling demand for commodity tasks: −2% jobs and −5.2% earnings for writers (Hui et al.); −21% writing/coding posts and −17% image posts (Demirci et al.). Remaining work is more complex and better paid. For a side-hustler, using AI to do *more* low-end jobs means competing in a shrinking, crowded market. Using AI inside a skill you already have is where the earnings premium appears (Upwork 2026: +45% for complex work vs −13% per contract for generative/creative production). Note that the Upwork figures are the platform's own claims.
  - **AI-written Kindle books.** The best evidence (Reimers & Waldfogel) points to a saturated, low-usage market with no breakout hits. KDP also requires disclosure and caps daily uploads (see section 2).
  - **AI stock images.** Image-job demand fell (−17%), Japan's main stock site PIXTA stopped accepting AI content in 2026 (section 2), and Adobe Stock requires labels and releases.
  - **AI YouTube/TikTok channels.** Policy risk is the binding constraint, since mass-produced or repetitive content cannot be monetized (section 2). I found no credible income data.
  - **Selling prompts/GPTs, and AI influencers.** I found no credible income data (see Gaps and section 3).
- Japanese freelancer surveys show high AI *adoption* (76%) but very small income *gains* (2% in FLJ's creator sample, 16% in a small company survey). This undercuts claims that "AIで月○万円" is typical.
- Most Japanese "AI副業で月5万円" articles in search results were affiliate or school-marketing sites with no methodology. I excluded them as evidence.

### Gaps
- **No MM総研 (or other Japanese research-firm) survey** with income figures for "生成AI 副業" was found, and the search budget ran out before more targeted queries.
- **No クラウドワークス survey** on AI use and income was found.
- No credible earnings data for **AI translation side work** specifically, or for **selling prompts (PromptBase etc.) or GPTs (GPT Store builder revenue)**. Whether OpenAI's GPT Store revenue program ever paid builders outside a US pilot could not be verified.
- No credible earnings data for **AI-generated YouTube/TikTok channels**. I intended to check Kapwing's "AI slop" report (company research), but the search budget ran out.
- The published *Organization Science* version of Hui et al. may report figures that differ slightly from the 2023 working-paper figures (2% / 5.2%). Not verified.

---

## 2. Platform policies that limit AI content monetization (state as of 2026 where verifiable)

### Takeaway
No major platform bans AI *use*. Their restrictions instead hit the exact model that "AI副業" schools sell: mass-producing undifferentiated content. YouTube demonetizes "inauthentic" (mass-produced/repetitive) content. Amazon KDP requires AI disclosure and caps uploads at 3 titles a day. PIXTA, Japan's main stock site, **stopped accepting AI-generated content in April 2026**. Adobe Stock, LINE, TikTok and Meta all require AI labeling.

### Cited Findings

**YouTube (YPP)**
- On **2025-07-15**, YouTube renamed its "repetitious content" monetization rule to **"inauthentic content"** to make clear that it covers **mass-produced or repetitive** content. This is a **monetization** restriction, not a removal policy, and such content can stay up without earning ads — [Social Media Today](https://www.socialmediatoday.com/news/youtube-clarifies-monetization-update-inauthentic-repeated-content/752892/); [Search Engine Journal](https://searchenginejournal.com/youtube-targets-mass-produced-content-in-monetization-update/550337/); [Plagiarism Today](https://www.plagiarismtoday.com/2025/07/08/youtube-targets-inauthentic-content/) **[Secondary, reporting YouTube statements]**
- YouTube said channels that use AI **remain eligible** if they add value. Reused content can be monetized with significant original commentary, modification, or educational/entertainment value. YouTube's Rene Ritchie said legitimate reaction and clip videos are unaffected — same sources as above; [AlternativeTo](https://alternativeto.net/news/2025/7/youtube-updates-its-policy-to-demonetize-inauthentic-mass-produced-ai-generated-content)
- Japanese coverage lists likely-ineligible formats: **AI-voice narration with no personal commentary, slideshows of reused clips, reaction/summary videos with little original insight, and videos made only of text-to-video AI clips**. Gizmodo Japan describes the change as a "minor update" to an existing rule — [Gizmodo Japan](https://www.gizmodo.jp/2025/07/youtube-cant-put-pandoras-ai-slop-back-in-the-box.html); [XenoSpectrum](https://xenospectrum.com/youtube-to-exclude-ai-generated-content-and-cut-and-paste-videos-from-monetization/); [CineD JP](https://www.cined.com/jp/?p=388130) **[Secondary]**
- I could not read the official YPP policy page (support.google.com/youtube/answer/1311392) directly in this session.

**Amazon KDP**
- Since **September 2023**, KDP has required publishers to disclose **AI-generated text, images or translations**, including cover art and interior images, when publishing or updating a book — [Authors Guild](https://authorsguild.org/news/amazon-adds-to-kdp-generative-ai-policy-caps-daily-self-publishing-uploads/) **[Secondary, reporting KDP]**
- KDP limits new title creation to **3 titles per day per account**. KDP confirmed the number and said it "may be adjusted". Few publishers are affected, and exceptions can be requested — [Authors Guild](https://authorsguild.org/news/amazon-adds-to-kdp-generative-ai-policy-caps-daily-self-publishing-uploads/); [Decrypt](https://decrypt.co/198416/amazon-adds-self-publishing-restrictions-counter-flood-ai-books?amp=1); [ALLi](https://selfpublishingadvice.org/self-publishing-news-kdp-ai-new-limits-on-titles/)
  - Conflict: a 2026 compliance guide says the cap applies to AI titles specifically, but the original 2023 reporting describes a cap on *all* new titles — [ScribeCount](https://scribecount.com/author-resource/protecting-books/kdp-ai-content-policy-the-compliance-guide). Another blog dates the cap to late 2024, which contradicts the 2023 reporting — [Univers.studio](https://univers.studio/blog/kdp-ai-content-policy-2026/) **[Secondary; treat with caution]**
- I could not read the KDP content-guidelines page (kdp.amazon.com/help/topic/G200672390) in this session.

**TikTok**
- TikTok requires a visible label on AI-generated content showing **realistic people or scenes** (visuals or audio). Text-only AI help (scripts, captions) is generally exempt. Since 2024, TikTok has read **C2PA Content Credentials** to label AI content automatically, alongside invisible watermarking and its own detection models — [Storrito](https://storrito.com/resources/tiktoks-2026-ai-labeling-rules-and-what-they-signal-for-platform-governance/); [Billo](https://billo.app/blog/ai-labeling/); [Kompozy](https://kompozy.io/guides/tiktok-ai-labeling-at-scale) **[Secondary/marketing blogs]**
- Reported labeled-video counts: **1.3 billion** (earlier) vs **3 billion** (as of July 2026). Both figures are secondary — same sources.
- **Creator Rewards Program eligibility for AI content is disputed among third-party sources.** Some say AI videos and virtual-influencer accounts are excluded. Others say the terms never mention AI and that originality is the test — [ShortformNation](https://www.shortformnation.com/blog/ai-generated-ugc-for-tiktok-shop-what-actually-works-and-what-gets-you-demonetized-2026-guide); [MonetizedNow](https://monetizednow.com/ai-tiktok-content-monetization) **[Unverified; official terms not read]**

**Meta (Instagram/Facebook/Threads)**
- **Feb 2024:** Meta announced it would label AI-generated images it detects using industry metadata (Google, OpenAI, Microsoft, Adobe, Midjourney, Shutterstock). Users must disclose **photorealistic video or realistic-sounding audio** that was digitally created or altered, and Meta **may penalize accounts that fail to disclose** — [Axios](https://www.axios.com/2024/02/06/meta-ai-labeling-fix-oversight-board); [NPR/WHYY](https://whyy.org/npr-story/meta-labeling-ai-generated-images-instagram-facebook-artificial-intelligence) **[Secondary/press]**
- **Apr 2024:** Following its Oversight Board, Meta extended labeling to content showing a person *doing* something they did not do. Labels apply when Meta detects AI indicators or when the user self-discloses — [Spectrum News](https://spectrumnews1.com/ca/la/technology/2024/04/05/meta-rolls-out-new-labeling-system-for-ai-generated-content)
- One retail-marketing blog says Meta auto-applies "AI info" labels to **ads** made with Meta's own generative tools or carrying C2PA metadata (claimed July 2026 update) — [Common Thread Co.](https://commonthreadco.com/blogs/coachs-corner/meta-ai-ad-labels-mandatory-disclosure-ecommerce-2026) **[Unverified single source]**

**Adobe Stock** (official Help Center, reported as updated June 2026) — [Adobe Stock generative AI content guidelines](https://helpx.adobe.com/stock/contributor/submit-your-content/submit-generative-ai-content/generative-ai-content-guidelines.html); [Adobe Stock generative AI FAQ](https://helpx.adobe.com/stock/contributor/submit-your-content/submit-generative-ai-content/adobe-stock-generative-ai-faq.html) **[Primary/official, read via search summary]**
- The **"Created using generative AI tools"** checkbox is **required** for all generative AI content. Contributors must tick "People and Property are fictional" when content resembles but is not based on real people.
- Photorealistic AI images go under Photos and everything else under Illustrations. AI content **cannot go into the Illustrative Editorial collection**.
- Prompts, titles and keywords **may not reference artist names, real people, government agencies, third-party IP, or real newsworthy events**.
- AI content depicting an **identifiable person requires documentation** (releases). The contributor must hold all rights and must check the AI tool's terms. The normal quality standards apply.
- Older 2023 community guidance on mandatory "Generative AI" title keywords may be outdated — [Adobe Community](https://community.adobe.com/t5/stock-discussions/ai-content-not-labelled-as-ai/m-p/13748543); see also [DIYPhotography on rules for AI images of real events](https://www.diyphotography.net/adobe-stock-sharpens-rules-over-ai-images-illustrating-real-events/)

**PIXTA (Japan)**
- PIXTA announced it would **stop accepting uploads of AI-generated images and videos from 2026-04-20 and stop selling them from 2026-05-22** — [PIXTA guide: AI生成画像・動画素材の取扱い停止に関するお知らせ](https://pixta.jp/guide/?p=73832); [ITmedia AI+ 2026-04-14](https://www.itmedia.co.jp/aiplus/article/2604/14/1260414114/) **[Primary/official + press]**
- PIXTA's stated reasons: AI content did not match what buyers want ("人が撮影・制作したもの"), mass uploads made search worse, and handling AI content added costs — [ITmedia AI+](https://www.itmedia.co.jp/aiplus/article/2604/14/1260414114/)
- PIXTA still accepts limited AI *processing*. Content **generated from scratch by a prompt** or **converted to another style or form by AI** (e.g., photo to anime) is not allowed. A blog summary lists noise reduction, sharpening, upscaling and object removal as allowed — [PIXTA 販売可能なAI加工に関するガイドライン](https://pixta.jp/guide/?p=73841); [blog summary](https://camera.outlaw66.com/pixta_ai/)
- PIXTA warns that making and selling an image that relies on (依拠) and resembles a third party's work can be copyright infringement — [PIXTA AI生成画像に関する注意喚起](https://pixta.jp/guide/?p=72927&post_type=faq)

**LINE Creators Market**
- Under the terms, LINE **may label content as AI-generated at its discretion**, including when the creator declares AI use or when LINE judges content to be (possibly) AI-generated — [LINE Creators Market Terms](https://creator.line.me/en/terms/) **[Primary/official]**
- Creators set a **"Use of AI"** option for stickers, emoji and themes, which shows a notice on purchase screens in the Sticker Shop, Theme Shop and LINE STORE. LINE can change the setting after review and **may request the prompts used**, rejecting or removing items if they are not supplied. Items imitating copyrighted works or famous characters, including "XXXX風" titles, are prohibited — [LINE help: Editing stickers](https://help2.line.me/creators/web/categoryId/20002312/3/pc?lang=en) **[Primary/official]**
- The consumer help page treats content as AI-generated if AI produced it, *or* if AI was used as a support tool, *or* if LINE judges it likely. LINE says the criteria may change — [LINE help: About AI-generated content](https://help2.line.me/line/smartphone/sp?contentId=200001248&lang=en) **[Primary/official]**
- A Japanese blog says the AI label became mandatory from June 2025. This is unverified against an official announcement — [ainformation.jp](https://ainformation.jp/article/4780) **[Secondary]**

**note**
- **Official:** note added a setting to signal opposition to generative-AI training on a creator's posts. It applies account-wide, and note says it **cannot guarantee** every AI company will comply — [note公式](https://note.com/info/n/n21b09699c67d); [help-note](https://www.help-note.com/hc/ja/articles/43414600875673); [Impress Watch](https://www.watch.impress.co.jp/docs/news/1662581.html)
- **Official:** note runs an **"AI学習対価還元プログラム"** that provides posted text to AI companies for training in return for payment. Participation is optional — [help-note FAQ](https://www.help-note.com/hc/ja/articles/44723422427417)
- I could not verify from official sources any note rule that bans or restricts posting AI-generated articles. One user blog claims publishing a "100% AI-generated" article as-is violates the terms, but that is the blogger's interpretation — [note blog](https://note.com/robokuma1234/n/n15f996eb9c56) **[Unverified]**

### Inferences
- Platform rules converge on two requirements: **(1) disclose AI**, and **(2) add human value and don't mass-produce**. The typical "AIで量産して放置収入" pitch (AI narration channels, AI book volume, AI stock-image volume) is exactly what YouTube's inauthentic-content rule, KDP's daily cap and PIXTA's ban target.
- In Japan the stock-image route has narrowed sharply. PIXTA is out, and Adobe Stock requires labels, bans artist and IP references in prompts, and needs releases for identifiable people.
- AI labels on stickers, ads and videos are shown to buyers and viewers. Their effect on sales or reach is not documented in the sources found.

### Gaps
- **Not verified in this session:**
  - Official YouTube YPP page text.
  - YouTube's "altered or synthetic content" disclosure requirement for realistic content, introduced in 2024 per my background knowledge, and any 2026 changes.
  - Official KDP guideline text. My background understanding is that KDP distinguishes "AI-generated" (must disclose) from "AI-assisted" (no disclosure needed) and does not show disclosures to customers, but this is **unverified here**.
  - TikTok's official Creator Rewards terms.
  - Meta's mid-2024 renaming of "Made with AI" to "AI info" (background knowledge only).
  - note's official rules for AI-generated posts.
- No data on how AI labels affect sales or reach on LINE, Adobe Stock, TikTok or Meta.

---

## 3. Virtual / AI influencer economics

### Takeaway
There is **no credible public data on what individuals earn from AI influencers**. Market-size figures come from commercial research firms and disagree by multiples. The "virtual influencers get 3x engagement" claim traces back to industry benchmarks, and peer-reviewed work is mixed: at least one study found humans get **more** engagement.

### Cited Findings
- **Market-size estimates disagree widely [Commercial market research / marketing]:**
  - Market Research Future: about **$9.34B (2024)**, with a **37.42% CAGR** to 2035 — [MRFR](https://www.marketresearchfuture.com/reports/virtual-influencer-market-22712)
  - Dataintelo: **$7.9B (2025) to $47.5B (2034)** — [Dataintelo](https://dataintelo.com/report/virtual-influencer-market)
  - Another blog: **$11.74B (2026) to $154.6B (2032)**, a 41.29% CAGR — [callyourgirlfriend.com](https://www.callyourgirlfriend.com/blog/ai-influencer-statistics)
- **Engagement claims [Industry benchmark / marketing]:** virtual influencers at **2.84% vs 1.72%** for humans, attributed to Geyser 2024; and campaign-level **5.9% vs 1.9%** (2023), from a blog — [Archive.com blog](https://archive.com/blog/virtual-influencer-earnings-statistics); [callyourgirlfriend.com](https://www.callyourgirlfriend.com/blog/ai-influencer-statistics)
- **Peer-reviewed evidence:**
  - A 2024 mixed-method Instagram study (*Journal of Interactive Advertising*) found **human influencers obtained significantly greater engagement than virtual influencers**, which the authors link to the uncanny-valley effect — [Taylor & Francis](https://www.tandfonline.com/doi/full/10.1080/15252019.2024.2313721)
  - A 2026 *Journal of the Academy of Marketing Science* study of about 10,000 virtual-influencer posts found that showing a **"social tie"** (relationships with others) lifts engagement by about **21%**, with no comparable effect for human influencers — [Springer JAMS](https://link.springer.com/article/10.1007/s11747-026-01185-x)
  - Other academic work: [Journal of Business Research, "How and when do virtual influencers positively affect consumer responses"](https://www.sciencedirect.com/science/article/abs/pii/S0148296324003679); a conceptual model paper notes that some studies claim about 3x engagement but cites them only in passing — [Electronic Markets](https://link.springer.com/article/10.1007/s12525-025-00857-w)
- **AI-influencer tool vendors' earnings claims** (e.g., "How much can you earn with Higgsfield AI influencers") come from tool and agency marketing pages — [Sozee](https://www.sozee.ai/resources/higgsfield-ai-influencer-monetization/); [Scribe page](https://scribehow.com/page/How_to_Make_Money_with_AI_Influencers_Using_Higgsfield_in_2026__lXAEk5qtSkG0vXZyiA-bDA) **[Marketing claim; not evidence]**

### Inferences
- Market-size numbers describe brand and agency spending on virtual humans, which is mostly corporate-owned (e.g., agency-built characters). They say nothing about the odds that an individual side-hustler's AI persona earns money.
- An individual AI influencer in Japan also faces disclosure duties (platform AI labels, plus PR labeling under ステマ rules when paid; see section 6) and likeness-rights risk if the persona resembles a real person.

### Gaps
- No independent data on income distribution for individually run AI or virtual influencers, globally or in Japan.
- No Japan-specific market data for virtual influencers was found. The search budget ran out before a Japan-specific search (e.g., 矢野経済研究所) could be run.

---

## 4. Higgsfield "Earn" creator program (higgsfield.ai/earn)

### Takeaway
Per search snippets of the official page, Higgsfield Earn pays creators who post **approved** Higgsfield-made AI videos on social media. Pay is tiered by view milestones and capped at **$1,000 on the first day and $2,500 lifetime per video**. Typical payouts appear small: third-party estimates put beginners at about **$10–50 per video**. All aggregate figures are company claims.

### Cited Findings
- The official page describes payment for posting approved AI videos, with **three tiers**: a base payment per approved video, a **24-hour bonus** and a **7th-day bonus**. Earnings are credited as a video passes view milestones. The cap is **$1,000 on the first day**, the **maximum lifetime payout is $2,500 per video**, and multiple videos per campaign are allowed — [Higgsfield Earn (official)](https://higgsfield.ai/earn) **[Primary/official, read via search snippet only; the page itself could not be opened]**
- Launch coverage: [Joe Youngblood](https://www.joeyoungblood.com/creator-marketing/higgsfield-launched-earn-a-way-for-creators-to-earn-money-with-generative-ai-videos/) **[Secondary]**
- **Company-sourced aggregates repeated by third parties:** "more than $1 million paid to over 10,000 verified creators" with a "90% approval rate", and a weekly creator pool capped at **$100,000** — [Gemlist](https://www.gemlist.io/blog/does-higgsfield-earn-pay-real-money); [Michydev review](https://www.michydev.com/higgsfield-earn-review-can-you-actually-make-money/) **[Company claims, unverified]**
- **Third-party estimates:** beginners make about **$10–50 per campaign video**, and top creators reach **$500+/month** — [Gemlist](https://www.gemlist.io/programs/higgsfield-earn/how-much-pay). One review notes that $1M across 10,000 creators averages about **$100 per creator** in total — [Michydev](https://www.michydev.com/higgsfield-earn-review-can-you-actually-make-money/) **[Third-party estimates]**
- Reportedly free to join, with verification by social-account login. Earn is separate from Higgsfield's affiliate / Creator Partnership program, and neither publishes a commission rate — [Gemlist](https://www.gemlist.io/programs/higgsfield-earn/how-much-pay); [Higgsfield affiliate explainer (unofficial GitHub page)](https://higgsfield-affiliate-program.github.io/) **[Secondary]**

### Inferences
- The program pays for **promoting Higgsfield** (its videos are marketing for the tool). It works like UGC/clipping-style bounty marketing and is not an independent income stream. The caps are ceilings, and the implied average (~$100 per creator) is small.
- Creators in Japan posting these videos would likely need PR labeling, since the content promotes a product for compensation (see section 6), plus the platform AI labels from section 2.

### Gaps
- Exact base payment per video, view thresholds per tier, eligible platforms and regions (including whether Japan-based creators are eligible), payout method and minimum, and tax-form requirements: **not verified**, because the official page could not be loaded.

---

## 5. Scams and consumer trouble: 国民生活センター / 消費者庁 data on 「AIで簡単に稼げる」副業・情報商材・AI講座 (2023–2026)

### Takeaway
The clearest official signal comes from 国民生活センター's **2026-09-16** warning on **「ビジネス講座」** (AI講座, SNS運用講座). Complaints roughly **tripled, from 1,169 (FY2020) to 3,551 (FY2025)**, and they are still rising in FY2026. Typical contracts run **¥650,000–800,000**, often sold over Web会議 after an SNS ad, and sometimes financed by installments or loans. 消費者庁 has repeatedly named 副業サポート operators for false or exaggerated ads.

### Cited Findings
- **国民生活センター「ビジネス講座のトラブルにご注意」(2026-09-16)** — [Press release PDF](https://www.kokusen.go.jp/pdf/n-20260916_3.pdf); [HTML](https://www.kokusen.go.jp/news/data/n-20260916_3.html); [leaflet PDF: 「AIを使って副業で稼げます」「講座代は1、2か月で取り戻せます」](https://www.kokusen.go.jp/pdf/n-20260916_3_lf.pdf) **[Primary/official, read via search summary]**
  - PIO-NET complaints about business courses (knowledge or skill courses): **1,169 in FY2020 to 3,551 in FY2025 (about 3x)**. FY2026 through July 31: **1,121**, vs **821** in the same period a year earlier — [INTERNET Watch](https://internet.watch.impress.co.jp/docs/news/2142039.html); [Smart Watch Life](https://www.smartwatchlife.jp/80738/). One outlet gives **2,682** for FY2024 — [Yahoo!/Web担当者Forum](https://news.yahoo.co.jp/articles/93de479dc1fc420e1de8928f1b7f5902857dc991)
  - Pattern: an ad says "**AIを使えば副業で稼げる**" and leads to an expensive course. Recently, consumers find the operator through an **SNS ad** and are pitched over a **Web会議 (online meeting)**. This can count as **電話勧誘販売** under 特定商取引法, which brings **cooling-off rights**, for example when proper contract documents were not provided. Contract amounts in these cases tend to be higher than for mail-order sales.
  - Reported average contract amounts: **通信販売 ¥480,000 vs 電話勧誘販売 ¥790,000**. The period label in the coverage reads "2026年度", so check it against the PDF — [おたくま経済新聞](https://otakuma.net/archives/2026091802.html) (search summary)
  - Cases: an **¥800,000 AI動画講座 paid in 36 installments**; a consumer who joined what they thought was a **副業 job interview** over Web会議 and ended up in a **¥650,000** course contract — [Smart Watch Life](https://www.smartwatchlife.jp/80738/); [INTERNET Watch](https://internet.watch.impress.co.jp/docs/news/2142039.html)
  - Press undercover example (not 国民生活センター data): a school quoted **¥900,000 for 3 months** — [おたくま経済新聞](https://otakuma.net/archives/2026091802.html) **[Press]**
- **国民生活センター「情報商材」topic page:** PIO-NET complaints about 情報商材 (money-making know-how sold online) were **6,256 (FY2023), 4,163 (FY2024), 2,623 (FY2025)**, as of 2026-05-31 and excluding referred cases. The page says the bigger problem is now the **expensive 副業 consulting or "support" contracts** that the info products lead into — [国民生活センター 情報商材](https://www.kokusen.go.jp/soudan_topics/data/infoproducts.html) **[Primary/official]**
- **Context (all categories, FY2025):** total contract value **¥477.6B**, average **¥880,000** per complaint, average already paid **¥500,000**, all up from FY2024. This is not specific to 副業 — [国民生活センター 2025年度 全国の消費生活相談の状況 (2026-08-05)](https://www.kokusen.go.jp/pdf/n-20260805_1.pdf). In FY2023, 「内職・副業その他」 was among the top categories at **11,192** complaints — [2023年度 状況 (2024-08-07)](https://www.kokusen.go.jp/pdf/n-20240807_3.pdf); FY2024 overview: [n-20250806_3](https://www.kokusen.go.jp/news/data/n-20250806_3.html)
- **SNS 'just press like' 副業 scams (May 2026):** ads promising pay for liking posts, taking screenshots or watching videos end in demands for large payments. Victims are concentrated among people in their **20s and 30s** — [ITmedia NEWS 2026-05-25](https://www.itmedia.co.jp/news/articles/2605/25/news094.html) **[Press, reporting 国民生活センター]**
- **AI-branded investment tools (2023):** 国民生活センター warned that people in their 20s were signing expensive contracts for **"AI自動売買ツール" (FX)**, some taking out loans to pay — [国民生活センター 2023-06-07](https://www.kokusen.go.jp/pdf/n-20230607_1.pdf) **[Primary/official]**
- **2023 副業 trouble warning:** fake-task or "small payment first" patterns and manual or support contracts — [国民生活センター 2023-10-27](https://www.kokusen.go.jp/news/data/n-20231027_1.html) **[Primary/official]**
- **Local warning specifically on AI:** a 北九州市 consumer-center newsletter dated 令和8年7月25日 (2026-07-25) is titled 「『AIで簡単に稼げる』を信じないで！」. I could not confirm its details — [北九州市 PDF](https://www.city.kitakyushu.lg.jp/files/001221960.pdf) **[Local government; detail unverified]**
- **消費者庁 named-operator warnings** (none found that explicitly cite generative AI; all cover the same 副業 pattern) **[Primary/official]**:
  - **2025-06-26:** 株式会社和, for 「簡単な副業をうたい高額なサポートプランを契約させる」 and for giving 断定的判断 — [消費者庁](https://www.caa.go.jp/notice/entry/042732/); [PDF](https://www.caa.go.jp/notice/assets/consumer_policy_cms103_250626_01.pdf)
  - **2025-02-06:** a 「タスク副業」 operator that promised pay but made consumers send large sums (referenced in the 2025-06-26 PDF)
  - **2025-12-19:** three operators that used 在宅ワーク job ads to lead into expensive consulting contracts — [PDF](https://www.caa.go.jp/notice/assets/consumer_policy_cms103_251219_01.pdf)
  - **2024-02-29:** 株式会社協栄商事 and 株式会社フィールド, which used **remote-control apps to make consumers borrow from 消費者金融** to pay for 副業 support — [消費者庁](https://www.caa.go.jp/notice/entry/036459/); [PDF](https://www.caa.go.jp/notice/assets/consumer_policy_cms103_240229_1.pdf)
  - **2022-04-13:** a 副業 "manual" sold with 「誰でも1日当たり数万円を稼ぐことができる」 claims — [PDF](https://www.caa.go.jp/notice/assets/consumer_policy_cms103_220413_01.pdf)
- **Official advice:** don't take 「簡単に稼げる」「もうかる」 ads at face value; don't sign on the spot; check cancellation and refund terms; consult **消費者ホットライン 188** — [国民生活センター 2023-06-07](https://www.kokusen.go.jp/pdf/n-20230607_1.pdf); [INTERNET Watch](https://internet.watch.impress.co.jp/docs/news/2142039.html)

### Inferences
- The typical 2024–2026 pattern: an SNS or video ad ("AIで副業", "講座代は1〜2か月で回収") leads to a free seminar or LINE registration, then a Web会議 "interview" or consultation, then a ¥0.5–0.9M course or support plan, often paid by installments or loans. The AI branding is new, but the sales funnel is the same one 消費者庁 has named in non-AI cases since 2022.
- 情報商材 complaints are *falling* (6,256 to 2,623) while ビジネス講座 complaints are *rising* (1,169 to 3,551). This suggests the money-making-scheme business has shifted from selling PDFs to selling "courses" and "support", with AI as the current hook.
- Web会議 selling may count as 電話勧誘販売 and bring cooling-off rights. This is practical leverage for victims.

### Gaps
- 国民生活センター does not appear to publish a PIO-NET count specifically for "生成AI副業". The AI share of ビジネス講座 complaints was not found.
- Average loss specifically for AI-themed 副業 or courses was not found. The ¥480k/¥790k averages are for ビジネス講座 by sales channel, and the FY label needs checking.
- No 消費者庁 warning explicitly naming a generative-AI 副業 operator was found (as of the search). This may be a search limitation.

---

## 6. Legal points in Japan: copyright (文化庁 2024), stealth-marketing rules for AI influencers, likeness and publicity rights

### Takeaway
(1) Under 文化庁's 2024 「考え方」 (non-binding), **AI output can infringe copyright when it is similar to an existing work and depends on it (類似性＋依拠性)**. Reliance can be presumed if the work was in the training data. Purely AI-made output is generally **not protected** by copyright unless a human made a creative contribution.
(2) Japan's stealth-marketing (ステマ) rule under 景品表示法 applies to ads by AI and virtual influencers, and legal liability falls on the **advertiser**.
(3) A **2026-08-07 法務省 interpretive guideline** confirms that commercial AI use of a real person's likeness **or voice** can infringe **パブリシティ権**.

### Cited Findings

**Copyright: 文化審議会著作権分科会法制度小委員会「AIと著作権に関する考え方について」(2024-03-15)**
- Compiled on 2024-03-15 after public comment (2024-01-23 to 02-12). It is **not legally binding** and states the subcommittee's view of current law — [国立国会図書館 カレントアウェアネス](https://current.ndl.go.jp/car/218811); 文化庁 page: [AIと著作権について](https://www.bunka.go.jp/seisaku/chosakuken/aiandcopyright.html) **[Primary via secondary summary]**
- **Infringement at the generation and use stage** requires both **類似性 (similarity)** and **依拠性 (reliance)**, as in traditional case law — [カレントアウェアネス](https://current.ndl.go.jp/car/218811); [契約ウォッチ](https://keiyaku-watch.jp/media/gyoukaitopic/generate-ai/)
- **Reliance can be presumed** if the existing work was in the AI's training data. It can be rebutted if it is technically ensured that the work's creative expression is not output. Commentators note this is hard for rights holders to prove — [STORIA法律事務所 第7回](https://storialaw.jp/blog/12060); [STORIA 第5回](https://storialaw.jp/blog/10822). If the user did not know the work and it was not in the training data, a coincidental match is not reliance — [情報処理学会 DP](https://www.ipsj.or.jp/dp/contents/publication/61/DP61-S04.html) **[Law-firm and academic commentary]**
- **Copyrightability of output:** output generated by AI alone, without human 創作的寄与, is generally **not a 著作物**. The factors weighed together are prompt length and detail, number of generation attempts, selection among outputs, and post-generation editing. Instructions that stay at the level of ideas do not count — [リードプラス summary](https://www.leadplus.co.jp/blog/comprehensive-summary-of-generative-ai); [情報処理学会 DP](https://www.ipsj.or.jp/dp/contents/publication/61/DP61-S04.html) **[Secondary commentary]**
- **Training stage:** generally allowed without permission under **著作権法30条の4**. Additional training aimed at outputting a specific work's expression (e.g., LoRA-style imitation of one artist) can fall **outside** 30条の4 because "enjoyment" purposes coexist — [リードプラス](https://www.leadplus.co.jp/blog/comprehensive-summary-of-generative-ai) **[Secondary]**
- 文化庁 later published **「AIと著作権に関するチェックリスト&ガイダンス」(2024-07-31)**, organized by stakeholder role — [カレントアウェアネス](https://current.ndl.go.jp/car/224456)

**ステマ規制 (景品表示法 5条3号 designation) and AI/virtual influencers**
- 消費者庁's operating standards decide whether an influencer's post is the **advertiser's own ad** by whether the advertiser was involved in deciding its content — [契約ウォッチ: ステマ規制解説](https://keiyaku-watch.jp/media/kisochishiki/stealthmarketing/) **[Secondary legal explainer]**
- The regulated party is the **advertiser (事業者)**. Influencers and affiliates are generally outside the rule unless they co-supply the product (as summarized from 消費者庁 Q&A) — [Gastroduce Japan](https://gastroduce-japan.co.jp/2026/09/18/stealth-marketing-regulation-influencer/) **[Secondary]**
- Practitioner commentary: there is **no exemption because the "person" is virtual**. A paid post by an AI or virtual character still needs PR labeling ("広告"/"PR") — [aiteller.jp](https://aiteller.jp/blog/virtual-human-stema); [BeyondAI](https://www.influencer.beyondai.co.jp/ai-influencer-stealth-marketing-regulations/); [GXO](https://gxo.co.jp/column/d2c-ec-stealth-marketing-regulation-2years-operation-2026) **[Secondary; note BeyondAI and aiteller are AI-influencer vendors]**
- Enforcement example: 消費者庁 措置命令 against **ロート製薬 (2025-03-25)** under the ステマ rule (secondary report) — [Gastroduce Japan](https://gastroduce-japan.co.jp/2026/09/18/stealth-marketing-regulation-influencer/)

**肖像権・パブリシティ権 (likeness and publicity rights)**
- **法務省「肖像、声等の無断利用による民事責任の在り方に関する検討会 取りまとめ報告書 ― 生成AIによるパブリシティ権侵害等に関する解釈指針 ―」**: committee set up April 2026, report published **2026-08-07** (143 pages; 17-page summary; chaired by Prof. 田村善之, University of Tokyo). It is **non-binding**, and discussion of hard law, including amending 不正競争防止法, continues — [法務省](https://www.moj.go.jp/MINJI/minji05_00778.html); [法務省 資料 PDF](https://www.moj.go.jp/content/001468506.pdf); [hashout.jp](https://hashout.jp/ai/5435/); [innovatopia](https://innovatopia.jp/ai/ai-news/116087/) **[Primary/official + press]**
  - The guideline builds on the **ピンク・レディー最高裁判決 (2012)**, which named three infringing uses of a person's 肖像等: **① sold as a stand-alone item for viewing (独立鑑賞商品), ② used to differentiate goods (差別化目的), ③ used in advertising (広告利用)**. It adds **comparably malicious uses** — [法務省 draft PDF](https://www.moj.go.jp/content/001467268.pdf); [DX Magazine](https://dxmagazine.jp/news/ytoda2631-13/)
  - **Voice** is placed alongside name and likeness as a symbol of personality and can be protected by パブリシティ権 and personality-derived rights. Example of infringement: using AI to generate a voice closely resembling a specific voice actor's and having it sing or read text. **Publishing AI voices for profit** can fall within scope, while an impersonation act that reveals the performer's identity is generally outside it — [hashout.jp](https://hashout.jp/ai/5435/); [法務省 PDF](https://www.moj.go.jp/content/001467268.pdf)
- Generating human images with AI is not illegal in itself. Risk arises when the output resembles a real (especially famous) person — [atsoho.com explainer](https://atsoho.com/blog/ai-portrait-photo-publicity-rights) **[Secondary]**. Platform rules add to this: Adobe Stock requires releases for identifiable people, and LINE rejects images that look too much like real people (section 2).

### Inferences
- For commercial AI content in Japan:
  - Don't prompt for named artists, characters or real people (copyright reliance and publicity risk; also banned on Adobe Stock and LINE).
  - Keep records of human creative input (prompts, iterations, selection, edits) if you want copyright in the output.
  - Never build an AI persona or voice that resembles a real person for profit.
  - Label paid promotions as PR.
- Because purely AI-generated output is generally not copyrightable, others can legally copy it. That weakens the asset value of AI-only books, images and stickers.

### Gaps
- The 文化庁 original text was not read directly (only commentary summaries). Its exact wording on commercial use was not retrieved.
- The ステマ告示's effective date (widely reported as 2023-10-01) and the exact 消費者庁 Q&A wording on virtual influencers were not verified in this session.
- No court decision applying publicity rights to an AI-generated look-alike in Japan was found.
- The relevance of Japan's AI推進法 (2025) and any new 2026 legislation on deepfakes was not researched (search budget exhausted).
