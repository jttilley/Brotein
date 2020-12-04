import React from 'react';

async function searchYouTube(q) {
    q = encodeURIComponent(q);
    const response = await fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
        "x-rapidapi-key": "6a867220cbmsh56a34611a39c280p1a1608jsn886843dc41fb" //process.env.RAPIDAPI_KEY
      }
    });
    const body = await response.json();
    console.log(body);
    return body.items.filter(item => item.type === 'video');
}


function YouTube() {
  const [query, setQuery] = React.useState('Workouts');
  const [list, setList] = React.useState(null);

  const search = (e) => {
    e.preventDefault();
    searchYouTube(query).then(setList);
  };

  return (
    <div className="youtube">
      <form onSubmit={search}>
        <input autoFocus value={query} onChange={e => setQuery(e.target.value)} />
        <button>Search YouTube</button>
      </form>
      {list &&
        (list.length === 0
          ? <p>No results</p>
          : (
            <ul className="items">
              {list.map(item => (
                <li className="item" key={item.id}>
                  <div>
                    <b><a href={item.link}>{item.title}</a></b>
                    <p>{item.description}</p>
                  </div>
                  <ul className="meta">
                    <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
                    <li>Views: {item.views}</li>
                    <li>Duration: {item.duration}</li>
                    <li>Uploaded: {item.uploaded_at}</li>
                  </ul>
                  <img alt="" src={item.thumbnail} />
                </li>
              ))}
            </ul>
          )
        )
      }
    </div>
  );
}

export default YouTube;