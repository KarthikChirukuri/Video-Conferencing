import React from 'react';

function Testing() {

    // const constraints = {
    //     'video': true,
    //     'audio': true
    // }

    // navigator.mediaDevices.getUserMedia(constraints)
    //     .then(stream => {
    //         console.log('Got MediaStream:', stream);
    //     })
    //     .catch(error => {
    //         console.error('Error accessing media devices.', error);
    //     });

    // -------------------------------------------------------------------------------------------------

    // function getConnectedDevices(type, callback) {
    //     navigator.mediaDevices.enumerateDevices()
    //         .then(devices => {
    //             const filtered = devices.filter(device => device.kind === type);
    //             callback(filtered);
    //         }
    //     );
    // }

    // getConnectedDevices('videoinput', cameras => console.log('Cameras found', cameras));

    // -------------------------------------------------------------------------------------------------------

    // function updateCameraList(cameras) {
    //     const listElement = document.querySelector('select#availableCameras');

    //     if (!listElement) return;

    //     listElement.innerHTML = '';

    //     cameras
    //         .map(camera => {
    //             const cameraOption = document.createElement('option');
    //             cameraOption.label = camera.label;
    //             cameraOption.value = camera.deviceId;
    //             return cameraOption;
    //         })
    //         .forEach(cameraOption => listElement.add(cameraOption));
    // }

    // Fetch an array of devices of a certain type
    // async function getConnectedDevices(type) {
    //     const devices = await navigator.mediaDevices.enumerateDevices();
    //     return devices.filter(device => device.kind === type);
    // }

    // Get the initial set of cameras connected
    // getConnectedDevices('videoinput')
    //     .then(cameras => updateCameraList(cameras));

    // Listen for changes to media devices and update the list accordingly
    // navigator.mediaDevices.addEventListener('devicechange', async event => {
    //     const newCameraList = await getConnectedDevices('videoinput');
    //     updateCameraList(newCameraList);
    // });

    // -----------------------------------------------------------------------------------------------

    // async function getConnectedDevices(type) {
    //     const devices = await navigator.mediaDevices.enumerateDevices();
    //     return devices.filter(device => device.kind === type);
    // }

    // async function openCamera(cameraId, minWidth, minHeight) {
    //     const constraints = {
    //         'audio': { 'echoCancellation': true },
    //         'video': {
    //             'deviceId': cameraId,
    //             'width': { 'min': minWidth },
    //             'height': { 'min': minHeight }
    //         }
    //     };

    //     return await navigator.mediaDevices.getUserMedia(constraints);
    // }

    // async function startCamera() {
    //     const cameras = await getConnectedDevices('videoinput');

    //     if (cameras.length > 0) {
    //         // Open first available video camera with a resolution of 1280x720 pixels
    //         const stream = await openCamera(
    //             cameras[0].deviceId,
    //             1280,
    //             720
    //         );

    //         console.log(stream);

    //         const video = document.getElementById('localVideo');

    //         if (video) {
    //             video.srcObject = stream;
    //         }
    //     }
    // }

    // setTimeout(() => {
    //     startCamera();
    // }, 100);

    // Client A
// const clientA = {
//     send(message) {
//         clientB.receive(message);
//     },

//     receive(message) {
//         console.log("Client A received:", message);
//     }
// };

// // Client B
// const clientB = {
//     send(message) {
//         clientA.receive(message);
//     },

//     receive(message) {
//         console.log("Client B received:", message);
//     }
// };

// // Test
// clientA.send("Hello from A");
// clientB.send("Hello from B");

    return (
        <>
            <h1>This is just a testing component!</h1>

            {/* <select id="availableCameras"></select> */}

            {/* <video
                id="localVideo"
                autoPlay
                playsInline
                muted
                width="600"
            ></video> */}
        </>
    );
}

export default Testing;