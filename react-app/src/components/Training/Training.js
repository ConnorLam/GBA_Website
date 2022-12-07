
import './Training.css'
import littleChamp from '../../assets/gba_photos/little_champion.jpeg'
import intermediate from '../../assets/gba_photos/intermediate.jpeg'
import { NavLink } from 'react-router-dom'

const Training = () => {

    return(
        <div className="main-page training-page">
            <div className='training-desc white'>
                With different level of training to choose from: Little Champion, 
                Intermediate, High- School and Tournament Team Training, students are 
                always motivated and encouraged to train to their best ability. If you would like to join
                the tournament team please <span><NavLink to='/contact' className='navlink-blue'>contact us</NavLink></span> to book an appointment.
            </div>

            <div className='whole-schedule'>
                <div className='white header-section'>
                    <div className='schedule-header'>
                        <h3>
                            LITTLE CHAMPION
                        </h3>
                        <div className='grey'>
                            Little Champion is our program for young players to learn 
                            fundamentals, rules, and develop a love for badminton!
                        </div>
                    </div>
                    <div className='training-photo'>
                        <img className='training-actual-photo' src={littleChamp} alt=''/>
                    </div>
                </div>
                <div className='schedule'>
                    <div className='row1 white'>
                        <div className='each-column'>
                            <div className='days'>
                                Sun
                            </div>
                            <div className='times'>
                                ---
                            </div>
                        </div>
                        <div className='each-column'>
                            <div className='days'>
                                Mon
                            </div>
                            <div className='times'>
                                4-6 PM
                            </div>
                        </div>
                        <div className='each-column'>
                            <div className='days'>
                                Tues
                            </div>
                            <div className='times'>
                                ---
                            </div>
                        </div>
                        <div className='each-column'>
                            <div className='days'>
                                Wed
                            </div>
                            <div className='times'>
                                4-6 PM
                            </div>
                        </div>
                        <div className='each-column'>
                            <div className='days'>
                                Thurs
                            </div>
                            <div className='times'>
                                ---
                            </div>
                        </div>
                        <div className='each-column'>
                            <div className='days'>
                                Fri
                            </div>
                            <div className='times'>
                                4-6 PM
                            </div>
                        </div>
                        <div className='each-column'>
                            <div className='days'>
                                Sat
                            </div>
                            <div className='times'>
                                ---
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='whole-schedule'>
                <div className='white header-section'>
                    <div className='schedule-header'>
                        <h3>
                            INTERMEDIATE & HIGHSCHOOL
                        </h3>
                        <div className='grey'>
                            Intermediate & Highschool is our program for kids 
                        </div>
                    </div>
                    <div className='training-photo'>
                        <img className='training-actual-photo' src={intermediate} alt=''/>
                    </div>
                </div>
                <div className='schedule'>
                    <div className='row1 white'>
                        <div className='each-column'>
                            <div className='days'>
                                Sun
                            </div>
                            <div className='times'>
                                ---
                            </div>
                        </div>
                        <div className='each-column'>
                            <div className='days'>
                                Mon
                            </div>
                            <div className='times'>
                                ---
                            </div>
                        </div>
                        <div className='each-column'>
                            <div className='days'>
                                Tues
                            </div>
                            <div className='times'>
                                ---
                            </div>
                        </div>
                        <div className='each-column'>
                            <div className='days'>
                                Wed
                            </div>
                            <div className='times'>
                                6-8 PM
                            </div>
                        </div>
                        <div className='each-column'>
                            <div className='days'>
                                Thurs
                            </div>
                            <div className='times'>
                                ---
                            </div>
                        </div>
                        <div className='each-column'>
                            <div className='days'>
                                Fri
                            </div>
                            <div className='times'>
                                6-8 PM
                            </div>
                        </div>
                        <div className='each-column'>
                            <div className='days'>
                                Sat
                            </div>
                            <div className='times'>
                                ---
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training