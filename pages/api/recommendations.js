// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Samuel Ephrem',
    image: "images/sami.jpg",
    designation: 'full-stack developer | Network Engineer| Node | Django',
    view: "Hey everyone! I wanted to take a moment to recommend Abdu for any Full-stack development opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of Front-end and back-end concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Abdu is a reliable and dedicated team member who would be a great asset to any full-stack development team. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/samuel-Ephrem/"
  },
  {
    id: 1,
    name: 'Lidya Nuredin',
    image: "images/lid.JPG",
    designation: 'Data Scientist | Laravel | Django Developer',
    view: "I had the pleasure of collaborating with Abdu on multiple campus projects as a full-stack developer. His expertise in MongoDB, Express.js, React, and Node.js was invaluable in building scalable and efficient web applications. Abdu consistently delivered clean, well-structured code and demonstrated strong problem-solving skills in API integration and database management. His ability to work seamlessly in a team while meeting tight deadlines made him a reliable partner. I highly recommend Abdu for any full-stack development role.",
    linkednURL: "https://www.linkedin.com/in/Lidya-Nuredint-381407179/"
  },
  {
    id: 2,
    name: 'Amir shkur Sultan',
    image: "images/amir.jpg",
    designation: 'MERN | JavaScript | Tailwind | Next.js| Bootstrap',
    view: "Having worked closely with Abdu on multiple projects, I can confidently say he is an exceptional full-stack developer. His deep expertise in MongoDB, Express.js, React, and Node.js helped us build robust, high-performance web applications. Beyond his technical skills, Abdu is a collaborative problem-solver who delivers clean, efficient code under tight deadlines. As both a colleague and friend, I've seen firsthand his dedication to quality and his ability to turn complex requirements into seamless solutions. Any team would be lucky to have him.",
    linkednURL: "https://www.linkedin.com/in/nasirkhan22/"
  },
  {
    id: 3,
    name: 'Nuredin Aman',
    image: "images/Nure21.jpg",
    designation: 'MERN Stack Developer ||Network Engineer',
    view: "As someone who collaborated with Abdu for over three months on networking projects, I was impressed by his dual expertise as both a Network Engineer and Full-Stack Developer. His Cisco/Huawei certifications shone through in his ability to design secure, high-performance networks—configuring routers, switches, and firewalls with precision. What set Abdu apart was his unique perspective: he leveraged scripting skills (Python) to automate tasks and troubleshoot issues efficiently, bridging gaps between infrastructure and application layers. A reliable problem-solver and quick learner, he’d be an asset to any team."

,
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
