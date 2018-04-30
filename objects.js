var playlist = {Hodor: "GOT"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(object, key){
  delete object.key;
  return object
}