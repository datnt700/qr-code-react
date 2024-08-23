import './App.css';

import logo from './assets/logo-qr-generator.svg';
import illustration from './assets/bg-illustration.svg';
import { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import { QRCodeContainer } from './components/QRCodeContainer';
import { SearchBar } from './components/SearchBar';
function App() {
  const [isActiveCode, setIsActiveCode] = useState(false);
  const [isActiveShareButton, setIsActiveShareButton] = useState(false);
  const [url, setUrl] = useState('');

  const handleQrCode = () => {
    setIsActiveCode((e) => !e);
    if (!url) {
      return;
    }
  };

  const handleShareButton = () => {
    setIsActiveShareButton((e) => !e);
  };

  const qrCodeRef = useRef(null);
  const downloadQRCode = () => {
    if (qrCodeRef.current) {
      htmlToImage
        .toPng(qrCodeRef.current)
        .then(function (dataUrl) {
          console.log('QR', dataUrl);
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'qr-code.png';
          link.click();
        })
        .catch(function (error) {
          console.error('Error generating QR code:', error);
        });
    } else {
      console.error('QR code reference is null.');
    }
  };

  return (
    <>
      <div className="container">
        <div className={`user-input ${isActiveCode ? 'disable' : ''}`}>
          <div className="images">
            <img className="logo" src={logo} alt="" />
            <img
              className="illustration"
              src={illustration}
              alt="illustration"
            />
          </div>
          <SearchBar
            url={url}
            setUrl={setUrl}
            handleQrCode={handleQrCode}
            isActiveCode={isActiveCode}
          />
          <QRCodeContainer
            url={url}
            qrCodeRef={qrCodeRef}
            isActiveCode={isActiveCode}
            isActiveShareButton={isActiveShareButton}
            downloadQRCode={downloadQRCode}
            handleShareButton={handleShareButton}
          />
        </div>
      </div>
    </>
  );
}

export default App;
