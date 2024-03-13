import React from "react";

function FormFooter(props) {
  return (
    <>
      <div class="flex flex-row justify-between mb-8">
        <label class="relative inline-flex items-center mr-3 cursor-pointer select-none">
          <input type="checkbox" checked value="" class="sr-only peer" />
          <div class="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-purple-blue-500">
            <img
              class=""
              src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
              alt="tick"
            />
          </div>
          <span class="ml-3 text-sm font-normal text-grey-900">
            Keep me logged in
          </span>
        </label>
        <a
          href="javascript:void(0)"
          class="mr-4 text-sm font-medium text-purple-blue-500"
        >
          Forget password?
        </a>
      </div>
      <button class="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">
        Sign {props.isLogin?"In":"Up"}
      </button>
    </>
  );
}

export default FormFooter;
