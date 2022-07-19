import {useParams} from "react-router-dom"

export const Page1A = () => {
  const {pageId} = useParams();
  console.log(pageId);
  return (
    <>
      <h1>Page1Aページです{pageId}</h1>
    </>
  );
};