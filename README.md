# *Data Lovers*
## *CodePoke*
## *Índice*

* [CodePoke](#CodePoke)
* [Resumen del producto](#CodePoke)
* [Definición del producto](#definición-del-producto)
* [Proceso del diseño](#proceso-del-diseño)
* [Encuesta aplicada](#parte-)

* [Prototipo de baja fidelidad](#prototipos)

* [Interacción en Terreno](# )

* [Prototipo de alta Fidelidad](#checklist)
* [Conclusiones](#CodePoke)
* [Aquí puedes visualizar nuestro trello](https://trello.com/b/Zv0LsmpF/data-love)
*
## *1. CodePoke*
 Es un proyecto encargado por Laboratoria que consiste en
 construir una interfaz complementaria, amigable y entendible por el usuario de la aplicacion Pokémon GO.

<img src="https://i.ibb.co/C7ZS8PF/pokemongo.jpg" alt="pokemongo" border="0">

Pokémon GO es un videojuego de realidad aumentada basado en la localización desarrollado por Niantic, Inc.1​2​ para dispositivos iOS y Android. Es un videojuego gratuito pero contiene microtransacciones. El juego consiste en buscar y capturar personajes de la saga Pokémon escondidos en ubicaciones del mundo real y luchar con ellos, lo que implica desplazarse físicamente por las calles de la ciudad para progresar. La aplicación comporta un elemento de interacción social, ya que promueve reuniones físicas de los usuarios en distintas ubicaciones de sus poblaciones.

## *2. Resumen del proyecto*

En este proyecto *construiremos una página web para visualizar un_conjunto de datos_* que se adecuaran a las necesidades de nuestro usuario tipo.
 Se eligió  pokémon data.
 * [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 151 Pokémon de la región de Kanto,
  junto con sus respectivas estadísticas usadas en el juego [Pokémon GO](https://pokemongolive.com).

El objetivo principal de este proyecto es que aprendamos a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

* Aplicar y profundizar todo lo que aprendiste en el proyecto anterior.
* Pensar en las *necesidades de los usuarios* para crear historias de usuario.
* Escribir y trabajar con *historias de usuario*, sus definiciones de
  terminado (definition of done) en la organización y planificación de tu
  trabajo.
* Definir qué data y de qué forma mostrarla en el producto, basándote en
  tu *entendimiento del usuario*.
* Crear productos que sigan los *principios básicos de diseño visual* y
  las *heurísticas de usabilidad*.
* Iterar el diseño del producto, basándote en los resultados de los
  *tests de usabilidad*.
* Manipular *arreglos (arrays) y objetos (objects)*.
* *Manipular el DOM* (agregar elementos dinámicamente basados en la data).
* *Manejar eventos del DOM* para permitir interacción con el usuario
  (filtrado, ordenado, ...).
* Entender los beneficios y complejidades de *trabajar en equipo* en un
  ambiente de incertidumbre.

Nuestro objetivo final es  una página web que permita *visualizar la data,filtrarla, ordenarla y hacer algún calculo agregado*. 
Como cálculo agregado de la data se muestra información  aún más relevante para los usuarios. Nuestra opción de cálculo estadístico es mostrar la cantidad de pokémons de cada tipo.

## * Proceso del diseño*
Una vez que definida nuestra area de interés, es con el usuario tipo donde centraremos el trabajo ya que necesitaremos su retroalimentación y luego podremos construir la interfaz que le ayude a interactuar y entender mejor esos datos.
Para ésto se difundió  una encuesta cuyo posterior análisis sirvio para realizar bocetos de baja fidelidad, con los que se realizaron entrevistas en terreno a usuarios de la aplicación
Pokémon Go.
Luego de la interaccion con los jugadores se logró definir historias de usuario  más acotadas a sus necesidades, tambien se adquirió mucha información respecto de sus reales necesidades, sin embargo, con la data disponible no nos fue posible dar esa cobertura más amplia, específica y actualizada.



## * Encuesta aplicada*
Se realizó una encuesta de usuario con la intención de  comprender mejor las preferencias y alcanzar los objetivos del proyecto en función de las necesidades de los usuarios y así analizar los aspectos en que debíamos enfocarnos.
La encuesta se dirigió a jugadores activos de la aplicación Pokémon Go.
https://forms.gle/CGWiLdH5KgDmoQU99
<a href="https://ibb.co/P45KTwg"><img src="https://i.ibb.co/P45KTwg/Captura-de-pantalla-2.png" alt="Captura-de-pantalla-2" border="0"></a>
<a href="https://ibb.co/qyLpBh6"><img src="https://i.ibb.co/qyLpBh6/Captura-de-pantalla-4.png" alt="Captura-de-pantalla-4" border="0"></a>
<a href="https://ibb.co/D1Vfg8Y"><img src="https://i.ibb.co/D1Vfg8Y/Captura-de-pantalla-6.png" alt="Captura-de-pantalla-6" border="0"></a>

### * Análisis de resultados *
<img src="https://i.ibb.co/9TgJd19/Captura-de-pantalla-30.png" alt="Captura-de-pantalla-30" border="0">
Al identificar el rango etario de nuestros usuarios se aprecia que mas del 50% de la muestra se encuentra entre 23 y 32 años y el 12% a niños entre 12 y 15 años.
<img src="https://i.ibb.co/xJ9CNVP/Captura-de-pantalla-32.png" alt="Captura-de-pantalla-32" border="0">
Existe un 9% más de hombres que mujeres que juegan Pokémon Go.
<img src="https://i.ibb.co/TKW8f3Z/Captura-de-pantalla-34.png" alt="Captura-de-pantalla-34" border="0">
Mayoritariamente los usuarios desacargan la aplicación por entretención y otros generalmente mayores de 28 años por nostalgia de la serie animada Pokémon.
<img src="https://i.ibb.co/zn4N5Bm/Captura-de-pantalla-36.png" alt="Captura-de-pantalla-36" border="0">
Los datos que los usuarios querían acceder son la evolución, el tipo y las debilidades de los pokemons mayoritariamente.
<img src="https://i.ibb.co/5cH9rPv/Captura-de-pantalla-38.png" alt="Captura-de-pantalla-38" border="0">
Como sumatoria más del 60% de los usuarios juegan más de tres veces a la semana, mientras que el 25% lo hace todos los dias.

<img src="https://i.ibb.co/cr8KX86/Captura-de-pantalla-23.png" alt="Captura-de-pantalla-23" border="0">
Para esta pregunta abierta se obtuvieron datos generales, pero que nos sirvieron posteriormente para realizar entrevistas y testeos de baja fidelidad.
<img src="https://i.ibb.co/wdYj5ML/Captura-de-pantalla-25.png" alt="Captura-de-pantalla-25" border="0">
El 81%, es decir, la mayoría de los usuarios ha competido  en gimnasios, un espacio virtual de batallas entre los pokemons seleccionados por los jugadores de acuerdo a sus poderes y debilidades.
<img src="https://i.ibb.co/41WfvCV/Captura-de-pantalla-28.png" alt="Captura-de-pantalla-28" border="0">
El 76% de los usuarios es capaz de identificar pokémons por su número.



### * Prototipos de baja fidelidad  *
<a href="https://ibb.co/vZSVpHN"><img src="https://i.ibb.co/vZSVpHN/Whats-App-Image-2019-05-09-at-09-29-07.jpg" alt="Whats-App-Image-2019-05-09-at-09-29-07" border="0"></a>
<a href="https://ibb.co/gM13cBB"><img src="https://i.ibb.co/gM13cBB/Whats-App-Image-2019-05-09-at-09-29-08.jpg" alt="Whats-App-Image-2019-05-09-at-09-29-08" border="0"></a>
<a href="https://ibb.co/N9KQpZW"><img src="https://i.ibb.co/N9KQpZW/Whats-App-Image-2019-05-09-at-09-29-15.jpg" alt="Whats-App-Image-2019-05-09-at-09-29-15" border="0"></a>
<a href="https://ibb.co/R2t58Km"><img src="https://i.ibb.co/R2t58Km/Whats-App-Image-2019-05-09-at-09-29-14.jpg" alt="Whats-App-Image-2019-05-09-at-09-29-14" border="0"></a>
<a href="https://ibb.co/RbsWg3V"><img src="https://i.ibb.co/RbsWg3V/Whats-App-Image-2019-05-09-at-09-29-09.jpg" alt="Whats-App-Image-2019-05-09-at-09-29-09" border="0"></a>

### * Interaccion en terreno*
Se hizo una visita al parque forestal situado en la comuna de Santiago y se abordó a jugadores de la aplicación Pokémon Go.
<img src="https://i.ibb.co/K96yrR5/Captura-de-pantalla-43.png" alt="Captura-de-pantalla-43" border="0">
https://youtu.be/nJ9pbH1Typ8

<img src="https://i.ibb.co/bPbxhjZ/Captura-de-pantalla-41.png" alt="Captura-de-pantalla-41" border="0">

https://youtu.be/13rQFdUCMds 

## *Historias de Usuario*
Los usuarios de CodePoke son jugadores activos de la aplicacion 
Pokémon Go.
*Como* jugador principiante
*Quiero* seleccionar los pokemons
 de tipo agua.
*Para* conocer mejor las caracteristicas de mis pokémons.

*Como* jugador avanzado
*Quiero* filtrar pokémons por sus debilidades.
*Para* tener mejor elegir los pokémons en una batalla de gimnasio.

*Como* jugador principiante,
*Quiero* ordenar los pokemones en orden alfabetico
*Para* llegar mas facil a aquello que estan al final de la lista.

*Resultado*

En el link siguiente puedes acceder a una demostración de la aplicación y experimentar con sus resultados y proceso de funcionamiento [link](https://jensarela.github.io/SCL009-data-lovers/src/index.html)


### * Prototipos de Alta fidelidad  *

Desarrollado en Figma, y exportado a Zeplin [aquí puedes visualizar](https://scene.zeplin.io/project/5cd4bb0920f8ff5736ed32a5)
