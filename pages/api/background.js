const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Hawassa university institute of Technology',
                degree: 'BS, Computer Science',
                detail: "Bachelor's Degree in Computer Science from Hawassa university,Ethiopia.",
                year: '2020-2024'
            }, 

            {id: 1,
                title: 'Satcom institute of Technology',
                degree: 'IT Support',
                detail: "Computer Hardware,Network,software and windows server admnistration.",
                year: '2025'
            },
            {
                id: 2,
                title: 'Huawie Talent online',
                cirtification: 'Datacom and AI',
                detail: "completed datacom and introduction to Artificial intelligence through Huawie Talent online.",
                year: '2021'
            },
            {
                id: 3,
                title: 'CISCO (CCNA)',
                degree: 'Introduction to Networks',
                detail: "Completed  CCNAV7 Introduction to Netwroks full course",
                year: '2023'
            },
            {
                id: 4,
                title: 'programming langguages',
                degree: 'learning different kindes of programming languges',
                detail: "learnt some programming languages like js,java,c++,react,python,node.js and soon through online platforms like Udemmy,coursera and W3school",
                year: '2020-2024'
            },

        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Sidama Region Science and Technology',
                role: 'full-Stack web developmnet role',

                desc: ' I used React, Next ,JavaScript and Node.js to build user interfaces and SSR for web applications.',
                year: '2024 ',
                location: 'Hawassa, Ethiopia'
            },
            {
                id: 2,
                title: 'Anhu Anthi Tech',
                role: 'Network Engineer',
                
                desc: 'As a Network Engineer, i designed,installed and configured networking devices like, routers,switchs,and servers and insuring system integration and security',
                year: '2025 - Present',
                location: 'Addis Abeba, Ethiopia'
            },
            {
                id: 3,
                title: 'Self learning',
                role: 'Cloning some websites',
                url: '#',
                desc: "I cloned some websites like front end of youtube,Netflix,To-do List App,Weather App and Amazon by using different kindes programming languages like php,python,js,nexst.js,react,Node.js express,MySQL, PostgreSQL,MongoDB for the sake of experiance.",
                year: '09/2020 - 02/2024',
                location: 'Addis Abeba, Ethiopia'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
