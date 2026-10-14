(() => {
      'use strict';
      const reveal = document.getElementById('reveal-img');
      function moveSpotlight(clientX, clientY) {
        if (!reveal) return;
        const rect = reveal.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const radius = window.innerWidth < 480 ? 120 : window.innerWidth < 720 ? 160 : 260;
        const mask = `radial-gradient(circle ${radius}px at ${x}px ${y}px, #fff 0%, #fff 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, transparent 100%)`;
        reveal.style.webkitMaskImage = mask;
        reveal.style.maskImage = mask;
      }
      window.addEventListener('mousemove', e => moveSpotlight(e.clientX, e.clientY));
      window.addEventListener('touchmove', e => {
        if (e.touches[0]) moveSpotlight(e.touches[0].clientX, e.touches[0].clientY);
      }, { passive: true });

      document.querySelectorAll('.words-pull-up').forEach(element => {
        if (element.dataset.split) return;
        element.dataset.split = 'true';
        let wordIndex = 0;
        function splitWords(container, phrase) {
          phrase.trim().split(/\s+/).filter(Boolean).forEach(word => {
            const span = document.createElement('span');
            span.className = 'pull-word';
            span.textContent = word;
            span.style.animationDelay = `${wordIndex * 0.1}s`;
            container.appendChild(span);
            wordIndex++;
          });
        }
        const directLines = Array.from(element.children).filter(child => child.tagName === 'SPAN');
        if (element.tagName === 'H1' && directLines.length) {
          directLines.forEach(line => {
            const phrase = line.textContent;
            line.textContent = '';
            line.classList.add('pull-line');
            splitWords(line, phrase);
          });
        } else {
          const phrase = element.textContent;
          element.textContent = '';
          splitWords(element, phrase);
        }
      });

      const headings = document.querySelectorAll('.words-pull-up');
      const fades = document.querySelectorAll('.fade-up-reveal');
      if ('IntersectionObserver' in window) {
        const headingObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('words-visible'); observer.unobserve(entry.target); }
          });
        }, { threshold: 0.2 });
        const fadeObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.animationDelay = `${parseFloat(entry.target.dataset.delay || '0')}s`;
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });
        headings.forEach(el => headingObserver.observe(el));
        fades.forEach(el => fadeObserver.observe(el));
      } else {
        headings.forEach(el => el.classList.add('words-visible'));
        fades.forEach(el => { el.style.animationDelay = '0s'; el.classList.add('is-visible'); });
      }
    })();
