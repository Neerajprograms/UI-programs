const mainDiv = document.getElementById('maindivbody')


const placeslist = [
    {
        "latitude": 27.1751,
        "longitude": 78.0421,
        "title": "Taj Mahal",
        "description": "India’s most famous and widely recognized building, it is situated in the eastern part of the city on the southern (right) bank of the Yamuna River.",
        "zoomLevel": 18,
        "video": "https://cdnl.iconscout.com/lottie/premium/preview-watermark/taj-mahal-6113726-5001424.mp4"
    },
    {
        "latitude": 48.8584,
        "longitude": 2.2945,
        "title": "Eiffel Tower",
        "description": "The tower is 330 metres (1,083 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 .",
        "zoomLevel": 19,
        "video": "https://cdnl.iconscout.com/lottie/premium/preview-watermark/paris-city-3916273-3263004.mp4"
    },
    {
        "latitude": 28.5535,
        "longitude": 77.2588,
        "title": "Lotus Temple",
        "description": "The Lotus Temple, located in New Delhi, India, is a Baháʼí House of Worship that was dedicated in December 1986. Notable for its lotus-like shape.",
        "zoomLevel": 16,
        "video": "https://cdnl.iconscout.com/lottie/premium/preview-watermark/lotus-temple-8928569-8356159.mp4"
    },
    {
        "latitude": 28.6129,
        "longitude": 77.2295,
        "title": "India Gate",
        "description": "India Gate is without a doubt one of the most recognizable structures of the country. Often referred as the replica of Arc de Triomphe in Paris, this majestic monument is dedicated to those 70,000 soldiers who lost their lives during World War I.",
        "zoomLevel": 20,
        "video": "https://cdnl.iconscout.com/lottie/premium/preview-watermark/india-gate-8928568-8356158.mp4"
    },
    {
        "latitude": 9.9195,
        "longitude": 78.1193,
        "title": "Meenakshi Temple",
        "description": "Said to have the finest Indian architecture, Meenakshi Temple is situated on the bank of Vaigai River in the temple city Madurai. The temple is probably the most famous edifice in South India and is visited by both devotees and architecture lovers throughout the year.",
        "zoomLevel": 18,
        "video": "https://cdnl.iconscout.com/lottie/premium/preview-watermark/angkor-wat-6113699-5001398.mp4"
    },
    {
        "latitude": 23.4810,
        "longitude": 77.7399,
        "title": "Sanchi Stupa",
        "description": "Sanchi has a distinction of having an incredible specimen of Buddhist art and architecture. Dating back to the early Mauryan period (third century BC to twelfth century AD), Sanchi is famous in the world for stupas, monolithic Ashokan pillar, temples, monasteries and sculptures.",
        "zoomLevel": 17,
        "video": "https://cdnl.iconscout.com/lottie/premium/thumb/itsukushima-shrine-6113711-5001409.mp4"
    },
    {
        "latitude": 40.6892,
        "longitude": 74.0445,
        "title": "Statue of Liberty",
        "description": "The copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave.",
        "zoomLevel": 19,
        "video": "https://cdnl.iconscout.com/lottie/premium/preview-watermark/new-york-city-3915605-3263010.mp4"
        
    },
    {
        "latitude": 43.7230,
        "longitude": 10.3966,
        "title": "Leaning Tower of Pisa",
        "description": "It is known for its nearly four-degree lean, the result of an unstable foundation. The height of the tower is about 56 metres from the ground. Its weight is about 14,500 tonnes. It now leans at about 3.99 degrees. The tower has 294 steps..",
        "zoomLevel": 18,
        "video": "https://cdnl.iconscout.com/lottie/premium/thumb/pisa-6113719-5001417.mp4"
    },
    {
        "latitude": 40.4319,
        "longitude": 116.5704,
        "title": "Great Wall of China",
        "description": "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.",
        "zoomLevel": 19,
        "video": "https://cdnl.iconscout.com/lottie/premium/preview-watermark/wall-of-china-6274328-5187076.mp4"
    }

]

// "latitude": 27.1751,
// "longitude": 78.0421,
// "title": "Taj Mahal",
// "description": "India’s most famous and widely recognized building, it is situated in the eastern part of the city on the southern (right) bank of the Yamuna River.",
// "zoomLevel": 18



console.log(placeslist)

placeslist.forEach(function (place)
{


    const placeDiv = document.createElement('div')
    const placevideoDiv = document.createElement('div')
    const mainvideo = document.createElement('video')
    const title = document.createElement('h2')
    const describe = document.createElement('p')
    const latitude = document.createElement('p')
    const longitude = document.createElement('p')
    





    mainvideo.src = place.video
    mainvideo.width = 200;
    mainvideo.play();
    mainvideo.controls = "true"
    mainvideo.loop = "true"
    mainvideo.autoplay = "true"
    title.textContent = place.title;
    describe.textContent = place.description
    latitude.textContent = "Latitude ::"+place.latitude
    longitude.textContent = "Longitude :: "+place.longitude
    





    placeDiv.classList.add('places')
    mainDiv.appendChild(placeDiv)
    placeDiv.appendChild(placevideoDiv)
    placevideoDiv.appendChild(mainvideo)
    placeDiv.append(title,describe,latitude,longitude)
    

});
