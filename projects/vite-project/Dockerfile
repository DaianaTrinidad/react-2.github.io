# Usa una imagen base de Node.js
FROM node:18

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración e instala dependencias
COPY package*.json ./

RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

RUN npm run build
# Expone el puerto en el que la aplicación corre
EXPOSE 3000

# Ejecuta el script de inicio
CMD ["npm", "run", "dev"]