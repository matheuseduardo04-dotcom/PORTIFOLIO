  var currentLang = 'pt';

  var translations = {
    pt: {
      'nav.home':       'Início',
      'nav.about':      'Sobre mim',
      'nav.projects':   'Projetos',
      'nav.cv':         'Currículo',
      'nav.experience': 'Experiência',
      'nav.contact':    'Contato',
      'nav.certs':      'Certificados',
      'hero.im':        'I\'m',
      'hero.developer': 'Developer',
      'hero.cta':       'Ver Projetos',
      'about.label': 'SOBRE',
      'about.title': 'Sobre mim',
      'about.desc': 'Sou <strong>Matheus Eduardo</strong>, desenvolvedor Back-End em constante evolução. Combino a graduação na <strong>UNICIVE</strong> com cursos especializados em <strong>Python, SQL e automação com IA</strong>, focado em construir soluções inteligentes, práticas e organizadas.',
      'about.stats.years': 'Ano estudando programação',
      'about.stats.projects': 'Projetos desenvolvidos',
      'about.stats.stack': 'Tecnologias na stack',
      'about.stats.dedication': 'Dedicação e evolução contínua',
      'about.skills.title': 'Experiência',
      'about.skills.sub': 'Desenvolvedor Backend em formação, com atuação orientada por produto, organização técnica e evolução constante.',
      'about.skills.backend': 'Backend',
      'about.skills.frontend': 'Frontend',
      'about.skills.database': 'Banco de Dados',
      'about.skills.devops': 'DevOps',
      'about.skills.docs': 'Documentação & Versionamento',
      'about.skills.agile': 'Metodologias Ágeis',
      'about.skills.languages': 'Idiomas',
      'about.highlights.frontend': 'Frontend moderno',
      'about.highlights.backend': 'Backend escalável',
      'about.highlights.ai': 'Automações com IA',
      'about.photo.badge': 'Perfil Profissional',
      'about.photo.kicker': 'Backend Developer',
      'about.photo.title': 'Construindo APIs, automações e bases de dados com foco em performance, segurança e código limpo.',
      'about.photo.copy': 'Desenvolvimento backend em Python, modelagem de bancos relacionais, integrações com IA e arquitetura de soluções escaláveis para problemas reais.',
      'about.photo.alt': 'Matheus Eduardo em seu ambiente de trabalho',
      'education.title': 'Formação Acadêmica',
      'education.card1.course': 'Análise e Desenvolvimento de Sistemas',
      'education.card1.type': 'Graduação · Em andamento · Conclusão prevista 2028',
      'education.status.inProgress': 'Cursando',
      'projects.eyebrow': 'Portfólio',
      'projects.title': 'Projetos',
      'projects.copy': 'Projetos que desenvolvi aplicando na prática produto, experiência do usuário, arquitetura e tecnologia para criar soluções completas.',
      'projects.feature.label': 'Projeto 01',
      'projects.feature.title': 'Marvel × DC — site fullstack com IA',
      'projects.feature.desc': 'Site fullstack para explorar heróis da Marvel e DC. Busca em português e inglês, batalhas épicas com narração por IA e quiz de trivia gerado dinamicamente.',
      'projects.feature.ctaPrimary': 'Ver no GitHub',
      'projects.second.label': 'Projeto 02',
      'projects.second.title': 'Modelo Preditivo de Crédito — IA para análise de score',
      'projects.second.desc': 'IA para previsão de score de crédito. Análise de dados com Pandas, treinamento de modelos com Scikit-learn (Random Forest com 83% de acurácia) e automação de previsões para novos clientes.',
      'projects.second.ctaPrimary': 'Ver no GitHub',
      'projects.third.label': 'Projeto 03',
      'projects.third.title': 'Servidor HTTP do Zero — backend sem mágica',
      'projects.third.desc': 'O navegador manda um pedido, meu código lê, processa e devolve a página. Sem mágica, sem abstração. Servidor HTTP construído do zero em Python puro.',
      'projects.third.ctaPrimary': 'Ver no GitHub',
      'projects.fourth.label': 'Projeto 04',
      'projects.fourth.title': 'Mini Banco de Dados Chave-Valor — estilo SQLite',
      'projects.fourth.desc': 'Banco de dados chave-valor com formato binário próprio (cabeçalho MINIDB01) inspirado no SQLite. CLI interativa com indicador de alterações pendentes e interface web em Flask, ambas compartilhando o mesmo arquivo .db.',
      'projects.fourth.ctaPrimary': 'Ver no GitHub',
      'projects.fifth.label': 'Projeto 05',
      'projects.fifth.title': 'Automação de Tarefas e BOTS',
      'projects.fifth.desc': 'Scripts para automação de tarefas repetitivas, otimizando processos e aumentando produtividade no dia a dia.',
      'projects.fifth.ctaPrimary': 'Ver no GitHub',
      'projects.sixth.label': 'Projeto 06',
      'projects.sixth.title': 'Bot TikTok — automação de engajamento',
      'projects.sixth.desc': 'Automação de curtidas no TikTok utilizando PyAutoGUI para simular interações e otimizar engajamento de forma automática.',
      'projects.sixth.ctaPrimary': 'Ver no GitHub',
      'projects.seventh.label': 'Projeto 07',
      'projects.seventh.title': 'Resumidor de Vídeos do YouTube com IA',
      'projects.seventh.desc': 'Você cola a URL do vídeo e recebe um resumo estruturado com pontos principais. Integração com Claude API para análise inteligente do conteúdo.',
      'projects.seventh.ctaPrimary': 'Ver no GitHub',
      'projects.eighth.label': 'Projeto 08',
      'projects.eighth.title': 'Insertion Sort — visualização interativa do algoritmo',
      'projects.eighth.desc': 'Visualização animada do algoritmo Insertion Sort com divisor entre a parte ordenada e a não-ordenada, controle de velocidade, beeps de áudio e o código Python acompanhando linha por linha. Viralizou no LinkedIn com mais de 1.400 reações.',
      'projects.eighth.ctaPrimary': 'Ver no GitHub',
      'cv.eyebrow': 'Currículo',
      'cv.title': 'Meu currículo completo',
      'cv.copy': 'Histórico profissional, formação acadêmica e tecnologias dominadas em um só documento. Baixe ou visualize abaixo.',
      'cv.label': 'Documento PDF',
      'cv.desc': 'Versão completa do currículo com experiências, projetos e stack técnica detalhada.',
      'cv.download': 'Baixar PDF',
      'cv.view': 'Visualizar',
      'contact.eyebrow': 'Contato',
      'contact.title': 'Vamos conversar sobre oportunidades, projetos e parcerias.',
      'contact.copy': 'Se quiser trocar ideia sobre desenvolvimento web, automações ou uma oportunidade profissional, você pode falar comigo pelos canais abaixo.',
      'contact.linkedin': 'Conexão profissional e networking',
      'contact.github': 'Projetos, estudos e repositórios',
      'contact.open': 'abrir',
      'contact.availability.eyebrow': 'Disponibilidade',
      'contact.availability.title': 'Aberto para construir soluções com mais organização, performance e resultado.',
      'contact.availability.copy': 'Busco oportunidades para contribuir com projetos que valorizem evolução constante, qualidade técnica e experiência bem resolvida para o usuário.',
      'contact.title2': 'Meus Contatos',
      'contact.label.email': 'Email',
      'contact.label.location': 'Localização',
      'contact.location.value': 'Londrina, PR — Brasil',
      'contact.cta': 'Conectar',
      'footer.nav.title': 'Navegação',
      'footer.contact.title': 'Contato',
      'footer.location': 'Londrina, PR — Brasil',
      'footer.backtop': 'Voltar ao topo',
      'footer.copy': '© 2025 Matheus Eduardo · Todos os direitos reservados',
      'whatsapp.label': 'Falar no WhatsApp',
      'certs.eyebrow': 'Certificados',
      'certs.title': 'Formação e conquistas',
      'certs.copy': 'A certificação mais importante do meu plano de estudos, agora conquistada e exibida aqui com orgulho.',
      'certs.premium.status': 'Conquistado',
      'certs.premium.title': 'Python Certification',
      'certs.premium.caption': 'Python Developer Certification',
      'certs.premium.desc': 'Certificação Python pela <strong>freeCodeCamp</strong> — a mais importante do meu plano de estudos. Concluída em 30 de maio de 2026, representando cerca de 300 horas de curso.',
      'certs.premium.progress': 'Conquista desbloqueada',
      'footer.nav.home': 'Início',
      'footer.nav.about': 'Sobre mim',
      'footer.nav.projects': 'Projetos',
      'footer.nav.cv': 'Currículo',
      'footer.nav.certs': 'Certificados',
      'footer.nav.contact': 'Contato'
    },
    en: {
      'nav.home':       'Home',
      'nav.about':      'About me',
      'nav.projects':   'Projects',
      'nav.cv':         'Resume',
      'nav.experience': 'Experience',
      'nav.contact':    'Contact',
      'nav.certs':      'Certificates',
      'hero.im':        'I\'m',
      'hero.developer': 'Developer',
      'hero.cta':       'View Projects',
      'about.label': 'ABOUT',
      'about.title': 'About me',
      'about.desc': 'I\'m <strong>Matheus Eduardo</strong>, a Back-End developer in constant evolution. I combine my degree at <strong>UNICIVE</strong> with specialized courses in <strong>Python, SQL, and AI automation</strong>, focused on building intelligent, practical, and well-organized solutions.',
      'about.stats.years': 'Year studying programming',
      'about.stats.projects': 'Projects developed',
      'about.stats.stack': 'Technologies in my stack',
      'about.stats.dedication': 'Dedication and continuous growth',
      'about.skills.title': 'Experience',
      'about.skills.sub': 'Backend Developer in training, with a product-oriented mindset, technical organization, and constant improvement.',
      'about.skills.backend': 'Backend',
      'about.skills.frontend': 'Frontend',
      'about.skills.database': 'Databases',
      'about.skills.devops': 'DevOps',
      'about.skills.docs': 'Documentation & Versioning',
      'about.skills.agile': 'Agile Methodologies',
      'about.skills.languages': 'Languages',
      'about.highlights.frontend': 'Modern frontend',
      'about.highlights.backend': 'Scalable backend',
      'about.highlights.ai': 'AI automations',
      'about.photo.badge': 'Professional Profile',
      'about.photo.kicker': 'Backend Developer',
      'about.photo.title': 'Building APIs, automations, and databases with focus on performance, security, and clean code.',
      'about.photo.copy': 'Backend development in Python, relational database modeling, AI integrations, and architecture of scalable solutions for real problems.',
      'about.photo.alt': 'Matheus Eduardo in his workspace',
      'education.title': 'Academic Background',
      'education.card1.course': 'Systems Analysis and Development',
      'education.card1.type': 'Degree · In progress · Expected completion 2028',
      'education.status.inProgress': 'In Progress',
      'projects.eyebrow': 'Portfolio',
      'projects.title': 'Projects',
      'projects.copy': 'Projects I developed by applying product thinking, user experience, architecture, and technology to build complete solutions.',
      'projects.feature.label': 'Project 01',
      'projects.feature.title': 'Marvel × DC — fullstack site with AI',
      'projects.feature.desc': 'Fullstack site to explore Marvel and DC heroes. Search in Portuguese and English, epic battles with AI narration, and dynamically generated trivia quizzes.',
      'projects.feature.ctaPrimary': 'View on GitHub',
      'projects.second.label': 'Project 02',
      'projects.second.title': 'Credit Predictive Model — AI for score analysis',
      'projects.second.desc': 'AI for credit score prediction. Data analysis with Pandas, model training with Scikit-learn (Random Forest with 83% accuracy), and automated predictions for new clients.',
      'projects.second.ctaPrimary': 'View on GitHub',
      'projects.third.label': 'Project 03',
      'projects.third.title': 'HTTP Server from Scratch — backend without magic',
      'projects.third.desc': 'The browser sends a request, my code reads it, processes it and returns the page. No magic, no abstraction. HTTP server built from scratch in pure Python.',
      'projects.third.ctaPrimary': 'View on GitHub',
      'projects.fourth.label': 'Project 04',
      'projects.fourth.title': 'Mini Key-Value Database — SQLite-style',
      'projects.fourth.desc': 'Key-value database with its own binary format (MINIDB01 header) inspired by SQLite. Interactive CLI with pending changes indicator and a Flask web interface, both sharing the same .db file.',
      'projects.fourth.ctaPrimary': 'View on GitHub',
      'projects.fifth.label': 'Project 05',
      'projects.fifth.title': 'Task Automation and BOTS',
      'projects.fifth.desc': 'Scripts for automating repetitive tasks, streamlining processes, and boosting day-to-day productivity.',
      'projects.fifth.ctaPrimary': 'View on GitHub',
      'projects.sixth.label': 'Project 06',
      'projects.sixth.title': 'TikTok Bot — engagement automation',
      'projects.sixth.desc': 'TikTok likes automation using PyAutoGUI to simulate interactions and optimize engagement automatically.',
      'projects.sixth.ctaPrimary': 'View on GitHub',
      'projects.seventh.label': 'Project 07',
      'projects.seventh.title': 'YouTube Video Summarizer with AI',
      'projects.seventh.desc': 'Paste the video URL and get a structured summary with the main points. Integrated with Claude API for intelligent content analysis.',
      'projects.seventh.ctaPrimary': 'View on GitHub',
      'projects.eighth.label': 'Project 08',
      'projects.eighth.title': 'Insertion Sort — interactive algorithm visualization',
      'projects.eighth.desc': 'Animated visualization of the Insertion Sort algorithm with a divider between the sorted and unsorted parts, speed control, audio beeps and the Python code following along line by line. Went viral on LinkedIn with over 1,400 reactions.',
      'projects.eighth.ctaPrimary': 'View on GitHub',
      'cv.eyebrow': 'Resume',
      'cv.title': 'My complete resume',
      'cv.copy': 'Professional history, academic background, and mastered technologies in a single document. Download or view below.',
      'cv.label': 'PDF Document',
      'cv.desc': 'Complete resume version with experiences, projects, and detailed technical stack.',
      'cv.download': 'Download PDF',
      'cv.view': 'View',
      'contact.eyebrow': 'Contact',
      'contact.title': 'Let\'s talk about opportunities, projects, and partnerships.',
      'contact.copy': 'If you want to chat about web development, automation, or a professional opportunity, you can reach me through the channels below.',
      'contact.linkedin': 'Professional connection and networking',
      'contact.github': 'Projects, studies, and repositories',
      'contact.open': 'open',
      'contact.availability.eyebrow': 'Availability',
      'contact.availability.title': 'Open to building solutions with more organization, performance, and results.',
      'contact.availability.copy': 'I am looking for opportunities to contribute to projects that value continuous improvement, technical quality, and a well-crafted user experience.',
      'contact.title2': 'My Contacts',
      'contact.label.email': 'Email',
      'contact.label.location': 'Location',
      'contact.location.value': 'Londrina, PR — Brazil',
      'contact.cta': 'Connect',
      'footer.nav.title': 'Navigation',
      'footer.contact.title': 'Contact',
      'footer.location': 'Londrina, PR — Brazil',
      'footer.backtop': 'Back to top',
      'footer.copy': '© 2025 Matheus Eduardo · All rights reserved',
      'whatsapp.label': 'Chat on WhatsApp',
      'certs.eyebrow': 'Certificates',
      'certs.title': 'Education and achievements',
      'certs.copy': 'The most important certification in my study plan, now earned and proudly displayed here.',
      'certs.premium.status': 'Achieved',
      'certs.premium.title': 'Python Certification',
      'certs.premium.caption': 'Python Developer Certification',
      'certs.premium.desc': 'Python Certification by <strong>freeCodeCamp</strong> — the most important one in my study plan. Completed on May 30, 2026, representing about 300 hours of coursework.',
      'certs.premium.progress': 'Achievement unlocked',
      'footer.nav.home': 'Home',
      'footer.nav.about': 'About me',
      'footer.nav.projects': 'Projects',
      'footer.nav.cv': 'Resume',
      'footer.nav.certs': 'Certificates',
      'footer.nav.contact': 'Contact'
    }
  };

  function applyLang(lang) {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-alt');
      if (translations[lang][key]) el.setAttribute('alt', translations[lang][key]);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-aria-label');
      if (translations[lang][key]) el.setAttribute('aria-label', translations[lang][key]);
    });

    var pill = document.getElementById('toggle-pill');
    var ptLabel = document.getElementById('lang-pt');
    var enLabel = document.getElementById('lang-en');

    if (lang === 'en') {
      pill.classList.add('en');
      ptLabel.style.opacity = '0.4';
      enLabel.style.opacity = '1';
    } else {
      pill.classList.remove('en');
      ptLabel.style.opacity = '1';
      enLabel.style.opacity = '0.4';
    }
  }

  function toggleLang() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    applyLang(currentLang);
  }

  applyLang(currentLang);

