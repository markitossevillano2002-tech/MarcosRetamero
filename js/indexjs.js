const $ = (selector) => document.querySelector(selector);

/* Datos editables: actualiza aquí tecnologías, proyectos y servicios futuros. */
const stack = [
  ['Backend', ['Java', 'Spring Boot', 'Python', 'C', 'APIs REST', 'Arquitectura backend', 'Bases de datos relacionales', 'Autenticación y seguridad', 'Integración de servicios']],
  ['Frontend', ['Angular', 'React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Diseño responsive', 'Componentes reutilizables', 'Interfaces modernas', 'Accesibilidad web', 'Optimización UX']],
  ['Sistemas y Redes', ['Administración de sistemas', 'Redes', 'Linux', 'Servidores', 'Despliegue de aplicaciones', 'Configuración de servicios', 'Seguridad básica', 'Monitorización', 'Automatización']],
  ['Flujo de trabajo', ['Git y GitHub', 'Visual Studio Code', 'Postman', 'Docker · Aprendiendo', 'SQL', 'MySQL', 'Metodologías ágiles', 'Testing y depuración', 'Documentación técnica']]
];

const technologyDescriptions = {
  Java: 'Base para servicios y lógica de negocio robusta.',
  'Spring Boot': 'Desarrollo de aplicaciones backend, APIs y servicios mantenibles.',
  Python: 'Lenguaje versátil para automatización, lógica y herramientas técnicas.',
  Angular: 'Creación de interfaces estructuradas, mantenibles e interactivas.',
  React: 'Construcción de componentes reutilizables para experiencias web.',
  Linux: 'Administración y operación de entornos de servidor.',
  Docker: 'Tecnología en aprendizaje e integración futura para entornos consistentes.',
  MySQL: 'Persistencia relacional y organización de datos de aplicaciones.',
  SQL: 'Consulta y gestión de datos en bases de datos relacionales.',
  'APIs REST': 'Comunicación clara y desacoplada entre aplicaciones y servicios.'
};

const projects = [
  ['Full Stack', 'Dashboard de gestión empresarial', 'Panel de control para visualizar métricas, usuarios, tareas y operaciones internas.', ['Angular', 'Spring Boot', 'MySQL', 'REST API']],
  ['Full Stack', 'Sistema de reservas y gestión', 'Aplicación web para gestionar reservas, clientes, horarios y administración.', ['Angular / React', 'Java', 'Spring Boot', 'SQL']],
  ['Web corporativa', 'Plataforma web corporativa', 'Web de alto rendimiento para presentar servicios, captar clientes y centralizar contacto.', ['HTML', 'CSS', 'JavaScript', 'SEO']],
  ['Sistemas', 'Monitorización de infraestructura', 'Interfaz para visualizar el estado de servicios, servidores y alertas.', ['Sistemas', 'Redes', 'Backend', 'APIs']]
];

const services = [
  ['⌘', 'Desarrollo web a medida', 'Webs rápidas, modernas, adaptadas a móvil y pensadas para convertir visitas en oportunidades.', ['Responsive', 'SEO técnico', 'Experiencia cuidada']],
  ['◈', 'Aplicaciones Full Stack', 'Sistemas de gestión, paneles administrativos, plataformas internas y aplicaciones conectadas a base de datos.', ['Datos conectados', 'Flujos a medida', 'Escalabilidad']],
  ['↗', 'Desarrollo backend y APIs', 'Servicios robustos con Java, Spring Boot, APIs REST, autenticación e integración de datos.', ['APIs REST', 'Seguridad', 'Integración']],
  ['◐', 'Frontend moderno', 'Interfaces interactivas con Angular, React, JavaScript, HTML y CSS.', ['Componentes', 'Accesibilidad', 'Rendimiento']],
  ['▣', 'Sistemas y redes', 'Configuración, mantenimiento y optimización de sistemas, servidores y redes.', ['Servicios', 'Entornos', 'Fiabilidad']],
  ['✦', 'Consultoría tecnológica', 'Análisis de necesidades y definición de soluciones digitales escalables para cada proyecto.', ['Análisis', 'Hoja de ruta', 'Criterio técnico']]
];

const steps = [
  ['01', '⌁', 'Escuchar', 'Entender la necesidad, el contexto y el objetivo del proyecto.'],
  ['02', '◇', 'Definir', 'Convertir requisitos en una solución técnica clara.'],
  ['03', '◌', 'Diseñar', 'Crear una experiencia moderna, útil y funcional.'],
  ['04', '⌘', 'Desarrollar', 'Construir, probar e integrar cada pieza del sistema.'],
  ['05', '↗', 'Mejorar', 'Desplegar, mantener y evolucionar la solución.']
];

