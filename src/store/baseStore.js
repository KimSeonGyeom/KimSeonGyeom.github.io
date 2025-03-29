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
    contact: {
      email: "ksg_0320@kaist.ac.kr",
      github: "https://github.com/KimSeonGyeom",
    },
    research: [
      {
        title: "Understanding the Impact of Spatial Immersion in Web Data Stories",
        description: "Description of research project 1",
        date: "2021-2023",
        link: "https://immerwebds.github.io/",
        image: "/research_1_teaser.jpg",
        status: "only arXiv version"
      },
      {
        title: "Chart-to-Experience: Benchmarking Multimodal LLMs for Predicting Experiential Impact of Charts",
        description: "Description of research project 2",
        date: "2023-2024",
        link: "https://chart2experience.github.io/",
        image: "/research_2_teaser.png",
        status: "Accepted to PacificVis 2025"
      },
      {
        title: "AI-Infused Pipeline for Authoring Semantically Stylized Charts",
        description: "Description of research project 3",
        date: "2024-Present",
        link: "#",
        image: "/research_3_teaser.png",
        status: "WIP"
      }
    ],
    education: [
      {
        title: "Ph.D. in Industrial Design (Integrated M.S./Ph.D. Track)",
        organization: "KAIST (Korea Advanced Institute of Science and Technology)",
        date: "Aug 2021 - Present",
      },
      {
        title: "B.S. in Industrial Design",
        organization: "KAIST (Korea Advanced Institute of Science and Technology)",
        date: "Mar 2015 - Aug 2021",
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