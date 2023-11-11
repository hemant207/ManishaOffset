import React from 'react'

function About() {
  return (
    <>
    <div>
        <div className='mb-8 p-2 pt-16' >
                <div className='p-2'>
                <h2 className="text-xl md:text-4xl font-bold mb-8 text-blue-500 bg-black p-2"  style={{"fontFamily": 'Montserrat'}}>ABOUT A OFFSET</h2>
                <p className="text-md md:text-2xl mb-8 leading-relaxed">Welcome to MANISHA OFFSET, where printing expertise meets a legacy of <span className='text-red-300'><i><b>22 years</b></i></span>. Established in 1976 by our founder,Mr. Nagjibhai,  <span className='text-red-300'><i><b>MANISHA OFFSET</b></i></span> has been a stalwart in the printing industry, offering unparalleled quality and service.</p>
                </div>
                <br/>
               
                <div className="company-journey mb-8">
                    <h3 className="text-xl md:text-4xl font-bold mb-4 text-blue-500 bg-black p-2"  style={{"fontFamily": 'Montserrat'}}>Our Journey</h3>
                    <p className='text-md md:text-2xl'>From our roots in <span className='text-red-300'><i><b>Surat</b></i></span>, MANISHA OFFSET has grown into a distinguished printing press with a rich history of craftsmanship and dedication. Over the years, we've evolved to embrace technological advancements while staying true to our commitment to delivering exceptional prints.</p>
                </div>
        </div>

        <section id="services">
        <h3 className="text-xl md:text-4xl font-bold mb-4 text-blue-500 bg-black p-2"  style={{"fontFamily": 'Montserrat'}}>Our Services</h3>
          <div className="mb-8 text-black px-4">
           
            <div className='md:grid grid-cols-12 bg-zinc-200 p-4 border-2 rounded-md shadow-md shadow-grey-200 border-black'>
                <div className='col-span-4'>
                    <img src='https://i.etsystatic.com/17509009/r/il/75b030/3902093192/il_794xN.3902093192_a5yk.jpg' style={{'height':"400px",'width':'400px'}}/>
                </div>

                <div className='col-span-8 content-center'>
                    <p className="text-md md:text-2xl">
                    <strong>Diamond Packages:</strong> <br/><br/> Transforming your ideas into tangible luxury, our diamond packages redefine elegance. Whether it's for special occasions or corporate events, our bespoke designs make a lasting impression.
                    </p>
                </div>
            
            </div>
            <br/>
            <div className='md:grid grid-cols-12 bg-zinc-200 p-4 border-2 rounded-md shadow-md shadow-grey-200 border-black'>
                <div className='col-span-4'>
                    <img src='https://img.freepik.com/free-vector/clean-style-modern-business-card-template_1017-30352.jpg' style={{'height':"400px",'width':'400px'}}/>
                </div>

                <div className='col-span-8'>
                    <p className="text-md md:text-2xl">
                    <strong>Visiting Cards:</strong> <br/><br/> In a world where first impressions matter, our visiting cards speak volumes. Explore a range of styles and materials to leave a lasting mark in the business landscape.
                    </p>
                </div>
            </div>
            <br/>
            <div className='md:grid grid-cols-12 bg-zinc-200 p-4 border-2 rounded-md shadow-md shadow-grey-200 border-black'>
            <div className='col-span-4'>
                    <img src='https://previews.123rf.com/images/lumitar/lumitar1805/lumitar180500017/101770242-set-of-wedding-invitation-card-templates-with-watercolor-rose-flowers-elegant-romantic-layout-with.jpg' style={{'height':"400px",'width':'400px'}}/>
                </div>

                <div className='col-span-8'>
                    <p className="text-md md:text-2xl">
                    <strong>Invitation Cards:</strong> <br/><br/>Celebrate life's moments with uniquely crafted invitation cards. From weddings to corporate events, we tailor designs that capture the essence of your special occasions.
                    </p>
                </div>
            </div>
            
        </div>
        </section>
    </div>
    </>
  )
}

export default About