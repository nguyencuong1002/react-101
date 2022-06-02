import { useEffect, useState } from "react";
import { getCommentList } from "../Services/comment";
import Review from "./Review";

export default function UseEffect() {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(
    function () {
      console.log("getCommentList", page);
      getCommentList({ page }).then(({ data }) => {
        setReviews(
          data.map((dt) => ({
            id: dt.id,
            userPhoto: dt.owner.picture,
            userName: dt.owner.firstName + dt.owner.lastName,
            point: 4,
            review: dt.message,
          }))
        );
      });
    },
    [page]
  );

  const nexPage = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("call another function");
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const deleteById = (id) => {
    const filteredReviews = reviews.filter(
      (item) => item.id !== id
    );
    setReviews(filteredReviews);
  };


  return (
    <div className="container">
      <div className="flex gap-1">
        <button className="btn" onClick={nexPage}>
          Next page
        </button>
      </div>
      {reviews.map((review) => {
        return (
            <div key={review.id}>
                <Review {...review} />
                <button
                    className="btn-delete"
                    onClick={() => {
                        deleteById(review.id);
                    }}
                >
                    Delete
                </button>
            </div>
            );
      })}
    </div>
  );
}