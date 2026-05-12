/* ==========================================================================
   GeoMoment Blog — TOC auto-build + Share + Reading helpers
   ========================================================================== */

(function () {
  // ===== 1) Auto TOC from .post-body h2, h3 =====
  const tocList = document.querySelector('.post-toc-list');
  if (tocList) {
    const headings = document.querySelectorAll('.post-body h2, .post-body h3');
    if (headings.length === 0) {
      const tocBox = document.querySelector('.post-toc');
      if (tocBox) tocBox.style.display = 'none';
    } else {
      headings.forEach((h, i) => {
        if (!h.id) {
          const slug = h.textContent
            .toLowerCase()
            .replace(/[^\w가-힣\s-]/g, '')
            .replace(/\s+/g, '-');
          h.id = slug || ('sec-' + i);
        }
        const li = document.createElement('li');
        li.className = 'toc-item toc-' + h.tagName.toLowerCase();
        const a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        tocList.appendChild(li);
      });

      // 스크롤 시 현재 섹션 강조
      const tocLinks = tocList.querySelectorAll('a');
      const onScroll = () => {
        let current = '';
        const scrollY = window.scrollY + 120;
        headings.forEach((h) => {
          if (h.offsetTop <= scrollY) current = h.id;
        });
        tocLinks.forEach((a) => {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  // ===== 2) Share buttons =====
  document.querySelectorAll('[data-share]').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const type = btn.dataset.share;
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);

      if (type === 'copy') {
        try {
          await navigator.clipboard.writeText(window.location.href);
          const orig = btn.textContent;
          btn.textContent = '✓ 복사됨';
          setTimeout(() => { btn.textContent = orig; }, 1800);
          if (window.gtag) window.gtag('event', 'share', { method: 'copy_link' });
        } catch (err) {
          alert('복사 실패. URL을 직접 복사해주세요.');
        }
        return;
      }

      const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        kakao: `https://story.kakao.com/share?url=${url}`
      };
      if (shareUrls[type]) {
        window.open(shareUrls[type], '_blank', 'width=600,height=500');
        if (window.gtag) window.gtag('event', 'share', { method: type });
      }
    });
  });
})();
