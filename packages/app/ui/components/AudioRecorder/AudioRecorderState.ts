type RecorderStatus = 'recording' | 'paused' | 'stopped';
type PlayerStatus = 'playing' | 'paused' | 'stopped';

export type AudioRecorderState =
  | {
      live: true;
      recorderState: RecorderStatus;
      duration: { elapsed: number; playbackStartedAt?: Date };
    }
  | { live: false; playbackState: PlayerStatus; audioFilePath: string };

export type ActiveAudioRecorderStopAction = 'recording' | 'playback' | null;

export function getActiveAudioRecorderStopAction(
  state: AudioRecorderState
): ActiveAudioRecorderStopAction {
  if (state.live) {
    return state.recorderState === 'stopped' ? null : 'recording';
  }

  return state.playbackState === 'stopped' ? null : 'playback';
}
