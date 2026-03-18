# SecurityOn — Guia 

## O que é o SecurityOn?

SecurityOn é uma plataforma comunitária de segurança e conscientização focada em denúncias de golpes, fraudes e ameaças. Os usuários podem reportar perigos, compartilhar experiências na comunidade e acessar artigos educativos sobre segurança.

**Público-alvo:** Comunidades brasileiras preocupadas com segurança — adultos e jovens adultos que querem contribuir para a proteção coletiva.

---

## Funcionalidades Principais

### 1. Denúncias (Complaints)
- Usuários reportam golpes e fraudes com classificação por nível de perigo
- **4 níveis de perigo:** Aviso (amarelo), Cuidado (laranja), Perigo (vermelho), Crítico (vermelho escuro)
- Cards com barra lateral colorida indicando gravidade
- Filtros por nível de perigo

### 2. Comunidade (Community)
- Feed social onde usuários compartilham posts sobre segurança
- Criação de posts via modal
- Interação entre membros da comunidade

### 3. Artigos Educativos
- Conteúdo sobre: segurança residencial, veicular, digital, iluminação pública, vigilância comunitária, tecnologia inteligente
- Cards com imagens, efeito hover de escala, texto truncado
- Página de detalhe por artigo

### 4. Autenticação & Perfil
- Cadastro em 3 etapas com barra de progresso
- Login com JWT
- Perfil editável com banner

### 5. Tema Claro/Escuro
- Detecção automática de preferência do sistema
- Toggle manual com animação suave (ícone sol/lua)

---

## Design System

### Paleta de Cores

| Token | Hex | Uso |
|-------|-----|-----|
| **Primary** | `#3B82F6` (blue-500) | Botões, links, acentos principais |
| **Primary Dark** | `#2563EB` (blue-600) | Hover states |
| **Primary Darker** | `#1D4ED8` (blue-700) | Active states |
| **Aviso** | `#FCD34D` (yellow) | Nível de perigo: Aviso |
| **Cuidado** | `#F97316` (orange) | Nível de perigo: Cuidado |
| **Perigo** | `#EF4444` (red) | Nível de perigo: Perigo |
| **Crítico** | `#B91C1C` (dark red) | Nível de perigo: Crítico |
| **BG Light** | `#FFFFFF` | Fundo modo claro |
| **BG Dark** | `#030712` (gray-950) | Fundo modo escuro |
| **Surface Dark** | `#111827` (gray-900) | Cards no modo escuro |
| **Text Light** | `#111827` (gray-900) | Texto no modo claro |
| **Text Dark** | `#F9FAFB` (gray-100) | Texto no modo escuro |

### Tipografia

- **Fonte principal:** Inter (fallback: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Fonte secundária (Tailwind):** Outfit
- **Pesos:** 300 (light) até 900 (black)
- **Tamanhos chave:**
  - Headlines: 28px–36px (text-2xl a text-4xl)
  - Body: 16px (text-base)
  - Small: 14px (text-sm), 12px (text-xs)

### Componentes UI

- **Cards:** `rounded-2xl`, border sutil, shadow no hover, transições suaves
- **Botões primários:** Blue-500, `rounded-full`, shadow, escala no active
- **Botões secundários:** Bordas, hover com background
- **Inputs:** Estilo bottom-border (sem borda completa), foco muda borda para azul
- **Navegação desktop:** Sidebar fixa à esquerda com ícones
- **Navegação mobile:** Barra inferior
- **Scrollbar customizada:** Gradiente azul com hover interativo

### Layout

- **Mobile-first** com breakpoints: md, lg, xl
- **Desktop:** 2 colunas (sidebar + conteúdo)
- **Mobile:** Largura total com header e nav inferior
- **Border radius padrão:** 2xl (16px) para cards/containers
- **Espaçamento:** Sistema gap do Tailwind (gap-1 a gap-8)

---

## Telas do App

| Tela | Descrição |
|------|-----------|
| **Login** | Formulário de autenticação com decoração de ondas |
| **Cadastro** | Registro em 3 etapas com indicador de progresso |
| **Comunidade** | Feed social com posts e modal de criação |
| **Denúncias** | Lista filtrada por nível de perigo com FAB para criar |
| **Criar Denúncia** | Formulário com seletor de nível de perigo |
| **Artigos** | Grid de cards com busca |
| **Artigo Detalhe** | Visualização completa do artigo |
| **Perfil** | Banner, informações do usuário, modo edição |

---

## Stack Técnica

- **Frontend:** React 19 + TypeScript + Vite
- **Estilização:** Tailwind CSS 4 + Styled Components
- **Ícones:** Phosphor Icons
- **Roteamento:** React Router DOM 7
- **Backend:** NestJS + Prisma + PostgreSQL
- **Auth:** JWT + Bcrypt
- **Deploy:** Vercel

---


