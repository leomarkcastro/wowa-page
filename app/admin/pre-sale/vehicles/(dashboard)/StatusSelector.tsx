import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { VEHICLE_STATUSES, VehicleStatus } from '@/lib/constants/vehicle';

interface StatusSelectorProps {
  selectedStatus: VehicleStatus;
  setSelectedStatus: (value: VehicleStatus) => void;
}

export const StatusSelector = ({
  selectedStatus,
  setSelectedStatus,
}: StatusSelectorProps) => {
  return (
    <div className='space-y-2'>
      <label className='text-sm font-medium text-muted-foreground'>
        Status
      </label>
      <Select value={selectedStatus} onValueChange={setSelectedStatus}>
        <SelectTrigger>
          <SelectValue placeholder='Select status' />
        </SelectTrigger>
        <SelectContent>
          {VEHICLE_STATUSES.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              {status.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
