const response = {
  data: [
    {
      name: "Wiskey",
      price: "350",
      percentage: "10",
    },
    {
      name: "Lemon Sour",
      price: "350",
      percentage: "5",
    },
    {
      name: "Beer",
      price: "350",
      percentage: "5",
    },
    {
      name: "Plum shu",
      price: "350",
      percentage: "12",
    },
    {
      name: "Vodka",
      price: "350",
      percentage: "24",
    },
  ],
};

const { data: alcohols = [] } = response;

const copy_alcohol = Object.assign({}, alcohols);
console.log(copy_alcohol === alcohols); // false

const assign_attributes = {
  data: [
    {
      name: "highball",
      price: "200",
      percentage: "5",
    },
    {
      name: "sake",
      price: "1000",
      percentage: "23",
    },
  ],
};

const { data: update = []} = assign_attributes;

const assigned_alcohols = Object.assign(copy_alcohol, update);
// {
//     '0': { name: 'highball', price: '200', percentage: '5' },
//     '1': { name: 'sake', price: '1000', percentage: '23' },
//     '2': { name: 'Beer', price: '350', percentage: '5' },
//     '3': { name: 'Plum shu', price: '350', percentage: '12' },
//     '4': { name: 'Vodka', price: '350', percentage: '24' }
//   }