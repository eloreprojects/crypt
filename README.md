# crypt

## About
Crypt is a powerful account manager that generates unique anonymous emails and passwords when
signing up for new online accounts.

Account information on Crypt is encrypted using AES256 to ensure that all your data is secure and uses SSL
encryption over HTTPS to prevent any man in the middle attacks.

Each account gets it own secure email and password -- so if a service gets hacked, your personal email will not be compromised and hackers
will have 0 indication as to what your personal email actually is. In addition, it helps uphold your privacy by preventing email search sites.

## Install
1. Clone repo and `cd` into directory
2. Run `npm install` to install dependencies
3. Create `/.env` environment variable file containing 
```
DB_URI=
SECRET=
PORT=
```
4. Run `npm run server` to start local dev server
5. Run `npm run dev` (in a different terminal tab) to start webpack and express server
6. Visit localhost:PORT
