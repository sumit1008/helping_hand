import React from "react";

function FormInput(props) {
  return (
    <div>
      <label for={props.type} class="mb-2 text-sm text-grey-900">
        {props.lableHead}*
      </label>
      <input
        id={props.type}
        type={props.type}
        placeholder={props.placeholder}
        class="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
      />
    </div>
  );
}

export default FormInput;
