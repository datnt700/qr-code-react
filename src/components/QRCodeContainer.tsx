import QRCode from 'react-qr-code';
import { MutableRefObject } from 'react';
import { ShareButtons } from './ShareButtons';
import arrow from '../assets/arrow-down.svg';
import link from '../assets/link.svg';
import styles from './QRCodeContainer.module.css';

interface Props {
  url: string;
  qrCodeRef: MutableRefObject<any>;
  isActiveCode: boolean;
  isActiveShareButton: boolean;
  downloadQRCode: () => void;
  handleShareButton: () => void;
}

export const QRCodeContainer = ({
  url,
  qrCodeRef,
  isActiveCode,
  isActiveShareButton,
  downloadQRCode,
  handleShareButton,
}: Props) => {
  return (
    <div
      className={`${styles['qr-code-container']} ${isActiveCode ? styles.active : ''}`}
    >
      <div className={styles['qr-code']}>
        <QRCode
          value={url}
          size={150}
          style={{
            padding: '2rem',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
          }}
          ref={qrCodeRef}
        />
      </div>
      <div className={styles.buttons}>
        <div
          onClick={downloadQRCode}
          className={`btn ${styles.code} ${styles.download}`}
        >
          Download
          <img src={arrow} alt="arrow" />
        </div>
        <div
          className={`btn ${styles.code} ${styles.share}`}
          onClick={handleShareButton}
        >
          Share
          <img src={link} alt="arrow" />
        </div>
      </div>
      <ShareButtons isActiveShareButton={isActiveShareButton} />
    </div>
  );
};
