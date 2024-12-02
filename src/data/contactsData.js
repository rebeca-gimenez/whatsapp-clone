import luciaAvatar from "../assets/lucia-martinez.jpg"
import mariaAvatar from "../assets/maria-fernanda-lopez.jpg"
import javierAvatar from "../assets/javier-gomez.jpg"
import camilaAvatar from "../assets/camila-rivera.jpg"

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
        text: 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa. Como estas? Hace mucho tiempo que no hablamos, he estado super ocupada las últimas semanas con el proyecto de la diplomatura', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:16 PM', 
        dateString: '2024-11-30', 
        id: 1, 
        text: 'Pero creo que ya casi esta listo', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:16 PM', 
        dateString: '2024-11-30', 
        id: 2, 
        text: 'El proyecto', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:16 PM', 
        dateString: '2024-11-30', 
        id: 3, 
        text: 'Asi que ya soy una persona de nuevo jajaja', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,
        isSenderMe: false, 
        hourString: '6:20 PM', 
        dateString: '2024-11-30', 
        id: 4, 
        text: 'Hola! Oye que bueno que ya vas a terminar ese proyecto', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: false, 
        hourString: '6:21 PM', 
        dateString: '2024-11-30', 
        id: 5, 
        text: 'Estuviste dedicandole muchas horas', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,
        isSenderMe: true, 
        hourString: '6:25 PM', 
        dateString: '2024-11-30', 
        id: 6, 
        text: 'Siiiiii pero estoy muy feliz con como va quedando, aunque creo que me van a faltar varios detalles', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:26 PM', 
        dateString: '2024-11-30', 
        id: 7, 
        text: 'Siempre encuentro algo mas que agregarle', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:26 PM', 
        dateString: '2024-11-30', 
        id: 8, 
        text: 'Es interminable', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:27 PM', 
        dateString: '2024-11-30', 
        id: 9, 
        text: 'Espero que al profe le guste', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:35 PM', 
        dateString: '2024-11-30', 
        id: 10, 
        text: 'Pero suficiente sobre mi, como estas?', 
        status: 'viewed' 
      }
      ,
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:35 PM', 
        dateString: '2024-11-30', 
        id: 11, 
        text: 'Al final si fuiste a ver Wicked? Yo me muero por verla', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:35 PM', 
        dateString: '2024-11-30', 
        id: 12, 
        text: 'Si no la has visto, capaz podriamos ir a verla con tu hermana este sabado', 
        status: 'viewed' 
      }
    ]
  },
  {
    id: 1,
    avatar: camilaAvatar,
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
        status: 'not-viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '5:36 PM', 
        dateString: '2024-11-30', 
        id: 9, 
        text: 'Hola?', 
        status: 'received' 
      }
    ]
  },
  {
    id: 2,
    avatar: javierAvatar,
    name: 'Javier Gómez',
    messagesList: [
      { 
        isFirstMessage: true,  
        isSenderMe: true, 
        hourString: '9:00 AM', 
        dateString: '2024-11-30', 
        id: 0, 
        text: '¿Puedes revisar el diseño? Te lo envie al correo', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,
        isSenderMe: false, 
        hourString: '9:30 AM', 
        dateString: '2024-11-30', 
        id: 1, 
        text: '¡Claro! Dame unos minutos.', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: false, 
        hourString: '9:40 AM', 
        dateString: '2024-11-30', 
        id: 2, 
        text: 'Listo', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: false, 
        hourString: '9:40 AM', 
        dateString: '2024-11-30', 
        id: 3, 
        text: 'Feedback enviado al correo', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,
        isSenderMe: true, 
        hourString: '9:50 AM', 
        dateString: '2024-11-30', 
        id: 4, 
        text: 'Genial. Gracias por tu ayuda.', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,
        isSenderMe: false, 
        hourString: '10:05 AM', 
        dateString: '2024-11-30', 
        id: 5, 
        text: 'De nada. Avísame si necesitas algo más.', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,
        isSenderMe: true, 
        hourString: '10:15 AM', 
        dateString: '2024-11-30', 
        id: 6, 
        text: 'Vale!', 
        status: 'viewed' 
      }
      ]
  },
  {
    id: 3,
    avatar: luciaAvatar,
    name: 'Lucía Martínez',
    messagesList: [
      { 
        isFirstMessage: true,  
        isSenderMe: true, 
        hourString: '7:20 PM', 
        dateString: '2024-11-30', 
        id: 0, 
        text: 'Luciaaaaaaa ¿Qué opinas de la presentación del viernes?', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,
        isSenderMe: false, 
        hourString: '7:40 PM', 
        dateString: '2024-11-30', 
        id: 1, 
        text: 'Me gustó, se vio muy profesional, solo le cambiaría un detalle.', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,
        isSenderMe: true, 
        hourString: '8:00 PM', 
        dateString: '2024-11-30', 
        id: 2, 
        text: 'Qué cosa?', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,
        isSenderMe: false, 
        hourString: '8:30 PM', 
        dateString: '2024-11-30', 
        id: 3, 
        text: 'La letra, estaba muy pequeña y era difícil de leer', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,  
        isSenderMe: false, 
        hourString: '8:45 PM', 
        dateString: '2024-11-30', 
        id: 4, 
        text: 'Si quieres te puedo pasar un recurso con las mejores prácticas para las presentaciones', 
        status: 'viewed' 
      },
    ]
  },
  {
    id: 4,
    name: 'Carlos Ruiz',
    messagesList: [
      { 
        isFirstMessage: true,
        isSenderMe: true, 
        hourString: '5:45 PM', 
        dateString: '2024-11-30', 
        id: 0, 
        text: '¿Recuerdas la reunión de mañana?', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,  
        isSenderMe: false, 
        hourString: '6:00 PM', 
        dateString: '2024-11-30', 
        id: 1, 
        text: 'Sí, ¿es a las 10:00?', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: false,
        isSenderMe: true, 
        hourString: '6:15 PM', 
        dateHour: '2024-11-30 18:15', 
        id: 2, 
        text: 'Exacto, no olvides llevar el informe.', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,
        isSenderMe: false, 
        hourString: '6:25 PM', 
        dateString: '2024-11-30', 
        id: 3, 
        text: 'Listo, ya lo tengo preparado.', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,  
        isSenderMe: true, 
        hourString: '6:30 PM', 
        dateString: '2024-11-30', 
        id: 4, 
        text: 'Excelente', 
        status: 'not-viewed' 
      },
    ]
  },
  {
    id: 5,
    avatar: mariaAvatar,
    name: 'María Fernanda López',
    messagesList: [
      { 
        isFirstMessage: true,
        isSenderMe: false, 
        hourString: '9:00 AM', 
        dateString: '2024-11-30', 
        id: 0, 
        text: 'Hola, ¿pudiste revisar los documentos?', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,
        isSenderMe: true, 
        hourString: '9:30 AM', 
        dateString: '2024-11-30', 
        id: 1, 
        text: 'Sí, todo está correcto.', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,
        isSenderMe: false, 
        hourString: '10:00 AM', 
        dateString: '2024-11-30', 
        id: 2, 
        text: 'Perfecto, gracias por confirmarlo.', 
        status: 'viewed' 
      },
      { 
        isFirstMessage: true,
        isSenderMe: true, 
        hourString: '10:15 AM', 
        dateString: '2024-11-30', 
        id: 3, 
        text: 'De nada, cualquier cosa me avisas.', 
        status: 'viewed' 
      },
    ]
  },
];


export default contacts