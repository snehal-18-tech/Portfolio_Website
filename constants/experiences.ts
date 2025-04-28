export const resumeLink = "https://drive.google.com/file/d/1whhcfyQzReNxdiarE_LGdHvRABorNPyA/view?usp=sharing";

export interface Experience {
  role: string;
  company: string;
  joinDate: string;
  endDate: string;
  detail: string[];
  skills: string[];
  certificate?: string;
}
export const experiences: Experience[]= [
  {
    role: 'Full Stack Developer',
    company: 'Self-Initiated Project',
    joinDate: 'April 2025',
    endDate: 'May 2025',
    detail: [
      `Built a complete Task Manager app in machine test for an interview using MySQL, Html/Css, Php and JavaScript.`,
      `Implemented user authentication, user and admin panel with analytics.`,
    ],
    skills: ['MySQL', 'JavaScript', 'HTML/CSS', 'Php'],
   
  },
  {
    role: 'Creative Head',
    company: 'MIBCS & CSI Committees',
    joinDate: 'June 2024',
    endDate: 'June 2025',
    detail: [
      `Organized and conducted multiple coding interviews and technical events.`,
      `Created Various Posters related to various events.`,
    ],
    skills: ['Teamwork', 'Leadership', 'Interviewing', 'Event Management','Canva'],
    certificate:
    'https://drive.google.com/file/d/13QOq5vg-CxNn6zMDxANDLverK3x2FzHs/view?usp=sharing',
  },
  {
    role: 'Volunteer',
  company: 'Avishkar Zonal Level Competition',
  joinDate: 'Jan 2024',
  endDate: 'Jan 2024',
  detail: [
    `Assisted in organizing and managing the zonal level academic competition Avishkar.`,
    `Helped coordinate logistics and guided participants during the event.`,
  ],
  skills: ['Teamwork', 'Event Management', 'Communication'],
  },
  
  {
    role: 'Volunteer',
    company: 'E-Yantra (CSI & Poonam Ecovision)',
    joinDate: 'Mar 2024',
    endDate: 'Mar 2024',
    detail: [
      `Actively supported robotics and embedded systems-based competition events.`,
      `Facilitated smooth execution of activities under CSI and Poonam Ecovision foundation.`,
    ],
    skills: ['Volunteerism', 'Team Collaboration', 'Technical Exposure'],
    certificate:
    'https://drive.google.com/file/d/13QOq5vg-CxNn6zMDxANDLverK3x2FzHs/view?usp=sharing',
  },
];
