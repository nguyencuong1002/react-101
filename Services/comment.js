export const getCommentList = ({page}) => {
    return fetch(`https://dummyapi.io/data/v1/comment?page=${page}&limit=5`, {
        headers: {
            "app-id": "6297814c9c7cca001ada4bd8"
        },
    }).then((res) => res.json());
};