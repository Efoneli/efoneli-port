import React from 'react'

const Contact = () => {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyg5LiO5aMlaYfsGqNSND73p5FPvfq7gu7ntMnf5iIJmgQqux6y-lN54zodUS-jaWaEqw/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div name='contact' className='w-full bg-[#0a192f] flex justify-center items-center'>
        <form onSubmit={(e) => Submit(e)} className='form flex flex-col max-w-[600px] w-full'>
            <div className='py-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or send me an email -<span className='font-2xl text-pink-600 cursor-pointer hover:text-pink-400'> efonelisarah@gmail.com</span></p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-lg' type="text" placeholder='Name' name='Name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-lg' type="email" placeholder='Email' name='Email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-lg' name="Message" rows="5" placeholder='Message'>
            </textarea>
            <button className='text-gray-300 border-2 border-pink-600 rounded-lg w-full text-center hover:bg-pink-600 hover:border-gray-200 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact


// export default function App() {
//   function Submit(e) {
//     const formEle = document.querySelector("form");
//     const formDatab = new FormData(formEle);
//     fetch(
//       "https://script.google.com/macros/s/AKfycbxUX4hu2QEQ7r9TwrSo9vAHydDXv4VwtEDUacCifXaEecIH2bWHQSnFWtd9NdNIUVGDdQ/exec",
//       {
//         method: "POST",
//         body: formDatab
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   return (
//     <div className="App">
//       <h1>Contact Me form</h1>
//       <h2>
//         This demonstrates how to send data from a website form to Google sheet
//         in React or Vanilla jS
//       </h2>
//       <div>
//         <form className="form" onSubmit={(e) => Submit(e)}>
//           <input placeholder="Your Name" name="Name" type="text" />
//           <input placeholder="Your Email" name="Email" type="text" />
//           <input placeholder="Your Message" name="Message" type="text" />
//           <input name="Name" type="submit" />
//         </form>
//       </div>
//     </div>
//   );
// }