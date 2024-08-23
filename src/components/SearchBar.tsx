import styles from './SearchBar.module.css';

interface Props {
  url: string;
  setUrl: (value: string) => void;
  handleQrCode: () => void;
  isActiveCode: boolean;
}

export const SearchBar = ({
  url,
  setUrl,
  handleQrCode,
  isActiveCode,
}: Props) => {
  return (
    <div
      className={`${styles['search-bar']} ${isActiveCode ? styles.disable : ''}`}
    >
      <input
        type="text"
        className={styles.text}
        name="text"
        placeholder="Enter an URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleQrCode} className={`btn ${styles.input}`}>
        QR code
      </button>
    </div>
  );
};
