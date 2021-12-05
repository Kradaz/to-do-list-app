function newItem(){

  // ADDING ITEMS TO THE LIST
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  // FUNCTION TO ERROR MESSAGE
  if (inputValue === ''){
    alert("You must enter an item to the list");
  }else{
    $('#list').append(li);
  }

  // CROSSING items
  li.on("dblclick", function(){
    li.addClass("strike");
  });

  // ADDING THE DELETE button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", function(){
    li.addClass("delete");
  });

  $('#list').sortable();



























}
