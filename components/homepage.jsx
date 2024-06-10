"use client"

import React from 'react'
import { useState, useRef } from "react"
import {motion} from 'framer-motion'

import Image from 'next/image'
import building from '@/public/building.svg'
import car from '@/public/car.jpg'
import whiteArrow from '@/public/whiteArrow.svg'

const HomePageComponent = () => {
  return (
    <div className=''>
      <div className='flex lg:flex-row flex-col backgroundImage'>
        <div className="w-3/5 lg:mt-40 pl-[180px]">
          <div className='text-7xl font-light'>
            <div>CREATING</div>
            <div className='text-[#A49031]'>TOMORROW'S SPACES,</div>
            <div className=''>INSPIRED BY TODAY'S NEEDS</div>
          </div>
          <div className='font-medium text-2xl bg-[#A49031] w-2/5 p-[30px] py-[10px]  text-white uppercase flex flex-row'>
            <span className='font-semibold text-base'>Get in Touch </span>
            <span className="w-5 h-5 ml-2 pl-2 pt-1">
              <Image 
                src="/whiteArrow.svg"
                width={20}
                height={20}
                alt='white arrow'
              />  
            </span>   
            </div>
        </div>
        <div className='w-2/5'>
        <Image 
            src={building}
            layout=""
            objectFit="cover"
            objectPosition="center"
            className='w-full'
          />  
        </div>
      </div>

      <div className='px-20'>
    {/* <p>Lorem ipsum, dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae tempuid maxime nemo fugiat enim neque repellendus deserunt, at cum rerum voluptatibus, quasi consequuntur aperiam minus, reiciendis provident? Veniam suscipit error odio asperiores? Totam quae illo quisquam velit commodi, et consectetur. Ipsam praesentium magnam nostrum consectetur provident a pariatur dolor assumenda architecto. Culpa itaque amet quae cumque similique eaque praesentium ratione rerum quasi beatae, eligendi a voluptatem suscipit, facere quia aliquid. Error officiis odio, blanditiis a eius esse, nam animi reprehenderit quisquam, id repellendus cumque minima sit asperiores eligendi saepe voluptatem. Minus, error numquam. Officia suscipit, dolores neque quisquam ad illum voluptatem mollitia tempora praesentium incidunt velit adipisci illo porro excepturi alias reiciendis tempore, repudiandae eum aliquam sunt? Atque quo quidem aliquam veniam nemo vero sequi, deleniti non dicta, repudiandae corporis natus itaque laboriosam, dolore dolorum minima officia deserunt animi fuga ipsa soluta sunt recusandae quod. Facilis, vel. Quis pariatur recusandae rerum vitae, natus aliquam ea consectetur rem fuga eaque, quod voluptas, nesciunt iste reprehenderit dolorem harum est adipisci necessitatibus odit ab eligendi. Nemo repellendus iusto rem eum deserunt eos corporis! Hic soluta, odit dolor quidem assumenda aspernatur libero eius provident perferendis non facilis ad reprehenderit possimus autem quasi sequi inventore, deleniti, excepturi ab! Possimus fugit laboriosam non accusamus minus officia aspernatur voluptatem saepe at? Reiciendis similique nam blanditiis ex impedit quidem beatae animi ab incidunt ipsam doloremque aut magnam optio omnis suscipit, voluptatum tempora velit! Eius necessitatibus et aut ipsam quae placeat dolores nulla voluptatibus assumenda autem molestiae exercitationem accusantium animi amet consequatur esse neque unde, excepturi sed ipsum. Voluptatem reprehenderit blanditiis debitis, praesentium quae mollitia a sit nesciunt nostrum. Numquam quia neque voluptatum temporibus illo earum, enim alias obcaecati asperiores quas esse doloremque corrupti sint hic sunt accusamus sequi praesentium debitis incidunt a totam facere nihil dolores. Fugit asperiores, enim aspernatur debitis eum autem molestias illum quisquam. Eaque magni accusamus, id, qui culpa ipsam animi ut doloribus enim mollitia praesentium quo corporis ipsum illo distinctio recusandae optio. Delectus nesciunt pariatur magni vero maxime. Iste saepe libero quo error aspernatur magnam iure at omnis est nulla, repellat veniam tenetur rerum minima numquam qui tempore consequatur sit illo molestiae. Tempore in maiores illo consequatur blanditiis delectus dignissimos minima, neque amet ea sapiente, modi id molestias nobis eius nam sed! Similique facilis totam repellendus exercitationem incidunt in error, quae quis neque porro eius magnam. Et quasi autem sint vel ratione dolorum ipsa? Vitae dignissimos quidem voluptate molestiae at doloribus quis eum temporibus expedita, nisi obcaecati eveniet praesentium aut reprehenderit alias minus sunt numquam ipsum repellendus tempore recusandae unde autem aliquid dolorem. Laudantium, consequuntur. Voluptatibus magni sed fugit aliquam natus nam, vitae non eaque at quasi? Eveniet vel voluptates id, temporibus quos minus, quidem natus corporis vitae dignissimos ipsa recusandae cum beatae modi quam maxime ducimus fugit! A consequatur ipsa doloremque velit quia ex dolorem rerum itaque reprehenderit odit id expedita praesentium dolor distinctio pariatur, eos , ea quia qui? Rerum iure, nisi mollitia debitis est ad voluptatem odit suscipit eius perspiciatis, incidunt cupiditate iste sint nesciunt ratione illo dignissimos voluptatibus provident ipsa. Quibusdam fugit corporis voluptatum rerum, ducimus distinctio nihil assumenda laudantium alias officiis cumque animi voluptates vero, quod, pariatur eligendi sunt rem. Magnam consequuntur commodi unde doloremque voluptatibus?</p> */}
      </div>

    <div className='w-full bg-[#625834] text-white py-2'>
      <div className='flex flex-row text-center justify-between'>
      <div className='text-2xl'>INVESTMENT</div>
      <div className="w-3 h-3 mx-8 my-3 bg-white rounded-full"></div>
      <div className='text-2xl'>INFRASTRUCTURE</div>
      <div className="w-3 h-3 mx-8 my-3 bg-white rounded-full"></div>
      <div className='text-2xl'>ADVISORY</div>
      <div className="w-3 h-3 mx-8 my-3 bg-white rounded-full"></div>
      <div className='text-2xl'>REAL ESTATE</div>
      <div className="w-3 h-3 mx-8 my-3 bg-white rounded-full"></div>
      </div>
    </div>
       
      <div className="w-full">
        <Image 
          src="/hallway.png"
          width={1500}
          height={100}
          alt="hallway picture"
        />
      </div>

      <div className='w-full bg-[#625834] text-white py-2'>
      <div className='flex flex-row text-center justify-between'>
      <div className='text-2xl'>INVESTMENT</div>
      <div className="w-3 h-3 mx-8 my-3 bg-white rounded-full"></div>
      <div className='text-2xl'>INFRASTRUCTURE</div>
      <div className="w-3 h-3 mx-8 my-3 bg-white rounded-full"></div>
      <div className='text-2xl'>ADVISORY</div>
      <div className="w-3 h-3 mx-8 my-3 bg-white rounded-full"></div>
      <div className='text-2xl'>REAL ESTATE</div>
      <div className="w-3 h-3 mx-8 my-3 bg-white rounded-full"></div>
      </div>
    </div>

    {/* Embedding component */}

    <div className='embedBackground'>
    <div className="text-center">
      <div className='uppercase font-normal italic text-[70px] mx-48 leading-[88px] text-[#f2f2f2] pt-[111px] pb-[200px]'>
        Embedding <span className='text-[#A49031] italic'> sustainability </span> into Everyday Living
      </div>
    </div>
    </div>

    {/* Transcending BG */}

    <div className='transcendBackground'>
      <div className="lg:pl-[180px] lg:pr-[196px]  ">

        <div style={{ position: "relative", width: "100%", height: "294px", zIndex: 4 }}>
        <Image
          alt="Mountains"
          src='/embed-image.png'
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        </div>
      </div>
      <div className='flex flex-row lg:pl-[180px] lg:pr-[196px] py-32'>
        <div className='w-2/5'>
          <div className='font-normal text-[32px] text-[#191919] pr-5'>
          Transcending the realm of mere service providers. We are architects of opportunities
          </div>
          <div className='font-medium text-2xl underline uppercase flex flex-row mt-5'>
              <div>Get in Touch </div>
              <div className="w-8 h-8 mx-2 bg-[#DC7322] rounded-full pl-2 pt-1">
                <Image 
                  src="/whiteArrow.svg"
                  width={20}
                  height={20}
                  alt='white arrow'
                />  
              </div>   
              </div>
        </div>
        <div className='w-3/5 ml-32'>
          <div className='text-[#191919] text-base font-normal my-2'>
          Our unwavering commitment extends to:
          </div>
          <div className='flex flex-row'>
            <div className='w-1/2 mr-3'>
              <div>
                <div className='mb-6'>
                  <p className='text-lg font-bold '>REAL ESTATE</p>
                  <p className='font-light text-base'>Transforming the real estate landscape in Nigeria, we specialize in creating exceptional spaces that blend modern design with lasting value. </p>
                </div>
                <div>
                  <p className='text-lg font-bold '>ADVISORY</p>
                  <p className='font-light text-base'>Transforming the real estate landscape in Nigeria, we specialize in creating exceptional spaces that blend modern design with lasting value. </p>
                </div>
              </div>
            </div>
            <div className='w-1/2'>
              <div>
                <div className='mb-6'>
                  <p className='text-lg font-bold '>REAL ESTATE</p>
                  <p className='font-light text-base'>Transforming the real estate landscape in Nigeria, we specialize in creating exceptional spaces that blend modern design with lasting value. </p>
                </div>
                <div>
                  <p className='text-lg font-bold '>ADVISORY</p>
                  <p className='font-light text-base'>Transforming the real estate landscape in Nigeria, we specialize in creating exceptional spaces that blend modern design with lasting value. </p>
                </div>
                <div className='underline mt-3 font-normal text-base'>Read more about us</div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>


    {/* cast component */}
    <div className='developBackground'>
      <div className='lg:pl-[180px] lg:pr-[196px] py-44 text-[#f2f2f2]'>
        <div className='text-center'>
          <p className='uppercase text-lg font-normal mb-[67px]'>Craft your dream space brick by brick</p>
          <div className='uppercase font-light text-[72px] leading-[64px]'>Develop a cutting-edge sustainable property.</div>
        </div>
      <div>
        <div style={{ position: "relative", width: "100%", height: "500px"  }}>
        <Image
          alt="Mountains"
          src="/develop-home.png"
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
        </div>
      </div>
      </div>
    </div>
   

    {/* form component */}
    <div className='formBackground'>
      <div className="flex flex-row  text-black py-44 lg:pl-[180px] lg:pr-[196px]">
        <div className="w-1/2">
          <div className='uppercase font-light text-[72px] text-[#191919] leading-[64px]'>Interested in exploring further?</div>
          <p className='uppercase text-[#191919] font-normal text-lg'>Initiate a conversation today</p>
        </div>
        <div className="pl-20 w-1/2">
        <form
            className="flex flex-col gap-2"
          >
            <label className="flex flex-col">
              <input type="text" className="border bg-[#F4F4F4] border-black placeholder:font-light placeholder:text-base placeholder:text-[#191919]  px-4 py-2" placeholder="FULL NAME" />
              
            </label>
            <label className="flex flex-col">
              <input type="text" className="border bg-[#F4F4F4] border-black placeholder:font-light placeholder:text-base placeholder:text-[#191919]  px-4 py-2" placeholder="PHONE" />
            </label>
            <label className="flex flex-col">
              <input type="email" className="border bg-[#F4F4F4] border-black placeholder:font-light placeholder:text-base placeholder:text-[#191919]  px-4 py-2" placeholder="EMAIL" />
            </label>
            <label className="flex flex-col">
              <textarea rows={3} name="message" placeholder="MESSAGE" className="border bg-[#F4F4F4] border-black placeholder:font-light placeholder:text-base placeholder:text-[#191919]  px-4 py-2" />
            </label>

            <button
              type="submit"
              className="w-[231px]"
            >
              <div className='text-left text-white bg-[#DC7322] py-1'>
                <span className='text-base font-semibold px-8'>Start Conversation</span>
                {/* <span style={{ position: "relative", width: "300px", height: "500px" }}>
                  <Image 
                    src={whiteArrow}
                    alt='white arrow'
                    sizes='100vw'
                    style={{
                      objectFit: 'cover'
                    }}
                  />
                </span> */}
                
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>



    </div>
  )
}

export default HomePageComponent