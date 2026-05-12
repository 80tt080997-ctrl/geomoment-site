---
title: "GEO란 무엇인가 — 검색이 ChatGPT로 옮겨가는 시대의 새 마케팅 영역"
description: "Generative Engine Optimization(GEO)의 정의, 전통 SEO와의 차이, 한국 기업이 지금 시작해야 하는 이유를 정리합니다."
date: 2026-05-12 10:00:00 +0900
author_id: jace
category: GEO 입문
tags: [GEO, AEO, AI 검색, ChatGPT, SEO]
summary: |
  검색의 시작점이 포털에서 **ChatGPT·Gemini 같은 생성형 AI 답변**으로 빠르게 옮겨가고 있습니다. SEO가 _랭킹_ 게임이라면 GEO는 _인용_ 게임으로, **페이지 단위가 아닌 청크(200~500자) 단위**의 답변 적합도가 핵심 자산이 됩니다. 한국 시장에서 GEO 도구·컨설팅은 아직 빈 자리이며, **Schema.org와 llms.txt 적용**만으로도 entity 인식 신호를 즉시 끌어올릴 수 있습니다.
---

지난 1년 사이 한국 마케팅 담당자들로부터 가장 자주 듣게 된 질문이 있습니다.

> "우리 회사가 ChatGPT에서 검색하면 어떻게 나와요?"

처음에는 가벼운 호기심처럼 들렸지만, 업종이 전혀 다른 회사들에서 같은 질문이 반복되기 시작하면서 분명해졌습니다. **검색 환경이 포털에서 생성형 AI 답변으로 빠르게 이동하고 있다**는 것입니다. 그리고 이 변화에 답을 가진 한국 회사는 거의 없었습니다.

<figure>
  <img src="/assets/img/blog/geo-introduction/01_search_shift.png" alt="검색 환경이 AI 답변으로 빠르게 이동하는 추이 그래프">
  <figcaption>글로벌·국내 검색 추이 — 전통 검색은 천천히 감소하고 AI 답변 점유율은 가파르게 증가하는 중입니다.</figcaption>
</figure>

이 글에서는 GEO(Generative Engine Optimization)가 무엇인지, 전통 SEO와 어떻게 다른지, 그리고 한국 중소·중견 기업이 왜 지금 시작해야 하는지를 정리합니다.

## GEO란 무엇인가

GEO는 _Generative Engine Optimization_ 의 약자로, **ChatGPT·Gemini·Claude·Perplexity 같은 생성형 AI 답변 엔진에서 우리 브랜드가 어떻게 노출되고 인용되는지를 측정·최적화하는 마케팅 영역**입니다. 일부 자료에서는 _AEO(Answer Engine Optimization)_ 라고도 부르지만, 본질적으로 같은 개념을 다룹니다.

기존 검색에서 사용자는 _검색어_ 를 입력하고 _10개의 링크_ 중 하나를 골랐습니다. 생성형 AI 답변 엔진에서는 사용자가 _질문_ 을 던지고 _하나의 답변_ 을 받습니다. 그 답변에 우리 브랜드가 들어가느냐 빠지느냐가 결과의 전부입니다.

<figure>
  <img src="/assets/img/blog/geo-introduction/03_geo_seo_aeo.svg" alt="SEO와 GEO/AEO의 관계를 보여주는 다이어그램">
  <figcaption>SEO와 GEO/AEO는 같은 사이트에서 <strong>두 게임이 동시에</strong> 진행되는 구조입니다. 공통 자산은 좋은 콘텐츠지만, 평가 기준은 완전히 다릅니다.</figcaption>
</figure>

## SEO와 무엇이 다른가

표면적으로 비슷해 보이지만, 작동 원리는 완전히 다릅니다. 한눈에 비교하면 다음과 같습니다.

| 항목 | SEO (전통 검색) | GEO (AI 답변) |
|---|---|---|
| 게임 종류 | **랭킹** 게임 | **인용** 게임 |
| 단위 | 페이지 | 청크 (200~500자) |
| 결과 | 10개 링크 중 선택 | 하나의 답변 + 3~5개 출처 |
| 사용자 행동 | 검색어 입력 → 클릭 | 질문 입력 → 읽기 |
| 핵심 자산 | 키워드·백링크·기술 SEO | 청크 적합도·entity 신호·권위 인용 |
| 노출 임계점 | 1순위에 못 가도 클릭 있음 | 인용 안 되면 _존재 자체가 안 보임_ |

