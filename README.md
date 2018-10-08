# background-slider

Una directiva para AngularJS para colocar una presentación en el fondo de una página web.

## Instalación

Clona el repositorio usando `git clone https://github.com/smartinan18/background-slider.git` en el directorio en el que quieras trabajar.

## Uso

Una vez clones el repositorio, puedes abrir `index.html` para ver como funciona.

Si quieres usar esta directiva en tu propio proyecto, sigue estos pasos:

1. Agrega el script de AngularJS a tu archivo HTML si no lo tienes aún. `<script>https://ajax.googleapis.com/ajax/libs/angularjs/1.7.4/angular.min.js</script>`. Si usas `bower` o `npm`, ejecuta uno de estos comandos desde el directorio raiz de tu proyecto:

   `bower install angular#1.7.4`

   `npm install angular@1.7.4`

2. Copia el fichero `main.js` a tu proyecto. Este fichero tiene descrita la directiva. Para poder personalizarla, habra que tener en cuenta las siguientes secciones del fichero:

    2.1. `vm.images`: Este array incluye las rutas a las imagenes que va a usar la directiva. Incluye tantas como quieras.

    2.2. `vm.button`: Este array indica cuantos botones hay para elegir imagenes. Tiene que haber tantos como imagenes hayas puesto antes. El texto `active` o `inactive` indica cual es la imagen que se esta viendo en ese momento.

    2.3. `<div class="buttons">...</div>`: Este `div` esta dentro de la plantilla de la directiva. Dentro tendrás que colocar tantos botones como imagenes has colocado previamente, siguiendo el ejemplo que esta escrito.

3. Para usar la directiva, llámala con una etiqueta HTML así: `<bg-slider></bg-slider>`

## Licencia

Este proyecto usa la licencia MIT. Para más información, lee el fichero [LICENSE](LICENSE).