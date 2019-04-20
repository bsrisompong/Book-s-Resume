import React, { Component } from 'react';
import logo from './logo.svg';
import profile from './Profile2.jpg';
import './App.css';


class App extends Component {
  render() {
    return (
      /*Page Container*/
      // class="w3-light-grey"
      <body class="w3-light-grey">
        <div className="w3-content w3-margin-bottom" style={{maxWidth: 1600}}>
          {/* The Grid */}
          <div className="w3-row-padding ">

            {/* Left Column */}
            {/* <div className="w3-quarter"> */}
            <div className="w3-quarter">
              <div className="w3-white w3-text-grey w3-card-4">
                {/* Profile Picture */}
                <div className="w3-display-container">
                  <img src={profile} style={{width: '100%'}} alt="Avatar" />
                  <div className="w3-container  w3-text-blank">
                    <h4 className="w3-text-black w3-margin-top ">Bunyawat Srisompong</h4>
                  </div>
                </div>

                {/* End Profile Picture */}
                <div className="w3-container">


                  <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Computer Science Student</p>
                  <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Bangkok, Thailand</p>
                  <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>bsrisompong@gmail.com</p>
                  <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+6687-501-4275</p>
                  <hr/>

                  <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Technical Skills</b></p>
                  <p>Python</p>
                  <div className="">
                    <div className="progress">
                      <div id="" className="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}} />
                    </div>
                  </div>
                  <p>Java</p>
                  <div className="">
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}} />
                    </div>
                  </div>

                  <p>HTML/CSS</p>
                  <div className="">
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}} />
                    </div>
                  </div>
                  <p>JavaScript</p>
                  <div className="">
                    <div className="progress">
                      <div id="one" className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '55%'}} />
                    </div>
                  </div>
                  <br/>
                  <p class="w3-large"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                  <p>Thai</p>
                  <div className="">
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>NATIVE</div>
                    </div>
                  </div>
                  <p>English</p>
                  <div className="">
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>INTERMEDIATE</div>
                    </div>
                  </div>

                  <br/>
                </div>
              </div>
            </div>
            {/* End Left Column */}

            {/* Right Column */}
            <div className="w3-twothird">

              <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
                <div class="w3-container">
                  <h5 class="w3-opacity"><b>Data Scientist Intern / KASIKORN Business-Technologt Group</b></h5>
                  <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2018 - July 2018</h6>
                  <p>Performed data analysis and predictive modeling on bank customer information to identify customers with a high propensity to acquire personal loans </p>
                  <br/>
                </div>
              </div>
              <div class="w3-container w3-card w3-white w3-margin-bottom">
                <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                <div class="w3-container">
                  <h5 class="w3-opacity"><b>Chulalongkorn University</b></h5>
                  <h6 class="w3-opacity"><b>Bachelor of Science in Computer Science</b></h6>
                  <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>August 2015 - May 2019</h6>
                  <p>Bangkok, Thailand</p>
                  <br/>
                </div>
              </div>
              <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 class="w3-text-grey w3-padding-16"><i className="fa fa-project-diagram fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Senior Project</h2>
                <div class="w3-container">
                  <h5 class="w3-opacity"><b>A comparative study of deep neural network architectures for forex daily trend prediction</b></h5>
                  <h6 class="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2019</h6>
                  <div>
                    <h6 class="w3-text-grey"><i className="fa fa-question fa-fw w3-margin-right"></i>Problem : Time Series Binary Classification</h6>
                    <h6 className="w3-text-grey"><i className="fa fa-code-branch fa-fw w3-margin-right"></i>Algorithms : LSTM, CNN, FFNN, SVM, Linear Regression</h6>
                    <h6 class="w3-text-grey"><i className="fa fa-microchip fa-fw w3-margin-right"></i>Technologies : Keras, Scikit-learn</h6>
                  </div>
                  <p>Applied deep learning models to the problem of predicting foreign exchange market trend directions on out-of-sample data</p>
                  <br/>
                </div>
              </div>
              <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 class="w3-text-grey w3-padding-16"><i className="fa fa-heart fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Interests</h2>
                <div class="container-fluid">
                  <div class="row w3-margin-bottom" >
                    <div class="col-md ">
                      <h6 class="w3-text-grey"><i className="fa fa-brain fa-fw w3-margin-right"></i>Artificial Intelligence</h6>
                    </div>
                    <div class="col-md ">
                      <h6 class="w3-text-grey"><i className="fa fa-dollar-sign fa-fw w3-margin-right"></i>Investment</h6>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md ">
                      <h6 class="w3-text-grey"><i className="fa fa-plane-departure fa-fw w3-margin-right"></i>Traveling</h6>
                    </div>
                    <div class="col-md ">
                      <h6 class="w3-text-grey"><i className="fa fa-camera-retro fa-fw w3-margin-right"></i>Photography</h6>
                    </div>
                  </div>
                  <br/>
                </div>
              </div>
            </div>
            {/* End Right Column */}
          </div>
        </div>
      </body>
      /*End Page Container*/
      );
    }
  }

  export default App;
