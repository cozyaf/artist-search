export const getArtists = (search) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch stuff bruh :(';
      return res.json();
    });
};

export const getArtist = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/artist/${id}?inc=aliases&fmt=json`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch stuff bruh :(';
      return res.json();
    });
};

export const getReleases = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch stuff bruh :(';
      return res.json();
    });
};

export const getSongs = (releaseId) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch stuff bruh :(';
      return res.json();
    });
}; 

export const getLyrics = (artistName, songTitle) => {
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch stuff bruh :(';
      return res.json();
    });
}; 
