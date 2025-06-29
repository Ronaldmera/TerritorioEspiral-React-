const Boton = ({ text, href }) => {
  return (
    <a href={href} className="btn btn-dark text-white px-4 py-2 mb-5">
      {text}
    </a>
  );
};

export default Boton;