document.addEventListener('DOMContentLoaded', function() {
  initNav();
  initLangToggle();
  initTitleBracket();
  initTiltEffect();
  initRevealAnimations();
  initCarousel();
});

function initNav() {
  var navElement = document.querySelector('nav');
  var navLinks = Array.from(document.querySelectorAll('.nav-links a'));
  var navScrollOffsets = {
    '#inicio': 118,
    '#sobre': 132,
    '#projetos': 120,
    '#experiencia': 120,
    '#contato': 120
  };

  var trackedSections = navLinks
    .map(function(link) {
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) !== '#') return null;

      var section = document.querySelector(href);
      if (!section) return null;

      return { link: link, section: section, id: href };
    })
    .filter(Boolean);

  function setActiveNavLink(sectionId) {
    navLinks.forEach(function(link) {
      link.classList.toggle('active', link.getAttribute('href') === sectionId);
    });
  }

  function syncNavScrollState() {
    if (!navElement) return;
    navElement.classList.toggle('scrolled', window.scrollY > 40);
  }

  function syncActiveNavLink() {
    if (!trackedSections.length) return;

    var navOffset = navElement ? navElement.getBoundingClientRect().height + 36 : 120;
    var scrollLine = window.scrollY + navOffset + 24;
    var currentItem = trackedSections[0];

    trackedSections.forEach(function(item) {
      var sectionTop = item.section.offsetTop;
      var sectionBottom = sectionTop + item.section.offsetHeight;

      if (scrollLine >= sectionTop && scrollLine < sectionBottom) {
        currentItem = item;
      } else if (scrollLine >= sectionTop) {
        currentItem = item;
      }
    });

    setActiveNavLink(currentItem.id);
  }

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) !== '#') return;

      var target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();

      var offset = navScrollOffsets[href] || 120;
      var targetTop = window.scrollY + target.getBoundingClientRect().top - offset;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth'
      });
    });
  });

  window.addEventListener('scroll', function() {
    syncNavScrollState();
    syncActiveNavLink();
  }, { passive: true });
  window.addEventListener('resize', syncActiveNavLink);

  syncNavScrollState();
  syncActiveNavLink();
}

