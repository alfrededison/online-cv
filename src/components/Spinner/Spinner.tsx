import * as React from 'react';
import {usePromiseTracker} from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import './Spinner.scss';

export const Spinner = () => {
  const {promiseInProgress} = usePromiseTracker();

  return (
    <div className="spinner">
      <Loader
        visible={promiseInProgress}
        type="TailSpin"
        color="#429bf6"
        height={100}
        width={100}
      />
    </div>
  );
};
