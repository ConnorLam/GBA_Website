
import './Coaches.css'
import christian from '../../assets/gba_photos/Christian.jpeg'

const Coaches = () => {
    return (
        <div className='main-page'>
            <div className="white coaches-page">
                <div className='header'>
                    <h1 className="coach-header">Meet our dedicated Coaches</h1>
                </div>
                <div className='coaches-wrap'>
                    <div className='each-coach'>
                        <h3 className='coach-name'>Tony Gunawan</h3>
                        <div className='coach-pic-wrapper'>
                            <img className='coach-pic' src='' alt=''/>
                        </div>
                    </div>
                    <div className='each-coach'>
                        <h3 className='coach-name'>Eti Gunawan</h3>
                        <div className='coach-pic-wrapper'>
                            <img className='coach-pic' src='' alt=''/>
                        </div>
                    </div>
                    <div className='each-coach'>
                        <h3 className='coach-name'>Kennevic Asuncion</h3>
                        <div className='coach-pic-wrapper'>
                            <img className='coach-pic' src='' alt=''/>
                        </div>
                    </div>
                    <div className='each-coach'>
                        <h3 className='coach-name'>Christian Christianto</h3>
                        <div className='coach-pic-wrapper'>
                            <img className='coach-pic' src={christian} alt=''/>
                        </div>
                        <ul>
                            <li>Fact 1</li>
                            <li>Fact 2</li>
                            <li>Fact 3</li>
                        </ul>
                    </div>
                    <div className='each-coach'>
                        <h3 className='coach-name'>Eric Go</h3>
                        <div className='coach-pic-wrapper'>
                            <img className='coach-pic' src='' alt=''/>
                        </div>
                    </div>
                    <div className='each-coach'>
                        <h3 className='coach-name'>Megumi Taruno</h3>
                        <div className='coach-pic-wrapper'>
                            <img className='coach-pic' src='' alt=''/>
                        </div>
                    </div>
                    <div className='each-coach'>
                        <h3 className='coach-name'>Josh Hwang</h3>
                        <div className='coach-pic-wrapper'>
                            <img className='coach-pic' src='' alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coaches