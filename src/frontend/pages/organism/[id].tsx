import React from 'react';
import { useRouter } from 'next/router';
import DashboardLayout from '../../layouts/DashboardLayout';
import OrganismsLayout from '../../layouts/OrganismsLayout';
import { Card, CardBody, CardHeader } from '@heroui/react';
import styles from './organism.module.css';

// Example data structure for organisms (should be replaced with real data or fetched from backend)
const organismsData = [
  { code: 'homo-sapiens', name: 'Homo sapiens', classification: 'Mammal', description: 'Modern human.',
    scientificName: 'Homo sapiens',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Mammalia',
    order: 'Primates',
    family: 'Hominidae',
    genus: 'Homo',
    habitat: 'Various',
    distribution: 'Worldwide',
    modelUrl: '/models/homo-sapiens.glb',
  },
  { code: 'pan-troglodytes', name: 'Pan troglodytes', classification: 'Mammal', description: 'Chimpanzee.',
    scientificName: 'Pan troglodytes',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Mammalia',
    order: 'Primates',
    family: 'Hominidae',
    genus: 'Pan',
    habitat: 'Tropical forests',
    distribution: 'Central Africa',
    modelUrl: '/models/pan-troglodytes.glb',
  },
  { code: 'gallus-gallus', name: 'Gallus gallus', classification: 'Bird', description: 'Chicken.',
    scientificName: 'Gallus gallus',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Aves',
    order: 'Galliformes',
    family: 'Phasianidae',
    genus: 'Gallus',
    habitat: 'Domesticated',
    distribution: 'Worldwide',
    modelUrl: '/models/gallus-gallus.glb',
  },
  { code: 'arabidopsis-thaliana', name: 'Arabidopsis thaliana', classification: 'Plant', description: 'Thale cress.',
    scientificName: 'Arabidopsis thaliana',
    kingdom: 'Plantae',
    phylum: 'Tracheophyta',
    class: 'Magnoliopsida',
    order: 'Brassicales',
    family: 'Brassicaceae',
    genus: 'Arabidopsis',
    habitat: 'Fields, roadsides',
    distribution: 'Eurasia, Africa',
    modelUrl: '/models/arabidopsis-thaliana.glb',
  },
  { code: 'escherichia-coli', name: 'Escherichia coli', classification: 'Bacteria', description: 'Common gut bacterium.',
    scientificName: 'Escherichia coli',
    kingdom: 'Bacteria',
    phylum: 'Proteobacteria',
    class: 'Gammaproteobacteria',
    order: 'Enterobacterales',
    family: 'Enterobacteriaceae',
    genus: 'Escherichia',
    habitat: 'Intestines of warm-blooded organisms',
    distribution: 'Worldwide',
    modelUrl: '/models/escherichia-coli.glb',
  },
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
            <Card>
              <CardHeader>
                <h2 style={{ margin: 0 }}>{organism.name}</h2>
              </CardHeader>
              <CardBody>
                  <div style={{ padding: '1rem 0' }}>
                    <dl style={{ marginBottom: '2rem' }}>
                      <div><dt><b>Scientific Name</b></dt><dd>{organism.scientificName}</dd></div>
                      <div><dt><b>Classification</b></dt><dd>{organism.classification}</dd></div>
                      <div><dt><b>Kingdom</b></dt><dd>{organism.kingdom}</dd></div>
                      <div><dt><b>Phylum</b></dt><dd>{organism.phylum}</dd></div>
                      <div><dt><b>Class</b></dt><dd>{organism.class}</dd></div>
                      <div><dt><b>Order</b></dt><dd>{organism.order}</dd></div>
                      <div><dt><b>Family</b></dt><dd>{organism.family}</dd></div>
                      <div><dt><b>Genus</b></dt><dd>{organism.genus}</dd></div>
                      <div><dt><b>Habitat</b></dt><dd>{organism.habitat}</dd></div>
                      <div><dt><b>Distribution</b></dt><dd>{organism.distribution}</dd></div>
                      <div><dt><b>Description</b></dt><dd>{organism.description}</dd></div>
                    </dl>
                    <div className={styles.modelSection}>
                      <h2>3D Model</h2>
                      <model-viewer src={organism.modelUrl} alt={organism.name + ' 3D model'} auto-rotate camera-controls style={{ width: '100%', height: '400px', background: '#f5f5f5' }} />
                      <p style={{ fontSize: '0.95rem', color: '#888' }}>Interactive 3D model (GLB/GLTF format)</p>
                    </div>
                  </div>
              </CardBody>
            </Card>
          </div>
        )}
      </OrganismsLayout>
    </DashboardLayout>
  );
}
