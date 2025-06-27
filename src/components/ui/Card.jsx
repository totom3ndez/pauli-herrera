
const Card = () => {

  return (
    <article className="w-[300px] h-[300px] rounded-t-4xl relative group">
      <img
        className="w-full h-full object-cover rounded-t-4xl"
        src=''
        alt="Imagen de flores pintadas en una tela"
      />
      <div className="bg-white rounded-b-4xl h-20 py-5 flex flex-col justify-center items-center">
        <h3 className="font-headers text-2xl text-center text-black">Titulo de tarjeta</h3>
        <p id="desc" className="text-center text-titles">Descripcion</p>
      </div>
    </article>
  );
};

export default Card;