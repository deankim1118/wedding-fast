import Section from 'components/shared/Section';
import styles from './ImageGallery.module.scss';
import classNames from 'classnames/bind';
import ImageViewer from 'components/ImageViewer';
import { useState } from 'react';

const cx = classNames.bind(styles);

export default function ImageGallery({ images }: { images: string[] }) {
  const [selectedIdx, setSelectedIndex] = useState(-1);

  const open = selectedIdx > -1;

  const handleSelectedImage = (idx: number) => {
    setSelectedIndex(idx);
  };

  const handleClose = () => {
    setSelectedIndex(-1);
  };

  return (
    <>
      <Section title='Image Gallery'>
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li
              key={idx}
              className={cx('wrap-image')}
              onClick={() => {
                handleSelectedImage(idx);
              }}
            >
              <img src={src} alt={`Image ${idx + 1}`} />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  );
}
