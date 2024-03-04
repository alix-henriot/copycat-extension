import type { PlasmoMessaging } from "@plasmohq/messaging";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const API_URL = "http://localhost:3000/clipboard/update";
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ clipboardId: req.body.clipboardId, value: req.body.newValue })
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const updatedClipboard = await response.json();
    res.send({ updatedClipboard });

  } catch (error) {
    console.error("Update clipboard error:", error);
    throw error;
  }
};

export default handler