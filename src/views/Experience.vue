<template>
    <div class="workspace">
        <h1>Experience</h1>
        <section class="content-section">
            <div class="resume-container">
                <div class="item">
                    <div class="timeline">
                        <div class="year-container">
                            <span class="year">2022</span>
                        </div>
                        <ul>
                            <br><br><br>
                            <li>
                                <div class="content">
                                    <a href="https://www.meta.com/" target="_blank">
                                        <h3>Meta</h3>
                                        <h5>Software Engineer</h5>
                                        <div class="grey">April 2022 - Present</div>
                                        <br>
                                        <div>
                                            -Developed and design in-house and external products primarily using React,PHP and Python<br>
                                            -Contributed to in house ORM framework development<br>
                                        </div>

                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="content">
                                    <a href="https://usa.visa.com/" target="_blank">
                                        <h3>Visa Inc</h3>
                                        <h5>Lead Software Engineer</h5>
                                        <div class="grey">June 2015 - April 2022</div>
                                        <br>
                                        <p>
                                            -Managing, leading, and designing applications that facilitates fund transfers and automatic reconciliations of 
                                            transactions and bank accounts.<br>
                                            -Designed and developed the greenfield application using Microservice architecture that is scalable, reliable, 
                                            efficient, and easily maintainable.<br>                                            
                                        </p>
                                    </a>
                                </div>
                            </li>
                            <br> <br>
                        </ul>
                        <div class="year-container">
                            <span class="year">2015</span>
                        </div>
                        <ul>
                            <br> <br> <br>
                            <li>
                                <div class="content align-left">
                                    <a href="https://www.usbank.com/" target="_blank">
                                        <h3>US Bank</h3>
                                        <h5>Lead Software Engineer</h5>
                                        <div class="grey">Aug 2013 - June 2015</div>
                                        <br>
                                        <p>
                                            -Designed and developed U.S. Bank flagship pre-paid API application.<br>
                                            -Revamp the existing pre-paid core application using service-oriented architecture. Added Hibernate ORM implementation.<br>
                                        </p>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div class="year-container">
                            <span class="year">2013</span>
                        </div>
                        <ul>
                            <br> <br> <br>
                            <li>
                                <div class="content align-left">
                                    <a href="https://dxc.com/" target="_blank">
                                        <h3>DXC Technology</h3>
                                        <h5>Technical Architect</h5>
                                        <div class="grey">Aug 2012 - Aug 2013</div>
                                        <br>
                                        <p>
                                            -Involved in requirement analysis, solution and application design and development of Insurance domain applications of Lloyd’s of London.<br>
                                            -Analyzed the security risk in customer facing applications and designed and developed the solutions to mitigate the risks like Cross-Site Scripting, 
                                            SQL Injection, XML External Entity, Directory traversal etc..<br>                                           
                                        </p>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div class="year-container">
                            <span class="year">2012</span>
                        </div>
                        <ul>
                            <br> <br> <br>
                            <li>
                                <div class="content align-left">
                                    <a href="https://www.rbs.co.uk/" target="_blank">
                                        <h3>Royal Bank of Scotland Group</h3>
                                        <h5>Technical Architect</h5>
                                        <div class="grey">Mar 2010 - Aug 2012</div>
                                        <br>
                                        <p>
                                            -Involved in design and development of credit approval financial application.<br>
                                            -Application was designed using JEE technologies stack and frameworks such as Java,JSF, EJB, Spring, Servlet, Web Services, JMS, Web Sphere and SQLJ.<br>                                           
                                        </p>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div class="year-container">
                            <span class="year">2010</span>
                        </div>
                        <ul>
                            <br> <br> <br>
                            <li>
                                <div class="content align-left">
                                    <a href="https://us.nttdata.com/" target="_blank">
                                        <h3>NTT DATA</h3>
                                        <h5>Senior Software Engineer</h5>
                                        <div class="grey">Dec 2005 - Mar 2010</div>
                                        <br>
                                        <p>
                                            -Involved in design and development of various applications using standard JAVA/JEE technologies stack like Java, JSP, Servlet, JDBC, XML, XSLT and Oracle.<br>
                                            -Helped to enhance the in house JEE framework.<br>                                           
                                        </p>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div class="year-container">
                            <span class="year">2005</span>
                        </div>
                        <ul>
                            <br> <br> <br>
                            <li>
                                <div class="content align-left">
                                    <a href="https://us.nttdata.com/" target="_blank">
                                        <h3>Infosys Technologies</h3>
                                        <h5>Software Engineer</h5>
                                        <div class="grey">Jun 2004 - Dec 2005</div>
                                        <br>
                                        <p>
                                            -Involved in development of application using standard MVC framework and technologies like JSP, Servlet, JDBC and Java Script.<br>
                                            -Member of the Process Improvement Team for process improvement and enforcement in the project.<br>                                           
                                        </p>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div class="green-dot"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>

