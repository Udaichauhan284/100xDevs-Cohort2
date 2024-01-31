// import './App.css'
// import { RecoilRoot, useRecoilValue } from 'recoil'
// import { jobAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'

// //using recoil and atom you need to enlcose MainApp where atom are used inside RecoilRoot
// function App() {
//   return <RecoilRoot>
//     <MainApp />
//   </RecoilRoot>
// }
// function MainApp(){
//   const networkNotification = useRecoilValue(networkAtom);
//   const jobNotification = useRecoilValue(jobAtom);
//   const notification = useRecoilValue(notificationAtom);
//   const messageNotification = useRecoilValue(messageAtom);
//   const totalNotification = useRecoilValue(totalNotificationSelector);

//   return (
//     <>
//       <button>Home</button>
//       <button>Network {networkNotification >=100 ? "99+" : networkNotification}</button>
//       <button>Job {jobNotification}</button>
//       <button>Notification {notification}</button>
//       <button>Message {messageNotification}</button>

//       <button>Me {totalNotification}</button>
//     </>
//   )
// }

// export default App

// code for Aysnc Code

import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    // fetch
    axios.get("https://sum-server.100xdevs.com/notifications")
      .then(res => {
        setNetworkCount(res.data)
      })
  }, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App