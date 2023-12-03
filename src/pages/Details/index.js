import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from './styles';

function Details() {
  const { id } = useParams();
  const [chara, setChara] = useState({});

  useEffect(() => {
    fetch(`https://acnhapi.com/v1/bugs/${id}`)
      .then(response => response.json())
      .then(data => {
        const { name, image_uri, "catch-phrase": catch_phrase, price, availability } = data;
        const charaData = {
          id,
          name: name['name-USen'],
          image_uri,
          catch_phrase,
          price,
          availability, 
          location: availability.location,
          rarity: availability.rarity
        };
        setChara(charaData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <Container>
      <div className="chara">
        <img src={chara.image_uri} alt={chara.name} />
        <div className="details">
          <h1>{chara.name}</h1>
          <span>Noted: {chara.catch_phrase}</span>
          <span>Location: {chara.location}</span>
          <span>Rarity: {chara.rarity}</span>
          <span className="source">Price: {chara.price}</span>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Details;