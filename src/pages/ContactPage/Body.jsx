import React, { useRef, useState, useEffect } from 'react';
import "./contact.css";
import { Button } from '@mui/material';
import MobileMenuBox from "../../components/MobileMenuBox";
import { useMediaQuery} from '@mui/material';
import {  useSelector } from "react-redux";

//framer-motion
import {motion, AnimatePresence} from 'framer-motion'
import emailjs from '@emailjs/browser';
import { FaGlobeAfrica, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { TbWorld } from 'react-icons/tb';
import { IoIosMail } from 'react-icons/io';
import { color } from "../../theme";

const Contact = ({exitVariants, revealVariants})=>{
    const form = useRef();
    const error = useRef();
    const success = useRef();
    const [showDialog, setShowDialog] = useState(0)

    useEffect(function(){
        if(showDialog !== 0){
            let cleanup = setTimeout(()=>{console.log("enter timeout"); setShowDialog(0)}, 3000);
            console.log("remove dialog")
            return () => {
                clearInterval(cleanup)
            }
        } 
    })
    //
     const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_43vfpkj', 'template_uhq6mqo', form.current, '6nu68ndHGumm477Io')//
        .then((result) => {
            console.log(result.text);
            console.log("Ahbon?.");
            setShowDialog(1)
        }, (error) => {
            console.log(error.text);
             console.log("No Good");
             setShowDialog(-1)
        });
    };

    const isSmallScreen = useMediaQuery("(min-width: 1000px)");
    //const isMobileMenuToggledState = useSelector((state) => state.UserReducer.isMobileMenuToggled);
    const isMobileMenuToggledState = useSelector((state) => state.persistedReducer.isMobileMenuToggled);

    const color1 = color.gray.niveau100;

    return(
        
        <motion.div className="contact"
            variants={exitVariants}
            initial="hidden"
            animate="visible"
            exit="exitPage"
        >
            <h1 className="contact-title">
                Contactez-nous
            </h1>
            <div className="contact-details">
                <motion.div className="contact-details-left"
                    variants={revealVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <div >
                        <FaGlobeAfrica /> Yaounde / Douala
                    </div>
                    <div >
                        <IoIosMail /> infos@transaf.net
                    </div>
                    <div >
                        <TbWorld /> www.transaf.net
                    </div>
                    <div >
                        <ImLocation /> Yaounde / Cameroun
                    </div>
                    <div >
                        <FaCalendarAlt /> Lundi - Samedi, 8:00 - 20:30
                    </div>
                    <div >
                        <FaPhoneAlt /> Téléphone: +(237) 620 794 661
                    </div>                        
                </motion.div>
                <motion.form className="contact-details-right" ref={form} onSubmit={sendEmail}
                    variants={revealVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    < AnimatePresence >
                        {(showDialog === -1) && <motion.div 
                            ref={error}
                            className='dialog error'
                            initial={{opacity:0}}
                            animate={{opacity:1,  transition:{duration: 1, ease: "easeInOut"}}}
                            exit={{opacity:0,  transition:{duration: 1, ease: "easeInOut"}}}  
                        >Erreur : votre message n'a pas été envoyé </motion.div>}
                    </ AnimatePresence>
                    < AnimatePresence >
                        {(showDialog === 1) && <motion.div 
                            ref={success}
                            className='dialog success'
                            initial={{opacity:0}}
                            animate={{opacity:1,  transition:{duration: 1, ease: "easeInOut"}}}
                            exit={{opacity:0,  transition:{duration: 1, ease: "easeInOut"}}}  
                        >Votre message a été envoyé avec succes </motion.div>}
                    </ AnimatePresence>
                    
                    <input type="text" placeholder="Your name" className="form" name="user_name" />
                    
                    <input type="text" placeholder="Your email" className="form" name="user_email" />
                    
                    <input type="text" placeholder="Your subject" className="form" name="user_subject"/>
                    <textarea  placeholder="Your message" className="form form-texterea" name="message" ></textarea>
                    
                    <div className="row">
                        <Button variant="contained" className="btn" type="submit" value="Send" 
                                size="large"
                                sx={{backgroundColor: color1,
                                     color:"white", marginTop:"40px"}}>Send message</Button>
                    </div>
                </motion.form>
            </div>
            {!isSmallScreen && isMobileMenuToggledState && <MobileMenuBox />}
        </motion.div>
    )
}


export default Contact;
     
