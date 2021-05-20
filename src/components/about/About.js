import React from 'react';
import './About.css';
import confirmIcon from '../../assets/the-confirm-icon.png';
import gatherIcon from '../../assets/gather-icon.png';
import categorizeIcon from '../../assets/categorize-icon.png';

import StudentCredits from './StudentCredits';

// component imports
import DataExportForm from './DataExportForm';

import lambdalogo from '../../assets/LambdaAssets/Lambda-Logo-Red 1.png';

// const About = () => {
//   return (
//     <div className="about-container">
//       <h1>Frequently Asked Questions</h1>
//       <h2>Where does your data come from?</h2>
//       <p>
//         The data used for this website originates from multiple sources:
//         <ol>
//           <li>
//             PB2020/police-brutality Github Repository - This repository
//             accumulates and contextualizes crowdsourced evidence of police
//             brutality from various sources. The repository can be found at{' '}
//             <a
//               href="https://github.com/2020PB/police-brutality"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               https://github.com/2020PB/police-brutality
//             </a>
//           </li>
//           <li>
//             Twitter - We continually search Twitter for evidence of police
//             intervention using a technique called Natural Language Processing.
//             After an identified incident report has been approved by a member of
//             the Blue Witness team, it is added to the incident reports database.
//           </li>
//           <li>Manually input data by Blue Witness team members.</li>
//         </ol>
//         Because our system is in beta, there may be some false positives (e.g.,
//         incident reports where law enforcement were present but no use-of-force
//         incidents actually occurred) and some false negatives (e.g., incident
//         reports where use-of-force occurred and were reported but do not make it
//         into our system).
//       </p>
//       {/*
//       To be updated when DS API updates are corrected
//       <h2>How up-to-date is your data?</h2>
//       <p>Our system updates every 24 hours at XX:XX time Pacific.</p>
//       */}
//       {/*
//       To be updated when DS API updates are corrected
//       <h2>How much time does your data cover?</h2>
//       <p>Our backend processes started collection on date [X] and run through the present day. Our earliest reported incident occurred on [Insert Date Here]</p>
//       */}
//       <h2>Can I have a copy of your dataset?</h2>
//       <div>
//         <span>
//           Yes, you can access our complete database via download as a .csv file
//           and view as a JSON object. This site is also open source and you can
//           access the site code here [link to Github repo]. Leave date and state
//           fields empty to receive complete data set.
//         </span>
//         <DataExportForm />
//         <p></p> {/* for spacing */}
//       </div>
//       <h2>Who built this site?</h2>
//       <p>
//         This project was designed and built in a partnership between Human
//         Rights First's Innovation Lab and Lambda School. It represents nearly
//         seven months of work by Lambda School students.
//       </p>
//       <StudentCredits />
//       <img
//         className="lambda-logo"
//         src={lambdalogo}
//         alt="Lambda School Red Logo"
//       />
//     </div>
//   );
// };

const About = () => {
  return (
    <div className="about-page-container">
      <div className="about-top-container">
        <div className="data-description-container">
          <h1>How Our Data Is Collected</h1>
          <p className="h1-text">
            The data for this website is crowdsourced from multiple sources,
            categorized by ML techs, and is then approved by a member of the
            Blue Witness Administrative Team.
          </p>
        </div>

        <div className="data-info-container">
          <div className="info-container">
            <img className="icons" src={gatherIcon} alt="" />
            <h2>Gather</h2>
            <p>
              The data used for this website originates from multiple sources:
            </p>
            <ul>
              <li>
                <a
                  className="about-links"
                  href="https://github.com/2020PB/police-brutality"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PB2020/police-brutality GitHub Repository
                </a>{' '}
                - This repository accumulates and contextualizes crowdsourced
                evidence of police brutality from various sources.{' '}
              </li>
              <li>
                Twitter - We continually search Twitter for evidence of police
                intervention with a twitter bot using a technique called Natural
                Language Processing.
              </li>
            </ul>
          </div>

          <div className="info-container">
            <img className="icons" src={categorizeIcon} alt="" />
            <h2>Categorize</h2>
            <p>
              We have generated a model with in our data base to catergorize
              each incident report we recive. Because our system is in beta,
              there may be some false positives (e.g.,incident reports where law
              enforcement were present but no use-of-force incidents actually
              occurred), and some false negatives (e.g., incident reports where
              use-of-force occurred and were reported but do not make it into
              our system). To combat this, each incident report needs to be
              approved by the Blue Witness Administrative Team.
            </p>
          </div>

          <div className="info-container">
            <img
              className="confirm-icon"
              src={confirmIcon}
              alt="confirm icon"
            />
            <h2>Confirm</h2>
            <p>
              If a gathered incident report meets the criteria of a valid
              "police brutallity" incident, then it's marked to be reviewed.
              After an identified incident report has been approved, it is added
              to the incident reports database.
            </p>
          </div>
        </div>
      </div>

      <div className="about-bottom-container">
        <div className="inside-bottom-container about-bw-container">
          <div className="about-bw">
            <h2>The Blue Witness Project</h2>
            <p>
              The Blue Witness project is a movement to give the public access
              to reports of police brutality related incidents. By crowdsourcing
              incident reports from twitter and reddit we create a platform
              where people can contribute to a greater cause. Our database
              allows our users to export report data for their own use. We
              strive to provide a single source of truth on the topic of Police
              Brutality, that the public can use to inform themselves in the
              current state of the issue.
            </p>
          </div>
          <div className="about-hrf">
            <h2>Human Rights First Mission</h2>
            <p>
              Human Rights First is an independent advocacy and action
              organization that challenges America to live up to its ideals. We
              believe American leadership is essential in the global struggle
              for human rights, so we press the U.S. government and private
              companies to respect human rights and the rule of law. When they
              fail, we step in to demand reform, accountability and justice.
              Around the world, we work where we can best harness American
              influence to secure core freedoms.
            </p>
          </div>
          <div className="about-bot-container">
            <h2>Our Twitter Bot</h2>
            <p>
              We have created a twitter bot to interact with the everyday user.
              When an instance of police brutality is tweeted about by a user,
              this bot will recongize this and ask the user for more information
              on the topic.The bot can connect with our database and store each
              incident report by rank. We hope to continue to update and make
              the bot more functional in the future, so our users recieve
              accurate data on police brutality incidents.
            </p>
            <div className="twitter-icon-container">
              <img
                className="twitter-icon"
                src="https://img.icons8.com/android/24/ffffff/twitter.png"
                alt="twitter icon"
              />
              <span className="bot-css">Meet The Bot</span>
            </div>
          </div>
        </div>
        <div className="inside-bottom-container lambda-credits-container">
          <div className="lambda-credits">
            <h2>Who Made This Website</h2>
            <p>
              This project was designed and built in partnership between Human
              Rights First's Innovation Lab and Lambda School. It represents
              nearly seven months of work by Lambda School students. Below are
              all the students, and their Github profiles, that have ever worked
              on this website.
            </p>
          </div>
          <div className="student-credits-container">
            <StudentCredits />
            <img
              className="about-lambda-logo"
              src={lambdalogo}
              alt="lambda logo"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
