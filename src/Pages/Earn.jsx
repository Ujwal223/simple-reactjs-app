import React from 'react';
import Header from '../components/Header';
import ButtonGrid from '../components/ButtonGrid';
import BottomNav from '../components/BottomNav';

export default function Earn() {
  const [coins, setCoins] = React.useState(1000); // Example coin balance
    const [history] = React.useState([
        { source: 'Games', amount: 50 },
            { source: 'Ads', amount: 20 }
              ]);

                return (
                    <div className="page-container">
                          <Header coins={coins} history={history} />
                                <ButtonGrid />
                                      <BottomNav />
                                          </div>
                                            );
                                            }