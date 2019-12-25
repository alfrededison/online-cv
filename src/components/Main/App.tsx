import React from 'react';
import Helmet from 'react-helmet';

import './App.scss';

import {cv} from "../../data";
import {cpaToText, displayYearMonth, generateMetaSkillTags, getIcon} from "../../utils";

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{cv.Profile.Name + " Resume/CV"}</title>
        <meta name="theme-color" content="#42A8C0"/>
        <meta name="description" content={cv.Profile.Title}/>
        <meta name="keywords" content={generateMetaSkillTags(cv.Skills)}/>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet"/>
        <script defer src="https://use.fontawesome.com/releases/v5.1.1/js/all.js"
                integrity="sha384-BtvRZcyfv4r0x/phJt9Y9HhnN5ur1Z+kZbKVgzVBAlQZX4jvAuImlIz+bG7TS00a"
                crossOrigin="anonymous"/>
      </Helmet>
      <article id="main" className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <header className="resume-header pt-4 pt-md-0">
            <div className="media flex-column flex-md-row">
              <img className="mr-3 img-fluid picture mx-auto" src={cv.Profile.Avatar} alt=""/>
              <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                <div className="primary-info">
                  <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">{cv.Profile.Name}</h1>
                  <div className="title mb-2">{cv.Profile.Title}</div>
                  <ul className="list-unstyled">
                    <li className="mb-1">
                      <a href={cv.PrimaryContact.Address.Link} id="address-link">
                        <i className="fas fa-map-marked-alt fa-fw mr-2"
                           data-fa-transform="grow-3"/>{cv.PrimaryContact.Address.Text}
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href={cv.PrimaryContact.Email.Link} id="email-link">
                        <i className="far fa-envelope fa-fw mr-2"
                           data-fa-transform="grow-3"/>{cv.PrimaryContact.Email.Text}
                      </a>
                    </li>
                    <li>
                      <a href={cv.PrimaryContact.Phone.Link} id="phone-link">
                        <i className="fas fa-mobile-alt fa-fw mr-2"
                           data-fa-transform="grow-6"/>{cv.PrimaryContact.Phone.Text}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="secondary-info ml-md-auto mt-2">
                  <ul className="resume-social list-unstyled">
                    {cv.SecondaryContacts.map(item =>
                      <li className="mb-3" key={item.Type}>
                        <a href={item.Value.Link} id={item.Type + "-link"}>
                          <span className="fa-container text-center mr-2">
                            <i className={`${getIcon(item.Type)} fa-fw`}/>
                          </span>{item.Value.Text}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div className="resume-body p-5">
            <section className="resume-section summary-section mb-5">
              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
              <div className="resume-section-content">
                <p className="mb-0">
                  {cv.About.map(item => <span key={btoa(item)}>{item}<br/></span>)}
                </p>
              </div>
            </section>
            <div className="row">
              <div className="col-lg-9">
                <section className="resume-section experience-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
                  <div className="resume-section-content">
                    <div className="resume-timeline position-relative">
                      {cv.Experiences.reverse().map(item =>
                        <article className="resume-timeline-item position-relative pb-5" key={item.Company.Text}>

                          <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                              <h3 className="resume-position-title font-weight-bold mb-1">{item.Title}</h3>
                              <div className="resume-company-name ml-auto"><a
                                href={item.Company.Link}>{item.Company.Text}</a></div>
                            </div>
                            <div
                              className="resume-position-time">{item.Period.From.getFullYear()} - {item.Period.To?.getFullYear() || 'Present'}</div>
                          </div>
                          {item.Projects.map(project =>
                            <div className="resume-timeline-item-desc mb-4" key={btoa(project.Description)}>
                              <p>{project.Description}</p>
                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                              <ul>
                                {project.Responsibilities.map(resp => <li key={btoa(resp)}>{resp}</li>)}
                                {project.ResponsibilityGroups?.map(group =>
                                  <li key={btoa(group.Description)}>
                                    <p>{group.Description}</p>
                                    <ul>
                                      {group.Responsibilities.map(resp => <li key={btoa(resp)}>{resp}</li>)}
                                    </ul>
                                  </li>
                                )}
                              </ul>
                              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                              <ul className="list-inline">
                                {project.Tags?.map(tag =>
                                  <li className="list-inline-item" key={tag}>
                                    <span className="badge badge-primary badge-pill">{tag}</span>
                                  </li>
                                )}
                              </ul>
                            </div>
                          )}
                        </article>
                      )}
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-lg-3">
                <section className="resume-section skills-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                  <div className="resume-section-content">
                    {cv.Skills.map(skill =>
                      <div className="resume-skill-item" key={skill.Name}>
                        <h4 className="resume-skills-cat font-weight-bold">{skill.Name}</h4>
                        <ul className="list-unstyled mb-4">
                          {skill.Items.map(item =>
                            <li className="mb-2" key={item.Name}>
                              <div className="resume-skill-name">{item.Name}</div>
                              <div className="progress resume-progress">
                                <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                                     style={{width: item.Level + "%"}}/>
                              </div>
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </section>
                <section className="resume-section education-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <div className="resume-degree font-weight-bold">{cv.Education.Title}</div>
                        <div className="resume-degree-org">{cv.Education.School}</div>
                        <div
                          className="resume-degree-time">{cv.Education.Period.From.getFullYear()} - {cv.Education.Period.To?.getFullYear() || 'Present'}</div>
                        <div>
                          <p>{cv.Education.Description}</p>
                          <p>
                            CPA: <strong>{cv.Education.CPA}</strong>/4.00
                            - <strong>Rated {cpaToText(cv.Education.CPA)}</strong>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="resume-section reference-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Certificates</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled resume-awards-list">
                      {cv.Certificates.map(cert =>
                        <li className="mb-2 pl-4 position-relative" key={cert.Title}>
                          <i className="resume-award-icon fas fa-trophy position-absolute"
                             data-fa-transform="shrink-2"/>
                          <div className="resume-award-name">{cert.Title}</div>
                          <div className="resume-degree-org">{cert.School}</div>
                          <div className="resume-degree-time">{displayYearMonth(cert.Date)}</div>
                          <div className="resume-award-desc">{cert.Description}</div>
                        </li>
                      )}
                    </ul>
                  </div>
                </section>
                <section className="resume-section language-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled resume-lang-list">
                      {cv.Languages.map(lang =>
                        <li className="mb-2" key={lang.Language}>
                          <span className="resume-lang-name font-weight-bold">{lang.Language}</span>
                          &nbsp;
                          <small className="text-muted font-weight-normal">({lang.Level})</small>
                        </li>
                      )}
                    </ul>
                  </div>
                </section>
                <section className="resume-section interests-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      {cv.Interests.map(item => <li className="mb-1" key={item}>{item}</li>)}
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </article>
      <footer className="footer text-center pt-2 pb-5">
        <small className="copyright">
          Designed with <i className="fas fa-heart"/> by <a href="http://themes.3rdwavemedia.com" target="_blank" rel="noopener noreferrer" id="credit-link">
          Xiaoying Riley</a> for developers
        </small>
        <a href="https://github.com/alfrededison/online-cv" id="source-link">
          <img
            style={{position: 'absolute', top: 0, right: 0, border: 0}}
            src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67"
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"/>
        </a>
      </footer>
    </>
  );
};

export default App;
