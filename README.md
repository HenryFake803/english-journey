# English Journey V1.1.3 — PWA

Pacote estático pronto para hospedagem HTTPS.

- `index.html`: aplicativo
- `manifest.webmanifest`: instalação Android/PWA
- `sw.js`: cache offline do app shell
- `icons/`: ícones do app

O app já aponta para o Supabase real do English Journey usando apenas a publishable key pública.

Para o botão “Continuar com Google”, ainda é necessário habilitar Google OAuth no Supabase usando Client ID e Client Secret do Google e cadastrar a URL hospedada como redirect URL.
