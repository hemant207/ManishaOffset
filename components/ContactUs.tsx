import axios from 'axios';
import React, { useRef } from 'react'

function ContactUs() {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);


  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try{
      const formdata = {
        'name':name.current?.value,
        'email':email.current?.value,
        'message':message.current?.value
      }
      axios.post('http://localhost:3080/sendemail',formdata).then((res)=>{
        alert(res.data);
        window.location.reload();
      }).catch((error)=>{
        console.log(error);
        alert('problem occur. try again after while.......')
        window.location.reload();
      })
    }
    catch(error){
      alert('problem occur. try again after while.......')
      console.log(error);
      window.location.reload();
    }
   

  }
    return (
        <div className='bg-slate-50 text-black'>
          <section id="contact" className="py-16 px-8" >
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-blue-500" style={{"fontFamily": 'Montserrat'}}>Contact Us</h2>
    
              <form className="max-w-md mx-auto">
                <div className="mb-4">
                  <label htmlFor="name"  className="block text-xl font-semibold mb-2">Name</label>
                  <input
                    ref={name}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Your Name"
                    required
                  />
                </div>
    
                <div className="mb-4">
                  <label htmlFor="email" className="block text-xl font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    ref={email}
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Your Email"
                    required
                  />
                </div>
    
                <div className="mb-4">
                  <label htmlFor="message" className="block text-xl font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    ref={message}
                    name="message"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
    
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                  onClick={(e)=>HandleSubmit(e)}
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      );
    
}

export default ContactUs
