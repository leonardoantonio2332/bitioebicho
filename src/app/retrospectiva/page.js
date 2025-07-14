import Stories from './Stories';
import FloatingHearts from '../components/FloatingHearts';
import AudioPlayer from '../components/AudioPlayer';
import BackToHomeButton from '../components/BackToHomeButton';

export default function RetrospectivaPage() {
  return (
    <>
      <FloatingHearts />
      <AudioPlayer src="/callonme.mp3" />
      <Stories />
      <BackToHomeButton />
    </>
  );
}
