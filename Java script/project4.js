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
        "latitude": 18.9220,
        "longitude": 72.8347,
        "title": "Gateway of India",
        "description": "Gateway of India has stayed an inseparable historic symbol for the city of Mumbai and the country. This bold basalt arch that symbolizes colonial triumph is now amongst the popular tourist places to visit in Mumbai.",
        "zoomLevel": 19,
        "video": "https://cdnl.iconscout.com/lottie/premium/preview-watermark/taj-mahal-6113726-5001424.mp4"
    },
    {
        "latitude": 20.0258,
        "longitude": 75.1780,
        "title": "Ajanta & Ellora Caves",
        "description": "One of the most attention-grabbing places in India would be Ajanta and Ellora Caves. Ajanta Caves can mostly be referred as the Buddhist caves whereas Ellora Caves can be called Hindu, Jain and Buddhist caves. Ajanta & Ellora Caves are amongst one of the most well-preserved monuments in India.",
        "zoomLevel": 16,
        "video": "https://cdnl.iconscout.com/lottie/premium/preview-watermark/taj-mahal-6113726-5001424.mp4"
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
        "latitude": 17.3616,
        "longitude": 78.4747,
        "title": "Charminar",
        "description": "This 16th century monument in Hyderabad has been the clear winner of being one of the most famous landmarks in India. Standing tall in the Old Hyderabad, Charminar looks absolutely stunning when lit in the evening.",
        "zoomLevel": 20,
        "video": "https://cdnl.iconscout.com/lottie/premium/preview-watermark/taj-mahal-6113726-5001424.mp4"
    },
    {
        "latitude": 23.4810,
        "longitude": 77.7399,
        "title": "Sanchi Stupa",
        "description": "Sanchi has a distinction of having an incredible specimen of Buddhist art and architecture. Dating back to the early Mauryan period (third century BC to twelfth century AD), Sanchi is famous in the world for stupas, monolithic Ashokan pillar, temples, monasteries and sculptures.",
        "zoomLevel": 17,
        "video": "https://cdnl.iconscout.com/lottie/premium/preview-watermark/taj-mahal-6113726-5001424.mp4"
    },
    {
        "latitude": 26.9239,
        "longitude": 75.8267,
        "title": "Hawa Mahal",
        "description": "This Palace of Winds is a prominent landmark of Pink City, Jaipur. A five-storey pyramidal building, Hawa Mahal stands 15m tall and overlooks the busy streets of the city. The monument was built Maharaja Sawai Pratap Singh to offer convenience to women to see the outside world without having to be seen by the other.",
        "zoomLevel": 19,
        "video": "https://cdnl.iconscout.com/lottie/premium/preview-watermark/taj-mahal-6113726-5001424.mp4"
        
    },
    {
        "latitude": 24.6094,
        "longitude": 72.7230,
        "title": "Dilwara Temples",
        "description": "Dilwara Jain Temples is undoubtedly one of the finest Jain temples in India. It is known world over for its excellent architecture and marvelous marble stone carvings, some experts also consider it architecturally superior to the Taj Mahal.",
        "zoomLevel": 18,
        "video": "https://cdnl.iconscout.com/lottie/premium/preview-watermark/taj-mahal-6113726-5001424.mp4"
    },
    {
        "latitude": 12.6165,
        "longitude": 80.1988,
        "title": "Group of Monuments at Mahabalipuram",
        "description": "Mahabalipuram is known especially for its rathas (temples in the form of chariots), mandapas (cave sanctuaries), giant open-air structures such as the famous ‘Descent of the Ganges’, and the temple of Rivage along with thousands of sculptures made to the glorify Shiva.",
        "zoomLevel": 19,
        "video": "https://cdnl.iconscout.com/lottie/premium/preview-watermark/taj-mahal-6113726-5001424.mp4"
    },
    {
        "latitude": 9.9195,
        "longitude": 78.1193,
        "title": "Meenakshi Temple",
        "description": "Said to have the finest Indian architecture, Meenakshi Temple is situated on the bank of Vaigai River in the temple city Madurai. The temple is probably the most famous edifice in South India and is visited by both devotees and architecture lovers throughout the year.",
        "zoomLevel": 18,
        "video": "https://cdnl.iconscout.com/lottie/premium/preview-watermark/taj-mahal-6113726-5001424.mp4"
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
   // mainvideo.controls = "true"
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
