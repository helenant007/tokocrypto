import React from 'react';

const DefaultFooter = props => {
  return (
    <footer className="text-muted" style={{ marginTop: '20px' }}>
      <div className="container">
        <div className="btn-group float-right">
          <button type="button" className="btn btn-sm btn-secondary">
            Indonesia
          </button>
          <button type="button" className="btn btn-sm btn-outline-secondary">
            English
          </button>
        </div>
        <p className="float-left">© 2009-2018, PT Tokopedia </p>
      </div>
    </footer>
  );
};

export default DefaultFooter;
