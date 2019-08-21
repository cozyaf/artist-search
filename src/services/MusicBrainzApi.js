export const getArtists = (search) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch stuff bruh :(';
      return res.json();
    });
};

