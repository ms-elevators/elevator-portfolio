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
        <form className="contact-form" onSubmit={sendEmail}>
            <input id="name" type="text" name="name" placeholder="name" value={name} onChange={onChangeName}/>
            <input id="email" type="email" name="email" placeholder="email" value={email} onChange={onChangeEmail}/>
            <textarea id="message" name="message" placeholder="message" value={message} onChange={onChangeMessage}/>
            <input type="submit" value="Send"/> 
            {send && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
    );
};

