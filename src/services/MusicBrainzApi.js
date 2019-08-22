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

export const getArtwork = (releaseId) => {
  return fetch(`http://coverartarchive.org/release/${releaseId}/front`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch stuff bruh :(';
      return res.json();
    });
};


