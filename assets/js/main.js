console.log("Iniciando sistema modular v6.0 (Search & Files)...");

/* =============================================================
    1. DATOS (Base de Datos Simulada)
   ============================================================= */

// 1.1 Servicios (Tarjetas Principales)
const dataServices = [
    { title: "Estudiantes", desc: "Trámites, horarios, guías y servicios académicos.", link: "estudiantes.html", icon: "bi-backpack" },
    { title: "Docentes", desc: "Recursos, formatos administrativos y apoyo a la docencia.", link: "docentes.html", icon: "bi-person-video3" },
    { title: "Guías y Recursos", desc: "Manuales de Moodle, Teams, correo y bibliotecas.", link: "guias.html", icon: "bi-journal-richtext" },
    { title: "Directorio", desc: "Contactos de directivos y administrativos.", link: "directorio.html", icon: "bi-people" },
    { title: "Horarios", desc: "Consulta la oferta académica actual.", link: "horarios.html", icon: "bi-calendar3" },
    { title: "Plan de Estudios", desc: "Mapas curriculares y programas.", link: "plan-estudios.html", icon: "bi-diagram-3" }
];

// 1.2 Documentos (Archivos PDF para el buscador)
const dataDocuments = [
    { title: "Manual de Reinscripción Web", desc: "Guía paso a paso para el proceso de reinscripción.", link: "assets/documents/Manual_Reinscripción_Web_2022.pdf", type: "PDF" },
    { title: "Guía Microsoft Teams", desc: "Manual de uso para clases virtuales.", link: "assets/documents/Guía Teams.pdf", type: "PDF" },
    { title: "Acceso Moodle", desc: "Manual de usuario para plataforma Virtual Horizon.", link: "assets/documents/Manual de Usuario-Acceso Moodle Virtual Horizon.pdf", type: "PDF" },
    { title: "Horario de Tutoría Otoño 2025", desc: "Programación de tutores académicos.", link: "assets/documents/Horario de tutoría Otoño 2025 versión 23092025.pdf", type: "PDF" },
    { title: "Organigrama FCC", desc: "Estructura organizacional de la facultad.", link: "assets/documents/Organigrama.pdf", type: "PDF" },
    { title: "Plan de Estudios LCC", desc: "Programa Académico Licenciatura en Ciencias de la Computación.", link: "assets/documents/PA_CCO_CU_21_NOV_2025.pdf", type: "PDF" },
    { title: "Plan de Estudios ICC", desc: "Programa Académico Ingeniería en Ciencias de la Computación.", link: "assets/documents/PA_ICC_CU_21_NOV_2025.pdf", type: "PDF" },
    { title: "Recuperación de Correo", desc: "Guía para restablecer contraseña institucional.", link: "assets/documents/guia_recuperacion_correo_buap.pdf", type: "PDF" }
];

const dataNews = [
    { title: "Reinscripción Abierta", text: "Consulta fechas para el próximo periodo.", img: "assets/images/slide-1.png" }, 
    { title: "Titulaciones", text: "Nueva modalidad disponible.", img: "assets/images/slide-2.png" },
    { title: "Exámenes", text: "Calendario de parciales listo.", img: "assets/images/slide-3.png" }
];

/* =============================================================
    2. COMPONENTES UI (Nav, Footer, Breadcrumbs)
   ============================================================= */

function renderNavbar(activePage) {
    const navContainer = document.getElementById('navbar-container');
    if(!navContainer) return; 

    const getClass = (pageName) => {
        if ((pageName === 'Inicio' && !activePage) || pageName === activePage) {
            return 'active';
        }
        return '';
    };

    navContainer.innerHTML = `
    <nav class="navbar navbar-expand-lg shadow-sm sticky-top navbar-custom">
        <div class="container position-relative">
            <a class="navbar-brand" href="index.html">
                <img src="assets/images/logo-fcc.png" alt="Logo FCC" style="height: 40px;"> 
            </a>
            
            <div class="position-absolute top-50 start-50 translate-middle d-none d-lg-block">
                <span class="fw-bold fs-5 text-dark">Secretaría Académica</span>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link ${getClass('Inicio')}" href="index.html">Inicio</a></li>
                    <li class="nav-item"><a class="nav-link ${getClass('Estudiantes')}" href="estudiantes.html">Estudiantes</a></li>
                    <li class="nav-item"><a class="nav-link ${getClass('Docentes')}" href="docentes.html">Docentes</a></li>
                    <li class="nav-item"><a class="nav-link ${getClass('Directorio')}" href="directorio.html">Directorio</a></li>
                    <li class="nav-item"><a class="nav-link ${getClass('Contacto')}" href="contacto.html">Contacto</a></li>
                    <li class="nav-item"><a class="nav-link ${getClass('Guías')}" href="guias.html">Guías</a></li>
                </ul>
            </div>
        </div>
    </nav>`;
}

