import React from 'react';

export default function PreLoader(props) {
  return (
    <>
      {!props.loading ? (
        ''
      ) : (
        <div className="loader-overlay">
          <div className="loader-cover">
            <div className="loader">
              <div className="overlay">
                <img src="images/loader-mask.png" alt="Mask" />
              </div>
            </div>
            <div className="loader-txt">Loading...</div>
          </div>
        </div>
      )}
    </>
  );
}
