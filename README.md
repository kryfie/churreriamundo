# Churreria Mundo – strona WWW po poprawkach z 31.10.2026

Gotowa statyczna strona do GitHub Pages lub Netlify. Nie wymaga kompilowania ani instalowania bibliotek.

## Publikacja na GitHub Pages

1. Rozpakuj ZIP i skopiuj **całą zawartość** do repozytorium `churreriamundo` (pliki `index.html`, `styles.css`, `script.js`, `site-config.js`, `gallery-data.js`, katalog `assets/` itd.).
2. Zrób `Commit to main` oraz `Push origin` w GitHub Desktop.
3. W GitHub sprawdź `Settings → Pages`: źródło `main` i `/(root)`.
4. Otwórz `https://kryfie.github.io/churreriamundo/` i odśwież, jeśli wyświetla starą wersję.

## Gdzie dodawać nowe zdjęcia do galerii produktów

Zdjęcia dodawaj do folderów repozytorium:

- Churros → `assets/galerie/churros/`
- Porras → `assets/galerie/porras/`
- Czekolada → `assets/galerie/czekolada/`
- Café con leche → `assets/galerie/cafe-con-leche/`
- Ice Bombón → `assets/galerie/ice-bombon/`

**Ważne:** GitHub Pages sam nie odczytuje listy plików w folderze. Po dodaniu zdjęć dopisz ich ścieżki w `gallery-data.js` w odpowiedniej tablicy `photos`. Na przykład:

```js
churros: {
  title: 'Churros',
  photos: [
    'assets/churros.webp',
    'assets/galerie/churros/churros-02.webp',
    'assets/galerie/churros/churros-03.jpg'
  ]
},
```

Koniecznie prześlij także zmieniony `gallery-data.js` i zrób `Commit → Push`. Po kliknięciu zdjęcia produktu pojawia się jego własna galeria ze strzałkami i licznikiem zdjęć. Na start każda galeria zawiera jedno autentycznie używane w stronie zdjęcie; nie dodawaliśmy sztucznych zdjęć.

Warto zapisywać zdjęcia jako `.webp`, ok. 1200–1600 px szerokości. To oszczędza transfer na Netlify Free.

## Formularz kontaktowy – WAŻNA aktywacja

Formularz pod social mediami wysyła na `biurochmu@gmail.com` za pośrednictwem usługi **FormSubmit.co** – bo GitHub Pages nie ma zaplecza do samodzielnego wysyłania e-maili.

**Aby odbierać wiadomości:**
1. Opublikuj stronę i wyślij pierwszą **testową** wiadomość przez formularz.
2. Sprawdź pocztę `biurochmu@gmail.com` (także Spam) – FormSubmit wyśle e-mail z linkiem aktywacyjnym.
3. Potwierdź formularz; wykonaj kolejny test i upewnij się, że wiadomość dochodzi.
4. Bez tej aktywacji formularz nie będzie normalnie dostarczał zgłoszeń. Potwierdzenie jest wymagane również po ewentualnych zmianach dostawcy formularza.

Dane formularza przechodzą przez zewnętrzną usługę FormSubmit. Przed produkcyjnym udostępnieniem opracuj informacje o prywatności, tożsamości administratora danych i stosowanych usługach (w tym mapie Google); sama notka pod formularzem nie zastępuje polityki prywatności.

## Godziny z Google

Na stronie obecnie wpisano `9:00–20:00` na wszystkie dni zgodnie z PDF. Dodałem przycisk „Sprawdź godziny otwarcia w Google”. **Nie ma automatycznej synchronizacji** – wymagałaby osobnej integracji z API Google, uprawnień i konfiguracji; strona na GitHub Pages nie pobiera tych danych sama. Godziny możesz edytować w `index.html`.

## Mapa Google

Przycisk „Jak do nas trafić” oraz „Zobacz na mapie” przewijają do osadzonej mapy na dole strony. Pinezka jest wyszukiwana według `Churreria Mundo, Grochowa 2, lokal 13, 15-423 Białystok`. Przycisk „Otwórz w Google Maps” daje możliwość dalszej nawigacji; po publikacji **zweryfikuj wskazany punkt na mapie**, bo Google rozpoznaje lokalizację automatycznie na podstawie adresu/nazwy.

## Nagłówek / logo

Logo to `assets/logo.webp`. Napis CHURRERIA / MUNDO / CHURROS · CHOCOLATE · CAFFÈ przywrócono jako trzy oddzielne wiersze tekstu HTML, ponieważ taka wersja wyglądała lepiej niż SVG. Wielkości i odstępy są responsywne w `styles.css`.

## Sekcja „Poczuj klimat Mundo”

Trzy przesłane kolaże są w plikach `assets/klimat-1.png`, `assets/klimat-2.png`, `assets/klimat-3.png`, w dokładnie tej kolejności od lewej do prawej na komputerze i od góry do dołu na telefonie. Kliknięcia otwierają istniejące, oddzielne galerie (`klimat-kawy`, `klimat-czekolada`, `klimat-napoje`). Nowe zdjęcia do galerii dopisuj w `gallery-data.js`; można umieścić je w folderach `assets/galerie/klimat-kawy/`, `assets/galerie/klimat-czekolada/`, `assets/galerie/klimat-napoje/`.

Sekcja ma brązowe tło. Sekcja „Nasze menu” ma białe tło pod plansze menu.

## Social media

Kolejność ikon (również w menu mobilnym): Instagram, Facebook, TikTok, YouTube. Linki są już uzupełnione **wszędzie na stronie** (nagłówek, menu mobilne i sekcja kontaktowa):
- Instagram: https://www.instagram.com/churreria.mundo.bialystok/
- Facebook: https://www.facebook.com/churreria.mundo.bialystok/
- TikTok: https://www.tiktok.com/@churreriamundo
- YouTube: https://www.youtube.com/@ChurreriaMUNDO

Adresy możesz później zmienić w jednym pliku `site-config.js`. Umieszczono je również bezpośrednio w linkach HTML, więc działają nawet bez JavaScript.

## Inne

Zachowano oba menu `Menu1.png` i `Menu2.png`, zdjęcia i mobilne poprawki. W stopce widnieje standardowy tekst zastrzegający prawa autorskie; nazwę autora/portfolio można dodać później.

### Korekta napisu CHURRERIA (31.10.2026)
Zmieniono wyłącznie szerokość górnego napisu CHURRERIA (do 90% poprzedniej) przy zachowaniu rozmiaru logo, MUNDO i reszty strony. Wersja CSS ma nowy identyfikator, żeby Safari/Chrome nie używały starego pliku z cache.