function initLangToggle() {
  var langToggle = document.getElementById('lang-toggle');
  if (!langToggle || typeof toggleLang !== 'function') return;

  langToggle.style.cursor = 'pointer';
  langToggle.addEventListener('click', toggleLang);
  langToggle.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleLang();
    }
  });
}

function initTitleBracket() {
  var container = document.getElementById('title-bracket');
  var frame = document.getElementById('bracket-frame');
  var wordA = document.getElementById('word-fullstack');
  var wordB = document.getElementById('word-developer');
  var pause = 1200;
  var onA = true;
  var pad = 16;

  if (!container || !frame || !wordA || !wordB) return;

  function snapTo(word) {
    var containerRect = container.getBoundingClientRect();
    var wordRect = word.getBoundingClientRect();

    frame.style.transition = 'none';
    frame.style.left = (wordRect.left - containerRect.left - pad) + 'px';
    frame.style.width = (wordRect.width + pad * 2) + 'px';
  }

  function slideTo(word, leaving, callback) {
    var containerRect = container.getBoundingClientRect();
    var wordRect = word.getBoundingClientRect();

    leaving.classList.remove('in-focus');
    word.classList.add('in-focus');

    frame.style.transition = 'left 1.2s cubic-bezier(0.4,0,0.2,1), width 1.2s cubic-bezier(0.4,0,0.2,1)';
    frame.style.left = (wordRect.left - containerRect.left - pad) + 'px';
    frame.style.width = (wordRect.width + pad * 2) + 'px';

    setTimeout(callback, 1200);
  }

  function tick() {
    if (onA) {
      slideTo(wordB, wordA, function() {
        onA = false;
        setTimeout(tick, pause);
      });
      return;
    }

    slideTo(wordA, wordB, function() {
      onA = true;
      setTimeout(tick, pause);
    });
  }

  function init() {
    snapTo(wordA);
    wordA.classList.add('in-focus');
    setTimeout(tick, pause);
  }

  setTimeout(init, 1100);
}

