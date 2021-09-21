import React, { useCallback, useState }from 'react'
import useInput from './useInput'; 
import emailjs from 'emailjs-com'; 
import {
    Wrap,
    Title,
    Form
} from "./Contact.elements";

export default function Contact() {
    const [name, onChangeName] = useInput(''); 
    const [email, onChangeEmail] = useInput(''); 
    const [message, onChangeMessage] = useInput(''); 
    const [send, setSend] = useState(false);
    let chk = false;

    // 메일 전송
    const sendEmail = useCallback((e) => { 
        e.preventDefault(); 

        const inputNum = e.target.childElementCount - 1; // 버튼한개 제외 
        const data = new FormData(e.target); 
        const entries = data.entries(); // form data를 iterator 객체화
        let failNum = 0; 

        if(!chk){ // send 안 했다면 
        for (let i = 0; i < inputNum; i++) { // input 개수만큼 돌며 value 확인
            const next = entries.next(); 
            const key = next.value[0]; 
            const value = next.value[1]; 
            if (!value) { // 입력값 비어있을 시 알림
                failNum++; 
                alert(`Please enter your ${key}`); 
                break; 
            }
        } 
        
        if (!failNum) { // 오류 없을 경우 전송
            emailjs.sendForm( 
                '', // service ID
                '',  // template ID
                e.target, 
                '' // user ID
                ).then((result) => { 
                    console.log('result.text', result.text); 
                }, (error) => { 
                    console.log('error.text', error.text); 
                }); 
                setSend(true); // 메세지 활성화, 버튼 비활성화
                chk = true; 
            } 
        }
        }, []);

    return (
        <Wrap>
            <div className="back">
                <Title>
                    <span id="title">Contact</span>
                </Title>
                <Form className="contact-form" onSubmit={sendEmail}>
                    <div className="flex-container"> 
                        <input id="name" className="input" type="text" name="name" placeholder="Name" value={name} onChange={onChangeName} autocomplete="off"/>
                        <input id="email" className="input" type="email" name="email" placeholder="Email" value={email} onChange={onChangeEmail} autocomplete="off"/>
                    </div>
                    <div className="flex-container">
                        <textarea id="message" className="input" name="message" placeholder="Message" value={message} onChange={onChangeMessage} autocomplete="off"/>
                    </div>
                    <div className="flex-container-right">
                        <div className="span-container">
                            {send && <span id="reply" >Thanks, I'll reply ASAP :)</span>}
                        </div>
                        {!send && <input className="button" type="submit" value="Send"/> }
                    </div>
                </Form>
            </div>
        </Wrap>
        
    );
};

