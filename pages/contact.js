import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useState } from 'react'
import crypto from 'crypto'
import encryptedDOM from '../data/encryptedContactDOM'

export default function Contact() {

  function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return (true)
    }
    return (false)
  }

  function strip(html) {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }

  function tempEncrypt(data) {
    const algorithm = 'aes-256-cbc'; //Using AES encryption
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(data);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv, encryptedData: encrypted.toString('hex'), key: key };
  }

  function handleSubmit(e) {
    e.preventDefault();

    // VALIDATE
    if (phone != "" || phone.length != 0) {
      console.error("[EVENT] [BOT DETECTED] Playing: RICKROLLING");
      window.document.body.innerHTML = ""
      window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

      return 0;
    } else if (!validateEmail(email)) {
      // TODO Handle Error

      return 0;
    }

    // STRIP
    const payloadSubject = strip(subject);
    const payloadMessage = strip(message);
    const payloadFullname = strip(fullname);
    const payloadEmail = strip(email);

    // GENERATE PAYLOAD
    const payloadBody = {
      username: payloadFullname,
      content: "@everyone",
      embeds: [{
        color: 6433791,
        title: payloadSubject,
        author: {
          name: payloadFullname,
          url: `https://siddharthray.com/contact`,
          icon_url: "https://i.imgur.com/R66g1Pe.jpg"
        },
        footer: {
          text: `Submitted at ${Date(Date.now()).toString()}`,
          icon_url: "https://i.imgur.com/fKL31aD.jpg"
        },
        fields: [
          { name: 'Sender Name', value: payloadFullname, inline: true },
          { name: 'Sender E-Mail', value: payloadEmail, inline: true },
          // { name: 'Subject', value: `**${payloadSubject}**` },
          { name: 'Message', value: payloadMessage }
        ]
      }],
    };

    // SEND
    const webhookUrl = 'https://discord.com/api/webhooks/975451334365036635/gS6Z-HbxEURglY6u3Q1R7o4LgvAjpDYzw74NaE1p9bOcCY7UZmvTaLN05l_ROZvUZvLp';

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payloadBody),
    }).then((response) => {
      if (response.ok) {
        console.info("sending success message")
        window.document.getElementsByClassName(styles.card)[0].innerHTML = "<h1 style=\"text-align: center;\"><span style=\"color: var(--primary-color)\">Thank you</span> for Contacting Me!</h1><p style=\"text-align: center;\">I will get back to you soon</p>"
      } else {
        console.error(response)
        alert('There was an error! Try again later!' + response.statusText);
      }
    });
  }

  function handleShowContactInfo() {
    // Decrypt DOM
    let iv = Buffer.from(encryptedDOM.iv, 'hex');
    let encryptedText = Buffer.from(encryptedDOM.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(encryptedDOM.key), encryptedDOM.iv.data);
    let decryptedDOM = decipher.update(encryptedText);
    decryptedDOM = Buffer.concat([decryptedDOM, decipher.final()]).toString();
    // Inject DOM
    window.document.getElementsByClassName(styles.contactInfo)[0].innerHTML = decryptedDOM
  }

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  return (
    <div>
      <Head>
        <title>Siddharth Ray | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <NavBar page="contact" />

      <main className={styles.main}>
        <div className={styles.card}>
          <h1><span style={{ color: "var(--primary-color)" }}>Contact</span> Me</h1>
          <div className={styles.contactInfo}>
            <a className={styles.buttonSmol} style={{ cursor: "pointer" }} onClick={handleShowContactInfo}>Show Contact Info</a>
            <br />
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className={styles.contactForm}
          >
            <label
              htmlFor="fullname"
            >
              Full name<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              placeholder="Khonshu Moonknight"
              name="fullname"
            />


            <label
              htmlFor="email"
            >
              E-mail<span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="khonshu.spktor@marvel.com"
            />

            <input
              type="phone"
              name="phone"
              value={phone}
              onChange={(e) => {
                console.error("[EVENT] [BOT DETECTED] Playing: RICKROLLING");
                window.document.body.innerHTML = ""
                window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                setPhone(e.target.value);
              }}
              style={{ display: 'none' }}
              autoComplete='off'
              placeholder="DO NOT FILL OUT"
            />


            <label
              htmlFor="subject"
            >
              Subject<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              autoComplete="off"
              placeholder="Proposal..."
            />

            <label
              htmlFor="message"
            >
              Message<span className={styles.required}>*</span>
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              maxLength={1020}
              placeholder="Will you protect the travelers of the night..."
            ></textarea>
            
            <p className={styles.learnWhy} style={{ fontSize: 14 }}>Maximum 1020 characters. 
            {/* <a>Learn Why.</a> */}
            </p>

            <div>
              <button
                type="submit"
                className={styles.button}
              // onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
