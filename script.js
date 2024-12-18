

const emojiDictionary = {
    // Emotions and Reactions
    "happy": "😊", "joy": "😁", "love": "❤️", "like": "😍", "dislike": "👎", "angry": "😠",
    "sad": "😢", "surprised": "😲", "laugh": "😂", "cry": "😭", "excited": "🤩", "nervous": "😬",
    "confused": "😕", "bored": "😐", "shy": "😳", "sleepy": "😴", "sick": "🤒", "worried": "😟",
    "scared": "😱", "frustrated": "😤", "relieved": "😌", "heartbroken": "💔", "celebrate": "🥳",
  
    // Food and Beverages
    "pizza": "🍕", "burger": "🍔", "fries": "🍟", "hotdog": "🌭", "coffee": "☕", "tea": "🍵",
    "beer": "🍺", "wine": "🍷", "water": "💧", "juice": "🧃", "cake": "🍰", "chocolate": "🍫",
    "cookie": "🍪", "popcorn": "🍿", "ice cream": "🍦", "sandwich": "🥪", "salad": "🥗",
    "bread": "🍞", "apple": "🍎", "banana": "🍌", "grapes": "🍇", "orange": "🍊",
  
    // Nature and Animals
    "sun": "☀️", "moon": "🌙", "star": "⭐", "cloud": "☁️", "rain": "🌧️", "snow": "❄️",
    "fire": "🔥", "tree": "🌳", "flower": "🌸", "rose": "🌹", "dog": "🐶", "cat": "🐱", "lion": "🦁",
    "tiger": "🐯", "fish": "🐟", "whale": "🐋", "bird": "🐦", "frog": "🐸", "elephant": "🐘",
  
    // Travel and Places
    "home": "🏠", "school": "🏫", "office": "🏢", "hospital": "🏥", "train": "🚆", "car": "🚗",
    "plane": "✈️", "bike": "🚲", "ship": "🚢", "mountain": "🏔️", "beach": "🏖️", "park": "🏞️",
    "hotel": "🏨", "stadium": "🏟️", "restaurant": "🍽️", "city": "🏙️", "village": "🏘️",
  
    // Objects and Tools
    "phone": "📱", "computer": "💻", "camera": "📷", "light bulb": "💡", "clock": "⏰",
    "calendar": "📅", "pencil": "✏️", "paint": "🎨", "hammer": "🔨", "key": "🔑", "medal": "🏅",
    "trophy": "🏆", "bag": "👜", "flag": "🏳️", "glasses": "👓", "backpack": "🎒", "watch": "⌚"
  };
  


const rocket_btn = document.querySelector(".hero-section-heading div")
rocket_btn.addEventListener("mouseenter",function(){
  rocket_btn_animate(rocket_btn,1.2,'🔥')
})
rocket_btn.addEventListener("mouseleave",function(){
  rocket_btn_animate2(rocket_btn,1,'🚀')
})

function rocket_btn_animate(x,scale,emote){
  gsap.to(x,{
    textContent:emote,
    duratio:0.5,
    ease:"power4",
    scale:scale
  })
}

function rocket_btn_animate2(x,scale,emote){
  gsap.to(x,{
    textContent:emote,
    duratio:0.5,
    ease:"power4",
    scale:scale
  })
}

let cardFrontList = document.querySelectorAll(".card-front")
cardFrontList.forEach(function(cardFront, index){
  cardFront.addEventListener("mouseenter", function(){
    if(index % 2 === 0) {
      cardFront.style.display = "none";
      cardFrontList[index+1].style.display = "flex";
    }
  })
})

cardFrontList.forEach(function(cardFront, index){
  console.log(index);
  
    if([0,1,4,5].includes(index)) {
      gsap.to(cardFrontList[index],{
        y:50,
        duration:1.25,
        yoyo:true,
        repeat:-1,
        ease:"power1"
      })
    }

    if([2,3].includes(index)) {
      gsap.to(cardFrontList[index],{
        y:-50,
        duration:1.25,
        yoyo:true,
        repeat:-1,
        ease:"power1"
      })
    }
  })

cardFrontList.forEach(function(cardFront, index){
  cardFront.addEventListener("mouseleave", function(){
    if(index % 2 !== 0) {
      cardFront.style.display = "none";
      cardFrontList[index-1].style.display = "flex";
    }
  })
})


const generate_btn = document.querySelector(".text-input-area div")
const textArea = document.querySelector("textarea")

textArea.addEventListener("click",function(){
  rocket_btn_animate2(generate_btn,1,'↗️')
})

document.addEventListener("click", function(event) {
  if (!generate_btn.contains(event.target)) {
      rocket_btn_animate2(generate_btn, 1, "↗️"); 
  }
});

let suggestionList = document.querySelectorAll(".suggestion")
suggestionList.forEach(function(suggestion){
  suggestion.addEventListener("click",function(e){
    textArea.value=(suggestion.textContent).trim()
    gsap.from(textArea,{
      y:e.y/100,
      x:e.x/100,
      duration:.4,
      ease:"power4"
    })
  })
})


gsap.to(document.querySelector(".cta_btn"),{
  scale:1.1,
  duration:2,
  yoyo:true,
  repeat:-1,
})

suggestionList.forEach(function(suggestion){
  suggestion.addEventListener("mouseenter",function(){
    gsap.to(suggestion,{
      backgroundColor:"#ffdc1b",
      duration:0.2,
      ease:"power3"
    })
  })

  suggestion.addEventListener("mouseleave",function(){
    gsap.to(suggestion,{
      backgroundColor:"#fff",
      duration:0.2,
      ease:"power3"
    })
  })
})

const copy_btn = document.querySelector(".result-area div")
copy_btn.addEventListener("click",function(){
  rocket_btn_animate(copy_btn,1.1,"📨")
  alert("Text copied to clipboard!")
  let textToCopy = document.querySelector(".result-area textarea").value;
  navigator.clipboard.writeText(textToCopy);
})

textArea.addEventListener("click",function(){
  rocket_btn_animate2(copy_btn,1,'📋')
})

document.addEventListener("click", function(event) {
  if (!copy_btn.contains(event.target)) {
      rocket_btn_animate2(copy_btn, 1, "📋"); 
  }
});

generate_btn.addEventListener("click",function(){
  if (textArea.value===''){
  alert("Please enter some text before generating results.");
  }
  else{
    rocket_btn_animate(generate_btn,1.1,"🔥")
    document.querySelector(".result-area").style.opacity=1,
    document.querySelector(".result-area").style.cursor="auto",
    document.querySelector(".result-area textarea").style.cursor="auto",
    document.querySelector(".result-area div").style.cursor="pointer"
    document.querySelector(".result-area textarea").value=textArea.value
  }
})