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

3. Para usar la directiva, llámala con una etiqueta HTML así: `<bg-slider images="image1.jpg,image2.jpg,...,imageN.jpg"></bg-slider>`

    Las imágenes que vayas a usar colócalas separadas por comas como en el ejemplo.

## Licencia

Este proyecto usa la licencia MIT. Para más información, lee el fichero [LICENSE](LICENSE).