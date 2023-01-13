import { defineStore } from 'pinia'

export const useContenido = defineStore('Contenido', {
  // arrow function recommended for full type inference
  state: () => ({
    cardAbout: [
        {
            icon: 'ph:handshake-fill',
            title: 'Transparency',
            text: 'Transparency breeds trust, and clients put significant trust in us from day one.',
        },
        {
            icon: 'carbon:piggy-bank',
            title: 'Financing',
            text: 'We aim to help our clients get their ideas off the ground, and, at the same time, lower their risk by offering financing solutions in three-, six-, and twelve-month packages which allow customers to obtain immediate returns with low investments of capital.',
        },
        {
            icon: 'fluent:handshake-24-regular',
            title: 'Dedication',
            text: 'At EYSS, we are very hard workers and we are used to overcoming challenges on a daily basis, giving us a competitive advantage.',
        },
    ],
    Servicios: [
        {
            title: 'Digital Transformation',
            text:'Digital transformation helps automate processes in different areas within an organization, providing efficiency. We apply different instruments that form a set of strategies to promote your company and brand.',
            span: 'Workflow management, digitization of processes and automation.',
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