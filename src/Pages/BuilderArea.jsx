import React, { useContext } from 'react';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import ResumeContext from '../Context/ResumeContext';
import Footer from '../Components/Footer/Footer';
import PropagateLoader from "react-spinners/PropagateLoader";
import './BuilderArea.css';

const BuilderArea = (props) => {
  const { showComponent, setShowComponent, loading, handlePrint } = useContext(ResumeContext);

  return (
    <>
      {loading && (
        <div className="builder__loading">
          <PropagateLoader color="#6c63ff" size={14} />
        </div>
      )}
      <div className="builder__layout">
        <div className="builder__sidebar">
          <UserDataCollect />
        </div>
        <div className="builder__preview-wrapper">
          <div className="builder__preview-header">
            <p className="builder__preview-label">Live Preview</p>
            <div className="builder__preview-actions">
              <button className="builder__btn builder__btn--ghost" onClick={() => setShowComponent(!showComponent)}>
                ← Change Template
              </button>
              <button className="builder__btn builder__btn--primary" onClick={handlePrint}>
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download PDF
              </button>
            </div>
          </div>
          <div className="builder__preview-canvas">
            {props.theme}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BuilderArea;