export default {
    name: "Experience",
}
</script>
<style>
.resume-container {
    display: flex;
    flex: auto;
    flex-direction: column;
    text-align: left;
}

a {   
    border: none;
    text-decoration: none;
}

.green-dot {
    width: 16px;
    height: 16px;
    background: #1DB954;
    border-radius: 50%;
    margin-left: -0.45em;
}

.year-container {
    position: absolute;
    margin: 0 -2.25em;
    z-index: 9999;
}

.year {  
    font-weight: 500;
    font-size: 1.5rem;
    background: #1DB954;
    border-radius: 16px;
    padding: 0.5rem;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    perspective: 800px;
    color: black;
}

.grey {      
    font-size: 0.9rem;
}

body {
    display: flex;
}

.timeline {
    width: 100%;
    position: relative; 
    padding: 30px 20px;
    word-wrap: normal;
}

.timeline ul {
    list-style-type: none;
    border-left: 2px solid var(--primary);
    padding: 10px 5px;
}

.timeline ul li {
    padding: 20px 20px;
    position: relative;
    cursor: pointer;
    transition: .5s;
}

.timeline ul li span {
    display: inline-block;
    border-radius: 25px;
    padding: 2px 5px;
    font-size: 15px;
    text-align: center;
}

.timeline ul li .content h3 {
    color: var(--secondary);
    font-size: 1.6rem;
    padding-top: 5px;
    font-weight: 500;
    margin-bottom: 0.2rem;
}

h5 {
    font-size: 1.2rem;  
    padding-top: 5px;
    font-weight: 500;
    margin-bottom: 8px;
}

.timeline ul li .content p {   
    padding: 5px 0px 15px 0px;
    font-size: 15px;
}

.timeline ul li:before {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    background-color: lawngreen;
    border-radius: 50%;
    left: -11px;
    top: 28px;
    transition: .5s;
    margin: 0;
}

.timeline ul li:hover {   
    background-color: var(--accent);
    border-radius: 8px;
}

.timeline ul li:hover:before {
    background-color: #0F0;
    box-shadow: 0px 0px 10px 2px #0F0;
}

