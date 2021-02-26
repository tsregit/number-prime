# Generar Números Primos

Projecto en NodeJS para generar números primos desde 1 hasta el numero ingresado por consola.

## Comenzando

_Estas instrucciones te permitirán ejecutar el projecto en tu local_


```
npm install
npm run dev
```

## Docker 🚀

_Estas instrucciones te permitirán crear una image y crear un contenedor con distintos numeros de entradaa través de la variable **HIGHER_NUMBER**_

```
docker build -t image-number-prime .
docker run --rm --env HIGHER_NUMBER=10 image-number-prime
```

