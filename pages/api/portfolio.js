const portfolio = [
    {
        id: 0,
        projectName: "Web app",
        url: "https://jmmerp.com/",
        image: "projects/farm2.jpg",
        projectDetail: "This online marketplace directly connects Ethiopian farmers with global consumers for fair-trade agricultural products.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: ".php"
            },
            {
                tech: "Mysql"
            },
            {
                tech: "Figma"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "web application",
        url: "https://absco.sa/",
        image: "projects/farm1.jpg",
        projectDetail: "It enables the efficient, transparent sale of authentic, certified goods like coffee, spices, and grains By eliminating middlemen, it empowers farmers and delivers fresh harvests worldwide.",
        technologiesUsed: 
        [
            {
                tech: "ReactJS"
            },
            {
                tech: "php"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Mysql"
            }
        ]
    },
    {
        id: 0,
        projectName: "WebApp",
        url: "https://jmm.ltd/",
        image: "projects/todo1.jpg",
        projectDetail: "Simplify your day with effortless task mastery.Organize goals, deadlines, and priorities in one intuitive space.Achieve more by turning plans into action, stress-free.",
        technologiesUsed: [
            {
                tech: "NextJs"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Mysql"
            },
            {
                tech: ""
            },
        ]
    },
    {
        id: 0,
        projectName: "web App",
        url: "https://alsn.app/",
        image: "projects/todo2.jpg",
        projectDetail: "Your life, organized your way: tasks, habits, and dreams.Sync seamlessly across devices and glide through daily wins.Build momentum, not lists — productivity made joyful.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "TailwndCSS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Mysql"
            },
            {
                tech: ""
            },
        ]
    },
    {
        id: 0,
        projectName: "WebApp",
        url: "/domain-expired",
        image: "projects/weather2.jpg",
        projectDetail: "I developed this weather prediction app to deepen my understanding of complex data modeling and real-time forecasting systems.Through crafting accurate, user-friendly forecasts, I honed my problem-solving skills in handling dynamic environmental datasets.This project empowered me to transform raw meteorological insights into actionable, reliable predictions for everyday use.",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: ".Typescript"
            },
            {
                tech: "Bootstrap"
            },
            {
                tech: ""
            },
            {
                tech: ""
            },
        ]
    },
    {
        id: 0,
        projectName: "WebApp",
        url: "https://fatehtour.com/",
        image: "projects/weather1.jpg",
        projectDetail: "I built this weather prediction app to master real-world challenges in data analysis and predictive modeling through hands-on experimentation.By transforming atmospheric data into actionable forecasts, I deepened my ability to design intuitive solutions for dynamic, complex systems.This self-driven project sharpened my skills in turning theoretical concepts into reliable, user-centered tools.",
           technologiesUsed: [
           {
                tech: "NextJs"
            },
            {
                tech: "Typescript"
            },
            {
                tech: "Bootstrap"
            },
            {
                tech: ""
            },
            {
                tech: ""
            },
        ]
    },
    {
        id: 0,
        projectName: "WebApp",
        url: "/domain-expired",
        image: "projects/Amazon2.jpg",
        projectDetail: "Cloning Amazon’s frontend honed my ability to reverse-engineer intricate systems and solve real-world UI/UX challenges.I practiced optimizing performance, responsiveness, and accessibility in high-traffic user journeys.The project transformed theoretical knowledge into battle-tested interface craftsmanship.",
        technologiesUsed: [
            {
                tech: "Nextjs with SSR"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: ""
            },
            {
                tech: ""
            },
            {
                tech: ""
            },
        ]
    },
    {
        id: 1,
        projectName: "Front-End",
        url: "https://b2c.otawix.com/",
        image: "projects/netflix2.jpg",
        projectDetail: "I reverse-engineered Netflix’s frontend to dissect industry-leading UX patterns for content discovery and retention.By rebuilding dynamic grids, adaptive previews, and seamless navigation, I mastered data-driven UI storytelling.This project transformed how I approach user psychology in interface design — from concept to execution.",
        technologiesUsed: [
            {
                tech: "Vanilla Javacript"
            },
            {
                tech: "HTML"
            },
            {
                tech: "Bootstrap"
            },
            {
                tech: ""
            },
            {
                tech: ""
            },
        ]
    },
    {
        id: 2,
        projectName: "network || datacenter",
        url: "https://spatay.com/",
        image: "projects/server.jpg",
        projectDetail: "This image documents the construction phase of a data center at INSA Ethiopia.Workers carefully position server racks amid a web of cables and structural elements.The progress here represents a vital step in building Ethiopia’s secure digital infrastructure.",
        technologiesUsed: [
            {
                tech: "Server"
            },
            {
                tech: "Router"
            },
            {
                tech: "Switch"
            },
            {
                tech: "100G|10G|25G Cables"
            },
            {
                tech: ""
            },
        ]
    },
     {
        id: 3,
        projectName: "Network||  DataCenter",
        url: "https://culyte.com",
         image: "projects/An1.jpg",
        projectDetail: "This photo from INSA Ethiopia’s data center construction showcases technicians calibrating critical server racks amidst coiled cables and steel frameworks, while capturing the emergence of Ethiopia’s vital digital infrastructure — a fusion of precision engineering and national vision driving the country’s technological advancement.",
        technologiesUsed: [
            {
                 tech: "Server"
             },
             {
                 tech: "Router"
             },
             {
                 tech: "Switch"
             },
             {
                 tech: "100G|10G|25G Cables"
             },
         ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
