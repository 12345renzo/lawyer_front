FROM node:18-alpine

WORKDIR /app

# Cambiar propietario del directorio de trabajo al usuario node existente
RUN chown -R node:node /app

# Cambiar a usuario node (que ya tiene UID 1000)
USER node

COPY --chown=node:node package.json package-lock.json* ./
RUN npm install

COPY --chown=node:node . .

# Crear directorio .next con permisos correctos
RUN mkdir -p .next && chown -R node:node .next

# Argumento para determinar el entorno
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Solo construye si es producción
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

EXPOSE 3000

# Comando condicional con verificación de permisos
CMD chown -R node:node /app/.next 2>/dev/null || true && \
  if [ "$NODE_ENV" = "production" ]; then npm start; else npm run dev; fi