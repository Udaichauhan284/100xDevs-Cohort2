import { useState } from 'react'

import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'

//using recoil and atom you need to enlcose MainApp where atom are used inside RecoilRoot
function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}
function MainApp(){
  const networkNotification = useRecoilValue(networkAtom);
  const jobNotification = useRecoilValue(jobAtom);
  const notification = useRecoilValue(notificationAtom);
  const messageNotification = useRecoilValue(messageAtom);
  const totalNotification = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      <button>Network {networkNotification >=100 ? "99+" : networkNotification}</button>
      <button>Job {jobNotification}</button>
      <button>Notification {notification}</button>
      <button>Message {messageNotification}</button>

      <button>Me {totalNotification}</button>
    </>
  )
}

export default App
