import React, { useContext } from 'react'
import './theme4.css'
import ResumeContext from '../../Context/ResumeContext'

const Theme4 = ({ componentRef, themeData }) => {
  const { checkProj, checkWork, checkAward } = useContext(ResumeContext)
  const { name, profile, address, phone, email, skill, summary, linkedin, github, profileImage } = themeData.personalData
  const { projectTitles, projectDesc } = themeData.projectData
  const { educationTitles, educationDesc } = themeData.educationData
  const { workTitles, workDesc } = themeData.workData
  const { awards } = themeData.awardData

  return (
    <div id="section-to-print" ref={componentRef}>
      <div className="t4-resume">

        {/* TOP ACCENT HEADER */}
        <div className="t4-header">
          <div className="t4-header-left">
            <h1 className="t4-name">{name}</h1>
            <p className="t4-role">{profile}</p>
            {summary && <p className="t4-summary">{summary}</p>}
          </div>
          <div className="t4-header-right">
            <img className="t4-avatar" src={profileImage} alt="Profile" />
          </div>
        </div>

        {/* CONTACT BAR */}
        <div className="t4-contact-bar">
          {phone && <span>📞 {phone}</span>}
          {email && <span>✉️ {email}</span>}
          {address && <span>📍 {address}</span>}
          {linkedin && <span>🔗 {linkedin}</span>}
          {github && <span>💻 {github}</span>}
        </div>

        {/* BODY: two columns */}
        <div className="t4-body">

          {/* LEFT COLUMN */}
          <div className="t4-col t4-col-left">

            <div className="t4-section">
              <h2 className="t4-section-title">Skills</h2>
              <div className="t4-skills">
                {skill.split(',').map((s, i) => (
                  <span key={i} className="t4-skill">{s.trim()}</span>
                ))}
              </div>
            </div>

            <div className="t4-section">
              <h2 className="t4-section-title">Education</h2>
              {Object.entries(educationTitles).map(([, title], i) => (
                <div key={i} className="t4-item">
                  <p className="t4-item-title">{title}</p>
                  <ul className="t4-item-list">
                    {Object.entries(educationDesc)[i]?.[1].split(',').map((d, j) => (
                      <li key={j}>{d.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {!checkAward && (
              <div className="t4-section">
                <h2 className="t4-section-title">Awards</h2>
                <ul className="t4-item-list">
                  {awards.split(',').map((a, i) => <li key={i}>{a.trim()}</li>)}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="t4-col t4-col-right">

            {!checkWork && (
              <div className="t4-section">
                <h2 className="t4-section-title">Work Experience</h2>
                {Object.entries(workTitles).map(([, title], i) => (
                  <div key={i} className="t4-item">
                    <p className="t4-item-title">{title}</p>
                    <ul className="t4-item-list">
                      {Object.entries(workDesc)[i]?.[1].split(',').map((d, j) => (
                        <li key={j}>{d.trim()}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {!checkProj && (
              <div className="t4-section">
                <h2 className="t4-section-title">Projects</h2>
                {Object.entries(projectTitles).map(([, title], i) => (
                  <div key={i} className="t4-item">
                    <p className="t4-item-title">{title}</p>
                    <ul className="t4-item-list">
                      {Object.entries(projectDesc)[i]?.[1].split(',').map((d, j) => (
                        <li key={j}>{d.trim()}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  )
}

export default Theme4