@media (max-width: 300px) {
    .timeline {
        width: 100%;
        padding: 30px 5px 30px 10px;
    }

    .timeline ul li .content h3 {
        color:  var(--secondary);
        font-size: 15px;
    }

}
</style>
<!-- <template>
  <div class="workspace">
    <h1>Resume</h1>
    <span>
      <a v-bind:href="`https://raw.githubusercontent.com/ravish8086/rs-portfolio/main/src/assets/docs/resume.pdf`"
         target="_blank" rel="noopener noreferrer">Download Resume</a>
    </span>
    <section class="content-section">
      <h3>Work Experience & Education</h3>
      <div class="resume-container">
        <div class="item">
          <div id="timeline">
            <div>
              <section class="year">
                <h3>2021</h3>
                <section>
                  <h4>Today</h4>
                  <ul>
                    <li>Working as Sr. Consultant Software Engineer at Visa Inc
                    </li>
                  </ul>
                </section>
              </section>
              <section class="year">
                <h3>2018</h3>
                <section>
                  <h4>May onwards</h4>
                  <ul>
                    <li>Left Cisco and joined Visa as Staff Software Engineer at Visa Inc.</li>
                  </ul>
                </section>
                <section>
                  <h4>January to May</h4>
                  <ul>
                    <li>Continued working as a consultant at Cisco on Real Time link Backup project.</li>
                    <li>Gained full hands on with Node Js and Angular.</li>
                  </ul>
                </section>
              </section>
              <section class="year">
                <h3>2017</h3>
                <section>
                  <h4>May onwards</h4>
                  <ul>
                    <li>Left Visa Inc and joined Cisco as Contractor</li>
                    <li>Worked on IOT platform using MEAN Stack</li>
                  </ul>
                </section>
                <section>
                  <h4>January to May</h4>
                  <ul>
                    <li>Continued working as a consultant at Visa Inc on Application Request Manager.</li>
                    <li>Gained experience in Open ID connect with DPS Bank integration. Worked on various Auth and
                      modules
                    </li>
                    <li>Improved the business knowledge w.r.t How Payment Industry works</li>
                  </ul>
                </section>
              </section>
              <section class="year">
                <h3>2015</h3>
                <section>
                  <h4>March onwards</h4>
                  <ul>
                    <li>Joined Visa Inc as Contractor</li>
                  </ul>
                </section>
                <section>
                  <h4>January to February</h4>
                  <ul>
                    <li>Worked as Sr Software Engineer at Incdeo Inc</li>
                  </ul>
                </section>
              </section>
              <section class="year">
                <h3>2014</h3>
                <section>
                  <h4>December</h4>
                  <ul>
                    <li>Spring Source Certified Spring Professional</li>
                  </ul>
                </section>
                <section>
                  <h4>August</h4>
                  <ul>
                    <li>Spring Source Certified Spring Professional</li>
                  </ul>
                </section>
                <section>
                  <h4>May</h4>
                  <ul>
                    <li>Oracle certified Java 6 Programmer</li>
                  </ul>
                </section>
              </section>
              <section class="year">
                <h3>2012</h3>
                <section>
                  <h4>June</h4>
                  <ul>
                    <li>Joined Incedo Inc as Software Engineer</li>
                  </ul>
                </section>
                <section>
                  <h4>April to June</h4>
                  <ul>
                    <li>Left Ignis Technoloy and Joined Airvana Networks as Sr. R&D Engineer</li>
                    <li>Airvana Networks acquired by Incedo Inc</li>
                  </ul>
                </section>
                <section>
                  <h4>January to March</h4>
                  <ul>
                    <li>Worked as Sr. Software Engineer at Ignis Technology</li>
                  </ul>
                </section>
              </section>
              <section class="year">
                <h3>2010</h3>
                <section>
                  <h4>July</h4>
                  <ul>
                    <li>Joined Ignis Technology as Software Engineer.</li>
                  </ul>
                </section>
              </section>
              <section class="year">
                <h3>2008</h3>
                <section>
                  <h4>September to December</h4>
                  <ul>
                    <li>Joined Java Leaning center for Advance java training</li>
                  </ul>
                </section>
                <section>
                  <h4>August</h4>
                  <ul>
                    <li>Completed Bachelor of Engineering in Electronics from Bharati Vidyapeeth Pune.</li>
                  </ul>
                </section>
              </section>
              <section class="year">
                <h3>2004</h3>
                <section>
                  <h4>March</h4>
                  <ul>
                    <li>Completed High School (Intermediate of Science) from JM College</li>
                  </ul>
                </section>
                <section>
                  <h4>May</h4>
                  <ul>
                    <li>Admitted to Bharati Vidyapeeth College of Engineering Pune.</li>
                  </ul>
                </section>
              </section>
              <section class="year">
                <h3>2002</h3>
                <section>
                  <h4>May</h4>
                  <ul>
                    <li>Completed Higher School Education (ICSE)</li>
                  </ul>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-section">
      <h3>Certification</h3>
      <main class="grid">
        <article>
          <div class="card-img">
            <i class="material-icons">badge</i>
          </div>
          <div class="text">
            <h3>Oracle certified Java 6 Programmer</h3>
          </div>
        </article>
        <article>
          <div class="card-img">
            <i class="material-icons">badge</i>
          </div>
          <div class="text">
            <h3>Oracle certified Java EE 5 Web Component Developer</h3>
          </div>
        </article>
        <article>
          <div class="card-img">
            <i class="material-icons">badge</i>
          </div>
          <div class="text">
            <h3>Spring Source Certified Spring Professional</h3>
          </div>
        </article>
      </main>
    </section>
    <section class="content-section">
      <h3>Technical Skills & Strength</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="progress-wrap"><h5>Java/J2EE</h5>
            <div class="progress">
              <div class="progress-bar" style="width:90%"><span>90%</span></div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="progress-wrap"><h5>Spring</h5>
            <div class="progress">
              <div class="progress-bar" style="width:90%"><span>90%</span></div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="progress-wrap"><h5>HTML5</h5>
            <div class="progress">
              <div class="progress-bar" style="width:95%"><span>95%</span></div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="progress-wrap"><h5>JavaScript</h5>
            <div class="progress">
              <div class="progress-bar" style="width:90%"><span>90%</span></div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="progress-wrap"><h5>TypeScript</h5>
            <div class="progress">
              <div class="progress-bar" style="width:80%"><span>80%</span></div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="progress-wrap"><h5>CSS</h5>
            <div class="progress">
              <div class="progress-bar" style="width:90%"><span>90%</span></div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="progress-wrap"><h5>Vue JS</h5>
            <div class="progress">
              <div class="progress-bar" style="width:87%"><span>87%</span></div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="progress-wrap"><h5>Angular</h5>
            <div class="progress">
              <div class="progress-bar" style="width:85%"><span>85%</span></div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="progress-wrap"><h5>Design Patterns</h5>
            <div class="progress">
              <div class="progress-bar" style="width:80%"><span>80%</span></div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="progress-wrap"><h5>Database</h5>
            <div class="progress">
              <div class="progress-bar" style="width:85%"><span>85%</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.resume-container {
  display: flex;
  flex: auto;
  flex-direction: column;
  text-align: left;
}

