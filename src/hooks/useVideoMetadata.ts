import {getVideoMetadata, VideoMetadata} from '@remotion/media-utils';
import {useCallback, useEffect, useState} from 'react';
import {continueRender, delayRender} from 'remotion';

export function useVideoMetadata({
	src,
}: {
	src: string;
}): VideoMetadata | undefined {
	const [delayRenderHandle] = useState(() =>
		delayRender('Getting video metadata')
	);
	const [metadata, setMetadata] = useState<VideoMetadata | undefined>(
		undefined
	);

	const setVideoMetadata = useCallback(async () => {
		setMetadata(await getVideoMetadata(src));
		continueRender(delayRenderHandle);
	}, [delayRenderHandle, setMetadata, src]);

	useEffect(() => {
		setVideoMetadata();
	}, [setVideoMetadata]);

	return metadata;
}
