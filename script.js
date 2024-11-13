

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
  rocket_btn_animate()
})
rocket_btn.addEventListener("mouseleave",function(){
  rocket_btn_animate2()
})

function rocket_btn_animate(){
  gsap.to(rocket_btn,{
    textContent:"🔥",
    duratio:0.5,
    ease:"power4",
    scale:1.2
  })
}

function rocket_btn_animate2(){
  gsap.to(rocket_btn,{
    textContent:"🚀",
    duratio:0.5,
    ease:"power4",
    scale:1
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