function renderStack() {
  $('#stackGrid').innerHTML = stack.map(([category, items]) => `
    <article class="stack-group glass">
      <h3>${category}</h3>
      ${items.map((item, index) => `
        <button class="tech" type="button" data-tech="${item}" aria-label="Ver información sobre ${item}">
          <i>${['⌘', '◈', '◌', '↗'][index % 4]}</i>
          <span>${item}</span>
          <em>${item.includes('Docker') ? 'Aprendiendo' : index % 3 === 0 ? 'Uso habitual' : 'Base sólida'}</em>
        </button>`).join('')}
    </article>`).join('');

  document.querySelectorAll('.tech').forEach((button) => {
    button.addEventListener('click', () => {
      const technology = button.dataset.tech;
      const baseName = technology.replace(' · Aprendiendo', '');
      const description = technologyDescriptions[baseName] || 'Tecnología integrada en un enfoque de desarrollo, sistemas y soluciones digitales mantenibles.';
      $('#techInfo').innerHTML = `<strong>${technology}.</strong> ${description}`;
    });
  });
}

function renderProcess() {
  $('#process').innerHTML = steps.map(([number, icon, title, text]) => `
    <article class="step"><div class="num">${number}</div><div class="icon">${icon}</div><h3>${title}</h3><p>${text}</p></article>`).join('');
}

function renderProjects() {
  const filters = ['Todos', 'Full Stack', 'Frontend', 'Backend', 'Sistemas', 'Web corporativa'];
  $('#filters').innerHTML = filters.map((filter, index) => `
    <button class="filter ${index === 0 ? 'active' : ''}" type="button" data-filter="${filter}">${filter}</button>`).join('');

  $('#projects').innerHTML = projects.map(([category, title, text, tags], index) => `
    <article class="project glass" data-cat="${category}" data-id="${index}" tabindex="0" role="button" aria-label="Abrir detalle: ${title}">
      <div class="mock"><span>PROYECTO PLACEHOLDER / ${String(index + 1).padStart(2, '0')}</span></div>
      <div class="project-body"><span class="category">${category}</span><h3>${title}</h3><p>${text}</p><div class="tags">${tags.map((tag) => `<span>${tag}</span>`).join('')}</div><div class="project-actions"><span class="btn small">Ver proyecto ↗</span><span class="btn small">Ver código</span></div></div>
    </article>`).join('');

  document.querySelectorAll('.filter').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      document.querySelectorAll('.project').forEach((project) => {
        project.classList.toggle('hidden', button.dataset.filter !== 'Todos' && project.dataset.cat !== button.dataset.filter);
      });
    });
  });

  document.querySelectorAll('.project').forEach((project) => {
    const open = () => openProjectModal(Number(project.dataset.id));
    project.addEventListener('click', open);
    project.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });
}

function renderServices() {
  $('#servicesGrid').innerHTML = services.map(([icon, title, text, benefits]) => `
    <article class="service glass"><div class="icon">${icon}</div><h3>${title}</h3><p>${text}</p><ul>${benefits.map((benefit) => `<li>${benefit}</li>`).join('')}</ul><a href="#contacto" class="btn small">Consultar servicio →</a></article>`).join('');
}

function openProjectModal(index) {
  const [category, title, text, tags] = projects[index];
  $('#modalCat').textContent = `${category} · Placeholder editable`;
  $('#modalTitle').textContent = title;
  $('#modalText').textContent = text;
  $('#modalTags').innerHTML = tags.map((tag) => `<span>${tag}</span>`).join('');
  $('#modal').classList.add('open');
  $('#close').focus();
}

function closeProjectModal() {
  $('#modal').classList.remove('open');
}

function configureTheme() {
  const savedTheme = localStorage.getItem('mro-theme');
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;

  const button = $('#theme');
  button.textContent = document.documentElement.dataset.theme === 'light' ? '◐' : '☼';
  button.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('mro-theme', nextTheme);
    button.textContent = nextTheme === 'light' ? '◐' : '☼';
  });
}

