import React, { ReactNode } from 'react'

const ChangeButton = ({ icon, changeMode }: { icon: ReactNode; changeMode: () => void }) => {
    return (
        <button
            className="text-gray-300 hover:text-white bg-blue-400 p-2 rounded-full text-xl cursor-pointer"
            onClick={() => changeMode}
        >
            {icon}
        </button>
    )
}

export default ChangeButton