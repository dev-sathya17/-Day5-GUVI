// Task 1 -> Create your own resume data in JSON format

let resume = {
  name: "Sathyanarayanan. V",
  mobile: "9943081321",
  address: "Puducherry",
  education: [
    "B.Tech in EEE at Sri Manakula Vinayagar Engineering College with a gpa of 9.16.",
    "HSE at Achariya Bala Siksha Mandir with a passing percentage of 76.2.",
    "SSE at Achariya Siksha Mandir with a gpa of 10.",
  ],
  experience: [
    "Project Trainee at Zoho Corporation, Chennai for 8 months from August 2022 to March 2023",
  ],
  skills: [
    "C",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
    "ReactJS",
    "BootStrapCSS",
    "Git",
    "PhotoShop",
    "Django",
    "Flask",
    "React-Native",
  ],
  internships: [
    "Virtual Internship in Embedded Systems at Emertxe Insitute",
    "Summer Intern at Zoho Corporation, Chennai",
  ],
  academicProject: "Automatic Mother board cleaner using Raspberry Pi",
  areasOfInterest: ["Web development", "Money and Finance"],
  personalTraits: [
    "Leadership",
    "Adaptive",
    "Collaborative",
    "Multitasking",
    "Goal-oriented",
    "Optimistic",
  ],
  certifications: [
    "AI Chatbot without programming by IBM",
    "Python basics for Data Science by IBM",
    "Analog Circuits by NPTEL",
    "Microprocessors and Microcontrollers by NPTEL",
  ],
  languages: ["English", "Hindi", "Tamil"],
  projects: [
    "Supermart using Django, HTML, CSS, JavaScript and BootstrapCSS, SQLite",
    "Taskflopro using django_rest_framework, ReactJS, CSS and MySQL",
    "Recharge Console, a mobile app developed using React-Native, MySQL and Flask",
  ],
};

// Task 2 -> Iterating through the JSON object using for, for in, for of and forEach loops

// for
for (let keyIndex = 0; keyIndex < Object.keys(resume).length; keyIndex++) {
  console.log(
    "key:",
    Object.keys(resume)[keyIndex],
    "value:",
    resume[Object.keys(resume)[keyIndex]]
  );
}

// for in
for (let key in resume) {
  console.log("key:", key, "value:", resume[key]);
}

// for of
for (let key of Object.keys(resume)) {
  console.log("key:", key, "value:", resume[key]);
}

// forEach
Object.keys(resume).forEach((key) => {
  console.log("key:", key, "value:", resume[key]);
});
