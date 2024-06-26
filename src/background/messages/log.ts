import type { PlasmoMessaging } from "@plasmohq/messaging"
 
  const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    const ip = await getIpAddress();
    const osMatch = req.body.os.match(/(win|mac|lin)/i);
    const os = osMatch ? osMatch[0].toUpperCase() : 'UNK';

    fetch(process.env.PLASMO_PUBLIC_API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          url : req.body.url,
          os : os,
          activity : req.body.activity,
          ip: ip
        }),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });

    res.send({status: 'success'})
  }
   
  export default handler

const getIpAddress = async () => {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  return data.ip;
}