function initProjectVideos() {
  [
    { videoId: 'mockupVideo', overlayId: 'mockupPlayOverlay', pauseId: 'iconPause', playId: 'iconPlay', laptopId: 'tiltWrap' },
    { videoId: 'mockupVideo2', overlayId: 'mockupPlayOverlay2', pauseId: 'iconPause2', playId: 'iconPlay2', laptopId: 'tiltWrap2' },
    { videoId: 'mockupVideo3', overlayId: 'mockupPlayOverlay3', pauseId: 'iconPause3', playId: 'iconPlay3', laptopId: 'tiltWrap3' },
    { videoId: 'mockupVideo4', overlayId: 'mockupPlayOverlay4', pauseId: 'iconPause4', playId: 'iconPlay4', laptopId: 'tiltWrap4' }
  ].forEach(initProjectVideo);
}

function initProjectVideo(config) {
  var video = document.getElementById(config.videoId);
  var overlay = document.getElementById(config.overlayId);
  var iconPause = document.getElementById(config.pauseId);
  var iconPlay = document.getElementById(config.playId);
  var laptop = document.getElementById(config.laptopId);
  var visual = laptop ? laptop.closest('.carousel-card-visual') : null;
  var hasOpened = false;
  var userPaused = false;

  if (!video || !overlay || !iconPause || !iconPlay || !laptop) return;

  function syncIcons() {
    iconPause.style.display = video.paused ? 'none' : 'block';
    iconPlay.style.display = video.paused ? 'block' : 'none';
  }

  function prepareVideoForAutoplay() {
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');
  }

  function playVideoAfterOpen() {
    if (userPaused) {
      syncIcons();
      return;
    }

    prepareVideoForAutoplay();

    var playAttempt = video.play();
    if (playAttempt && typeof playAttempt.then === 'function') {
      playAttempt.then(syncIcons).catch(syncIcons);
      return;
    }

    syncIcons();
  }

  function openLaptop() {
    if (hasOpened) return;

    hasOpened = true;
    laptop.classList.remove('is-closed');
    laptop.classList.add('is-opening');

    setTimeout(function() {
      laptop.classList.remove('is-opening');
      playVideoAfterOpen();
    }, 1180);
  }

  prepareVideoForAutoplay();
  video.pause();
  syncIcons();

  overlay.addEventListener('click', function() {
    window.dispatchEvent(new CustomEvent('projectVideoInteracted'));

    if (!hasOpened) {
      openLaptop();
      return;
    }

    if (video.paused) {
      userPaused = false;
      playVideoAfterOpen();
    } else {
      userPaused = true;
      video.pause();
      video.removeAttribute('autoplay');
    }

    syncIcons();
  });

  overlay.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      overlay.click();
    }
  });

  video.addEventListener('play', syncIcons);
  video.addEventListener('pause', syncIcons);
  video.addEventListener('loadedmetadata', function() {
    if (hasOpened && video.paused && !userPaused) playVideoAfterOpen();
  });
  video.addEventListener('canplay', function() {
    if (hasOpened && video.paused && !userPaused) playVideoAfterOpen();
  });
  window.addEventListener('pageshow', function() {
    if (hasOpened && video.paused && !userPaused) playVideoAfterOpen();
  });
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden && hasOpened && video.paused && !userPaused) playVideoAfterOpen();
  });

  var isMobile = window.innerWidth <= 768;
  if ('IntersectionObserver' in window && visual) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          openLaptop();
          observer.disconnect();
        }
      });
    }, { threshold: isMobile ? 0.1 : 0.45 });

    observer.observe(visual);
    return;
  }

  setTimeout(openLaptop, isMobile ? 300 : 700);
}

