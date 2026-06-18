import React, { useContext } from 'react'
import './theme1.css'
import ResumeContext from '../../Context/ResumeContext'

const Theme1 = ({ componentRef, themeData }) => {
  const { checkProj, checkWork, checkAward } = useContext(ResumeContext)
  const { name, profile, address, phone, email, skill, summary, linkedin, github, website } = themeData.personalData
  const { projectTitles, projectDesc } = themeData.projectData
  const { educationTitles, educationDesc } = themeData.educationData
  const { workTitles, workDesc } = themeData.workData
  const { awards } = themeData.awardData

  return (
    <div id="section-to-print" ref={componentRef}>
      <div className="t1-resume">

        {/* Header */}
        <div className="t1-header">
          <h1 className="t1-name">{name}</h1>
          <p className="t1-role">{profile}</p>
          <div className="t1-contact-row">
            {address && <span>📍 {address}</span>}
            {phone && <span>📞 {phone}</span>}
            {email && <span>✉️ {email}</span>}
            {linkedin && <span>🔗 {linkedin}</span>}
            {github && <span>💻 {github}</span>}
            {website && <span>🌐 {website}</span>}
          </div>
          {summary && <p className="t1-summary">{summary}</p>}
        </div>

        {/* Skills */}
        <div className="t1-section">
          <div className="t1-section-title">Technical Skills</div>
          <div className="t1-skills-wrap">
            {skill.split(',').map((s, i) => (
              <span key={i} className="t1-skill-chip">{s.trim()}</span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="t1-section">
          <div className="t1-section-title">Education</div>
          {Object.entries(educationTitles).map(([, title], i) => (
            <div key={i} className="t1-item">
              <p className="t1-item-title">{title}</p>
              <ul className="t1-item-list">
                {Object.entries(educationDesc)[i]?.[1].split(',').map((d, j) => (
                  <li key={j}>{d.trim()}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects */}
        {!checkProj && (
          <div className="t1-section">
            <div className="t1-section-title">Projects</div>
            {Object.entries(projectTitles).map(([, title], i) => (
              <div key={i} className="t1-item">
                <p className="t1-item-title">{title}</p>
                <ul className="t1-item-list">
                  {Object.entries(projectDesc)[i]?.[1].split(',').map((d, j) => (
                    <li key={j}>{d.trim()}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Work */}
        {!checkWork && (
          <div className="t1-section">
            <div className="t1-section-title">Work Experience</div>
            {Object.entries(workTitles).map(([, title], i) => (
              <div key={i} className="t1-item">
                <p className="t1-item-title">{title}</p>
                <ul className="t1-item-list">
                  {Object.entries(workDesc)[i]?.[1].split(',').map((d, j) => (
                    <li key={j}>{d.trim()}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Awards */}
        {!checkAward && (
          <div className="t1-section">
            <div className="t1-section-title">Awards & Achievements</div>
            <ul className="t1-item-list">
              {awards.split(',').map((a, i) => <li key={i}>{a.trim()}</li>)}
            </ul>
          </div>
        )}

      </div>
    </div>
  )
}

export default Theme1
