const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a skilled Full-Stack Developer specializing in modern web applications using MongoDB, MySQL, Express.js, React.js, Next.js,PHP and Node.js. With expertise in server-side rendering, RESTful API integration, and database optimization, I build scalable, high-performance solutions tailored to client needs. Passionate about clean architecture and seamless user experiences, I deliver efficient and dynamic web applications that drive results."',
    },
    {
        id: 1,
        title: 'Network Enginner',
        desc: 'I am a certified Network Engineer (Cisco | Huawei) specializing in designing, deploying, and securing scalable network infrastructures. Proficient in configuring routers, switches, firewalls, and hybrid cloud environments, I optimize performance through protocols like BGP/OSPF and automate tasks with Python. My expertise includes troubleshooting complex issues, implementing robust security (firewalls, IDS),DataCenter construction,LAN installation and configuration and ensuring high availability for seamless connectivity.'
    },

    {
        id: 2,
        title: 'IT Technician',
        desc: 'I am an IT Infrastructure Specialist focused on optimizing and maintaining hardware, software, and network systems. Skilled in Windows Server Administration, I deploy and secure servers—managing Active Directory, Group Policy, DNS/DHCP, and virtualization (Hyper-V/VMware). I troubleshoot system issues, provide end-user support, and implement backup/disaster recovery solutions. My expertise includes patch management, performance monitoring, and enforcing security compliance for reliable, efficient operation'}
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
