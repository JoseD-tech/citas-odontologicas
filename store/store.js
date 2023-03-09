import { defineStore } from 'pinia'

export const useContenido = defineStore('Contenido', {
  // arrow function recommended for full type inference
  state: () => ({
    cardAbout: [
        {
            icon: 'ph:handshake-fill',
            title: 'Transparencia',
            text: 'Nos esforzamos por crear un entorno de apertura y confianza con nuestros clientes desde el principio, y es esta confianza la que nos permite trabajar juntos para alcanzar nuestros objetivos comunes.',
        },
        {
            icon: 'carbon:piggy-bank',
            title: 'Finanzas',
            text: 'Ofrecemos una gama de soluciones de financiación que pueden ayudarle a poner en marcha su negocio y maximizar su potencial. Proporcionamos paquetes flexibles a tres, seis y doce meses que le permiten invertir en las soluciones más recientes, innovadoras y eficaces sin necesidad de una gran inversión de capital.',
        },
        {
            icon: 'fluent:handshake-24-regular',
            title: 'Dedicacíon',
            text: 'Nos dedicamos a ayudarle a alcanzar sus objetivos proporcionándole las soluciones más recientes, innovadoras y eficaces. Nuestro equipo de profesionales está comprometido a ayudarle a mantenerse por delante de la competencia y maximizar su potencial.',
        },
    ],
    Servicios: [
        {
            title: 'Transformación digital',
            text:'La transformación digital ayuda a automatizar procesos en diferentes áreas dentro de una   organización, aportando eficiencia. Aplicamos diferentes instrumentos que forman un conjunto de estrategias para promocionar su empresa y su marca. Nuestro equipo de profesionales está comprometido a ayudarle a mantenerse por delante de la competencia y maximizar su potencial. Desde la tokenización de sus activos digitales hasta el desarrollo de tecnologías holísticas para la economía digital y Edtech, nos centramos en proporcionar a nuestros clientes las herramientas y los recursos que necesitan para tener éxito. Permítanos ayudarle a llevar su negocio al siguiente nivel y a desarrollar todo su potencial.',
            span: 'Gestión de flujos de trabajo, digitalización de procesos y automatización.',
            icon: 'digital'
        },
        {
            title: 'Staff Personal',
            text:'Contamos con un equipo de profesionales altamente experimentados, con habilidades y destrezas específicas muy importantes para llevar a cabo proyectos robustos y de gran envergadura, además se caracterizan por trabajar de forma ágil, con flexibilidad para ajustarse al cliente y entregando resultados de la más alta calidad.',
            span: 'Create or expand your technical team with dedicated offshore developers.',
            icon: 'personal'
        },
        {
            title: 'Diseño Grafico',
            text:'Podemos ofrecer a nuestros clientes excelentes servicios de diseño gráfico que incluyen branding, diseño digital, imágenes corporativas, imágenes publicitarias y de confección entre otros servicios relacionados con el diseño.',
            span: 'Logos, videos, banners, business cards, flyers.',
            icon: 'grafico'
        },
        {
            title: 'Desarrollo Web',
            text:'Desarrollamos aplicaciones web desarrolladas para cumplir los requerimientos específicos en cada proyecto, incluyendo integración con sistemas en uso, Además de un aseguramiento de la calidad verifica que el software cumpla requisitos de seguridad informática y sus operaciones sean constantes en todos los escenarios. Desarrollados con lenguajes de programación y herramientas actuales que lo hacen robustos, fáciles de mantener y flexibles a cambios posteriores.',
            span: 'Websites, landing pages, custom web systems, web design, WordPress and PrestaShop',
            icon: 'web'
        },
        {
            title: 'Digital Marketing',
            text:'En Sinapsys tenemos el compromiso de ayudar a nuestros clientes e instituciones públicas a asesorarte el mejor manejo, diseño y producción digital y audiovisual, para que puedan impulsar sus productos por las redes sociales, mejorando la Optimización y Gestión de los procesos',
            span: 'SEO/SEM, community manager, email marketing, branding, campaign ads.',
            icon: 'marketing'
        },
        {
            title: 'Custom Software Development',
            text:'Nos especializamos en la creación de software personalizado que te ofrece una ventaja competitiva. Ya sea a través de una aplicación, una aplicación web, una plataforma de datos o cualquier otra cosa que quieras crear, justo como quieras que sea.',
            span: 'business software that does what our clients want need it to do',
            icon: 'desarrollo'
        },
        {
            title: 'Consultancy',
            text:'Nos especializamos en continuidad operativa, ofrecemos un servicio oportuno, de calidad y garantizado. Realizamos soporte remoto y de ser necesario hacemos visitas técnicas, Desarrollamos Mantenimiento Preventivo y Correctivo, Asesoramiento en Instalación de Equipos de Computación, Redes, Cámaras de Seguridad, Cercas Eléctricas.',
            span: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            icon: 'consultoria'
        },
        {
            title: 'Mobile App Development',
            text:'We help customers convert their ideas into reality. Whether you require excellent performance building naïve IOS and Android or if you need just to build your idea in a way that works and within the budget, we can help.',
            span: 'Hybrid applications for Android and iOS',
            icon: 'movil'
        },
    ]
  }),
})