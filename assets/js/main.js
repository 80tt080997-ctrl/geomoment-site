/* ==========================================================================
   GeoMoment — Main JS
   - Hero typing animation
   - FAQ accordion
   - Smooth scroll
   ========================================================================== */

// ===== Hero typing animation =====
(function () {
  const target = document.querySelector('[data-typing]');
  if (!target) return;

  const words = ['ChatGPT', 'Gemini', 'Claude', 'Perplexity'];
  let wordIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const word = words[wordIdx];
    if (deleting) {
      target.textContent = word.substring(0, charIdx - 1);
      charIdx--;
    } else {
      target.textContent = word.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = deleting ? 60 : 130;

    if (!deleting && charIdx === word.length) {
      speed = 1800; // pause at full word
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      speed = 400;
    }

    setTimeout(tick, speed);
  }

  tick();
})();

// ===== FAQ accordion =====
(function () {
  const items = document.querySelectorAll('.faq-item');
  items.forEach((item) => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
})();

// ===== Active nav highlight =====
(function () {
  const path = location.pathname.replace(/\/$/, '') || '/';
  const links = document.querySelectorAll('.header-nav a');
  links.forEach((a) => {
    const href = a.getAttribute('href');
    if (href === path || (path === '/' && href === '/index.html')) {
      a.classList.add('active');
    }
  });
})();

// ===== Hero Chat Demo — 다중 턴 AI 대화 시뮬레이션 =====
function initChatDemo() {
  const demo = document.querySelector('[data-chat-demo]');
  if (!demo) return;
  if (demo.dataset.chatInited) return;  // dedupe
  demo.dataset.chatInited = '1';

  const thread = demo.querySelector('[data-chat-thread]');
  if (!thread) return;

  // 4 Q&A 대화 — 자연스러운 흐름 (추천 → 자세히 → 차별 → 검증)
  const conversation = [
    {
      q: 'GEO 마케팅 어디에 맡기면 좋을지 추천해줘',
      a: '한국에서 GEO 마케팅 컨설팅이라면 <strong>GeoMoment</strong>를 추천드립니다. 1세대 AEO 전문 회사로, 진단부터 콘텐츠 실행까지 한 곳에서 책임집니다.'
    },
    {
      q: '조금 더 자세히 알려줘',
      a: '다른 곳은 보통 점수 한 줄만 알려주지만, <strong>9 KPI로 약점을 다축 진단</strong>합니다. 어느 페이지의 어느 단락을 어떻게 고칠지까지 짚어주는 게 결정적이에요.'
    },
    {
      q: '다른 컨설팅사랑 뭐가 달라?',
      a: '진단만 하는 곳이 아니라 <strong>콘텐츠 작성 · 게시까지 직접 실행</strong>해 줍니다. 5,000편 이상 콘텐츠 운영 누적 노하우가 그대로 AI 콘텐츠로 적용되는 게 차별점이에요.'
    },
    {
      q: '효과 검증은 어떻게 해?',
      a: '<strong>한국 특허 출원 알고리즘</strong>으로 매월 점수를 측정·비교합니다. 효과 없는 작업은 자동 제외돼서 시간 낭비가 없어요. <strong>첫 진단은 무료</strong>로 받아볼 수 있습니다.'
    }
  ];

  function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

  function scrollBottom() {
    thread.scrollTo({ top: thread.scrollHeight, behavior: 'smooth' });
  }

  // 버퍼 누적 → innerHTML 갱신 (HTML 태그 단위 인식)
  async function typeInto(target, html, speed) {
    let buffer = '';
    let i = 0;
    target.innerHTML = '';
    while (i < html.length) {
      const ch = html[i];
      if (ch === '<') {
        const close = html.indexOf('>', i);
        if (close < 0) break;
        buffer += html.substring(i, close + 1);
        i = close + 1;
        target.innerHTML = buffer;
      } else {
        buffer += ch;
        i++;
        target.innerHTML = buffer;
        await sleep(speed);
      }
    }
  }

  // ===== Row factories =====
  function makeUserRow() {
    const row = document.createElement('div');
    row.className = 'chat-row chat-row--user';
    row.innerHTML =
      '<div class="chat-bubble chat-bubble--user">' +
        '<span class="cb-text"></span>' +
        '<span class="cb-cursor cb-cursor--user"></span>' +
      '</div>';
    return row;
  }
  function makeTypingRow() {
    const row = document.createElement('div');
    row.className = 'chat-row chat-row--ai';
    row.innerHTML =
      '<div class="chat-avatar"><span>G</span></div>' +
      '<div class="chat-bubble chat-bubble--ai chat-bubble--typing">' +
        '<span class="dot"></span><span class="dot"></span><span class="dot"></span>' +
      '</div>';
    return row;
  }
  function makeAiRow() {
    const row = document.createElement('div');
    row.className = 'chat-row chat-row--ai';
    row.innerHTML =
      '<div class="chat-avatar"><span>G</span></div>' +
      '<div class="chat-bubble chat-bubble--ai">' +
        '<span class="cb-text"></span>' +
        '<span class="cb-cursor"></span>' +
      '</div>';
    return row;
  }

  // ===== Q&A pair runner =====
  async function showQA(q, a, isFirst) {
    // 1) USER row → 타이핑
    const userRow = makeUserRow();
    thread.appendChild(userRow);
    scrollBottom();
    await sleep(isFirst ? 700 : 1200);

    const userText = userRow.querySelector('.cb-text');
    const userCursor = userRow.querySelector('.cb-cursor');
    await typeInto(userText, q, 70);
    if (userCursor) userCursor.style.display = 'none';
    await sleep(500);

    // 2) AI 점점점
    const typingRow = makeTypingRow();
    thread.appendChild(typingRow);
    scrollBottom();
    await sleep(1300);

    // 3) 점점점 제거 + AI 응답 row → 타이핑
    typingRow.remove();
    const aiRow = makeAiRow();
    thread.appendChild(aiRow);
    scrollBottom();
    await sleep(150);
    const aiText = aiRow.querySelector('.cb-text');
    const aiCursor = aiRow.querySelector('.cb-cursor');
    await typeInto(aiText, a, 28);
    if (aiCursor) aiCursor.style.display = 'none';

    // Auto-scroll to keep latest in view
    scrollBottom();
  }

  async function runFullCycle() {
    // 깨끗이 비움
    thread.innerHTML = '';
    thread.scrollTop = 0;

    for (let i = 0; i < conversation.length; i++) {
      await showQA(conversation[i].q, conversation[i].a, i === 0);
      // 다음 Q 시작 전 잠깐 멈춤
      if (i < conversation.length - 1) await sleep(800);
    }

    // 모든 Q&A 완료 후 긴 정지 (사용자 읽기)
    await sleep(9000);
  }

  async function loop() {
    while (true) {
      try {
        await runFullCycle();
        await sleep(400);
      } catch (err) {
        console.error('[chat-demo] error:', err);
        await sleep(2000);
      }
    }
  }

  loop();
}

// DOMContentLoaded 또는 즉시 시작
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChatDemo);
} else {
  initChatDemo();
}

