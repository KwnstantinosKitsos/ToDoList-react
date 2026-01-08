import Checkbox from './CheckBox';
export default function Task({ name, done }) {
  return (
    <div className="task">
      <Checkbox defaultCheched={done} />
      {name}
    </div>
  );
}
