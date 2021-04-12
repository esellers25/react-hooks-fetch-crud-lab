import React from "react";

function QuestionItem({ question, onDeleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;
  // const [correctAnswer, setCorrectAnswer] = useState(correctIndex)

  function handleDelete(){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
    onDeleteQuestion(id)
  }


  function changeAnswer(){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        correctIndex: correctIndex
      })
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  console.log(options)

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
