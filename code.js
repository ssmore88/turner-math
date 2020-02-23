function inventory () {
  var form = FormApp.openById('1jrQuMTIRJO11SHKB_8y12gFRtZk19uqIi9XDlzwD_5c');
  
  var items = form.getItems();
  var email = items[0];
  var requestSelection = items[1];
  
  var inventoryItems = [
    'Laminating Pouches', 
    'Push Pin Magnets',
    'Green Plastic Cups',
    'Red Plastic Cups'
  ];
 
  var spreadsheet = SpreadsheetApp.openById('1dn3pjlocLZAE1jnPvn1NW0rOOcOTUjelDkt_YJy60_s');
  
  Logger.log('Published URL: ' + form.getPublishedUrl());
  Logger.log('Editor URL: ' + form.getEditUrl()); 
}
