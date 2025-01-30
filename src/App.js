import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Earn from './pages/Earn';
import Offers from './pages/Offers';
import Withdraw from './pages/Withdraw';
import Profile from './pages/Profile';

export default function App() {
  return (
      <Router>
            <Routes>
                    <Route path="/" element={<Earn />} />
                            <Route path="/earn" element={<Earn />} />
                                    <Route path="/offers" element={<Offers />} />
                                            <Route path="/withdraw" element={<Withdraw />} />
                                                    <Route path="/profile" element={<Profile />} />
                                                          </Routes>
                                                              </Router>
                                                                );
                                                                }