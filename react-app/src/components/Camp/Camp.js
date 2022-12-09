import './Camp.css'
import camp from '../../assets/gba_photos/camp.jpeg'

const Camp = () => {

    return (
      <div className="main-page">
        <div className="white">
            <div className="camp-explanation">
                Every summer and winter, we are hosting fun camp for many students.
                Summer Camp starts as early as first week of June until mid August.
                Winter Camp starts during school winter break.
            </div>
            <div className='camp-img-wrap'>
                <img src={camp} alt='' />
            </div>
        </div>
      </div>
    );
}

export default Camp