function renderFooter() {
    const footerContainer = document.getElementById('footer-container');
    if(!footerContainer) return;
    
    footerContainer.innerHTML = `
    <footer class="bg-dark text-white pt-5 pb-2 shadow-lg" style="border-radius: 20px 20px 0 0; margin-top: auto;"> 
        <div class="container text-center text-md-start">
            <div class="row">
                <div class="col-md-4 col-lg-4 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 fw-bold text-primary">FCC BUAP</h5>
                    <p>Ciudad Universitaria, Puebla.</p>
                </div>
                <div class="col-md-4 col-lg-3 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 fw-bold">Enlaces Rápidos</h5>
                    <p><a href="https://autoservicios.buap.mx" target="_blank" class="text-white text-decoration-none link-hover">Autoservicios</a></p>
                    <p><a href="https://correo.buap.mx" target="_blank" class="text-white text-decoration-none link-hover">Correo Institucional</a></p>
                </div>
                <div class="col-md-4 col-lg-3 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 fw-bold">Legal</h5>
                    <p><a href="#" class="text-white text-decoration-none link-hover">Aviso de Privacidad</a></p>
                </div>
            </div>
            <hr class="mb-4" style="opacity: 0.2;"> 
            <div class="text-center p-3">
                © 2025 Benemérita Universidad Autónoma de Puebla
            </div>
        </div>
    </footer>`;
}

function renderBreadcrumb(pathData) {
    const container = document.getElementById('breadcrumb-container');
    if(!container) return;

    let itemsHtml = `<li class="breadcrumb-item"><a href="index.html" class="text-decoration-none">Inicio</a></li>`;

    if (Array.isArray(pathData)) {
        pathData.forEach(item => {
            if (item.active || !item.link) {
                itemsHtml += `<li class="breadcrumb-item active" aria-current="page">${item.label}</li>`;
            } else {
                itemsHtml += `<li class="breadcrumb-item"><a href="${item.link}" class="text-decoration-none">${item.label}</a></li>`;
            }
        });
    } else if (typeof pathData === 'string' && pathData !== "") {
        itemsHtml += `<li class="breadcrumb-item active" aria-current="page">${pathData}</li>`;
    }

    container.innerHTML = `
    <nav aria-label="breadcrumb" class="my-4 fade-in">
        <ol class="breadcrumb">
            ${itemsHtml}
        </ol>
    </nav>`;
}

/* =============================================================
    3. RENDERIZADO DE CONTENIDO (Buscador Global: Servicios + Docs)
   ============================================================= */

