import React from 'react';
import logo from '@assets/img/logo.svg';
import '@pages/popup/Popup.css';
import useStorage from '@src/shared/hooks/useStorage';
import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';

const Popup = () => {
  const theme = useStorage(exampleThemeStorage);

  return (
    <div
      className="App bg-custom-gray absolute inset-0 border-gray-700 justify-center flex flex-col flex-wrap h-full w-full p-1 content-evenly"
      // style={{
      //   backgroundColor: theme === 'light' ? '#fff' : '#000',
      // }}
    >
      <div className="app bg-custom-gray flex flex-col">
        <header>
          <a href="https://github.com/saxenaii/SurfShield" className="font-bold text-xl justify-end text-custom-green">
            SurfShield
          </a>
        </header>
        <div>
          <label for="steps-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Range steps
          </label>
          <input
            id="steps-range"
            type="range"
            min="0"
            max="5"
            value="2.5"
            step="1"
            className="min-w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>
        </div>
        <div className="flex flex-row max-w-lg">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
