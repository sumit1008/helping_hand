import React from 'react';

function GoogleSignIn(props) {
  return (
    <a class="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
        <img
          class="h-5 mr-2"
          src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
          alt=""
        />
        Sign {props.isLogin?"up":"in"} with Google
      </a>
  );
}

export default GoogleSignIn;