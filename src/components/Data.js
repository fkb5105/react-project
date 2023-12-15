import _digitWebsite from "../assets/digitWebsite.png"
import _VarApp from "../assets/VARlabsApp.png"
import _insuranceWebsite from "../assets/insuranceWebsite.png"


const img = {
  "digitWebsite": _digitWebsite,
  "insuranceWebsite": _insuranceWebsite,
  "VarLabsApp": _VarApp,
};

export const resumeData = {

  "education": {
    "University": ["The Pennsylvania State University"],
    "Graduation": ["May 2024"],
    "Major": ["Digital Media, Arts and Technology, Bachelor of Arts"],
    "Focus Area": ["Data Visualization and Assessment"],
    "Minors": ["Data Visualization", "Management Information Systems"],
    "Awards": ["PSU Honors Program Certificate | Dean’s List Fall 2020 – Spring 2023"],
    "GPA": ["3.55"]
  },
  "experience": [
    {
      "title": "Data Visualization Technician - Penn State IT Department",
      "date": "June 2023 - Present",
      "responsibilities": [
        "Identified business requirements and developed visualizations accordingly.",
        "Transformed raw data into meaningful and insightful analysis.",
        "Built data models with Power BI and created relationships between multiple data sources.",
        "Used Data Analysis Expressions to solve data analysis problems.",
        "Generated queries with SQL to extract and adjust specific data values and columns."
      ]
    },
    {
      "title": "Applications Specialist - VAR Labs",
      "date": "October 2022 – August 2023",
      "responsibilities": [
        "Programmed with React Native and TypeScript.",
        "Utilized RESTful APIs and integrated them into the app.",
        "Worked collaboratively in a team environment and communicated effectively.",
        "Experienced agile development methodologies and project management tools.",
        "Created databases and integrated them into the application's data flow."
      ]
    },
    {
      "title": "Website Developer - Penn State University",
      "date": "May 2022 – August 2022",
      "responsibilities": [
        "Led a team of 4 students to build the new Penn State's Digital Media program website.",
        "Designed an efficient and user-friendly UI.",
        "Ensured website compatibility across multiple platforms and devices through responsive design.",
        "Conducted user testing and analyzed website analytics to optimize user experience."
      ]
    }
  ],
  "projects": [
    {
      "title": "Erie Insurance Webpage Redesign – DIGIT 400, Digital Project Design",
      "date": "September 2023 - October 2023",
      "responsibilities": [
        "Designed an improved website structure for navigation and access to insurance terms from the dictionary page.",
        "Applied graphics and search engine optimization to improve the reading experience.",
        "Rewrote, reorganized, and grouped information on the page to optimize connecting related terms.",
        "Ensured website compatibility across multiple platforms and devices through responsive design.",
        "Conducted user testing and analyzed website analytics to optimize user experience."
      ]
    }
  ],
  "skills": {
    "Data Analysis": ["Power BI", "IBM SPSS statistics", "Stat Tools", "Neural Tools"],
    "Coding": ["HTML", "CSS", "XML", "SQL", "React Native", "JavaScript", "Python"],
    "Database Management": ["MySQL", "Microsoft SQL server", "Access"],
    "Languages": ["Spanish", "English"],
    "Office365": ["Excel", "Teams", "Word"],
    "Other Skills": ["GitHub", "Adobe Photoshop", "Adobe Premier", "Adobe XD", "Adobe Illustrator"]
  }
}

export const galleryData = {
  "projects": [
    {
      "title":"VAR Labs Application",
      "description":"During my time working for the VAR Labs at Penn State Behrend, I developed an App to celebrate the 75 years of the Behrend campus. The app include Augmented Reality features, slideshows of the Behrend family, and comparisons between the old and present campus.",
      "link":"https://github.com/fkb5105/Behrend-Immersive-App",
      "imageUrl": img["VarLabsApp"]
    },
    {
      "title":"DIGIT Website",
      "description":"As mentioned in my Resume, in the summer of 2022, with a team of other students I built the Digital Media, Arts & Technology program website.",
      "link":"https://digit-psb.github.io/DIGIT/",
      "imageUrl":img["digitWebsite"]
    },
    {
      "title":"Insurance Website Redesign ",
      "description":"On this project a classmate and I worked on redesigning the Erie insurance website by improving some of its accessibility features, and interactivity.",
      "link":"https://fkb5105.github.io/InsuranceProject-DIGIT400/",
      "imageUrl": img["insuranceWebsite"]
    }
  ]
}
