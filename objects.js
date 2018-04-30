var playlist = {Hodor: "GOT"};

function updatePlaylist(object, key, title){
  object.key = title
  return object
}

function removeFromPlaylist(object, key){
  delete object.key
  return object
}