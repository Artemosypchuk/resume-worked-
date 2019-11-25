import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { Fragment } from "react";

let List = () => {
    return (
        <Fragment>
            <div className="container info">
                <div className="d-flex top">
                    <div><h1 className="">Резюме</h1></div>
                   <div className = 'name'><h2 className="">Осипчук Артем Борисович</h2>
                   <div><span><i className="fas fa-phone-volume">&nbsp;Телефон:&nbsp;&nbsp;+380976455893</i></span></div>
                   <div><span><i className="far fa-envelope">&nbsp;e-mail:&nbsp;&nbsp;arte-mail@ukr.net</i></span></div>
                   </div>
                </div>

                <div className="photo"></div>
                <div className="main_block d-flex">
                <div className = "col-6 l-side">
                    <ul>
                        <b>Компоненты</b>
                        <a href="http://htmlbook.ru/"><li>HTML</li></a>
                        <a href="http://htmlbook.ru/css/"><li>CSS</li></a>
                        <a href="https://bootstrap-4.ru/"><li>BootStrap</li></a>
                        <a href="https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D0%B1%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD"><li>Mobile Web</li></a>
                        <a href="https://www.adobe.com/ua/products/photoshop.html?gclid=CjwKCAiAlO7uBRANEiwA_vXQ-4tTXn2LA2MDrLkNVDtjlQH-2pJwpwK0Kcwj2f0UHQX2COOH3fqUzBoCiRkQAvD_BwE&sdid=B4XQ3XKB&mv=search&skwcid=AL!3085!3!341215795660!b!!g!!%2Badobephotoshop&ef_id=CjwKCAiAlO7uBRANEiwA_vXQ-4tTXn2LA2MDrLkNVDtjlQH-2pJwpwK0Kcwj2f0UHQX2COOH3fqUzBoCiRkQAvD_BwE:G:s&s_kwcid=AL!3085!3!341215795660!b!!g!!%2Badobephotoshop"><li>Adobe Photoshop</li></a>
                        <a href="https://uk.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%81_javascript"><li>JavaScript</li></a>
                        <a href="https://uk.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%81_javascript"><li>ES6</li></a>
                        <a href="https://uk.wikipedia.org/wiki/React"><li>REACT</li></a>
                        <a href="https://uk.wikipedia.org/wiki/Node.js"><li>NodeJs</li></a>
                        <a href="https://github.com/"><li>GitHUB</li></a>
                        <a href="https://uk.wikipedia.org/wiki/SQL"><li>SQL</li></a>



                    </ul>
                </div>
                <div className="col-6 r-side">
                    <ul>
                        <b>Профессиональные навычки в сфере IT:</b>
                        <li>Есть знания о структуре HTML</li>
                        <li>Понимаю что такое css и как сним работать</li>
                        <li>Могу подключить bootstrap и грамотно его использовать</li>
                        <li>Есть знания об адаптивной вёрстке</li>
                        <li>Поверхностные знания Adobe photoshop</li>
                        <li>Прошёл базовый курс JavaScript</li>
                        <li>Могу программировать на Vanilla Js :) (ECMAscript6)</li>
                        <li>В данный момент изучаю React (уже очень нравится)</li>
                        <li>Понимаю работу сборщика (NodeJs) и ему подобных</li>
                        <li>Знаю как использовать GitHub</li>
                        <li>Примерно понимаю работу SQL сервера и ему подобных (быстро учусь)</li>
                    </ul>
                </div>
                </div>
            </div>
        </Fragment>
    );
};

setTimeout(() => {
    ReactDOM.render(<List />, document.getElementById("root"));
    document
    .querySelector(".photo")
    .insertAdjacentHTML(
        "afterbegin",
        `<img src="https://scontent.fiev4-1.fna.fbcdn.net/v/t1.0-1/p160x160/46879904_2234079156849147_1054138029892960256_n.jpg?_nc_cat=102&amp;_nc_ohc=GiLGG-vVOWIAQkQUASHE_DUiHblVS0bxHNOrxFWGwoc8lPCVIKtQNN3Zw&amp;_nc_ht=scontent.fiev4-1.fna&amp;oh=9e588e02208f8be7da5fead0e6cf46b4&amp;oe=5E4A9BE6" alt="">`
    );
    document.querySelector('.spinner-border').style.display = 'none'
}, 2000);