#timeline {
  position: relative;
  display: table;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
}

#timeline div:after {
  content: '';
  width: 2px;
  position: absolute;
  top: 0.5rem;
  bottom: 0;
  left: 60px;
  z-index: 1;
  background: var(--primary);
}

#timeline h3 {
  position: -webkit-sticky;
  position: sticky;
  top: 5rem;
  color: var(--primary);
  margin: 0;
  font-size: 1em;
  font-weight: 400;
}

@media (min-width: 62em) {
  #timeline h3 {
    font-size: 1.1em;
  }
}

#timeline section.year {
  position: relative;
}

#timeline section.year section {
  position: relative;
  padding-bottom: 1.25em;
  margin-bottom: 2.2em;
}

#timeline section.year section h4 {
  position: absolute;
  bottom: 0;
  font-size: 0.9em;
  font-weight: 400;
  line-height: 1.2em;
  margin: 0;
  padding: 0 0 0 89px;
  color: var(--secondary);
}

@media (min-width: 62em) {
  #timeline section.year section h4 {
    font-size: 1em;
  }
}

#timeline section.year section ul {
  list-style-type: none;
  padding: 0 0 0 75px;
  margin: -1.35rem 0 1em;
  max-width: 32rem;
  font-size: 1em;
}

@media (min-width: 62em) {
  #timeline section.year section ul {
    font-size: 1.1em;
    padding: 0 0 0 81px;
  }
}

#timeline section.year section ul:last-child {
  margin-bottom: 0;
}

#timeline section.year section ul:first-of-type:after {
  content: '';
  width: 10px;
  height: 10px;
  background: var(--primary);
  border: 2px solid var(--shade);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  left: 54px;
  top: 3px;
  z-index: 2;
}

#timeline section.year section ul li {
  margin-left: 0.5rem;
}

#timeline section.year section ul li:before {
  content: '·';
  margin-left: -0.5rem;
  padding-right: 0.3rem;
}

#timeline section.year section ul li:not(:first-child) {
  margin-top: 0.5rem;
}

.progress-wrap {
  width: 100%;
  margin-bottom: 30px;
}

.progress-wrap h5 {
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 500;
  text-align: left;
}

.progress {
  height: 6px;
  background: var(--accent);
  overflow: visible;
}

.progress-bar {
  background: var(--primary);
  position: relative;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 600;
  overflow: visible;
  border-radius: 2px;
}

.progress-bar::after {
  position: absolute;
  top: -2px;
  right: 0;
  width: 10px;
  height: 10px;
  content: "";
  background: var(--primary);
  border-radius: 50%;
}

.progress-bar span {
  position: absolute;
  top: -38px;
  right: 0;
  font-size: 16px;
  font-weight: 500;
}
</style> -->