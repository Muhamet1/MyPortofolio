import React ,{useState}from 'react'
import { Button } from './Button';
const Contact = () => {
    const [button, setButton] = useState(true);


  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#10b981] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - muhametthajdini@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" required placeholder='Name...' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email"required placeholder='Email...' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" required rows="10" placeholder='Message...'></textarea>
            <br/>
            {button && <Button buttonStyle='btn--outline'>Contact Me</Button>}
        </form>
    </div>
  )
}

export default Contact