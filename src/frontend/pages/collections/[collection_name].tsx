import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DashboardLayout from '../../components/DashboardLayout';
import OrganismsLayout from '../../components/OrganismsLayout';
import styles from '../organisms.module.css';

const organismsData = [
  { code: 'homo-sapiens', name: 'Homo sapiens', classification: 'Mammal', description: 'Modern human.' },
  { code: 'pan-troglodytes', name: 'Pan troglodytes', classification: 'Mammal', description: 'Chimpanzee.' },
  { code: 'gallus-gallus', name: 'Gallus gallus', classification: 'Bird', description: 'Chicken.' },
  { code: 'arabidopsis-thaliana', name: 'Arabidopsis thaliana', classification: 'Plant', description: 'Thale cress.' },
  { code: 'escherichia-coli', name: 'Escherichia coli', classification: 'Bacteria', description: 'Common gut bacterium.' },
  // ...more organisms
];

const collectionTitles: Record<string, string> = {
  mammals: 'Mammals',
  birds: 'Birds',
  plants: 'Plants',
  bacteria: 'Bacteria',
};

export default function CollectionPage() {
  const router = useRouter();
  const { collection_name } = router.query;
  const collectionKey = (collection_name || '').toString().toLowerCase();
  const title = collectionTitles[collectionKey] || 'Collection';

  const filtered = organismsData.filter(org =>
    org.classification.toLowerCase() === title.toLowerCase()
  );

  return (
    <DashboardLayout>
      <OrganismsLayout>
        <section className={styles.welcomeSection}>
          <h2>{title} Collection</h2>
          <p>
            Explore all organisms classified as {title.toLowerCase()}.
          </p>
        </section>
        <div className={styles.container}>
          <h2 className={styles.title}>{title} Collection</h2>
          <div className={styles.list}>
            {filtered.length === 0 ? (
              <p>No organisms found in this collection.</p>
            ) : (
              filtered.map((org, idx) => (
                <Link key={org.code} href={`/organism/${org.code}`} className={styles.card}>
                  <h3>{org.name}</h3>
                  <p><strong>Classification:</strong> {org.classification}</p>
                  <p>{org.description}</p>
                </Link>
              ))
            )}
          </div>
        </div>
      </OrganismsLayout>
    </DashboardLayout>
  );
}
