import React, { useContext, useEffect, useState } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import { IoMdCloudUpload } from 'react-icons/io';
import './userCollectData.css';

const Section = ({ title, toggle, checked, onToggle, children }) => (
  <div className="form-section">
    <div className="form-section__header">
      <h3 className="form-section__title">{title}</h3>
      {toggle && (
        <label className="form-toggle">
          <input type="checkbox" checked={!checked} onChange={onToggle} />
          <span className="form-toggle__track"></span>
        </label>
      )}
    </div>
    <div className="form-section__body">{children}</div>
  </div>
);

const Field = ({ label, children }) => (
  <div className="form-field">
    {label && <label className="form-field__label">{label}</label>}
    {children}
  </div>
);

const Input = (props) => <input className="form-input" {...props} />;
const Textarea = (props) => <textarea className="form-textarea" {...props} />;

const UserDataCollect = () => {
  const { themeData, checkAward, setCheckAward, setThemeData, checkProj, checkWork, setCheckProj, setCheckWork } = useContext(ResumeContext);

  const [projectCount, setProjectCount] = useState(1);
  const [educationCount, setEducationCount] = useState(1);
  const [workCount, setWorkCount] = useState(1);

  const [personalData, setPersonalData] = useState({
    profileImage: 'https://www.w3schools.com/howto/img_avatar.png',
    name: '', summary: '', profile: '', address: '',
    phone: '', email: '', linkedin: '', github: '', website: '', skill: '',
  });

  const [projectItems, setProjectItems] = useState([{ title: '', desc: '' }]);
  const [educationItems, setEducationItems] = useState([{ title: '', desc: '' }]);
  const [workItems, setWorkItems] = useState([{ title: '', desc: '' }]);
  const [awardData, setAwardData] = useState({ awards: '' });

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    if (name === 'profileImage') {
      const url = URL.createObjectURL(e.target.files[0]);
      setPersonalData(p => ({ ...p, profileImage: url }));
    } else {
      setPersonalData(p => ({ ...p, [name]: value }));
    }
  };

  const updateProjectItem = (index, field, value) => {
    const updated = [...projectItems];
    updated[index] = { ...updated[index], [field]: value };
    setProjectItems(updated);
  };

  const updateEducationItem = (index, field, value) => {
    const updated = [...educationItems];
    updated[index] = { ...updated[index], [field]: value };
    setEducationItems(updated);
  };

  const updateWorkItem = (index, field, value) => {
    const updated = [...workItems];
    updated[index] = { ...updated[index], [field]: value };
    setWorkItems(updated);
  };

  const addProject = () => { setProjectItems(p => [...p, { title: '', desc: '' }]); setProjectCount(c => c + 1); };
  const addEducation = () => { setEducationItems(p => [...p, { title: '', desc: '' }]); setEducationCount(c => c + 1); };
  const addWork = () => { setWorkItems(p => [...p, { title: '', desc: '' }]); setWorkCount(c => c + 1); };

  const removeProject = (i) => setProjectItems(p => p.filter((_, idx) => idx !== i));
  const removeEducation = (i) => setEducationItems(p => p.filter((_, idx) => idx !== i));
  const removeWork = (i) => setWorkItems(p => p.filter((_, idx) => idx !== i));

  useEffect(() => {
    const projectData = {
      projectTitles: Object.fromEntries(projectItems.map((p, i) => [`pTitle${i + 1}`, p.title || `Project ${i + 1}`])),
      projectDesc: Object.fromEntries(projectItems.map((p, i) => [`pDescription${i + 1}`, p.desc || ''])),
    };
    const educationData = {
      educationTitles: Object.fromEntries(educationItems.map((e, i) => [`eTitle${i + 1}`, e.title || `Education ${i + 1}`])),
      educationDesc: Object.fromEntries(educationItems.map((e, i) => [`eDescription${i + 1}`, e.desc || ''])),
    };
    const workData = {
      workTitles: Object.fromEntries(workItems.map((w, i) => [`wTitle${i + 1}`, w.title || `Experience ${i + 1}`])),
      workDesc: Object.fromEntries(workItems.map((w, i) => [`wDescription${i + 1}`, w.desc || ''])),
    };
    setThemeData({ ...themeData, personalData, projectData, educationData, workData, awardData });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personalData, projectItems, educationItems, workItems, awardData]);

  return (
    <div className="form-container">
      <div className="form-container__inner">
        <div className="form-header">
          <h2 className="form-header__title">Resume Details</h2>
          <p className="form-header__sub">Fill in your information — the preview updates live</p>
        </div>

        {/* Personal */}
        <Section title="Personal Info">
          <div className="photo-upload">
            <label className="photo-upload__label" htmlFor="input-file">
              <IoMdCloudUpload size={20} />
              <span>Upload Photo</span>
            </label>
            <input accept="image/*" name="profileImage" onChange={handleChangePersonal} id="input-file" type="file" hidden />
            {personalData.profileImage && (
              <img className="photo-upload__preview" src={personalData.profileImage} alt="Preview" />
            )}
          </div>
          <div className="form-grid-2">
            <Field label="Full Name"><Input name="name" value={personalData.name} onChange={handleChangePersonal} placeholder="John Doe" /></Field>
            <Field label="Job Title / Profile"><Input name="profile" value={personalData.profile} onChange={handleChangePersonal} placeholder="Software Engineer" /></Field>
          </div>
          <Field label="Professional Summary">
            <Textarea name="summary" value={personalData.summary} onChange={handleChangePersonal} rows={3} placeholder="A brief summary of your skills and goals..." />
          </Field>
          <div className="form-grid-2">
            <Field label="Email"><Input name="email" type="email" value={personalData.email} onChange={handleChangePersonal} placeholder="you@email.com" /></Field>
            <Field label="Phone"><Input name="phone" type="tel" value={personalData.phone} onChange={handleChangePersonal} placeholder="+91 9999999999" /></Field>
          </div>
          <div className="form-grid-2">
            <Field label="Address / Location"><Input name="address" value={personalData.address} onChange={handleChangePersonal} placeholder="City, Country" /></Field>
            <Field label="LinkedIn"><Input name="linkedin" value={personalData.linkedin} onChange={handleChangePersonal} placeholder="linkedin.com/in/you" /></Field>
          </div>
          <div className="form-grid-2">
            <Field label="GitHub"><Input name="github" value={personalData.github} onChange={handleChangePersonal} placeholder="github.com/you" /></Field>
            <Field label="Portfolio / Website"><Input name="website" value={personalData.website} onChange={handleChangePersonal} placeholder="yoursite.com" /></Field>
          </div>
        </Section>

        {/* Skills */}
        <Section title="Technical Skills">
          <Field label="Skills (comma-separated)">
            <Input name="skill" value={personalData.skill} onChange={handleChangePersonal} placeholder="React, Node.js, Python, SQL, Git" />
          </Field>
        </Section>

        {/* Education */}
        <Section title="Education">
          {educationItems.map((item, i) => (
            <div className="repeatable-item" key={i}>
              <div className="repeatable-item__header">
                <span>Education {i + 1}</span>
                {educationItems.length > 1 && (
                  <button className="remove-btn" onClick={() => removeEducation(i)}>✕</button>
                )}
              </div>
              <Field label="Degree, Institution & Year">
                <Input value={item.title} onChange={e => updateEducationItem(i, 'title', e.target.value)} placeholder="B.Tech CS — XYZ University (2020–2024)" />
              </Field>
              <Field label="Details">
                <Textarea value={item.desc} onChange={e => updateEducationItem(i, 'desc', e.target.value)} rows={2} placeholder="CGPA, courses, achievements (comma-separated)" />
              </Field>
            </div>
          ))}
          <button className="add-btn" onClick={addEducation}>+ Add Education</button>
        </Section>

        {/* Projects */}
        <Section title="Projects" toggle onToggle={() => setCheckProj(!checkProj)} checked={checkProj}>
          {!checkProj && projectItems.map((item, i) => (
            <div className="repeatable-item" key={i}>
              <div className="repeatable-item__header">
                <span>Project {i + 1}</span>
                {projectItems.length > 1 && (
                  <button className="remove-btn" onClick={() => removeProject(i)}>✕</button>
                )}
              </div>
              <Field label="Project Title">
                <Input value={item.title} onChange={e => updateProjectItem(i, 'title', e.target.value)} placeholder="Awesome Project Name" />
              </Field>
              <Field label="Description">
                <Textarea value={item.desc} onChange={e => updateProjectItem(i, 'desc', e.target.value)} rows={2} placeholder="What it does, your role, tech used (comma-separated)" />
              </Field>
            </div>
          ))}
          {!checkProj && <button className="add-btn" onClick={addProject}>+ Add Project</button>}
        </Section>

        {/* Work */}
        <Section title="Work Experience" toggle onToggle={() => setCheckWork(!checkWork)} checked={checkWork}>
          {!checkWork && workItems.map((item, i) => (
            <div className="repeatable-item" key={i}>
              <div className="repeatable-item__header">
                <span>Experience {i + 1}</span>
                {workItems.length > 1 && (
                  <button className="remove-btn" onClick={() => removeWork(i)}>✕</button>
                )}
              </div>
              <Field label="Role, Company & Duration">
                <Input value={item.title} onChange={e => updateWorkItem(i, 'title', e.target.value)} placeholder="Software Intern — Company (Jun–Aug 2023)" />
              </Field>
              <Field label="Responsibilities">
                <Textarea value={item.desc} onChange={e => updateWorkItem(i, 'desc', e.target.value)} rows={2} placeholder="Key achievements and responsibilities (comma-separated)" />
              </Field>
            </div>
          ))}
          {!checkWork && <button className="add-btn" onClick={addWork}>+ Add Experience</button>}
        </Section>

        {/* Awards */}
        <Section title="Awards & Achievements" toggle onToggle={() => setCheckAward(!checkAward)} checked={checkAward}>
          {!checkAward && (
            <Field label="Awards (comma-separated)">
              <Textarea
                name="awards"
                value={awardData.awards}
                onChange={e => setAwardData({ awards: e.target.value })}
                rows={3}
                placeholder="Best Project Award 2023, Hackathon Winner..."
              />
            </Field>
          )}
        </Section>
      </div>
    </div>
  );
};

export default UserDataCollect;
