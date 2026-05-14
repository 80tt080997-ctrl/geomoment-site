---
title: "GEO란 무엇인가 — AI가 인용하는 회사가 되는 법"
description: "Generative Engine Optimization(GEO)의 정의, SEO와의 차이, 한국 기업이 지금 시작해야 하는 이유를 9개 1차 출처와 함께 정리합니다."
date: 2026-05-12 10:00:00 +0900
author_id: jace
category: GEO 입문
tags: [GEO, AEO, AI 검색, ChatGPT, SEO]
summary: |
  - AI 검색이 늘면서 **전통 검색 볼륨은 2026년까지 25%, 브랜드 오가닉 트래픽은 2028년까지 50% 이상 줄어들 전망**입니다 (Gartner).
  - **AI Overview가 노출되면 1위 페이지의 CTR이 34.5% 낮아졌고, 2026년 들어 그 격차는 58%까지 벌어졌습니다** (Ahrefs).
  - 한국 인터넷 이용자의 **생성형 AI 경험률은 1년 만에 17.6% → 33.3%로 두 배**, 가장 많이 쓰는 용도는 **단순 정보검색(81.9%)** 입니다 (NIA).
  - 게임의 룰이 바뀐 만큼, 오늘 가장 먼저 점검할 두 가지는 **Schema.org Organization 마크업**과 **llms.txt 파일**입니다.
---

3년 동안 한국 브랜드 블로그를 누적 5,000편 운영하면서 SEO만 잘하면 충분하다고 믿었어요. 그런데 2024년부터 이상한 신호가 잡혔습니다. **ChatGPT가 추천하는 브랜드**와 **Google 1위에 노출되는 브랜드**가 점점 달라지기 시작한 거예요.

직접 해보시면 바로 느껴집니다. ChatGPT를 켜고 내 회사가 속한 카테고리의 추천 회사를 물어보세요. 그 답변에 **우리 회사 이름**이 나오던가요?

검색의 룰이 조용히 바뀌고 있어요. SEO가 사라지는 건 아니지만, 그 위에 새로운 게임이 얹히는 중입니다. 이 글에서는 GEO(Generative Engine Optimization)가 무엇이고, 왜 지금 한국 기업이 챙겨야 하는지, 그리고 오늘 당장 무엇부터 시작할 수 있는지 정리해볼게요.

<figure>
  <img src="/assets/img/blog/geo-introduction/01_search_shift.png" alt="한국 인터넷 이용자의 생성형 AI 경험률 — 2023년 17.6%에서 2024년 33.3%로 1년 만에 약 2배 증가">
  <figcaption>한국 인터넷 이용자의 생성형 AI 경험률이 1년 만에 두 배가 됐습니다. 출처: <a href="https://www.nia.or.kr/site/nia_kor/ex/bbs/View.do?cbIdx=99870&bcIdx=27869&parentSeq=27869" target="_blank" rel="noopener">NIA·과학기술정보통신부, 「2024 인터넷이용실태조사」(2025-03)</a>.</figcaption>
</figure>

## GEO가 도대체 뭔가요?

GEO는 *Generative Engine Optimization*, 한국어로는 생성형 엔진 최적화라고 해요. 한 문장으로 정리하면 — **AI가 답변을 만들 때 우리 회사의 콘텐츠를 출처로 인용하게 만드는 일**, 이게 GEO의 본질이에요.

<div class="callout callout--quote">
  <div class="callout-title">📚 GEO 학술 원전</div>
  <div class="callout-body">
    <p>Aggarwal 외(Princeton 외, KDD 2024)는 GEO 프레임워크가 생성형 엔진 응답에서의 가시성을 <strong>최대 40%까지 끌어올릴 수 있다</strong>고 보고했어요.</p>
    <blockquote>
      <p>"Through rigorous evaluation, we demonstrate that GEO can boost visibility by up to 40% in generative engine responses."</p>
      <p>— Aggarwal et al., <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener">GEO: Generative Engine Optimization (arXiv:2311.09735)</a></p>
    </blockquote>
  </div>
</div>

ChatGPT가 직접 어떻게 작동하는지 궁금하다면, OpenAI가 ChatGPT Search 기능을 처음 공개했던 영상을 한 번 보시는 걸 추천해요. AI가 답을 만들 때 어떤 출처를 어떻게 가져오는지 시연으로 잘 보여줍니다.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/OzgNJJ2ErEE" title="Search—12 Days of OpenAI: Day 8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<figure>
  <img src="/assets/img/blog/geo-introduction/03_geo_seo_aeo.svg" alt="SEO와 GEO/AEO의 관계를 보여주는 벤 다이어그램 — 공통 자산은 좋은 콘텐츠, 평가 기준은 다름">
  <figcaption>SEO와 GEO/AEO는 같은 사이트에서 <strong>두 게임이 동시에</strong> 진행되는 구조입니다. 공통 자산은 좋은 콘텐츠지만, 평가 기준은 완전히 다릅니다.</figcaption>
