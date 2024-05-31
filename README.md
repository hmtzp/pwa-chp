

# Evaluacion Frontend

Para la ejecucion y visualizacion de este proyecto es necesario:

1. Clonar el repositorio

2. Abrir la aplicacion de Docker

3. Nos posicionamos en la carpeta raiz del proyecto, en este caso 'pwa-chp'

4. Ejecutamos el comando 'sh docker/run-docker'

5. Al terminar de construir el proyecto y los contenedores nos dirigimos a la ruta "[https://](https://pwa-docker.localhost:8080/)"

De esta forma visualizaremos el avance del proyecto.

Este proyecto es una implementación personalizada del PWA Studio de Magento, con un enfoque en la mejora visual de acuerdo a los mockups presentados en los siguientes enlaces:
- https://xd.adobe.com/view/37b7752d-f96f-4c2d-9553-66d32d4aedbd-62e4/
- https://xd.adobe.com/view/40ad0519-4b53-496e-bc90-d2dd14939a87-15fe/screen/e90c3528-a623-4031-b8c9-758e117fd064

Todos los cambios realizados están destinados a personalizar la apariencia y la experiencia del usuario sin alterar las funcionalidades subyacentes del sitio web.

# Cambios Realizados
Componentes Modificados:

- AccountChip
Fue necesario modificar el icono nativo por el brindado en el diseño, asi como los estilos de los divs contenedores
accountChip.js
accountChip.module.css
AccountMenu
accountMenu.module.css


- Button
Para los botones, se generalizo el primary-button, para dar la aperiencia allegada al diseño y a los colores de la marca
button.module.css

- Fields
Retomando la parte de los iconos, fue necesario intervenir de diferentes componentes los iconos a cambiar, asi como sus estilos
FieldIcons
fieldIcons.js
fieldIcons.module.css


- MiniCart
Se actualizaron los estilos para alinear los íconos de campo con el nuevo diseño visual del carrito
cartTrigger.js
cartTrigger.module.css
item.module.css
miniCart.module.css

- Header
El Header presento los cambios estructurales mas grandes, añadiendo contenedores nuevos para la manipulacion de mediaqueries
header.js
header.module.css

- Storeswitcher
El storeswitcher se utilizo como banner de promociones, en este caso se añadio un texto en duro para lograr el objetivo
storeSwitcher.js
storeSwitcher.module.css

- Iconos
Se añadieron reglas nuevas para apuntar y definir tamaños de iconos agregados.
icon.module.css

- Image
El generalizar los estilos de las imagenes con diferentes componentes fue una de las tareas, pues me percate que ninguna imagen contaba con borde, entre otras propiedades.
image.js

- Logo
El cambio de logo, implico el ajuste de este componente, por lo que se hizo lo correspondiente al agregar el logo de la tienda y el ajuste de tamaño adecuado.
logo.js

- Megamenu
El megamenu, que forma parte del HGeader, fue el que sufrio un cambio de estructura, aun con algunos cambios por integrar, no deja de ser funcional.
MegaMenu
megaMenu.module.css
megaMenuItem.module.css
submenu.module.css

- Account
Entre algunos de los componentes de esta seccion, fueron necesarios añadir ciertos cambios que requeria cambio de estilos principalmente.
password.module.css
signIn.module.css
index.js

- SearchBar
La barra de busqueda fue una integracion mas completa, añadiendo tabs de tiendas en las que se desea hacer la busqueda con identificadores en cada uno de ellos, la funcionalidad no llegue a integrarla por completo, pues sigue haciendo la busqueda nativa del tema, me enfoque en la parte visual.
searchBar.js
searchBar.module.css

- Variables
Se añadio una variable de color, la cual equivale al predominante que es el naranja y el rojo.
tokens.module.css

# Archivos nuevos añadidos:

- Se creo un visualizador de la consulta solicitada que funcionaria como category
packages/venia-ui/lib/App.js

- Se configuro apoloclient para interactuar con la API de GraphQL
packages/venia-ui/lib/apolloClient.js

- Se creo un componente el cual funcionaria como custom category view en donde se renderizan los productos de la consulta
packages/venia-ui/lib/components/CategoryProducts/CategoryProducts.js


- Se creo tambien un componente ProductCard, para recibir los datos consultados por item y renderizarlo en una tarjeta.
packages/venia-ui/lib/components/ProductCard/ProductCard.js
packages/venia-ui/lib/components/ProductCard/ProductCard.module.css

- Se creo el archivo que contiene una consulta GraphQL, esto para escabilidad y organizacion de codigo
packages/venia-ui/lib/queries.js

- Se crearon hooks personalizados para una mejor organizacion y mantenimiento.
packages/venia-ui/lib/talons/useCategoryProducts.js
packages/venia-ui/lib/talons/useSearchProducts.js

* En este release no se obtubieron resultados positivos a la busqueda y renderizacion de la consulta.

- Imagenes nuevas necesarias.
packages/venia-ui/lib/components/Logo/ChupapreciosLogotipo.png
packages/venia-ui/lib/components/Header/cart.svg
packages/venia-ui/lib/components/SearchBar/Amazon_logo.png
packages/venia-ui/lib/components/SearchBar/eb.png
packages/venia-ui/lib/components/SearchBar/hdep.png
packages/venia-ui/lib/components/SearchBar/wm.png
packages/venia-ui/lib/components/AccountChip/account.svg

# Conclusión
En este Release del evaluacion se entrega de manera parcial, pero con una buena cantidad de puntos a evaluar, enfocandome en el detalle de los estilos y diseño sin perder la funcionalidad y obteniendo recursos que fueran acorde a los mockups, ya que solo se tiene permiso de visualizacion y no es posible obtener recursos.
