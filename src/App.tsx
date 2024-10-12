import { useState, useEffect } from 'react';

import FullScreenMessage from 'components/shared/FullScreenMessage';
import styles from './App.module.scss';
import classNames from 'classnames/bind';
import Heading from 'components/sections/Heading';
import Video from 'components/sections/Video';
import { Wedding } from 'models/wedding';
import ImageGallery from 'components/sections/ImageGallery';

const cx = classNames.bind(styles);

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8888/wedding')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setWedding(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <FullScreenMessage type={'loading'} />;
  }

  if (error) {
    return <FullScreenMessage type={'error'} />;
  }

  if (wedding === null) {
    return null;
  }

  const { date, galleryImages } = wedding;
  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <ImageGallery images={galleryImages} />
      {JSON.stringify(wedding)}
    </div>
  );
}

export default App;
