import styles from './ImageViewer.module.scss';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiper.css';

const cx = classNames.bind(styles);

export default function ImageViewer({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images: string[];
  open: boolean;
  selectedIdx: number;
  onClose: () => void;
}) {
  if (open === false) {
    return null;
  }
  return (
    <div className={cx('dimmed')}>
      <ClosButton className={cx('icon-close')} onClose={onClose} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIdx}
        onSlideChange={() => console.log('slide change')}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`Image ${idx}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={cx('close-btn')}>&times;</div>
    </div>
  );
}

function ClosButton({
  onClose,
  className,
}: {
  onClose: () => void;
  className: string;
}) {
  return (
    <div className={className}>
      <i className={'fi fi-rs-circle-xmark'} onClick={onClose}></i>
    </div>
  );
}
