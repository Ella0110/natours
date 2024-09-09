const PopupBox = ({ children }) => {
  return (
    <div
      id="popup"
      className="h-[100vh] w-full  z-40 top-0 left-0 fixed opacity-0 hidden target:opacity-100 target:visible target:block group"
    >
      <div className="h-[100vh] w-full backdrop-blur-md"></div>
      <div
        className="bg-white w-1/2 rounded-sm absolute move_to_center scale-50 shadow-lg opacity-0 overflow-hidden transition-all 
                    table duration-900 z-50 group-target:opacity-100 group-target:visible group-target:scale-100 
                    group-target:-translate-x-1/2 group-target:-translate-y-1/2 group-target:transition-all group-target:duration-700"
      >
        {children}
      </div>
    </div>
  );
};

export default PopupBox;
