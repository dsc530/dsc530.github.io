export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'Daniel Cumbal DS',
    description: 'Data Scientist Portfolio',
    image: {
        src: '/nn.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        /*{
            text: 'Tags',
            href: '/tags'
        }*/
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    /*socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],*/
    hero: {
        title: 'Hi There & Welcome to My Journey with Data',
        text: "I am an Electronic Engineer with experience in technical support and automation. On these fields, I’ve acquired critical skills such as complex problem-solving, customer service, and project management. Over time, I discovered my passion for data and its potential to transform business decision-making. My interest began while working with automated systems, where I saw how patterns in information could optimize processes. This realization led me to specialize in Data Science, a field that allows me to leverage my existing expertise while developing new predictive models and machine learning solutions. Feel free to explore some of my coding endeavors on <a href='https://github.com/dsc530'>GitHub</a> or follow me on <a href='https://www.linkedin.com/in/daniel-cumbal/?locale=en_US'>Linkedin</a>.",
        image: {
            src: '/yo2.jpg',
            alt: 'My personal banner'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    /*subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },*/
    postsPerPage: 0,
    projectsPerPage: 8
};

export default siteConfig;
