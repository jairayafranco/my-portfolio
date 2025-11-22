import type { Experience, Education, Skill } from '../types';

interface CVData {
    education: Education[];
    experience: Experience[];
    certifications?: string[];
    certificaciones?: string[];
    skills?: Skill[];
}

export const CV: Record<'en' | 'es', CVData> = {
    en: {
        education: [
            {
                name: "Software Development Technologist",
                from: "Aug 2019",
                to: "May 2023",
                where: "UNIMINUTO Colombia",
            },
            {
                name: "Systems Technician",
                from: "Feb 2019",
                to: "June 2019",
                where: "Cenanfo",
            },
        ],
        experience: [
            {
                name: "Web Developer",
                from: "Aug 2022",
                to: "Nov 2022",
                where: "Educca",
                description:
                    "I was involved in diverse projects that showcased my proficiency in web development. This included crafting a chat application using the NextJS framework, seamlessly integrated into the Moodle platform. Additionally, I specialized in creating impactful Landing Pages, demonstrating my adeptness in navigating and enhancing user experiences within the Wordpress environment. My responsibilities extended to troubleshooting and implementing enhancements for both Moodle and Wordpress, ensuring optimal functionality and user satisfaction.",
            },
            {
                name: "Web Developer",
                from: "Apr 2021",
                to: "Apr 2022",
                where: "Pegasus Software S.A.S",
                description:
                    "I worked with a technology stack that included PHP, MySQL, Handlebars, JQuery, JavaScript, and Bootstrap. One of my key responsibilities involved developing a new module for managing student grades. This module aimed to simplify the process of entering grades, making it more user-friendly for teachers. Additionally, I handled the administration of Google Workspace accounts for schools and contributed to the development of websites for educational institutions. My role also encompassed providing support and troubleshooting for various reports developed in PHP. This included addressing and resolving issues in the reporting systems utilized by different schools, ensuring smooth and effective functionality.",
            },
            {
                name: "General Employee",
                from: "Sep 2020",
                to: "Dec 2020",
                where: "Pegasus Software S.A.S",
                description:
                    "Photoshop Usage, Video Editing, Excel Reporting, Typing, Web Development",
            },
            {
                name: "Internship for Systems Technician",
                from: "Feb 2019",
                to: "Jul 2019",
                where: "Pegasus Software S.A.S",
                description: "",
            },
        ],
        certifications: [
            "AWS Cloud Fundamentals for Professionals",
            "Fullstack to Backend Learning Path",
            "Expert Web Developer Path",
            "EF SET English Certificate™ C2 75/100 Proficient",
            "ChatGPT Prompt Engineering for Developers",
            "Professional Web Developer Path",
            "Beginner Web Developer Path",
            "Bootcamp Fullstack - Midudev",
            "JavaScript Full- Course from Beginner to Professional",
            "Computer Architecture",
            "The Hour of Code",
        ],
        skills: [
            {
                name: "JavaScript",
                icon: "vscode-icons:file-type-js-official",
            },
            {
                name: "TypeScript",
                icon: "vscode-icons:file-type-typescript-official",
            },
            {
                name: "React",
                icon: "vscode-icons:file-type-reactjs",
            },
            {
                name: "NextJS",
                icon: "vscode-icons:file-type-next",
            },
            {
                name: "VueJS",
                icon: "vscode-icons:file-type-vue",
            },
            {
                name: "NodeJS",
                icon: "vscode-icons:file-type-node",
            },
            {
                name: "PHP",
                icon: "vscode-icons:file-type-php",
            },
            {
                name: "MySQL",
                icon: "vscode-icons:file-type-mysql",
            },
            {
                name: "MongoDB",
                icon: "vscode-icons:file-type-mongo",
            },
            {
                name: "API REST",
                icon: "vscode-icons:file-type-rest",
            },
            {
                name: "HTML",
                icon: "vscode-icons:file-type-html",
            },
            {
                name: "CSS",
                icon: "vscode-icons:file-type-css",
            },
            {
                name: "Bootstrap",
                icon: "logos:bootstrap",
            },
            {
                name: "TailwindCSS",
                icon: "vscode-icons:file-type-tailwind",
            },
            {
                name: "Git",
                icon: "vscode-icons:file-type-git",
            },
            {
                name: "GitHub",
                icon: "mdi:github",
            },
            {
                name: "Photoshop",
                icon: "vscode-icons:file-type-photoshop",
            },
            {
                name: "Figma",
                icon: "logos:figma",
            },
            {
                name: "Wordpress",
                icon: "mdi:wordpress",
            },
            {
                name: "Linux",
                icon: "mdi:linux",
            },
        ]
    },
    es: {
        education: [
            {
                name: "Tecnólogo en Desarrollo de Software",
                from: "Ago 2019",
                to: "May 2023",
                where: "UNIMINUTO Colombia",
            },
            {
                name: "Técnico en Sistemas",
                from: "Feb 2019",
                to: "Jun 2019",
                where: "Cenanfo",
            },
        ],
        experience: [
            {
                name: "Desarrollador Web",
                from: "Ago 2022",
                to: "Nov 2022",
                where: "Educca",
                description:
                    "Participé en diversos proyectos que mostraron mi habilidad en el desarrollo web. Esto incluyó la creación de una aplicación de chat utilizando el framework NextJS, integrada de manera fluida en la plataforma Moodle. Además, me especialicé en la creación de Landing Pages impactantes, demostrando mi habilidad para navegar y mejorar las experiencias de usuario dentro del entorno de Wordpress. Mis responsabilidades se extendieron a la resolución de problemas e implementación de mejoras tanto en Moodle como en Wordpress, asegurando una funcionalidad óptima y la satisfacción del usuario.",
            },
            {
                name: "Desarrollador Web",
                from: "Abr 2021",
                to: "Abr 2022",
                where: "Pegasus Software S.A.S",
                description:
                    "Trabajé con un conjunto de tecnologías que incluía PHP, MySQL, Handlebars, JQuery, JavaScript y Bootstrap. Una de mis responsabilidades clave implicó el desarrollo de un nuevo módulo para gestionar las calificaciones de los estudiantes. Este módulo tenía como objetivo simplificar el proceso de ingreso de calificaciones, haciéndolo más amigable para los profesores. Además, me encargué de la administración de cuentas de Google Workspace para escuelas y contribuí al desarrollo de sitios web para instituciones educativas. Mi rol también abarcó brindar soporte y solucionar problemas en varios informes desarrollados en PHP. Esto incluyó abordar y resolver problemas en los sistemas de informes utilizados por diferentes escuelas, garantizando un funcionamiento fluido y eficaz.",
            },
            {
                name: "Empleado General",
                from: "Sep 2020",
                to: "Dic 2020",
                where: "Pegasus Software S.A.S",
                description:
                    "Uso de Photoshop, Edición de Videos, Reportes en Excel, Digitación, Desarrollo de Páginas Web",
            },
            {
                name: "Prácticas para Técnico en Sistemas",
                from: "Feb 2019",
                to: "Jul 2019",
                where: "Pegasus Software S.A.S",
                description: "",
            },
        ],
        certificaciones: [
            "Fundamentos de la nube de AWS para profesionales",
            "Fullstack to Backend Learning Path",
            "Expert Web Developer Path",
            "EF SET English Certificate™ C2 75/100 Proficient",
            "ChatGPT Prompt Engineering for Developers",
            "Professional Web Developer Path",
            "Beginner Web Developer Path",
            "Bootcamp Fullstack - Midudev",
            "JavaScript Full- Curso desde Principiante hasta Profesional",
            "Arquitectura de Computadores",
            "The Hour of Code",
        ]
    }
}