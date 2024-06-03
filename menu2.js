fetch('menu.json')
.then(response => response.json())
.then( data => {
    const menuContainer = document.getElementById ('menu-container');
    let total =0;
    data.items.forEach(category=> {
    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = category.category;
    menuContainer.appendChild(categoryTitle);

    const table = document.createElement('table');
    const tableContent = `<tr><th>Foto</th><th>Descripcion</th>Precio</th><th>Seleccionar</th></tr>`;
    let tableBody = '';

    category.items.forEach(item =>{
     tableBody +=
    `<tr>
    <td><img src="${item.image}" alt="${item.name}"></td>
    <td>${item.name} -${item.description}</td>
    <td>${item.price}</td>
    <td><input type="checkbox" data-price ="${item.price.replace('&','')}"onchange="updateTotal()"}</td>
     </tr>`;
    });
    table.innerHTML = tableContent;
    menuContainer.appendChild(table);
   });
});
 function updateTotal(){
   const  checkboxes = document.querySelectorAll('input [type="chechbox"][data-price]');
   let currentTotal= 0;
   checkboxes.forEach(checkbox=>{
      if(checkbox.checked){
         currentTotal += parseFloat(checkbox.getAttribute('data-price'));
      }
   });
   document.getElementedById('total').textContent = currentTotal.toFixed(2);
 }
