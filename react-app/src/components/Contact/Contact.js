import './Contact.css'
import arena from '../../assets/gba_photos/Arena.webp'


const Contact = () => {

    return (
        <div className="main-page">
            <div className='questions-contact'>
                <h2 className='white'>Have any questions? Please feel free to contact us!</h2>
            </div>
            <div className='contact-body'>
                <div className='form-div'>
                    <h2 className='white email-us'>Email Us</h2>
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
                <div className='spacer'></div>
                <div className='other-info-div'>
                    <h2 className='white other-info'>Other Info</h2>
                    <div className='insta-facebook'>
                        <div className='actual-link'>
                            <a className='white navlink contact-links' rel='noreferrer' target='_blank' href='https://www.instagram.com/globalbadmintonacademy/'>
                                <i class="fa-brands fa-instagram fa-3x"></i>&nbsp;
                                <span className='label-contact'>
                                    Instagram
                                </span>
                            </a>
                        </div>
                        <div className='actual-link'>
                            <a className='white navlink contact-links' rel='noreferrer' target='_blank' href='https://www.facebook.com/GBATraining'>
                                <i class="fa-brands fa-facebook fa-3x"></i>&nbsp;
                                <span className='label-contact'>
                                    Facebook
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className='white location'>
                        <h2>Location</h2>
                        <img className='arena-picture' src={arena} alt=''/>
                        <h2>
                            2780 S Reservoir St, Pomona, CA 91766
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact