@echo off
setlocal
cd /d "%~dp0"
if not exist "index.html" goto bad
if not exist "assets\Menu1.png" goto bad
if not exist "assets\Menu2.png" goto bad
if not exist "gallery-data.js" goto bad
echo Sprzatanie zbednych plikow Churreria Mundo...
if exist "assets\brand-lockup.svg" (
  del /f /q "assets\brand-lockup.svg"
  echo Usunieto: assets\brand-lockup.svg
)
if exist "assets\menu-kawa.webp" (
  del /f /q "assets\menu-kawa.webp"
  echo Usunieto: assets\menu-kawa.webp
)
if exist "assets\menu-zimne.webp" (
  del /f /q "assets\menu-zimne.webp"
  echo Usunieto: assets\menu-zimne.webp
)
if exist "assets\promo-novosc.webp" (
  del /f /q "assets\promo-novosc.webp"
  echo Usunieto: assets\promo-novosc.webp
)
if exist "assets\promo-rabat.webp" (
  del /f /q "assets\promo-rabat.webp"
  echo Usunieto: assets\promo-rabat.webp
)
if exist "azulejos.webp" (
  del /f /q "azulejos.webp"
  echo Usunieto: azulejos.webp
)
if exist "cafe-con-leche.webp" (
  del /f /q "cafe-con-leche.webp"
  echo Usunieto: cafe-con-leche.webp
)
if exist "chocolate.webp" (
  del /f /q "chocolate.webp"
  echo Usunieto: chocolate.webp
)
if exist "churros.webp" (
  del /f /q "churros.webp"
  echo Usunieto: churros.webp
)
if exist "download" (
  del /f /q "download"
  echo Usunieto: download
)
if exist "favicon.png" (
  del /f /q "favicon.png"
  echo Usunieto: favicon.png
)
if exist "galeria.webp" (
  del /f /q "galeria.webp"
  echo Usunieto: galeria.webp
)
if exist "hero.webp" (
  del /f /q "hero.webp"
  echo Usunieto: hero.webp
)
if exist "ice-bombon.webp" (
  del /f /q "ice-bombon.webp"
  echo Usunieto: ice-bombon.webp
)
if exist "logo.webp" (
  del /f /q "logo.webp"
  echo Usunieto: logo.webp
)
if exist "menu-kawa.webp" (
  del /f /q "menu-kawa.webp"
  echo Usunieto: menu-kawa.webp
)
if exist "menu-poster.webp" (
  del /f /q "menu-poster.webp"
  echo Usunieto: menu-poster.webp
)
if exist "menu-zimne.webp" (
  del /f /q "menu-zimne.webp"
  echo Usunieto: menu-zimne.webp
)
if exist "porras.webp" (
  del /f /q "porras.webp"
  echo Usunieto: porras.webp
)
if exist "promo-cafe.webp" (
  del /f /q "promo-cafe.webp"
  echo Usunieto: promo-cafe.webp
)
if exist "promo-hola.webp" (
  del /f /q "promo-hola.webp"
  echo Usunieto: promo-hola.webp
)
if exist "promo-novosc.webp" (
  del /f /q "promo-novosc.webp"
  echo Usunieto: promo-novosc.webp
)
if exist "promo-rabat.webp" (
  del /f /q "promo-rabat.webp"
  echo Usunieto: promo-rabat.webp
)
if exist "promo-smaki.webp" (
  del /f /q "promo-smaki.webp"
  echo Usunieto: promo-smaki.webp
)
echo.
echo Gotowe. Sprawdz zmiany w GitHub Desktop i wykonaj Commit oraz Push.
echo Przed commit mozna cofnac usuniecie plikow w GitHub Desktop.
pause
exit /b 0
:bad
echo UWAGA: Ten plik trzeba umiescic w glownym folderze lokalnego repozytorium churreriamundo.
echo Nie wykryto wymaganych plikow strony. Nic nie zostalo usuniete.
pause
exit /b 1
