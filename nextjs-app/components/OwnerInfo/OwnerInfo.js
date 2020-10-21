import React from 'react';
import { string } from 'prop-types';

import { Image } from '../common';

export default function OwnerInfo({ avatarURL, ownerName }) {
  return (
    <div className="owner__info">
      <Image
        className="outdoorsy__image--circular"
        url={avatarURL}
        alt={ownerName}
        height="2rem"
        width="2rem"
      />
      <p>{ownerName}</p>
    </div>
  );
}

OwnerInfo.propTypes = {
  avatarURL: string.isRequired,
  ownerName: string.isRequired,
};
