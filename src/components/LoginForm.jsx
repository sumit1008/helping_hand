import React from 'react';
import GoogleSignIn from './GoogleSignIn';
import FormInput from './FormInput';
import FormContainer from './FormContainer';

function LoginForm() {
  return (
    <div class="bg-white rounded-lg py-5">
        <div class="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
          <div class="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
            <div class="flex items-center justify-center w-full lg:p-12">
              <div class="flex items-center xl:p-10"> 
                <FormContainer/>
                {/* <GoogleSignIn/> */}
                {/* <FormInput/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default LoginForm;