import {ResumeData} from "./interface";

export const cv: ResumeData = {
  Profile: {
    Name: "Hieu Duc Nguyen",
    Title: "Full Stack PHP Developer",
    Avatar: "images/profile.png"
  },
  About: [
    "A dedicated professional with 4+ years combined experience as a full-stack web developer with LAMP stack, Hybrid mobile application developer and DevOps engineer.",
    "Specializes in maximizing site features and performance through code utilization and database optimization.",
    "Now seeking to contribute my experience, skills and expertise to the development team at a great enthusiasm and high motivated company."
  ],
  PrimaryContact: {
    DOB: new Date("1993-09-14"),
    Address: {
      Text: "Dong Anh, Hanoi, Vietnam",
      Link: "https://goo.gl/maps/6Min61BMvY82"
    },
    Email: {
      Text: "nguyenduchieu1409@gmail.com",
      Link: "mailto:nguyenduchieu1409@gmail.com"
    },
    Phone: {
      Text: "(+84)348143780",
      Link: "tel:+84348143780"
    }
  },
  SecondaryContacts: [
    {
      Type: "Skype",
      Value: {
        Text: "nguyenduchieu1409",
        Link: "skype:nguyenduchieu1409?chat"
      }
    },
    {
      Type: "LinkedIn",
      Value: {
        Text: "nguyenduchieu1409",
        Link: "https://www.linkedin.com/in/nguyenduchieu1409"
      }
    },
    {
      Type: "Github",
      Value: {
        Text: "alfrededison",
        Link: "https://github.com/alfrededison"
      }
    },
    {
      Type: 'Website',
      Value: {
        Text: "nguyenduchieu.tk",
        Link: "https://nguyenduchieu-1409.web.app"
      }
    }
  ],
  Skills: [
    {
      Name: "Backend",
      Items: [
        {Name: "PHP 5 & 7", Level: 73},
        {Name: "Laravel 5", Level: 73},
        {Name: "CodeIgniter", Level: 50},
        {Name: "ZendFramework 1 & 2", Level: 50},
        {Name: "MySQL", Level: 65},
        {Name: "Java & SpringBoot", Level: 40},
        {Name: "NodeJS", Level: 50},
      ]
    },
    {
      Name: "Frontend",
      Items: [
        {Name: "JavaScript, ES6, TypeScript", Level: 60},
        {Name: "jQuery", Level: 60},
        {Name: "React", Level: 65},
        {Name: "VueJs", Level: 65},
        {Name: "Angular 2+", Level: 65},
        {Name: "Ionic framework", Level: 55},
        {Name: "HTML & CSS", Level: 55},
      ]
    },
    {
      Name: "Others",
      Items: [
        {Name: "Git", Level: 90},
        {Name: "Docker, Linux", Level: 65},
        {Name: "Apache Solr", Level: 50},
        {Name: "Amazon AWS", Level: 50},
      ]
    }
  ],
  Experiences: [
    {
      Title: "Full-stack Web Developer",
      Company: {
        Text: "Donuts Co.Ltd",
        Link: "https://www.donuts.ne.jp/"
      },
      Period: {
        From: new Date('2014-09'),
        To: new Date('2017-03')
      },
      Projects: [
        {
          Description: "Developed administrator website of \"Gachinko no Tora\" game, which manages system database, game events, user data.",
          Responsibilities: [
            "Managed back-end server using Linux, Apache, MySql, PHP",
            "Scheduled teamwork with Redmine, mastered team code with git",
            "Created client app communicating with server via REST-ful API",
            "Leveraged MVC framework using Zend Framework",
          ],
          Tags: [
            "Linux", "PHP", "MySQL", "Redmine", "Git", "Zend Framework", "REST API"
          ]
        },
        {
          Description: "Developed Codetotop website's back-end, which manages tests and questions database, user information, and API running in Docker services.",
          Responsibilities: [
            "Used Zend Framework 2 with Docker for distributed REST-ful server",
            "Operated project using Agile development method",
            "Applied SOLID principles and design patterns in code packaging and reuse",
            "Constructed Admin's pages for managing user roles, question bank",
            "Performed Front-end testing with Selenium",
          ],
          Tags: [
            "Docker", "Agile", "SOLID", "Selenium", "Zend Framework 2"
          ]
        },
        {
          Description: "Developed Viecbonus website's back-end which supports headhunter operation by searching for jobs and candidate information using Apache Solr, together with developing client user interface.",
          Responsibilities: [
            "Built data logging system for managing, statistics, and feedback to administrators",
            "Database: optimize query(normalization, index, caching,...)",
          ],
          ResponsibilityGroups: [
            {
              Description: "Back-end",
              Responsibilities: [
                "Used Laravel 5 for rapid website development",
                "Used composer and gulp that handles back-end extensions and front-end libraries correspondingly",
                "Optimized server response using HTTP caching header, Redis data caching",
                "Developed searching engine using Apache Solr",
              ]
            },
            {
              Description: "Front-end",
              Responsibilities: [
                "Handled client-side function using Javascript, JQuery",
                "Styled with Bootstrap, CSS3",
                "Tuned up page load speed using Google PageSpeed",
              ]
            },
            {
              Description: "Other service",
              Responsibilities: [
                "Amazon Web Service: stored website's documents, code, and other resources",
                "Amazon Cloudfront: leveraged Contend Delivery Network(CDN) for better resource loading performance",
                "Google Analytics: worked with marketing team to monitor page visits, site performance, and optimize search engine results",
                "Chat bot: integrated wit.ai and luis.ai to provide a virtual headhunt system on fan-page chat"
              ]
            },
          ],
          Tags: [
            "Laravel 5", "Apache Solr", "System Administrator", "Caching", "Indexing", "SQL optimization",
            "Bootstrap", "jQuery", "AWS", "CDN", "Google Analytics", "Chat bot",
          ]
        }
      ]
    },
    {
      Title: "PHP Developer",
      Company: {
        Text: "Paymentwall Inc.",
        Link: "https://www.paymentwall.com/"
      },
      Period: {
        From: new Date('2017-04'),
        To: new Date('2018-01')
      },
      Projects: [
        {
          Description: "Developed Paymentwall admin/risk agent Portal and transaction API.",
          Responsibilities: [
            "Tracked project with Jira, manage coding revision with svn and fabricator",
            "Leveraged MVC framework using Zend Framework with Smarty template",
            "Managed application compatibility using code features corresponding to new-coming changes",
            "Ensured system availability using master-slave database",
            "Improved portal's functionality by adding tools which bring more options to agents but keep user interface neat and intuitive",
          ],
          Tags: [
            "svn", "Zend Framework", "Code-feature management"
          ]
        },
        {
          Description: "Developed Medusa micro-service, which gives service agents a powerful tool to manage transaction filter flow.",
          Responsibilities: [
            "Built Single Page Web Application (SPA) with Laravel 5.4 and VueJs 2",
            "Leveraged query optimization using index and database caching",
            "Enhanced communication between web client application and external service with server via REST-ful API empowered by Access Control List(ACL) and JSON Web Token(JWT)",
            "Improved code structure and understandability by using Helper, Service Provider, Container, Filter,... provided by framework and theory of Dependency Injection",
            "Managed front-end library with npm and delivered to user throw webpack",
            "Performed full test for application including unit test, functional test, REST-ful API test, behavior acceptance test powered by Codeception",
          ],
          Tags: [
            "Single Page Web Application", "Laravel 5", "VueJs", "Caching", "Indexing",
            "REST API", "JWT", "ACL", "Dependency Injection", "Webpack",
            "Unit Test", "Functional Test", "Acceptance Test", "Codeception",
          ]
        },
      ],
    },
    {
      Title: "Senior Software Developer",
      Company: {
        Text: "Ascend Corp. (Bangkok)",
        Link: "https://www.ascendcorp.com/"
      },
      Period: {
        From: new Date('2018-03'),
        To: new Date('2019-03')
      },
      Projects: [
        {
          Description: "Developed True Smart Merchant 4.0 mobile application.",
          Responsibilities: [
            "Leveraged newest hybrid mobile framework using Ionic 3 with Angular 4",
            "Performed front-end test for application including ng test",
            "Managed coding revision with git and automated CI/CD operation using Gitlab",
            "Participated in Agile/Scrum development process to contribute ideas, raise the issues and solve the problems together with the whole team including developers, QAs and PO",
            "Cooperated with design team via Zeplin",
            "Cooperated with iOS, Android application teams to bundle hybrid application into native application to make a modular mobile application",
          ],
          Tags: [
            "Hybrid mobile application", "Ionic", "Angular", "CI/CD", "Agile", "Unit Test", "Zeplin"
          ]
        },
        {
          Description: "Developed Weomni platform, which is a product of O2O (Online to Offline) project.",
          Responsibilities: [
            "Used micro-service architecture to build up a platform",
            "Leveraged new technology and boilerplate from jHipster to create micro-service system with gateway API, user account and authentication,...",
            "Enhanced communication between micro-service application and external service with server via REST-ful API empowered by OAuth2 and JSON Web Token(JWT)",
            "Worked with Java and Spring framework",
            "Used MongoDB for schema-less data system",
            "Performed unit test and functional test for all functions and APIs",
            "Discussed with team and the architect about system design and implementation",
          ],
          Tags: [
            "Micro services", "API", "JWT", "jHipster", "Java", "Springboot", "MongoDB",
            "Unit Test", "Functional Test", "Acceptance Test",
          ]
        }
      ]
    },
    {
      Title: "Senior Software Developer",
      Company: {
        Text: "TwentyTech Asia",
        Link: "https://twenty-tech.com/"
      },
      Period: {
        From: new Date('2019-07'),
        To: null
      },
      Projects: [
        {
          Description: "Developed Auto Parts Fitment Database & Online e-Commerce Solutions and Software",
          Responsibilities: [
            "Tuned up system load by optimized SQL Server queries and index data using Solr search.",
            "Refactored and cleaned up legacy code that was a hybrid of CodeIgniter and WordPress.",
            "Developed Single Page Application using React.",
            "Work remotely with Australia development team.",
          ],
          Tags: [
            "Caching", "Indexing", "SQL optimization", "Apache Solr",
            "CodeIgniter", "React JS", "Remote work"
          ]
        }
      ]
    }
  ],
  Education: {
    Title: "Engineering Degree in ICT",
    School: "Hanoi University of Science and Technology",
    Period: {
      From: new Date('2011-09'),
      To: new Date('2016-06')
    },
    Description: "Class of ICT Program - an advanced program for talented students in which all courses are given in English",
    CPA: 3.4
  },
  Certificates: [
    {
      Title: "EBA Health & Environment Fieldwork",
      School: "Keio University, Japan",
      Date: new Date('2016-8'),
      Description: "Supported a group of foreign student to communicate with local people in Binh Dinh, Vietnam to talk about Agent Orange and life of families having Agent Orange victims"
    },
    {
      Title: "Temasek Foundation SCALE scholar 2015",
      School: "Temasek Polytechnic, Singapore",
      Date: new Date('2015-12'),
      Description: "Made an exhibition about Heritage-Museum-Trail using high technology"
    },
    {
      Title: "Leader in me",
      School: "Temasek Polytechnic, Singapore",
      Date: new Date('2015-10'),
      Description: "Built up a team via social activities"
    },
    {
      Title: "EBA Energy & Environment Fieldwork",
      School: "Universiti Sains Malaysia, Malaysia",
      Date: new Date('2015-6'),
      Description: "Analyzed the factors and related data which affect to the marine ecosystem"
    },
    {
      Title: "Starting-up a Knowledge Intensive Business",
      School: "University of Turku, Finland",
      Date: new Date('2015-4'),
      Description: "Made a business model canvas and propose a business plan"
    },
    {
      Title: "Global Project Based Learning Course on Robotics",
      School: "Shibaura Institute of Technology, Japan",
      Date: new Date('2016-8'),
      Description: "Built and extended a line-tracing robot with embedded microchip"
    }
  ],
  Languages: [
    {
      Language: "Vietnamese",
      Level: "Native"
    },
    {
      Language: "English",
      Level: "Professional Working Proficiency"
    }
  ],
  Interests: [
    "Coding",
    "Science",
    "Sports",
    "Heath",
    "Meditation",
  ]
};