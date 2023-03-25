import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css';

function Home() {

  function handleClick() {
    alert(`My email address is: mehtadevang101@gmail.com`);
  }
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Devang</h2>
        <div className="prompt">
          <p>
            I'm a Skilled Backend Developer with experience in{' '}
            <strong color="#008B8B">TypeScript</strong> and{' '}
            <strong color="#008B8B">JavaScript</strong>, and expertise in{' '}
            <strong color="#008B8B"> Node.js</strong> frameworks like
            <strong color="#008B8B"> NestJS</strong>. I'm a quick learner and collaborate closely
            with clients to create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to life!
          </p>
          <LinkedInIcon
            onClick={(event) => (window.location.href = 'pagelink')}
            style={{ cursor: 'pointer' }}
          />
          <GithubIcon
            onClick={(event) => (window.location.href = 'https://github.com/dmehta09')}
            style={{ cursor: 'pointer' }}
          />
          <EmailIcon onClick={handleClick} style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <div className="skills">
        <h1 color="#A52A2A">
          {' '}
          <u color="DarkGray">SKILLS</u>
        </h1>
        <ol className="list">
          <li className="item">
            <h2 color="LightSalmon">Back-End</h2>
            <ul color="MediumTurquoise">
              <li>NestJS</li>
              <br></br>
              <li>GraphQL</li>
              <br></br>
              <li>MongoDB</li>
              <br></br>
              <li>Elasticsearch</li>
              <br></br>
              <li>Docker</li>
              <br></br>
              <li>AWS EC2</li>
              <br></br>
              <li>AWS S3</li>
              <br></br>
            </ul>
          </li>
          <li className="item">
            <h2 color="LightSalmon"> Front-End</h2>

            <ul color="MediumTurquoise">
              <li>ReactJS</li>
              <br></br>
              <li>JavaScript</li>
              <br></br>
              <li>HTML</li>
              <br></br>
              <li>CSS</li>
              <br></br>
              <li>MaterialUI</li>
            </ul>
          </li>
          <br></br>
        </ol>
      </div>
    </div>
  );
}

export default Home;
