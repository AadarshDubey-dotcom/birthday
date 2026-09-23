import Ably from "ably";

const ably = new Ably.Realtime("KKHS3w.AALi7g:BK2rrNgvHM5JiL6y4FUYKjW95PnzoqIqDjHV_Q5t_0I");

export const giftChannel = ably.channels.get("gift-channel");
