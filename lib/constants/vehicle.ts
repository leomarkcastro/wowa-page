export const VEHICLE_STATUSES = [
    { value: 'all', label: 'All Statuses' },
    { value: 'pending', label: 'Pending' },
    { value: 'approved', label: 'Approved' },
    { value: 'declined', label: 'Declined' },
    { value: 'withdrawn', label: 'Withdrawn' },
    { value: 'cancelled', label: 'Cancelled' },
] as const;

export type VehicleStatus = typeof VEHICLE_STATUSES[number]['value'];
