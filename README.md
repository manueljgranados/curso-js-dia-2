Practica A
- ¿Qué ha pasado al ejecutar hello-world? Se ha descargado la imagen del repositorio, se ha creado un contenedor "hello-world" y se ha ejecutado.
- ¿Qué mensajes ha mostrado? Muestra la descarga de la imagen y al ejecutar el contenedor muestra los textos-iconos de hello-world.
- ¿Qué diferencia hay entre una imagen y un contenedor? Una imagen es un esquema y un contenedor es una "instancia de imagen" (una equivalencia con POO podría ser: imagen=clase contenedor=objeto)
- ¿Docker ha instalado Apache en tu sistema o lo ha ejecutado de forma aislada? Ha descargado una imagen de Apache, ha creado un contenedor y lo ha ejecutado con los parámetros que se le han pasado, es decir, se está ejecutando en un contenedor pero no está instalado en el sistema.
- ¿Qué significa -p 8080:80? Se vincula el puerto 8080 del host (sistema del PC) con el puerto 80 del contenedor.
- ¿Por qué tiene dos números? El primero define el puerto del HOST y el segundo el del contenedor.
- ¿Qué pasaría si modificas el index.html mientras el contenedor está corriendo? Nada, al refrescar el navegador se muestran los cambios

Practica B
- ¿Qué es un repositorio? Un espacio en el que guardar ficheros (usualmente de código) con sus versiones a lo largo del tiempo.
- ¿Para qué sirve? Para mantener de forma centralizada la información importante de un proyecto con su historial de cambios.
- ¿Qué es un commit? Es un punto en el historial en el que se guardan cambios del proyecto. Es cada paso del historial.
- ¿Por qué son importantes los mensajes de commit? Porque se deben usar para describir los cambios producidos en ese punto del historial.
- ¿Qué diferencia hay entre Git y GitHub?
  - Git: sistema de gestión de versiones
  - GitHub: Alojamiento donde se puede centralizar el control de versiones con Git. Incluye herramientas CI/CD.
- ¿Qué hace el comando git push? Sube a GitHub los cambios realizados en el git local.
- ¿Qué hace el comando git pull? Descarga los cambios de un proyecto (o un proyecto entero si no está el sitio desde el que se hace)

Práctica C
- Subida de código