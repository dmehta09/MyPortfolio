import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2022 - present"
          iconStyle={{ background: '#000080', color: '#00008B' }}
          icon={<WorkIcon />}>
          <h3 color="blue">
            <u>Position </u>: <span color="#F8F8FF">Backend Developer</span>
            <br></br>
            <br></br>
            <u>Company </u>: <span color="#F8F8FF"> Arvasit Technolabs Pvt Ltd</span>
            <br></br>
            <br></br>
            <u>Overview </u>: <br></br>
            <br></br>
            <span color="#F8F8FF">
              {' '}
              Developed and Maintained the Backend System of Witsby Product, which is a NextGen
              Online Learning Platform Designed for K-12 students, in collaboration with ASCD
              organization.<br></br> (
              <a href="https://www.ascd.org/" color="#2F4F4F" text-decoration = 'none'>
                {' '}
                ASCD Website
              </a>
              )<br></br>
            </span>
          </h3>
          <h3 color="blue">Responsibilities:</h3>
          <ol color="#F8F8FF" font-size = '20px'>
            <li>
              Developed and maintained a microservices-based web application using NestJS, a
              framework built on top of Node.js and TypeScript, to handle server-side logic.
            </li>
            <br></br>
            <li>
              Implemented GraphQL as an API layer to enable flexible and efficient communication
              between the client and the server. Utilized Apollo Server to handle GraphQL requests
              and responses.
            </li>
            <br></br>
            <li>
              Designed and managed the MongoDB database to store and retrieve data efficiently. Used
              Mongoose, an ODM library, to define the schema and interact with the database.
            </li>
            <br></br>
            <li>
              Containerized the application using Docker to ensure consistency in the development,
              testing, and deployment environments. Created Dockerfiles for each microservice and
              composed them using Docker Compose.
            </li>
            <br></br>
            <li>
              Configured and optimized Elasticsearch to enable full-text search and analytics.
              Integrated Elasticsearch with NestJS using the official Elasticsearch client.
            </li>
            <br></br>
            <li>
              Deployed the application on AWS EC2 instances to ensure scalability and availability.
            </li>
            <br></br>
            <li>
              Leveraged AWS S3 to store and retrieve static assets such as images, videos, and
              documents. Utilized the AWS SDK for Node.js to interact with S3.
            </li>
          </ol>
          <h3 color="blue">Achievements:</h3>
          <ol color="#F8F8FF">
            <li>
              Reduced the time-to-market for new features by 30% by adopting a microservices-based
              architecture and utilizing NestJS and GraphQL.
            </li>
            <br></br>
            <li>
              Improved the performance and stability of the application by 50% by optimizing the
              MongoDB queries and indexes and tuning Elasticsearch.
            </li>
            <br></br>
            <li>
              Enabled seamless deployment and testing by implementing Docker and Docker Compose.
            </li>
            <br></br>
          </ol>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
