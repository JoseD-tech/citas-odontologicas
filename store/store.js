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
            title: 'Staff Augmentation',
            text:'Create or expand your technical team with dedicated offshore developers based in our office. You can build your own team abroad for a fraction of the cost of assembling one domestically.',
            span: 'Create or expand your technical team with dedicated offshore developers.',
            icon: 'personal'
        },
        {
            title: 'Graphic Design',
            text:'We are able to offer our clients excellent graphic design services which includes branding and digital design, among other design-related services.',
            span: 'Logos, videos, banners, business cards, flyers.',
            icon: 'grafico'
        },
        {
            title: 'Web Development',
            text:'We deliver bespoke-quality web development for your website or web application.',
            span: 'Websites, landing pages, custom web systems, web design, WordPress and PrestaShop',
            icon: 'web'
        },
        {
            title: 'Digital Marketing',
            text:'Get the most of your marketing budget by investing in Digital Marketing. Being able to keep track of your efforts is one of the many advantages of using digital marketing.',
            span: 'SEO/SEM, community manager, email marketing, branding, campaign ads.',
            icon: 'marketing'
        },
        {
            title: 'Custom Software Development',
            text:'We build custom business software that does what our clients want need it to do. We pride ourselves on building some of the most complex software on the market.',
            span: 'business software that does what our clients want need it to do',
            icon: 'desarrollo'
        },
        {
            title: 'Consultancy',
            text:'We help companies make informed technology decisions. Our experienced consultants will help you understand your companys best options to increase efficiency.',
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