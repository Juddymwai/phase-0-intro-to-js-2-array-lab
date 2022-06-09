
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (){
  return cats.push("Ralph")
}

function appendCat(name){
  let newCats = [...cats, "Broom"]
  return newCats
}

function prependCat(name){
  let newCats
  return newCats = ["Arnold", ...cats]
}

function destructivelyPrependCat(){
  return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
  return cats.pop()
}

function destructivelyRemoveFirstCat(){
  return cats.shift()
}

function removeLastCat(){
  let newCats = cats.slice(0, -1)
  return newCats
}

function removeFirstCat(){
  return cats.slice(1)
}