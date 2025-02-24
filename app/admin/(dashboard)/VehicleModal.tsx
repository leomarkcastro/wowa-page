import { useState } from 'react';
import {
  X,
  Camera,
  CheckCircle2,
  XCircle,
  History,
  MessageCircle,
  Paperclip,
  Send,
  Lock,
  Globe,
} from 'lucide-react';
import { Vehicle, PhotoType, Comment } from './types';

interface VehicleModalProps {
  vehicle: Vehicle;
  onClose: () => void;
}

type TabType =
  | 'info'
  | 'photos'
  | 'financial'
  | 'status'
  | 'history'
  | 'comments';

export function VehicleModal({ vehicle, onClose }: VehicleModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('info');
  const [newComment, setNewComment] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const formatCurrency = (amount: number | null) => {
    if (amount === null) return '-';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Math.random().toString(36).substr(2, 9),
      text: newComment,
      user: 'John Lauer', // Current user
      timestamp: new Date().toISOString(),
      isPrivate,
      mentions: Array.from(newComment.matchAll(/@(\w+)/g)).map(
        (match) => match[1],
      ),
    };

    // In a real application, this would be handled through a proper state management system
    vehicle.comments.unshift(comment);
    setNewComment('');
    setIsPrivate(false);
  };

  const renderPhotoSection = (type: PhotoType) => {
    const photos = vehicle.photos?.filter((photo) => photo.type === type) || [];

    if (photos.length === 0) {
      return (
        <div className='text-sm text-gray-500'>No {type} photos available</div>
      );
    }

    return (
      <div className='grid grid-cols-2 gap-4'>
        {photos.map((photo) => (
          <div key={photo.id} className='group relative'>
            <img
              src={photo.url}
              alt={photo.caption}
              className='h-48 w-full rounded-lg object-cover'
            />
            <div className='absolute inset-0 rounded-lg bg-black bg-opacity-0 transition-opacity duration-200 group-hover:bg-opacity-40' />
            <div className='absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
              <p className='text-sm font-medium'>{photo.caption}</p>
              <p className='mt-1 text-xs'>Uploaded by {photo.uploadedBy}</p>
              <p className='text-xs'>{formatDate(photo.dateUploaded)}</p>
            </div>
            {photo.isPrimary && (
              <div className='absolute right-2 top-2 rounded-full bg-primary px-2 py-1 text-xs text-white'>
                Primary
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const tabs: { id: TabType; label: string }[] = [
    { id: 'info', label: 'Vehicle Information' },
    { id: 'photos', label: 'Photos' },
    { id: 'financial', label: 'Financial Information' },
    { id: 'status', label: 'Status & Process' },
    { id: 'history', label: 'Edit History' },
    { id: 'comments', label: 'Comments' },
  ];

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg bg-white shadow-xl'>
        <div className='sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4'>
          <h2 className='text-xl font-semibold text-gray-900'>
            {vehicle.year} {vehicle.make} {vehicle.model} - Lot #
            {vehicle.lotId.padStart(3, '0')}
          </h2>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-gray-500'
          >
            <X className='h-6 w-6' />
          </button>
        </div>

        <div className='border-b border-gray-200'>
          <nav className='-mb-px flex px-6'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`mr-8 border-b-2 py-4 text-sm font-medium ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className='flex-1 overflow-y-auto px-6 py-4'>
          {activeTab === 'info' && (
            <div className='space-y-8'>
              <div>
                <h3 className='mb-4 text-lg font-medium text-gray-900'>
                  Basic Information
                </h3>
                <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-500'>
                      VIN
                    </label>
                    <p className='mt-1 text-sm text-gray-900'>{vehicle.vin}</p>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-500'>
                      Color
                    </label>
                    <p className='mt-1 text-sm text-gray-900'>
                      {vehicle.color}
                    </p>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-500'>
                      Auction
                    </label>
                    <p className='mt-1 text-sm text-gray-900'>
                      {vehicle.auction}
                    </p>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-500'>
                      Date Created
                    </label>
                    <p className='mt-1 text-sm text-gray-900'>
                      {formatDate(vehicle.dateCreated)}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='mb-4 text-lg font-medium text-gray-900'>
                  Condition
                </h3>
                <div className='grid grid-cols-2 gap-8'>
                  <div className='space-y-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-500'>
                        Exterior
                      </label>
                      <p className='mt-1 text-sm text-gray-900'>
                        {vehicle.condition.exterior}
                      </p>
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-500'>
                        Interior
                      </label>
                      <p className='mt-1 text-sm text-gray-900'>
                        {vehicle.condition.interior}
                      </p>
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-500'>
                        Mechanical
                      </label>
                      <p className='mt-1 text-sm text-gray-900'>
                        {vehicle.condition.mechanical}
                      </p>
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-500'>
                        Overall
                      </label>
                      <p className='mt-1 text-sm text-gray-900'>
                        {vehicle.condition.overall}
                      </p>
                    </div>
                  </div>
                </div>
                {vehicle.condition.notes && (
                  <div className='mt-4'>
                    <label className='block text-sm font-medium text-gray-500'>
                      Additional Notes
                    </label>
                    <p className='mt-1 text-sm text-gray-900'>
                      {vehicle.condition.notes}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'photos' && (
            <div className='space-y-8'>
              <div>
                <h3 className='mb-4 flex items-center text-lg font-medium text-gray-900'>
                  <Camera className='mr-2 h-5 w-5' />
                  Marketing Photos
                </h3>
                {renderPhotoSection('marketing')}
              </div>

              <div>
                <h3 className='mb-4 flex items-center text-lg font-medium text-gray-900'>
                  <Camera className='mr-2 h-5 w-5' />
                  Consignor Photos
                </h3>
                {renderPhotoSection('consignor')}
              </div>
            </div>
          )}

          {activeTab === 'financial' && (
            <div className='space-y-8'>
              <div>
                <h3 className='mb-4 text-lg font-medium text-gray-900'>
                  Financial Details
                </h3>
                <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-500'>
                      Low Estimate
                    </label>
                    <p className='mt-1 text-sm text-gray-900'>
                      {formatCurrency(vehicle.estimateRange.low)}
                    </p>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-500'>
                      High Estimate
                    </label>
                    <p className='mt-1 text-sm text-gray-900'>
                      {formatCurrency(vehicle.estimateRange.high)}
                    </p>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-500'>
                      Reserve
                    </label>
                    <p className='mt-1 text-sm text-gray-900'>
                      {vehicle.hasReserve
                        ? formatCurrency(vehicle.reservePrice)
                        : 'No Reserve'}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='mb-4 text-lg font-medium text-gray-900'>
                  Contacts
                </h3>
                <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-500'>
                      Consignor
                    </label>
                    <p className='mt-1 text-sm text-gray-900'>
                      {vehicle.consignor}
                    </p>
                  </div>
                  {vehicle.company && (
                    <div>
                      <label className='block text-sm font-medium text-gray-500'>
                        Company
                      </label>
                      <p className='mt-1 text-sm text-gray-900'>
                        {vehicle.company}
                      </p>
                    </div>
                  )}
                  <div>
                    <label className='block text-sm font-medium text-gray-500'>
                      Specialist
                    </label>
                    <p className='mt-1 text-sm text-gray-900'>
                      {vehicle.specialist}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'status' && (
            <div className='space-y-8'>
              <div>
                <h3 className='mb-4 text-lg font-medium text-gray-900'>
                  Status Information
                </h3>
                <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-500'>
                      Status
                    </label>
                    <p className='mt-1'>
                      {vehicle.status === 'Approved' && (
                        <span className='inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800'>
                          <CheckCircle2 className='mr-1 h-4 w-4' /> Approved
                        </span>
                      )}
                      {vehicle.status === 'Pending' && (
                        <span className='inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800'>
                          <History className='mr-1 h-4 w-4' /> Pending
                        </span>
                      )}
                      {vehicle.status === 'Declined' && (
                        <span className='inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800'>
                          <XCircle className='mr-1 h-4 w-4' /> Declined
                        </span>
                      )}
                    </p>
                  </div>
                  {vehicle.status === 'Approved' && vehicle.approvedBy && (
                    <div>
                      <label className='block text-sm font-medium text-gray-500'>
                        Approved By
                      </label>
                      <p className='mt-1 text-sm text-gray-900'>
                        {vehicle.approvedBy}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className='mb-4 text-lg font-medium text-gray-900'>
                  Process Status
                </h3>
                <div className='space-y-3'>
                  <div className='flex items-center'>
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${
                        vehicle.processStatus.title
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <CheckCircle2 className='h-4 w-4' />
                    </div>
                    <span className='ml-2 text-sm text-gray-900'>
                      Title Received
                    </span>
                  </div>
                  <div className='flex items-center'>
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${
                        vehicle.processStatus.payment
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <CheckCircle2 className='h-4 w-4' />
                    </div>
                    <span className='ml-2 text-sm text-gray-900'>
                      Payment Processed
                    </span>
                  </div>
                  <div className='flex items-center'>
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${
                        vehicle.processStatus.collection
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <CheckCircle2 className='h-4 w-4' />
                    </div>
                    <span className='ml-2 text-sm text-gray-900'>
                      Vehicle Collected
                    </span>
                  </div>
                  <div className='flex items-center'>
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${
                        vehicle.processStatus.transportation
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <CheckCircle2 className='h-4 w-4' />
                    </div>
                    <span className='ml-2 text-sm text-gray-900'>
                      Transportation Arranged
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className='space-y-8'>
              <div>
                <h3 className='mb-4 text-lg font-medium text-gray-900'>
                  Edit History
                </h3>
                <div className='space-y-4'></div>
              </div>
            </div>
          )}

          {activeTab === 'comments' && (
            <div className='space-y-8'>
              <div>
                <h3 className='mb-4 flex items-center text-lg font-medium text-gray-900'>
                  <MessageCircle className='mr-2 h-5 w-5' />
                  Comments
                </h3>

                <div className='mb-6 rounded-lg bg-gray-50 p-4'>
                  <div className='flex items-start space-x-4'>
                    <div className='min-w-0 flex-1'>
                      <div className='relative'>
                        <textarea
                          rows={3}
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className='block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm'
                          placeholder='Add a comment... Use @ to mention team members'
                        />
                      </div>
                      <div className='mt-3 flex items-center justify-between'>
                        <div className='flex items-center space-x-5'>
                          <button
                            type='button'
                            className='inline-flex items-center space-x-2 text-gray-500 hover:text-gray-600'
                          >
                            <Paperclip className='h-5 w-5' />
                            <span className='text-sm font-medium'>Attach</span>
                          </button>
                          <button
                            type='button'
                            onClick={() => setIsPrivate(!isPrivate)}
                            className={`inline-flex items-center space-x-2 ${
                              isPrivate
                                ? 'text-primary'
                                : 'text-gray-500 hover:text-gray-600'
                            }`}
                          >
                            {isPrivate ? (
                              <Lock className='h-5 w-5' />
                            ) : (
                              <Globe className='h-5 w-5' />
                            )}
                            <span className='text-sm font-medium'>
                              {isPrivate ? 'Private' : 'Public'}
                            </span>
                          </button>
                        </div>
                        <button
                          type='button'
                          onClick={handleAddComment}
                          disabled={!newComment.trim()}
                          className='inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                        >
                          <Send className='mr-2 h-4 w-4' />
                          Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='space-y-4'>
                  {vehicle.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className={`rounded-lg border bg-white p-4 ${
                        comment.isPrivate
                          ? 'border-primary/20'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className='flex items-start space-x-3'>
                        <div className='flex-1'>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-2'>
                              <span className='text-sm font-medium text-gray-900'>
                                {comment.user}
                              </span>
                              {comment.isPrivate && (
                                <span className='inline-flex items-center rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary'>
                                  <Lock className='mr-1 h-3 w-3' />
                                  Private
                                </span>
                              )}
                            </div>
                            <span className='text-sm text-gray-500'>
                              {formatDate(comment.timestamp)}
                            </span>
                          </div>
                          <p className='mt-1 whitespace-pre-wrap text-sm text-gray-900'>
                            {comment.text}
                          </p>
                          {comment.attachments &&
                            comment.attachments.length > 0 && (
                              <div className='mt-2'>
                                {comment.attachments.map((attachment) => (
                                  <a
                                    key={attachment.id}
                                    href={attachment.url}
                                    className='mt-2 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-200'
                                  >
                                    <Paperclip className='mr-2 h-4 w-4' />
                                    {attachment.name}
                                  </a>
                                ))}
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
