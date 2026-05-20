export type Material = {
  name: string;
  cn: number;          // C:N ratio (parts carbon per 1 part nitrogen)
  category: 'green' | 'brown' | 'balanced';
  density: number;     // approximate lbs per gallon, loose
  moisture: 'wet' | 'moist' | 'dry';
  note?: string;
};

export const MATERIALS: Material[] = [
  // Greens (high N, low C:N)
  { name: 'Chicken manure (fresh)', cn: 7, category: 'green', density: 25, moisture: 'wet', note: 'Very hot — use in small amounts' },
  { name: 'Vegetable / kitchen scraps', cn: 15, category: 'green', density: 20, moisture: 'wet' },
  { name: 'Alfalfa (fresh or meal)', cn: 12, category: 'green', density: 5, moisture: 'moist' },
  { name: 'Coffee grounds', cn: 20, category: 'green', density: 8, moisture: 'wet' },
  { name: 'Fresh grass clippings', cn: 19, category: 'green', density: 24, moisture: 'wet' },
  { name: 'Cow manure (fresh)', cn: 20, category: 'green', density: 14, moisture: 'wet' },
  { name: 'Horse manure (fresh)', cn: 25, category: 'green', density: 14, moisture: 'moist' },
  { name: 'Fresh seaweed', cn: 19, category: 'green', density: 60, moisture: 'wet', note: 'Rinse salt first' },
  { name: 'Fish scraps', cn: 5, category: 'green', density: 30, moisture: 'wet', note: 'Powerful N; bury inside the pile' },
  { name: 'Garden trimmings (fresh)', cn: 25, category: 'green', density: 12, moisture: 'moist' },
  { name: 'Comfrey (fresh)', cn: 10, category: 'green', density: 10, moisture: 'wet' },

  // Balanced
  { name: 'Aged manure (any)', cn: 25, category: 'balanced', density: 14, moisture: 'moist' },
  { name: 'Finished compost (starter)', cn: 20, category: 'balanced', density: 18, moisture: 'moist', note: 'Inoculant — add 5–10%' },

  // Browns (high C, high C:N)
  { name: 'Dry leaves', cn: 60, category: 'brown', density: 1.5, moisture: 'dry' },
  { name: 'Straw (wheat / oat)', cn: 80, category: 'brown', density: 3, moisture: 'dry' },
  { name: 'Hay (old / weedy)', cn: 25, category: 'green', density: 4, moisture: 'dry' },
  { name: 'Shredded cardboard', cn: 350, category: 'brown', density: 1, moisture: 'dry' },
  { name: 'Shredded newspaper', cn: 175, category: 'brown', density: 0.5, moisture: 'dry' },
  { name: 'Wood chips (small)', cn: 400, category: 'brown', density: 4, moisture: 'dry', note: 'Use sparingly — slow to break down' },
  { name: 'Sawdust (untreated)', cn: 500, category: 'brown', density: 2, moisture: 'dry', note: 'Use sparingly; can mat' },
  { name: 'Pine needles', cn: 80, category: 'brown', density: 2, moisture: 'dry' },
  { name: 'Corn stalks (chopped)', cn: 60, category: 'brown', density: 2, moisture: 'dry' },
];

// Helper: a target pile of ~250 gallons of mixed material weighs roughly 800–1200 lbs.
// We assume the user enters weight (lbs).
export const TARGET_CN_LOW = 25;
export const TARGET_CN_HIGH = 35;
export const TARGET_CN_IDEAL = 30;
export const TARGET_VOLUME_GAL = 250;
