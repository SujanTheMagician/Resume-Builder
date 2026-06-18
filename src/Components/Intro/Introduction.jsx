import React, { useContext, useEffect, useState } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';
import './introduction.css';

export default function Introduction() {
  const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const showTheme = (id) => {
    setShowComponent(!showComponent);
    setCurrentTheme(id);
  };

  const stats = [
    { value: '4+', label: 'Templates' },
    { value: '100%', label: 'Free' },
    { value: '1-Click', label: 'Download' },
  ];

  return (
    <div className={`intro ${visible ? 'intro--visible' : ''}`}>
      {!selectBtn ? (
        <div className="intro__templates-section">
          <div className="intro__templates-header">
            <h2 className="intro__templates-title">Choose Your Template</h2>
            <p className="intro__templates-sub">Pick a design that fits your style and industry</p>
          </div>
          <div className="intro__templates-grid">
            {ThemeTemplateData.map((item, index) => (
              <div
                key={index}
                className="intro__template-card"
                style={{ animationDelay: `${index * 80}ms` }}
                onClick={() => showTheme(item.id)}
              >
                <div className="intro__template-preview">
                  <img src={item.imageSrc} alt={item.imageAlt} />
                  <div className="intro__template-overlay">
                    <button className="intro__template-btn">Use This</button>
                  </div>
                </div>
                <p className="intro__template-name">{item.imageAlt || `Theme ${index + 1}`}</p>
              </div>
            ))}
          </div>
          <button className="intro__back-btn" onClick={() => setSelectBtn(true)}>← Back</button>
        </div>
      ) : (
        <div className="intro__hero">
          <div className="intro__hero-left">
            <div className="intro__badge">✦ Free & Open Source</div>
            <h1 className="intro__headline">
              Build a Resume That<br />
              <span className="intro__headline-accent">Gets You Hired</span>
            </h1>
            <p className="intro__sub">
              Professional resume templates with live preview. Fill in your details, choose a theme, and download — no account needed.
            </p>

            <div className="intro__steps">
              {['Choose a template', 'Fill your details', 'Download PDF'].map((step, i) => (
                <div className="intro__step" key={i}>
                  <div className="intro__step-num">{i + 1}</div>
                  <span className="intro__step-text">{step}</span>
                </div>
              ))}
            </div>

            <div className="intro__cta-row">
              <button className="intro__cta-primary" onClick={() => setSelectBtn(false)}>
                <span>Build My Resume</span>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>

            <div className="intro__stats">
              {stats.map((s, i) => (
                <div key={i} className="intro__stat">
                  <span className="intro__stat-value">{s.value}</span>
                  <span className="intro__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="intro__hero-right">
            <div className="intro__mockup">
              <div className="intro__mockup-card intro__mockup-card--1">
                <div className="intro__mockup-line intro__mockup-line--name"></div>
                <div className="intro__mockup-line intro__mockup-line--role"></div>
                <div className="intro__mockup-divider"></div>
                <div className="intro__mockup-section">
                  <div className="intro__mockup-line intro__mockup-line--label"></div>
                  <div className="intro__mockup-line intro__mockup-line--text"></div>
                  <div className="intro__mockup-line intro__mockup-line--text-short"></div>
                </div>
                <div className="intro__mockup-section">
                  <div className="intro__mockup-line intro__mockup-line--label"></div>
                  <div className="intro__mockup-chip-row">
                    <div className="intro__mockup-chip"></div>
                    <div className="intro__mockup-chip"></div>
                    <div className="intro__mockup-chip"></div>
                  </div>
                </div>
              </div>
              <div className="intro__mockup-card intro__mockup-card--2">
                <div className="intro__mockup-avatar"></div>
                <div className="intro__mockup-line intro__mockup-line--name"></div>
                <div className="intro__mockup-line intro__mockup-line--role"></div>
              </div>
              <div className="intro__glow intro__glow--1"></div>
              <div className="intro__glow intro__glow--2"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
