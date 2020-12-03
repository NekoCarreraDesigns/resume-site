import React from "react";
import {useState} from "react"
import {LoremIpsum} from "react-lorem-ipsum";
import "./index.css";

function Interview () {
    const [questions, setQuestions] = useState(0)
    return (
        <div>
            <header> 
                <h1 className="interview-page-header">Interview Questions</h1>
            </header>
            <section>
                <p className="interview-question-paragraph">This is the interview question page, the questions are common questions that are asked
                in most interviews, ranging from behavioral questions to technical questions,
               <br></br> hit the example button to see other peoples responses
                to some of these questions</p>
            </section>
            <ul>
    <li className="question">{questions}{LoremIpsum()}</li><button className="example-button" onClick={() => setQuestions}>Example</button>
    <li className="question">{questions}{LoremIpsum()}</li><button className="example-button" onClick={() => setQuestions}>Example</button>
    <li className="question">{questions}{LoremIpsum()}</li><button className="example-button" onClick={() => setQuestions}>Example</button>
    <li className="question">{questions}{LoremIpsum()}</li><button className="example-button" onClick={() => setQuestions}>Example</button>
    <li className="question">{questions}{LoremIpsum()}</li><button className="example-button" onClick={() => setQuestions}>Example</button>
    <li className="question">{questions}{LoremIpsum()}</li><button className="example-button" onClick={() => setQuestions}>Example</button>
   
            </ul>
        </div>
    )
}

export default Interview;