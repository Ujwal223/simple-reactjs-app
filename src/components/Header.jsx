import React from 'react';
import { History, MonetizationOn } from '@mui/icons-material';

export default function Header({ coins, history }) {
  return (
      <div className="header">
            <h1 className="app-name">RewardApp</h1>
                  <div className="coin-section">
                          <MonetizationOn className="coin-icon" />
                                  <span className="coin-count">{coins}</span>
                                          <button className="history-button">
                                                    <History /> History
                                                            </button>
                                                                  </div>
                                                                      </div>
                                                                        );
                                                                        }