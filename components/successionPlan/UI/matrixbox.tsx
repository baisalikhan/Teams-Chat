import React from 'react'

function Matrixbox({ text, bgColor }: { text: number; bgColor: string }) {
    return (
        <div className={`${bgColor} border border-slate-400 w-24 ml-2 flex items-center justify-center text-lg rounded font-bold`}>{text}</div >
    )
}

export default Matrixbox