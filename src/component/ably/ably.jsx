import Ably from "ably";

const ably = new Ably.Realtime("YOUR_ABLY_API_KEY");
const channel = ably.channels.get("gift-channel");
