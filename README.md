# Churreria Mundo — poprawka zielonych symboli na iPhone (29.10.2026)

**Co naprawiono:** duże zielone symbole pojawiające się na iPhone w sekcjach „Co to jest churreria?” i „Współpraca” nie były zdjęciami. W kodzie był znak `✳`, który Safari/iOS potrafi wyświetlić jako wielką zieloną emoji. Zastąpiłem go neutralnym SVG w sekcji historii oraz subtelnymi dekoracjami CSS w tle. Poprawka obejmuje także mały symbol w nagłówku. Dodany parametr wersji przy `styles.css` wymusza odświeżenie stylów na telefonie.

**Zostawiono bez zmian:** galerię, zdjęcia, Menu1 i Menu2, interakcje, linki, układ i treści strony.

**Wgraj na GitHub Pages:** rozpakuj ZIP, skopiuj wszystkie pliki wraz z folderem `assets` do repozytorium `churreriamundo`, zastąp stare, Commit to main, Push origin. Następnie otwórz `https://kryfie.github.io/churreriamundo/` i odśwież stronę.

---

# Churreria Mundo — demo GitHub Pages (Menu 1 i Menu 2)

## Co poprawiono
- W sekcji **Nasze menu** widać teraz dwie aktualne grafiki `assets/Menu1.png` i `assets/Menu2.png`, w pełnej rozdzielczości, zamiast niewczytującego się obrazka.
- Obie plansze są obok siebie na komputerze i jedna pod drugą na telefonie.
- Kliknięcie otwiera podgląd, a link **Otwórz obraz w pełnym rozmiarze** pokazuje oryginalną grafikę.
- Zachowano całą pozostałą stronę i zwiększone wcześniej litery.

## Aktualizacja w GitHub Desktop
1. Rozpakuj ten ZIP. **Nie wrzucaj samego pliku ZIP do repozytorium.**
2. Skopiuj **wszystkie pliki i folder `assets/`** do katalogu repozytorium `churreriamundo`; zastąp pliki o tych samych nazwach.
3. Sprawdź, że na GitHubie masz `index.html` i folder `assets` w głównym katalogu oraz pliki `assets/Menu1.png` i `assets/Menu2.png`. Uważaj na wielkie litery w nazwach plików!
4. W GitHub Desktop kliknij `Commit to main`, potem `Push origin`.
5. Wejdź na https://kryfie.github.io/churreriamundo/#menu i odśwież Ctrl+F5.

Jeśli widzisz pusty obrazek, sprawdź, czy istnieje https://kryfie.github.io/churreriamundo/assets/Menu1.png — jeśli nie, plik `assets/Menu1.png` nie został wysłany do GitHuba.

Brak instalacji lub budowania projektu — statyczna strona HTML/CSS/JS.
