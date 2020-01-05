import React, { useEffect, useState } from "react";
const UseEffectComponent = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("manga");
  const [res, setRes] = useState("loading...");
  let api = `https://api.jikan.moe/v3/search/${type}?q=${search}&limit=5`;
  useEffect(() => {
    (async () => {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data);
      setRes(data);
    })();
    // fetch(api)
    //   .then(raw => raw.json())
    //   .then(data => {
    //     setRes(data)
    //     console.log(data)
    //   });
    return () => (api = "");
  }, [search, type]);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(type, search);
        }}
      >
        <select
          name="type"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="manga">manga</option>
          <option value="anime">anime</option>
        </select>
        <input
          placeholder="search"
          name="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      {/* <pre>{JSON.stringify(res, null, 2)}</pre> */}
      {res &&
        res.results &&
        res.results.map(it => <img src={it.image_url} alt="/" />)}
    </div>
  );
};

export default UseEffectComponent;
