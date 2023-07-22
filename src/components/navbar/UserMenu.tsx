import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import useLoginModal from "../hooks/useLoginModal";
import useRegisterModal from "../hooks/useRegisterModal";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={"relative"}>
      <div className={"flex flex-row items-center gap-3"}>
        <div
          onClick={() => {}}
          className={
            "hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          }
        >
          Advertise your party
        </div>
        <div
          onClick={handleShowMenu}
          className={
            "p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full hover:shadow-md transition cursor-pointer"
          }
        >
          <AiOutlineMenu size={18} />
          <div className={"hidden md:block"}>
            <Avatar />
          </div>
        </div>
      </div>

      {showMenu && (
        <div
          className={
            "absolute w-[40vw] shadow-md rounded-xl md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm"
          }
        >
          <div className={"flex flex-col cursor-pointer"}>
            <>
              {/* Duplicate MenuItem to use multiple */}
              <MenuItem onClickProp={registerModal.onOpen} label="Sign up" />
              <MenuItem onClickProp={loginModal.onOpen} label="Login" />
              {/* Duplicate MenuItem to use multiple */}
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
