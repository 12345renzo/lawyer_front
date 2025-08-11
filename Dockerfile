# Etapa de construcción
FROM node:22 AS builder

# Configuración del entorno
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

# Instalar herramientas de compilación necesarias
RUN apt-get update && apt-get install -y \
  python3 \
  make \
  g++ \
  && rm -rf /var/lib/apt/lists/*

# Crear y configurar el directorio de trabajo
WORKDIR /app

# 1. Copiar archivos de dependencias
COPY package.json package-lock.json* ./

# 2. Instalar dependencias
RUN npm ci --force
RUN npm rebuild

# 3. Copiar el resto de los archivos
COPY --chown=1000:1000 . .

# 4. Construir la aplicación (opcional para desarrollo)
# RUN npm run build

# Configurar usuario no-root
RUN chown -R 1000:1000 /app \
  && mkdir -p /home/node \
  && chown -R 1000:1000 /home/node

USER 1000

# Exponer puerto y ejecutar
EXPOSE 3000
CMD ["npm", "run", "dev"]