function initTiltEffect() {
  var wrap = document.getElementById('tiltWrap');
  if (!wrap) return;

  var max = 8;

  wrap.addEventListener('mousemove', function(event) {
    var rect = wrap.getBoundingClientRect();
    var x = (event.clientX - rect.left) / rect.width - 0.5;
    var y = (event.clientY - rect.top) / rect.height - 0.5;

    wrap.style.transform = 'rotateY(' + (x * max * 2) + 'deg) rotateX(' + (-y * max) + 'deg) scale(1.015)';
  });

  wrap.addEventListener('mouseleave', function() {
    wrap.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
  });
}

function initRevealAnimations() {
  var targets = document.querySelectorAll(
    '.project-feature-label, .project-feature-title, .project-feature-card, .project-actions, .project-techs, .project-visual, .cert-card, .contact-new-item, .contact-new-cta'
  );

  if (!targets.length || !('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(function(target) {
    observer.observe(target);
  });
}

function initCarousel() {
  var track = document.getElementById('carouselTrack');
  var prevBtn = document.getElementById('carouselPrev');
  var nextBtn = document.getElementById('carouselNext');
  var dotsContainer = document.getElementById('carouselDots');

  if (!track || !dotsContainer) return;

  var cards = track.querySelectorAll('.carousel-card');
  var dots = dotsContainer.querySelectorAll('.carousel-dot');
  var currentIndex = 0;
  var totalCards = cards.length;
  var startX = 0;
  var isDragging = false;
  var currentTranslate = 0;
  var autoplayInterval = null;
  var autoplayDelay = 5000;
  var autoplayPausedByVideo = false;

  function goToSlide(index) {
    if (index < 0) index = totalCards - 1;
    if (index >= totalCards) index = 0;
    currentIndex = index;
    currentTranslate = -currentIndex * 100;
    track.style.transform = 'translateX(' + currentTranslate + '%)';
    updateDots();
  }

  function updateDots() {
    dots.forEach(function(dot, i) {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function startAutoplay() {
    if (autoplayPausedByVideo) return;

    stopAutoplay();
    autoplayInterval = setInterval(function() {
      goToSlide(currentIndex + 1);
    }, autoplayDelay);
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    if (autoplayPausedByVideo) return;
    startAutoplay();
  }

  function pauseAutoplayForVideo() {
    autoplayPausedByVideo = true;
    stopAutoplay();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      goToSlide(currentIndex - 1);
      resetAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      goToSlide(currentIndex + 1);
      resetAutoplay();
    });
  }

  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      var index = parseInt(dot.getAttribute('data-index'), 10);
      goToSlide(index);
      resetAutoplay();
    });
  });

  // Touch/swipe support
  track.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    isDragging = true;
    stopAutoplay();
  }, { passive: true });

  track.addEventListener('touchend', function(e) {
    if (!isDragging) return;
    isDragging = false;
    var endX = e.changedTouches[0].clientX;
    var diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(currentIndex - 1);
      }
    }
    resetAutoplay();
  }, { passive: true });

  // Keyboard navigation
  var wrapper = track.closest('.carousel-wrapper');
  if (wrapper) {
    wrapper.setAttribute('tabindex', '0');
    wrapper.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        goToSlide(currentIndex - 1);
        resetAutoplay();
      } else if (e.key === 'ArrowRight') {
        goToSlide(currentIndex + 1);
        resetAutoplay();
      }
    });

    // Pause on hover, resume on leave
    wrapper.addEventListener('mouseenter', stopAutoplay);
    wrapper.addEventListener('mouseleave', startAutoplay);
  }

  window.addEventListener('projectVideoInteracted', pauseAutoplayForVideo);

  // Pause when tab is hidden
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  // Start autoplay
  startAutoplay();
}

