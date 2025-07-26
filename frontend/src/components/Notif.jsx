import './component.css'
function Notif(){
    return(
        <div className="box-noti">
            <div className='inner-noti'>
                Recent Notifications
            </div>
            <hr />
            <ul className='noti-list'>
                <li>New assignment</li>
                <li>New assignment</li>
                <li>New assignment</li>
                <li>New assignment</li>
                <li>New assignment</li>
                <li>New assignment</li>
                <li>New assignment</li>
            </ul>
        </div>
    )
}

export default Notif;