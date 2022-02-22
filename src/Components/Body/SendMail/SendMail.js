import './SendMail.scss';

const SendMail = () => {

    return (
        <div className='send-mail-container'>
            <div className='send-mail-title'>
                {`Don’t sleep on all the latest from doom.`}
            </div>
            <div className='input-group'>
                <input placeholder='* Email Address' type='email' />
                <div className='input-group-submit'>
                    <i className="fa-regular fa-envelope"></i>
                </div>
            </div>
        </div>
    )
}
export default SendMail;