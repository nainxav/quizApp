import React from "react";
import Navbar from "../layout/NavBar";
import { useLocation } from "react-router-dom";

const QuizResult = () => {
  const location = useLocation();
  const { quizQuestions, totalScores } = location.state;
  const numQuestions = quizQuestions.length;
  const percentage = Math.round((totalScores / numQuestions) * 100);

  const handleRetakeQuiz = () => {
    alert("Oops! this functionality was not implemented!!!");
  };

  return (
    <div>
      <Navbar />
      <section className="container mt-5">
        <h3 className="font-poppins text-gray-600 text-2xl" >Your Quiz Result Summary</h3>
        <hr />
        <h5 className="text-info pt-10">
          You answered {totalScores} out of {numQuestions} questions correctly.
        </h5>
        <p className="pt-6 pb-20">Your total score is {percentage}%.</p>

        {/* <button
          className="btn btn-primary btn-sm"
          href ="/quiz-stepper"
        >
          Take Another Quiz
        </button> */}
        <a
          href="/quiz-stepper"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Take Another Quiz
        </a>
      </section>
    </div>
  );
};

export default QuizResult;
