import React from 'react';

function Home() {
    return (
        <div className="">
            <main className="flex items-center flex-col">
                <section className="space-y-10">
                    <h2 className="text-2xl">Home Page</h2>
                    <p>This site will allow you to upload a video in order to perform AI on it such as:</p>
                    <ul className="list-disc pl-10 space-y-1">
                        <li>Audio Transcription</li>
                        <li>Audio Diarization</li>
                        <li>Facial recognition</li>
                        <li>On screen presentation identification</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default Home;
