import React from 'react';
import Navbar from './layout/NavBar';
import SideBarNav from './layout/SideBarNav';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <SideBarNav/>
      <section className="container">
        <h2 className="mt-5"></h2>
        <hr />
        <nav className="nav flex-column">
          <Link to={"/create-quiz"} className="nav-link">
            Create a New Quiz
          </Link>
          <Link to={"/all-quizzes"} className="nav-link">
            Manage existing Quizes
          </Link>
        </nav>
      </section>
    </div>
  );
};

export default Admin;

