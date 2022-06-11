import React from 'react'

export default function LinkedInRedirect() {
    const [seconds, setSeconds] = React.useState(5);
    const [error, setError] = React.useState("");

    setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        } else if (seconds == 0) {
            window.location.replace("https://github.com/kidsonfilms-python-rules/");
            setSeconds(seconds - 1);
        } else {
            setError("Something has gone wrong! use the link above to go to my GitHub, or paste this into your browser: https://github.com/kidsonfilms-python-rules/")
        }
    }, 1000);

    return (
        <>
            <h1>Redirecting to Siddharth Ray's GitHub in {seconds} seconds...</h1>
            <p>If it does not redirect, <a href="https://github.com/kidsonfilms-python-rules/" style={{fontWeight: "bold"}}>click here</a> <br />
                <span style={{ color: 'red' }}>{error}</span>
            </p>
        </>
    )
}