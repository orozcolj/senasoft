Ejemplo 1: E-commerce (Definiendo una tarea de la ficha de producto)
Contexto: El equipo está construyendo una tienda en línea y está definiendo la
página de detalle del producto. La historia de usuario dice: "Como cliente, quiero
ver el precio y la disponibilidad del producto".
QA: Hola, [nombre del Dev]. Estoy revisando la historia de usuario para la ficha de
producto. ¿Qué debería pasar si un producto no está en stock?
Dev: Buena pregunta. Para el lanzamiento, si un producto está agotado, el botón
de "Agregar al carrito" debería desaparecer y mostrar un texto que diga: "Producto
agotado".
QA: Entendido. ¿Y qué pasa si hay variantes de producto, como tallas o colores?
Si una talla específica está agotada, ¿solo debería deshabilitarse esa opción o
toda la ficha de producto?
Dev: Solo se deshabilitaría la opción de la talla agotada. El cliente debería poder
seguir viendo y seleccionando otras tallas disponibles.
Conclusión: En esta interacción, el QA asegura que se definan los estados del
producto que no se mencionaron inicialmente en la historia de usuario,
previniendo ambigüedades en la implementación y la posterior prueba.
Ejemplo 2: Gestor de inventario (Reportando un bug de cálculo)
Contexto: Se está probando la función de entrada de nuevos productos. La
funcionalidad debería actualizar el stock total sumando la cantidad ingresada.
QC: Hola, [nombre del Dev]. Encontré un problema al probar la función de "Añadir
stock".
Dev: ¿Qué sucede?
QC: Cuando agrego 10 unidades a un producto que ya tenía 5, el stock final
muestra 15, pero el valor de "Stock disponible" en la lista general de productos
sigue en 5. Solo se actualiza al recargar la página.
Dev: Ah, parece que la vista de la lista no se está actualizando automáticamente
después de la operación. Gracias por el reporte tan detallado, me ayuda a saber
exactamente dónde buscar. ¿Podrías crear un ticket?
Conclusión: El QC detecta un fallo de sincronización en la interfaz que, aunque no
es un error crítico, afecta la usabilidad. El reporte detallado permite al Dev
identificar rápidamente la causa y aplicar la corrección necesaria.
Ejemplo 3: App de pedidos (Asegurando la experiencia de usuario)
Contexto: Se está implementando el flujo de pago. El cliente finaliza su pedido y el
sistema debe mostrar una confirmación.
QA: Hola, [nombre del Dev]. ¿Cómo manejamos el estado final del pedido? ¿Qué
ve el usuario después de hacer clic en "Confirmar pago"?
Dev: La idea es que se muestre una pantalla de éxito con el número de pedido y un
mensaje de "¡Gracias por tu compra!".
QA: Perfecto. ¿Y si el pago falla por alguna razón? ¿El usuario simplemente
regresa a la pantalla anterior o mostramos un mensaje específico?
Dev: Si el pago es rechazado, la pantalla debe mostrar un mensaje claro como: "El
pago no pudo procesarse. Por favor, revisa tus datos de pago e inténtalo de
nuevo".
Conclusión: El QA anticipa posibles escenarios negativos (pago fallido) y se
asegura de que haya una experiencia de usuario clara y útil para el cliente,
evitando frustraciones.
Ejemplo 4: E-commerce (Definiendo la lógica de un cupón)
Contexto: Se está agregando una nueva funcionalidad para aplicar cupones de
descuento en el carrito de compras.
QA: Hola, [nombre del Dev]. Para los cupones, ¿se pueden usar varias veces? ¿Y
qué pasa si se introduce un cupón que ya ha expirado?
Dev: Un cupón solo puede ser usado una vez por cliente. Si un cliente intenta usar
un cupón expirado o ya utilizado, el sistema debe mostrar un mensaje de error que
diga "El cupón no es válido".
QA: ¿Hay algún tipo de cupón con un mínimo de compra?
Dev: Por ahora no, pero si lo vamos a agregar, el sistema debe asegurarse de que
si el valor total del carrito no cumple con el mínimo, el cupón no se aplique y el
usuario reciba un mensaje informándole por qué no se puede aplicar el cupón.
Conclusión: El QA define los criterios de validación de los cupones, lo que ayuda a
evitar problemas de seguridad y usabilidad y garantiza que el comportamiento del
cupón sea consistente.
Ejemplo 5: Gestor de inventario (Reportando un problema de permisos)
Contexto: Un nuevo usuario con permisos limitados intenta acceder a una función
de la aplicación.
QC: [nombre del Dev], acabo de probar con un usuario que tiene el rol de
"Bodeguero" y pude ver la pantalla de "Eliminar productos", pero el botón de
"Eliminar" está activo. Según la documentación, solo los administradores
deberían poder hacer eso.
Dev: ¡Vaya! Eso es un error de seguridad grave. Gracias por encontrarlo. Es
probable que se me haya pasado por alto una validación de permisos en esa
pantalla en particular.
Conclusión: El QC identifica un error crítico de seguridad. Este tipo de hallazgos
son esenciales para proteger los datos y las funciones de la aplicación y
demuestran la importancia de probar los diferentes roles de usuario.
Ejemplo 6: App de pedidos (Ajustando la validación del formulario)
Contexto: El usuario ingresa su dirección de envío.
QC: Hola, [nombre del Dev]. Encontré un problema en la validación del campo
"Código Postal" en el formulario de envío. Si pongo letras, en lugar de un mensaje
de error, la aplicación se congela.
Dev: Eso no debería pasar. Seguramente hay un problema en el tipo de dato que
estoy validando. En lugar de fallar, debería mostrar un mensaje de error claro al
usuario, como: "Por favor, introduce un código postal válido".
Conclusión: El QC encuentra un error de validación que causa una mala
experiencia. La comunicación entre el Dev y el QC asegura que el error se corrija
de manera que el sistema sea más robusto y amigable para el usuario.
Ejemplo 7: Aplicación de reservas (Reportando un bug de visualización)
Contexto: Un usuario está buscando una fecha para hacer una reserva.
QC: Hola, [nombre del Dev]. Descubrí un error al probar la aplicación en la
pantalla de reservas. Los días festivos se ven un poco raros en el calendario.
Dev: ¿A qué te refieres?
QC: El texto que dice "Día Festivo" se superpone con el número del día. Funciona,
pero se ve mal.
Dev: ¡Ah, ya veo! Eso es un problema de estilo. Lo corrijo de inmediato, gracias por
encontrarlo.
Conclusión: El QC detecta un bug de diseño que no afecta la funcionalidad, pero
sí la experiencia del usuario. La comunicación fluida permite que estos problemas
se resuelvan rápidamente.
Ejemplo 8: Gestor de contenido (Definiendo una regla de guardado)
Contexto: Se está implementando la función de guardado automático para un
editor de texto.
QA: [nombre del Dev], estamos diseñando la función de guardado automático.
¿Se debe guardar cada vez que el usuario escribe algo o cada cierto tiempo?
Dev: Para no saturar el servidor, establezcamos un temporizador. La aplicación
debería guardar cada 60 segundos después de la última vez que el usuario
escribió algo.
QA: ¿Y qué pasa si el usuario sale de la página antes de que se cumplan esos 60
segundos?
Dev: Buena pregunta. Si el usuario intenta salir y hay cambios sin guardar,
debemos mostrar un mensaje de advertencia que diga: "Tienes cambios sin
guardar. ¿Deseas salir de la página?".
Conclusión: El QA ayuda a definir la lógica de una característica compleja,
asegurando que se contemplen todos los posibles escenarios y se proteja el
trabajo del usuario.
Ejemplo 9: Red social (Reportando un problema de usabilidad)
Contexto: Un usuario intenta subir una foto a su perfil.
QC: [nombre del Dev], encontré un problema de usabilidad en la función de subir
fotos.
Dev: ¿Qué pasa?
QC: Si subo una foto muy grande, el botón de "Subir" no cambia de estado. No hay
un indicador que muestre que el archivo se está subiendo, y el usuario podría
pensar que la aplicación no funciona.
Dev: Tienes razón. Para archivos grandes, el botón debería mostrar un
"Cargando..." o una barra de progreso. Lo corrijo para que sea más claro para el
usuario.
Conclusión: El QC no encuentra un error funcional, sino una oportunidad de
mejora en la experiencia del usuario. Su reporte ayuda a que el desarrollador
implemente una solución que haga la aplicación más intuitiva y transparente.