function renderServices(filter = "") {
    const grid = document.getElementById('services-grid');
    if(!grid) return;

    grid.innerHTML = ""; 
    const term = filter.toLowerCase();

    // A. Filtrar Servicios
    const matchingServices = dataServices.filter(s => 
        s.title.toLowerCase().includes(term) || s.desc.toLowerCase().includes(term)
    );

    // B. Filtrar Documentos
    const matchingDocs = dataDocuments.filter(d => 
        d.title.toLowerCase().includes(term) || d.desc.toLowerCase().includes(term)
    );

    // C. Renderizar Servicios
    if (matchingServices.length > 0) {
        matchingServices.forEach(item => {
            grid.innerHTML += `
            <div class="col-lg-4 col-md-6 fade-in">
                <a href="${item.link}" class="text-decoration-none">
                    <div class="card h-100 text-center shadow-sm card-blade">
                        <div class="card-body p-4">
                            <i class="${item.icon || 'bi-star'} fs-1 text-primary mb-3"></i>
                            <h3 class="card-title h4 mt-2 text-dark">${item.title}</h3>
                            <p class="card-text text-muted">${item.desc}</p>
                        </div>
                    </div>
                </a>
            </div>`;
        });
    }

    // D. Renderizar Documentos (Si hay búsqueda activa y resultados)
    if (term !== "" && matchingDocs.length > 0) {
        // Separador Visual
        grid.innerHTML += `
            <div class="col-12 mt-4 mb-2 fade-in">
                <h5 class="text-muted border-bottom pb-2"><i class="bi bi-file-earmark-pdf me-2"></i>Documentos y Archivos Relacionados</h5>
            </div>
        `;

        matchingDocs.forEach(doc => {
            grid.innerHTML += `
            <div class="col-lg-4 col-md-6 fade-in">
                <a href="${doc.link}" target="_blank" class="text-decoration-none">
                    <div class="card h-100 shadow-sm border-0 bg-light-subtle">
                        <div class="card-body p-3 d-flex align-items-center">
                            <div class="flex-shrink-0 bg-danger text-white rounded p-3 me-3">
                                <i class="bi bi-filetype-pdf fs-4"></i>
                            </div>
                            <div>
                                <h6 class="card-title fw-bold text-dark mb-1">${doc.title}</h6>
                                <p class="card-text small text-muted mb-0">${doc.desc}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>`;
        });
    }

    // E. Mensaje "Sin Resultados"
    if(matchingServices.length === 0 && matchingDocs.length === 0) {
        grid.innerHTML = `<div class="col-12 text-center text-muted py-5">
            <i class="bi bi-search display-4 d-block mb-3"></i>
            No encontramos resultados para "${filter}". Intenta con otra palabra.
        </div>`;
    }
}

function renderNews() {
    const indicators = document.getElementById('carousel-indicators');
    const inner = document.getElementById('carousel-inner');
    if(!indicators || !inner) return;

    indicators.innerHTML = "";
    inner.innerHTML = "";

    dataNews.forEach((news, idx) => {
        const active = idx === 0 ? 'active' : '';
        indicators.innerHTML += `<button type="button" data-bs-target="#newsCarousel" data-bs-slide-to="${idx}" class="${active}"></button>`;
        inner.innerHTML += `
        <div class="carousel-item ${active}">
            <img src="${news.img}" class="d-block w-100" alt="${news.title}" onerror="this.src='https://via.placeholder.com/800x400?text=Imagen+No+Disponible'">
            <div class="carousel-caption d-none d-md-block" style="background:rgba(0,0,0,0.6); border-radius:10px;">
                <h5>${news.title}</h5>
                <p>${news.text}</p>
            </div>
        </div>`;
    });
}

/* =============================================================
    4. FUNCIONALIDAD TABLAS (Buscador Personal Docente)
   ============================================================= */
// Esta función ahora vive en main.js y se puede llamar desde cualquier página
function initSearchTable(inputId, tableId) {
    const input = document.getElementById(inputId);
    const table = document.getElementById(tableId);

    if (!input || !table) return;

    input.addEventListener('keyup', function() {
        const filter = input.value.toLowerCase();
        // Buscar filas dentro de tbody para evitar ocultar el encabezado
        const tbody = table.querySelector('tbody');
        const rows = tbody ? tbody.getElementsByTagName('tr') : table.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++) {
            // Si no hay tbody, saltamos la primera fila asumiendo que es header
            if (!tbody && i === 0) continue;

            const text = rows[i].textContent.toLowerCase();
            // Mostrar si coincide, ocultar si no
            rows[i].style.display = text.includes(filter) ? '' : 'none';
        }
    });
}

/* =============================================================
    5. INICIALIZADOR MAESTRO
   ============================================================= */
function initPage(activeNavOption = "", breadcrumbData = null) {
    renderNavbar(activeNavOption); 
    renderFooter();
    
    if(breadcrumbData) {
        renderBreadcrumb(breadcrumbData);
    } else {
        renderBreadcrumb(activeNavOption);
    }

    renderServices(); // Carga inicial de servicios
    renderNews();

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Buscador Global (Página de Inicio)
    const searchInput = document.getElementById('search-input');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => { 
            renderServices(e.target.value); 
        });
    }
});