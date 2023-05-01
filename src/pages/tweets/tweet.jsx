import React, { useState, useRef } from "react";
import { useSetRecoilState } from "recoil";
import styles from "./TweetSection.module.css";
import { tweetsAtom } from "../../recoil/tweets";

const TweetSection = () => {
    const textareaRef = useRef(null);

    const [wordCount, setWordCount] = useState(0);
    const [activeButton, setActiveButton] = useState("For You");

    // added
    const setTweets = useSetRecoilState(tweetsAtom);
    const [tweet, setTweet] = React.useState({
        id: Date.now(),
        content:
            "Aspernatur accusamus porro perspiciatis occaecati assumenda modi. Eaque nesciunt quisquam quidem enim rem. Ab corrupti atque vero quos sed facilis odit nemo voluptas. Illo distinctio dolore accusantium. Sequi deserunt qui debitis explicabo. Ipsa atque suscipit repudiandae velit architecto.",
        createdAt: "2022-09-10T07:47:45.804Z",
        image: `https://picsum.photos/1000/500?q=${Date.now()}`,
        tweetedBy: {
            id: "a2b9f2ce-a4bf-45bd-a545-5ee996ffa451",
            name: "Verna Pouros",
        },
        likeCount: 563,
        commentCount: 504,
        reTweetsCount: 63,
        isLiked: false,
    });
    // ended

    const handleInputChange = (event) => {
        //
        setTweet({
            ...tweet,
            [event.target.name]: event.target.value,
            image: `https://picsum.photos/1000/500?q=${Date.now()}`,
        });
        setWordCount(event.target.value.length);
        adjustTextareaHeight()
    };
    function handleSubmit(event) {
        event.preventDefault()
        setTweets((tweets) => {
            return [tweet, ...tweets];
        });
    }


    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    };
    return (
        <div className={styles.tweetSection}>
            <div className={styles.buttonContainer}>
                <button
                    onClick={() => handleButtonClick("For You")}
                    className={activeButton === "For You" ? styles.active : ""}
                >
                    For you
                </button>
                <button
                    onClick={() => handleButtonClick("Following")}
                    className={activeButton === "Following" ? styles.active : ""}
                >
                    Following
                </button>
            </div>
            <hr />
            <div className={styles.postSection}>
                <img
                    src="https://i.pinimg.com/736x/6e/b9/48/6eb948f71dbe63f16dd15cc7c912b683.jpg"
                    alt="User"
                    className={styles.userImage}
                />
                <div>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            className={styles.textarea}
                            placeholder="What's happening?"
                            name="content"
                            onChange={handleInputChange}
                            ref={textareaRef}
                        />
                        <div className={styles.mediaContainer}>
                            <img src="src\assets\media.png" alt="Media" title="Media" />
                            <img src="E:\Codes\FunctionUp\React\github(project-2)\tweetClone\src\assets\gif.png" alt="GIF" title="GIF" />
                            <img src="E:\Codes\FunctionUp\React\github(project-2)\tweetClone\src\assets\poll.png" alt="Poll" title="Poll" />
                            <img src="src/assets/schedule.png" alt="Emoji" title="Emoji" />
                            <img src="src\assets\schedule.png" alt="Sch" title="Schedule" />
                            <span className={styles.wordCount}>{wordCount} / 140</span>
                            <button type="submit" >Tweet</button>
                        </div>
                    </form>
                    {/*                     
                    <div className={styles.mediaContainer}>
                        <img src="src\assets\media.png" alt="Media" title="Media" />
                        <img src="src/assets/gif.png" alt="GIF" title="GIF" />
                        <img src="src/assets/poll.png" alt="Poll" title="Poll" />
                        <img src="src/assets/schedule.png" alt="Emoji" title="Emoji" />
                        <img src="src/assets/emoji.png" alt="Sch" title="Schedule" />
                        <span className={styles.wordCount}>{wordCount} / 140</span>
                        <button onClick={submitTweet}>Tweet</button>
                    </div> */}
                </div>
            </div>
            <hr />
        </div>
    );
};

export default TweetSection;
