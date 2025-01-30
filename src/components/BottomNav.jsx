import React from 'react';
import { Wallet, Assignment, Payment, Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function BottomNav() {
  return (
      <div className="bottom-nav">
            <Link to="/earn" className="nav-item active">
                    <Wallet /> Earn
                          </Link>
                                <Link to="/offers" className="nav-item">
                                        <Assignment /> Offers
                                              </Link>
                                                    <Link to="/withdraw" className="nav-item">
                                                            <Payment /> Withdraw
                                                                  </Link>
                                                                        <Link to="/profile" className="nav-item">
                                                                                <Person /> Profile
                                                                                      </Link>
                                                                                          </div>
                                                                                            );
                                                                                            }