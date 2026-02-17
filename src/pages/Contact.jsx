

const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };


  return (
    <section className='section-contact'>
      <h2 className='container-title'>Contact Us</h2>
        
     <div className='contact-wrapper container'>
       <form action={handleFormSubmit}>
        <input 
        type="text"
        className='form-control'
        name='username'
        placeholder='Enter Your Name'
        required
        autoComplete='false'
         />

         <input 
        type="Email"
        className='form-control'
        name='Email'
        placeholder='Enter Your Email'
        required
        autoComplete='false'
         />

         <textarea
          className='form-control'
          rows='10'
          name="message"
          placeholder='Enter Your Message'
          required
          autoComplete='false'
          ></textarea>

          <button type='submit' value='send' >Send</button>
        </form> 
      </div> 
    </section>
  )
}

export default Contact