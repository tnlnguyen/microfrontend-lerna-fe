import Chat from './components/App';

export default function Root(props) {
  return (
    <section>
      <h1>{props.name} is mounted!</h1>

      <Chat />
    </section>
  );
}
