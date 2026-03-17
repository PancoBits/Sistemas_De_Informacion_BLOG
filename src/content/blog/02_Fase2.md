---
title: 'Fase 2 - Modelado de Componentes del Sistema'
description: 'Modelado de Componentes del Sistema'
pubDate: 'Dec 10 2025'
heroImage: '../../assets/fase2.svg'
---

### Los 5 Bloques Esenciales

**1\. Personas:** Este bloque incluye a los directivos, usuarios y miembros del grupo de desarrollo de los sistemas de información.

**Importancia en el Comedor UNET:** Las personas son fundamentales ya que el sistema está diseñado para usuarios finales (estudiantes, obreros, administrativos) y para quienes lo gestionan (admins y personal del comedor). Los usuarios (personas) son quienes utilizan el sistema de forma regular, introducen datos, y definen los problemas y las necesidades que deben resolverse. Los directivos (dueños del sistema) son los responsables de fijar el presupuesto y determinar la validez del sistema.

**2\. Datos:** Son la materia prima utilizada para crear información útil. Los datos se obtienen de las transacciones y eventos realizados en la organización.

**Importancia en el Comedor UNET:** Los datos son cruciales para reducir la incertidumbre en la toma de decisiones. En el comedor, se necesitan datos para el Registro de historial de almuerzos, el historial detallado de platos servidos por jornada y tipo de plato, y para cruzar información como el carnet universitario con el ticket generado.

**3\. Actividades:** Son los procesos cotidianos que apoyan los cometidos, metas y objetivos de una empresa, como Mercadeo, Ventas o Producción. Las actividades del SI apoyan las actividades de la empresa mediante el suministro de datos e información, y mejoran y simplifican las tareas de la empresa.

**Importancia en el Comedor UNET:** Las actividades permiten la optimización de la producción y entrega de alimentos. El sistema automatiza tareas como la Solicitud de Almuerzo, la Validación en punto de entrega, y la Gestión de Menú.

**4\. Redes:** Son las estructuras de distribución que permiten la ubicación de las personas, datos, actividades y tecnología en los lugares adecuados, facilitando el movimiento de datos entre dichos lugares.

**Importancia en el Comedor UNET:** Las redes permiten la descentralización y la comunicación y coordinación entre lugares. Dado que el sistema propuesto es una plataforma web y una Interfaz responsiva, las redes son esenciales para que los usuarios (en cualquier lugar) y el personal (en el punto de entrega) puedan acceder e intercambiar datos eficientemente.

**5\. Tecnología:** Designa la moderna combinación de tecnologías informáticas y de telecomunicaciones. Incluye el hardware y software que sostienen los restantes bloques elementales.

**Importancia en el Comedor UNET:** La tecnología es el soporte técnico que permite la funcionalidad del sistema, como el uso de React.js y Node.js, la Base de datos (MongoDB), y el Escáner QR para la validación. La tecnología es crucial para lograr la Escalabilidad de la arquitectura y el Rendimiento.

### Importancia de los Perfiles de Usuarios con Distintos Roles y Necesidades

La importancia de establecer perfiles de usuarios con distintos roles y necesidades radica en que un Sistema de Información debe ser capaz de suministrar información a todos los niveles de la organización: nivel inferior (operativo), nivel medio y nivel superior.

En el Sistema del Comedor UNET, los perfiles de usuario son cruciales porque tienen necesidades funcionales distintas:

- **Usuarios (Estudiantes/Obreros/Administrativos):** Su necesidad principal es solicitar almuerzo y obtener un ticket virtual. Necesitan una interfaz para ver el menú diario y revisar el estado de su almuerzo.
- **Personal del Comedor (Operativo):** Su rol requiere funciones específicas para la Validación en punto de entrega. Necesitan poder escanear el carnet y validar datos contra el ticket generado para registrar la entrega del plato y evitar la suplantación de identidad.
- **Administradores (Directivo):** Su rol requiere información agregada para planeación, control y toma de decisiones. Necesitan el Dashboard Administrador para la Gestión de Menú (crear/editar, modificar stock) y para consultar Estadísticas y Métricas (gráficas de almuerzos servidos, demanda).

La correcta definición de estos roles asegura que el sistema apoye el desempeño de las actividades en todos los niveles de la organización.

### Objetivo de los Flujos de Información entre Áreas

El objetivo general de los flujos de información es permitir que la organización pueda planificar, controlar y coordinar sus acciones operativas con la máxima eficiencia posible.

En un sistema organizacional, se necesita que la información fluya para cubrir las necesidades del sistema de decisión (administración) y del sistema operativo (comedor y usuarios).

En el caso específico del Sistema del Comedor UNET, los flujos de información entre áreas (como el Frontend de Solicitud, el Backend de Procesamiento y el Dashboard Administrador) buscan alcanzar varios objetivos organizativos:

- **Mejora de la Eficiencia:** Al integrar las áreas del negocio, el flujo de datos permite el control exacto del número máximo de platos a preparar, evitando así el exceso o déficit.
- **Soporte a la Toma de Decisiones:** La circulación de datos facilita que los administradores puedan acceder a métricas y gráficas semanales/mensuales para tomar decisiones proactivas en lugar de reactivas.
- **Coordinación de Operaciones:** El flujo continuo y centralizado de información (por ejemplo, el registro de platos servidos vs disponibles en tiempo real) permite optimizar la producción y la distribución de platos.