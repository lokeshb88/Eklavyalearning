

const colors=["red","green","blue","purple"];
let index=0;

function changeColor(){
    const changingText= document.getElementById("headname");
    changingText.style.color= colors[index];
    index= (index + 1) % colors.length;
}

setInterval(changeColor,1000);

function changeColour(){
    const changingText= document.getElementById("runningtext");
    changingText.style.color= colors[index];
    index= (index + 1) % colors.length;
}

setInterval(changeColor,1000);

function changeColour(){
    const changingText= document.getElementById("runningtext2");
    changingText.style.color= colors[index];
    index= (index + 1) % colors.length;
}

setInterval(changeColour,1000);



const photos = [
    'image.jpg',
    'image2.jpg',
    'image3.jpg'
  ];

  const photoContainer = document.getElementById('ourteam');
  let currentIndex = 0;

  function displayNextPhoto() {
    
    const img = document.createElement('img');
    img.src = photos[currentIndex]; // Set the image source
    photoContainer.innerHTML = ''; // Clear previous content
    photoContainer.appendChild(img); // Append the image to the container

    // Move to the next photo or loop back to the first photo
    currentIndex = (currentIndex + 1) % photos.length;
  }

  // Call the function to display the first photo
  displayNextPhoto();

  // Set interval to change photos every 3 seconds (3000 milliseconds)
  setInterval(displayNextPhoto, 1000);




  function toggleAnswer(questionNumber) {
    var answer = document.getElementById("answer" + questionNumber);
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

function toggleSidebar2() {
  var sidebar = document.getElementById("sidebar2");
  sidebar.classList.toggle("open");
}
