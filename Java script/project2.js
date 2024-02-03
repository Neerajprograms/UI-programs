const color = document.getElementById('paragraf')

function dark()
{
    color.classList.toggle('dark')

}

let arr = ['https://img.freepik.com/free-photo/hand-painted-watercolor-background_24972-2223.jpg?size=626&ext=jpg&ga=GA1.1.1375430730.1704621607&semt=sph',
'https://img.freepik.com/free-vector/valentines-day-background-with-hearts-pattern_1048-19784.jpg?w=740&t=st=1706033911~exp=1706034511~hmac=3d5b56cdd4f50fde78369087d133f8e0e9a9f62ac7640d188ad8f5fa1cecc435',
'https://img.freepik.com/free-vector/beautiful-delicate-floral-frame-background_23-2149065845.jpg?size=626&ext=jpg&ga=GA1.1.1375430730.1704621607&semt=sph',
'https://img.freepik.com/free-vector/abstract-watercolor-background_23-2149038179.jpg?size=626&ext=jpg&ga=GA1.1.1375430730.1704621607&semt=ais',
'https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149005676.jpg?size=626&ext=jpg&ga=GA1.1.1375430730.1704621607&semt=ais'];



function img()
{
    // Get a random index within the range of the array length
    let randomIndex = (Math.floor(Math.random() *4));

    // Change the background image of the element with ID "mainbody"
    document.getElementById('mainbody').style.backgroundImage = `url(${arr[randomIndex]})`;
   
    let bgcolors = (Math.round(Math.random()*10000000).toString(16));
    
    document.getElementById('btn').style.backgroundColor = '#' + bgcolors;

}