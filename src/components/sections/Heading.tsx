import styles from './Heading.module.scss';
import classNames from 'classnames/bind';
import Section from 'components/shared/Section';
import { parseISO, format, getDay } from 'date-fns';

const cx = classNames.bind(styles);

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export default function Heading({ date }: { date: string }) {
  const weddingDate = parseISO(date);
  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weddingDate, 'MM.dd.yy')}</div>
      <div className={cx('txt-day')}>{DAYS[getDay(weddingDate)]}</div>
    </Section>
  );
}
