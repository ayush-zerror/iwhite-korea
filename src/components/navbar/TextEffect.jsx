import gsap from 'gsap'
import Link from 'next/link'
import React from 'react'

const TextEffect = ({text , to ,id}) => {
    const letters = text.split('')
    const splitText = letters.map(l=> l == " " ? <span>&nbsp;</span> :<span className='inline-block'>{l}</span>)
    const handleMouseEnter = (idx) => {
        const [t1 , t2] = document.querySelector(`.textEff-${idx}`).children
        gsap.to(t1.querySelectorAll('span'),{
            y:"-110%",
            stagger:{
                amount:.2
            },
            duration:.3
        })
        gsap.to(t2.querySelectorAll('span'),{
            y:"-100%",
            stagger:{
                amount:.2
            },
            duration:.3
        })
    }
    const handleMouseLeave = (idx) => {
        const [t1 , t2] = document.querySelector(`.textEff-${idx}`).children
        gsap.to(t1.querySelectorAll('span'),{
            y:"-0%",
            stagger:{
                amount:.2
            },
            duration:.3
        })
        gsap.to(t2.querySelectorAll('span'),{
            y:"0%",
            stagger:{
                amount:.2
            },
            duration:.3
        })
    }
  return (
    <div key={id} onMouseEnter={()=>{handleMouseEnter(id)}} onMouseLeave={()=>handleMouseLeave(id)} className={`textEff-${id} text-[1.3vw] h-[1.4vw] overflow-hidden`}>
         <Link href={to} className='block leading-none'>{splitText}</Link>
         <Link href={to} className='block leading-none'>{splitText}</Link>
    </div>
  )
}

export default TextEffect