
import './Coaches.css'
import christian from '../../assets/gba_photos/christian.jpeg'
import tony from '../../assets/gba_photos/tony.jpeg'
import eti from '../../assets/gba_photos/eti.jpeg'
import kennevic from '../../assets/gba_photos/kennevic.jpeg'
import eric from '../../assets/gba_photos/Eric.jpeg'
import megumi from '../../assets/gba_photos/megumi.jpeg'
import josh from '../../assets/gba_photos/josh.jpeg'

const Coaches = () => {
    return (
        <div className='main-page'>
            <div className="white coaches-page">
                <div className='header'>
                    <h1 className="coach-header">Meet our dedicated Coaches</h1>
                </div>
                <div className='coaches-wrap'>
                    <div className='each-coach'>
                        <h3 className='coach-name'>Coach Tony Gunawan</h3>
                        <div className='coach-pic-wrapper'>
                            <img id='tony' className='coach-pic' src={tony} alt=''/>
                        </div>
                        <ul>
                            <li>Fact 1</li>
                            <li>Fact 2</li>
                            <li>Fact 3</li>
                        </ul>
                    </div>
                    <div className='each-coach'>
                        <h3 className='coach-name'>Coach Kennevic Asuncion</h3>
                        <div className='coach-pic-wrapper'>
                            <img className='coach-pic' src={kennevic} alt=''/>
                        </div>
                        <ul>
                            <li>Fact 1</li>
                            <li>Fact 2</li>
                            <li>Fact 3</li>
                        </ul>
                    </div>
                    <div className='each-coach'>
                        <h3 className='coach-name'>Coach Christian Christianto</h3>
                        <div className='coach-pic-wrapper'>
                            <img className='coach-pic' id='chris' src={christian} alt=''/>
                        </div>
                        <ul>
                            <li>Fact 1</li>
                            <li>Fact 2</li>
                            <li>Fact 3</li>
                        </ul>
                    </div>
                    <div className='each-coach'>
                        <h3 className='coach-name'>Coach Eric Go</h3>
                        <div className='coach-pic-wrapper'>
                            <img className='coach-pic' id='eric' src={eric} alt=''/>
                        </div>
                        <ul>
                            <li>Fact 1</li>
                            <li>Fact 2</li>
                            <li>Fact 3</li>
                        </ul>
                    </div>
                    <div className='each-coach'>
                        <h3 className='coach-name'>Coach Megumi Taruno</h3>
                        <div className='coach-pic-wrapper'>
                            <img className='coach-pic' id='megumi' src={megumi} alt=''/>
                        </div>
                        <ul>
                            <li>Fact 1</li>
                            <li>Fact 2</li>
                            <li>Fact 3</li>
                        </ul>
                    </div>
                    <div className='each-coach'>
                        <h3 className='coach-name'>Coach Josh Hwang</h3>
                        <div className='coach-pic-wrapper'>
                            <img className='coach-pic' src={josh} alt=''/>
                        </div>
                        <ul>
                            <li>Fact 1</li>
                            <li>Fact 2</li>
                            <li>Fact 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coaches