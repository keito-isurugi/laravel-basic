import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Page1Index = () => {
  const [pages, setPages] = useState([]);
  
  useEffect(() => {
    const fetchPages = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json();
      setPages(data);
    };
    fetchPages();
  }, [])

  return (
    <ul>
      {pages.map((page) => (
        <li key={page.id}>
          <Link to={`${page.id}`}>
            {page.id}:{page.title}
          </Link> 
        </li>
      ))}
    </ul>
  )
}