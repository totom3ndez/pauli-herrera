import { createElement, useEffect, useState } from 'react';
import { getImage } from '@/lib/wp';

const Card = ({ imageID }) => {
  const [data, setData] = useState({ url: '', title: '', desc: '' });

  useEffect(() => {
    const fetchData = async () => {
      const { Url: url, Title: title, Desc: desc } = await getImage(imageID)
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = desc
      setData({ url, title, desc: tempDiv.innerText });
    };
    fetchData();
  }, [imageID]);

  const { url, title, desc } = data;

  return (
    <article className="w-[300px] h-[300px] rounded-t-4xl relative group">
      <img
        className="w-full h-full object-cover rounded-t-4xl"
        src={url}
        alt="Imagen de flores pintadas en una tela"
      />
      <div className="bg-white rounded-b-4xl h-20 py-5 flex flex-col justify-center items-center">
        <h3 className="font-headers text-2xl text-center text-black">{title}</h3>
        <p id="desc" className="text-center text-titles">{desc}</p>
      </div>
    </article>
  );
};

export default Card;