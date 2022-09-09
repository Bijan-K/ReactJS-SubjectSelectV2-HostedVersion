import LoadButton from './Buttons/Load';
import SaveButton from './Buttons/Save';
import ResetButton from './Buttons/Reset';

const NavBar = (props) => {
  return (
    <div className="fixed bg-black flex gap-2 h-10 w-full z-[31]">
      <LoadButton SetSave={props.SetSave} />
      <SaveButton Save={props.Save} />
      <ResetButton SetSave={props.SetSave} />
    </div>
  );
};

export default NavBar;
