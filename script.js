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
})();
