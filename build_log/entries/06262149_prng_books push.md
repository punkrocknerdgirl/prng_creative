2026-06-26
PRNG Books repo setup

Decision:
Split PRNG web work into two repos:
- prng_books = public bookkeeping website
- prng_clients = client-facing static pages for quotes, estimates, and report links

Reason:
The bookkeeping website should stay clean and public-facing. Client pages need their own separate repo/site so client deliverables do not get tangled with marketing site files.

Cleanup:
Moved clients/ out of prng_books and into prng_clients.
Moved alternate site mockup index_2.html into mockups/.

Result:
Created and pushed GitHub repo:
https://github.com/punkrocknerdgirl/prng_books.git

Commit:
"Initial PRNG Books website files"