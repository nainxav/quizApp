// import React from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
// import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom"
// import Home from "./components/Home"
// import QuizStepper from "./components/quiz/QuizStepper"
// import Quiz from "./components/quiz/Quiz"
// import QuizResult from "./components/quiz/QuizResult"
// import GetAllQuiz from "./components/quiz/GetAllQuiz"
// import AddQuestion from "./components/question/AddQuestion"
// import UpdateQuestion from "./components/question/UpdateQuestion"
// import Navbar from "./components/layout/NavBar"
// import Admin from "./components/Admin"
// import Login from "./components/Login"

// function App() {
//   return (
//     <Router>
//       <div>
//         {/* <Navbar /> */}
//         <main className="container mt-5 mb-5">
//           <Routes>
//             <Route path="/" element={<Login />} />
//             {/* <Route element={<AuthenticatedRoutes />} /> */}
//             <Route path="/home" element={<Home />} />
//             <Route path="/quiz-stepper" element={<QuizStepper />} />
//             <Route path="/take-quiz" element={<Quiz />} />
//             <Route path="/admin" element={<Admin />} />
//             <Route path="/create-quiz" element={<AddQuestion />} />
//             <Route path="/update-quiz/:id" element={<UpdateQuestion />} />
//             <Route path="/all-quizzes" element={<GetAllQuiz />} />
//             <Route path="/quiz-result" element={<QuizResult />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }


import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom"
import Home from "./components/Home"
import QuizStepper from "./components/quiz/QuizStepper"
import Quiz from "./components/quiz/Quiz"
import QuizResult from "./components/quiz/QuizResult"
import GetAllQuiz from "./components/quiz/GetAllQuiz"
import AddQuestion from "./components/question/AddQuestion"
import UpdateQuestion from "./components/question/UpdateQuestion"
import Navbar from "./components/layout/NavBar"
import Admin from "./components/Admin"
import Login from "./components/Login"
import About from "./components/About"
import HowToPlay from "./components/HowToPlay"
import { AuthProvider } from './components/AuthContext'; // Import AuthProvider
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute

// function App() {
//   return (
//     <AuthProvider>
//         <Router>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/" element={<Home />} />
//             <Route path="/quiz-stepper" element={<QuizStepper />} />
//             <Route path="/take-quiz" element={<Quiz />} />
//             {/* <Route path="/admin" element={<Admin />} />
//             <Route path="/create-quiz" element={<AddQuestion />} />
//             <Route path="/update-quiz/:id" element={<UpdateQuestion />} />
//             <Route path="/all-quizzes" element={<GetAllQuiz />} /> */}
//             <PrivateRoute path="/admin" element={<Admin />} />
//             <PrivateRoute path="/create-quiz" element={<AddQuestion />} />
//             <PrivateRoute path="/update-quiz/:id" element={<UpdateQuestion />} />
//             <PrivateRoute path="/all-quizzes" element={<GetAllQuiz />} />
//             <Route path="/quiz-result" element={<QuizResult />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/how-to-play" element={<HowToPlay />} />
//           </Routes>
//           </Router>
//           </AuthProvider>
//   );
// }

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/quiz-stepper" element={<QuizStepper />} />
          <Route path="/take-quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
          <Route path="/create-quiz" element={<PrivateRoute><AddQuestion /></PrivateRoute>} />
          <Route path="/update-quiz/:id" element={<PrivateRoute><UpdateQuestion /></PrivateRoute>} />
          <Route path="/all-quizzes" element={<PrivateRoute><GetAllQuiz /></PrivateRoute>} />
          <Route path="/quiz-result" element={<QuizResult />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}



// function AuthenticatedRoutes() {
//   return (
//     <>
//       <Route path="/home" element={<Home />} />
//       <Route path="/quiz-stepper" element={<QuizStepper />} />
//       <Route path="/take-quiz" element={<Quiz />} />
//       <Route path="/admin" element={<Admin />} />
//       <Route path="/create-quiz" element={<AddQuestion />} />
//       <Route path="/update-quiz/:id" element={<UpdateQuestion />} />
//       <Route path="/all-quizzes" element={<GetAllQuiz />} />
//       <Route path="/quiz-result" element={<QuizResult />} />
//     </>
//   );
// }

export default App
