import React from 'react'

function AboutUs() {
  return (
   <div>
    <section id="about" className="py-8 p-8 pt-0">
            <div className="company-values py-16">
                <h3 className="text-xl md:text-4xl font-bold mb-4 text-blue-500 bg-black p-2"  style={{"fontFamily": 'Montserrat'}}>Our Values</h3>
                <ul className="list-disc list-inside text-md md:text-xl">
                    <li className="mb-2"><strong>Quality Excellence:</strong> We take pride in producing prints of the highest quality, setting industry standards with every project.</li>
                    <li className="mb-2"><strong>Customer-Centric Approach:</strong> Your satisfaction is our priority. We work closely with clients, understanding their needs to create prints that exceed expectations.</li>
                    <li className="mb-2"><strong>Innovation:</strong> Embracing innovation, we blend traditional printing techniques with modern technologies for cutting-edge solutions.</li>
                </ul>
            </div>

            
    {/**
            <div className="meet-the-team mb-8 py-16">
                <h3 className="text-xl md:text-4xl font-bold mb-4 text-blue-500 bg-black p-2"  style={{"fontFamily": 'Montserrat'}}>Meet the Team</h3>
                <ul className="list-disc list-inside text-md md:text-2xl">
                    <li className="mb-2"><strong>Mr. Nagjibhai Mangukiya</strong> - Founder & CEO</li>
                    <li className="mb-2"><strong>Mr. Bhaveshbhai Mangukiya</strong> - Head of Supply</li>
                    <li className="mb-2"><strong>Mr. Bharatbhai Mangukiya</strong> - Production Manager</li>
                    <li className="mb-2"><strong>Mr. Sanjaybhai Mangukiya</strong> - Production Manager</li>
                </ul>
            </div>
     */}
            <div className="company-mission py-16">
                <h3 className="text-xl md:text-4xl font-bold mb-4 text-blue-500 bg-black p-2"  style={{"fontFamily": 'Montserrat'}}>Our Mission</h3>
                <p className='text-md md:text-2xl'> Offset's mission is to be the preferred printing partner for individuals and businesses seeking excellence. We strive to uphold our legacy of craftsmanship while embracing innovation, creating prints that leave a lasting impact.</p>
            </div>
    </section>
    </div>
  )
}

export default AboutUs