AI는 페이지 전체를 보지 않습니다. _청크(chunk)_ 라고 부르는 200~500자 단위로 본문을 잘게 쪼개고, 그중 _질문에 직접 답하는 청크_ 를 골라 답변에 인용합니다. 따라서 GEO에서 중요한 것은 _페이지 순위_ 가 아니라 _청크의 답변 적합도_ 입니다.

<figure>
  <img src="/assets/img/blog/geo-introduction/04_page_to_chunks.svg" alt="페이지가 청크로 분할되고 점수가 매겨지는 과정 다이어그램">
  <figcaption>한 페이지(왼쪽)가 5개 청크로 잘리고, AI는 청크별로 답변 적합도 점수를 매깁니다. <strong>점수 50점 이상 청크만 인용 적격</strong>이라, 페이지 전체 품질이 좋아도 청크 구조가 약하면 답변에 들어가지 못합니다.</figcaption>
</figure>

또 한 가지 결정적 차이는 _entity 인식_ 입니다. AI는 "우리 회사가 어떤 분야의 어떤 브랜드인지" 를 _entity_ 로 인식해야 답변에 등장시킵니다. 사이트에 콘텐츠는 많지만 _entity 신호_ 가 약하면, AI는 우리 회사를 _그냥 일반 회사_ 로 분류해 답변에서 빼버립니다.

<div class="callout callout--note">
  <div class="callout-title">📝 핵심 한 줄</div>
  <div class="callout-body">
    <p>SEO는 <strong>"검색되게"</strong> 만들고, GEO는 <strong>"답변에 들어가게"</strong> 만듭니다. 같은 콘텐츠도 두 게임의 평가 기준이 다르기 때문에, GEO를 위해서는 본문 구조와 entity 신호를 따로 다듬어야 합니다.</p>
  </div>
</div>

## 왜 지금 시작해야 하는가

세 가지 신호가 동시에 잡힙니다.

<figure>
  <img src="/assets/img/blog/geo-introduction/02_why_now_3signals.png" alt="GEO를 지금 시작해야 하는 3가지 신호 — 사용자 행동·인용 자리·한국 시장 공백">
  <figcaption>세 신호가 동시에 잡히는 지금이 GEO의 진입 기회입니다. 각 신호의 디테일은 아래에서 풀어 설명합니다.</figcaption>
</figure>

**첫째, 사용자 행동이 바뀌고 있습니다.** 한국에서도 ChatGPT, Perplexity, Claude 사용자가 빠르게 늘고 있습니다. 특히 _제품 추천_, _서비스 비교_, _전문 분야 질문_ 같은 _상업적 의도_ 검색이 AI 쪽으로 이동하는 속도가 빠릅니다.

**둘째, AI 답변에는 _자리가 적습니다_.** 검색 결과 10개 자리 중 5~6위에 가도 클릭은 있었습니다. AI 답변은 대부분 _3~5개 출처_ 만 인용합니다. _인용되지 않으면 존재 자체가 보이지 않습니다_.

**셋째, 한국 시장은 비어 있습니다.** 글로벌 GEO 컨설팅 회사들은 영어 검색 환경과 영문 콘텐츠 중심이라 한국 브랜드에 적용하면 측정 자체가 부정확합니다. 국내에는 전통 SEO 도구는 많지만 AI 답변 구조를 분석하는 도구가 부재합니다. _빠르게 움직이는 기업이 한국 GEO 시장의 표준을 정의할 수 있는 시점_ 입니다.

## 한국 기업이 가장 자주 부딪히는 3가지 약점

저희가 다양한 분야 — K뷰티, 호텔·여행, 전문 서비스 — 의 브랜드를 진단해보며 _반복되는 약점 패턴_ 을 확인했습니다.

