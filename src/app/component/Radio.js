const Radio = ({radioName, children}) => {

  return (
    <div className="lg:w-1/2 block lg:inline-block mb-4 lg:mb-0 relative">
      <input type="radio" id="small" name="size" 
      className="appearance-none peer w-8 h-8 border-[4px] rounded-full border-green-500"/>
      <div className="absolute w-4 h-4 rounded-full  top-2 left-2 z-10 
      pointer-events-none peer-checked:bg-green-500"></div>
      <label for="small" className="absolute text-base cursor-pointer pl-4 top-1">
          {radioName}
      </label>
    </div>
  )
}

export default Radio