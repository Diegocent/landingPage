# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Copiar dependencias e instalar
COPY package*.json ./
RUN npm install

# Copiar el código fuente y construir
COPY . .
RUN npm run build

# Stage 2: Producción
FROM node:18-alpine
WORKDIR /app

# Instalar servidor estático
RUN npm install -g serve

# Copiar solo la carpeta del build
COPY --from=builder /app/dist ./dist

# Puerto que expondrá el contenedor
EXPOSE 3007

# Comando de inicio
CMD ["serve", "-s", "dist", "-l", "3007"]
