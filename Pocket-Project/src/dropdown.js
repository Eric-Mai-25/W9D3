const dogs = 
{
  "Corgi":"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};
const dropDownDog = document.getElementsByClassName("drop-down-dog-list")
const nav = document.getElementsByClassName("drop-down-dog-nav")
let dogLinks = document.getElementsByClassName('dog-link')

export function dogLinkCreator(dogs){
  let dog_links = []
  Object.keys(dogs).forEach((name)=>{
    let a = document.createElement('a')
    a.innerHTML = name
    a.href = dogs[name]
    let li = document.createElement('li')
    li.className = "dog-link"
    li.append(a)
    dog_links.push(li)
  })
  return dog_links
}

export const attachDogLinks = (dogs, htmlElement)=>{
  let dogLinks = dogLinkCreator(dogs)
  dogLinks.forEach((dog)=>{
    htmlElement[0].append(dog)
  })
}
const handleEnter = (e)=>{
  e.target.classList.remove("dog-link")
}

const handleLeave = (e)=>{
 console.log('out')
}

attachDogLinks(dogs, dropDownDog)

nav[0].addEventListener("mouseover", handleEnter)
nav[0].addEventListener("mouseout", handleLeave)
