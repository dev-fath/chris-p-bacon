import styles from './TwitCard.module.scss';
import Avatar from '@components/common/Avatar';
import dayjs from 'dayjs';
import IconBase from '@assets/icons/IconBase';
import { numberFormatter } from '@utils/numberFormatter';
import Image from 'next/image';

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
          <div className={styles.twitContentsArea}>
            <div className={styles.twitMetadataContainer}>
              <div className={styles.userMetadataWrapper}>
                <div className={styles.userMetadata}>
                  <span className={styles.userName}>name</span>
                  <span className={styles.userId}>@id</span>
                  <span className={styles.dot}>·</span>
                </div>
                <div>{twitDate}</div>
              </div>
              <div>
                <IconBase icon={'meatballs'} iconStyle={{ width: 16, height: 16, color: '#888' }} />
              </div>
            </div>
            <div className={styles.twitContents}>
              퍼슬덩 마지막으로 보고 온 김에 이노우에가 슬램덩크 인물들의 모티브로 삼았던 현실 NBA
              선수들을 매치업 해보는 타래 1. 강백호 - 데니스 로드맨(PF, 201cm) 이미 유명한...
              리바운드의 제왕, 코트 위의 악동, 볼에 대한 허슬플레이 끈적한 수비로 얻은 별명 “the
              Worm"까지 (한국식: 찰거머리)
            </div>
            <div className={styles.mediaContainer}>
              <Image
                className={styles.twitImage}
                src={'https://pbs.twimg.com/media/Fq0qx1kakAAryv8?format=jpg&name=900x900'}
                alt={'twit pic'}
                fill={true}
              />
            </div>
            <div className={styles.twitStatsContainer}>
              <div className={styles.statsWrapper}>
                <IconBase icon={'reply'} iconStyle={{ color: '#888', height: 16, width: 16 }} />
                <span>{numberFormatter.currency(123)}</span>
              </div>
              <div className={styles.statsWrapper}>
                <IconBase icon={'reTwit'} iconStyle={{ color: '#888', height: 16, width: 16 }} />
                <span>{numberFormatter.currency(12312)}</span>
              </div>
              <div className={styles.statsWrapper}>
                <IconBase icon={'like'} iconStyle={{ color: '#888', height: 16, width: 16 }} />
                <span>{numberFormatter.currency(1940)}</span>
              </div>
              <div className={styles.statsWrapper}>
                <IconBase icon={'share'} iconStyle={{ color: '#888', height: 16, width: 16 }} />
              </div>
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
          <div>
            <a href={'#'}>
              <div className={styles.threadLink}>show this thread</div>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default TwitCard;
