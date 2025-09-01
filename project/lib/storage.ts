export type School = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  image: string;
  email_id: string;
  created_at: string;
  updated_at: string;
};

const STORAGE_KEY = 'schools_data';

export const schoolStorage = {
  // Get all schools from localStorage
  getSchools: (): School[] => {
    if (typeof window === 'undefined') return [];
    
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading schools from localStorage:', error);
      return [];
    }
  },

  // Add a new school
  addSchool: (schoolData: Omit<School, 'id' | 'created_at' | 'updated_at'>): School => {
    const schools = schoolStorage.getSchools();
    const newSchool: School = {
      ...schoolData,
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    
    const updatedSchools = [newSchool, ...schools];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSchools));
    
    return newSchool;
  },

  // Update an existing school
  updateSchool: (id: string, updates: Partial<Omit<School, 'id' | 'created_at'>>): School | null => {
    const schools = schoolStorage.getSchools();
    const schoolIndex = schools.findIndex(school => school.id === id);
    
    if (schoolIndex === -1) return null;
    
    const updatedSchool = {
      ...schools[schoolIndex],
      ...updates,
      updated_at: new Date().toISOString(),
    };
    
    schools[schoolIndex] = updatedSchool;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(schools));
    
    return updatedSchool;
  },

  // Delete a school
  deleteSchool: (id: string): boolean => {
    const schools = schoolStorage.getSchools();
    const filteredSchools = schools.filter(school => school.id !== id);
    
    if (filteredSchools.length === schools.length) return false;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredSchools));
    return true;
  },

  // Clear all schools (for testing)
  clearAllSchools: (): void => {
    localStorage.removeItem(STORAGE_KEY);
  },
};