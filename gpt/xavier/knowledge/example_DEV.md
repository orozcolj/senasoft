Ejemplo 1: E-commerce (Dev, QA y QC - Definición y Verificación de un
Descuento)
Contexto: El equipo está definiendo una nueva funcionalidad para aplicar
descuentos automáticos a ciertos productos.
QA: Hola, [nombre del Dev]. Para los descuentos, ¿hay una regla específica? Por
ejemplo, si un producto tiene un descuento del 10%, ¿el precio final se debe
redondear? ¿O se muestran los decimales?
Dev: Buena pregunta. El precio final debe mostrarse con dos decimales, sin
redondeo.
QA: Entendido. Y para la verificación, [nombre del QC], cuando pruebes esta
función, asegúrate de que el precio no se redondee y de que el descuento se
aplique correctamente al total del carrito.
QC: ¡Claro! Anotado. Haré un par de pruebas con diferentes porcentajes de
descuento y con diferentes cantidades de productos.
Conclusión: El QA previene un posible error de cálculo al aclarar la regla del
negocio. El QC, con esa información, puede enfocar sus pruebas de manera más
precisa.
Ejemplo 2: Gestor de inventario (Dev, QA y QC - Reporte de un Error de
Rendimiento)
Contexto: Se ha implementado un nuevo módulo para generar reportes de
inventario a largo plazo.
QC: Hola, [nombre del Dev]. Encontré un problema al generar un reporte para el
último año. El sistema se demora casi un minuto en cargar. El reporte de un mes
se carga en segundos.
Dev: Mmm, eso suena a un problema de rendimiento en la base de datos.
Probablemente la consulta no está optimizada para manejar grandes volúmenes
de datos.
QA: Y para la experiencia del usuario, ¿hay alguna manera de mostrar un indicador
de carga para que el usuario sepa que la aplicación no se ha congelado?
Dev: Buena idea. Puedo agregar una barra de progreso que indique que el reporte
se está generando.
Conclusión: El QC detecta un problema de rendimiento. El Dev diagnostica la
causa, y el QA se asegura de que la solución también incluya una mejora en la
experiencia del usuario.
Ejemplo 3: App de pedidos (Dev, QA y QC - Aclarando la Lógica de
Notificaciones)
Contexto: El equipo está definiendo las notificaciones para el cliente sobre el
estado de su pedido.
QA: Hola, [nombre del Dev]. Cuando un pedido es entregado, ¿se debe enviar una
notificación push y un correo electrónico?
Dev: Sí, se deben enviar ambas notificaciones.
QA: Y, [nombre del QC], cuando pruebes las notificaciones, asegúrate de que el
texto en el correo y en la notificación push coincida con el estado del pedido. A
veces se envían textos genéricos.
QC: Entendido. Verificaré que el texto sea "Tu pedido ha sido entregado" en
ambas notificaciones.
Dev: Gracias. Eso me ayuda a asegurar que los mensajes estén bien definidos en
el código.
Conclusión: El QA aclara el canal de comunicación, y el QC confirma que la
implementación final sea consistente en todos los puntos de contacto con el
usuario.
Ejemplo 4: E-commerce (Dev, QA y QC - Definición y Verificación de un
Formulario)
Contexto: Se está creando el formulario para registrar un nuevo usuario.
QA: Hola, [nombre del Dev]. Para la contraseña, ¿hay algún requisito de
seguridad? Por ejemplo, ¿un mínimo de caracteres?
Dev: Sí. La contraseña debe tener al menos 8 caracteres, una mayúscula y un
número.
QA: Perfecto. [nombre del QC], asegúrate de probar con diferentes tipos de
contraseñas, como solo letras, menos de 8 caracteres, etc.
QC: Claro. Y si introduzco una contraseña incorrecta, ¿el mensaje de error debe
decir exactamente qué requisito no se cumple?
Dev: Sí, el mensaje debe ser específico, como: "La contraseña debe tener al
menos una mayúscula y un número."
Conclusión: El QA previene problemas de seguridad. El QC verifica que la
implementación cumpla con las reglas y que la retroalimentación al usuario sea
clara.
Ejemplo 5: Gestor de inventario (Dev, QA y QC - Reporte de un Error de
Usabilidad)
Contexto: Un Dev ha implementado una nueva barra de búsqueda para los
productos.
QC: Hola, [nombre del Dev]. Cuando busco un producto y la búsqueda no arroja
resultados, el sistema me muestra una página en blanco.
Dev: Eso no debería pasar. Debería mostrar un mensaje de "No se encontraron
resultados".
QA: Y, para la usabilidad, [nombre del Dev], ¿podríamos agregar sugerencias de
búsqueda o una sección de productos más vendidos para que el usuario no llegue
a una página vacía?
Dev: Es una excelente idea. La próxima vez, planeemos un flujo para cuando no
haya resultados, para que la experiencia no sea un callejón sin salida.
Conclusión: El QC reporta un error de usabilidad. El Dev lo corrige, y el QA
propone una mejora proactiva para optimizar la experiencia del usuario.
Ejemplo 6: App de pedidos (Dev, QA y QC - Ajustando la Lógica de
Cancelación)
Contexto: El equipo está implementando una función para que los clientes
cancelen sus pedidos.
QA: Hola, [nombre del Dev]. Si un pedido ya fue enviado, ¿el cliente aún puede
cancelarlo?
Dev: No. Si el pedido ya tiene el estado "Enviado", la opción de cancelar debe
desaparecer.
QC: Y si el cliente intenta cancelar y el pedido ya no se puede cancelar, ¿el botón
simplemente se deshabilita, o aparece un mensaje que explique por qué no se
puede cancelar?
Dev: El botón de "Cancelar" debe desaparecer, y se debe mostrar un mensaje que
diga "Este pedido ya no se puede cancelar".
Conclusión: El QA aclara una regla de negocio. El Dev ajusta la lógica de la
aplicación. El QC se asegura de que el comportamiento de la interfaz sea claro
para el usuario.
Ejemplo 7: E-commerce (Dev, QA y QC - Reporte de un Error de
Compatibilidad)
Contexto: Un Dev ha implementado la nueva página de inicio, y el QC la está
probando en diferentes dispositivos.
QC: Hola, [nombre del Dev]. La barra de navegación se ve muy bien en el
escritorio, pero en el iPad los elementos del menú se superponen y no se pueden
leer.
Dev: Gracias por el reporte. Probablemente es un error de responsive design. A
veces el diseño se rompe en pantallas con resoluciones intermedias.
QA: Y, [nombre del Dev], ¿estás utilizando alguna herramienta para garantizar que
el diseño se adapte a todas las resoluciones?
Dev: Estoy utilizando una librería de CSS, pero parece que no está funcionando
correctamente en ese rango.
Conclusión: El QC encuentra un bug de diseño que el Dev corrige. El QA, con su
visión más estratégica, se asegura de que la solución sea escalable para prevenir
futuros errores similares.
Ejemplo 8: Gestor de inventario (Dev, QA y QC - Definición y Verificación de la
Lógica de Filtros)
Contexto: Se está implementando una nueva función de filtrado en el inventario.
QA: Hola, [nombre del Dev]. Para la función de filtros, si selecciono más de una
categoría, ¿la búsqueda debe mostrarme los productos que pertenecen a
cualquiera de las categorías seleccionadas, o los que cumplen con todas?
Dev: Debe mostrar los productos que pertenecen a cualquiera de las categorías.
Es una lógica "O".
QA: Perfecto. [nombre del QC], cuando pruebes esta función, asegúrate de que si
filtras por "Ropa" y "Calzado", el sistema te muestre los productos que estén en
cualquiera de las dos categorías.
QC: Entendido. También haré pruebas con filtros que no arrojen resultados para
ver cómo se comporta el sistema.
Conclusión: El QA aclara una regla de negocio crucial para la funcionalidad de los
filtros. El Dev la implementa y el QC la verifica con pruebas específicas.
Ejemplo 9: App de pedidos (Dev, QA y QC - Aclarando los Mensajes de Error)
Contexto: El equipo está definiendo la lógica de errores al ingresar una dirección
incorrecta.
QA: Hola, [nombre del Dev]. Si el usuario ingresa una dirección que no existe, ¿el
mensaje de error debe ser general o específico?
Dev: Debe ser específico. El mensaje debe decir: "La dirección no es válida. Por
favor, revisa la calle y el número."
QA: Y, [nombre del QC], cuando pruebes esta función, asegúrate de que el
mensaje de error sea el correcto y de que el usuario no pueda continuar si los
datos de la dirección son incorrectos.
QC: Por supuesto. También probaré el sistema con direcciones que tengan
caracteres especiales para ver si la validación funciona correctamente.
Conclusión: El QA define los criterios para los mensajes de error, el Dev
implementa esa lógica, y el QC se encarga de probarla exhaustivamente,
incluyendo casos de prueba no convencionales.