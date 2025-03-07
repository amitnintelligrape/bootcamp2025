import React from "react";
import Button from "./Button";
const Popup = ({onClose})=>{
    return(
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg w-96 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Modal Title</h2>
          <p className="text-gray-600 mb-4">This is a simple modal popup.</p>
          <Button
            onClick={onClose}
            children={'Close'}
          />
        </div>
      </div>
    )
}

export default Popup;