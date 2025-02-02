import React from "react";

const About = () => {
    return (
        <div className="App">
            <h1>
                Это приложение работает
            </h1>
            <p style={{marginTop: "20px"}}>
                Всем здравствуйте!
                <br/>
                Я студент ЯрГУ имени Демидова. Этот сайт является моим демонстрационным проектом, поэтому не судите строго...
            </p>
            <img 
                src="https://cdn1.flamp.ru/ce7b9ce7460a3711beb1efcd8fba5822.jpg"
                style={{width: "800px"}}
            />
        </div>
    )
}

export default About;