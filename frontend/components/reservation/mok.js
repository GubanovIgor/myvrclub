export const headsets1 = [
  { headset: 'HTC Vive Pro', amount: ['free', 'reserved', 'free', 'reserved'] },
  { headset: 'Oculus Rift', amount: ['free', 'reserved', 'free', 'reserved', 'free', 'free'] },
  { headset: 'PS VR', amount: ['free', 'free', 'free', 'reserved'] },
  // {headset: 'PS VR', amount: ['free', 'free', 'free', 'reserved']},
  // {headset: 'PS VR', amount: ['free', 'free', 'free', 'reserved']},
  // {headset: 'PS VR', amount: ['free', 'free', 'free', 'reserved']},
]

export const headsets = [
  {
    'model': 'HTC Vive Pro',
    'glasses': [
      {
        'reserved': {
          '16.11.19': ['12:00', '13:00', '14:00'],
          '17.11.19': ['16:00', '20:00', '21:00'],
          '18.11.19': ['20:00', '21:00', '22:00']
        },
      },
      {
        'reserved': {
          '16.11.19': ['14:00', '15:00', '16:00'],
          '17.11.19': ['16:00', '20:00', '21:00'],
          '18.11.19': ['20:00', '21:00', '22:00']
        },
      },
      {
        'reserved': {
          '16.11.19': ['17:00', '18:00', '19:00'],
          '17.11.19': ['17:00', '18:00', '19:00'],
          '18.11.19': ['20:00', '21:00', '22:00']
        },
      },
    ]
  },
  {
    'model': 'Oculus Rift',
    'glasses': [
      {
        'reserved': {
          '16.11.19': ['12:00', '13:00', '14:00'],
          '17.11.19': ['16:00', '20:00', '21:00'],
          '18.11.19': ['20:00', '21:00', '22:00']
        },
      },
      {
        'reserved': {
          '16.11.19': ['12:00', '13:00', '14:00'],
          '17.11.19': ['16:00', '20:00', '21:00'],
          '18.11.19': ['20:00', '21:00', '22:00']
        },
      },
      {
        'reserved': {
          '16.11.19': ['12:00', '13:00', '14:00'],
          '17.11.19': ['16:00', '20:00', '21:00'],
          '18.11.19': ['20:00', '21:00', '22:00']
        },
      },
    ]
  },
  {
    'model': 'PS VR',
    'glasses': [
      {
        'reserved': {
          '16.11.19': ['12:00', '13:00', '14:00'],
          '17.11.19': ['16:00', '20:00', '21:00'],
          '18.11.19': ['20:00', '21:00', '22:00']
        },
      },
      {
        'reserved': {
          '16.11.19': ['12:00', '13:00', '14:00'],
          '17.11.19': ['16:00', '20:00', '21:00'],
          '18.11.19': ['20:00', '21:00', '22:00']
        },
      },
      {
        'reserved': {
          '16.11.19': ['12:00', '13:00', '14:00'],
          '17.11.19': ['16:00', '20:00', '21:00'],
          '18.11.19': ['20:00', '21:00', '22:00']
        },
      },
    ]
  }
]

export const categoryColor = {
  'low': '#6ebf2c',
  'middle': '#ffb700',
  'high': '#9D429A',
  'not available': '#959595',
}

export const prices = [
  { price: '400 Р', category: 'low', color: '#6ebf2c' },
  { price: '700 Р', category: 'middle', color: '#ffb700' },
  { price: '1500 Р', category: 'high', color: '#a94ca5' },
  { price: 'н/д', category: 'not available', color: '#b9b9b9' },
];

export const interval = 60;
