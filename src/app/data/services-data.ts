import { Service } from '../models/service.model';

export const SERVICES_DATA: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Full-stack web development services using modern technologies. We build responsive, scalable, and high-performance web applications tailored to your business needs.',
    shortDescription: 'Professional web development solutions',
    image: '/assets/images/web-dev.jpg',
    features: [
      {
        id: 'f1',
        title: 'Responsive Design',
        description: 'Mobile-first approach ensuring optimal viewing across all devices'
      },
      {
        id: 'f2',
        title: 'SEO Optimized',
        description: 'Built with search engine optimization best practices'
      },
      {
        id: 'f3',
        title: 'Fast Performance',
        description: 'Optimized code for lightning-fast load times'
      }
    ],
    testimonials: [
      {
        id: 't1',
        clientName: 'John Doe',
        comment: 'Excellent work! The team delivered a stunning website that exceeded our expectations.',
        rating: 5
      },
      {
        id: 't2',
        clientName: 'Jane Smith',
        comment: 'Professional service with great attention to detail. Highly recommended!',
        rating: 5
      }
    ]
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile application development for iOS and Android. We create intuitive and engaging mobile experiences.',
    shortDescription: 'Custom mobile applications',
    image: '/assets/images/mobile-dev.jpg',
    features: [
      {
        id: 'f4',
        title: 'Cross-Platform',
        description: 'Develop once, deploy on both iOS and Android'
      },
      {
        id: 'f5',
        title: 'Native Performance',
        description: 'Optimized for smooth and responsive user experience'
      },
      {
        id: 'f6',
        title: 'Offline Capabilities',
        description: 'Apps that work seamlessly without internet connection'
      }
    ],
    testimonials: [
      {
        id: 't3',
        clientName: 'Mike Johnson',
        comment: 'Our mobile app has been a game-changer for our business. Great work!',
        rating: 5
      }
    ]
  },
  {
    id: '3',
    title: 'Cloud Solutions',
    description: 'Comprehensive cloud services including migration, deployment, and management. We help you leverage the power of cloud computing for your business.',
    shortDescription: 'Scalable cloud infrastructure',
    image: '/assets/images/cloud.jpg',
    features: [
      {
        id: 'f7',
        title: 'Scalable Infrastructure',
        description: 'Easily scale resources based on demand'
      },
      {
        id: 'f8',
        title: 'Cost-Effective',
        description: 'Pay only for what you use with optimized resource allocation'
      },
      {
        id: 'f9',
        title: 'Secure & Reliable',
        description: 'Enterprise-grade security and 99.9% uptime guarantee'
      }
    ],
    testimonials: [
      {
        id: 't4',
        clientName: 'Sarah Williams',
        comment: 'The cloud migration was seamless. Our costs decreased while performance improved.',
        rating: 5
      }
    ]
  },
  {
    id: '4',
    title: 'UI/UX Design',
    description: 'User-centered design services that create beautiful and intuitive interfaces. We focus on user experience to ensure your product delights customers.',
    shortDescription: 'Beautiful and intuitive designs',
    image: '/assets/images/ui-ux.jpg',
    features: [
      {
        id: 'f10',
        title: 'User Research',
        description: 'Data-driven design decisions based on user behavior'
      },
      {
        id: 'f11',
        title: 'Prototyping',
        description: 'Interactive prototypes to test and validate ideas'
      },
      {
        id: 'f12',
        title: 'Design Systems',
        description: 'Consistent and scalable design libraries'
      }
    ],
    testimonials: [
      {
        id: 't5',
        clientName: 'David Brown',
        comment: 'The new design increased our conversion rate by 40%. Amazing work!',
        rating: 5
      }
    ]
  },
  {
    id: '5',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights. We provide comprehensive analytics solutions to help you make informed business decisions.',
    shortDescription: 'Data-driven insights',
    image: '/assets/images/analytics.jpg',
    features: [
      {
        id: 'f13',
        title: 'Real-time Analytics',
        description: 'Monitor key metrics as they happen'
      },
      {
        id: 'f14',
        title: 'Custom Dashboards',
        description: 'Tailored visualizations for your specific needs'
      },
      {
        id: 'f15',
        title: 'Predictive Analysis',
        description: 'AI-powered forecasting and trend analysis'
      }
    ],
    testimonials: [
      {
        id: 't6',
        clientName: 'Emily Davis',
        comment: 'The analytics platform helped us identify new opportunities. Excellent ROI!',
        rating: 5
      }
    ]
  },
  {
    id: '6',
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive cybersecurity solutions. We implement best practices to safeguard your digital assets and customer data.',
    shortDescription: 'Enterprise-grade security',
    image: '/assets/images/security.jpg',
    features: [
      {
        id: 'f16',
        title: 'Threat Detection',
        description: '24/7 monitoring and real-time threat identification'
      },
      {
        id: 'f17',
        title: 'Compliance',
        description: 'Meet industry standards and regulatory requirements'
      },
      {
        id: 'f18',
        title: 'Incident Response',
        description: 'Rapid response and recovery from security incidents'
      }
    ],
    testimonials: [
      {
        id: 't7',
        clientName: 'Robert Wilson',
        comment: 'Their security audit found vulnerabilities we never knew existed. Essential service!',
        rating: 5
      }
    ]
  }
];
