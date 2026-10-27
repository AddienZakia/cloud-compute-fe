import OrderNoteBox from '../(components)/OrderNoteBox';

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function NoteSection({ value, onChange }: Props) {
  return <OrderNoteBox value={value} onChange={onChange} />;
}
