

export const PEOPLE = [
  { id: 1, name: 'Henry VI', fatherId: 2, motherId: 3, spouseId: 4, childrenIds: [5, 6] },
  { id: 2, name: 'Henry V', fatherId: null, motherId: null, spouseId: 3, childrenIds: [1] },
  { id: 3, name: 'Catherine of Valois', fatherId: null, motherId: null, spouseId: 2, childrenIds: [1] },
  { id: 4, name: 'Margaret of Anjou', fatherId: null, motherId: null, spouseId: 1, childrenIds: [5, 6] },
  { id: 5, name: 'Edward of Westminster', fatherId: 1, motherId: 4, spouseId: null, childrenIds: [] },
  { id: 6, name: 'Margaret of York', fatherId: 1, motherId: 4, spouseId: null, childrenIds: [] },
  // más personas y relaciones aquí
];

export interface Person {
    id: number;
    name: string;
    fatherId: number | null;
    motherId: number | null;
    spouseId: number | null;
    childrenIds: number[];
  };
