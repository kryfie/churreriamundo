(() => {
  'use strict';
  const nav = document.getElementById('main-nav');
  const toggle = document.querySelector('.hamburger');
  const header = document.querySelector('.header');
  const toast = document.querySelector('.toast');
  let toastTimer;

  document.getElementById('year').textContent = new Date().getFullYear();

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('toast--visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('toast--visible'), 4200);
  }

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Otwórz menu');
    nav.classList.remove('nav--open');
  }

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    nav.classList.toggle('nav--open', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => {
    if (nav.classList.contains('nav--open') && !header.contains(e.target)) closeMenu();
  });

  const social = window.MUNDO_CONFIG || {};
  document.querySelectorAll('[data-social]').forEach(a => {
    const key = a.dataset.social;
    if (social[key]) {
      a.href = social[key];
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    } else {
      a.removeAttribute('target');
      a.addEventListener('click', e => {
        e.preventDefault();
        showToast(`To jest demo — uzupełnij link ${key.toUpperCase()} w pliku site-config.js.`);
      });
      a.title = 'Link do dodania przed publikacją';
      a.classList.add('social--pending');
    }
  });

  const dialog = document.querySelector('.lightbox');
  const dialogImg = dialog.querySelector('img');
  const dialogCaption = dialog.querySelector('.lightbox-inner p');
  function openPhoto(src, caption) {
    if (!dialog.showModal) {
      window.open(src, '_blank', 'noopener,noreferrer');
      return;
    }
    dialogImg.src = src;
    dialogImg.alt = caption || 'Powiększone zdjęcie';
    dialog.querySelector('.lightbox-fullsize').href = src;
    dialogCaption.textContent = caption || '';
    dialog.showModal();
  }
  document.querySelectorAll('[data-photo]').forEach(el => {
    el.addEventListener('click', () => openPhoto(el.dataset.photo, el.dataset.caption));
  });
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { dialogImg.removeAttribute('src'); });

// Produkt ma własną galerię: zdjęcia są konfigurowane w gallery-data.js.
const galleryData = window.MUNDO_GALLERIES || {};
const gallery = document.querySelector('.product-gallery');
const galleryImage = gallery.querySelector('.product-gallery-stage img');
const galleryTitle = gallery.querySelector('.product-gallery-title');
const galleryCount = gallery.querySelector('.product-gallery-count');
const galleryPrev = gallery.querySelector('.product-gallery-prev');
const galleryNext = gallery.querySelector('.product-gallery-next');
let activePhotos = [];
let galleryIndex = 0;
let lastGalleryTrigger = null;

const updateGallery = () => {
  const src = activePhotos[galleryIndex];
  if (!src) return;
  galleryImage.src = src;
  galleryImage.alt = `${galleryTitle.textContent} — zdjęcie ${galleryIndex + 1}`;
  galleryCount.textContent = `${galleryIndex + 1} / ${activePhotos.length}`;
  galleryPrev.disabled = galleryNext.disabled = activePhotos.length < 2;
};
const stepGallery = (delta) => {
  if (activePhotos.length < 2) return;
  galleryIndex = (galleryIndex + delta + activePhotos.length) % activePhotos.length;
  updateGallery();
};
document.querySelectorAll('[data-gallery]').forEach(button => {
  button.addEventListener('click', () => {
    const entry = galleryData[button.dataset.gallery];
    if (!entry || !entry.photos?.length) return showToast('Galeria zdjęć jest obecnie niedostępna.');
    lastGalleryTrigger = button;
    galleryTitle.textContent = entry.title;
    activePhotos = entry.photos.filter(src => typeof src === 'string' && src.startsWith('assets/'));
    galleryIndex = 0;
    updateGallery();
    if (typeof gallery.showModal === 'function') gallery.showModal();
    else window.open(activePhotos[0], '_blank', 'noopener,noreferrer');
  });
});
galleryPrev.addEventListener('click', () => stepGallery(-1));
galleryNext.addEventListener('click', () => stepGallery(1));
gallery.querySelector('.product-gallery-close').addEventListener('click', () => gallery.close());
gallery.addEventListener('click', event => { if (event.target === gallery) gallery.close(); });
gallery.addEventListener('close', () => { galleryImage.removeAttribute('src'); lastGalleryTrigger?.focus(); });
document.addEventListener('keydown', e => {
  if (!gallery.open) return;
  if (e.key === 'ArrowLeft') stepGallery(-1);
  if (e.key === 'ArrowRight') stepGallery(1);
});

// Formularz działa ze statycznym GitHub Pages przez zewnętrzny FormSubmit.
// Właścicielka musi potwierdzić e-mail aktywacyjny po pierwszym zgłoszeniu.
const contactForm = document.querySelector('.contact-form');
const formStatus = contactForm.querySelector('.form-status');
contactForm.addEventListener('submit', async event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const data = Object.fromEntries(new FormData(contactForm).entries());
  submitButton.disabled = true;
  formStatus.textContent = 'Wysyłanie wiadomości…';
  formStatus.className = 'form-status';
  try {
    const response = await fetch('https://formsubmit.co/ajax/biurochmu@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    const ok = response.ok && (result.success === true || result.success === 'true');
    if (!ok) throw new Error(result.message || 'Nie udało się wysłać wiadomości.');
    formStatus.classList.add('form-status--ok');
    formStatus.textContent = 'Dziękujemy! Formularz został przesłany. Odpowiemy tak szybko, jak to możliwe.';
    contactForm.reset();
  } catch (error) {
    formStatus.classList.add('form-status--error');
    formStatus.textContent = 'Wysyłanie nie powiodło się. Spróbuj ponownie później lub skontaktuj się z nami telefonicznie.';
  } finally {
    submitButton.disabled = false;
  }
});
})();
