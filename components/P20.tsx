"use client"
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const P20 = () => {
  const [canMove, setCanMove] = useState(false)
  const [canScale, setCanScale] = useState(false)
  const [canExpand, setCanExpand] = useState(false)
  const [canMoveScale, setCanMoveScale] = useState(false)

  const handleMove = () => {
    setCanMove(true)
  }
  const handleScale = () => {
    setCanScale(true)
  }
  const handleExpand = () => {
    setCanExpand(!canExpand)
  }
  const handleMoveScale = () => {
    setCanMoveScale(!canMoveScale)
  }
  useEffect(() => {
    if (canMove) {
      setTimeout(() => setCanMove(false), 1000)
    }
    if (canScale) {
      setTimeout(() => setCanScale(false), 1000)
    }

  }, [canMove, canScale])

  return (
    <div className='p-20 space-y-12 box-border w-full h-[100vh] overflow-y-auto overflow-hidden relative border'>
      <div>
        <h1>移动</h1>
        <div className={twMerge('w-[200px] h-[200px] bg-orange-400',
          canMove && "animate-move1"
        )} />
        <button
          onClick={handleMove}
          disabled={canMove}
          className='p-2 bg-blue-400 text-white rounded-md disabled:opacity-50'>
          move
        </button>
      </div>

      <div>
        <h1>放大</h1>
        <div className={twMerge('w-[200px] h-[200px] bg-orange-400',
          canScale && "animate-scale"
        )} />
        <button
          onClick={handleScale}
          disabled={canScale}
          className='p-2 bg-blue-400 text-white rounded-md disabled:opacity-50'>
          scale
        </button>
      </div>

      <div>
        <h1>从小到大,从大到小</h1>
        <div className={twMerge('w-0 h-[200px] bg-orange-400',
          canExpand ? "animate-expand w-[200px] " :
            "animate-zoom w-0 "
        )} />
        <button
          onClick={handleExpand}
          className='p-2 bg-blue-400 text-white rounded-md disabled:opacity-50'>
          expand
        </button>
      </div>

      <div className=''>
        <h1>从小到大,从起点到中间</h1>
      </div>
      <div className={twMerge('fixed w-0 h-0 left-3 top-3 z-[10] opacity-0 bg-orange-400',
        canMoveScale ? "animate-MoveScale w-[200px] h-[200px] opacity-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" :
          "animate-zoom w-0 "
      )} />
      <button
        onClick={handleMoveScale}
        className='p-2 bg-blue-400 text-white rounded-md disabled:opacity-50'>
        MoveScale
      </button>

    </div>
  )
}

export default P20
