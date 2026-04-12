---
title: 'Análisis y Diseño de Sistemas: Caso "Sistema de Comedor UNET"'
description: 'Análisis y diseño de sistemas aplicado al proyecto de digitalización del comedor universitario, destacando las fases de análisis, estudio de viabilidad, definición de requisitos y selección de tecnologías.'
pubDate: 'Apr 12 2026'
heroImage: '../../assets/trabajo_final.svg'
stylePreset: 'sunrise'
---

## 1. Fases del Análisis de Sistemas Aplicadas al Proyecto

### 1.1. Inicio del Análisis: Contextualización

La disciplina del análisis de sistemas fue la brújula de este proyecto. Antes de escribir código, nos permitió entender que el problema no era solo tecnológico, sino logístico. Al analizar el "negocio" del comedor, identificamos que la eficiencia en la validación es el factor crítico para reducir las colas y garantizar que los recursos lleguen a los estudiantes de forma justa. Esta disciplina nos guio para pasar de un proceso manual y lento a una arquitectura digital basada en roles (Admin y Estudiante).

### 1.2. Fase de Inspección: Estudio de Viabilidad del Proyecto

Determinamos la factibilidad del sistema bajo tres pilares:

* **Viabilidad Técnica:** El equipo posee el dominio de Go para el backend y Astro para el frontend. Al ser herramientas modernas y ligeras, se adaptan perfectamente a la infraestructura de servidores de la universidad.
* **Viabilidad Económica:** Se reduce el gasto operativo en la impresión de tickets físicos. Además, al usar tecnologías Open Source (PostgreSQL, Linux), no hay costos de licencias, maximizando el beneficio institucional.
* **Viabilidad Operativa:** El sistema reemplaza el ticket físico por un QR digital. Esto es fácil de adoptar por los estudiantes y agiliza el trabajo del personal de distribución, eliminando el manejo manual de papel.
* **Técnicas utilizadas:** Entrevistas preliminares con el personal operativo y análisis de riesgos de concurrencia.
* **Producto:** Informe de Viabilidad que confirma que el proyecto es factible y de alto impacto.

### 1.3. Fase de Estudio: Análisis del Sistema Actual (AS IS)

Para diseñar la solución, primero desglosamos las fallas del modelo vigente:

* **Descripción del Proceso:** Actualmente, el comedor utiliza un sistema de lectura de carnet universitario para validar duplicados. Sin embargo, el proceso depende de la entrega de **tickets físicos** en la fila. Esto genera colas extensas y un flujo lento por orden de llegada.
* **Modelado del Sistema Actual:** Se elaboró un diagrama de flujo (adjunto en la documentación) que muestra el cuello de botella al momento de la entrega del ticket físico y la validación manual en la entrada.
* **Técnicas e Instrumentos:** Se utilizó la observación directa en las instalaciones y una entrevista estructurada con las siguientes interrogantes:
    1. *¿Cómo se lleva actualmente el conteo de los platos servidos frente a los planificados?*
    2. *¿Cuáles son las mayores demoras al momento de validar el acceso de un estudiante al comedor?*
    3. *¿Cómo se maneja la información de los menús diarios para que los estudiantes la conozcan?*
* **Producto:** Diagnóstico del sistema actual, destacando la ineficiencia del uso de papel y la necesidad de una validación digital instantánea.

### 1.4. Fase de Definición: Requisitos del Sistema

Definimos lo que el sistema "debe ser" para superar las limitaciones actuales:

* **Requisitos Funcionales:** Gestión de menús por el chef, reserva de cupos digital, generación de tickets QR personales y validación mediante escaneo en tiempo real.
* **Requisitos No Funcionales:** Alta velocidad de respuesta (Go), seguridad en la sesión (HttpOnly cookies) y escalabilidad para soportar a toda la población estudiantil.
* **Técnicas a utilizar:** Historias de Usuario para detallar la experiencia del estudiante y el distribuidor.
* **Producto:** Documento de Especificación de Requisitos priorizado.

## 2. Fases del Diseño de Sistemas Aplicadas al Proyecto

### 2.1. Inicio del Diseño: Contextualización

En esta fase, transformamos los requisitos en planos técnicos. El diseño lógico se convirtió en un modelo físico de base de datos en PostgreSQL y una estructura de API RESTful, asegurando que cada funcionalidad definida en el análisis tuviera un componente ejecutable en el código.

### 2.2. Fase de Selección: Selección del Objetivo de Diseño

Para construir el sistema, no nos conformamos con la primera opción, sino que evaluamos el mejor rendimiento:

* **Evaluación de Alternativas:** Se evaluó inicialmente el desarrollo con **Node.js (Express)** o **Python**.
* **Justificación de la Selección:** Tras el análisis, nos decidimos por **Go (Golang)**. La razón principal es su superioridad en la **gestión eficiente de memoria** y su **velocidad de ejecución** al ser un lenguaje compilado. Esto es vital para un sistema que debe procesar cientos de validaciones de QR en pocos minutos durante las horas pico del comedor.
* **Arquitectura Seleccionada:** Una arquitectura desacoplada donde el backend en Go maneja la concurrencia de forma nativa y el frontend en **Astro + React** garantiza una carga ultrarrápida en dispositivos móviles.
* **Producto:** Especificación de la Arquitectura del Sistema (Go + PostgreSQL + Astro).

### Resumen del Análisis del Diagrama Adjunto

El diagrama analizado (Imagen adjunta) muestra el flujo lógico de datos y procesos. Se observa claramente la secuencia de validación de identidad y el control de duplicados, lo cual sirvió de base para implementar la lógica de "un ticket por usuario por menú" en nuestra nueva base de datos.

![DER](../../assets/DER_PROYECTO.png)
