import ResumeContext from "./ResumeContext";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ResumeState = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforePrint: () => setLoading(true),
    onAfterPrint: () => setLoading(false),
  });

  const initialData = {
    personalData: {
      profileImage: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Your Name",
      summary: "Motivated professional with a passion for building impactful solutions. Experienced in delivering results in fast-paced environments.",
      profile: "Software Engineer",
      address: "City, Country",
      phone: "+91 00000 00000",
      email: "you@example.com",
      linkedin: "linkedin.com/in/yourprofile",
      github: "github.com/yourusername",
      website: "",
      skill: "JavaScript, React, Node.js, Python, Git",
    },
    projectData: {
      projectTitles: { pTitle1: "Project Title 1" },
      projectDesc: { pDescription1: "Brief description of the project and your contributions" },
    },
    educationData: {
      educationTitles: { eTitle1: "B.Tech Computer Science — Your University (2020–2024)" },
      educationDesc: { eDescription1: "CGPA: 8.5 / 10. Relevant coursework: DSA, OS, DBMS, Networks" },
    },
    workData: {
      workTitles: { wTitle1: "Software Intern — Company Name (Jun 2023 – Aug 2023)" },
      workDesc: { wDescription1: "Built RESTful APIs, improved performance by 30%, collaborated with cross-functional teams" },
    },
    awardData: {
      awards: "Best Project Award – College Fest 2023, Hackathon Runner-Up – TechFest 2022",
    },
  };

  const [themeData, setThemeData] = useState(initialData);
  const [checkProj, setCheckProj] = useState(false);
  const [checkWork, setCheckWork] = useState(false);
  const [checkAward, setCheckAward] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("Theme1");
  const [selectBtn, setSelectBtn] = useState(true);

  return (
    <ResumeContext.Provider value={{
      initialData, selectBtn, setSelectBtn,
      checkAward, setCheckAward,
      componentRef, handlePrint,
      currentTheme, setCurrentTheme,
      showComponent, setShowComponent,
      loading, setLoading,
      themeData, setThemeData,
      checkProj, checkWork,
      setCheckProj, setCheckWork,
    }}>
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeState;
