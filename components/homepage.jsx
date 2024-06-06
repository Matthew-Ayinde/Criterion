"use client"

import React from 'react'
import { useState, useRef } from "react"
import {motion} from 'framer-motion'

import Image from 'next/image'
import building from '@/public/building.svg'
import car from '@/public/car.jpg'

const HomePageComponent = () => {
  return (
    <div className=''>
      <div className='flex lg:flex-row flex-col'>
        <div className="w-3/5 lg:mt-40 pl-[180px]">
          <div className='text-7xl font-light'>
            <div>CREATING</div>
            <div className='text-[#A49031]'>TOMORROW'S SPACES,</div>
            <div className=''>INSPIRED BY TODAY'S NEEDS</div>
          </div>
          <div className='font-medium text-2xl underline uppercase flex flex-row'>
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
        <div className='w-2/5 '>
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

    <div className="bg-[#30352F]">
      <div className='text-center pt-32 font-light text-3xl text-white mx-44 pb-44'>
        <div>We provide a full suite of services to meet all real estate needs. With a focus on innovative development, strategic investment, cutting-edge infrastructure, and expert advisory, our team is here to guide you towards success in Nigeria’s dynamic real estate market </div>
      </div>
    </div>


    {/* Embedding component */}

    <div className="bg-[#142b16] text-center lg:pl-[180px] lg:pr-[196px]">
      <div className='uppercase font-normal italic text-[104px] leading-[88px] text-[#f2f2f2] pt-[111px] pb-[88px]'>
        Embedding <span className='text-[#A49031] italic'> sustainability </span> into Everyday Living
      </div>
    </div>

    <div className='flex flex-row lg:pl-[180px] lg:pr-[196px] my-32'>
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
        <div className='text-[#191919] text-base font-normal my-4'>
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


    {/* cast component */}
    <div className='bg-[#30352F] lg:pl-[180px] lg:pr-[196px] py-44 text-[#f2f2f2]'>
      <div className='text-center'>
        <p className='uppercase text-lg font-normal mb-[67px]'>Craft your dream space brick by brick</p>
        <div className='uppercase font-light text-[72px]'>Decide today to <br /> develop a cutting-edge sustainable property.</div>
        <div className='font-medium text-2xl underline uppercase flex flex-row'>
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
    </div>
   

    {/* form component */}
    <div className="flex flex-row bg-white text-black py-44 lg:pl-[180px] lg:pr-[196px]">
      <div className="w-1/2">
        <div className='uppercase font-light text-[72px] text-[#191919] leading-[64px]'>Interested in exploring further?</div>
        <p className='uppercase text-[#191919] font-normal text-lg'>Initiate a conversation today</p>
      </div>
      <div className="pl-20 w-1/2">
      <form
          className="mt-12 flex flex-col gap-2"
        >
          <label className="flex flex-col">
            <input type="text" className="border border-black px-4 py-2" placeholder="Name" />
            
          </label>
          <label className="flex flex-col">
            <input type="email" className="border border-black px-4 py-2" placeholder="Email" />
           
          </label>
          <label className="flex flex-col">
            <input type="text" className="border border-black px-4 py-2" placeholder="Phone Number" />
          </label>

          <label className="flex flex-col">
            <input type="text" className="border border-black px-4 py-2" placeholder="Messages" />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            Send
          </button>
        </form>
      </div>
    </div>



      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque aliquam natus impedit et aperiam voluptate vero neque? Laboriosam, quas? Totam, vel? Doloribus, deserunt, ipsum fugit vitae quaerat quia quae nesciunt, explicabo similique reprehenderit recusandae voluptates nam repudiandae. Recusandae maiores fuga fugit temporibus suscipit reprehenderit sapiente, enim velit laborum iusto. Aliquid, quo. Earum voluptate placeat minus dolores praesentium nostrum animi nobis quisquam tempora. Dolor aspernatur vitae hic ipsum vel placeat, neque, odit vero porro veritatis sint eligendi? Minima similique laborum, fuga distinctio assumenda sint soluta iusto dolor necessitatibus pariatur consectetur magnam at libero repellat qui architecto tempora. Cupiditate asperiores expedita sed. Necessitatibus culpa earum ea nisi repellat veniam consectetur tempore ab sunt ipsa aliquid quo incidunt, ex, tenetur illo iste beatae repudiandae. Ducimus molestiae iste natus voluptate itaque ipsum, vel similique, eligendi placeat nemo et officia fuga corporis eius impedit suscipit officiis distinctio, hic dolores amet labore. Laborum tempora culpa, maiores assumenda, ut soluta neque dolor minus quo sed sequi nam perspiciatis delectus deserunt vero autem fugiat rerum natus veritatis aut consequatur modi quas? Officia ipsa tempora quae nisi, nobis nihil cum obcaecati dolorem exercitationem omnis ratione deserunt assumenda atque minus dolor cumque dignissimos distinctio voluptates porro. Numquam officiis commodi veniam.
    <div>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus esse a magni. Necessitatibus quidem obcaecati soluta commodi aliquid hic rem ipsam ab aliquam, non, perferendis quibusdam temporibus natus. Nemo animi corporis id error ullam beatae nobis, ea accusantium explicabo molestias qui, eum ipsum? Asperiores molestiae sunt quae, et dicta adipisci eligendi excepturi atque dolor sit. Aut, quibusdam reiciendis. Consectetur autem doloribus aut fugiat sed placeat accusantium blanditiis odio facilis beatae quidem ea, distinctio qui cupiditate earum numquam. Nostrum ullam quisquam quis perferendis laboriosam nobis optio delectus maxime suscipit, quae soluta eligendi voluptate aperiam tenetur quibusdam dolores accusamus explicabo nisi animi, odit doloremque porro eum esse tempora. Sapiente eligendi officia vero earum. Facilis placeat commodi reiciendis! Harum quis deserunt optio dolorum? Praesentium nostrum, ratione id asperiores deleniti voluptatum veritatis maxime explicabo ipsum aliquam, soluta sit minima? Corrupti nihil tempore eveniet nam voluptate accusamus expedita non error obcaecati, ipsum quae reiciendis iusto, ex possimus sapiente eaque aperiam. Eos minus odit nesciunt, accusantium non repellat magnam nisi suscipit expedita. Culpa cumque quod consequatur nobis! Obcaecati atque error, modi accusantium nisi sit, nulla perferendis minima consequatur quae voluptate facilis totam repellat id repudiandae et. Cumque sapiente sunt dolor reprehenderit dolore ex ullam veritatis et. consectetur adipisicing elit. Ullam vero accusamus beatae ducimus autem exercitationem quod laborum libero qui animi illo officiis, aperiam voluptate et ipsa doloribus adipisci voluptatum. Doloribus deleniti dolorem libero! Ipsum veniam reprehenderit cum molestiae tenetur ab, similique voluptate suscipit molestias vel earum placeat ducimus in magni sunt, sed vitae aspernatur eius necessitatibus, quos quod! Repudiandae error maiores dolorum, explicabo laudantium quaerat, dolorem repellat culpa odit iure quis. Nesciunt, eligendi. Molestias non aperiam consectetur animi illo voluptates, reprehenderit laudantium doloribus laborum ullam in! Possimus obcaecati error quas dolorum molestiae eligendi, animi officiis soluta assumenda voluptatem enim optio illo qui deserunt, dolor aliquam. Ipsum quaerat nemo iure commodi eos maiores nobis enim accusantium dolores, deleniti quis? Unde eos labore vel mollitia hic incidunt, voluptatum nostrum ex aut, eveniet expedita quas, impedit laborum cupiditate aliquid. Repellendus, nemo enim amet quas cumque temporibus dicta laboriosam? Incidunt non impedit assumenda laudantium architecto sit in mollitia? Maiores molestiae eveniet quidem. Atque culpa ducimus odit perspiciatis id, sint aliquam ad accusamus minus aperiam numquam asperiores dolor deserunt possimus quaerat tempore esse sed aliquid at ipsum odio! Beatae, id? Ea magni esse earum mollitia nisi illum expedita natus! Perspiciatis sed et libero facilis vero.</div>

    </div>
  )
}

export default HomePageComponent