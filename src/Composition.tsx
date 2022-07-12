import {OffthreadVideo, Sequence, staticFile} from 'remotion';
import {useVideoMetadata} from './hooks/useVideoMetadata';

const src = staticFile('bunny.mp4')

export const MyComposition = () => {
	const metadata = useVideoMetadata({src});

	if (!metadata) return null;

	return (
		<>
			<Sequence durationInFrames={30} from={0}>
				<OffthreadVideo src={src} />
			</Sequence>
			<Sequence durationInFrames={30} from={30}>
				<OffthreadVideo src={src} />
			</Sequence>
			<Sequence durationInFrames={30} from={60}>
				<OffthreadVideo src={src} />
			</Sequence>
		</>
	);
};
