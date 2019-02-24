const BLOCK_UNITY = 20;
const COLORS = ['#FF0000', '#008000', '#000080', '#FFFF00', '#800080', '#000080', '#800000'];
const GRAVITY = 1;
const GAME_SPEED = 16;
const GAME_WIDTH = 200;
const GAME_HEIGHT = 400;

const FORMS = [
  {
    id: 'S',
    pieces: [
      {
        order: 1,
        blocks: [
          { r: 1, c: 1 },
          { r: 2, c: 1 },
          { r: 2, c: 2 },
          { r: 3, c: 2 }
        ]
      },
      {
        order: 2,
        blocks: [
          { r: 1, c: 2 },
          { r: 1, c: 3 },
          { r: 2, c: 1 },
          { r: 2, c: 2 }
        ]
      }
    ]
  },
  {
    id: 'Z',
    pieces: [
      {
        order: 1,
        blocks: [
          { r: 1, c: 2 },
          { r: 2, c: 1 },
          { r: 2, c: 2 },
          { r: 3, c: 1 }
        ]
      },
      {
        order: 2,
        blocks: [
          { r: 1, c: 1 },
          { r: 1, c: 2 },
          { r: 2, c: 2 },
          { r: 2, c: 3 }
        ]
      }
    ]
  },
  {
    id: 'I',
    pieces: [{
        order: 1,
        blocks: [
          { r: 1, c: 2 },
          { r: 2, c: 2 },
          { r: 3, c: 2 },
          { r: 4, c: 2 }
        ]
      },
      {
        order: 2,
        blocks: [
          { r: 2, c: 1 },
          { r: 2, c: 2 },
          { r: 2, c: 3 },
          { r: 2, c: 4 }
        ]
      }
    ]
  },
  {
    id: 'O',
    pieces: [
      {
        order: 1,
        blocks:[
          { r: 1, c: 1 },
          { r: 1, c: 2 },
          { r: 2, c: 1 },
          { r: 2, c: 2 },
          ]
      }
    ]
  },
  {
    id: 'L',
    pieces: [
      {
        order: 1,
        blocks: [
          { r: 1, c: 1 },
          { r: 2, c: 1 },
          { r: 3, c: 1 },
          { r: 3, c: 2 },
        ]
      },
      {
        order: 2,
        blocks: [
          { r: 1, c: 3 },
          { r: 2, c: 1 },
          { r: 2, c: 2 },
          { r: 2, c: 3 }
        ]
      },
      {
        order: 3,
        blocks: [
          { r: 1, c: 1 },
          { r: 1, c: 2 },
          { r: 2, c: 2 },
          { r: 3, c: 2 }
        ]
      },
      {
        order: 4,
        blocks: [
          { r: 1, c: 1 },
          { r: 1, c: 2 },
          { r: 1, c: 3 },
          { r: 2, c: 1 }
        ],
      }
    ]
  },
  {
    id: 'LL',
    pieces: [
      {
        order: 1,
        blocks: [
          { r: 1, c: 2 },
          { r: 2, c: 2 },
          { r: 3, c: 2 },
          { r: 3, c: 1 },
        ]
      },
      {
        order: 2,
        blocks: [
          { r: 1, c: 1 },
          { r: 2, c: 1 },
          { r: 2, c: 2 },
          { r: 2, c: 3 }
        ]
      },
      {
        order: 3,
        blocks: [
          { r: 1, c: 1 },
          { r: 1, c: 2 },
          { r: 2, c: 1 },
          { r: 3, c: 1 }
        ]
      },
      {
        order: 4,
        blocks: [
          { r: 1, c: 1 },
          { r: 1, c: 2 },
          { r: 1, c: 3 },
          { r: 2, c: 3 }
        ]
      }
    ]
  },
  {
    id: 'T',
    pieces: [
      {
        order: 1,
        blocks: [
          { r: 1, c: 1 },
          { r: 1, c: 2 },
          { r: 1, c: 3 },
          { r: 2, c: 2 }
        ]
      },
      {
        order: 2,
        blocks: [
          { r: 1, c: 3 },
          { r: 2, c: 2 },
          { r: 2, c: 3 },
          { r: 3, c: 3 }
        ]
      },
      {
        order: 3,
        blocks: [
          { r: 1, c: 2 },
          { r: 2, c: 1 },
          { r: 2, c: 2 },
          { r: 2, c: 3 }
        ]
      },
      {
        order: 4,
        blocks: [
          { r: 1, c: 1 },
          { r: 2, c: 1 },
          { r: 2, c: 2 },
          { r: 3, c: 1 }
        ]
      }
    ]
  }
];