</figure>

조금 더 풀어볼게요. 우리가 알던 검색은 10개의 파란 링크였어요. 사용자가 직접 클릭해서 우리 사이트로 들어와야 마케팅이 시작됐죠. AI 검색은 다릅니다. ChatGPT · Perplexity · Gemini · Claude 같은 생성형 엔진이 답을 직접 만들어내고, 그 답 안에 어떤 회사·서비스를 인용할지를 결정해요. 사용자가 우리 사이트에 들어오기 전에 의사결정의 큰 부분이 이미 끝나는 거죠.

즉, GEO의 목표는 한 줄로 — **"검색되는 회사"에서 "AI가 인용하는 회사"로 옮겨가는 것**입니다.

## SEO랑 뭐가 다른가요?

SEO와 GEO를 완전히 다른 게임으로 묘사하는 글이 많은데, 저는 그 표현이 살짝 위험하다고 봐요. 연속선상으로 보는 게 더 정확합니다. Lily Ray는 최근 글에서 이렇게 말했어요.

<div class="callout callout--quote">
  <div class="callout-body">
    <blockquote>
      <p>"It worked every time because LLMs use search engines, and the articles were quickly indexed and ranked well in web search."</p>
      <p>— LLM은 결국 검색엔진을 사용하고, 우리 글이 빠르게 색인되고 검색에서 상위노출됐기 때문에 매번 작동했다.</p>
      <p>Lily Ray, <a href="https://lilyraynyc.substack.com/p/a-reflection-on-seo-and-ai-search" target="_blank" rel="noopener"><em>A Reflection on SEO, GEO & AI Search in 2025</em></a></p>
    </blockquote>
  </div>
</div>

