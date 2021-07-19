function Settings() {
  return (
    <div className="flex rounded-xl w-11/12 md:w-3/4 lg:w-1/2 h-full text-center font-bold bg-white shadow-lg mx-auto m-5 p-5">
      <div className="flex flex-col justify-around mx-auto">
        <div className="grid grid-cols-2">
          <div className="p-5">Setting 1</div>
          <div className="p-5 flex gap-2 items-center">
            <div className="flex items-center justify-center w-full mb-12">
              <label htmlFor="setting-1" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input id="setting-1" type="checkbox" className="sr-only" />
                  <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                  <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
                <div className="ml-3 text-gray-700 font-medium">Option for Setting 1</div>
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="p-5">Setting 2</div>
          <div className="p-5 flex gap-2 items-center">
            <div className="flex items-center justify-center w-full mb-12">
              <label htmlFor="setting-2" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input id="setting-2" type="checkbox" className="sr-only" />
                  <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                  <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
                <div className="ml-3 text-gray-700 font-medium">Option for Setting 2</div>
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="p-5">Setting 3</div>
          <div className="p-5 flex gap-2 items-center">
            <div className="flex items-center justify-center w-full mb-12">
              <label htmlFor="setting-3" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input id="setting-3" type="checkbox" className="sr-only" />
                  <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                  <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
                <div className="ml-3 text-gray-700 font-medium">Option for Setting 3</div>
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="p-5">Setting 4</div>
          <div className="p-5 flex gap-2 items-center">
            <div className="flex items-center justify-center w-full mb-12">
              <label htmlFor="setting-4" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input id="setting-4" type="checkbox" className="sr-only" />
                  <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                  <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
                <div className="ml-3 text-gray-700 font-medium">Option for Setting 4</div>
              </label>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Settings;
