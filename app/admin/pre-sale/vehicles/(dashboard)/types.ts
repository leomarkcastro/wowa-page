export type PhotoType = 'consignor' | 'marketing';
export type PhotoCategory = 'exterior' | 'interior' | 'engine' | 'damage' | 'documentation';

export interface VehicleCondition {
  exterior: string;
  interior: string;
  mechanical: string;
  overall: string;
  notes?: string;
}

export interface VehiclePhoto {
  id: string;
  url: string;
  caption: string;
  type: PhotoType;
  category?: PhotoCategory;
  isPrimary: boolean;
  dateUploaded: string;
  uploadedBy: string;
}

export interface Comment {
  id: string;
  text: string;
  user: string;
  timestamp: string;
  isPrivate: boolean;
  mentions?: string[];
  attachments?: {
    id: string;
    name: string;
    url: string;
    type: string;
  }[];
}

export interface HistoryEntry {
  id: string;
  action: string;
  field: string;
  oldValue: string;
  newValue: string;
  timestamp: string;
  user: string;
}

export interface Vehicle {
  id: string;
  lotId: string;
  refId: string;
  vin: string;
  year: number;
  make: string;
  model: string;
  color: string;
  estimateRange: {
    low: number;
    high: number;
  };
  hasReserve: boolean;
  reservePrice: number | null;
  consignor: string;
  company: string;
  specialist: string;
  dateCreated: string;
  status: string;
  approvedBy: string | null;
  auction: string | 'Not Listed';
  deleted?: boolean;
  condition: VehicleCondition;
  photos: VehiclePhoto[];
  processStatus: {
    title: boolean;
    payment: boolean;
    collection: boolean;
    transportation: boolean;
  };
  comments: Comment[];
}