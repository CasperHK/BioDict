import React from 'react';
import { useRouter } from 'next/router';
import DashboardLayout from '../../components/DashboardLayout';
import OrganismsLayout from '../../components/OrganismsLayout';
import styles from './organism.module.css';

// Example data structure for organisms (should be replaced with real data or fetched from backend)
const organismsData = [
  { code: 'homo-sapiens', name: 'Homo sapiens', classification: 'Mammal', description: 'Modern human.' },
  { code: 'pan-troglodytes', name: 'Pan troglodytes', classification: 'Mammal', description: 'Chimpanzee.' },
  { code: 'gallus-gallus', name: 'Gallus gallus', classification: 'Bird', description: 'Chicken.' },
  { code: 'arabidopsis-thaliana', name: 'Arabidopsis thaliana', classification: 'Plant', description: 'Thale cress.' },
  { code: 'escherichia-coli', name: 'Escherichia coli', classification: 'Bacteria', description: 'Common gut bacterium.' },
  // ...more organisms
];

export default function OrganismDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // Find by code or index
  const organism = organismsData.find(
    (org, idx) => org.code === id || String(idx) === id
  );

  return (
    <DashboardLayout>
      <OrganismsLayout>
        {!organism ? (
          <div className={styles.notFound}>
            <h2>Organism Not Found</h2>
            <p>The organism you are looking for does not exist.</p>
          </div>
        ) : (
          <div className={styles.detailContainer}>
            <h1>{organism.name}</h1>
            <p><strong>Classification:</strong> {organism.classification}</p>
            <p>{organism.description}</p>
            {/* Add more organism details or 3D model here */}
          </div>
        )}
      </OrganismsLayout>
    </DashboardLayout>
  );
}