1. **자사 사이트가 AI 답변에 거의 인용되지 않습니다.** 한 K뷰티 시그니처 브랜드의 경우 ChatGPT 스킨케어 추천 답변에서 자사 사이트 인용률이 1% 미만이었습니다.
2. **사이트 본문이 청크로 잘 추출되지 않습니다.** 페이지 전체가 _한 문단_ 으로 길게 이어지거나, 핵심 정보가 _이미지·표 안_ 에 갇혀 AI 크롤러가 읽을 수 없습니다.
3. **권위 출처에서의 인용이 약합니다.** 우리 브랜드를 언급하는 _업계 매거진·전문 매체·위키 등재_ 가 부족하면 AI가 _주변 권위_ 를 보지 못하고 우리를 _신뢰도 낮은 entity_ 로 분류합니다.

## 실행 첫 걸음 — 오늘 할 수 있는 두 가지

GEO는 _큰 프로젝트_ 처럼 들리지만, 실은 작은 액션부터 시작할 수 있습니다.

**1. Schema.org 마크업을 점검하세요.** 최소한 `Organization`, `Product`(또는 `Service`), `FAQPage` 세 가지는 박는 게 좋습니다. AI 크롤러가 _이 회사는 무엇을 하는 곳인지_ entity로 인식하는 가장 빠른 신호입니다. [Google Rich Results Test](https://search.google.com/test/rich-results) 로 검증할 수 있습니다.

가장 기본이 되는 `Organization` 마크업은 사이트 `<head>` 안에 다음 형태로 넣으면 됩니다.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "(우리 회사 정식 명칭)",
  "url": "https://(우리 도메인)",
  "logo": "https://(도메인)/logo.png",
  "description": "한 줄로 우리 회사를 설명하는 문장",
  "sameAs": [
    "https://www.instagram.com/(계정)",
    "https://blog.naver.com/(아이디)",
    "https://www.youtube.com/@(채널)"
  ]
}
</script>
```

여기서 `sameAs` 배열이 핵심입니다. AI 크롤러는 이 필드를 보고 _이 회사가 _저 인스타·블로그·유튜브와 같은 곳_이라고 entity를 묶어 인식_하기 시작합니다. 회사 SNS·블로그·외부 디렉터리 URL을 5~10개 정도 채워두면 entity 신호가 즉시 올라갑니다.

**2. `llms.txt` 파일을 만드세요.** 사이트 루트에 _AI 크롤러용 마크다운 안내 파일_ 을 둡니다. AI가 우리 브랜드의 핵심 정보를 _요약된 형태_ 로 빠르게 파악하게 해주는 비공식 표준입니다. [llmstxt.org](https://llmstxt.org/) 에 형식이 정리돼 있습니다.

이 두 가지만 적용해도 _entity 인식 신호_ 가 즉시 올라갑니다. 단, 본문 청크 구조와 권위 출처 보강은 _시간이 필요한 작업_ 입니다.

<div class="callout callout--tip">
  <div class="callout-title">💡 실행 우선순위</div>
  <div class="callout-body">
    <p>Schema와 llms.txt가 <strong>1주차</strong> 작업이라면, 본문 청크 재구성은 <strong>1~3개월</strong>, 권위 출처(매거진·위키·PR) 보강은 <strong>3~6개월</strong> 작업입니다. 모두 동시에 하려고 하면 진척이 안 보이니, 작은 것부터 끝내고 다음으로 넘어가는 게 좋습니다.</p>
  </div>
</div>

## 우리 회사는 지금 어디쯤일까

가장 먼저 해야 할 일은 _현재 위치를 측정하는 것_ 입니다. ChatGPT, Gemini, Claude, Perplexity 4대 AI가 우리 브랜드를 어떻게 답변하는지 _숫자로_ 보지 않으면 _무엇을 고쳐야 할지_ 알 수 없습니다.

GeoMoment는 한국 기업이 4대 AI에서 _얼마나·어떻게_ 노출되는지를 9개 KPI로 분해해 진단하고, 어느 페이지의 어느 단락을 어떻게 다시 써야 하는지까지 처방하는 한국형 GEO 서비스입니다. 앞으로 이 블로그에서 _분야별 진단 사례_, _실행 노트_, _AI 답변 트렌드_ 같은 실무 인사이트를 정기적으로 정리해드릴 예정입니다.
