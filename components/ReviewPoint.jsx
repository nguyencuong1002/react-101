import starUrl from '../assets/active.png';

function ReviewPoint(){
    const generateReviewPoint = () =>{
        return(
            <>
                <img src={starUrl} alt=""/>
                <img src={starUrl} alt=""/>
                <img src={starUrl} alt=""/>
                <img src={starUrl} alt=""/>
                <img src={starUrl} alt=""/>
            </>
        );
    };

    return <div className="review-point">{generateReviewPoint()}</div>
}

export default ReviewPoint;