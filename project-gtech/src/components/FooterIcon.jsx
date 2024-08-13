import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twittr from "../assets/images/twitter.svg";
const FooterIcon = () => {
  return (
    <div className=" container_redes_sociais gap-5 flex">
      <img className="iconface h-full" src={facebook} alt="[icone facebook" />
      <img className="iconinsta h-full" src={instagram} alt="[icone facebook" />
      <img className="icontwit h-full" src={twittr} alt="[icone facebook" />
    </div>
  );
};

export default FooterIcon;
