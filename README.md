# Churreria Mundo — demo GitHub Pages

Responsywna strona HTML/CSS/JS przygotowana na podstawie grafik Canva przesłanych w archiwum `Menu.zip`.

## Uruchomienie na GitHub Pages

1. Utwórz nowe repozytorium na GitHubie, np. `churreria-mundo-demo`, ustaw jako **Public** (dla najprostszego darmowego hostingu).
2. Rozpakuj ten ZIP i wyślij **zawartość folderu** do głównego katalogu repozytorium: `index.html`, `styles.css`, `script.js`, `site-config.js`, folder `assets` i plik `.nojekyll`.
3. Otwórz repozytorium → **Settings** → **Pages**.
4. W części **Build and deployment** ustaw **Deploy from a branch**, wybierz `main` i katalog `/(root)`, kliknij **Save**.
5. Strona będzie dostępna pod adresem w rodzaju `https://TWOJ-LOGIN.github.io/churreria-mundo-demo/`.

Możesz też otworzyć lokalnie plik `index.html` w przeglądarce. Nie wymaga npm, Vite ani żadnego procesu budowania.

## Linki Facebook / Instagram / TikTok / YouTube

W Canvie wyeksportowanej do PNG **nie ma klikalnych linków**. W pliku `site-config.js`:

```js
window.MUNDO_CONFIG = {
  instagram: 'https://www.instagram.com/churreria.mundo.bialystok/',
  facebook: 'TUTAJ_PELNY_URL_FACEBOOK',
  tiktok: 'TUTAJ_PELNY_URL_TIKTOK',
  youtube: 'TUTAJ_PELNY_URL_YOUTUBE'
};
```

Instagram jest już wpisany. Dla pozostałych obecnie pojawia się komunikat demo zamiast błędnego przekierowania. **Przed publiczną publikacją koniecznie wpisz prawdziwe adresy i sprawdź ich działanie.** Nie pozostawiaj napisu `TUTAJ_PELNY_URL_...` — zamiast tego wpisz konkretny URL albo pusty ciąg `''`.

## Co jeszcze sprawdzić

- **Godziny otwarcia** na stronie pochodzą z projektu Canva. W internecie są rozbieżne informacje — potwierdź ze swoją siostrą przed produkcją.
- **Adres** w Canvie zawiera `lok. 13/14`, w kilku katalogach widnieje tylko `lok. 13`. Zweryfikuj ostateczną wersję adresu.
- Menu to grafika z oryginalnego projektu Canva — potwierdź aktualność cen.
- Sekcje „Współpraca” i „Kontakt” są propozycją przygotowaną do demo, bo przesłane eksporty Canvy nie zawierają kompletnej treści tych zakładek.
- Aktualności to statyczne zdjęcia z projektu (nie automatyczne posty). Nie dodałem działającego formularza wysyłkowego, bo wymaga usługi/backendu.

## Edycja

- Układ i treści: `index.html`
- Kolory, czcionki, widok telefonu: `styles.css`
- Obsługa menu mobilnego, powiększania zdjęć i komunikatów: `script.js`
- Linki do social mediów: `site-config.js`
- Grafiki skadrowane z plików Canva: `assets/`

Całość działa jako statyczna strona, bez subskrypcji i bez usługi serwerowej.
