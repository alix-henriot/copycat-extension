import type { PlasmoMessaging } from "@plasmohq/messaging"
 
  const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    const ip = await getIpAddress();

    fetch(`http://localhost:3000/log/activity`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // This will include cookies in the request
        body: JSON.stringify({
          url : req.body.url,
          os : req.body.os,
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