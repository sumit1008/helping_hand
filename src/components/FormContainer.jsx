import { useState } from "react";
import GoogleSignIn from "./GoogleSignIn";
import FormInput from "./FormInput";
import FormFooter from "./FormFooter";

function FormContainer() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <form class="flex flex-col w-full h-full bg-white rounded-3xl">
      <h3 class="mb-7 text-4xl font-extrabold text-center text-dark-grey-900">
        Sign {isLogin?"Up":"In"}
      </h3>
      <GoogleSignIn isLogin={isLogin} />
      <div class="flex items-center mb-3">
        <hr class="h-0 border-b border-solid border-grey-500 grow" />
        <p class="mx-4 text-grey-600">or</p>
        <hr class="h-0 border-b border-solid border-grey-500 grow" />
      </div>
      <FormInput
        lableHead="Email"
        type="email"
        placeholder="mail@loopple.com"
      />
      <FormInput
        lableHead="Password"
        type="password"
        placeholder="Enter a password"
      />

      {isLogin ? (
        <FormInput
          lableHead="Confirm Password"
          type="password"
          placeholder="Confirm password"
        />
      ) : (
        <></>
      )}

      <FormFooter isLogin={isLogin}/>

      {isLogin ? (
        <p class="text-sm-relaxed text-grey-900">
          already registered?
          <a class="font-bold text-grey-700 cursor-[url(hand.cur),_pointer]" onClick={() => {
            setIsLogin(!isLogin);
          }}>Login account</a>
        </p>
      ) : (
        <p class="text-sm-relaxed text-grey-900">
          Not registered yet?
          <a class="font-bold text-grey-700 cursor-[url(hand.cur),_pointer]" onClick={() => {
            setIsLogin(!isLogin);
          }}>Create an Account</a>
        </p>
      )}
    </form>
  );
}

export default FormContainer;
