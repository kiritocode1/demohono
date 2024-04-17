import Image from "next/image";




function getabsoluteUrl (url: string) {
  return  "http://localhost:3000" + url;
}




export default async  function Home () {
  //


  const url = getabsoluteUrl( true ? "/api/hono" : "/api/old");

  const startTime = performance.now();
  const res = await fetch(url);
  const endTime = performance.now();


  const data = await  res.json();



  return (
    <div>
      <h1>{endTime - startTime}</h1>
      <h1>{JSON.stringify(data)}</h1>
    </div>

  );
}
