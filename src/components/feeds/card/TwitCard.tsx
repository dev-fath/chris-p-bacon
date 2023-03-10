import styles from './TwitCard.module.scss';
import Avatar from '@components/common/Avatar';
import dayjs from 'dayjs';

dayjs.locale('en');

const TwitCard = () => {
  const twitDate = dayjs().format('MMM D');

  return (
    <div>
      <div className={styles.twitDivider}></div>
      <article className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.threadArea}>
            <div className={'mainAvatar'}>
              <Avatar
                imageSrc={
                  'https://pbs.twimg.com/profile_images/1169070430583283712/oTJrXisj_x96.jpg'
                }
              />
            </div>
            <div className={styles.threadLineWrapper}>
              <div className={styles.threadLine} />
            </div>
          </div>
          <div className={'contentsArea'}>
            <div className={styles.twitMetadataContainer}>
              <span className={styles.userName}>name</span>
              <span className={styles.userId}>@id</span>
              <span className={styles.dot}>·</span>
              <div>{twitDate}</div>
              <div>meatballs</div>
            </div>
            <div>
              퍼슬덩 마지막으로 보고 온 김에 이노우에가 슬램덩크 인물들의 모티브로 삼았던 현실 NBA
              선수들을 매치업 해보는 타래 1. 강백호 - 데니스 로드맨(PF, 201cm) 이미 유명한...
              리바운드의 제왕, 코트 위의 악동, 볼에 대한 허슬플레이 끈적한 수비로 얻은 별명 “the
              Worm"까지 (한국식: 찰거머리)
            </div>
            <div>image or video</div>
            <div>
              <div>replies</div>
              <div>re twits</div>
              <div>likes</div>
              <div>share</div>
            </div>
          </div>
        </div>
        <div className={styles.threadContainer}>
          <div className={styles.threadArea}>
            <Avatar
              size={24}
              imageSrc={'https://pbs.twimg.com/profile_images/1169070430583283712/oTJrXisj_x96.jpg'}
            />
          </div>
          <div>show this thread</div>
        </div>
      </article>
    </div>
  );
};

export default TwitCard;
