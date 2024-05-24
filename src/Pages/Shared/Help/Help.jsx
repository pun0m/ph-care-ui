import { useRef, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Help = () => {
  const genAI = new GoogleGenerativeAI("AIzaSyDKYwbFrFijRKuUhJhqp6tfCkclf8XcJO0");
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const textRef = useRef();
  const [questionHistory, setQuestionHistory] = useState([]);
  const [answerHistory, setAnswerHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async () => {
    let text = textRef?.current.value;

    if (text === "") {
      alert("Please write something...");
    } else {
      setLoading(true);
      const updatedQuestions = [...questionHistory, text + " ↩"];
      setQuestionHistory(updatedQuestions);
      textRef.current.value = "";

      const result = await model.generateContent(text);
      const response = await result.response;
      const answer = response.text();
      
      const updatedAnswers = [...answerHistory, "↪ " + answer];
      setAnswerHistory(updatedAnswers);
      setLoading(false);
    }
  };

  return (
   <div style={{paddingTop:'100px'}}>
	 <div className="p-5 m-2">
      <p>↪ Hey, How can I assist you today?</p>
      {questionHistory.map((question, index) => (
        <div key={index}>
          <p className="question" style={{textAlign:"end"}}>{question}</p>
          <pre className="answer">{answerHistory[index]}</pre>
        </div>
      ))}
      <Form>
        <Row>
          <Col sm={7}>
            <textarea
              ref={textRef}
              style={{ border: "none", borderBottom: "1px solid black" }}
              placeholder="Text Here..."
              type="text"
              className="form-control"
              id="text"
              required
            />
          </Col>
          <Col sm={5}>
            <Button
              className="m-1"
              variant="dark"
              onClick={(e) => {
                e.preventDefault();
                handleOnSubmit();
              }}
            >
              {loading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "Answer"
              )}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
   </div>
  );
};

export default Help;