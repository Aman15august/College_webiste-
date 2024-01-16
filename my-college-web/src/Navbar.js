import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap 5 CSS
import "./Navbar.css"; // Your custom CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#d64161" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ABOUT
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    ISO CERTIFIED
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    HISTORY
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    MISSION & VISION
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    KULGEET
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    MOU
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    OUR PROGRESS ACCORDING TO NAAC
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    INSTITUTAION BEST PRACTICES
                  </a>
                </li>

                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Student
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Student Support
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Student Progression
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Facuilty
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        FDP
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        MDP
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Leadership
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    INFRASTRUCTURE
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        LABS
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        AUDITORIUM
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        CONFERENCE/SEMINAR HALL
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        INDORE STADIUM
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        MEDIA CENTRE
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SMART CLASSS AND CLASS ROOMS
                      </a>
                      <hr className="dropdown-divider" />
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://ndl.iitkgp.ac.in/"
              >
                E-LIBRARY
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ADMINISTRATION
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    FACUILTY INCHARGE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ADMINISTRATIVE STRUCTURE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ADMINISTRATIVE SECTION
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ACCOUNT SECTION
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    LABORATORY
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    LIBRARY SECTION
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                DISCIPLINE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                NIRF
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                IQAC
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    ABOUT IQAC
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    GREEN AUDIT REPORT 2017-2021
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ENVIRONMENT REPORT 2017-2021
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ENERGY AUDIT
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ACCADMIC AUDIT REPORT
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    IQAC MEETING MINIUTES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    COMMMITEE
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SSR
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        SSR REPORT
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SSR REPORT LINK
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    AQAR
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        AQAAR REPORT
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        LINKS RELATED TO AQAR
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ACCADMICS
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    ADMISSION
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ACADEMIC ACTIVITES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ACCADMIC CURRICULUM
                  </a>
                </li>
                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    CAPABILITY AND EFFICIENCY ENHANCEMENT PROGRAMS
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Research
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Inovation
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Extension
                      </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                    Collaboration
                    </a>
                  </li>
                  </ul>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    PO,PSO & CO
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    EXAMINATION AND BRIDGE CLASSES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    SOCIAL AWARENESS & MORAL BUILDING
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    UGC SPONSORED ADD ON COURSES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ANNUAL REPORT
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                OUR COLLEGE ACTIVITES
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    SPORT ACTIVITES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    NSS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    NCC
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ACCADMIC ACTIVITES
                  </a>
                </li>
                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    DEPARTMENTAL ACTIVITES
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        SSR REPORT
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SSR REPORT LINK
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                LEARNING ENHANCEMENT
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    VALUE ADDED PROGRAMS
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        EXCEL
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        ADVANCE EXCEL
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        TALLY
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        WORD
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        POWER POINT
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SKILLED DEVELOPMENT PROGRAMS
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        CODING
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        WEBDEVLOPMENT
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        APPDEVLOPMENT
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        ML
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        AL
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    VOCATIONAL TARING
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        TAILORING
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        CARPENTOR
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        PHOTOGRAPHY
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        INSTRUMENTAL
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                E-CONTENT
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    E-LEARNING 2020-2021
                  </a>
                </li>
                <li className="nav-item dropend">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    E-LEARNING 2019-2022
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        SSR REPORT
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SSR REPORT LINK
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    MEDIA CENTRE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    E-SOUVENIR
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                VACANCY
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    TEACHING
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    NON-TEACHING
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                ALUMNI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
