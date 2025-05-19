FROM node:20-alpine

WORKDIR /app

# Instala pnpm globalmente
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copia os arquivos de dependências primeiro para cache eficiente
COPY package.json pnpm-lock.yaml ./

# Instala dependências (usa store compartilhada se o volume for montado)
RUN pnpm install --frozen-lockfile

# Copia o restante do código
COPY . .

# Compila (se for TS)
RUN pnpm run build

EXPOSE 8080

CMD ["pnpm", "start"]