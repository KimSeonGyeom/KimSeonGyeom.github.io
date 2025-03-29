import { create } from 'zustand';

/**
 * Base store for managing application state
 */
const useBaseStore = create((set) => ({
  // Profile data
  profile: {
    name: "Seon Gyeom Kim",
    title: "Ph.D. Candidate",
    profileImage: "/seongyeomkim.jpg",
    about: "I am a researcher at KAIST focusing on artificial intelligence and machine learning. My research aims to develop advanced algorithms for solving complex problems in computer vision and natural language processing. With a background in computer science and mathematics, I strive to bridge the gap between theoretical foundations and practical applications in the field of AI.",
    contact: {
      email: "ksg_0320@kaist.ac.kr",
    },
    researchInterests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Natural Language Processing"
    ],
    research: [
      {
        title: "Research Project 1",
        description: "Description of research project 1",
        date: "2023-Present",
        link: "#"
      },
      {
        title: "Research Project 2",
        description: "Description of research project 2",
        date: "2022-2023",
        link: "#"
      }
    ],
    timeline: [
      {
        title: "Current Position",
        organization: "KAIST",
        description: "Research in AI",
        period: "2023-Present"
      },
      {
        title: "Previous Position",
        organization: "University",
        description: "Bachelor's Degree",
        period: "2019-2023"
      }
    ]
  },
  
  // UI state
  activeSection: "research-interests",
  
  // Actions
  setActiveSection: (section) => set({ activeSection: section }),
  updateProfile: (field, value) => set((state) => ({
    profile: {
      ...state.profile,
      [field]: value
    }
  })),
  
  // Generic setter for any state property
  setState: (key, value) => set({ [key]: value }),
}));

export default useBaseStore; 