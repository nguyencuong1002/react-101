import Avatar from './Avatar';
import ReviewAttachments from './ReviewAttachments';
import ReviewContent from './ReviewContent';
import ReviewPoint from './ReviewPoint';
import ReviewReaction from './ReviewReaction';

function Review({userPhoto, userName, point, review}){
    return( 
        <div className="review">
            <div className="review-userinfo">
                <Avatar src={userPhoto} />
                <div>
                    <h2 className="review-username">{userName}</h2>
                    <ReviewPoint />
                </div>
                <ReviewReaction />
            </div>

            <ReviewContent content={review} />
            <ReviewAttachments />
        </div>
    );
}

export default Review;