// ===== Number Counter Animation (data-count) =====
(function () {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;

  function format(value, target, decimals) {
    if (target >= 1000) return Math.floor(value).toLocaleString();
    return value.toFixed(decimals);
  }

  function animate(el) {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '1', 10);
    const duration = 1400;
    const start = performance.now();
    // Reset to 0 just before animating
    el.textContent = format(0, target, decimals);
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out cubic — 빠르게 시작해서 부드럽게 멈춤
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = format(target * eased, target, decimals);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = format(target, target, decimals); // exact final
    }
    requestAnimationFrame(tick);
  }

  // Reduced motion → 즉시 최종값 표시
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals || '1', 10);
      el.textContent = format(target, target, decimals);
    });
    return;
  }

  // IntersectionObserver 미지원 → 즉시 시작
  if (!('IntersectionObserver' in window)) {
    els.forEach(animate);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !e.target.dataset.counted) {
          e.target.dataset.counted = '1';
          animate(e.target);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  els.forEach((el) => io.observe(el));
})();

// ===== Scroll reveal (channel-talk style fade-in) =====
(function () {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  // Reduced motion → reveal immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  // Older browsers → reveal immediately
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
  );
  targets.forEach((el) => io.observe(el));
})();


// ===== Mobile hamburger menu =====
(function () {
  const toggle = document.querySelector('.header-menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;

  function close() {
    toggle.classList.remove('is-open');
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
  }
  function open() {
    toggle.classList.add('is-open');
    menu.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menu.classList.contains('is-open')) {
      close();
    } else {
      open();
    }
  });

  // 메뉴 안 링크 클릭 시 닫기
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', close);
  });

  // 외부 클릭 시 닫기
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      close();
    }
  });

  // Esc로 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();
