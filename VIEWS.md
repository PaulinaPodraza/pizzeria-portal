# Dashboard

- `/`
  - statystyki dzisiejszych zamówień
  - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboard)

# Widok dostępności stolików

- `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji i wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 min.
    - ma przypominać widok tycgodnia w kalendarzu google, gdzie w kolumnach zamiast dni są stoliki
    - po kliknięciu rezerwacji lu eventu przechodzimy na stronę szczegółów
- `/tables/booking/:id`
  - zawiera wszystjie info dotyczące rezerwacji
  - umożliwia edycję i zapisanie zmian
- `/tables/booking/new`
  - analogicznie do poprzedniej, bez początkowych informacji
- `/tables/events/:id`
  - analogicznie do poprzedniej, dla eventów
- `/tables/events/new`
  - analogicznie do poprzedniej, dla eventów, bez początkowych informacji

# Widok kelnera

- `/waiter`
  -tabela
    - w wierszach stoliki
    - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
  - nr stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówione rodukty z opcjami i ceną
  - kwota zamówienia
- `/waiter/order/:id`
  - jak powyżej

# Widok kuchni

- `/kitchen`
  - wyświetla listę zamówień w kolejności ich złożenia
  - lista zawiera
    - nr stolika lub zamówienia zdalnego
    - pełne info dotyczące zamówionych dań
  - możliwość oznaczenia zamówienia jako zrealizowane
