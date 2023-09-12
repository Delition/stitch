import styles from "./previewBanner.module.scss";

const PreviewBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className={styles.icon}
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
              fill="#ffffff"
            />
          </svg>
        </div>

        <p className={styles.message}>
          You are in preview mode -
          <a className={styles.exit_link} href={`/api/exit-preview`}>
            Turn off to safely browse the website again
          </a>
        </p>
      </div>
    </div>
  );
};

export default PreviewBanner;
