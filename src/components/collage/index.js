import React from 'react';
import { CollageCont, CollageItem } from './styles';
import CollageImage1 from '../../images/collage/collage1.gif';
import CollageGif2 from '../../images/collage/collage2.gif';
import CollageImage3 from '../../images/collage/collage3.png';
import CollageGif4 from '../../images/collage/collage4.gif';
import CollageGif5 from '../../images/collage/collage5.gif';

const Collage = () => {

    const openNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
      };

    return (
        <CollageCont>
            <CollageItem onClick={() => openNewTab('https://senbix.com')} data-label="Senbix"><img src={CollageImage1} alt="Scheduler" /></CollageItem>
            <CollageItem onClick={() => openNewTab('https://bloodlink.com')} data-label="Bloodlink"><img src={CollageGif2} alt="Web Development" /></CollageItem>
            <CollageItem onClick={() => openNewTab('https://diamondsalon.com')} data-label="Diamond Salon"><img src={CollageImage3} alt="UI/UX Design" /></CollageItem>
            <CollageItem onClick={() => openNewTab('https://insightminer.com')} data-label="Insight Miner"><img src={CollageGif4} alt="Digital Art" /></CollageItem>
            <CollageItem onClick={() => openNewTab('https://avoin.com')} data-label="Avoin"><img src={CollageGif5} alt="Brand Identity" /></CollageItem>
        </CollageCont>
    );
};

export { Collage };
