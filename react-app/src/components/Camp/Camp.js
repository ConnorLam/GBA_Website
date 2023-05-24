import './Camp.css'
import camp from '../../assets/gba_photos/camp.jpeg'

const Camp = () => {

    return (
      <div className="main-page">
        <div className="white">
            <div className="camp-explanation">
                Ready to level up your badminton game? Join our summer and/or winter badminton camp for an intensive training
                experience. Led by expert coaches and professional players, our program focuses on technique, strategy, 
                conditioning, and mental preparation. Train alongside passionate players, develop friendships, 
                and enhance your skills in a supportive environment. Don't miss out on this incredible opportunity to take 
                your badminton to new heights. Secure your spot today and get ready for a summer/winter of growth and fun on 
                the court!
            </div>
            {/* <div className='camp-img-wrap'>
                <img src={camp} alt='' />
            </div> */}
            <div className='jotform-div'>
              <embed className='jotform' title='iframetest' width='300' height='200' src='https://form.jotform.com/231193271833151' ></embed>
            </div>
        </div>
      </div>
    );
}

export default Camp