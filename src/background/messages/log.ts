import type { PlasmoMessaging } from "@plasmohq/messaging"
 
  const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    fetch(`http://localhost:3000/log/${req.body.activity}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // This will include cookies in the request
        body: JSON.stringify({
          url : req.body.url,
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