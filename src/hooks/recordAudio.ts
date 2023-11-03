import {VoiceRecorder} from 'capacitor-voice-recorder';
import { play, playBack } from 'ionicons/icons';

export async function recordAudio() {
    console.log('recordAudioFunc');
    const finalRecording = {
        base64Sound: "",
        mimeType: "",
        duration: Number(),
    }
    try {
        // Check to see if permission['value'] is true or false to check permissions
        const permission = await VoiceRecorder.requestAudioRecordingPermission();
        console.log('obtained permission: ', permission);
    }
    catch(err) {
        console.log('Error while getting permission: ', err);
    }

    try {
        const recordingStart = await VoiceRecorder.startRecording();
        console.log('Record start output: ', recordingStart);
    }
    catch(err) {
        console.log('Recording start failed: ', err);
    }
    
    // time to record, 5 seconds
    const delay = 5000
    setTimeout(async () => {
        try {
            const recordingEnd = await VoiceRecorder.stopRecording();
            console.log('Record stop output: ', recordingEnd);
            finalRecording['base64Sound'] = recordingEnd.value.recordDataBase64
            finalRecording['mimeType'] = recordingEnd.value.mimeType
            finalRecording['duration'] = recordingEnd.value.msDuration

            // play audio
            setTimeout(() => {playBackAudio(finalRecording)}, delay);
        }
        catch(err) {
            console.log('Record end error: ', err);
        }
    }, delay);

}

function playBackAudio(finalRecording: FinalRecording) {
    const audioRef = new Audio(`data:${finalRecording.mimeType};base64,${finalRecording.base64Sound}`)
    audioRef.oncanplay = () => audioRef.play();
    audioRef.load()
}

type FinalRecording = {
    base64Sound: String,
    mimeType: String,
    duration: Number,
}