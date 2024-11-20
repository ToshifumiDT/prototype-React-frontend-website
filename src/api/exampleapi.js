// Get Mock's company information

export const fetchCompanies = async () => {
  return [
    {
      id: 1,
      name: 'Tech Corp',
      location: 'Oslo',
      contact: 'contact@techcorp.com',
      industry: 'IT',
      description: 'Tech Corp specializes in software solutions.',
    },
    {
      id: 2,
      name: 'Health Inc',
      location: 'Bergen',
      contact: 'info@healthinc.com',
      industry: 'Healthcare',
      description: 'Health Inc provides innovative healthcare products.',
    },
  ];
};

// Get Mock Jobs

export const fetchJobs = async () => {
  return [
    {
      id: 1,
      title: 'Software Engineer',
      skills: ['React', 'Node.js'],
      type: 'Full-time',
      description: 'Develop and maintain software applications.',
      deadline: '2024-12-01',
      link: 'https://example.com/job/1',
    },
    {
      id: 2,
      title: 'Data Scientist',
      skills: ['Python', 'SQL'],
      type: 'Contract',
      description: 'Analyze data and build predictive models.',
      deadline: '2024-11-15',
      link: 'https://example.com/job/2',
    },
  ];
};

// Get Mock Municipality Data

export const fetchMunicipalities = async () => {
  return [
    { id: 1, name: 'Oslo' },
    { id: 2, name: 'Bergen' },
    { id: 3, name: 'Trondheim' },
    { id: 4, name: 'Stavanger' },
  ];
};
