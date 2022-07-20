import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const Page1A = () => {
  const {pageId} = useParams();
  const [page, setPage] = useState('');

  console.log(pageId)
  useEffect(() => {
    const fetchPage = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${pageId}`)
      const data = await res.json();
      setPage(data);
    };
    fetchPage();
  }, [pageId])

  return (
    <>
      <h1>Page1Aページです</h1>
      <div>
        <p>ID:{page.id}</p>
        <p>title:{page.title}</p>
        <p>content:{page.body}</p>
      </div>
    </>
  );
};