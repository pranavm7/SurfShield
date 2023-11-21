import React from 'react';
import logo from '@assets/img/logo.svg';
import '@pages/popup/Popup.css';
import useStorage from '@src/shared/hooks/useStorage';
import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import ReactSpeedometer from 'react-d3-speedometer';
import Overlay from '../content/ui/initializer';

// basic structure for feature set:
// {
//   trackerBlocking: true,
//   adBlocking: true,
//   secureProxy: true,
//   downloadProtection: true,
//   disableJS: true,
// }

// {
//   'Tracker Blocking': false,
//   'Ad Blocking': false,
//   'Secure Proxy': false,
//   'Download Protection': false,
//   'Disable JS': false,
// }
const Popup = () => {
  // Feature tracker
  const [features, setFeatures] = React.useState({
    'Tracker Blocking': true,
    'Ad Blocking': true,
    'Secure Proxy': false,
    'Download Protection': false,
    'Disable JS': false,
  });
  const handleFeatureClick = (feature: string) => {
    setFeatures(prevFeatures => ({
      ...prevFeatures,
      [feature]: !prevFeatures[feature],
    }));
  };
  // Toggles the speedometer
  const activeFeaturesCount = Object.values(features).filter(Boolean).length;
  // Overlay handling
  const [showOverlay, setShowOverlay] = React.useState(true);

  // Function to handle the click event on the overlay
  const handleOverlayClick = () => {
    setShowOverlay(false);
  };
  return (
    <div
      className="App  bg-custom-blue absolute inset-0 border-gray-700 flex flex-col flex-wrap h-screen w-full p-1"
      // style={{
      //   backgroundColor: theme === 'light' ? '#fff' : '#000',
      // }}
      // style={{ paddingBottom: '3vh' }}
    >
      {showOverlay && <Overlay onClick={handleOverlayClick} />}
      <div className="app bg-custom-blue flex flex-col gap-5 px-3 pb-6">
        <header className="pt-4 inline-flex items-center justify-center flex-row-reverse px-9">
          <img src={logo} className="w-10" alt="logo" />
          <a href="https://github.com/saxenaii/SurfShield" className="font-bold text-xl justify-end text-custom-white">
            SurfShield
          </a>
        </header>
        <div>
          <ReactSpeedometer
            width={250}
            height={150}
            //fluidWidth={true}
            needleHeightRatio={0.7}
            value={activeFeaturesCount * 200}
            customSegmentStops={[0, 250, 750, 1000]}
            segmentColors={['#fbfdf6', '#5d8fd8', '#3e6f91']}
            currentValueText="Security Score"
            customSegmentLabels={[
              {
                text: 'Good',
                // @ts-ignore
                position: 'OUTSIDE',
                color: '#fbfdf6',
              },
              {
                text: 'Great',
                // @ts-ignore
                position: 'OUTSIDE',
                color: '#fbfdf6',
              },
              {
                text: 'Awesome!',
                // @ts-ignore
                position: 'OUTSIDE',
                color: '#fbfdf6',
              },
            ]}
            ringWidth={47}
            needleTransitionDuration={1250}
            // @ts-ignore
            needleTransition="easeLinear"
            needleColor={'#6fc151'}
            textColor={'#fbfdf6'}
            forceRender={true}
          />
        </div>
        <div className="pb-2">
          {Object.keys(features).map(feature => (
            <div
              key={feature}
              className={`my-2 max-w-sm p-4 rounded-lg shadow  w-full flex flex-col gap-2 cursor-pointer font-bold text-sm ${
                features[feature] ? 'bg-custom-green text-white' : ' bg-custom-gray text-custom-blue '
              }`}
              onClick={() => handleFeatureClick(feature)}>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
