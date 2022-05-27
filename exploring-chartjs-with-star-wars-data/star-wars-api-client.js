const BASE_URL = "https://swapi.dev/api"

const getFilms = async () => {
  return await getResults('films');
}

const getPeople = async () => {
  return await getResults('people')
}

const getBoxOfficeValues = () => {
  return [
    { episode_id: 4, "title": "Star Wars Ep. IV: A New Hope", boxOffice: 775398007 },
    { episode_id: 5, "title": "Star Wars Ep. V: The Empire Strikes Back", boxOffice: 549001242 },
    { episode_id: 6, "title": "Star Wars Ep. VI: Return of the Jedi", boxOffice: 475106177 },
    { episode_id: 1, "title": "Star Wars Ep. I: The Phantom Menace", boxOffice: 1027044677 },
    { episode_id: 2, "title": "Star Wars Ep. II: Attack of the Clones", boxOffice: 656695615 },
    { episode_id: 3, "title": "Star Wars Ep. III: Revenge of the Sith", boxOffice: 848998877 }
  ]
}

const getResults = async (resource) => {
  let results = [];

  let response = await axios.get(BASE_URL + '/' + resource);
  results.push(...response.data.results);

  while (response.data.next) {
    response = await axios.get(response.data.next);
    results.push(...response.data.results);
  }

  return results;
}
