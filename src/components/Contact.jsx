import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-auto bg-[#0a192f] flex justify-center items-center p-4 pt-40'>
        <form method='POST' action='https://getform.io/f/003a8634-d4e2-4950-ab73-5b87cd6c1381' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 pt-60 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - przemyslaw.bochnia@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='message'></textarea>
            <button className='text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
};
export default Contact
