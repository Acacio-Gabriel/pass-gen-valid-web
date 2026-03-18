# 🔐 Gerador e Validador de Senhas com SHA‑256

![GitHub license](https://img.shields.io/github/license/seuusuario/password-generator-validator)

> Uma ferramenta web simples e educativa para gerar senhas fortes, validar sua segurança e calcular o hash SHA‑256 diretamente no navegador.
---

## 💡 Sobre o Projeto

Este projeto foi desenvolvido para demonstrar na prática conceitos fundamentais de segurança da informação e criptografia, sendo ideal para inclusão em portfólio de desenvolvedor. Ele permite:

- Gerar senhas aleatórias com critérios personalizáveis (maiúsculas, minúsculas, números, símbolos e tamanho).
- Validar se uma senha atende aos critérios de "senha forte".
- Calcular o hash SHA‑256 de qualquer senha, mostrando o resultado em formato hexadecimal.
- Explicar de forma simples os conceitos de senha forte, hash e diferença entre hash e criptografia.

Tudo roda no lado do cliente (navegador) utilizando JavaScript e a **Web Crypto API**, garantindo que nenhuma informação seja enviada para servidores externos.

---
## ✨ Funcionalidades

- ✅ **Gerador de senhas** com opções flexíveis.
- ✅ **Validador de senha forte** (mínimo 8 caracteres, incluindo maiúsculas, minúsculas, números e símbolos).
- ✅ **Hash SHA‑256** em tempo real utilizando a Web Crypto API.
- ✅ **Botão copiar** para a senha gerada.
- ✅ **Seção educativa** com explicações sobre criptografia básica.
- ✅ Design responsivo e amigável.

---
## 🛠 Tecnologias Utilizadas

- **HTML5** – Estrutura semântica.
- **CSS3** – Estilização personalizada (sem frameworks, para demonstrar habilidades).
- **JavaScript (ES6+)** – Lógica de geração, validação e integração com a Web Crypto API.
- **Web Crypto API** – Para cálculo seguro do hash SHA‑256.
- **GitHub Pages** – Hospedagem gratuita e direta.

---
## 🚀 Como Usar

### Acesse a versão online
O projeto está hospedado no GitHub Pages e pode ser acessado diretamente pelo link:  
🔗 [https://acacio-gabriel.github.io/pass-gen-valid-web/](https://acacio-gabriel.github.io/pass-gen-valid-web/)

### Executar localmente
1. Clone este repositório:
   ```bash
   git clone https://github.com/Acacio-Gabriel/pass-gen-valid-web.git
---
## 📚 Conceitos de Criptografia Explicados
- Dentro da própria interface há uma seção que descreve:
- O que é uma senha forte? – Critérios mínimos para evitar ataques de força bruta.
- O que é hash SHA‑256? – Função de hash criptográfico que gera uma saída única e irreversível.
- Diferença entre hash e criptografia – Por que utilizamos hash para armazenar senhas e não criptografia reversível.
- Essas explicações tornam o projeto não apenas uma ferramenta, mas também um recurso educativo.

---
## 📁 Estrutura do Código
O projeto consiste em um único arquivo index.html que contém todo o HTML, CSS e JavaScript. A organização interna é:

```plaintext
index.html
│   ├── <head> (metadados, estilos CSS)
│   ├── <body> (interface dividida em seções)
│   └── <script> (lógica completa: gerador, validador, hash, eventos)
```
> Essa abordagem simplifica a publicação e mantém o código auto‑contido.
---
## 🔮 Melhorias Futuras
- Adicionar um medidor visual de força da senha (ex: barra de progresso colorida).
- Incluir opção de copiar o hash gerado.
- Permitir a geração de múltiplas senhas de uma só vez.
- Implementar um histórico local (sessionStorage) das últimas senhas geradas.
- Suporte a temas claro/escuro.
