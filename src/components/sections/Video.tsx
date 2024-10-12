import Section from 'components/shared/Section';
import styles from './Video.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Video() {
  return (
    <Section className={cx('container')}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        poster='/assets/poster.jpg'
      >
        <source src='/assets/main.mp4' type='video/mp4'></source>
      </video>
    </Section>
  );
}
