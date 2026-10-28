# Churreria Mundo – demo GitHub Pages (aktualizacja 28.10.2026)

Gotowa statyczna strona internetowa. Bez instalacji Node, bez budowania projektu.

## Jak wrzucić aktualizację na istniejący GitHub Pages
1. Pobierz ZIP i rozpakuj go.
2. Skopiuj **zawartość folderu**, w tym `index.html`, `styles.css`, `script.js`, `site-config.js`, `README.md` i cały folder `assets/`, **do głównego katalogu** swojego repozytorium `churreriamundo`.
3. W GitHub Desktop wykonaj Commit, następnie Push origin.
4. W Settings → Pages repozytorium powinny być ustawione `Deploy from a branch`, gałąź `main`, katalog `/ (root)`.
5. Otwórz https://kryfie.github.io/churreriamundo/ i odśwież stronę z pominięciem pamięci podręcznej (Ctrl+F5).

**UWAGA:** Jeśli w repozytorium masz poprzednią wersję obrazów w katalogu głównym, możesz je usunąć po sprawdzeniu wdrożenia. Nowa wersja używa folderu `assets/`.

## Co się zmieniło
- Nowe zdjęcie główne, pięć zdjęć produktów i nowe logo od właścicielki.
- Dwie aktualne plansze menu – na telefonie jedna pod drugą, z powiększeniem po kliknięciu.
- Większa typografia: nawigacja, opis produktów, tekst główny, przyciski i sekcje kontaktowe.
- Galeria przedstawia przesłane zdjęcia zamiast starego kolażu.
- Poprawiona struktura zasobów: wszystkie grafiki znajdują się w `assets/`.

## Przed publikacją produkcyjną
- Potwierdź adres, numer telefonu, godziny otwarcia i ceny w menu.
- Uzupełnij brakujące Facebook, TikTok i YouTube w `site-config.js` (Instagram jest już wpisany).
- `GitHub Pages` nie obsługuje backendu ani formularzy serwerowych; strona ma działające przyciski telefonu i map.

Strona jest demem i działa jako zwykły statyczny HTML/CSS/JavaScript.
