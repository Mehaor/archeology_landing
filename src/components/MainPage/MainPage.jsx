import React from 'react';
import './MainPage.css';
import {Titles, Vars} from 'utils/constants';

export const BlockWorks = () => <div className="main-block">
    {Titles.WORKS.map((work) => {
        return <div className="main-block-info" key={work}>{work}</div>
    })}
</div>;

export const BlockForm = () => <div className="main-block">
    <h2 className="primary">{Titles.CONTACT_FORM_TITLE}</h2>
    <form action={`https://formspree.io/${Vars.APPLICATION_EMAIL}`} method="POST">
        <input type="text" name="Имя" placeholder="Ваше имя" required={true} />
        <input type="email" name="_replyto" placeholder="Ваш email" required={true} />
        <textarea name="сообщение" placeholder="Введите текст" required={true}></textarea>
        <input type="hidden" name="_next" value="/thanks" />
        <input type="submit" className="primary" value="Отправить" />
    </form>
</div>;

export const MainPage =  () => <div id="main">
    <h1 className="primary">{Titles.TITLE}</h1>
    <div className="main-blocks">
        <BlockWorks />
        <BlockForm />
    </div>

</div>;

export default MainPage;