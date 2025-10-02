/* ===== ESTILOS GENERALES ===== */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      color: #333;
      background: #fff;
      position: relative;
      overflow-x: hidden;
      letter-spacing: 0.5px;
      font-style: italic;
      text-align: justify;
    }

    /* Asegurar que todos los elementos no sobresalgan */
    .hero-flex, .profiles, .equipo, .rectangle, footer {
      max-width: 100%;
      height: 100%;
    }

    /* ===== SECCIÓN PRINCIPAL CON FONDO CREMA ===== */
    .fondo-crema {
      background-color: #F2E4C9;
      background-image: url(img/vrg\ 1.png);
      background-size: cover;
      background-repeat: repeat;
      min-height: 100vh;
      position: relative;
    }

    /* HEADER CON CUARTO DE CÍRCULO */
    header {
      text-align: left;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }

    /* Cuarto de círculo con opacidad reducida */
    .quarter-circle {
      position: absolute;
      top: 0;
      left: 0;
      width: 300px;
      height: 250px;
      background-color: rgba(253, 191, 83, 0.7);
      border-bottom-right-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    /* Logo dentro del círculo */
    .logo {
      width: 210px;
      height: auto;
      margin-top: -70px;
      margin-left: -80px;
    }

    /* Iconos de navegación - SOLO CASA VISIBLE */
    .circle-icon {
      position: absolute;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.3s ease;
      z-index: 10;
      color: white;
      display: none; /* Ocultar todos por defecto */
    }

    .circle-icon.home-icon {
      display: flex; /* Mostrar solo el ícono de casa */
      top: 100px;
      right: 55px;
      background-color: rgba(253, 191, 83, 0.9);
    }

    .circle-icon i {
      font-size: 20px;
    }

    .circle-icon:hover {
      transform: scale(1.2);
    }

    /* ===== SECCIÓN HERO ===== */
    .hero {
      padding: 10px 20px 30px;
      min-height: 95vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }

    .hero-flex {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }

    .hero-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-top: -100px; /* MODIFICADO: Subir más el contenido */
    }

    /* Imagen TITULO centrada */
    .titulo-opaco {
      opacity: 0.90;
      max-width: 500px;
      width: 100%;
      margin-bottom: 5px;
      display: block;
    }

    /* Texto descriptivo centrado */
    .hero p {
      font-size: 1.1rem;
      line-height: 1.6;
      max-width: 800px;
      color: #555;
      margin: 0 auto;
      text-align: justify;
      padding: 0 20px;
      margin-top: -50px;
    }

    /* Botón "Ver proyecto" a la derecha */
    .btn-proyecto {
      background: rgba(239, 168, 45, 0.727);
      border: none;
      padding: 15px 30px;
      border-radius: 25px;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.1rem;
      margin-top: 1rem;
      align-self: flex-end;
      margin-right: 10%;
      transition: all 0.3s ease;
      letter-spacing: 2px;
    }

    .btn-proyecto:hover {
      background: rgba(230, 169, 68, 0.8);
      transform: translateY(-2px);
    }

    /* Flecha de desplazamiento animada */
    .flecha-desplazamiento {
      position: absolute;
      opacity: 1 !important;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 50px;
      cursor: pointer;
      animation: subeYBaja 2s infinite ease-in-out;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
    }

    .flecha-desplazamiento:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateX(-50%) scale(1.1);
    }

    .flecha-desplazamiento::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border-right: 3px solid #2d3748;
      border-bottom: 3px solid #2d3748;
      transform: rotate(45deg);
      margin-top: -5px;
    }

    /* Animación para la flecha */
    @keyframes subeYBaja {
      0%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      50% {
        transform: translateX(-50%) translateY(10px);
      }
    }

    /* ===== SECCIÓN DE NIVELES DE DIFICULTAD ===== */
    .niveles {
      margin-bottom: 10px;
    }

    .profiles {
      display: flex;
      height: 100vh;
    }

    .profile {
      flex: 1;
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }

    /* Fondo con blur separado */
    .profile::before {
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background-size: cover;
      background-position: center;
      filter: brightness(70%);
      transition: transform 0.5s ease, filter 0.5s ease;
      z-index: 0;
    }

    /* Etiquetas de nivel */
    .nivel {
      display: inline-block;
      color: #000000;
      padding: 8px 25px;
      border-radius: 20px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      min-width: 120px;
      letter-spacing: 2px;
    }

    /* Colores de niveles */
    .nivel.facil {
      background-color: #6FC5C2;
    }

    .nivel.medio {
      background-color: #FACA76;
    }

    .nivel.dificil {
      background-color: #DC5343;
    }

    /* Imágenes de fondo para niveles */
    .profile[data-img="chocolate"]::before {
      background-image: url("img/chocolate.png");
    }
    .profile[data-img="arroz"]::before {
      background-image: url("img/arroz\ con\ pollo.avif");
    }
    .profile[data-img="alitas"]::before {
      background-image: url("img/alitas\ bqq.webp");
    }

    /* Efectos hover */
    .profile:hover::before {
      transform: scale(1.05);
      filter: brightness(50%) blur(4px);
    }

    .profile span,
    .profile .extra-image,
    .profile .description {
      position: absolute;
      z-index: 2;
    }

    .profile span {
      top: 12%;
      left: 50%;
      margin-bottom: 15px;
      transform: translate(-50%, -50%);
      font-size: 28px;
      color: #2a2828;
      font-weight: bold;
      text-shadow: 2px 2px 5px rgba(0,0,0,0.7);
      transition: opacity 0.4s ease;
    }

    .profile .extra-image {
      top: 38%;
      margin: 15px 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150px;
      height: 150px;
      object-fit: contain;
      opacity: 0;
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .profile:hover .extra-image {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.1);
      margin: 20px 0; /* Aumentar espacio en hover */
    }

    .profile .description {
      bottom: 12%;
      left: 50%;
      transform: translateX(-50%) translateY(25px);
      width: 80%;
      color: #fff;
      font-size: 16px;
      text-align: center;
      opacity: 0;
      line-height: 1.5;
      transition: all 0.6s ease;
      padding: 0 15px; /* Agregar padding lateral */
    }

    .profile:hover .description {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
      padding: 0 20px; /* Aumentar padding en hover */
    }

    /* ===== SECCIÓN DEL EQUIPO - MODIFICADA ===== */
    .equipo {
      text-align: left;
      padding: 55px 20px 0px;
      position: relative;
      background: #f9f9f9;
      height: auto;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .equipo-header {
      max-width: 1200px;
      margin: 0 auto 40px;
      padding: 0 20px;
    }

    .titulo-equipo {
      background: #DC5343;
      color: white;
      display: inline-block;
      padding: 12px 40px;
      border-radius: 12px;
      font-weight: bold;
      text-align: left;
      margin-top: -40px;
      font-size: 1.8rem;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .descripcion {
      max-width: 700px;
      margin: 40px auto;
      text-align: justify;
      font-size: 1rem;
      line-height: 1.6;
      margin-top: 1.5rem;
      background-color: #f0ecec;
      padding: 20px 35px;
      border-radius: 15px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    .equipo-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
      position: relative;
      padding-bottom: 400px;
      min-height: 550px;
    }

    /* CÍRCULO ROJO MODIFICADO */
    .circulo-rojo {
      width: 900px;
      height: 350px;
      background: #DC5343;
      border-radius: 600px 600px 0 0;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      overflow: visible;
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }

    /* Contenedor de círculos en forma de U */
    .team-container {
      position: absolute;
      width: 850px;
      height: 450px;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
    }

    .circle-container {
      position: relative;
      width: 100%;
      height: 100%;
      margin-bottom: 90px;
    }

    .team-member {
      position: absolute;
      width: 110px;
      height: 110px;
      background: linear-gradient(135deg, #6FC5C2, #4a9e9b);
      border-radius: 50%;
      transition: all 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 15px rgba(0,0,0,0.2);
      overflow: hidden;
      z-index: 20;
      border: 4px solid white;
    }

    .team-member::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: 50%;
      z-index: 2;
    }

    .team-member:hover::before {
      opacity: 1;
    }

    .team-member .member-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      transition: transform 0.3s ease;
      z-index: 1;
    }

    .team-member .member-name {
      position: absolute;
      font-size: 14px;
      text-align: center;
      color: white;
      font-weight: 600;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 3;
      width: 100%;
      padding: 0 5px;
      bottom: -25px;
    }

    .team-member:hover .member-name {
      opacity: 1;
    }

    .team-member.selected {
      width: 130px !important;
      height: 130px !important;
      z-index: 30;
      box-shadow: 0 10px 25px rgba(0,0,0,0.4);
      background: linear-gradient(135deg, #FACA76, #e6b15d);
      top: 10px !important;
    }

    .team-member.selected .member-name {
      opacity: 1;
      bottom: 15px;
      font-weight: bold;
      font-size: 15px;
      color: #222;
      text-shadow: 0 1px 2px rgba(255,255,255,0.8);
    }

    .btn-cargo {
      position: absolute;
      bottom: 25px;
      left: 50%;
      transform: translateX(-50%);
      background: #6FC5C2;
      color: white;
      border: none;
      padding: 15px 70px;
      border-radius: 30px;
      font-weight: bold;
      cursor: pointer;
      z-index: 40;
      font-size: 22px;
      box-shadow: 0 6px 12px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }

    .btn-cargo .cargo-text {
      font-size: 22px;
      font-weight: bold;
    }

    .btn-cargo .cargo-desc {
      font-size: 14px;
      font-weight: normal;
      max-width: 300px;
      line-height: 1.3;
    }

    .btn-cargo:hover {
      background: #5cb2af;
      transform: translateX(-50%) scale(1.05);
    }

    /* ===== RECTÁNGULO CON LOGO Y REDES SOCIALES ===== */
    .rectangle {
      background-color: #f0ecec;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 0px;
    }

    .logo-rectangle {
      max-width: 200px;
      margin-bottom: 20px;
    }

    .social-icons {
      display: flex;
      gap: 20px;
    }

    .social-icon {
      font-size: 24px;
      color: #DC5343;
      transition: color 0.3s ease;
    }

    .social-icon:hover {
      color: #FACA76;
    }

    /* ========== FOOTER ========== */
    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 20px;
      font-size: 0.9rem;
      position: relative;
      z-index: 10;
    }

    /* ===== MEDIA QUERIES PARA RESPONSIVE COMPLETO ===== */
    @media (max-width: 1200px) {
      .circulo-rojo {
        width: 700px;
        height: 250px;
      }
      
      .team-container {
        width: 650px;
        height: 350px;
      }
      
      .team-member {
        width: 90px;
        height: 90px;
      }
      
      .team-member.selected {
        width: 110px !important;
        height: 110px !important;
      }
    }

    @media (max-width: 992px) {
      .quarter-circle {
        width: 250px;
        height: 200px;
      }
      
      .logo {
        width: 180px;
        margin-top: -60px;
        margin-left: -70px;
      }
      
      .titulo-opaco {
        max-width: 400px;
      }
        .hero {
    min-height: 70vh; /* Reducir más en tablets */
  }   
      .hero p {
        max-width: 600px;
        font-size: 1rem;
      }
      
      .btn-proyecto {
        margin-right: 5%;
        padding: 12px 25px;
        font-size: 1rem;
      }
      
      .profiles {
        flex-direction: column;
        height: auto;
      }
      
      .profile {
        height: 33.33vh;
      }
      
      .circulo-rojo {
        width: 600px;
        height: 220px;
      }
      
      .team-container {
        width: 550px;
        height: 300px;
      }
      
      .team-member {
        width: 80px;
        height: 80px;
      }
      
      .team-member.selected {
        width: 100px !important;
        height: 100px !important;
      }
      
      .btn-cargo {
        padding: 12px 55px;
        font-size: 18px;
      }
      
      .btn-cargo .cargo-text {
        font-size: 18px;
      }
      
      .btn-cargo .cargo-desc {
        font-size: 12px;
      }
    }

    @media (max-width: 768px) {
      header {
        padding: 15px;
      }
      
      .quarter-circle {
        width: 200px;
        height: 170px;
      }
      
      .logo {
        width: 150px;
        margin-top: -50px;
        margin-left: -60px;
      }
      
      .circle-icon.home-icon {
        width: 40px;
        height: 40px;
        top: 80px;
        right: 40px;
      }
      
      .hero {
        padding: 5px 15px 20px;
        min-height: 80vh;
      }
      
      .titulo-opaco {
        max-width: 320px;
        margin-bottom: 0;
      }
      
      .hero p {
        max-width: 90%;
        font-size: 0.95rem;
        padding: 0 10px;
        line-height: 1.5;
      }
      
      .btn-proyecto {
        margin-right: 5%;
        padding: 10px 20px;
        font-size: 0.9rem;
        align-self: center;
        margin-top: 2rem;
      }
      
      .flecha-desplazamiento {
        width: 40px;
        height: 40px;
        bottom: 20px;
      }
      
      .flecha-desplazamiento::before {
        width: 15px;
        height: 15px;
      }
      
      .nivel {
        padding: 6px 20px;
        font-size: 18px;
        min-width: 100px;
      }
      
      .profile span {
        font-size: 24px;
      }
      
      .profile .extra-image {
        width: 120px;
        height: 120px;
      }
      
      .profile .description {
        font-size: 14px;
      }
      
      .equipo {
    padding: 30px 15px 60px; /* Ajustar padding para tablet */
        min-height: auto;
      }
      
      .titulo-equipo {
        padding: 10px 30px;
        font-size: 1.1rem;
        margin-top: -30px;
      }
      
      .descripcion {
    margin: 25px auto 30px; /* Ajustar márgenes para tablet */
    padding: 12px 20px; /* Ajustar padding para tablet */
        font-size: 0.85rem;
      }
      
      .equipo-container {
    padding-bottom: 250px; /* Reducir para tablet */
    min-height: 400px; /* Reducir para tablet */
      }
      
      .circulo-rojo {
        width: 100%;
        max-width: 500px;
        height: 200px;
        border-radius: 500px 500px 0 0;
      }
      
      .team-container {
        width: 90%;
        max-width: 450px;
        height: 250px;
        bottom: 60px;
      }
      
      .team-member {
        width: 70px;
        height: 70px;
      }
      
      .team-member.selected {
        width: 85px !important;
        height: 85px !important;
      }
      
      .team-member .member-name {
        font-size: 11px;
        bottom: -25px;
      }
      
      .btn-cargo {
        padding: 10px 45px;
        font-size: 16px;
        bottom: 20px;
      }
      
      .btn-cargo .cargo-text {
        font-size: 16px;
      }
      
      .btn-cargo .cargo-desc {
        font-size: 11px;
        max-width: 250px;
      }
      
      .logo-rectangle {
        max-width: 150px;
      }
    }

    /* ==== AJUSTES ESPECIALES PARA CELULARES (pantallas <= 576px) ==== */
    @media (max-width: 576px) {
      /* HEADER */
      .quarter-circle {
        width: 150px;
        height: 130px;
      }
      .logo {
        width: 120px;
        margin-top: -40px;
        margin-left: -45px;
      }
      .circle-icon.home-icon {
        width: 35px;
        height: 35px;
        top: 60px;
        right: 30px;
      }
      .circle-icon.home-icon i {
        font-size: 16px;
      }

      /* HERO */
      .hero {
        padding: 5px 10px 15px;
        min-height: 90vh;
      }
      .titulo-opaco {
        max-width: 320px;
      }
      
.hero-content {
  margin-top: -80px; /* Reducir de -100px a -80px */
}
      .hero p {
        font-size: 0.85rem;
        line-height: 1.6;
        max-width: 95%;
        padding: 0 5px;
          margin-top: -30px; /* Reducir de -50px a -30px */

      }
      .btn-proyecto {
        padding: 8px 16px;
        font-size: 0.85rem;
        margin-top: 0.5rem;
        align-self: center;
      }

      /* NIVELES DE DIFICULTAD */
      .profiles {
        flex-direction: column;
        height: auto;
      }
      .profile {
        height: auto;
        min-height: 300px;
      }
      .nivel {
        padding: 5px 15px;
        font-size: 16px;
        min-width: 80px;
      }
  .profile span {
    font-size: 20px;
    top: 15%; /* Cambiar de 20% a 15% para bajar el título */
    margin-bottom: 10px; /* Agregar espacio debajo del título */
  }
  
  .profile .extra-image {
    width: 100px;
    height: 100px;
    top: 35%; /* Cambiar de 40% a 35% para bajar la imagen */
    margin: 10px 0; /* Agregar espacio alrededor de la imagen */
  }
  
  .profile .description {
    font-size: 12px;
    width: 90%;
    bottom: 10%; /* Cambiar de 15% a 10% para subir la descripción */
    transform: translateX(-50%) translateY(20px); /* Reducir espacio */
    line-height: 1.4; /* Reducir interlineado */
    padding: 0 10px; /* Agregar padding lateral */
      }

      /* EQUIPO - CARRUSEL PARA MÓVILES */
      .equipo {
        min-height: auto;
        padding: 40px 15px 50px;
      }
      
      .titulo-equipo {
        padding: 8px 20px;
        font-size: 1rem;
      }
      
      .descripcion {
        margin: 40px auto 30px;
        padding: 10px 20px;
        font-size: 0.8rem;
      }
      
      /* Ocultar el diseño original en móviles */
      .equipo-container,
      .circulo-rojo,
      .team-container,
      .circle-container,
      .team-member,
      .btn-cargo {
        display: none !important;
      }
      
      /* Mostrar el carrusel solo en móviles */
      .mobile-team-carousel {
        display: block;
        max-width: 100%;
        margin: 0 auto;
        position: relative;
      }
      
      .carousel-title {
        text-align: center;
        color: #6FC5C2;
        font-size: 1.2rem;
        margin-bottom: 20px;
        font-weight: bold;
      }
      
      .carousel-counter {
        text-align: center;
        color: #6FC5C2;
        font-size: 1rem;
        margin-bottom: 15px;
      }
      
      .carousel-container {
        position: relative;
        max-width: 300px;
        margin: 0 auto;
        overflow: hidden;
      }
      
      .carousel-track {
        display: flex;
        transition: transform 0.5s ease;
      }
      
      .carousel-slide {
        min-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      
      .carousel-member {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 15px;
        border: 4px solid #6FC5C2;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      }
      
      .carousel-member img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .carousel-member-name {
        font-weight: bold;
        font-size: 1rem;
        margin-bottom: 5px;
        text-align: center;
      }
      
      .carousel-member-role {
        color: #6FC5C2;
        font-weight: 600;
        font-size: 0.9rem;
        text-align: center;
        margin-bottom: 8px;
      }
      
      .carousel-member-desc {
        font-size: 0.8rem;
        text-align: center;
        max-width: 80%;
        margin: 0 auto;
        color: #555;
      }
      
      .carousel-nav {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        gap: 10px;
      }
      
      .carousel-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #ccc;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      
      .carousel-dot.active {
        background-color: #6FC5C2;
      }
      
      .carousel-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(111, 197, 194, 0.7);
        border: none;
        color: white;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
      }
      
      .carousel-btn.prev {
        left: 5px;
      }
      
      .carousel-btn.next {
        right: 5px;
      }

      /* RECTÁNGULO LOGO Y REDES */
      .rectangle {
        padding: 30px 15px;
        margin-top: 0;
      }
      .logo-rectangle {
        max-width: 120px;
      }
      .social-icon {
        font-size: 20px;
      }

      /* FOOTER */
      footer {
        padding: 15px;
        font-size: 0.8rem;
      }
    }

    /* Para desktop: ocultar el carrusel móvil */
    @media (min-width: 577px) {
      .mobile-team-carousel {
        display: none;
      }
    }

    /* Ajuste para pantallas muy pequeñas */
    @media (max-width: 400px) {
      .carousel-member {
        width: 100px;
        height: 100px;
      }
      
      .carousel-member-name {
        font-size: 0.9rem;
      }
      
      .carousel-member-role {
        font-size: 0.8rem;
      }
      
      .carousel-member-desc {
        font-size: 0.75rem;
      }
    }

    /* Ajustes para orientación horizontal en móviles */
    @media (max-height: 500px) and (orientation: landscape) {
      .hero {
        min-height: 120vh;
      }
      
      .hero-content {
        margin-top: -50px;
      }
      
      .profiles {
        flex-direction: row;
        height: 100vh;
      }
      
      .profile {
        height: 100%;
      }
    }
/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* ==todo el css menos recetas.=== SECCIÓN DE RECETAS - MODIFICADA ===== */
.recetas {
  text-align: center;
  padding: 60px 20px 40px;
  background: #fff;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  min-height: 100vh;
  font-style: italic;
}

/* Bola amarilla con iconos - LOGO MÁS GRANDE */
.bola-amarilla-recetas {
  position: absolute;
  width: 400px;
  height: 320px;
  background-color: #F2E4C9;
  border-radius: 40%;
  border-bottom-right-radius: 100%;
  left: -5vh;
  top: -8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  z-index: 5;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

/* LOGO MÁS GRANDE DENTRO DE LA BOLA AMARILLA */
.bola-amarilla-recetas .logo-recetas {
  width: 160px;
  height: auto;
  margin: 0;
  margin-left: -50px;
}
/* Iconos dentro de la bola - SOLO LA CASITA (SIN FONDO, COLOR BLANCO) */
.circle-icon-recetas {
  position: absolute;
  border-radius: 30%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 10;
  color: white; /* COLOR BLANCO */
  background-color: transparent; /* SIN FONDO */
}

.circle-icon-recetas i {
  font-size: 34px;
}

.circle-icon-recetas:hover {
  transform: scale(1.2);
}

.circle-icon-recetas.home-icon {
  top: 180px;
  right: 50px;
}

/* Título de recetas */
.titulo-recetas {
  font-size: 6.5rem;
  color: #6FC5C2;
  text-transform: uppercase;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  letter-spacing: 3px;
  z-index: 2;
  position: relative;
  font-style: italic;
  margin: 0 -600px 30px 0;
  padding: 10px 20px;
}

/* Contenedor principal del carrusel */
.carrusel-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: visible; /* VISIBLE PARA QUE LAS FLECHAS NO SE OCULTEN */
  padding: 0 80px; /* Más espacio para las flechas */
}

/* Carrusel personalizado */
.carrusel {
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
  z-index: 2;
  height: 380px;
  display: flex;
  align-items: center;
}

.carrusel-container {
  display: flex;
  height: 100%;
  width: 100%;
}

.carrusel-slide {
  min-width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 0 20px;
  height: 100%;
  transition: opacity 0.5s ease;
        border-radius: 90%;

}

.carrusel-slide.active {
  display: flex;
}

/* Contenedor para imágenes con efecto hover */
.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  height: 450px;
  width: 100%;
  max-width: 500px;
  transition: transform 0.3s ease;
  border-radius: 8%;
}


.image-container:hover {
  transform: translateY(-5px);
}

.image-container.single-image {
  max-width: 650px;
  height: 400px;
  flex: none;
}

.carrusel-imagen {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.image-container:hover .carrusel-imagen {
  transform: scale(1.05);
}

/* Overlay para efecto hover */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 20px;
  box-sizing: border-box;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.overlay-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.overlay-text {
  font-size: 1rem;
  text-align: center;
  max-width: 80%;
}

/* Flechas de navegación - POSICIONES CORREGIDAS */
.carrusel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #000;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carrusel-btn:hover {
  transform: translateY(-50%) scale(1.15);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

.carrusel-prev {
  left: 50px; /* CAMBIADO de 0 a 10px */
}

.carrusel-next {
  right: 50px; /* CAMBIADO de 0 a 10px */
}

/* ========== SECCIÓN DE PLATILLOS POR DIFICULTAD ========== */
.platillos-dificultad {
  padding: 0px 0 60px;
  color: white;
}

.facil-bg {
  background-color: #6FC5C2;
}

.medio-bg {
  background-color: #FACA76;
}

.dificil-bg {
  background-color: #DC5343;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px 15px 0;
}

/* Contenedor para título con líneas */
.titulo-con-lineas {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 0px;
}

.linea-superior,
.linea-inferior {
  height: 4px;
  background-color: white;
  min-width: 150%;
  max-width: 1200px;
}

.titulo-platillos {
  font-size: 2.9rem;
  text-align: center;
  margin: 10px 0;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 5px 15px 0px;
}

.contenido-platillo {
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: center;
}

/* Estilo específico para modo medio (invertido) */
.medio-bg .contenido-platillo {
  flex-direction: row-reverse;
}

.video-container-platillo {
  flex: 1;
  height: 450px;
  min-width: 100px;
  max-width: 600px;
}

.video-container-platillo iframe {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  aspect-ratio: 16/9;
  object-fit: contain;
  background-color: #000;
}

.info-platillo {
  flex: 1;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.btn-nombre-platillo {
  background: white;
  border: none;
  color: #333;
  padding: 12px 25px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  width: auto;
  max-width: 100%;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
}

.btn-nombre-platillo:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

.descripcion-platillo {
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 25px;
  text-align: justify;
}

.btn-ver-receta {
  background: white;
  color: #333;
  border: none;
  padding: 12px 25px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: auto;
  display: inline-block;
}

.btn-ver-receta:hover {
  background: rgba(255, 255, 255, 0.8);
  transform: translateY(-2px);
}

/* ===== RECTÁNGULO CON LOGO Y REDES SOCIALES ===== */
.rectangle {
  background-color: #F2E4C9;
  padding: 30px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.logo-rectangle {
  width: 150px;
  height: auto;
}

.social-icons {
  display: flex;
  gap: 20px;
}

.social-icon {
  font-size: 24px;
  color: #6FC5C2;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #DC5343;
}

/* ========== FOOTER ========== */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 0.9rem;
}

/* ===== MEDIA QUERIES PARA RESPONSIVIDAD ===== */
@media (max-width: 1200px) {
  .titulo-recetas {
    font-size: 5rem;
    margin: 0 -400px 30px 0;
  }
  
  .bola-amarilla-recetas {
    width: 350px;
    height: 280px;
  }
}

@media (max-width: 992px) {
  .titulo-recetas {
    font-size: 4rem;
    margin: 0 -200px 30px 0;
  }
  
  .bola-amarilla-recetas {
    width: 300px;
    height: 240px;
  }
  
  .bola-amarilla-recetas .logo-recetas {
    width: 130px;
  }
  
  .circle-icon-recetas.home-icon {
    top: 150px;
    right: 40px;
  }
  
  .carrusel {
    height: 400px;
  }
  
  .image-container {
    height: 320px;
  }
  
  .image-container.single-image {
    height: 380px;
  }
  
  .contenido-platillo {
    flex-direction: column;
    gap: 30px;
  }
  
  .medio-bg .contenido-platillo {
    flex-direction: column;
  }
  
  .video-container-platillo {
    width: 100%;
    max-width: 100%;
  }
  
  .info-platillo {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .recetas {
    padding: 40px 15px 20px; /* REDUCIDO */
    min-height: auto; /* ELIMINADA altura mínima fija */
  }
  
  .bola-amarilla-recetas {
    width: 250px;
    height: 200px;
    left: -5vh;
    top: -6vh;
  }
  
  .bola-amarilla-recetas .logo-recetas {
    width: 100px;
    margin-left: -30px;
  }
  
  .circle-icon-recetas {
    width: 40px;
    height: 40px;
  }
  
  .circle-icon-recetas i {
    font-size: 24px;
  }
  
  .circle-icon-recetas.home-icon {
    top: 120px;
    right: 30px;
  }
  
  .titulo-recetas {
    font-size: 2.5rem; /* REDUCIDO */
    margin: 0 0 20px 0; /* MÁRGENES CORREGIDOS */
  }
  
  .carrusel {
    height: 300px; /* REDUCIDO */
    margin-bottom: 20px; /* AÑADIDO para espacio controlado */
  }
  
  .carrusel-slide {
    flex-direction: column;
    gap: 15px;
    padding: 0 10px;
  }
  
  .image-container {
    width: 80%;
    height: 200px;
    flex: none;
  }
  
  .image-container.single-image {
    width: 90%;
    height: 300px;
  }
  
  .carrusel-btn {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
  
  .overlay-title {
    font-size: 1.2rem;
  }
  
  .overlay-text {
    font-size: 0.9rem;
  }
  
  .titulo-platillos {
    font-size: 2rem;
  }
  
  .btn-nombre-platillo {
    font-size: 1.2rem;
  }
  
  .btn-ver-receta {
    font-size: 1.2rem;
  }
    .video-container-platillo iframe {
    max-width: 500px !important;
    height: 280px !important;
  }
    .contenido-platillo {
    padding: 0 15px !important;
  }
  
  .platillos-dificultad {
    padding: 0px 0 40px; /* REDUCIDO */
  }
}

/* === MODIFICACIONES PARA MÓVIL - VIDEOS Y PÁRRAFOS === */
@media (max-width: 576px) {
  /* Contenedor principal de contenido de platillo */
  .contenido-platillo {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
    margin: 0 auto !important;
    padding: 0 20px 0 40px !important;
  }
  .recetas {
    padding: 30px 10px 15px; /* MÁS REDUCIDO */
  }
  
  /* Contenedor de video - centrado */
  .video-container-platillo {
    width: 100% !important;
    max-width: 100% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin: 0 auto 20px auto !important;
    padding: 0 !important;
  }
  
  /* Iframe de YouTube - centrado */
  .video-container-platillo iframe {
    width: 100% !important;
    max-width: 340px !important;
    height: 190px !important;
    margin: 0 auto !important;
    display: block !important;
  }
  
  
  .bola-amarilla-recetas {
    width: 200px;
    height: 160px;
    left: -4vh;
    top: -2vh;
  }
  
  .bola-amarilla-recetas .logo-recetas {
    width: 80px;
    margin-left: -20px;
  }
  
  .circle-icon-recetas {
    width: 35px;
    height: 35px;
  }
  
  .circle-icon-recetas i {
    font-size: 20px;
  }
  
  .circle-icon-recetas.home-icon {
    top: 50px;
    right: 15px;
  }
  
  .titulo-recetas {
    font-size: 2rem; /* MÁS REDUCIDO */
    margin-top: 100px;
  }
  
  .carrusel-wrapper {
    padding: 0 40px !important; /* Reducir padding para dar más espacio */
  }
    .carrusel-btn {
    z-index: 1000 !important; /* Asegurar que estén por encima de todo */
    background: rgba(255, 255, 255, 0.9) !important; /* Fondo más sólido */
    border: 2px solid #000000 !important; /* Borde para mejor visibilidad */
  }
    .carrusel-prev {
    left: -30px !important; /* Alejar del borde */
  }
  
  .carrusel-next {
    right: -30px !important; /* Alejar del borde */
  }
 
  .carrusel {
    overflow: visible !important;
    height: 250px; /* MÁS REDUCIDO */
    margin-bottom: 15px; /* ESPACIO CONTROLADO */
  }

  .image-container {
    width: 90%;
    height: 180px;
  }
  
  .image-container.single-image {
    height: 250px;
  }
  
  .carrusel-btn {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .overlay-title {
    font-size: 1rem;
  }
  
  .overlay-text {
    font-size: 0.8rem;
  }
  
  .titulo-platillos {
    font-size: 1.8rem;
  }
  
  .btn-nombre-platillo {
    font-size: 1.1rem;
    padding: 10px 20px;
  }
  
  .btn-ver-receta {
    font-size: 1.1rem;
    padding: 10px 20px;
  }
  
  .descripcion-platillo {
    text-align: center !important;
    margin-left: auto;
    margin-right: auto;
    max-width: 95%;  }
  
  .platillos-dificultad {
    padding: 0px 0 30px; /* MÁS REDUCIDO */
  }
  
  footer p {
    font-size: 0.8rem;
  }
}


/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* ===== NUEVOS ESTILOS PARA LA SECCIÓN TUTORIAL - MODIFICADA ===== */
.tutorial-section {
  padding: 80px 20px;
  background-color: #f9f9f9;
  position: relative;
  min-height: 100vh;
}

.tutorial-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Bola amarilla con iconos - POSICIÓN MÁS BAJA */
.bola-amarilla-tutorial {
  position: absolute;
  top: 0;
  left: -20px;
  width: 400px;
  height: 250px;
  background-color: #F2E4C9;
  border-radius: 3%;
  border-bottom-right-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.bola-amarilla-tutorial .logo-tutorial {
  width: 160px;
  height: auto;
  margin-top: -80px;
  margin-left: -70px;
}

.circle-icon-tutorial {
  position: absolute;
  border-radius: 30%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 10;
  color: white;
}

.circle-icon-tutorial i {
  font-size: 30px;
}

.circle-icon-tutorial:hover {
  transform: scale(1.2);
}

/* Mantener solo el icono de la casita */
.circle-icon-tutorial.user-icon,
.circle-icon-tutorial.search-icon,
.circle-icon-tutorial.saved-icon {
  display: none; /* Ocultar los iconos no deseados */
}

.circle-icon-tutorial.home-icon {
  top: 110px;
  right: 70px;
}

/* Botones de nombre y tiempo - CENTRADO - MODIFICADO PARA SELECTOR */
.tutorial-header {
  display: flex;
  justify-content: center;
  padding-right: 0;
}

.botones-tutorial {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: flex-start;
  margin-left: 0;
}

/* Estilo mejorado para el select */
.btn-nombre-tutorial {
  background: #f25541;
  color: white;
  border: none;
  padding: 14px 25px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 50px; /* Más redondeado */
  width: 300px;
  text-align: center;
  margin-left: 40rem;
  
  /* Quitar estilos nativos */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  
  /* Flecha personalizada siempre visible */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='%23ffffff' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 15px center;
  background-repeat: no-repeat;
  background-size: 25px;
  
  /* Sombras y transiciones */
  box-shadow: 0 4px 10px rgb(255, 102, 0);
  transition: all 0.3s ease;
}

/* Asegurar que la flecha no desaparezca en estados de focus */
.btn-nombre-tutorial:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='%23ffffff' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
}

/* Opciones del menú */
select.btn-nombre-tutorial option {
  background: #ffafaf;
  color: white;
  padding: 12px;
  font-size: 1rem;
  font-weight: 500;
}

.btn-tiempo {
  background: #6FC5C2;
  font-weight: bold;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1.1rem;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 200px;
  margin-left: 680px;
  order: 2;
}

/* Reloj negro fuera del botón */
.reloj-negro {
  color: #000;
  font-size: 1.7rem;
  margin-left: 860px;
  margin-top: -62.9px;
  order: 3;
  align-self: center;
}

/* Botón TUTORIAL menos ancho */
.btn-tutorial-grande {
    background: #DC5343;
    color: white;
    border: none;
    padding: 20px 40px;
    font-size: 1.4rem;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;
    margin-left: 135px;
    display: block;
    width: 250px; /* Menos ancho */
}

/* Contenido principal del tutorial */
.tutorial-content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

/* Video tutorial HORIZONTAL - CENTRADO */
.video-tutorial-horizontal {
  flex: 1;
  max-width: 600px;
  margin: 0 auto;
}

.video-tutorial-horizontal iframe {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  aspect-ratio: 16/9; /* Formato horizontal */
}

/* Sección de ingredientes */
.ingredientes-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

/* Botón ingredientes AMARILLO - TEXTO BLANCO AND MÁS REDONDEADO */
.btn-ingredientes.amarillo {
  background: #FACA76;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  width: fit-content;
}

/* Carrusel de ingredientes - SOLO UNO VISIBLE */
.carrusel-ingredientes {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carrusel-ingredientes-container {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
  justify-content: center;
}

.ingrediente-item {
  display: none;
  text-align: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.ingrediente-item.active {
  display: flex;
  justify-content: center;
}

.ingrediente-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.ingrediente-item img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
}

.ingrediente-item p {
  font-size: 1.1rem;
  margin: 0;
  font-weight: bold;
  color: #333;
}

.carrusel-btn-ingredientes {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.carrusel-prev-ingredientes {
  left: 80px;
}

.carrusel-next-ingredientes {
  right: 80px;
}

/* ========== SECCIÓN PASO A PASO ========== */
.paso-a-paso {
  padding: 30px 10px 40px;
  background-color: #f9f9f9;
  margin-top: -30px;
}

.container-pasos {
  max-width: 1200px;
  margin: 0 auto;
}

.btn-paso-a-paso {
  background: #DC5343;
  width: 17rem;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 50px;
  display: block;
}

.paso {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  gap: 40px;
}

.imagen-paso {
  flex: 1;
}

.imagen-paso img {
  width: 100%;
  min-width: 450px;
  max-width: 400px;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.numero-paso {
  font-size: 4rem;
  font-weight: bold;
  min-width: 80px;
  text-align: center;
}

.numero-paso.azul {
  color: #6FC5C2;
}

.numero-paso.amarillo {
  color: #FACA76;
}

.numero-paso.naranja {
  color: #ff7043;
}

.numero-paso.rojo {
  color: #DC5343;
}

.texto-paso {
  flex: 2;
}

.texto-paso p {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
  margin: 0;
}

/* ===== MEDIA QUERIES PARA RESPONSIVIDAD ===== */
@media (max-width: 1200px) {
  .btn-nombre-tutorial {
    margin-left: 30rem;
  }
  
  .btn-tiempo {
    margin-left: 500px;
  }
  
  .reloj-negro {
    margin-left: 700px;
  }
}

@media (max-width: 992px) {
  .bola-amarilla-tutorial {
    width: 250px;
    height: 220px;
  }
  
  .bola-amarilla-tutorial .logo-tutorial {
    width: 120px;
    margin-top: -60px;
    margin-left: -40px;
  }
  
  .btn-nombre-tutorial {
    margin-left: 20rem;
    width: 250px;
  }
  
  .btn-tiempo {
    margin-left: 350px;
    width: 180px;
  }
  
  .reloj-negro {
    margin-left: 520px;
    margin-top: -58px;
  }
  
  .btn-tutorial-grande {
    margin-left: 80px;
  }
  
  .tutorial-content {
    flex-direction: column;
  }
  
  .video-tutorial-horizontal {
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  
  /* Reorganizar paso a paso para móviles */
  .paso {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  .imagen-paso img {
    min-width: 100%;
    max-width: 100%;
  }
  
  /* Asegurar orden: número, imagen, texto */
  .paso .numero-paso {
    order: 1;
    font-size: 3rem;
    margin-bottom: 10px;
  }
  
  .paso .imagen-paso {
    order: 2;
  }
  
  .paso .texto-paso {
    order: 3;
  }
}

@media (max-width: 768px) {
  .bola-amarilla-tutorial {
    position: relative;
    width: 200px;
    height: 180px;
    left: 0;
    margin: 0 auto 20px;
    border-radius: 50%;
  }
  
  .bola-amarilla-tutorial .logo-tutorial {
    width: 100px;
    margin-top: -40px;
    margin-left: 0;
  }
  
  .circle-icon-tutorial.home-icon {
    top: 100px;
    right: 75px;
  }
  
  .tutorial-header {
    justify-content: flex-start;
  }
  
  .botones-tutorial {
    width: 100%;
    align-items: center;
  }
  
  .btn-nombre-tutorial {
    margin-left: 0;
    width: 90%;
    max-width: 300px;
  }
  
  .btn-tiempo {
    margin-left: 0;
    order: 3;
    width: 90%;
    max-width: 200px;
  }
  
  .reloj-negro {
    margin: 0 0 10px 0;
    order: 2;
    align-self: center;
  }
  
  .btn-tutorial-grande {
    margin: 0 auto;
    width: 90%;
    max-width: 250px;
  }
  
  /* Centrar video en móviles */
  .video-tutorial-horizontal {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
  }
  
  /* Centrar ingredientes con flechas en móviles */
  .ingredientes-section {
    width: 100%;
    align-items: center;
  }
  
  .carrusel-ingredientes {
    width: 100%;
    justify-content: center;
  }
  
  .carrusel-prev-ingredientes {
    left: 5px;
  }
  
  .carrusel-next-ingredientes {
    right: 5px;
  }
  
  .ingrediente-content {
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: center;
  }
  
  .btn-paso-a-paso {
    width: 90%;
    margin: 0 auto 30px;
    text-align: center;
  }
  
  .numero-paso {
    font-size: 3rem;
  }
  
  /* Asegurar que el contenido de ingredientes esté centrado */
  .carrusel-ingredientes-container {
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .tutorial-section {
    padding: 60px 15px;
  }
  
  .bola-amarilla-tutorial {
    width: 180px;
    height: 170px;
  }
  
  .bola-amarilla-tutorial .logo-tutorial {
    width: 80px;
    margin-top: -30px;
  }
  
  .circle-icon-tutorial.home-icon {
    top: 115px;
    right: 68px;
    width: 40px; 
    height: 40px;
  }
  
  .circle-icon-tutorial i {
    font-size: 24px;
  }
  
  .btn-nombre-tutorial {
    font-size: 1rem;
    padding: 12px 20px;
  }
  
  .btn-tiempo {
    font-size: 1rem;
    padding: 10px 20px;
  }
  
  .btn-tutorial-grande {
    font-size: 1.2rem;
    padding: 15px 30px;
  }
  
  .btn-ingredientes.amarillo {
    font-size: 1rem;
    padding: 10px 20px;
  }
  
  .ingrediente-item img {
    width: 80px;
    height: 80px;
  }
  
  .ingrediente-item p {
    font-size: 1rem;
  }
  
  .btn-paso-a-paso {
    font-size: 1.2rem;
    padding: 12px 25px;
  }
  
  .numero-paso {
    font-size: 2.5rem;
  }
  
  .texto-paso p {
    font-size: 1rem;
  }
  
  /* Ajustes adicionales para móviles pequeños */
  .carrusel-ingredientes {
    height: 160px;
  }
  
  .carrusel-btn-ingredientes {
    width: 35px;
    height: 35px;
  }
}
/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    /* ========== NUEVA SECCIÓN: PRODUCCIÓN - MODIFICADA ========== */
.produccion-section {
  padding: 80px 0 20px;
  background-color: #f9f9f9;
  position: relative;
}

/* ========== BOLA AMARILLA (CREMA) - MODIFICADA ========== */
.bola-amarilla-produccion {
  position: absolute; /* Cambiado de fixed a absolute */
  top: 0;
  left: 0;
  width: 320px; /* Aumentado de 120px a 320px */
  height: 250px; /* Aumentado de 120px a 250px */
  background-color: #F2E4C9;
  border-radius: 0 0 100% 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Cambiado para posicionamiento independiente */
  justify-content: flex-start; /* Cambiado para posicionamiento independiente */
  overflow: hidden;
  z-index: 1000;
  padding: 15px; /* Aumentado el padding */
}

/* Contenedor para el logo - posicionamiento absoluto */
.logo-container {
  position: absolute;
  top: 30px; /* Ajusta según necesites */
  left: 30px; /* Ajusta según necesites */
  z-index: 1001;
}

.bola-amarilla-produccion .logo-produccion {
  width: 150px; /* Aumentado de 70px a 150px */
  height: auto;
}

/* Contenedor para el icono de casa - posicionamiento absoluto */
.home-icon-container {
  position: absolute;
  bottom: 30px; /* Ajusta según necesites */
  right: 30px; /* Ajusta según necesites */
  z-index: 1001;
}

/* Icono de casa - ahora blanco */
.circle-icon-produccion.home-icon {
  border-radius: 50%;
  width: 50px; /* Aumentado de 40px a 50px */
  height: 50px; /* Aumentado de 40px a 50px */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px; /* Aumentado de 20px a 24px */
  cursor: pointer;
  transition: all 0.3s ease;
  color: #fff; /* Cambiado de negro a blanco */
}

.circle-icon-produccion.home-icon:hover {
  transform: scale(1.5);
}

/* Ocultamos los demás iconos */
.circle-icon-produccion.user-icon,
.circle-icon-produccion.search-icon,
.circle-icon-produccion.saved-icon {
  display: none;
}

.produccion-container {
  max-width: 100%;
  margin: 0;
  padding: 0 15px;
}

/* Botón PROYECTO - CAFÉ CLARO - A LA DERECHA */
.produccion-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
}

.btn-proyecto-cafe {
  background: #794A3A; 
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
}

/* Botón IMAGENES - ROJO CENTRADO */
.produccion-imagenes-btn {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.btn-imagenes-rojo {
  background: #DC5343;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
}

/* 3 imágenes centradas */
.tres-imagenes {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.tres-imagenes img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

/* Secciones de producción - MODIFICADAS */
.seccion-produccion {
  margin-bottom: 60px;
  width: 100%;
}

.titulo-seccion {
  display: inline-block;
  color: white;
  padding: 12px 25px;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.titulo-seccion.azul {
  background: #6FC5C2;
  margin-left: 0;
  border-radius: 0;
}

.titulo-seccion.cafe {
  background: #A67C52;
}

.titulo-seccion.amarillo {
  background: #FACA76;
  color: #333;
  margin-left: 0;
  border-radius: 0;
}

.titulo-seccion.rojo {
  background: #DC5343;
  margin-right: 0;
  border-radius: 0;
  float: right;
}

.contenido-seccion {
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;
  width: 100%;
}

.contenido-seccion.reverse {
  flex-direction: row-reverse;
}

.imagen-seccion {
  flex: 1;
  position: relative;
}

.imagen-seccion img,
.imagen-seccion video {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}

.texto-seccion {
  flex: 1;
  padding: 0 20px;
}

.texto-seccion p {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
}

/* Sección PREPRODUCCIÓN - MODIFICADA: pegada a la izquierda */
.preproduccion-modificada {
  margin-left: 0;
  padding-left: 0;
}

.preproduccion-modificada .imagen-seccion video {
  margin-left: 0;
  border-radius: 0;
}

/* Sección PRODUCCIÓN - MODIFICADA: texto a la izquierda, video a la derecha */
.produccion-modificada {
  flex-direction: row; /* Cambiado de row-reverse a row */
}

.produccion-modificada .imagen-seccion video {
  margin-right: 0;
  border-radius: 0;
}

/* Sección POSTPRODUCCIÓN - MODIFICADA: botón a la izquierda, video pegado a la izquierda */
.postproduccion-modificada .imagen-seccion video {
  margin-left: 0;
  border-radius: 0;
}

/* ===== RECTÁNGULO CON LOGO Y REDES SOCIALES ===== */
.rectangle {
  width: 100%;
  background-color: #F2E4C9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px 20px;
  gap: 25px;
}

.logo-rectangle {
  max-width: 160px;
  height: auto;
  margin-bottom: 10px;
}

.social-icons {
  display: flex;
  gap: 25px;
}

.social-link {
  text-decoration: none;
}

.fa-instagram, .fa-tiktok {
  font-size: 35px;
  color: #000;
  transition: all 0.3s ease;
}

.fa-instagram:hover, .fa-tiktok:hover {
  transform: scale(1.2);
  color: #ffc94c;
}

/* ===== FOOTER ===== */
footer {
  background: #201f1f;
  color: #ffffff;
  text-align: center;
  padding: 20px;
  font-size: 1.2rem;
}

/* ===== RESPONSIVE PARA MÓVILES ===== */
@media (max-width: 768px) {
  .bola-amarilla-produccion {
    width: 180px;
    height: 180px;
  }
  
  .logo-container {
    top: 20px;
    left: 20px;
  }
  
  .bola-amarilla-produccion .logo-produccion {
    width: 90px;
  }
  
  .home-icon-container {
    bottom: 20px;
    right: 20px;
  }
  
  .circle-icon-produccion.home-icon {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .btn-proyecto-cafe,
  .btn-imagenes-rojo {
    padding: 10px 20px;
    font-size: 1.2rem;
  }

  .tres-imagenes img {
    width: 100%;
    max-width: 300px;
  }

  .contenido-seccion {
    flex-direction: column;
    gap: 20px;
  }

  .imagen-seccion video,
  .imagen-seccion img {
    height: 200px;
  }

  .texto-seccion {
    padding: 0 10px;
  }

  .titulo-seccion {
    font-size: 1.2rem;
    padding: 10px 20px;
    float: none;
    display: block;
    width: 100%;
    text-align: center;
  }
  
  .titulo-seccion.rojo {
    float: none;
  }
}

@media (max-width: 480px) {
  .produccion-section {
    padding: 70px 0 10px;
  }
  
  .bola-amarilla-produccion {
    width: 140px;
    height: 140px;
  }
  
  .logo-container {
    top: 15px;
    left: 15px;
  }
  
  .bola-amarilla-produccion .logo-produccion {
    width: 70px;
  }
  
  .home-icon-container {
    bottom: 15px;
    right: 15px;
  }
  
  .circle-icon-produccion.home-icon {
    width: 35px;
    height: 35px;
    font-size: 18px;
  }

  .btn-proyecto-cafe,
  .btn-imagenes-rojo {
    padding: 8px 16px;
    font-size: 1rem;
  }

  .titulo-seccion {
    font-size: 1rem;
  }

  .texto-seccion p {
    font-size: 0.9rem;
  }
}
/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    /* ===== ANIMACIONES ===== */
    @keyframes fadeIn {
      from { 
        opacity: 0; 
        transform: translateY(20px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }

    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes subeYBaja {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      40% {
        transform: translateX(-50%) translateY(-15px);
      }
      60% {
        transform: translateX(-50%) translateY(-7px);
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes slideInLeft {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.3);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes shake {
     0%, 100% {
        transform: translateX(0);
      }
      10%, 30%, 50%, 70%, 90% {
        transform: translateX(-2px);
      }
      20%, 40%, 60%, 80% {
        transform: translateX(2px);
      }
    }

    @keyframes glow {
      0% {
        box-shadow: 0 0 5px rgba(255, 196, 76, 0.2);
      }
      50% {
        box-shadow: 0 0 20px rgba(255, 196, 76, 0.6);
      }
      100% {
        box-shadow: 0 0 5px rgba(255, 196, 76, 0.2);
      }
    }

    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0px);
      }
    }

    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(4);
        opacity: 0;
      }
    }

    /* Aplicar animaciones a elementos específicos */
    .login-box {
      animation: fadeIn 0.8s ease-out;
    }

    .team-member {
      animation: fadeInUp 0.6s ease-out;
    }

    .team-member:nth-child(1) { animation-delay: 0.1s; }
    .team-member:nth-child(2) { animation-delay: 0.2s; }
    .team-member:nth-child(3) { animation-delay: 0.3s; }
    .team-member:nth-child(4) { animation-delay: 0.4s; }
    .team-member:nth-child(5) { animation-delay: 0.5s; }
    .team-member:nth-child(6) { animation-delay: 0.6s; }
    .team-member:nth-child(7) { animation-delay: 0.7s; }
    .team-member:nth-child(8) { animation-delay: 0.8s; }
    .team-member:nth-child(9) { animation-delay: 0.9s; }

    .video-item {
      animation: fadeInUp 0.8s ease-out;
    }

    .video-item:nth-child(1) { animation-delay: 0.2s; }
    .video-item:nth-child(2) { animation-delay: 0.4s; }
    .video-item:nth-child(3) { animation-delay: 0.6s; }

    .btn-proyecto {
      animation: pulse 2s infinite;
    }

    .btn-ver-receta:hover {
      animation: bounce 0.6s ease;
    }

    .social-icon:hover {
      animation: bounce 0.5s ease;
    }

    .ingrediente-item {
      animation: zoomIn 0.5s ease-out;
    }

    .paso {
      animation: fadeInUp 0.8s ease-out;
    }

    .paso:nth-child(odd) {
      animation: fadeInLeft 0.8s ease-out;
    }

    .paso:nth-child(even) {
      animation: fadeInRight 0.8s ease-out;
    }

    /* ===== MEDIA QUERIES RESPONSIVE ===== */
