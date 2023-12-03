import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Chara, CharaList, } from './styles';

function Home() {
  const [charas, setCharas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://acnhapi.com/v1/bugs')
      .then(response => response.json())
      .then(data => {
        const bugsArray = Object.keys(data).map(bugsKey => data[bugsKey]);
        setCharas(bugsArray);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredCharas = charas.filter(chara =>
    chara.name['name-USen'].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h1>Bugs in Animal Crossing</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <CharaList>
        {filteredCharas.map(chara => (
          <Chara key={chara.id}>
            <Link to={`/details/${chara.id}`}>
              <img src={chara.image_uri} alt={chara.name} />
            </Link>
            <span>{chara.name['name-USen']}</span>
          </Chara>
        ))}
      </CharaList>
    </Container>
  );
}

export default Home;