//import EmbedJS from 'embed-js';

function ytVidId(url) {
  var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  console.log('got here')
  return (url.match(p)) ? RegExp.$1 : false;
}


  


