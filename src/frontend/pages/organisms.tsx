import React, { useState } from 'react';
import Link from 'next/link';
import DashboardLayout from '../layouts/DashboardLayout';
import OrganismsLayout from '../layouts/OrganismsLayout';
import styles from './organisms.module.css';

// Example data structure for organisms
const organismsData = [
  { code: 'homo-sapiens', name: 'Homo sapiens', classification: 'Mammal', description: 'Modern human.' },
  { code: 'pan-troglodytes', name: 'Pan troglodytes', classification: 'Mammal', description: 'Chimpanzee.' },
  { code: 'gallus-gallus', name: 'Gallus gallus', classification: 'Bird', description: 'Chicken.' },
  { code: 'arabidopsis-thaliana', name: 'Arabidopsis thaliana', classification: 'Plant', description: 'Thale cress.' },
  { code: 'escherichia-coli', name: 'Escherichia coli', classification: 'Bacteria', description: 'Common gut bacterium.' },
  // ...more organisms
];

export default function OrganismsPage() {
  const [search, setSearch] = useState('');
  const filtered = organismsData.filter(org =>
    org.name.toLowerCase().includes(search.toLowerCase()) ||
    org.classification.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <OrganismsLayout>
        <section className={styles.welcomeSection}>
          <h2>Welcome to the Organism Collection</h2>
          <p>
            Discover a wide variety of organisms classified by science. Use the search below to find information about any organism, including its classification and description.
          </p>
        </section>
        <div className={styles.container}>
          <h2 className={styles.title}>Organism Collection</h2>
          <input
            className={styles.search}
            type="text"
            placeholder="Search organisms by name or classification..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className={styles.list}>
            {filtered.length === 0 ? (
              <p>No organisms found.</p>
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
