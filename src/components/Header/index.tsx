import React, { useState, useEffect } from 'react';

import { ReactComponent as NetflixLogo } from '../../assets/images/netflix-official.svg';
import { Container, AvatarIcon } from './styles';

const Header: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const scrollListener = (): void => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return (): void => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <Container hasScrolled={hasScrolled}>
      <div>
        <NetflixLogo />
      </div>
      <div>
        <AvatarIcon
          src="https://api.adorable.io/avatars/285/uiclone-netflix.png"
          alt="Avatar"
        />
      </div>
    </Container>
  );
};

export default Header;
