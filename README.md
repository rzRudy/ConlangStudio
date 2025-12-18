# Conlang Studio (Local Edition)

Entorno de Desarrollo Integrado (IDE) profesional para la creación de lenguajes construidos (Conlangs), refactorizado para ejecución en entorno local.

## 🚀 Requisitos Previos

*   **Node.js**: Versión 18.0.0 o superior.
*   **npm**: Incluido con Node.js.
*   **Clave API de Gemini**: Necesaria para las funciones de IA (Fonología, Evolución, Generación de palabras).

## 🛠️ Instalación y Configuración

1.  **Instalar Dependencias**
    Ejecute el siguiente comando en la raíz del proyecto para descargar las librerías necesarias:
    ```bash
    npm install
    ```

2.  **Configurar Credenciales**
    *   Cree un archivo llamado `.env` en la raíz del proyecto.
    *   Puede copiar el archivo de ejemplo:
        ```bash
        cp .env.example .env
        ```
    *   Edite el archivo `.env` y agregue su clave:
        ```env
        GEMINI_API_KEY=su_clave_api_aquí
        ```

3.  **Ejecutar en Desarrollo**
    Inicie el servidor local:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en: `http://localhost:3000`

## 📦 Estructura del Proyecto

*   `src/components`: Componentes de React (UI).
*   `src/services`: Lógica de conexión con Gemini API.
*   `src/types`: Definiciones de tipos TypeScript.
*   `vite.config.ts`: Configuración del servidor de desarrollo y variables de entorno.

## ⚠️ Nota sobre Persistencia

Esta versión utiliza `localStorage` del navegador para guardar sus proyectos. Si borra la caché del navegador, perderá los datos no exportados. Utilice la opción "Export JSON" regularmente para respaldar su trabajo en su disco duro.