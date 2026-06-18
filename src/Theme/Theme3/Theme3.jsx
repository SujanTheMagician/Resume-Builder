import React, { useContext } from 'react'
import './theme3.css'
import ResumeContext from '../../Context/ResumeContext'

const Theme3 = ({ componentRef, themeData }) => {
  const { checkProj, checkWork, checkAward } = useContext(ResumeContext)
  const { name, profile, address, phone, email, skill, summary, linkedin, github } = themeData.personalData
  const { projectTitles, projectDesc } = themeData.projectData
  const { educationTitles, educationDesc } = themeData.educationData
  const { workTitles, workDesc } = themeData.workData
  const { awards } = themeData.awardData

  const Row = ({ label, children }) => (
    <div className="t3-row">
      <div className="t3-row-label">{label}</div>
      <div className="t3-row-content">{children}</div>
    </div>
  )

  return (
    <div id="section-to-print" ref={componentRef}>
      <div className="t3-resume">

        {/* Header */}
        <div className="t3-header">
          <div className="t3-header-left">
            <h1 className="t3-name">{name}</h1>
            <p className="t3-role">{profile}</p>
          </div>
          <div className="t3-header-right">
            {phone && <span>{phone}</span>}
            {email && <span style={{wordBreak:'break-all'}}>{email}</span>}
            {address && <span>{address}</span>}
            {linkedin && <span style={{wordBreak:'break-all'}}>{linkedin}</span>}
            {github && <span style={{wordBreak:'break-all'}}>{github}</span>}
          </div>
        </div>
        <div className="t3-divider"></div>

        {/* Summary */}
        {summary && (
          <Row label="Summary">
            <p className="t3-text">{summary}</p>
          </Row>
        )}
        <div className="t3-divider"></div>

        {/* Education */}
        <Row label="Education">
          {Object.entries(educationTitles).map(([, title], i) => (
            <div key={i} className="t3-item">
              <p className="t3-item-title">{title}</p>
              <div className="t3-item-details">
                {Object.entries(educationDesc)[i]?.[1].split(',').map((d, j) => (
                  <p key={j}>{d.trim()}</p>
                ))}
              </div>
            </div>
          ))}
        </Row>

        {/* Work */}
        {!checkWork && <>
          <div className="t3-divider"></div>
          <Row label="Experience">
            {Object.entries(workTitles).map(([, title], i) => (
              <div key={i} className="t3-item">
                <p className="t3-item-title">{title}</p>
                <div className="t3-item-details">
                  {Object.entries(workDesc)[i]?.[1].split(',').map((d, j) => (
                    <p key={j}>{d.trim()}</p>
                  ))}
                </div>
              </div>
            ))}
          </Row>
        </>}

        {/* Projects */}
        {!checkProj && <>
          <div className="t3-divider"></div>
          <Row label="Projects">
            {Object.entries(projectTitles).map(([, title], i) => (
              <div key={i} className="t3-item">
                <p className="t3-item-title">{title}</p>
                <ul className="t3-item-list">
                  {Object.entries(projectDesc)[i]?.[1].split(',').map((d, j) => (
                    <li key={j}>{d.trim()}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Row>
        </>}

        <div className="t3-divider"></div>

        {/* Skills */}
        <Row label="Skills">
          <div className="t3-skills-grid">
            {skill.split(',').map((s, i) => (
              <div key={i} className="t3-skill-item">
                <span className="t3-dot"></span>
                <span>{s.trim()}</span>
              </div>
            ))}
          </div>
        </Row>

        {/* Awards */}
        {!checkAward && <>
          <div className="t3-divider"></div>
          <Row label="Achievements">
            <div className="t3-skills-grid">
              {awards.split(',').map((a, i) => (
                <div key={i} className="t3-skill-item">
                  <span className="t3-dot"></span>
                  <span>{a.trim()}</span>
                </div>
              ))}
            </div>
          </Row>
        </>}

      </div>
    </div>
  )
}

export default Theme3
