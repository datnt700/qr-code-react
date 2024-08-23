import { FaFacebook } from 'react-icons/fa';
import { SlSocialTwitter } from 'react-icons/sl';
import { ImPinterest2 } from 'react-icons/im';
import { CiLinkedin } from 'react-icons/ci';
import { IoLogoReddit } from 'react-icons/io';
import { FaWhatsappSquare } from 'react-icons/fa';
import styles from './ShareButton.module.css';
interface Props {
  isActiveShareButton: boolean;
}

export const ShareButtons = ({ isActiveShareButton }: Props) => {
  return (
    <div
      className={`${styles['share-buttons']} ${isActiveShareButton ? styles.active : ''}`}
    >
      <button className={`${styles['share-button']} ${styles.facebook}`}>
        <FaFacebook />
      </button>
      <button className={`${styles['share-button']} ${styles.twitter}`}>
        <SlSocialTwitter />
      </button>
      <button className={`${styles['share-button']} ${styles.linkedin}`}>
        <CiLinkedin />
      </button>
      <button className={`${styles['share-button']} ${styles.pinterest}`}>
        <ImPinterest2 />
      </button>
      <button className={`${styles['share-button']} ${styles.reddit}`}>
        <IoLogoReddit />
      </button>
      <button className={`${styles['share-button']} ${styles.whatsapp}`}>
        <FaWhatsappSquare />
      </button>
    </div>
  );
};
