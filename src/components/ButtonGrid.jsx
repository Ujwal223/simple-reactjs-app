import React from 'react';
import { SportsEsports, VideoLibrary, AdsClick, EmojiEvents, Group, MoreHoriz } from '@mui/icons-material';

const buttons = [
  { icon: <SportsEsports />, text: 'Games' },
    { icon: <VideoLibrary />, text: 'Video' },
      { icon: <AdsClick />, text: 'Ads' },
        { icon: <EmojiEvents />, text: 'Daily Challenges' },
          { icon: <Group />, text: 'Referral' },
            { icon: <MoreHoriz />, text: 'Extras' }
            ];

            export default function ButtonGrid() {
              return (
                  <div className="button-grid">
                        {buttons.map((btn, index) => (
                                <button key={index} className="main-button">
                                          {btn.icon}
                                                    <span>{btn.text}</span>
                                                            </button>
                                                                  ))}
                                                                      </div>
                                                                        );
                                                                        }