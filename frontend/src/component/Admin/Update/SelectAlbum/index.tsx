import React, { useState, useEffect } from "react";
import { SelectAlbum } from "src/styled";
import pages_information from "src/API/pages_information";
import { Link } from "react-router-dom";

export default function SelectAlbumView(): JSX.Element {
  const [pages, setPages] = useState<[number, string, string][]>([]);

  useEffect(() => {
    async function getData() {
      const data = await pages_information();
      console.log(data);
      setPages((curr) => data);
    }
    if (pages.length === 0) {
      getData();
    }
  }, []);

  return (
    <SelectAlbum>
      <div>
        <Link to="3">Portfolio</Link>
        <Link to="1">Portrait</Link>
        <Link to="2">Publication</Link>
        {pages.map((page) => (
          <Link to={`${page[0]}`}>{page[1]}</Link>
        ))}
      </div>
    </SelectAlbum>
  );
}
