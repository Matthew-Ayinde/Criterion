import React from 'react'
import Image from 'next/image'

const HomePageComponent = () => {
  return (
    <div className=''>
      <div className='flex lg:flex-row flex-col'>
        <div className="w-1/2 lg:mt-48 px-20">
          <div className='text-7xl font-light'>
            <div>CREATING</div>
            <div className='text-[#A49031]'>TOMORROW'S SPACES,</div>
            <div>INSPIRED BY TODAY'S NEEDS</div>
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
        <div className='w-1/2'>
          <Image 
            src="/building.png"
            width={1000}
            height={100}
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

    </div>
  )
}

export default HomePageComponent