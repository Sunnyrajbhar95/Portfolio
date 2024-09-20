import React, {useState } from "react";
import "./pages.css";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import emailjs from 'emailjs-com';

function Contact() {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
    
        const templateParams = {
            name: data.name,
            email: data.email,
            message: data.message,
        };
    
        emailjs
            .send(
                '@Sunny123',  // Replace with your EmailJS service ID
                'template_8fwwr8t',  // Replace with your EmailJS template ID
                templateParams,      // Custom data object
                'iSEEl3Wri65UNZyfv'  // Replace with your public key (user ID)
            )
            .then(
                () => {
                    alert('SUCCESS!');
                },
                (error) => {
                    alert('FAILED...', error.text);
                }
            );
    };
    
 
    return (
        <div className="w-[100%] md:min-h-full lg:min-h-full flex flex-col items-center">
            <div className="mt-[30px] text-3xl font-semibold text-blue-600 underline">Contact Us</div>
            <div className="lg:w-[100%] mx-auto grid lg:grid-cols-2 lg:place-items-center p-5 md:place-items-center mt-[20px]">
            <img src="https://github.com/mdalmamunit427/modern-react-js-blog-starter-files/blob/master/assets/contact.png?raw=true" className="object-fill " alt=""/>
            <form className="flex flex-col md:p-10 gap-4 md:w-[60%] xm:w-[100%]  sm:w-[100%] border-2 border-black-200 rounded-lg xm:px-2 " onSubmit={sendEmail}>
                <input
                    type="text"
                    placeholder="Enter Your Name..."
                    onChange={handleChange}
                    name="name"
                    value={data.name}
                 className="border-2 border-gray-400 p-2 w-[100%] rounded-md outline-none mt-2 "/>
                <input
                    type="email"
                    placeholder="Enter Your Email..."
                    onChange={handleChange}
                    name="email"
                    value={data.email}
                    className="border-2 border-gray-400 p-2 w-[100%] rounded-md outline-none mt-2  "
                />
                <textarea
                    placeholder="Write your message..."
                    onChange={handleChange}
                    name="message"
                    value={data.message}
                    className="border-2 border-gray-400 p-2 w-[100%] rounded-md outline-none mt-2 "
                />
                <button type="submit" className="bg-blue-700 py-2 rounded-md text-white hover:bg-red-500 transition-alld duration-200">SEND MESSAGE</button>
                <p
                    style={{
                        textAlign: "center",
                        color: "black",
                        fontSize: "1.2em",
                        marginTop: "-1px",
                    }}
                >
                    OR
                </p>
                <div className="flex w-[100%]  justify-center gap-3 text-blue-600">
                    <a
                        href="https://www.linkedin.com/in/sunny-rajbhar-67880b252/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-b"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="https://www.instagram.com/s_u_n_n_y6389/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaSquareInstagram size={30} />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100070953351511"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookSquare size={30} />
                    </a>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Contact;
