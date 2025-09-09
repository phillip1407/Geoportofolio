import { PortfolioData } from '../types';

export const initialData: PortfolioData = {
  projectImages: [
    {
      id: '1',
      title: 'Endless Food Co.',
      imageUrl: 'https://images.pexels.com/photos/6532373/pexels-photo-6532373.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      title: 'Restate',
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ],
  aboutContent: {
    profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'About me',
    description: 'Communication is a key element in graphic design. And this is something I can contribute to - both indirectly by ensuring that communication systematically works seamlessly across people, media, and purposes, and more directly, where play and function come together in perfect harmony.\n\nIf you\'re looking for a designer who combines creativity with strategic thinking, feel free to reach out.',
    callToAction: 'Let\'s talk →'
  },
  education: [
    {
      id: '1',
      title: 'Building Brands with Type',
      institution: 'School of Visual Arts, NYC',
      period: 'Jul - Aug 2024'
    },
    {
      id: '2',
      title: 'Graphic design',
      institution: 'DMJX, Copenhagen',
      period: '2021-24'
    },
    {
      id: '3',
      title: 'Media graphics',
      institution: 'NEXT, Copenhagen',
      period: '2019-21'
    }
  ],
  experience: [
    {
      id: '1',
      company: 'YOKE',
      position: 'Graphic Designer',
      period: 'Dec 2024 - now'
    },
    {
      id: '2',
      company: 'Kvell Office',
      position: 'Internship',
      period: 'Oct 2023 - Mar 2024'
    },
    {
      id: '3',
      company: 'Peytz',
      position: 'Student Assistant',
      period: 'Sep 2022 - 2024'
    },
    {
      id: '4',
      company: 'Frankly',
      position: 'Apprenticeship',
      period: 'Aug 2019 - Aug 2022'
    }
  ],
  clients: [
    { id: '1', name: 'Folkekirkens Intranet' },
    { id: '2', name: 'Danish Royal Theatre' },
    { id: '3', name: 'Helsinki Committee' },
    { id: '4', name: 'Skamlingsbanken' },
    { id: '5', name: 'Endless Food Co.' },
    { id: '6', name: 'Carlsberg Group' },
    { id: '7', name: 'Canova Di Vini' },
    { id: '8', name: 'Piola Pastificio' },
    { id: '9', name: 'Young Europe' },
    { id: '10', name: 'Cphbusiness' },
    { id: '11', name: 'Open Loop' },
    { id: '12', name: 'UAE Expo' },
    { id: '13', name: 'Nordea' },
    { id: '14', name: 'KRUDT' },
    { id: '15', name: 'BLOX' },
    { id: '16', name: 'Adjo' }
  ]
};