import './ReviewProducts.scss';
import Reviewer from './Reviewer'
import AvatarReviewer1 from '../../../assets/image/avatar-01.jpg';
import AvatarReviewer2 from '../../../assets/image/avatar-02.jpg';
import AvatarReviewer3 from '../../../assets/image/avatar-03.jpg';
import AvatarReviewer4 from '../../../assets/image/avatar-04.jpg';

const ReviewProducts = () => {
    const reviewsData = [
        {
            avatar: AvatarReviewer1,
            comment: `Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            nameReviewer: `- NATHAN FORD`
        },
        {
            avatar: AvatarReviewer2,
            comment: `Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            nameReviewer: `- PAUL SCRIVENS`
        },
        {
            avatar: AvatarReviewer3,
            comment: `Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            nameReviewer: `- AARRON WALTER`
        },
        {
            avatar: AvatarReviewer4,
            comment: `Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            nameReviewer: `- SHOKO MUGIKURA`
        },
    ]
    return (
        <div className='review-products-container'>
            {reviewsData.map((review, index) => {
                return (
                    <Reviewer key={index}
                        avatar={review.avatar}
                        comment={review.comment}
                        nameReviewer={review.nameReviewer}
                    />
                )
            })}
        </div>
    )
}

export default ReviewProducts;