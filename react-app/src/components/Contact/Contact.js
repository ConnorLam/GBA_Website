import './Contact.css'


const Contact = () => {

    return (
        <div className="main-page">
            <div className='questions-contact'>
                <h2 className='white'>Have any questions? Please feel free to contact us!</h2>
            </div>
            <div className='contact-body'>
                <div className='form-div'>
                    <form action="https://formsubmit.co/connorlam03@gmail.com" method="POST">
                        <input type="hidden" name="_captcha" value="false"></input>
                        <input type="hidden" name="_subject" value="GBA website"></input>
                        {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input> */}
                        <input type="email" name="email" placeholder="Email Address" required></input>
                        <input type="text" name="name" placeholder='Name' required/>
                        <textarea className='message-area' type="text" name="message" placeholder='Write message here' required/>
                        <div className='email-submit-div'>
                            <button className='white email-submit' type="submit">Send</button>
                        </div>
                    </form>
                </div>
                <div className='other-info-div'>
                    <a target='_blank'>
                        <i class="fa-brands fa-instagram fa-3x white"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact