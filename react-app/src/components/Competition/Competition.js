import './Competition.css'
import kodi from '../../assets/gba_photos/kodi.jpeg'


const Competition = () => {

    return (
        <div className="main-page">
            <div className="white">
                <div className="competition-header">
                    Here at GBA we pride ourselves of bringing the most we 
                    can out of our students and we have the accolades to prove it. With every tournament our kids fight and make it to the top of the podium.
                    If you want to be a competitive badminton player than we will do what we can
                    to bring you to the top.
                </div>
                <div className='kodi-img-wrapper'>
                    <div>
                        <img className='kodi-img'src={kodi} alt=''/>
                    </div>
                    <div className='grey kodi-description'>
                        GBA Student, Kodi Lee, at the most prestigious junior tournament, the World Junior Championships.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Competition