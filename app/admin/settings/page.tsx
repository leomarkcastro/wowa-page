'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProfileSettings } from './components/profile-settings';
import { SyncSettings } from './components/sync-settings';

export default function SettingsPage() {
  return (
    <div className='container mx-auto py-6'>
      <h1 className='mb-6 text-3xl font-bold'>Settings</h1>

      <Tabs defaultValue='profile' className='space-y-4'>
        <TabsList>
          <TabsTrigger value='profile'>Profile Settings</TabsTrigger>
          <TabsTrigger value='sync'>Member Sync</TabsTrigger>
        </TabsList>

        <TabsContent value='profile'>
          <ProfileSettings />
        </TabsContent>

        <TabsContent value='sync'>
          <SyncSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
