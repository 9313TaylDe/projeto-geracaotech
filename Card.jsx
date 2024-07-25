import React from 'react';
import './Card.css';

function Card() {
  let img = "https://s3-alpha-sig.figma.com/img/38c2/f5b3/f256f97445a6bbaae35cd27d99d2d021?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qpnpxsUVP0QrxMWK9eAXJzPggVjzGjnqYvJz82LKeIMCEDpy3qzCCz-cXbKOYtn1cAKQALiEFOka4FoQmxTEgfmim2PF1rWZ2ZXSVUwhIjJgabsdEGpc2WiUqtGimINkgouAOs4kkNrkLHs6VoMTERJAFHCX0u1wQPYt2-jIB5xnd-QKsdKThihUt0ZwofYMG9kwVYmOROZ--CnFIyXZJu1x-JAuAC8FotlmHDTe6zEDq76G7q70KdgcT5W-Rd~Z6l7gU1wiaP38MywyMvmAH6VHseqR3nQUrZPYNvYXLJUUNvOvTAo6~kg5xQvMfOKLbotrFbEbaIGxZqcntn2sew__";
  return (
    <header className="card">
      <div className="container">

      <div className='circulo'/>
      <img className='tenis' src={img}/>
      
        <h1>Oferta especial</h1>
        <h2>Air Jordan edição de colecionador</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        <a href="#" className="btn">Ver Oferta</a>
      </div>
      
    </header>
  );
}

export default Card;
