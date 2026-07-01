import { expect, test } from 'vitest';

import {
  getActiveAudioRecorderStopAction,
  type AudioRecorderState,
} from './AudioRecorderState';

test('does not stop recording after switching to stopped playback mode', () => {
  const state: AudioRecorderState = {
    live: false,
    playbackState: 'stopped',
    audioFilePath: '/tmp/voice-memo.m4a',
  };

  expect(getActiveAudioRecorderStopAction(state)).toBe(null);
});

test('stops recording when recording is still active', () => {
  const state: AudioRecorderState = {
    live: true,
    recorderState: 'recording',
    duration: { elapsed: 1000 },
  };

  expect(getActiveAudioRecorderStopAction(state)).toBe('recording');
});

test('does not stop recording before recording starts', () => {
  const state: AudioRecorderState = {
    live: true,
    recorderState: 'stopped',
    duration: { elapsed: 0 },
  };

  expect(getActiveAudioRecorderStopAction(state)).toBe(null);
});

test('stops playback when playback is active', () => {
  const state: AudioRecorderState = {
    live: false,
    playbackState: 'playing',
    audioFilePath: '/tmp/voice-memo.m4a',
  };

  expect(getActiveAudioRecorderStopAction(state)).toBe('playback');
});
