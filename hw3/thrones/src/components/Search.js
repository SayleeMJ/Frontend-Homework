import { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/search.css';

const url = 'https://thronesapi.com/api/v2/Characters';
function Search() {
  const [charactersList, setCharacterList] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState('');
  useEffect(() => {
    axios.get(url).then((response) => setCharacterList(response.data));
  }, []);
  return (
    <div className='container'>
      <h2>
        <label className='search-box' for='charSearch'>
          Search character:
        </label>
        <input
          id='charSearch'
          type='text'
          placeholder='Enter Character Name'
          onChange={(e) => setSearchCharacter(e.target.value)}
        ></input>
      </h2>

      <section id='characters-container' class='mx-auto'>
        {charactersList
          .filter((item) => {
            if (searchCharacter === '') {
              return item;
            } else if (
              item.fullName
                .toUpperCase()
                .includes(searchCharacter.toUpperCase())
            ) {
              return item;
            }
          })
          .map((item) => {
            let altText = `${item.fullName} of ${item.family}`;
            return (
              <div className='card'>
                <div className='card-body'>
                  <img
                    className='card-img'
                    src={item.imageUrl}
                    alt={altText}
                  ></img>
                  <span className='card-title'>{item.fullName}</span>
                  <p className='card-text'>{item.title}</p>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default Search;

/* https://www.youtube.com/watch?v=-Q4PltNC_Jo*/
