import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <figure className="flex">
          <img
            src="avatar.webp"
            alt="avatart"
            className="rounded-full w-32 bg-white"
          />
        </figure>
      </div>
      <div className="flex-grow flex-col justify-center">
        <p className="font-semibold text-3xl">Saverio Rizza</p>
        <div className="flex items-center mb-1">
          <span>verificato il 14 aprile 2019</span>
        </div>
        <div className="flex items-center align-middle">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          <span>4.3/24 recensioni</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
