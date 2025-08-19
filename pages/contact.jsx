import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { HiMail, HiUser } from 'react-icons/hi';
import { BsChatTextFill } from 'react-icons/bs';
import Fiverr_Icon from '../components/Fiverr_Icon';
import Footer from '../components/Footer';
import { Modal } from 'antd';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [modalContent, setModalContent] = useState({
        title: '',
        message: '',
        isSuccess: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Replace with your EmailJS credentials
        const serviceId = 'service_pfx9bzk';
        const templateId = 'template_yf6e30c';
        const userId = 'Eyrp2ci3tGA-gGR1i';
        
        emailjs.send(serviceId, templateId, {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
            to_email: 'abdu0932hu@gmail.com'
        }, userId)
        .then((response) => {
            setModalContent({
                title: 'Message Sent Successfully',
                message: 'Thank you for reaching out! I\'ll get back to you soon.',
                isSuccess: true
            });
            setIsOpen(true);
            setFormData({ name: '', email: '', message: '' }); // Reset form
        })
        .catch((error) => {
            setModalContent({
                title: 'Failed to Send',
                message: 'Please try again or contact me directly at abdu0932hu@gmail.com',
                isSuccess: false
            });
            setIsOpen(true);
        });
        /*.catch((error) => {
  console.error('EmailJS Error:', error); // Add this line
  setModalContent({
    title: 'Failed to Send',
    message: `Error: ${error.text}. Please try again later.`,
    isSuccess: false
  });
  setIsOpen(true);
});*/
    };

    return (
        <BannerLayout>
            <div className=" px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>Ethiopia</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>Addis Abeba</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Company:</span>
                                <span className='text-LightGray md:text-sm'>AnhuAnthi tech</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>abdu0932hu@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>https://www.linkedin.com/in/abdu-muze/</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-LightGray text-sm'>+251932632680</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="mailto:abdu0932hu@gmail.com" rel="noreferrer"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/Ajousman/" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/abdu-muze/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 hidden sm:block' href="https://https://www.fiverr.com/abdu_ha" target='_blank' rel="noreferrer"><Fiverr_Icon /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1' href="#" target='_blank' rel="noreferrer"><SiUpwork /></a>
                </div>

                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className='text-lg font-bold'>Get In Touch</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                            <div>
                                <div className="flex flex-col w-full">
                                    <div className="userIcon relative mb-6">
                                        <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                            <HiUser />
                                        </div>
                                        <input 
                                            type="text" 
                                            className="input_stylings" 
                                            placeholder="Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col w-full">
                                    <div className="mailIcon relative mb-6">
                                        <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                            <HiMail />
                                        </div>
                                        <input 
                                            type="email" 
                                            className="input_stylings" 
                                            placeholder="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col w-full">
                                    <div className="textIcon relative mb-6">
                                        <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                            <BsChatTextFill />
                                        </div>
                                        <textarea 
                                            rows={6} 
                                            cols={50} 
                                            className="input_stylings" 
                                            placeholder="Describe the service that you want"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="my-4">
                                    <button type="submit" className="button"> SEND MESSAGE </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
            {/* Success/Error Modal */}
            <Modal
                className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
                centered
                open={isOpen}
                footer={null}
                closable={false}
                onCancel={() => setIsOpen(false)}
            >
                <div className='flex flex-col items-center justify-center'>
                    <h1 className={`font-bold text-2xl ${modalContent.isSuccess ? 'text-Green' : 'text-red-500'}`}>
                        {modalContent.title}
                    </h1>
                    <p className='text-Snow text-center py-4'>{modalContent.message}</p>
                    <button 
                        className={`px-4 py-2 rounded-lg ${modalContent.isSuccess ? 'bg-Green' : 'bg-red-500'} text-Snow`}
                        onClick={() => setIsOpen(false)}
                    >
                        OK
                    </button>
                </div>
            </Modal>
            <Footer />
        </BannerLayout>
    )
}

export default Contact;