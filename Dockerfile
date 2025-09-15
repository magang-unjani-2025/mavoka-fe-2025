FROM node:20-alpine AS base


FROM base AS deps

WORKDIR /app

COPY package*.json .

RUN npm ci

RUN npm i sharp


FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN if [ -f ./.env.development ]; then \
      mv ./.env.development .env; \
    elif [ -f ./.env.production ]; then \
      mv ./.env.production .env; \
    fi

RUN npm run build


FROM base AS runner

WORKDIR /app

COPY --from=builder /app/.next/standalone ./

COPY --from=builder /app/.next/static ./.next/static

COPY --from=builder /app/public ./public

EXPOSE 3000

CMD [ "node", "server.js" ]
