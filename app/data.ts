export const PEOPLE = [
    { id: 1, name: 'Henry VI', fatherId: 2, motherId: 3, spouseId: 4, childrenIds: [5, 6], image: 'Henry VI.jpg' },
    { id: 2, name: 'Henry V', fatherId: null, motherId: null, spouseId: 3, childrenIds: [1], image: 'Henry V.png' },
    { id: 3, name: 'Catherine of Valois', fatherId: null, motherId: null, spouseId: 2, childrenIds: [1], image: 'Catherine of Valois.jpg' },
    { id: 4, name: 'Margaret of Anjou', fatherId: null, motherId: null, spouseId: 1, childrenIds: [5, 6], image: 'Margaret of Anjou.jpg' },
    { id: 5, name: 'Edward of Westminster', fatherId: 1, motherId: 4, spouseId: null, childrenIds: [], image: 'Edward of Westminster.jpg' },
    { id: 6, name: 'Margaret of York', fatherId: 1, motherId: 4, spouseId: null, childrenIds: [], image: 'Margaret of York.jpg' },
    { id: 7, name: 'Richard Plantagenet', fatherId: 8, motherId: 9, spouseId: 10, childrenIds: [11, 12, 13, 14], image: 'Richard Plantagenet.jpg' },
    { id: 8, name: 'Richard of Conisburgh', fatherId: null, motherId: null, spouseId: 9, childrenIds: [7], image: 'Richard of Conisburgh.jpg' },
    { id: 9, name: 'Anne de Mortimer', fatherId: null, motherId: null, spouseId: 8, childrenIds: [7], image: 'Anne de Mortimer.jpg' },
    { id: 10, name: 'Cecily Neville', fatherId: 16, motherId: 17, spouseId: 7, childrenIds: [11, 12, 13, 14, 18, 19], image: 'Cecily Neville.jpg' },
    { id: 11, name: 'Edward IV', fatherId: 7, motherId: 10, spouseId: 20, childrenIds: [21, 22, 23, 24, 25, 26, 27, 28], image: 'Edward IV.jpg' },
    { id: 12, name: 'George Plantagenet', fatherId: 7, motherId: 10, spouseId: null, childrenIds: [], image: 'George Plantagenet.jpg' },
    { id: 13, name: 'Richard III', fatherId: 7, motherId: 10, spouseId: null, childrenIds: [], image: 'Richard III.jpg' },
    { id: 14, name: 'Margaret of York', fatherId: 7, motherId: 10, spouseId: null, childrenIds: [] },   //REVISAR 2 MARGARET OF YORK
    { id: 15, name: 'Henry Tudor', fatherId: 31, motherId: 32, spouseId: 24, childrenIds: [29], image: 'Henry Tudor.jpg' },
    { id: 16, name: 'Ralph Neville', fatherId: 33, motherId: 34, spouseId: 17, childrenIds: [10, 35, 36, 37, 38, 39, 40], image: 'Ralph Neville.jpg' },
    { id: 17, name: 'Joan Beaufort', fatherId: 41, motherId: 42, spouseId: 16, childrenIds: [10], image: 'Joan Beaufort.jpg' },
    { id: 18, name: 'Edward V', fatherId: 11, motherId: 20, spouseId: null, childrenIds: [], image: 'Edward V.jpg' },
    { id: 19, name: 'Richard of Shrewsbury', fatherId: 7, motherId: 10, spouseId: null, childrenIds: [], image: 'Richard of Shrewsbury.jpg' },
    { id: 20, name: 'Elizabeth Woodville', fatherId: null, motherId: null, spouseId: 11, childrenIds: [18, 19], image: 'Elizabeth Woodville.jpg' },
    { id: 21, name: 'Elizabeth of York', fatherId: 11, motherId: 20, spouseId: 29, childrenIds: [30, 31, 32, 33, 34], image: 'Elizabeth of York.jpg' },
    { id: 22, name: 'Mary Tudor', fatherId: 11, motherId: 20, spouseId: 41, childrenIds: [], image: 'Mary Tudor.jpg' },
    { id: 23, name: 'Margaret Tudor', fatherId: 11, motherId: 20, spouseId: 42, childrenIds: [], image: 'Margaret Tudor.jpg' },
    { id: 24, name: 'Anne Neville', fatherId: 43, motherId: 44, spouseId: 15, childrenIds: [29], image: 'Anne Neville.jpg' },
    { id: 25, name: 'Elizabeth of York', fatherId: 11, motherId: 20, spouseId: 45, childrenIds: [] },   //REVISAR ELIZABETH OF YORK
    { id: 26, name: 'Cecily of York', fatherId: 11, motherId: 20, spouseId: 46, childrenIds: [], image: 'Cecily of York.jpg' },
    { id: 27, name: 'Edward of Middleham', fatherId: 13, motherId: 47, spouseId: null, childrenIds: [], image: 'Edward of Middleham.jpg' },
    { id: 28, name: 'Richard of York', fatherId: 11, motherId: 20, spouseId: null, childrenIds: [], image: 'Richard of York.jpg' },
    { id: 29, name: 'Henry VIII', fatherId: 15, motherId: 24, spouseId: 21, childrenIds: [53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63], image: 'Henry VIII.jpg' },
    { id: 30, name: 'Arthur Tudor', fatherId: 21, motherId: 29, spouseId: 64, childrenIds: [], image: 'Arthur Tudor.jpg' },
    { id: 31, name: 'Edmund Tudor', fatherId: 65, motherId: 66, spouseId: 32, childrenIds: [15], image: 'Edmund Tudor.jpg' },
    { id: 32, name: 'Margaret Beaufort', fatherId: 67, motherId: 68, spouseId: 31, childrenIds: [15], image: 'Margaret Beaufort.jpg' },
    { id: 33, name: 'Mary Tudor', fatherId: 21, motherId: 29, spouseId: 69, childrenIds: [] },  //REVISAR MARY TUDOR
    { id: 34, name: 'Catherine of Aragon', fatherId: null, motherId: null, spouseId: 21, childrenIds: [], image: 'Catherine of Aragon.jpg' },
    { id: 35, name: 'Richard Neville', fatherId: 16, motherId: 17, spouseId: 70, childrenIds: [] },  //REVISAR RICHARD NEVILLE
    { id: 36, name: 'William Neville', fatherId: 16, motherId: 17, spouseId: 37, childrenIds: [39] },  //BUSCAR BUENA IMAGEN
    { id: 37, name: 'Joan Beaufort', fatherId: 38, motherId: 19, spouseId: 36, childrenIds: [39] },  // REVISAR JOAN BEAUFORT
    { id: 38, name: 'John Beaufort', fatherId: 7, motherId: 8, spouseId: 19, childrenIds: [37], image: 'John Beaufort.jpg' },
    { id: 39, name: 'Richard Neville', fatherId: 36, motherId: 37, spouseId: 40, childrenIds: [] },  //REVISAR RICHARD NEVILLE
    { id: 40, name: 'Anne Beauchamp', fatherId: 41, motherId: 42, spouseId: 39, childrenIds: [], image: 'Anne Beauchamp.jpg' },   
    { id: 41, name: 'Richard Neville', fatherId: 44, motherId: 45, spouseId: 42, childrenIds: [40] }, //REVISAR RICHARD NEVILLE
    { id: 42, name: 'Anne Beauchamp', fatherId: 46, motherId: 47, spouseId: 41, childrenIds: [40] },  //REVISAR ANNE BEAUCHAMP
    { id: 43, name: 'Richard Neville', fatherId: 48, motherId: 49, spouseId: 44, childrenIds: [24] }, //REVISAR RICHARD NEVILLE
    { id: 44, name: 'Anne Beauchamp', fatherId: 50, motherId: 51, spouseId: 43, childrenIds: [24] },  //REVISAR ANNE BEAUCHAMP
    { id: 45, name: 'Elizabeth Wydville', fatherId: null, motherId: null, spouseId: 11, childrenIds: [21, 25, 26], image: 'Elizabeth Wydville.jpg' },
    { id: 46, name: 'John de la Pole', fatherId: 53, motherId: 54, spouseId: 42, childrenIds: [], image: 'John de la Pole.jpg' },  
    { id: 47, name: 'Elizabeth of York', fatherId: 55, motherId: 56, spouseId: 13, childrenIds: [27] }, //REVISAR ELIZABETH OF YORK
    { id: 48, name: 'Richard Neville', fatherId: 57, motherId: 58, spouseId: 49, childrenIds: [43] },  //REVISAR RICHARD NEVILLE
    { id: 49, name: 'Anne Beauchamp', fatherId: 59, motherId: 60, spouseId: 48, childrenIds: [43] },   //REVISAR ANNE BEAUCHAMP
    { id: 50, name: 'Richard Beauchamp', fatherId: 61, motherId: 62, spouseId: 51, childrenIds: [44], image: 'Richard Beauchamp.jpg' },
    { id: 51, name: 'Isabel le Despenser', fatherId: 63, motherId: 64, spouseId: 50, childrenIds: [44], image: 'Isabel le Despenser.jpg' },
    { id: 52, name: 'Catherine Howard', fatherId: 65, motherId: 66, spouseId: 29, childrenIds: [], image: 'Catherine Howard.jpg' },
    { id: 53, name: 'John de la Pole', fatherId: 67, motherId: 68, spouseId: 54, childrenIds: [46] },   //REVISAR JOHN DE LA POLE
    { id: 54, name: 'Elizabeth of York', fatherId: 11, motherId: 20, spouseId: 53, childrenIds: [46] }, //REVISAR ELIZABETH OF YORK
    { id: 55, name: 'Edward IV', fatherId: 11, motherId: 20, spouseId: 56, childrenIds: [47] },  //REVISAR EDWARD IV
    { id: 56, name: 'Elizabeth Woodville', fatherId: null, motherId: null, spouseId: 55, childrenIds: [47] },  //REVISAR ELIZABETH WOODVILLE
    { id: 57, name: 'Richard Neville', fatherId: null, motherId: null, spouseId: null, childrenIds: [48] },  //REVISAR RICHARD NEVILLE
    { id: 58, name: 'Alice Montacute', fatherId: null, motherId: null, spouseId: null, childrenIds: [48], image: 'Alice Montacute.webp' },
    { id: 59, name: 'Richard Beauchamp', fatherId: null, motherId: null, spouseId: 60, childrenIds: [49] },  //REVISAR RICHARD BEAUCHAMP
    { id: 60, name: 'Isabel le Despenser', fatherId: null, motherId: null, spouseId: 59, childrenIds: [49] },  //REVISAR ISABEL LE DESPENSER
    { id: 61, name: 'Richard Beauchamp', fatherId: null, motherId: null, spouseId: 62, childrenIds: [50] },  //REVISAR RICHARD BEAUCHAMP
    { id: 62, name: 'Isabel le Despenser', fatherId: null, motherId: null, spouseId: 61, childrenIds: [50] }, //REVISAR ISABEL LE DESPENSER
    { id: 63, name: 'Thomas Stanley', fatherId: null, motherId: null, spouseId: 64, childrenIds: [51], image: 'Thomas Stanley.jpg' },
    { id: 64, name: 'Margaret Beaufort', fatherId: null, motherId: null, spouseId: 63, childrenIds: [51] }, //REVISAR MARGARET BEAUFORT
    { id: 65, name: 'Thomas Howard', fatherId: null, motherId: null, spouseId: 66, childrenIds: [52], image: 'Thomas Howard.jpg' },
    { id: 66, name: 'Elizabeth Tilney', fatherId: null, motherId: null, spouseId: 65, childrenIds: [52], image: 'Elizabeth Tilney.jpg' },
    { id: 67, name: 'William de la Pole', fatherId: null, motherId: null, spouseId: 68, childrenIds: [53], image: 'William de la Pole.jpg' },
    { id: 68, name: 'Alice Chaucer', fatherId: null, motherId: null, spouseId: 67, childrenIds: [53], image: 'Alice Chaucer.jpg' },
    { id: 69, name: 'Henry VII', fatherId: 63, motherId: 64, spouseId: 70, childrenIds: [27] }, //REVISAR HENRY VENUS
    { id: 70, name: 'Elizabeth of York', fatherId: 55, motherId: 56, spouseId: 69, childrenIds: [27] } //REVISAR ELIZABETH OF YORK
];

export interface Person {
    id: number;
    name: string;
    fatherId: number | null;
    motherId: number | null;
    spouseId: number | null;
    childrenIds: number[];
    image?: string;
};
