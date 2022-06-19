import React from 'react'

export default function LinkedInRedirect() {
    const [seconds, setSeconds] = React.useState(5);
    const [error, setError] = React.useState("");

    setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        } else if (seconds == 0) {
            window.location.replace("https://linkedin.com/in/the-ray");
            setSeconds(seconds - 1);
        } else {
            setError("Something has gone wrong! use the link above to go to my LinkedIn, or paste this into your browser: https://linkedin.com/in/the-ray")
        }
    }, 1000);

    return (
        <>
            <h1>Redirecting to Siddharth Ray&apos;s LinkedIn in {seconds} seconds...</h1>
            <p>If it does not redirect, <a href="https://linkedin.com/in/the-ray" style={{fontWeight: "bold"}}>click here</a> <br />
                <span style={{ color: 'red' }}>{error}</span>
            </p>
        </>
    )
}