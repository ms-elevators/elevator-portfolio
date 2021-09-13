import React, { useCallback, useState }from 'react'
import useInput from './useInput'; 
import emailjs from 'emailjs-com'; 
import './style.css';

export default function Contact() {
    const [name, onChangeName] = useInput(''); 
    const [email, onChangeEmail] = useInput(''); 
    const [message, onChangeMessage] = useInput(''); 
    const [send, setSend] = useState(false);
    let chk = false;

    const sendEmail = useCallback((e) => { 
        e.preventDefault(); 

        const inputNum = e.target.childElementCount - 1; // [D] 버튼한개 제외 
        const data = new FormData(e.target); 
        const entries = data.entries(); 
        let failNum = 0; 

        if(!chk){
        for (let i = 0; i < inputNum; i++) { // input 개수만큼 돌며 value 확인
            const next = entries.next(); 
            const key = next.value[0]; 
            const value = next.value[1]; 
            if (!value) { 
                failNum++; 
                alert(`Please enter your ${key}`); 
                break; 
            }
        } 
        
        if (!failNum) { // 오류 없을 경우 
            emailjs.sendForm( 
                'service_xnb36t9', // service ID
                'template_kvzpw2d',  // template ID
                e.target, 
                'user_hLdfycQUhf6WNkGulrqIo' // user ID
                ).then((result) => { 
                    console.log('result.text', result.text); 
                }, (error) => { 
                    console.log('error.text', error.text); 
                }); 
                setSend(true);
                chk = true;
            } 
        }
        }, []);

    return (
        <div className="wrap">
            <div className="flex-container-left">
                <span id="title">Contact</span>
            </div>
            
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="flex-container"> 
                    <input id="name" className="input" type="text" name="name" placeholder="Name" value={name} onChange={onChangeName} autocomplete="off"/>
                    <input id="email" className="input" type="email" name="email" placeholder="Email" value={email} onChange={onChangeEmail} autocomplete="off"/>
                </div>
                <div className="flex-container">
                    <textarea id="message" className="input" name="message" placeholder="Message" value={message} onChange={onChangeMessage} autocomplete="off"/>
                </div>
                <div className="flex-container-right">
                    <input className="button" type="submit" value="Send"/> 
                </div>
                {send && <span>Thanks, I'll reply ASAP :)</span>}
            </form>
        </div>
        
    );
};

