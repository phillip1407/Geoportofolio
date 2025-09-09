import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PortfolioData } from '../types';
import { initialData } from '../data/initialData';

interface PortfolioContextType {
  data: PortfolioData;
  updateData: (newData: Partial<PortfolioData>) => void;
  isAdmin: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const ADMIN_CREDENTIALS = {
  username: 'Bareetdesign',
  password: 'jyy24jad'
};

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioData>(initialData);
  const [isAdmin, setIsAdmin] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
      try {
        setData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error loading portfolio data:', error);
      }
    }

    const savedAdminState = localStorage.getItem('isAdmin');
    if (savedAdminState === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const updateData = (newData: Partial<PortfolioData>) => {
    const updatedData = { ...data, ...newData };
    setData(updatedData);
    localStorage.setItem('portfolioData', JSON.stringify(updatedData));
  };

  const login = (username: string, password: string) => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  return (
    <PortfolioContext.Provider value={{ data, updateData, isAdmin, login, logout }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}