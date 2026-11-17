// ============================================================
//  OFICINA VIRTUAL 3D · CONFIGURACIÓN DE SDW
//  Datos de ejemplo: no incluyas información real de clientes.
// ============================================================
window.OFICINA = {
  // Nombre que flota sobre el núcleo central y sale en la cabecera
  empresa: 'SDW Soluciones Tecnológicas S.A.S.',
  lema: 'Sistemas de información a la medida',
  colorCentral: '#6366f1',

  // Recepción, en el centro (pon `recepcion: false` para quitarla)
  recepcion: {
    nombre: 'Recepción',
    tareas: ['Lee un mensaje nuevo y decide a quién pasarlo', 'Busca en internet: horario de un proveedor', 'Escribe la respuesta de bienvenida'],
  },

  // Cada departamento es un edificio (máximo 5). Cada agente tiene su propia oficina dentro.
  // `oficina` decide cómo se amuebla su puesto. Tipos: ventas, captacion, atencion, contenido, investigacion,
  // desarrollo, entrega, finanzas, direccion, pizarra, servidores, seguridad, laboratorio, comunidad, academia,
  // analitica, formacion.
  // `estado` (opcional): 'funciona' (por defecto), 'a_medias' o 'no_existe' (sale en obras y sin agente).
  // Las tareas que empiezan por «Busca en internet» o «Lee» cambian el holograma que flota sobre el agente.
  departamentos: [
    {
      id: 'ventas',
      nombre: 'Ventas',
      color: '#6366f1',
      responsable: false,
      agentes: [
        { id: 'ventas-captacion', nombre: 'Agente de captación', puesto: 'Captación', oficina: 'captacion',
          tareas: ['Busca en internet: empresas que necesitan software', 'Lee los contactos nuevos del día', 'Escribe el primer mensaje de contacto'] },
        { id: 'ventas-propuestas', nombre: 'Agente de propuestas', puesto: 'Propuestas', oficina: 'ventas',
          tareas: ['Lee la ficha del cliente potencial', 'Escribe una propuesta técnica a medida', 'Busca en internet: precios de soluciones similares'] },
      ],
    },
    {
      id: 'atencion',
      nombre: 'Atención',
      color: '#06b6d4',
      responsable: false,
      agentes: [
        { id: 'atencion-respuestas', nombre: 'Agente de respuestas', puesto: 'Respuestas', oficina: 'atencion',
          tareas: ['Lee los mensajes de soporte', 'Escribe la respuesta al cliente', 'Busca en internet: solución a una incidencia'] },
      ],
    },
    {
      id: 'contenido',
      nombre: 'Contenido',
      color: '#8b5cf6',
      responsable: false,
      agentes: [
        { id: 'contenido-redes', nombre: 'Agente de redes', puesto: 'Redes sociales', oficina: 'contenido',
          tareas: ['Busca en internet: tendencias tecnológicas', 'Escribe los textos de las publicaciones', 'Lee los comentarios de la comunidad'] },
      ],
    },
  ],
};
