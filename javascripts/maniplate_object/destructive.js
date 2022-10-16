// 中身をコピー
const response = {
    data: [
      {
        id: 1,
        name: 'Wiskey',
        price: '350',
        percentage: '10',
      },
      {
        id: 2,
        name: 'Lemon Sour',
        price: '350',
        percentage: '5',
      },
      {
        id: 3,
        name: 'Beer',
        price: '350',
        percentage: '5',
      },
      {
        id: 4,
        name: 'Plum shu',
        price: '350',
        percentage: '12',
      },
      {
        id: 5,
        name: 'Vodka',
        price: '350',
        percentage: '24',
      },
    ],
  };
  
  const { data: alcohols = [] } = response;
  console.log(alcohols);
  