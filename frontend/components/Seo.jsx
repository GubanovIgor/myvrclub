import React from 'react';
import Head from 'next/head';

const Seo = (props) => {
  if (props.game) {
    return (
      <div>
        <Head>
          <title>{props.game.name} | Лучшие VR игры на MyVrClub.ru</title>
          <meta name='description' content={props.game.short_description}/>
        </Head>
      </div>
    );
  } else if (props.club) {
    return (
      <div>
        <Head>
          <title>{props.club.name} | Лучшие VR клубы Москвы на MyVrClub.ru</title>
          <meta name='description' content={props.club.short_description}/>
        </Head>
      </div>
    );
  };

  return (
    <div>
    </div>
  );
};

export default Seo;
