import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/logo.png";
const logo = () => {
  return (
    <Link to='/'>
      <img className="hidden md:block cursor-pointer" src={logoImg} alt="logo" width={100} height={100} />
    </Link>
  );
};

export default logo;
