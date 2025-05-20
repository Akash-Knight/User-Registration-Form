import React, { useState } from 'react'

function AuthForm() {

    const [SignB, setSignB] = useState(false);

    return (
        <div className=' wrapper flex justify-center items-center h-screen'>

            <div className='h-[25rem] w-[26rem] shadow-2xl rounded-2xl px-10 py-4'>

                <div className='duble-button space-x-5 flex justify-between pb-2 rounded-full'>

                    {/* <form> */}
                    <button className={SignB ? ' SigninB rounded-full bg-gray-500 cursor-pointer px-15' : " px-15 rounded-full bg-blue-400 p-4"} onClick={() => setSignB(false)}>SignIn</button>

                    <button className={!SignB ? ' SignupB bg-gray-500  cursor-pointer px-15 rounded-full' : " bg-blue-400 px-15 p-4 rounded-full"} onClick={() => setSignB(true)}>SignUP</button>
                    {/* </form> */}

                </div>

                {SignB ? <>

                    <div className=' bg-white flex flex-col '>

                        <h1 className=' text-3xl m-5 '>SignUP Form</h1>

                        <form className=' flex flex-col space-y-4'>

                            <input className='Email-Address border border-gray-400 p-1 rounded-md' placeholder='Email Address' ></input>
                            <input className='Password shadow-sm border border-gray-400 p-1 rounded-md' placeholder='Password' ></input>
                            <input className='Password shadow-sm border border-gray-400 p-1 rounded-md' placeholder='confirm Password' ></input>
                            <button className=' cursor-pointer bg-blue-400 p-2 rounded-md' >Sign Up</button>

                        </form>

                    </div>

                </> : <>


                    <div>
                        <h1 className=' text-3xl m-5'>Sign In Form</h1>

                        <form className=' flex flex-col space-y-3'>
                            <input className='Email-Address border border-gray-400 p-1 rounded-md' placeholder='Email Address' ></input>
                            <input className='Password shadow-sm border border-gray-400 p-1 rounded-md' placeholder='Password' ></input>

                            <a href='#' className=' cursor-pointer text-blue-500 underline'>Forget Password</a>
                            <button className=' submitB cursor-pointer bg-blue-400 p-2 rounded-md' >Sign In</button>

                        </form>

                        <p className=' translate-x-20'>Not a Member ? <spam><a href='#' onClick={() => setSignB(true)} className=' underline text-blue-400'>Sign Up</a></spam></p>


                    </div>


                </>
                }

            </div>

        </div>
    )
}

export default AuthForm
