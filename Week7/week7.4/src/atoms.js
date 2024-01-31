import {atom, selector} from "recoil"
export const networkAtom = atom({
  key: "networkAtom",
  default: 101
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 3
});

export const notificationAtom = atom({
  key: "notificaionAtom",
  default: 20
});

export const messageAtom = atom({
  key: "messageAtom",
  default: 2
});

export const totalNotificationSelector = selector({
  key : "totalNotificationSelector",
  //value take a function, which give us get 
  get: ({get}) => {
    const networkAtomCount = get(networkAtom);
    const jobAtomCount = get(jobAtom);
    const notificaionAtomCount = get(notificationAtom);
    const messageAtomCount = get(messageAtom);
    return networkAtomCount + jobAtomCount + notificaionAtomCount + messageAtomCount;
  }
})