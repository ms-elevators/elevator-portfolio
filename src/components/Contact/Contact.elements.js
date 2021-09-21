import styled from 'styled-components';
import "./fonts.css"

export const Wrap = styled.div`

    text-align: center;
    display: flex;
    justify-content: center;
    
    .back{
        margin-top:50px;
        width: 80%;
        height: 100%;
        background-color: rgba( 255, 255, 255, 0.6 );
        border-radius:6px;
    }
`;

export const Title = styled.div`

    margin: 50px auto 0 auto;
    width: 80%;
    display: flex;
    justify-content: start;

    #title {
        font-size: 25px;
        color: #252525;
        font-family: 'ONE-Mobile-Title';
    }
`;

export const Form = styled.form`

    margin: 0 auto;
    padding: 15px 0 45px 0;
    width: 80%;
    text-align: center;

    .flex-container {
        display: flex;
        justify-content: center;
        flex-direction: row;
    }

    .input {
        margin: 5px;
        border-style: solid;
        border-width: 0 0 1px;
        border-radius: 3px;
        border-color: rgba(85,85,85,0.8);

        :focus {
            border-style: solid;
            border-color: #88CCE1;
        }
    }

    .flex-container-right {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: end;
    }

    .span-container {
        padding-right: 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    #reply {
        font-family: Arial, Helvetica, sans-serif;
        color:#010101;
        
    }

    .button {
        margin-right: 0;
        width: 90px;
        height:35px;
        cursor: pointer;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        color: #FAFAFA;

        background-color: rgba(9,9,10,0.8);

        border-style: solid;
        border-radius: 6px;
        border-color: rgba(251,251,251);
        transition: all 0.1s ease-in-out;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 1px 1px 0 rgba(0, 0, 0, 0.07);

        :hover {
            transform: scale(1.05);
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.09);
        }
    }

    input {
        ::placeholder{
            font-family: Arial, Helvetica, sans-serif;
            color:rgba(85,85,85,0.8);
        }
        padding: 5px 10px;
        width: 100%;
        height: 30px;
        outline: none;
        background-color: rgba(251,254,254,0.8);
    }

    textarea {
        ::placeholder{
            font-family: Arial, Helvetica, sans-serif;
            color:rgba(85,85,85,0.8);
        }
        padding: 10px 10px;
        width: 100%;
        height: 200px;
        min-height: 100px;
        resize: none;
        outline: none;
        background-color: rgba(251,254,254,0.8);
}

`;

