import React from 'react'
import Header from '../components/Header'
import Channels from '../components/Channels'
import UserInfo from '../components/UserInfo'
import ChatFeed from '../components/ChatFeed'
import ChatForm from '../components/ChatForm'
import Team from '../components/Team'

const HomeScreen = () => {
  return (
    <>
      <div className='flex flex-col min-h-screen h-screen'>
        <div className='bg-red-500 flex'>
          <div className='bg-red-300 w-56 flex-none'>Tailwind CSS</div>
          <Header />
        </div>
        <div className='flex-1 bg-blue-500 flex overflow-y-hidden'>
          <div className='bg-green-300 w-56 flex-none flex flex-col justify-between'>
            <Channels />
            <UserInfo />
          </div>
          <div className='bg-green-500 flex-1 flex justify-between'>
            <div className='bg-indigo-300 flex-1 flex flex-col justify-between'>
              <ChatFeed />
              <ChatForm />
            </div>
            <Team />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
