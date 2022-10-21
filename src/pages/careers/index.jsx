import React, { useState } from "react";
import { Div } from "../../parts/general";
import { XXL, H3 } from "../../parts/txt";
import { P, B } from "../../parts/txt";
import { Select } from "../../parts/form";
import styles from "./style.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "../../parts/button";
import If from "../../components/renderIf";

import { FiUser } from "react-icons/fi";
import { TiLocationOutline } from "react-icons/ti";
import { HiCheck } from "react-icons/hi";
import BlueArrowDown from "../../assets/Icons/Icons/blueArrowDown";

export default function Careers() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleChanges = (e, select) => {
    if (select == "team") {
      setSelectedTeam(e.target.value);
    }

    if (select == "location") {
      setSelectedLocation(e.target.value);
    }

    if (select == "both") {
      setSelectedTeam("");
      setSelectedLocation("");
    }
  };

  const jobsItems = [
    {
      name: "Join our Student Ambassador Team",
      team: "Marketing",
      location: "Remotely",
      data: (
        <>
          <P className="fs-m px-0 px-lg-2">
            Proprep is looking for highly motivated, outgoing, team-orientated
            STEM students to join our Student Ambassador programme. A part time
            job, flexible enough to fit around your studies and busy schedule,
            you’ll gain experience across marketing, business development and
            event management.
          </P>
          <H3 className="fs-ml mt-4 mt-lg-5 mb-3">About Proprep:</H3>
          <ul className={styles.Ul}>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Proprep is a leading edtech company with a mission to improve
              students’ success by supporting them to realise and maximise their
              academic potential in STEM subjects.
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              We have developed unique learning tools that are 100% Customized
              to specific school courses and courses in the UK and around the
              world.
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Part of our growth has been fuelled by our team of Student
              Ambassadors, who help spread the word on campus to their fellow
              students.
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Having operated for more than 10 years in the MEA region - helping
              over 500,000 students worldwide to improve their grades at uni -
              we have recently launched in the UK and want you as part of our
              team.
            </li>
          </ul>
          <H3 className="fs-ml mt-4 mt-lg-5 mb-3">Who we are looking for:</H3>
          <ul className={styles.Ul}>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />A driven and motivated
              STEM student that studies at a UK school.
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              You must be comfortable working under pressure and have a strong
              ability to manage multiple tasks at once, often alone or without
              immediate supervision.
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              The individual must also be passionate about EdTech and be highly
              organised.
            </li>
          </ul>
          <H3 className="fs-ml mt-4 mt-lg-5 mb-3">Who we are looking for:</H3>
          <ul className={styles.Ul}>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Understand the platform inside and out, being able to demonstrate
              to other students how to use it.
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Share Proprep with your friends, classmates and other STEM
              students on campus in order to generate sign ups, and subsequently
              convert them to paying customers.
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Help source other candidates that could join as student
              ambassadors.
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Research, access and interact in digital and physical STEM groups
              at your school (for example on WhatsApp, Facebook and on-campus).
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Operate pop-ups, stalls and freshers week events in-person (where
              permitted).
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Negotiate sponsorship agreements with STEM societies at your
              school.
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Dedicate up to 5 hours per week (extra hours can be agreed where
              appropriate).
            </li>
          </ul>
          <H3 className="fs-ml mt-4 mt-lg-5 mb-3">Benefits:</H3>
          <ul className={styles.Ul}>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              £10 per hour, or London Living Wage.
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Flexible working hours, to fit around your studies.
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Experience at an international start-up, whilst part of a diverse
              team of like minded, dynamic and forward thinking students.
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Unlimited free access to Proprep’s learning resources.
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Networking opportunities within the EdTech sector.
            </li>
          </ul>
          <Button
            className="py-2 px-3 mx-auto"
            onClick={() =>
              openInNewTab(
                "https://forms.monday.com/forms/a7601cb68eff98a0c5fdf5ef860ccfcf?r=use1"
              )
            }
            glow
          >
            Apply to this job
          </Button>
        </>
      ),
    },
    {
      name: "Physics Teacher",
      team: "Teaching",
      location: "Remotely",
      data: (
        <>
          <P className="fs-m px-0 px-lg-2">
            Proprep is looking for a high-school or school Physics teacher. You
            will not be teaching Physics yourself, but recording a voiceover for
            existing videos in English.
          </P>
          <H3 className="fs-ml mt-4 mt-lg-5 mb-3">About The Role</H3>
          <ul className={styles.Ul}>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Bachelor’s degree or higher in any STEM field
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Working availability of at least 60 hours per month (can be
              extended to full-time employment)
            </li>
          </ul>
          <Button
            className="py-2 px-3 mx-auto"
            onClick={() =>
              openInNewTab(
                "https://forms.monday.com/forms/e948340d7ed9546aa75646df3b004416?r=use1"
              )
            }
            glow
          >
            Apply to this job
          </Button>
        </>
      ),
    },
    {
      name: "Biology Content Recorder",
      team: "Teaching",
      location: "Remotely",
      data: (
        <>
          <H3 className="fs-ml mt-0 mt-lg-5 mb-3">About The Role</H3>
          <ul className={styles.Ul}>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Bachelor’s degree or higher in Biology
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Teaching experience in Biology, especially with popular first-year
              courses
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Tech proficiency (capable of managing various forms of software
              after training, full competence in Microsoft Office, etc)
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Legible handwriting
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Working availability of at least 80 hours per month (can be
              extended to full-time employment)
            </li>
          </ul>
          <Button
            className="py-2 px-3 mx-auto"
            onClick={() =>
              openInNewTab(
                "https://forms.monday.com/forms/e948340d7ed9546aa75646df3b004416?r=use1"
              )
            }
            glow
          >
            Apply to this job
          </Button>
        </>
      ),
    },
    {
      name: "Finance Content Recorder",
      team: "Teaching",
      location: "Remotely",
      data: (
        <>
          <H3 className="fs-ml mt-0 mt-lg-5 mb-3">About The Role</H3>
          <ul className={styles.Ul}>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Bachelor’s degree or higher in Finance
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Teaching experience in Finance, especially with popular first-year
              courses
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Tech proficiency (capable of managing various forms of software
              after training, full competence in Microsoft Office, etc)
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Legible handwriting
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Working availability of at least 80 hours per month (can be
              extended to full-time employment)
            </li>
          </ul>
          <Button
            className="py-2 px-3 mx-auto"
            onClick={() =>
              openInNewTab(
                "https://forms.monday.com/forms/e948340d7ed9546aa75646df3b004416?r=use1"
              )
            }
            glow
          >
            Apply to this job
          </Button>
        </>
      ),
    },
    {
      name: "Business Development Manager",
      team: "Business Development",
      location: "Remotely",
      data: (
        <>
          <H3 className="fs-ml mt-0 mt-lg-5 mb-3">About The Role</H3>
          <ul className={styles.Ul}>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Bachelor’s degree or higher in Finance
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Business Development Experience in Higher Education
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Excellent written, verbal, interpersonal, presentation, management
              and training skills
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Strong negotiation skills, Full time role
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Remote working with travel
            </li>
          </ul>
          <Button
            className="py-2 px-3 mx-auto"
            onClick={() =>
              openInNewTab(
                "https://forms.monday.com/forms/c157d07bf8ac18ecdf49021aaa75b972?r=use1"
              )
            }
            glow
          >
            Apply to this job
          </Button>
        </>
      ),
    },
    {
      name: "Sales and Marketing Coordinator",
      team: "Business Development",
      location: "Hybrid (London)",
      data: (
        <>
          <H3 className="fs-ml mt-0 mt-lg-5 mb-3">About The Role</H3>
          <ul className={styles.Ul}>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Bachelor’s degree or higher
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Marketing, sales and comes experience in higher education
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Detail-oriented with excellent communication skills, written and
              verbal
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Website, social media or content design experience preferred
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Full time role
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Hybrid working (London)
            </li>
          </ul>
          <Button
            className="py-2 px-3 mx-auto"
            onClick={() =>
              openInNewTab(
                "https://forms.monday.com/forms/e5024621e3a68c82fcc98b77a6342e1c?r=use1"
              )
            }
            glow
          >
            Apply to this job
          </Button>
        </>
      ),
    },
    {
      name: "Project Coordinator",
      team: "Content",
      location: "Hybrid",
      data: (
        <>
          <P className="fs-m px-0 px-lg-2">
            Kvasir Education, a fast-growing e-learning company, is in search of
            a Project Coordinator for the company’s content development
            department.
          </P>
          <H3 className="fs-ml mt-4 mt-lg-5 mb-3">In this role you will:</H3>
          <ul className={styles.Ul}>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Assist and support content creators, editors and users in managing
              the platform, which is at the heart of the company’s operations
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Be the content team’s point of contact with other teams in the
              company and external service providers
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Work with the content team as they develop new courses, providing
              technical and administrative support
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Work with the R&D team to support the site and our course library
            </li>
          </ul>
          <H3 className="fs-ml mt-4 mt-lg-5 mb-3">Requirements and skills:</H3>
          <ul className={styles.Ul}>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Bachelor’s degree (a science field is an advantage)
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Good technological skills and ability to learn quickly
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Good oral and written expression in English
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Full competence in all Microsoft Office programs
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Excellent interpersonal skills, initiative, organization and work
              ethic
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Willingness to work in a dynamic environment and on multiple
              overlapping tasks
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Experience in teaching science and building curricula is an
              advantage
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Full-time availability (hybrid work is optional)
            </li>
            <li className="fs-m border-0 position-relative">
              <HiCheck className={styles.CheckMark} />
              Ability to start work immediately
            </li>
          </ul>
          <Button
            className="py-2 px-3 mx-auto"
            onClick={() =>
              openInNewTab(
                "https://forms.monday.com/forms/ce3b0106d73c850c23ce38c70af3e9a8?r=use1"
              )
            }
            glow
          >
            Apply to this job
          </Button>
        </>
      ),
    },
  ];

  const filterByTeamLocation = () => {
    const newItems = jobsItems
      .filter((item) => item.team.includes(selectedTeam))
      .filter((item) => item.location.includes(selectedLocation));

    if (newItems) {
      return newItems;
    }

    return jobsItems;
  };

  return (
    <>
      <Div className={`page py-3 pb-md-5 ${styles.Container}`}>
        <XXL className="text-center pt-5 pb-5">
          <span className={`position-relative ${styles.blue}`}>Join</span> us
        </XXL>
        <P className="paragraph mx-auto text-center px-3 fs-m">
          We’re searching for people who are ready to jump right in, love
          collaborating, and value our culture of transparency to join our team.
          Come join us so together we can impact how teams work across the
          globe.
        </P>
        <Div
          className={`mb-3 d-flex flex-wrap justify-content-center text-center ${styles.Select}`}
        >
          <Select
            icon={<FiUser />}
            value={selectedTeam}
            onChange={(e) => handleChanges(e, "team")}
          >
            <option value="">Select team</option>
            <option value="Marketing">Marketing</option>
            <option value="Teaching">Teaching</option>
            <option value="Business Development">Business Development</option>
            <option value="Content">Content</option>
          </Select>
          <Select
            icon={<TiLocationOutline />}
            value={selectedLocation}
            onChange={(e) => handleChanges(e, "location")}
          >
            <option value="">Select location</option>
            <option value="Remotely">Remotely</option>
            <option value="Tel Aviv, Israel">Tel Aviv, Israel</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Hybrid">Hybrid</option>
          </Select>
        </Div>
        <P className="text-center">
          <B>7</B> jobs in <B>2</B> locations in <B>4</B> teams
        </P>
      </Div>

      <Div className="page pt-5">
        <Container className={`mb-4 d-none d-lg-block ${styles.TableHeader}`}>
          <Row>
            <Col xs={6} className="text-uppercase fw-bold">
              Job
            </Col>
            <Col className="text-uppercase fw-bold">Team</Col>
            <Col className="text-uppercase fw-bold">Location</Col>
          </Row>
        </Container>

        <Accordion>
          {filterByTeamLocation().map((jobItem, index) => (
            <Accordion.Item eventKey={index} className={styles.AccordionItem}>
              <Accordion.Header className={styles.AccordionHeader}>
                <Container className={styles.TableContent}>
                  <Row>
                    <Col xs={12} lg={6} className="fs-m fw-bold px-0 px-lg-2">
                      {jobItem.name}
                      <BlueArrowDown />
                    </Col>
                    <Col xs={8} lg={3} className="pt-2 pt-md-0 px-0 px-lg-2">
                      {jobItem.team}
                    </Col>
                    <Col
                      xs={4}
                      lg={3}
                      className={`pt-2 pt-md-0 px-0 px-lg-2 ${styles.Location}`}
                    >
                      {jobItem.location}
                    </Col>
                  </Row>
                </Container>
              </Accordion.Header>
              <Accordion.Body
                className={`px-0 px-lg-3 ${styles.AccordionBody}`}
              >
                {jobItem.data}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <If cond={filterByTeamLocation() == ""}>
          <Div className="my-5">
            <P className={`text-center fs-m ${styles.P}`}>No results found</P>
            <Button
              className="py-2 px-3 mx-auto"
              onClick={() => handleChanges("", "both")}
              glow
            >
              Show all
            </Button>
          </Div>
        </If>
      </Div>
    </>
  );
}
