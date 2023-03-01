import SaveButton from './Buttons/Save';
import ResetButton from './Buttons/Reset';
import TipsButton from './Buttons/Tips';

const NavBar = ({ setOverlayState }) => {
  return (
    <div className="fixed bg-black flex gap-2 h-10 w-screen z-[31]">
      <SaveButton />
      <TipsButton setOverlayState={setOverlayState} />
      <ResetButton />
    </div>
  );
};

export default NavBar;
