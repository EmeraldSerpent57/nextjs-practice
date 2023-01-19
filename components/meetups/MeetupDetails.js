import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <h4>When: {props.date}</h4>
      <address>Where: {props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
