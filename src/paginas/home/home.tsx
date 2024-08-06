import React, {useState, useEffect} from "react";
import './home.css';

interface minhaProps{
    title: string;
    description: string;
}

function Home(props:minhaProps){
    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState("");

    useEffect(() => {
        if (completed) {
            setTarefa('Parabéns! Você concluiu a tarefa!');
        }
    }, [completed]);
    return(
        <>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <img src="https://th.bing.com/th/id/OIP.PkXPfVWQG9ijIPq2gR5Y1wHaE7?rs=1&pid=ImgDetMain" alt="neymar" className="img" />
        <h1>Tarefa</h1>
        <h3>{tarefa}</h3>
        <p>Conclua a tarefa!</p>
        <button onClick={() => setCompleted(true)}>Concluir tarefa</button>
        </>
    );
}



export default Home;