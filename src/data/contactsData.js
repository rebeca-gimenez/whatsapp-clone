const contacts = [
  {
    id: 0,
    name: 'Steven',
    messagesList: [
      { 
        isFirstMessage: true,
        isSenderMe: true, 
        hourString: '6:15 PM', 
        dateString: '2024-11-30', 
        id: 0, 
        text: 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:15 PM', 
        dateString: '2024-11-30', 
        id: 1, 
        text: 'hola', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:15 PM', 
        dateString: '2024-11-30', 
        id: 2, 
        text: 'hola', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:15 PM', 
        dateString: '2024-11-30', 
        id: 3, 
        text: 'hola', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,
        isSenderMe: false, 
        hourString: '6:16 PM', 
        dateString: '2024-11-30', 
        id: 4, 
        text: 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: false, 
        hourString: '6:16 PM', 
        dateString: '2024-11-30', 
        id: 5, 
        text: 'Hola', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,
        isSenderMe: true, 
        hourString: '6:16 PM', 
        dateString: '2024-11-30', 
        id: 6, 
        text: 'holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:16 PM', 
        dateString: '2024-11-30', 
        id: 7, 
        text: 'hola', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:16 PM', 
        dateString: '2024-11-30', 
        id: 8, 
        text: 'hola', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:16 PM', 
        dateString: '2024-11-30', 
        id: 9, 
        text: 'hola', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:16 PM', 
        dateString: '2024-11-30', 
        id: 10, 
        text: 'hola', 
        status: 'viewed' 
      }
    ]
  },
  {
      id: 1,
      name: 'Camila Rivera',
      messagesList: [
        { 
          isFirstMessage: true,
          isSenderMe: true, 
          hourString: '4:25 PM', 
          dateString: '2024-11-30', 
          id: 0, 
          text: 'Hola, Cami', 
          status: 'viewed' 
        },
        { 
          isSenderMe: true, 
          hourString: '4:25 PM', 
          dateString: '2024-11-30', 
          id: 1, 
          text: '¿Como vas con la clase de anatomía?', 
          status: 'viewed' 
        },
        { 
          isFirstMessage: true,
          isSenderMe: false, 
          hourString: '5:00 PM', 
          dateString: '2024-11-30', 
          id: 2, 
          text: 'Bueno, ahi. No me siento muy confiada para el próx examen', 
          status: 'viewed' 
        },
        { 
          isFirstMessage: false,
          isSenderMe: false, 
          hourString: '5:00 PM', 
          dateString: '2024-11-30', 
          id: 3, 
          text: 'Si vamos a estudiar mañana?', 
          status: 'viewed' 
        },
        { 
          isFirstMessage: true,
          isSenderMe: true, 
          hourString: '5:15 PM', 
          dateString: '2024-11-30', 
          id: 4, 
          text: 'Yep, a las 8?', 
          status: 'viewed' 
        },
        { 
          isFirstMessage: true, 
          isSenderMe: false, 
          hourString: '5:30 PM', 
          dateString: '2024-11-30', 
          id: 5, 
          text: 'Yep, ahí estaré.', 
          status: 'viewed' 
        },
        { 
          isFirstMessage: true,
          isSenderMe: true, 
          hourString: '5:35 PM', 
          dateString: '2024-11-30', 
          id: 6, 
          text: 'Genial', 
          status: 'viewed' 
        },
        { 
          isFirstMessage: false,
          isSenderMe: true, 
          hourString: '5:36 PM', 
          dateString: '2024-11-30', 
          id: 7, 
          text: 'Aaaaaaaaah, casi se me olvida, lleva tu ipad para tomar notas, es muy útil', 
          status: 'viewed' 
        },
        { 
          isFirstMessage: false,
          isSenderMe: true, 
          hourString: '5:36 PM', 
          dateString: '2024-11-30', 
          id: 8, 
          text: 'Estas ahi?', 
          status: 'received' 
        },
      ]
  },
  {
      id: 2,
      name: 'Javier Gómez',
      messagesList: [
          { 
              isSenderMe: true, 
              hourString: '9:00 AM', 
              dateString: '2024-11-30', 
              id: 0, 
              text: '¿Puedes revisar este diseño?', 
              status: 'viewed' 
          },
          { 
              isSenderMe: false, 
              hourString: '9:30 AM', 
              dateString: '2024-11-30', 
              id: 1, 
              text: '¡Claro! Dame unos minutos.', 
              status: 'viewed' 
          },
          { 
              isSenderMe: true, 
              hourString: '9:50 AM', 
              dateString: '2024-11-30', 
              id: 2, 
              text: 'Gracias por tu ayuda.', 
              status: 'viewed' 
          },
          { 
              isSenderMe: false, 
              hourString: '10:05 AM', 
              dateString: '2024-11-30', 
              id: 3, 
              text: 'De nada. Avísame si necesitas algo más.', 
              status: 'viewed' 
          },
          { 
              isSenderMe: false, 
              hourString: '10:15 AM', 
              dateString: '2024-11-30', 
              id: 4, 
              text: 'Gracias, queda perfecto.', 
              status: 'viewed' 
          },
      ]
  },
  {
      id: 3,
      name: 'Lucía Martínez',
      messagesList: [
          { 
              isSenderMe: true, 
              hourString: '7:20 PM', 
              dateString: '2024-11-30', 
              id: 0, 
              text: '¿Qué opinas de la presentación?', 
              status: 'viewed' 
          },
          { 
              isSenderMe: false, 
              hourString: '7:40 PM', 
              dateString: '2024-11-30', 
              id: 1, 
              text: 'Se ve muy profesional, solo cambiaría un detalle.', 
              status: 'viewed' 
          },
          { 
              isSenderMe: true, 
              hourString: '8:00 PM', 
              dateString: '2024-11-30', 
              id: 2, 
              text: 'Perfecto, ajusto eso. ¿Nos vemos mañana?', 
              status: 'viewed' 
          },
          { 
              isSenderMe: false, 
              hourString: '8:30 PM', 
              dateString: '2024-11-30', 
              id: 3, 
              text: 'Claro, a las 10:00 en el café de siempre.', 
              status: 'viewed' 
          },
          { 
              isSenderMe: false, 
              hourString: '8:45 PM', 
              dateString: '2024-11-30', 
              id: 4, 
              text: 'Está bien, nos vemos.', 
              status: 'viewed' 
          },
      ]
  },
  {
      id: 4,
      name: 'Carlos Ruiz',
      messagesList: [
          { 
              isSenderMe: true, 
              hourString: '5:45 PM', 
              dateString: '2024-11-30', 
              id: 0, 
              text: '¿Recuerdas la reunión de mañana?', 
              status: 'sent' 
          },
          { 
              isSenderMe: false, 
              hourString: '6:00 PM', 
              dateString: '2024-11-30', 
              id: 1, 
              text: 'Sí, ¿es a las 10:00?', 
              status: 'delivered' 
          },
          { 
              isSenderMe: true, 
              hourString: '6:15 PM', 
              dateHour: '2024-11-30 18:15', 
              id: 2, 
              text: 'Exacto, no olvides llevar el informe.', 
              status: 'delivered' 
          },
          { 
              isSenderMe: false, 
              hourString: '6:25 PM', 
              dateString: '2024-11-30', 
              id: 3, 
              text: 'Listo, ya lo tengo preparado.', 
              status: 'delivered' 
          },
          { 
              isSenderMe: false, 
              hourString: '6:30 PM', 
              dateString: '2024-11-30', 
              id: 4, 
              text: 'Sí, lo tengo anotado.', 
              status: 'delivered' 
          },
      ]
  },
  {
      id: 5,
      name: 'María Fernanda López',
      messagesList: [
          { 
              isSenderMe: false, 
              hourString: '9:00 AM', 
              dateString: '2024-11-30', 
              id: 0, 
              text: 'Hola, ¿pudiste revisar los documentos?', 
              status: 'viewed' 
          },
          { 
              isSenderMe: true, 
              hourString: '9:30 AM', 
              dateString: '2024-11-30', 
              id: 1, 
              text: 'Sí, todo está correcto.', 
              status: 'viewed' 
          },
          { 
              isSenderMe: false, 
              hourString: '10:00 AM', 
              dateString: '2024-11-30', 
              id: 2, 
              text: 'Perfecto, gracias por confirmarlo.', 
              status: 'viewed' 
          },
          { 
              isSenderMe: true, 
              hourString: '10:15 AM', 
              dateString: '2024-11-30', 
              id: 3, 
              text: 'De nada, cualquier cosa me avisas.', 
              status: 'viewed' 
          },
          { 
              isSenderMe: false, 
              hourString: '10:30 AM', 
              dateString: '2024-11-30', 
              id: 4, 
              text: 'Todo en orden, gracias.', 
              status: 'viewed' 
          },
      ]
  },
];


export default contacts