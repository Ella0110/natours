"use client"

import Image from "next/image"
import Button from "../component/Button"
import nextConfig from "../../../next.config.mjs"
import PopupBox from "../component/PopupBox"

export default function Popup() {

  return (

    <PopupBox>

      <div className="w-1/3 table-cell">
          <Image src={`${nextConfig.basePath}/img/nat-8.jpg`} alt="TOUR PHOTO" width={800} height={800} 
          className="w-full h-full block"/>
          <Image src={`${nextConfig.basePath}/img/nat-9.jpg`} alt="TOUR PHOTO" width={800} height={800} 
          className="w-full h-full block"/>
        </div>

        <div className="w-2/3 table-cell py-7 px-10 align-middle text-left">
          <a href="#section-tours" className="absolute top-5 right-5 text-3xl inline-block 
          transition-all hover:text-green-500">&times;</a>
          <h2 className="heading-secondary mb-8 mt-10">Start booking now</h2>
          <h3 className="text-base font-bold uppercase mb-6">Important &ndash; Please read these terms before booking</h3>
          <p className="text-base mb-16 columns-2 gap-x-16 column-rule">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi amet ea, illum officiis maiores quam aperiam tempore a et ab adipisci distinctio nam. Recusandae fuga doloribus eum exercitationem quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dolorum deleniti atque labore eum, quod, dolorem temporibus nostrum ipsa corporis sequi facere ducimus! Praesentium eligendi dicta quasi deserunt, vero pariatur.</p>
          <Button href="#section-tours" variant="green" size="medium">Book now!</Button>
        </div>

    </PopupBox>
  )
}