function configureNavigation() {
  const header = $('#header');
  const topButton = $('#top');
  const progress = $('.progress');

  const updateScrollUI = () => {
    const maximum = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${maximum ? (scrollY / maximum) * 100 : 0}%`;
    header.classList.toggle('scrolled', scrollY > 15);
    topButton.classList.toggle('show', scrollY > 500);
  };

  addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();
  topButton.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  const menuButton = $('#menu');
  const mobileMenu = $('#mobile');
  menuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '×' : '☰';
  });

  document.querySelectorAll('#mobile a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = '☰';
    });
  });
}

function configureTyping() {
  const phrases = ['Desarrollador de Software', 'Desarrollador Web', 'Administrador de Sistemas y Redes', 'Socio fundador de DanMar IT Solutions'];
  const output = $('#typing');
  let phraseIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  function type() {
    const phrase = phrases[phraseIndex];
    output.textContent = phrase.slice(0, deleting ? characterIndex-- : characterIndex++);
    if (!deleting && characterIndex > phrase.length) {
      deleting = true;
      setTimeout(type, 1400);
      return;
    }
    if (deleting && characterIndex < 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      characterIndex = 0;
    }
    setTimeout(type, deleting ? 28 : 55);
  }

  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) type();
  else output.textContent = phrases[0];
}

function configureReveal() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function configureForm() {
  const form = $('#contactForm');
  const submitButton = $('#submit');
  const status = $('#formStatus');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = 'Enviando…';
    status.textContent = '';
    status.classList.remove('error');

    try {
      const formData = new FormData(form);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        status.textContent =
          'Mensaje enviado. Gracias por contactar, responderé lo antes posible.';

        form.reset();
      } else {
        console.error('Error de Web3Forms:', result);

        status.textContent =
          'No se ha podido enviar el mensaje. Inténtalo de nuevo en unos minutos.';

        status.classList.add('error');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);

      status.textContent =
        'Ha ocurrido un error de conexión. Comprueba tu conexión e inténtalo de nuevo.';

      status.classList.add('error');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Enviar mensaje';
    }
  });
}

function configureModal() {
  $('#close').addEventListener('click', closeProjectModal);
  $('#modal').addEventListener('click', (event) => {
    if (event.target === $('#modal')) closeProjectModal();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeProjectModal();
  });
}

function configureNetwork() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = $('#network');
  const context = canvas.getContext('2d');
  let points = [];

  function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const count = innerWidth < 600 ? 24 : 52;
    points = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22
    }));
  }

  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    points.forEach((point) => {
      point.x += point.vx;
      point.y += point.vy;
      if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
      if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

      context.fillStyle = '#9cbcff';
      context.globalAlpha = 0.45;
      context.fillRect(point.x, point.y, 2, 2);

      points.forEach((other) => {
        const distance = Math.hypot(point.x - other.x, point.y - other.y);
        if (distance < 115) {
          context.strokeStyle = '#8ba8f9';
          context.globalAlpha = (1 - distance / 115) * 0.12;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      });
    });
    context.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  addEventListener('resize', resize);
}

renderStack();
renderProcess();
renderProjects();
renderServices();
configureTheme();
configureNavigation();
configureTyping();
configureReveal();
configureForm();
configureModal();
configureNetwork();

/* ========================================
   TERMINAL INTERACTIVA - SOBRE MÍ
======================================== */

function configureInteractiveTerminal() {
  const form = document.querySelector('#terminalForm');
  const input = document.querySelector('#terminalInput');
  const output = document.querySelector('#terminalOutput');
  const examples = document.querySelectorAll('.terminal-example');

  if (!form || !input || !output) return;

  const commands = {
    help: [
      'Comandos disponibles:',
      '· about  → Perfil profesional',
      '· stack  → Tecnologías y enfoque',
      '· danmar → DanMar IT Solutions',
      '· contact → Información de contacto',
      '· clear  → Limpiar terminal'
    ],

    about: [
      'Marcos Retamero Orovio',
      'Desarrollador de software y desarrollo web.',
      'Administrador de sistemas y redes.',
      'Enfoque: soluciones digitales útiles, mantenibles y escalables.'
    ],

    stack: [
      'Stack principal:',
      'Java · Spring Boot · Angular · React',
      'JavaScript · TypeScript · HTML · CSS',
      'SQL · MySQL · Git · Linux',
      'Sistemas · Redes · APIs REST · Servicios'
    ],

    danmar: [
      'DanMar IT Solutions',
      'Iniciativa orientada a desarrollo digital,',
      'soluciones tecnológicas e innovación para empresas.',
      'Web: danmar.solutions'
    ],

    contact: [
      'Puedes contactar mediante el formulario.',
      'Email: retamerooroviomarcos@gmail.com',
      'LinkedIn y GitHub disponibles en la sección de contacto.'
    ]
  };

  function createLine(text, extraClass = '') {
    const line = document.createElement('p');

    if (extraClass) {
      line.classList.add(extraClass);
    }

    line.textContent = text;
    output.appendChild(line);
  }

  function executeCommand(rawCommand) {
    const command = rawCommand.trim().toLowerCase();

    if (!command) return;

    const commandLine = document.createElement('p');

    commandLine.innerHTML = `
      <span class="terminal-prompt">marcos@portfolio:~$</span>
      ${command}
    `;

    output.appendChild(commandLine);

    if (command === 'clear') {
      output.innerHTML = '';
      input.value = '';
      input.focus();
      return;
    }

    if (commands[command]) {
      commands[command].forEach((line, index) => {
        const className = index === 0 ? 'terminal-success' : '';
        createLine(line, className);
      });
    } else {
      createLine(
        `Comando no encontrado: ${command}. Escribe "help" para ver las opciones.`
      );
    }

    output.scrollTop = output.scrollHeight;
    input.value = '';
    input.focus();
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    executeCommand(input.value);
  });

  examples.forEach((button) => {
    button.addEventListener('click', () => {
      executeCommand(button.dataset.command);
    });
  });
}

configureInteractiveTerminal();