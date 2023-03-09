import styles from './TwitCard.module.scss';

const TwitCard = () => {
  return (
    <div>
      <div className={styles.twitDivider}></div>
      <article className={styles.container}>
        <div className={'cardContainer'}>
          <div className={'avatarThread'}></div>
          <div className={'contentsArea'}>
            <div>
              <div>username</div>
              <div>mention id</div>
              <div>.</div>
              <div>date</div>
              <div>meatballs</div>
            </div>
            <div>content</div>
            <div>image or video</div>
            <div>
              <div>replies</div>
              <div>re twits</div>
              <div>likes</div>
              <div>share</div>
            </div>
          </div>
          <div>show this thread</div>
        </div>
      </article>
    </div>
  );
};

export default TwitCard;
