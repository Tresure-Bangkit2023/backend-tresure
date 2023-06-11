# Gunakan base image yang sesuai dengan aplikasi Anda
FROM node:18.14.2 as dependencies

# Set working directory di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json (jika ada) ke dalam container
COPY package.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install
ENV DATABASE_URL=${_DATABASE_URL}
ENV JWT_SECRET_KEY=${_JWT_SECRET_KEY}
ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT 8080  
EXPOSE 8080

# Salin kode program aplikasi Anda ke dalam container
COPY . .

# Jalankan perintah untuk memulai aplikasi
CMD [ "npm", "run", "start:prod" ]
