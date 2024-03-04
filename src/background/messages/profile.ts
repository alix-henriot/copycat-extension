import type { PlasmoMessaging } from "@plasmohq/messaging";


const API_URL = "http://localhost:3000/clipboard/all";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    console.log("Request received");
    try {
        const response = await fetch(API_URL, { method: 'GET', credentials: "include" });
        const data = await response.json(); // Assume all responses are in JSON format
        if (!response.ok) {
            console.error("Error:", data.message); // Log error message from the server
            return res.send({ error: data.message }); // Send server's error message to the frontend
        }
        res.send(data); // Send successful data response to the frontend
    } catch (error) {
        console.error("Error:", error);
        res.send({ error: "Communication error with the server. Please try again later." });
    }
};
export default handler;
