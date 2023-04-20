/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Prasanna Bhilegaonkar",
  title: "Hey, I'm Prasanna!",
  subTitle: emoji(
    "Currently earing a Bachelore of Engineering degree in Computer Engineering. As a passionate full stack web developer with a strong focus on front end development and UI/UX, I strive to create visually stunning and user-friendly websites that deliver seamless user experiences."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1kKbp5HA7amnfY4Btqx_x_y6dt68G37cj/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/PrasannaBH",
  linkedin: "https://www.linkedin.com/in/prasanna-bhilegaonkar/",
  gmail: "bhilegaonkarprasanna12@gmail.com",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // instagram: "",
  twitter: "https://twitter.com/NOTPrasanna",
  // youtube: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I love to explore different technologies and solve complex problems. These are some of the technologies I have been exploring",
  skills: [
    // emoji(
    //   "⚡ Develop highly efficient Machine Learning models for Data Interpretation and Data Insights."
    // ),
    emoji("⚡ Develop Highly Secure and Scalable websites"),
    emoji(
      "⚡ Collaborate and Cross function across teams to develop High performance websites."
    ),
    emoji("⚡ Create innovative and engaging experiences. ")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "angularjs",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "AISSMS Institute of Information Technology",
      logo: require("./assets/images/aissmsioit.jpg"),
      subHeader: "Bachelor of Engineering, Computer Engineering",
      duration: "2021 - 2024",
      desc: "SGPA: 7.8 Course:",

      descBullets: [
        "Fundamentals of Programming Langauge",
        "Data Structures and Algorithms",
        "OOP",
        "System Design",
        "Networking and Security",
        "Operating Systems",
        "Microprocessor",
        "Android Development",
        "Machine Learning",
        "Artificial Intelligence"
      ]
    },
    {
      schoolName: "Marathwada Institute of Technology, Polytechnic",
      logo: require("./assets/images/mitpolytechnic.png"),
      subHeader: "Diploma, Computer Engineering",
      duration: "2018 - 2021",
      desc: "95.03% Courses:",

      descBullets: ["Achieved a position in the top 3 ranking of my department"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backeend",
      progressPercentage: "60%"
    },
    {
      Stack: "Cloud/DevOps",
      progressPercentage: "45%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer Inter",
      company: "Freelance",
      companylogo: require("./assets/images/freelance.jpg"),

      date: "October 2022 - December 2022",
      desc: "Responsibilities:",
      descBullets: [
        "Developed web applications using Java Server Pages (JSP), HTML, CSS, and JavaScript.",
        "Worked closely with clients to understand their requirements and provide timely and effective solutions.",
        "Collaborated with other developers and designers to ensure seamless integration of front-end and back-end components."
      ]
    },

    {
      role: "Web Developer Inter",
      company: "Wizad co",
      companylogo: require("./assets/images/wizad.jpg"),
      date: "July 2022 - August 2022",
      desc: "Responsibilities:",
      descBullets: [
        "Developed the frontend of their website to make users experience more comfortable.",
        "Created website with VueJS, Vuetify technologies.",
        "Organized states using Vuex."
      ]
    },

    {
      role: "Web Developer Intern",
      company: "PurpleBoat",
      companylogo: require("./assets/images/purpleboat.jpg"),
      date: "January 2022 - Jun 2022",
      desc: "Responsibilities:",
      descBullets: [
        "Built the UI for Login service",
        "Worked on a new service called OnDemand.",
        "Designed and Developed frontend using ReactJS for the service.",
        "Integrated third-party APIs such as Google Maps into Web application"
      ]
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/emloyee.jpg"),
      projectName: "Employee Management System",
      projectDesc:
        "Developed the Employee Management System to streamline and automate various HR processes.",
      footerLink: [
        {
          name: "Visit Website",
          // Need to update this once website is up and running
          url: "https://github.com/PrasannaBH/employee-management-system"
        },
        {
          name: "See Code",
          url: "https://github.com/PrasannaBH/employee-management-system"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/travelandtourism.webp"),
      projectName: "Travel and Tourism website - Ryoko",
      projectDesc:
        "Developed Travel and Tourism website to get Tourist spots as well as hotels within 10km radius.",
      footerLink: [
        {
          name: "Visit Website",
          // Need to update this once website is up and running
          url: "https://msaat366.github.io/Ryoko/"
        },
        {
          name: "See Code",
          url: "https://github.com/PrasannaBH/Ryoko"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  // achievementsCards: [
  //   {
  //     title: "Associate Cloud Engineer",
  //     subtitle:
  //       "After having enough experience handson on GCP, I completed GCP - Associate Cloud Engineer Certification.",
  //     image: require("./assets/images/gcpLogo.png"),
  //     footerLink: [
  //       {
  //         name: "View Certificate",
  //         url: "https://www.credential.net/c799d945-5e89-47a3-845e-8b97575a8342"
  //       }
  //     ]
  //   },

  //   {
  //     title: "Python",
  //     subtitle:
  //       "Completed Python Learning Course and used the knowledge to apply to a Project.",
  //     image: require("./assets/images/python.png"),
  //     footerLink: [
  //       {
  //         name: "Certification",
  //         url: "https://drive.google.com/file/d/1_lDJPvdltRP5ksxiBxvnl7AzFlbp_qwJ/view?usp=sharing"
  //       },
  //       {
  //         name: "See Project",
  //         url: "https://github.com/ameygoes/PythonDSA"
  //       }
  //     ]
  //   },

  //   {
  //     title: "NPTEL: Introduction to Machine Learning",
  //     subtitle:
  //       "Completed my Introductory course to scratch the Surface of the Machine Learning. Learnt concepts and algorithms of ML.",
  //     image: require("./assets/images/NPTEL.jpg"),
  //     footerLink: [
  //       {
  //         name: "View Certificate",
  //         url: "https://drive.google.com/file/d/1vTMYjBPbHIUyscXs2RqCznob_syhrZtz/view?usp=sharing"
  //       }
  //     ]
  //   },
  //   {
  //     title: "Coursera: Machine learning",
  //     subtitle:
  //       "Completed Coursera Certification as a small step towards my dream as a Data Scientist.",
  //     image: require("./assets/images/ML.png"),
  //     footerLink: [
  //       {
  //         name: "View Certificate",
  //         url: "https://www.coursera.org/account/accomplishments/verify/5NA5TY6QLVHS"
  //       },
  //       {
  //         name: "View Assignments",
  //         url: "https://github.com/ameygoes/My-Machine-Learning-Courese"
  //       }
  //     ]
  //   },

  //   {
  //     title: "Deep Learning with Keras",
  //     subtitle:
  //       "Completed Certification from LinkedIn Learning Data Science Path for Deep Learning with Keras",
  //     image: require("./assets/images/ll.jpg"),
  //     footerLink: [
  //       {
  //         name: "Certification",
  //         url: "https://drive.google.com/file/d/1e-23ZtZAOWMFO19oXnra_IGG2cQjVxXA/view?usp=sharing"
  //       }
  //     ]
  //   },

  //   {
  //     title: "Deep Learning: Image Recognition",
  //     subtitle: "Started digging up more into Deep Learning: Image Recognition",
  //     image: require("./assets/images/ll.jpg"),
  //     footerLink: [
  //       {
  //         name: "Certification",
  //         url: "https://drive.google.com/file/d/1ZS1fnPy7wwlWghNoKHrR4LlSpqWhUHgE/view?usp=sharing"
  //       }
  //     ]
  //   },

  //   {
  //     title: "Deep Learning: Face Recognition",
  //     subtitle: "Successfully completed Deep Learning: Face Recogintion",
  //     image: require("./assets/images/ll.jpg"),
  //     footerLink: [
  //       {
  //         name: "Certification",
  //         url: "https://drive.google.com/file/d/1oydTfQAKX4j_lwkVk1fzo0jq-77F5Ehr/view?usp=sharing"
  //       }
  //     ]
  //   }
  // ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write about what I have learnt from life.",

  // blogs: [
  //   {
  //     url: "https://ameygoes.medium.com/the-millennial-dilemma-the-quarter-life-crisis-1f47dfb89ed3",
  //     title: "The Millennial Dilemma: The Quarter Life Crisis",
  //     description:
  //       "Not being clear on your purpose. Not knowing where your professional- and private life are heading. Not being in a safe and secure environment anymore.?"
  //   },
  //   {
  //     url: "https://ameygoes.medium.com/imposter-syndrome-the-thought-do-i-deserve-this-f0602f990211",
  //     title: "Imposter Syndrome - Do I Deserve this?",
  //     description:
  //       "The idea that you’ve only succeeded due to luck, and not because of your talent or qualifications."
  //   }
  // ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK CANDID ABOUT MYSELF, PEOPLES' LIFE AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/ameygoes/embed"],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Are you looking for a Full Stack Web Developer for your Organization? Please contact on below Email:",
  email_address: "bhilegaonkarprasanna12@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "NOTPrasanna", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
