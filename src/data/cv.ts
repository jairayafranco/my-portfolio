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
                from: "08/2019",
                to: "09/2023",
                where: "UNIMINUTO Colombia",
            },
            {
                name: "Systems Technician",
                from: "02/2018",
                to: "06/2019",
                where: "Cenanfo",
            },
        ],
        experience: [
            {
                name: "FullStack Developer",
                from: "03/2024",
                to: "07/2024",
                where: "Kawak",
                description:
                    "Development of new features with Node.js, Vue.js and MySQL (Sequelize). Bug fixes and performance optimization to improve stability. Implementation of 2FA authentication to strengthen security. Creation of internal workflow tagging module to improve process management.",
            },
            {
                name: "Web Developer",
                from: "08/2022",
                to: "11/2022",
                where: "Educca",
                description:
                    "Development of chat with Next.js integrated into Moodle platform. Creation of landing pages and WordPress management. Maintenance, troubleshooting and improvements in Moodle and WordPress to optimize performance and usability.",
            },
            {
                name: "FullStack Developer",
                from: "04/2021",
                to: "04/2022",
                where: "Pegasus Software S.A.S",
                description:
                    "Development of grades module in PHP, optimizing grade entry for teachers. Management of Google Workspace accounts and development of websites for educational institutions. Maintenance and correction of reports in PHP and MySQL. MySQL database administration. Stack: PHP, MySQL, Handlebars, jQuery, JavaScript, Bootstrap.",
            },
            {
                name: "Systems Technician",
                from: "09/2020",
                to: "12/2020",
                where: "Pegasus Software S.A.S",
                description:
                    "Generation of customized PDF reports with PHP and TCPDF, including improvements to the reporting module. Development and publication of school websites on Blogger. Creation of visual materials and video tutorials to promote and train in the use of the platform. Collection, digitization and analysis of school data to optimize the implementation of educational software.",
            },
            {
                name: "Internship for Systems Technician",
                from: "02/2019",
                to: "07/2019",
                where: "Pegasus Software S.A.S",
                description:
                    "Generation of customized PDF reports with PHP and TCPDF (report cards, certificates, etc.) with improvements and corrections to the system. Digitization and updating of school information (students, grades and teachers). Technical support and user assistance via chat integrated into the platform.",
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
                name: "PHP",
                icon: "vscode-icons:file-type-php",
            },
            {
                name: "Java",
                icon: "vscode-icons:file-type-java",
            },
            {
                name: "Python",
                icon: "vscode-icons:file-type-python",
            },
            {
                name: "React",
                icon: "vscode-icons:file-type-reactjs",
            },
            {
                name: "Vue",
                icon: "vscode-icons:file-type-vue",
            },
            {
                name: "Next.js",
                icon: "vscode-icons:file-type-next",
            },
            {
                name: "Astro",
                icon: "vscode-icons:file-type-astro",
            },
            {
                name: "jQuery",
                icon: "logos:jquery",
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
                name: "React Native",
                icon: "vscode-icons:file-type-reactjs",
            },
            {
                name: "NestJS",
                icon: "vscode-icons:file-type-nestjs",
            },
            {
                name: "Laravel",
                icon: "logos:laravel",
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
                name: "Supabase",
                icon: "logos:supabase-icon",
            },
            {
                name: "Firebase",
                icon: "logos:firebase",
            },
            {
                name: "Docker",
                icon: "vscode-icons:file-type-docker",
            },
            {
                name: "AWS",
                icon: "logos:aws",
            },
            {
                name: "Git",
                icon: "vscode-icons:file-type-git",
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
                name: "WordPress",
                icon: "mdi:wordpress",
            },
            {
                name: "Joomla",
                icon: "logos:joomla",
            },
        ]
    },
    es: {
        education: [
            {
                name: "Tecnólogo en Desarrollo de Software",
                from: "08/2019",
                to: "09/2023",
                where: "UNIMINUTO Colombia",
            },
            {
                name: "Técnico en Sistemas",
                from: "02/2018",
                to: "06/2019",
                where: "Cenanfo",
            },
        ],
        experience: [
            {
                name: "Desarrollador FullStack",
                from: "03/2024",
                to: "07/2024",
                where: "Kawak",
                description:
                    "Desarrollo de nuevas funciones con Node.js, Vue.js y MySQL (Sequelize). Corrección de errores y optimización de rendimiento para mejorar la estabilidad. Implementación de autenticación 2FA para reforzar la seguridad. Creación de módulo de etiquetado de flujos internos para mejorar la gestión de procesos.",
            },
            {
                name: "Desarrollador Web",
                from: "08/2022",
                to: "11/2022",
                where: "Educca",
                description:
                    "Desarrollo de chat con Next.js integrado en plataforma Moodle. Creación de landing pages y gestión de WordPress. Mantenimiento, resolución de problemas y mejoras en Moodle y WordPress para optimizar rendimiento y usabilidad.",
            },
            {
                name: "Desarrollador FullStack",
                from: "04/2021",
                to: "04/2022",
                where: "Pegasus Software S.A.S",
                description:
                    "Desarrollo de módulo de notas en PHP, optimizando el ingreso de calificaciones para docentes. Gestión de cuentas de Google Workspace y desarrollo de sitios web para instituciones educativas. Mantenimiento y corrección de reportes en PHP y MySQL. Administración de bases de datos MySQL. Stack: PHP, MySQL, Handlebars, jQuery, JavaScript, Bootstrap.",
            },
            {
                name: "Técnico en Sistemas",
                from: "09/2020",
                to: "12/2020",
                where: "Pegasus Software S.A.S",
                description:
                    "Generación de reportes personalizados en PDF con PHP y TCPDF, incluyendo mejoras en el módulo de reportes. Desarrollo y publicación de sitios web escolares en Blogger. Creación de materiales visuales y tutoriales en video para promover y capacitar en el uso de la plataforma. Recopilación, digitalización y análisis de datos escolares para optimizar la implementación del software educativo.",
            },
            {
                name: "Practicas Técnico en Sistemas",
                from: "02/2019",
                to: "07/2019",
                where: "Pegasus Software S.A.S",
                description:
                    "Generación de reportes personalizados en PDF con PHP y TCPDF (boletines, certificados, etc.) con mejoras y correcciones en el sistema. Digitalización y actualización de información escolar (estudiantes, calificaciones y docentes). Soporte técnico y atención a usuarios vía chat integrado en la plataforma.",
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