# app-surveys-ts
Application where users can create and answer surveys

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu máquina:

- **Node.js y npm:** Asegúrate de tener Node.js y npm (normalmente se instala junto con Node.js) instalados. Puedes verificar su instalación ejecutando `node -v` y `npm -v` en tu terminal.

- **MongoDB:** Asegúrate de tener una instancia de MongoDB en funcionamiento. Puedes descargarlo e instalarlo desde [el sitio oficial de MongoDB]

## Pasos para Ejecutar la Aplicación

1. **Clona el Repositorio:** Comienza clonando este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/eladiocm/app-surveys-ts.git
    cd app-surveys-ts
    ```

2. **Instala Dependencias:** Tanto para el backend como para el frontend, necesitas instalar las dependencias. Ejecuta los siguientes comandos en las carpetas `backend` y `frontend` por separado:

    ```bash
    cd server
    npm install

    cd client
    npm install
    ```

3. **Configura las Variables de Entorno:** En la carpeta `server`, crea un archivo llamado `.env` para configurar las variables de entorno necesarias, como la URL de la base de datos de MongoDB y cualquier otra configuración específica. Puedes tomar como base el archivo `.env.example`.

4. **Inicia el Backend:** En la carpeta `server`, ejecuta el siguiente comando para iniciar el servidor de Node.js:

    ```bash
    npm run dev
    ```

   El backend se ejecutará en `http://localhost:5000`.

5. **Inicia el Frontend:** En la carpeta `client`, ejecuta el siguiente comando para iniciar la aplicación React:

    ```bash
    npm run dev
    ```

   La aplicación frontend estará disponible en `http://localhost:5173`.

6. **Explora la Aplicación:** Ahora puedes abrir tu navegador y acceder a `http://localhost:5173` para ver y explorar la aplicación

## Contribución

Si deseas contribuir a esta aplicación, no dudes en enviar pull requests. Agradecemos mucho tu ayuda para mejorar y expandir esta aplicación.

## Soporte

Si tienes algún problema o pregunta, puedes crear un issue en este repositorio


