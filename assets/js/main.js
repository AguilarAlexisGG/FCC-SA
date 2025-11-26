console.log("Iniciando sistema modular v3.0...");

/* =============================================================
    1. DATOS (Simulación de Base de Datos - ESCALABILIDAD)
   ============================================================= */
const dataServices = [
    { title: "Estudiantes", desc: "Trámites, horarios, guías y servicios académicos.", link: "estudiantes.html" },
    { title: "Docentes", desc: "Recursos, formatos administrativos y apoyo a la docencia.", link: "docentes.html" },
    { title: "Guías y Recursos", desc: "Manuales de Moodle, Teams, correo y bibliotecas.", link: "guias.html" }
];

const dataNews = [
    { title: "Reinscripción Abierta", text: "Consulta fechas para el próximo periodo.", img: "assets/images/slide-1.png" }, 
    { title: "Titulaciones", text: "Nueva modalidad disponible.", img: "assets/images/slide-2.png" },
    { title: "Exámenes", text: "Calendario de parciales listo.", img: "assets/images/slide-3.png" }
];

/* =============================================================
    2. COMPONENTES DE INTERFAZ (UI)
   ============================================================= */

// Renderiza el Menú de Navegación (Unificado)
// Renderiza el Menú de Navegación (Con estado Activo)
function renderNavbar(activePage) {
    const navContainer = document.getElementById('navbar-container');
    if(!navContainer) return; 

    // Función auxiliar para saber si poner la clase 'active'
    // Si activePage está vacío, asumimos que es 'Inicio'
    const getClass = (pageName) => {
        if ((pageName === 'Inicio' && !activePage) || pageName === activePage) {
            return 'active';
        }
        return '';
    };

    navContainer.innerHTML = `
    <nav class="navbar navbar-expand-lg shadow-sm sticky-top navbar-custom">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="assets/images/logo-fcc.png" alt="Logo FCC" style="height: 40px;"> 
                <span class="ms-2 d-none d-md-inline fw-bold text-secondary">Secretaría Académica</span>
            </a>
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
    <footer class="bg-dark text-white pt-5 pb-2 shadow-lg" style="border-radius: 20px 20px 0 0;"> 
        <div class="container text-center text-md-start">
            <div class="row">
                <div class="col-md-4 col-lg-4 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 fw-bold text-primary">FCC BUAP</h5>
                    <p>Ciudad Universitaria, Puebla.</p>
                </div>
                <div class="col-md-4 col-lg-3 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 fw-bold">Enlaces Rápidos</h5>
                    <p><a href="#" class="text-white text-decoration-none link-hover">Autoservicios</a></p>
                    <p><a href="#" class="text-white text-decoration-none link-hover">Correo Institucional</a></p>
                </div>
                <div class="col-md-4 col-lg-3 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 fw-bold">Legal</h5>
                    <p><a href="#" class="text-white text-decoration-none link-hover">Aviso de Privacidad</a></p>
                </div>
            </div>
            
            <hr class="mb-4" style="opacity: 0.2;"> <div class="text-center p-3">
                © 2025 Benemérita Universidad Autónoma de Puebla
            </div>
        </div>
    </footer>`;
}

// Renderiza las Migas de Pan (Tree) - USABILIDAD
function renderBreadcrumb(currentPageName) {
    const container = document.getElementById('breadcrumb-container');
    if(container && currentPageName) {
        container.innerHTML = `
        <nav aria-label="breadcrumb" class="my-4 fade-in">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html" class="text-decoration-none">Inicio</a></li>
                <li class="breadcrumb-item active" aria-current="page">${currentPageName}</li>
            </ol>
        </nav>`;
    }
}

/* =============================================================
    3. RENDERIZADO DE CONTENIDO (Inicio)
   ============================================================= */

function renderServices(filter = "") {
    const grid = document.getElementById('services-grid');
    if(!grid) return;

    grid.innerHTML = ""; 
    
    const filtered = dataServices.filter(s => 
        s.title.toLowerCase().includes(filter) || 
        s.desc.toLowerCase().includes(filter)
    );
    
    if(filtered.length === 0) {
        grid.innerHTML = `<div class="col-12 text-center text-muted py-5">No hay resultados para "${filter}"</div>`;
        return;
    }

    filtered.forEach(item => {
        grid.innerHTML += `
        <div class="col-lg-4 col-md-6 fade-in">
            <a href="${item.link}" class="text-decoration-none">
                <div class="card h-100 text-center shadow-sm card-blade">
                    <div class="card-body p-4">
                        <h3 class="card-title h4 mt-3 text-dark">${item.title}</h3>
                        <p class="card-text text-muted">${item.desc}</p>
                    </div>
                </div>
            </a>
        </div>`;
    });
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
        4. INICIALIZADOR MAESTRO
   ============================================================= */

function initPage(pageName = "") {
    // AHORA PASAMOS pageName AQUÍ:
    renderNavbar(pageName); 
    
    renderFooter();
    
    if(pageName !== "") {
        renderBreadcrumb(pageName);
    }

    renderServices();
    renderNews();

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
}

/* =============================================================
    5. LISTENERS (Buscador y Tema)
   ============================================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    const searchInput = document.getElementById('search-input');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderServices(e.target.value.toLowerCase());
        });
    }

    const btnTheme = document.getElementById('theme-toggle');
    if(btnTheme) {
        btnTheme.addEventListener('click', () => {
            const html = document.documentElement;
            const current = html.getAttribute('data-bs-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-bs-theme', next);
            localStorage.setItem('theme', next);
            
            const panel = document.getElementById('controls-panel');
            if(panel) {
                if(next === 'dark') {
                    panel.classList.remove('bg-white');
                    panel.classList.add('bg-dark', 'border-secondary');
                    btnTheme.innerHTML = '<i class="bi bi-sun-fill"></i> Modo Claro';
                } else {
                    panel.classList.add('bg-white');
                    panel.classList.remove('bg-dark', 'border-secondary');
                    btnTheme.innerHTML = '<i class="bi bi-moon-stars-fill"></i> Modo Oscuro';
                }
            }
        });
    }
});