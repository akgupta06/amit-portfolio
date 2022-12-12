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
                                        <p>
                                            -Developed and design in-house and external products primarily using React,PHP and Python<br>
                                            -Contributed to in house ORM framework development<br>
                                        </p>

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

.timeline a {   
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

.grey {      
    font-size: 0.9rem;
    color: black;
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

.timeline ul li .content h5 {
    font-size: 1.2rem;  
    padding-top: 5px;
    font-weight: 500;
    margin-bottom: 8px;
    color: black;
}

.timeline ul li .content p {   
    padding: 5px 0px 15px 0px;
    font-size: 15px;
    color: black;
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