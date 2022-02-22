import './ReviewProducts.scss';

const Reviewer = (props) => {
    const { avatar, comment, nameReviewer } = props;
    return (
        <div className="reviewer-container">
            <div className="reviewer-avatar">
                <img src={avatar} />
            </div>
            <div className="detail-review">
                <p className="detail-review-text">
                    {comment}
                </p>
                <p className="detail-name-reviewer">
                    {nameReviewer}
                </p>
            </div>
        </div>
    )
}

export default Reviewer;