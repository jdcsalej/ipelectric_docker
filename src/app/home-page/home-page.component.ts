import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPost, IServiceCard, IServiceDetail } from '../interfaces/home-page.interfaces';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {

  currenDate = new Date().getFullYear();


  isMobileMenuOpen = false;

  servicesall: IServiceCard[] = [
    {
      iconPath: '/assets/images/Cable.svg',
      title: 'Instalación de Cableado Estructurado',
      description: 'Mejora la conectividad y seguridad de tu empresa o local comercial con instalaciones certificadas de alta calidad.'
    },
    {
      iconPath: '/assets/images/Telefono.svg',
      title: 'Telefonía IP',
      description: 'Mejora la conectividad y seguridad de tu empresa o local comercial con instalaciones certificadas de alta calidad.'
    },
    {
      iconPath: '/assets/images/Router.svg',
      title: 'Networking y Conectividad',
      description: 'Establece una red de alta calidad con soluciones de switching, integración de firewalls, y redes inalámbricas.'
    },
    {
      iconPath: '/assets/images/Camara.svg',
      title: 'Circuito Cerrado de Televisión (CCTV)',
      description: 'Mejora la seguridad de tu hogar o empresa con cámaras análogas y digitales.'
    },
    {
      iconPath: '/assets/images/Desarrollo.svg',
      title: 'Desarrollo a tu Medida',
      description: 'Impulsa la visibilidad de tu negocio en internet con desarrollo de páginas web corporativas y tiendas virtuales adaptadas a tus necesidades.'
    },
    {
      iconPath: '/assets/images/Electricidad.svg',
      title: 'Instalaciones Eléctricas',
      description: 'Fortalece el sistema eléctrico de tu empresa con servicios de diseño de planos eléctricos, mantenimiento preventivo, y suministro de UPS.'
    }
  ];

  selectedService: IServiceDetail | null = null;

  services: IServiceDetail[] = [
    {
      id: 0,
      icon: '/assets/images/Electricidad.svg',
      name: 'Instalaciones Eléctricas',
      title: 'Instalaciones Eléctricas',
      description: 'Mejora y Fortalece el sistema eléctrico de tu empresa o local comercial, normaliza las conexiones de mayor importancia para la operación de tu negocio.',
      detailCards: [
        { icon: '/assets/images/Electricidad.svg', text: 'Diseño y elaboración de planos eléctricos' },
        { icon: '/assets/images/Electricidad.svg', text: 'Instalaciones de redes eléctricas, normal y regulada en baja tensión.' },
        { icon: '/assets/images/Electricidad.svg', text: 'Mantenimientos correctivos y preventivos' },
        { icon: '/assets/images/Electricidad.svg', text: 'Suministro e instalación de ups' },
      ],
      largeImage: '/assets/images/IElectrica.svg'
    },
    {
      id: 1,
      icon: '/assets/images/Cable.svg',
      name: 'Instalación de cableado estructurado',
      title: 'Instalación de cableado estructurado',
      description: 'Mejora la conectividad y seguridad de tu empresa o local comercial, con garantía y certificaciones en todas nuestras instalaciones:',
      detailCards: [
        { icon: '/assets/images/Cable.svg', text: 'Diseño de redes de datos' },
        { icon: '/assets/images/Cable.svg', text: 'Suministro de cableado estructurado' },
        { icon: '/assets/images/Cable.svg', text: 'Instalación de punto red en CAT 5e,6, 6a' },
        { icon: '/assets/images/Cable.svg', text: 'Suministro e instalación de rack y gabinete de datos' },
        { icon: '/assets/images/Cable.svg', text: 'Suministro e instalación de PVC y MT y cableofil' }
      ],
      largeImage: '/assets/images/Cables1.svg'
    },
    {
      id: 2,
      icon: '/assets/images/Telefono.svg',
      name: 'Telefonía IP',
      title: 'Telefonía IP',
      description: 'Integramos la telefonía digital a tu negocio con el objetivo del mejorar la convergencia de la red.',
      detailCards: [
        { icon: '/assets/images/Telefono.svg', text: 'Migración a telefonía IP' },
        { icon: '/assets/images/Telefono.svg', text: 'Conexiones de centrales telefónicas' },
        { icon: '/assets/images/Telefono.svg', text: 'Configuración de PBX' },
      ],
      largeImage: '/assets/images/TelefonoIP.svg'
    },
    {
      id: 3,
      icon: '/assets/images/Router.svg',
      name: 'Networking y Conectividad',
      title: 'Networking y Conectividad',
      description: 'Conectamos a todos los usuarios atraves de equipos activos de alta conmutación para establecer una red de alta calidad.lmplmentamos soluciones :',
      detailCards: [
        { icon: '/assets/images/Router.svg', text: 'Switching y equipos activos' },
        { icon: '/assets/images/Router.svg', text: 'Soluciones inalmabricas de corto y largo alcance' },
        { icon: '/assets/images/Router.svg', text: 'Creación de VPN' },
        { icon: '/assets/images/Router.svg', text: 'Integración de firewall' },
        { icon: '/assets/images/Router.svg', text: 'Adaptación de directorio activo' }
      ],
      largeImage: '/assets/images/Directorio.svg',
    },
  ];

  currentServiceIndex = 0;
  contactForm: FormGroup;

  isScrolled = false;

  posts: IPost[] = [
    {
      image: 'https://romelar.es/wp-contenido/uploads/2021/07/5-normativa-del-cableado-estructurado.jpg',
      title: 'Cableado Estructurado',
      category: 'Edificio empresarial',
      content: 'Instalación completa de red de datos categoría 6A para un edificio de oficinas de 12 pisos, incluyendo salas de servidores y puntos de acceso WiFi.',
      customer: 'Tech Solutions Inc.'
    },
    {
      image: 'https://www.servnet.mx/hubfs/En-que-consiste-un-control-de-ciberseguridad.png',
      title: 'Sistema de Seguridad',
      category: 'Centro comercial',
      content: 'Implementación de sistema integrado de videovigilancia con 64 cámaras IP de alta definición y control de acceso en todas las entradas.',
      customer: 'Plaza Central Mall'
    },
    {
      image: 'https://img.computing.es/wp-content/uploads/2022/12/14231424/22758_79.png',
      title: 'Hogar Inteligente',
      category: 'Residencia particular',
      content: 'Automatización completa de residencia con control de iluminación, climatización, seguridad y entretenimiento, todo integrado a través de una única aplicación.',
      customer: 'Residencial Altos del Valle'
    },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 50;
  }


  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }


  ngOnInit() {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        this.isMobileMenuOpen = false;
      }
    });

    this.selectedService = this.services[0];
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }



  selectService(service: IServiceDetail) {
    this.selectedService = service;
    this.currentServiceIndex = this.services.indexOf(service);
  }

  previousService() {
    if (this.currentServiceIndex > 0) {
      this.selectService(this.services[this.currentServiceIndex - 1]);
    }
    this.currentServiceIndex = this.currentServiceIndex - 1;

  }

  nextService() {
    if (this.currentServiceIndex < this.services.length - 1) {
      this.selectService(this.services[this.currentServiceIndex + 1]);
    } else if (this.currentServiceIndex >= (this.services.length - 1)) {
      this.currentServiceIndex = 0;
      this.selectService(this.services[this.currentServiceIndex]);
    } else {
      this.currentServiceIndex = 0;
      this.selectService(this.services[this.currentServiceIndex]);

    }
  }

  onSubmit() {

  }

  navigateToSection(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
