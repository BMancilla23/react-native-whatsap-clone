# WhatsApp Clone

## Descripción

El **WhatsApp Clone** es una aplicación desarrollada en React Native que replica la funcionalidad básica y la experiencia de usuario de WhatsApp, enfocándose en el diseño y la usabilidad de las características más populares de la plataforma de mensajería. La app permite a los usuarios acceder a diversas secciones y funcionalidades, como chats, llamadas, comunidades y novedades, con un diseño profesional y adaptable tanto a dispositivos móviles iOS como Android. Esta aplicación incluye una estructura de navegación modular y características avanzadas como el acceso a la cámara, un buscador dinámico y listas de usuarios y canales.

## Características

- **Tabs de Navegación**: La aplicación incluye una navegación tabulada con las siguientes secciones principales:

  - **Chats**: Lista de conversaciones y opción para iniciar un chat con usuarios individuales.
  - **Updates**: Pantalla de novedades que muestra una lista de canales y actualizaciones.
  - **Communities**: Espacio para visualizar y gestionar comunidades de usuarios.
  - **Calls**: Lista de llamadas recientes y opción para iniciar llamadas.

- **Header Dinámico con Buscador**: Un buscador flexible y profesional en el header, que permite a los usuarios encontrar rápidamente contactos, comunidades o llamadas recientes.

- **Lista de Chats y Chat por Usuario**: La aplicación muestra una lista de todos los chats activos, con la posibilidad de abrir una conversación individual y enviar mensajes.

- **Lista de Canales y Lista de Comunidades**: Acceso organizado a los canales y comunidades disponibles, con opciones para explorar y unirse a comunidades.

- **Lista de Llamadas y Pantalla para Llamar por Usuario**: Registro de llamadas anteriores y acceso a la pantalla de llamada para interactuar directamente con otros usuarios.

- **Pantalla de Cámara con Expo Camera**: Funcionalidad de cámara para capturar imágenes y compartirlas directamente en los chats, utilizando la API de `expo-camera` para una integración sencilla y eficaz.

## Instalación

Para instalar y ejecutar el proyecto en tu entorno local, sigue estos pasos:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/BMancilla23/react-native-whatsapp-clone.git
   ```

2. **Navega al directorio del proyecto**:

   ```bash
   cd whatsapp-clone
   ```

3. **Instala las dependencias**:

   ```bash
   npm install
   ```

4. **Inicia la aplicación en el simulador o en un dispositivo físico**:

   ```bash
   npx expo start
   ```

## Vista previa del proyecto

| Pantalla        | Vista Previa                                          | Descripción                                          |
| --------------- | ----------------------------------------------------- | ---------------------------------------------------- |
| **Chats**       | ![Vista de chats](/docs/images/chats.png)             | Lista de conversaciones y opción de chat.            |
| **Updates**     | ![Vista de updates](/docs/images/updates.png)         | Pantalla de novedades con canales y actualizaciones. |
| **Communities** | ![Vista de communities](/docs/images/communities.png) | Gestión y visualización de comunidades.              |
| **Calls**       | ![Vista de calls](/docs/images/calls.png)             | Registro de llamadas recientes.                      |
| **Chat User**   | ![Vista de chat-user](/docs/images/chat-user.png)     | Vista de conversación individual.                    |
| **Call User**   | ![Vista de call-user](/docs/images/call-user.png)     | Pantalla de llamada con un usuario.                  |
| **Camera**      | ![Vista de camera](/docs/images/camera.png)           | Funcionalidad de cámara integrada en la app.         |

## Pruebas Unitarias

Las pruebas unitarias están diseñadas para garantizar el correcto funcionamiento de los endpoints de la API. Para ejecutarlas, utiliza el siguiente comando:

```bash
npm run test
```

## Licencia

Este proyecto está licenciado bajo la Licencia [MIT](URL_DE_LICENCIA).