실제로 [Similarweb 2025 Generative AI Report](https://www.similarweb.com/corp/reports/2025-generative-ai-landscape/) 분석에 따르면 **ChatGPT 사용자의 약 95%는 여전히 Google을 병행 사용**해요. SEO 기반은 살아 있고, GEO는 그 위에 새로운 층을 얹는 작업에 가깝습니다.

다만 새 층은 분명히 다른 규칙으로 움직여요.

| 항목 | SEO | GEO |
|---|---|---|
| 측정 단위 | 페이지·키워드 순위 | **청크** — 문단·표·정의 한 덩어리 |
| 평가 주체 | 구글 검색 알고리즘 | ChatGPT · Perplexity · Gemini · Claude |
| 성공의 모습 | 1페이지 상위노출 → 클릭 | AI 답변 안에 **인용** |
| 측정 도구 | GA · 서치콘솔 · 키워드 도구 | 아직 표준 부재 — 직접 측정 필요 |

<figure>
  <img src="/assets/img/blog/geo-introduction/04_page_to_chunks.svg" alt="페이지가 청크로 분할되고 점수가 매겨지는 과정 다이어그램">
  <figcaption>한 페이지(왼쪽)가 5개 청크로 잘리고, AI는 청크별로 답변 적합도 점수를 매깁니다. <strong>점수 50점 이상 청크만 인용 적격</strong>이라, 페이지 전체 품질이 좋아도 청크 구조가 약하면 답변에 들어가지 못합니다.</figcaption>
</figure>

같은 페이지라도 AI에게는 하나의 글이 아니라 수십 개의 청크로 보여요. AI는 질문에 답할 때 문단 단위로 후보를 추리고, 그중 가장 직답에 가까운 청크를 골라 인용해요. 그래서 GEO에서는 페이지를 잘 만드는 것보다 **청크 하나하나를 잘 만드는 것**이 더 중요해집니다.

여기서 SEO 시대의 상위노출 1위가 가지던 의미도 바뀌어요. Ahrefs는 AI Overview가 떴을 때 1위 페이지의 평균 CTR이 **34.5% 더 낮음**을 발견했고 ([Ahrefs, 2025-04](https://ahrefs.com/blog/ai-overviews-reduce-clicks/)), 2026년 2월 업데이트에서는 그 격차가 **58%까지** 벌어졌어요 ([Ahrefs Update, 2026-02](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/)). 1위 자리는 그대로 있는데, 1위가 가져가던 트래픽이 사라지고 있는 거죠.

<div class="callout callout--note">
  <div class="callout-title">📝 핵심 한 줄</div>
  <div class="callout-body">
    <p>GEO는 SEO의 대체가 아니라 <strong>확장</strong>이에요. SEO 기반이 약하면 GEO는 더 약합니다.</p>
  </div>
</div>

## 왜 지금이어야 하나요?

세 가지 신호가 같은 방향을 가리키고 있어요.

<figure>
  <img src="/assets/img/blog/geo-introduction/02_why_now_3signals.png" alt="GEO를 지금 시작해야 하는 3가지 신호 — Gartner 전통 검색 25% 감소, SparkToro 제로클릭 58.5%, NIA 한국 생성형 AI 33.3%">
  <figcaption>세 신호가 동시에 잡히는 지금이 GEO의 진입 기회입니다. 각 신호의 디테일은 아래에서 풀어 설명합니다.</figcaption>
</figure>

**신호 1 — 전통 검색 자체가 줄고 있어요.**
Gartner는 **2026년까지 전통 검색 엔진 볼륨이 25% 감소**할 것으로 전망했어요 ([Gartner Predicts, 2024-02](https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents)). 검색 마케팅이 챗봇·AI 에이전트에게 시장 점유율을 내준다는 분석입니다. 한 발 더 가서, **2028년까지 브랜드의 오가닉 검색 트래픽이 50% 이상 감소**할 수 있다는 예측도 같이 내놨어요 ([Gartner Predicts, 2023-12](https://www.gartner.com/en/newsroom/press-releases/2023-12-14-gartner-predicts-fifty-percent-of-consumers-will-significantly-limit-their-interactions-with-social-media-by-2025)). SEO에 의존하던 마케팅의 절반이 구조적으로 흔들리는 시나리오입니다.

**신호 2 — 검색이 일어나도 클릭은 줄고 있어요.**
SparkToro의 2024년 조사에서는 **미국 Google 검색의 58.5%, EU의 59.7%가 제로클릭**으로 끝났어요. 1,000번 검색해도 오픈웹으로 향한 클릭은 **미국 374회, EU 360회**에 불과했죠 ([SparkToro 2024 Zero-Click Search Study](https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/)). AI 답변·요약·지식 그래프가 클릭 없이 답을 끝내고 있는 거예요.

**신호 3 — 한국 사용자도 이미 AI로 정보를 검색하고 있어요.**
한국 정부 공식 통계(2024 인터넷이용실태조사)에 따르면 만 12세 이상 인터넷 이용자의 **생성형 AI 경험률은 2023년 17.6%에서 2024년 33.3%로 1년 만에 약 2배**가 됐어요. 그리고 사용 분야 1위가 **단순 정보검색(81.9%)** 입니다 ([NIA 2024 인터넷이용실태조사](https://www.nia.or.kr/site/nia_kor/ex/bbs/View.do?cbIdx=99870&bcIdx=27869&parentSeq=27869)). 한국 사용자가 이미 AI를 검색처럼 쓰고 있다는 뜻이에요.

세 신호를 합치면 답은 분명해요. **전통 검색은 줄고, 남은 검색도 클릭은 줄고, 사용자는 AI로 옮겨갔다.** GEO는 내년에 시작할 일이 아니라 작년에 시작했어야 할 일입니다.

## 한국 기업이 특히 약한 이유는?

한국 시장에는 몇 가지 특수한 조건이 있어요.

**약점 1 — 네이버 의존 + 한국어 콘텐츠가 AI에 덜 학습됨.**
StatCounter 기준 2026년 4월 한국 검색엔진 점유율은 **Google 47.36%, Naver 42.39%, Bing 6.15%, Daum 1.37%** 입니다 ([StatCounter Korea](https://gs.statcounter.com/search-engine-market-share/all/south-korea)). 네이버 의존도가 여전히 절반에 가까운 시장이에요. 문제는 AI가 학습한 한국어 콘텐츠의 상당 부분이 네이버 안에 갇혀 있다는 점이에요. 네이버 블로그·카페·뉴스는 외부 크롤러 접근이 제한적이라, 글로벌 AI 모델들은 한국 기업의 실체를 잘 모르는 상태가 많습니다.

**약점 2 — 자사몰·자체 사이트의 AI 친화도가 낮아요.**
컨슈머인사이트가 2025년 하반기 14세 이상 휴대폰 이용자 3,148명을 조사한 결과 AI 서비스 이용 경험률은 **74%**, 서비스별로는 **ChatGPT 54% · Gemini 30% · 에이닷 17% · 뤼튼 13%**로 나타났어요 ([컨슈머인사이트 2025 하반기](https://www.consumerinsight.co.kr/boardView?no=3832&id=ins02_list&schFlag=0)). 사용자는 이미 4개 이상 AI를 동시에 쓰고 있는데, 정작 한국 기업 자사몰은 Schema 마크업·llms.txt·구조화된 FAQ 같은 AI가 읽기 좋은 형식이 거의 적용돼 있지 않아요.

**약점 3 — 콘텐츠가 페이지 단위로 만들어졌어요.**
한국 마케팅 콘텐츠는 상세페이지, 브랜드 스토리, 보도자료 같이 완성된 페이지 형태로 제작돼 왔어요. AI는 그걸 청크로 다시 자르는데, 청크 단위로 보면 정의 한 줄·표·Q&A 같은 직답 형태가 거의 없다는 점이 드러납니다. 한 페이지에 정보가 잘 들어 있어도, AI가 인용할 만한 청크 한 덩어리가 없는 경우가 많아요.

<div class="callout callout--note">
  <div class="callout-title">📝 3중 약점</div>
  <div class="callout-body">
    <p>정리하면 — <strong>네이버 의존 + AI 미인식 + 청크 부재</strong> 3중 약점. 그래서 한국 기업의 GEO는 글로벌 평균보다 더 큰 격차에서 시작해요. 동시에 그게 <strong>기회</strong>이기도 합니다. 먼저 움직이는 회사가 카테고리 인용 자리를 가져갑니다.</p>
  </div>
</div>

## 오늘 뭐부터 해야 해요?

학습은 여기까지 충분해요. 진짜 중요한 건 내일이 아니라 오늘 뭘 할 수 있느냐죠. 두 가지만 짚을게요.

**① Schema.org Organization 마크업 — AI에게 회사 정체성 알려주기**

AI가 우리 회사가 누구인지를 인식하는 가장 빠른 방법은 구조화된 데이터예요. 홈페이지에 아래 JSON-LD를 한 블록 넣는 것만으로 시작할 수 있어요.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "회사명",
  "url": "https://yourcompany.com",
  "logo": "https://yourcompany.com/logo.png",
  "description": "한 줄 회사 설명 (AI가 그대로 인용할 정의문)",
  "sameAs": [
    "https://www.linkedin.com/company/yourcompany",
    "https://www.youtube.com/@yourcompany",
    "https://www.instagram.com/yourcompany"
  ]
}
</script>
```

여기서 가장 중요한 건 **`sameAs`** 배열이에요. AI가 "이 회사 = 저 회사 = 또 저기 그 회사" 라는 **엔티티 연결**을 만들 때 결정적인 신호가 됩니다.

**② llms.txt — AI 크롤러에게 사이트 안내문 주기**

`/llms.txt` 파일은 robots.txt의 AI 버전이에요. 사이트 루트에 한 장 올려두면 LLM 기반 크롤러가 우리 사이트의 핵심 페이지·구조·정책을 빠르게 파악합니다.

```
# 회사명

> 한 줄 회사 소개 — AI에게 보여줄 핵심 정체성

## 핵심 페이지
- [회사 소개](https://yourcompany.com/about): 우리는 누구인가
- [서비스](https://yourcompany.com/service): 무엇을 하는가
- [블로그](https://yourcompany.com/blog): 최신 인사이트

## 정책
- AI 학습·인용 허용 여부, 출처 표기 요청 사항 등
```

<div class="callout callout--tip">
  <div class="callout-title">💡 실행 우선순위</div>
  <div class="callout-body">
    <p>이 두 가지는 <strong>오늘 1시간이면</strong> 적용할 수 있어요. 그리고 그 1시간이, 다음 1년 동안 ChatGPT·Perplexity가 우리 회사를 인용할 가능성을 <strong>0에서 시작 가능 상태로</strong> 바꿔놓습니다.</p>
  </div>
</div>

공식 문서가 궁금하시면 [Schema.org Organization](https://schema.org/Organization)과 [llms.txt 표준 제안 (llmstxt.org)](https://llmstxt.org/)을 같이 보시면 좋아요.

## 우리 회사는, 지금 어디쯤일까?

여기까지 읽고 한 번쯤 던져보고 싶은 질문이 생기실 거예요.

> **우리 회사는, 지금 어디쯤일까?**

이 질문에 답하는 가장 빠른 방법은 직접 측정해보는 것이에요. 지금 바로 ChatGPT에 "OO 분야 추천 회사 알려줘" 라고 물어보세요. 우리 회사가 답변에 등장하면 시작 지점이 좋은 편이고, 등장하지 않으면 바로 그 자리에서 GEO가 필요해진 신호예요.

직접 측정이 어렵거나, 어떤 청크를 어떻게 고쳐야 인용될지가 막막하면 [무료 GEO 진단](/geo-diagnose.html)으로 한 번 물어봐주세요. ChatGPT · Perplexity · Gemini · Claude 네 개 AI에 동시에 던져서 어디가 약한지 4축으로 풀어드려요 🙂

다음 글에서는 그 4축 — **EEAT · 토픽 권위도 · 엔티티 현저성 · 청크 적합도** — 가 무엇인지 정리할 예정이에요.
