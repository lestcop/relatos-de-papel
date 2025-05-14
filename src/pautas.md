Pautas de elaboración

Esta actividad abarca la creación del front-end de una aplicación web haciendo uso de los lenguajes estudiado: HTML, CSS y JavaScript. Además, haremos uso de la librería React.

El front-end desarrollado deberá hacer uso de los principales conceptos que se han estudiado:

	Uso de la librería React para construir un frontal que utilice componentes funcionales (mínimo de diez) y que haga uso de de JSX (por ende, HTML).
	Uso al menos de los hooks estudiados más importantes, useState y useEffect.
	Implementación de un custom hook a elección.
	Uso de React Router para implementar diferentes rutas en la aplicación (mínimo de cuatro).
	Aplicar estilos mediante hojas de estilo CSS. Se permite utilizar Bootstrap, Tailwind y SCSS, pero se debe seguir la metodología BEM.

La temática de la aplicación girará en torno al proyecto transversal del máster. Así pues, la funcionalidad mínima necesaria que se debe cubrir es la siguiente:

	Vista de acceso: muestra una landing. Se redireccionará al usuario a la vista de página principal a los cinco segundos si no realiza ninguna acción.
	Vista de página principal: muestra una página principal donde se puedan encontrar algunos de los libros que se venden en la aplicación web. Se dispondrá de una barra de búsqueda en la parte superior que permitirá en el futuro buscar por cualquier término asociado a un libro (autor, código de libro, título de libro…). A los efectos de esta actividad, únicamente filtrará por título de libro. Al hacer clic en un libro, se redirigirá a la vista de libro.
	Vista de libro: muestra los detalles de un libro en concreto y permite añadirlo al carrito.
	Carrito: tanto en la vista de la página principal como en la de libro, será visible el carrito (ya sea en todo momento o mediante una animación desplegable), donde estarán todos aquellos libros que el usuario haya decidido comprar. Este podrá eliminar libros del carrito o proceder al checkout.
	Vista de checkout: el usuario verá un resumen de los libros que va a comprar y, si está conforme, podrá proceder al pago. A los efectos de esta actividad, el pago satisfactorio consiste en mostrar una alerta de que el pedido se ha realizado, vaciar el carrito y redirigir a la vista de la página principal (en este orden).

Para no complicar el desarrollo, no será obligatorio incluir en la aplicación ningún mecanismo de login. Asumiremos que la aplicación se usa de forma anónima.

Dado que no trabajaremos con ninguna base de datos ni con back-end en esta actividad, para poder mostrar datos en las pantallas, utilizaremos datos de prueba (mocks). En este punto, no es necesario que el frontal realice peticiones por HTTP para obtener datos del back-end. Si lo deseas, puedes usar API de datos estáticos de prueba (públicos en Internet).
