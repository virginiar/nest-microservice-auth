<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Nest-MicroServices - Auth microservice

Repositorio para el microservicio Auth de la aplicación Products realizada en [Nest](https://github.com/nestjs/nest). 
Basado en el curso de "NestJs + Microservicios: Aplicaciones escalables y modulares" de [DevTalles](https://cursos.devtalles.com/) en Udemy.

## Configuración del proyecto

1. Instalar NestJS CLI

```bash
$ npm i -g @nestjs/cli
```

2. Clonar el repositorio

3. Instalar las dependencias

```bash
$ npm install
```

4. Ejecutar el proyecto

```bash
$ npm run start:dev
```

## Aspectos estudiados

En este repositorio se trabajan los siguientes aspectos de Nest:
- Decoradores personalizados
- MongoDB
- Prisma con MongoDB
- JWTs, firma y regeneración
- Revalidación
- Guards

## Librerías necesarias

Para la gestión de microservicios:

```bash
$ npm i --save @nestjs/microservices
```

Para utilizar NATS para las comunicaciones del microservicio:

```bash
$ npm i --save nats
```

Para la gestión de variables de entorno:

```bash
$ npm install dotenv
```

Para los esquemas de validación:

```bash
$ npm install joi
```

Para las validaciones de datos se utilizan:

```bash
$ npm install class-validator class-transformer
```
