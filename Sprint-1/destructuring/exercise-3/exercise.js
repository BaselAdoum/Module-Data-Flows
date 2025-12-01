let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];


// Print receipt header
console.log("QTY     ITEM                TOTAL");

let totalCost = 0;

// Loop through each item in the order
order.forEach(function(item) {
  // Destructure - extract the properties we need from each item
  const { itemName, quantity, unitPricePence } = item;
  
  // Calculate total for this item (convert pence to pounds)
  const itemTotal = (quantity * unitPricePence) / 100;
  
  // Add to overall total
  totalCost += itemTotal;
  
  // Format and print the line with proper spacing
  //.padEnd give a block of spaces so this way it keeps the values
  // of total consistently far from it. from beginng to end it is 18
  console.log(`${quantity}       ${itemName.padEnd(18)}  ${itemTotal.toFixed(2)}`);
});

// Print the final total
console.log(`\nTotal: ${totalCost.toFixed(2)}`);