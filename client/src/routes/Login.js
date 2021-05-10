import React from 'react'

const Login = () => {
    return (
        <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
            <div className='flex flex-col ml-5 w-2/5'>
                <div className="flex flex-col bg-white items-center p-4 border mb-4">
                    <form method='POST'>
                        <input
                            aria-label="Enter your email address"
                            className="text-sm w-full py-5 px-2 h-2 border rounded mb-2"
                            type="text"
                            placeholder="Email address"
                        />
                        <input
                            aria-label="Enter your password"
                            className="text-sm w-full py-5 px-2 h-2 border rounded mb-2"
                            type="password"
                            placeholder="Password"
                        />
                        <button
        
                            type="submit"
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold}`}>
                            Login
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className='text-sm'>
                        Dont have an account?{' '}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
