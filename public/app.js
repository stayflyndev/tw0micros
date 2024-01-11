const getVideos = async () => {
    const response = await fetch('/')
    const videoData = await response.json();
    document.getElementById("video").innerHTML = json.stringify(videoData)

}

getVideos()