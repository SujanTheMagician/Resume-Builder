import React, { useContext } from 'react'
import './theme2.css'
import ResumeContext from '../../Context/ResumeContext'

const Theme2 = ({ componentRef, themeData }) => {
  const { checkProj, checkWork, checkAward } = useContext(ResumeContext)
  const { name, profile, address, phone, email, skill, summary, profileImage, linkedin, github } = themeData.personalData
  const { projectTitles, projectDesc } = themeData.projectData
  const { educationTitles, educationDesc } = themeData.educationData
  const { workTitles, workDesc } = themeData.workData
  const { awards } = themeData.awardData

  return (
    <div id="section-to-print" ref={componentRef}>
      <div className="t2-resume">

        {/* LEFT SIDEBAR */}
        <div className="t2-sidebar">
          <div className="t2-sidebar-top">
            <img className="t2-avatar" src={profileImage} alt="Profile" />
            <h1 className="t2-name">{name}</h1>
            <p className="t2-role">{profile}</p>
          </div>

          <div className="t2-sidebar-section">
            <h3 className="t2-sidebar-heading">Contact</h3>
            {phone && <div className="t2-contact-item"><span className="t2-contact-label">Phone</span><span>{phone}</span></div>}
            {email && <div className="t2-contact-item"><span className="t2-contact-label">Email</span><span style={{wordBreak:'break-all'}}>{email}</span></div>}
            {address && <div className="t2-contact-item"><span className="t2-contact-label">Address</span><span>{address}</span></div>}
            {linkedin && <div className="t2-contact-item"><span className="t2-contact-label">LinkedIn</span><span style={{wordBreak:'break-all'}}>{linkedin}</span></div>}
            {github && <div className="t2-contact-item"><span className="t2-contact-label">GitHub</span><span style={{wordBreak:'break-all'}}>{github}</span></div>}
          </div>

          <div className="t2-sidebar-section">
            <h3 className="t2-sidebar-heading">Skills</h3>
            <div className="t2-skills-list">
              {skill.split(',').map((s, i) => (
                <span key={i} className="t2-skill-tag">{s.trim()}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT MAIN */}
        <div className="t2-main">
          {summary && (
            <div className="t2-section">
              <h2 className="t2-section-title">Summary</h2>
              <p className="t2-text">{summary}</p>
            </div>
          )}

          <div className="t2-section">
            <h2 className="t2-section-title">Education</h2>
            {Object.entries(educationTitles).map(([, title], i) => (
              <div key={i} className="t2-item">
                <p className="t2-item-title">{title}</p>
                <ul className="t2-item-list">
                  {Object.entries(educationDesc)[i]?.[1].split(',').map((d, j) => (
                    <li key={j}>{d.trim()}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {!checkProj && (
            <div className="t2-section">
              <h2 className="t2-section-title">Projects</h2>
              {Object.entries(projectTitles).map(([, title], i) => (
                <div key={i} className="t2-item">
                  <p className="t2-item-title">{title}</p>
                  <ul className="t2-item-list">
                    {Object.entries(projectDesc)[i]?.[1].split(',').map((d, j) => (
                      <li key={j}>{d.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {!checkWork && (
            <div className="t2-section">
              <h2 className="t2-section-title">Work Experience</h2>
              {Object.entries(workTitles).map(([, title], i) => (
                <div key={i} className="t2-item">
                  <p className="t2-item-title">{title}</p>
                  <ul className="t2-item-list">
                    {Object.entries(workDesc)[i]?.[1].split(',').map((d, j) => (
                      <li key={j}>{d.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {!checkAward && (
            <div className="t2-section">
              <h2 className="t2-section-title">Awards & Achievements</h2>
              <ul className="t2-item-list">
                {awards.split(',').map((a, i) => <li key={i}>{a.trim()}</li>)}
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Theme2
