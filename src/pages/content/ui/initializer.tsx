// Overlay.js

import React from 'react';
import Resizer from 'react-image-file-resizer';
import logo from '@assets/img/logo.svg';

const Overlay = ({ onClick }) => {
  //   const [originalLogo, setOriginalLogo] = React.useState('../../icon-128.png');
  //   const [resizedLogo, setResizedLogo] = React.useState('');

  //   React.useEffect(() => {
  //     // Resize the logo when the component mounts
  //     resizeLogo();
  //   }, []); // Empty dependency array ensures it only runs once on mount

  //   const resizeLogo = () => {
  //     try {
  //       Resizer.imageFileResizer(
  //         originalLogo,
  //         150, // Set your desired width
  //         150, // Set your desired height
  //         'JPEG',
  //         100,
  //         0,
  //         uri => {
  //           console.log(uri);
  //           setResizedLogo(uri);
  //         },
  //         'base64',
  //         200,
  //         200,
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //};
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-custom-green bg-opacity-1 flex justify-center items-center z-50 transition-opacity duration-1000"
      onClick={onClick}>
      {/* <p className="text-white text-2xl text-center">Click anywhere to enter the ColorChanger page</p> */}
      <div>
        <h1 className="text-4xl text-center text-custom-white font-bold">SurfShield</h1>
        <div>
          <img src={logo} alt="SurfShield Logo" className="bg-auto w-auto p-4" />
          {/* {resizedLogo && (
            <div>
              <p>Resized Logo:</p>
              <img src={resizedLogo} alt="Resized Logo" style={{ width: '100px', height: '100px' }} />
            </div>
          )} */}
        </div>
        <p className="text-2xl text-center text-custom-gray font-bold">Get Started</p>
      </div>
    </div>
  );
};

export default Overlay;