function initCertsCarousel() {
  var track = document.getElementById('certsCarouselTrack');
  var prevBtn = document.getElementById('certsCarouselPrev');
  var nextBtn = document.getElementById('certsCarouselNext');
  var dotsContainer = document.getElementById('certsCarouselDots');

  if (!track || !dotsContainer) return;

  var cards = track.querySelectorAll('.certs-carousel-card');
  var dots = dotsContainer.querySelectorAll('.carousel-dot');
  var currentIndex = 0;
  var totalCards = cards.length;
  var startX = 0;
  var isDragging = false;
  var autoplayInterval = null;
  var autoplayDelay = 5000;

  function getVisibleCount() {
    var w = window.innerWidth;
    if (w <= 640) return 1;
    if (w <= 980) return 2;
    return 3;
  }

  function getMaxIndex() {
    var visible = getVisibleCount();
    return Math.max(0, totalCards - visible);
  }

  function goToSlide(index) {
    var maxIndex = getMaxIndex();
    if (index < 0) index = maxIndex;
    if (index > maxIndex) index = 0;
    currentIndex = index;

    var card = cards[0];
    var gap = 24;
    var cardWidth = card.offsetWidth + gap;
    track.style.transform = 'translateX(' + (-currentIndex * cardWidth) + 'px)';
    updateDots();
  }

  function updateDots() {
    dots.forEach(function(dot, i) {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(function() {
      goToSlide(currentIndex + 1);
    }, autoplayDelay);
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      goToSlide(currentIndex - 1);
      resetAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      goToSlide(currentIndex + 1);
      resetAutoplay();
    });
  }

  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      var index = parseInt(dot.getAttribute('data-index'), 10);
      goToSlide(index);
      resetAutoplay();
    });
  });

  // Touch/swipe
  track.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    isDragging = true;
    stopAutoplay();
  }, { passive: true });

  track.addEventListener('touchend', function(e) {
    if (!isDragging) return;
    isDragging = false;
    var endX = e.changedTouches[0].clientX;
    var diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(currentIndex - 1);
      }
    }
    resetAutoplay();
  }, { passive: true });

  // Hover pause
  var wrapper = track.closest('.certs-carousel-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', stopAutoplay);
    wrapper.addEventListener('mouseleave', startAutoplay);
  }

  startAutoplay();
}
