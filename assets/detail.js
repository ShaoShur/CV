document.documentElement.classList.add('js');

const items = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -35px' });

  items.forEach((item) => observer.observe(item));
} else {
  items.forEach((item) => item.classList.add('in-view'));
}

document.querySelectorAll('[data-year]').forEach((item) => {
  item.textContent = new Date().getFullYear();
});

const lightboxLinks = [...document.querySelectorAll('[data-lightbox]')];
const lightbox = document.querySelector('[data-lightbox-dialog]');

if (lightboxLinks.length && lightbox && typeof lightbox.showModal === 'function') {
  const lightboxImage = lightbox.querySelector('[data-lightbox-image]');
  const lightboxCaption = lightbox.querySelector('[data-lightbox-caption]');
  const lightboxCount = lightbox.querySelector('[data-lightbox-count]');
  let activeIndex = 0;

  const renderLightbox = (index) => {
    activeIndex = (index + lightboxLinks.length) % lightboxLinks.length;
    const link = lightboxLinks[activeIndex];
    const preview = link.querySelector('img');
    lightboxImage.src = link.href;
    lightboxImage.alt = preview?.alt || link.dataset.caption || 'Скриншот';
    lightboxCaption.textContent = link.dataset.caption || preview?.alt || '';
    lightboxCount.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(lightboxLinks.length).padStart(2, '0')}`;
  };

  const openLightbox = (index) => {
    renderLightbox(index);
    lightbox.showModal();
  };

  lightboxLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      openLightbox(index);
    });
  });

  lightbox.querySelector('[data-lightbox-close]').addEventListener('click', () => lightbox.close());
  lightbox.querySelector('[data-lightbox-prev]').addEventListener('click', () => renderLightbox(activeIndex - 1));
  lightbox.querySelector('[data-lightbox-next]').addEventListener('click', () => renderLightbox(activeIndex + 1));

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  lightbox.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') renderLightbox(activeIndex - 1);
    if (event.key === 'ArrowRight') renderLightbox(activeIndex + 1);
  });
}
