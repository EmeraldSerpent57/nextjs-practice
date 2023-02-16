import { Router, useRouter } from 'next/router';
import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
  const router = useRouter();
  const goBackHandler = () => {
    router.push("/");
  };

  return (
    <>
      <section className={classes.detail}>
        <img src={props.image} alt={props.title} />
        <h1>{props.title}</h1>
        <h4>When: {props.date}</h4>
        <address>Where: {props.address}</address>
        <p>{props.description}</p>
      </section>
      <footer className={classes.btn}>
        <button onClick={goBackHandler}>Back</button>
        <p className="disclaimer">Disclaimer: All meetups are fictional.</p>
      </footer>
    </>
  );
}

export default MeetupDetail;
