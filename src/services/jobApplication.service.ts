import { supabase } from '../lib/supabase';
import type { JobApplication } from '../lib/supabase';

export const jobApplicationService = {
  // Get all applications for a user
  async getApplications(userId: string) {
    try {
      const { data, error } = await supabase
        .from('job_applications')
        .select('*')
        .eq('user_id', userId)
        .order('applied_at', { ascending: false });

      if (error) throw error;
      return { data, error: null };
    } catch (error: any) {
      console.error('Get applications error:', error);
      return { data: null, error: error.message || 'Failed to fetch applications' };
    }
  },

  // Get single application
  async getApplication(applicationId: string) {
    try {
      const { data, error } = await supabase
        .from('job_applications')
        .select('*')
        .eq('id', applicationId)
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (error: any) {
      console.error('Get application error:', error);
      return { data: null, error: error.message || 'Failed to fetch application' };
    }
  },

  // Create new application
  async createApplication(userId: string, application: Omit<JobApplication, 'id' | 'user_id' | 'applied_at'>) {
    try {
      const { data, error } = await supabase
        .from('job_applications')
        .insert({
          user_id: userId,
          ...application,
        })
        .select()
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (error: any) {
      console.error('Create application error:', error);
      return { data: null, error: error.message || 'Failed to create application' };
    }
  },

  // Update application status
  async updateApplicationStatus(applicationId: string, status: string) {
    try {
      const { data, error } = await supabase
        .from('job_applications')
        .update({ status })
        .eq('id', applicationId)
        .select()
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (error: any) {
      console.error('Update application status error:', error);
      return { data: null, error: error.message || 'Failed to update application status' };
    }
  },

  // Delete application
  async deleteApplication(applicationId: string) {
    try {
      const { error } = await supabase
        .from('job_applications')
        .delete()
        .eq('id', applicationId);

      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      console.error('Delete application error:', error);
      return { error: error.message || 'Failed to delete application' };
    }
  },

  // Get applications by status
  async getApplicationsByStatus(userId: string, status: string) {
    try {
      const { data, error } = await supabase
        .from('job_applications')
        .select('*')
        .eq('user_id', userId)
        .eq('status', status)
        .order('applied_at', { ascending: false });

      if (error) throw error;
      return { data, error: null };
    } catch (error: any) {
      console.error('Get applications by status error:', error);
      return { data: null, error: error.message || 'Failed to fetch applications' };
    }
  },

  // Get application stats
  async getApplicationStats(userId: string) {
    try {
      const { data, error } = await supabase
        .from('job_applications')
        .select('status')
        .eq('user_id', userId);

      if (error) throw error;

      const stats = {
        total: data?.length || 0,
        applied: data?.filter(app => app.status === 'applied').length || 0,
        pending: data?.filter(app => app.status === 'pending').length || 0,
        interview: data?.filter(app => app.status === 'interview').length || 0,
        rejected: data?.filter(app => app.status === 'rejected').length || 0,
        accepted: data?.filter(app => app.status === 'accepted').length || 0,
      };

      return { data: stats, error: null };
    } catch (error: any) {
      console.error('Get application stats error:', error);
      return { data: null, error: error.message || 'Failed to fetch stats' };
    }
  },
};
