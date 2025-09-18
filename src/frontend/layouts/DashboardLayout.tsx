import React, { ReactNode } from 'react';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import styles from './DashboardLayout.module.css';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => (
  <div className={styles.dashboardRoot}>
    <TopNavBar />
    <div className={styles.dashboardContent}>{children}</div>
    <Footer />
  </div>
);

export default DashboardLayout;
