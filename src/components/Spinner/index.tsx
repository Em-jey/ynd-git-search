import React from 'react';
import { Spinner as SpinnerRB, SpinnerProps } from 'react-bootstrap';

const Spinner: React.SFC<SpinnerProps> = (props) => {
  return (
    <div className="container-fluid h-100">
      <div className="col-12 h-100 d-flex justify-content-center align-items-center">
        <SpinnerRB {...props} />
      </div>
    </div>
  );
};

export default Spinner;
