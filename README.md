# Curso Profesional de Next.js
  - Movemos las carpetas de pages y styles a "src"

  ## Configuración de ESLint y Prettier
      - npm i eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-prettier prettier -D
      - npm run eslint "nos muestra los errores que podamos tener segun la configuración que establecimos"
      - npm run eslint:fix
  ## Integrando PostCSS y TailwindCSS a nuestro proyecto
      - npm i postcss tailwindcss autoprefixer
      - npx tailwindcss init -p 
  ## Configuración del archivo jsconfig.js
      - Configuracion del archivo jsconfig.json
  ## Cómo integrar componentes predefinidos con TailwindUI
      - https://headlessui.dev/ "npm install @headlessui/react"
      - https://tailwindui.com/
      - https://heroicons.com/ "Instalación npm install @heroicons/react"
      - https://tailwindui.com/components/marketing/sections/heroes "UI que usaremos"
  ## Commons Components
      - Trayendo elementos de esta pagina "https://github.com/GNDX/NEXTJS-UI"
  ## Creación del layout principal e integración de los Page Components
      - Creación de nuestro Layout principal.
  ## Creando la lógica del componente login
      - Trabajando en el Login
  ## Presentación de la API
      - Usando esta API https://api.escuelajs.co/docs/#/
  ## Creación del custom hook useAuth
      - Uso de cookie y de axios.
      - Instalación npm install js-cookie axios
  ## Autenticándonos en la API usando Axios
  ## Obteniendo el token de la API
      - Uso de cookies y desarrollando la muestra de errores al momento de iniciar login.
  ## Guardado del token en una cookie para mantener la sesión
      - Manteniendo la sesión del usuario.
  ## Usando nuestro useAuth para cargar la información del usuario
      - Cargando la información del usuario dentro del dashboard.
      - Generar un imagen basado en la información "https://ui-avatars.com/"
  ## Creando el componente Chart
      - Creando el componente Chart construcción de gráficas. npm install chart.js react-chartjs-2.
      - UI https://daisyui.com/
      - Chart https://www.chartjs.org/
  ## Conexión del modal para crear productos
      - Utlizaremos UI https://tailwindui.com/components/application-ui/headings/page-headings
  ## Construcción del formulario para crear nuevos productos
      - https://tailwindui.com/components/application-ui/forms/form-layouts "UI que usaremos"
      - Instalación del recurso para formularios dentro de tailwind "npm i @tailwindcss/forms"
      - Esquema como debemos añadir nuevos productos "https://api.escuelajs.co/docs/#/products/ProductsController_create"
      - Para validación de datos podemos usar "npm install react-hook-form"
  ## Inserción de los datos del producto en la API
      - Envio de datos a la API.
  ## Creación del componente Alert
      - Cuando un archivo fue agregado dentro de la lista de productos.
  ## Implementación de nuestro componente Alert
      - Desencadenar la alerta al obtener un nuevo producto.
  ## Eliminando productos de la API
      - Eliminación de productos.
  ## Creación y cargado de datos para actualizar un producto
      - Actualización del producto "Edición".
      - http://localhost:3000/dashboard/edit/"numero de id"