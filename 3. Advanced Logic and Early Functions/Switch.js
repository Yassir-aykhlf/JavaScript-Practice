const day = 'Wednesday';

switch (day) {
  case 'Monday':
    console.log('Plan course structure');
    break;
  case 'Tuesday':
    console.log('Prepare theory videos');
    break;
  case 'Wednesday':
  case 'Thursday': // Fall-through for shared logic
    console.log('Write code examples');
    break;
  case 'Friday':
    console.log('Record videos');
    break;
  default:
    console.log('Not a valid day');
}